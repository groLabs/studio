import { Network } from './network.interface';

export const chainIdByNetwork: Partial<Record<Network, number>> = {
  [Network.ARBITRUM_MAINNET]: 42161,
  [Network.AVALANCHE_MAINNET]: 43114,
  [Network.BINANCE_SMART_CHAIN_MAINNET]: 56,
  [Network.CELO_MAINNET]: 42220,
  [Network.ETHEREUM_MAINNET]: 1,
  [Network.FANTOM_OPERA_MAINNET]: 250,
  [Network.GNOSIS_MAINNET]: 100,
  [Network.HARMONY_MAINNET]: 1666600000,
  [Network.MOONRIVER_MAINNET]: 1285,
  [Network.OPTIMISM_MAINNET]: 10,
  [Network.POLYGON_MAINNET]: 137,
};
