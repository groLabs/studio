import { Inject } from '@nestjs/common';
import { compact } from 'lodash';

import { Register } from '~app-toolkit/decorators';
import { buildDollarDisplayItem } from '~app-toolkit/helpers/presentation/display-item.present';
import { getTokenImg } from '~app-toolkit/helpers/presentation/image.present';
import { APP_TOOLKIT, IAppToolkit } from '~lib';
import { ContractType } from '~position/contract.interface';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { AppTokenPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { QiDaoContractFactory } from '../contracts';
import { QI_DAO_DEFINITION } from '../qi-dao.definition';

const YIELD_TOKEN_ADDRESSES = [
  '0x22965e296d9a0cd0e917d6d70ef2573009f8a1bb', // camUSDC
  '0x7068ea5255cb05931efa8026bd04b18f3deb8b0b', // camWMATIC
  '0xe6c23289ba5a9f0ef31b8eb36241d5c800889b7b', // camDAI
  '0x0470cd31c8fcc42671465880ba81d631f0b76c1d', // camWETH
  '0xb3911259f435b28ec072e4ff6ff5a2c604fea0fb', // camUSDT
  '0x7068ea5255cb05931efa8026bd04b18f3deb8b0b', // camWMATIC
  '0xea4040b21cb68afb94889cb60834b13427cfc4eb', // camAAVE
  '0xba6273a78a23169e01317bd0f6338547f869e8df', // camWBTC
];

@Register.TokenPositionFetcher({
  appId: QI_DAO_DEFINITION.id,
  groupId: QI_DAO_DEFINITION.groups.yield.id,
  network: Network.POLYGON_MAINNET,
})
export class PolygonQiDaoYieldTokenFetcher implements PositionFetcher<AppTokenPosition> {
  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(QiDaoContractFactory) private readonly contractFactory: QiDaoContractFactory,
  ) {}

  async getPositions() {
    const network = Network.POLYGON_MAINNET;
    const multicall = this.appToolkit.getMulticall(network);
    const aaveTokens = await this.appToolkit.getAppTokenPositions({
      appId: 'aave-v2',
      groupIds: ['supply'],
      network,
    });

    const tokens = await Promise.all(
      YIELD_TOKEN_ADDRESSES.map(async tokenAddress => {
        const vaultContract = this.contractFactory.qiDaoYieldToken({ address: tokenAddress, network });
        const underlyingTokenAddressRaw = await multicall.wrap(vaultContract).Token();
        const underlyingTokenAddress = underlyingTokenAddressRaw.toLowerCase();
        const underlyingToken = aaveTokens.find(t => t.address === underlyingTokenAddress);
        if (!underlyingToken) return null;

        // Get symbol, decimals, supply, and ratio
        const underlyingTokenContract = this.contractFactory.erc20({ address: underlyingToken.address, network });
        const [symbol, supplyRaw, decimals, underlyingTokenBalanceRaw] = await Promise.all([
          multicall.wrap(vaultContract).symbol(),
          multicall.wrap(vaultContract).totalSupply(),
          multicall.wrap(vaultContract).decimals(),
          multicall.wrap(underlyingTokenContract).balanceOf(tokenAddress),
        ]);

        // Data Props
        const supply = Number(supplyRaw) / 10 ** decimals;
        const reserve = Number(underlyingTokenBalanceRaw) / 10 ** underlyingToken.decimals;
        const pricePerShare = reserve / supply;
        const liquidity = reserve * underlyingToken.price;
        const price = liquidity / supply;
        const tokens = [underlyingToken];

        // Display Props
        const label = symbol;
        const secondaryLabel = buildDollarDisplayItem(price);
        const images = [getTokenImg(underlyingToken.tokens[0].address, network)];

        const vaultToken: AppTokenPosition = {
          type: ContractType.APP_TOKEN,
          address: tokenAddress,
          appId: QI_DAO_DEFINITION.id,
          groupId: QI_DAO_DEFINITION.groups.yield.id,
          network,
          symbol,
          decimals,
          supply,
          price,
          pricePerShare,
          tokens,

          dataProps: {},

          displayProps: {
            label,
            secondaryLabel,
            images,
          },
        };

        return vaultToken;
      }),
    );

    return compact(tokens);
  }
}
