/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export declare namespace BeethovenxMasterChef {
  export type PoolInfoStruct = {
    allocPoint: BigNumberish;
    lastRewardBlock: BigNumberish;
    accBeetsPerShare: BigNumberish;
  };

  export type PoolInfoStructOutput = [BigNumber, BigNumber, BigNumber] & {
    allocPoint: BigNumber;
    lastRewardBlock: BigNumber;
    accBeetsPerShare: BigNumber;
  };
}

export interface BeethovenXMasterchefInterface extends utils.Interface {
  functions: {
    'POOL_PERCENTAGE()': FunctionFragment;
    'TREASURY_PERCENTAGE()': FunctionFragment;
    'add(uint256,address,address)': FunctionFragment;
    'beets()': FunctionFragment;
    'beetsPerBlock()': FunctionFragment;
    'deposit(uint256,uint256,address)': FunctionFragment;
    'emergencyWithdraw(uint256,address)': FunctionFragment;
    'harvest(uint256,address)': FunctionFragment;
    'harvestAll(uint256[],address)': FunctionFragment;
    'lpTokens(uint256)': FunctionFragment;
    'massUpdatePools(uint256[])': FunctionFragment;
    'owner()': FunctionFragment;
    'pendingBeets(uint256,address)': FunctionFragment;
    'poolInfo(uint256)': FunctionFragment;
    'poolLength()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'rewarder(uint256)': FunctionFragment;
    'set(uint256,uint256,address,bool)': FunctionFragment;
    'startBlock()': FunctionFragment;
    'totalAllocPoint()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'treasury(address)': FunctionFragment;
    'treasuryAddress()': FunctionFragment;
    'updateEmissionRate(uint256)': FunctionFragment;
    'updatePool(uint256)': FunctionFragment;
    'userInfo(uint256,address)': FunctionFragment;
    'withdrawAndHarvest(uint256,uint256,address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'POOL_PERCENTAGE'
      | 'TREASURY_PERCENTAGE'
      | 'add'
      | 'beets'
      | 'beetsPerBlock'
      | 'deposit'
      | 'emergencyWithdraw'
      | 'harvest'
      | 'harvestAll'
      | 'lpTokens'
      | 'massUpdatePools'
      | 'owner'
      | 'pendingBeets'
      | 'poolInfo'
      | 'poolLength'
      | 'renounceOwnership'
      | 'rewarder'
      | 'set'
      | 'startBlock'
      | 'totalAllocPoint'
      | 'transferOwnership'
      | 'treasury'
      | 'treasuryAddress'
      | 'updateEmissionRate'
      | 'updatePool'
      | 'userInfo'
      | 'withdrawAndHarvest',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'POOL_PERCENTAGE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'TREASURY_PERCENTAGE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'add', values: [BigNumberish, string, string]): string;
  encodeFunctionData(functionFragment: 'beets', values?: undefined): string;
  encodeFunctionData(functionFragment: 'beetsPerBlock', values?: undefined): string;
  encodeFunctionData(functionFragment: 'deposit', values: [BigNumberish, BigNumberish, string]): string;
  encodeFunctionData(functionFragment: 'emergencyWithdraw', values: [BigNumberish, string]): string;
  encodeFunctionData(functionFragment: 'harvest', values: [BigNumberish, string]): string;
  encodeFunctionData(functionFragment: 'harvestAll', values: [BigNumberish[], string]): string;
  encodeFunctionData(functionFragment: 'lpTokens', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'massUpdatePools', values: [BigNumberish[]]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pendingBeets', values: [BigNumberish, string]): string;
  encodeFunctionData(functionFragment: 'poolInfo', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'poolLength', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewarder', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'set', values: [BigNumberish, BigNumberish, string, boolean]): string;
  encodeFunctionData(functionFragment: 'startBlock', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalAllocPoint', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'treasury', values: [string]): string;
  encodeFunctionData(functionFragment: 'treasuryAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'updateEmissionRate', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'updatePool', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'userInfo', values: [BigNumberish, string]): string;
  encodeFunctionData(functionFragment: 'withdrawAndHarvest', values: [BigNumberish, BigNumberish, string]): string;

  decodeFunctionResult(functionFragment: 'POOL_PERCENTAGE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'TREASURY_PERCENTAGE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'add', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'beets', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'beetsPerBlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emergencyWithdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'harvest', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'harvestAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lpTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'massUpdatePools', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingBeets', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolLength', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewarder', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'set', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'startBlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalAllocPoint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'treasury', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'treasuryAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateEmissionRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updatePool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawAndHarvest', data: BytesLike): Result;

  events: {
    'Deposit(address,uint256,uint256,address)': EventFragment;
    'EmergencyWithdraw(address,uint256,uint256,address)': EventFragment;
    'Harvest(address,uint256,uint256)': EventFragment;
    'LogPoolAddition(uint256,uint256,address,address)': EventFragment;
    'LogSetPool(uint256,uint256,address,bool)': EventFragment;
    'LogUpdatePool(uint256,uint256,uint256,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'SetTreasuryAddress(address,address)': EventFragment;
    'UpdateEmissionRate(address,uint256)': EventFragment;
    'Withdraw(address,uint256,uint256,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EmergencyWithdraw'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Harvest'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogPoolAddition'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogSetPool'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogUpdatePool'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetTreasuryAddress'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UpdateEmissionRate'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment;
}

export interface DepositEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
  to: string;
}
export type DepositEvent = TypedEvent<[string, BigNumber, BigNumber, string], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface EmergencyWithdrawEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
  to: string;
}
export type EmergencyWithdrawEvent = TypedEvent<[string, BigNumber, BigNumber, string], EmergencyWithdrawEventObject>;

export type EmergencyWithdrawEventFilter = TypedEventFilter<EmergencyWithdrawEvent>;

export interface HarvestEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
}
export type HarvestEvent = TypedEvent<[string, BigNumber, BigNumber], HarvestEventObject>;

export type HarvestEventFilter = TypedEventFilter<HarvestEvent>;

export interface LogPoolAdditionEventObject {
  pid: BigNumber;
  allocPoint: BigNumber;
  lpToken: string;
  rewarder: string;
}
export type LogPoolAdditionEvent = TypedEvent<[BigNumber, BigNumber, string, string], LogPoolAdditionEventObject>;

export type LogPoolAdditionEventFilter = TypedEventFilter<LogPoolAdditionEvent>;

export interface LogSetPoolEventObject {
  pid: BigNumber;
  allocPoint: BigNumber;
  rewarder: string;
  overwrite: boolean;
}
export type LogSetPoolEvent = TypedEvent<[BigNumber, BigNumber, string, boolean], LogSetPoolEventObject>;

export type LogSetPoolEventFilter = TypedEventFilter<LogSetPoolEvent>;

export interface LogUpdatePoolEventObject {
  pid: BigNumber;
  lastRewardBlock: BigNumber;
  lpSupply: BigNumber;
  accBeetsPerShare: BigNumber;
}
export type LogUpdatePoolEvent = TypedEvent<[BigNumber, BigNumber, BigNumber, BigNumber], LogUpdatePoolEventObject>;

export type LogUpdatePoolEventFilter = TypedEventFilter<LogUpdatePoolEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface SetTreasuryAddressEventObject {
  oldAddress: string;
  newAddress: string;
}
export type SetTreasuryAddressEvent = TypedEvent<[string, string], SetTreasuryAddressEventObject>;

export type SetTreasuryAddressEventFilter = TypedEventFilter<SetTreasuryAddressEvent>;

export interface UpdateEmissionRateEventObject {
  user: string;
  _beetsPerSec: BigNumber;
}
export type UpdateEmissionRateEvent = TypedEvent<[string, BigNumber], UpdateEmissionRateEventObject>;

export type UpdateEmissionRateEventFilter = TypedEventFilter<UpdateEmissionRateEvent>;

export interface WithdrawEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
  to: string;
}
export type WithdrawEvent = TypedEvent<[string, BigNumber, BigNumber, string], WithdrawEventObject>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface BeethovenXMasterchef extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BeethovenXMasterchefInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    POOL_PERCENTAGE(overrides?: CallOverrides): Promise<[BigNumber]>;

    TREASURY_PERCENTAGE(overrides?: CallOverrides): Promise<[BigNumber]>;

    add(
      _allocPoint: BigNumberish,
      _lpToken: string,
      _rewarder: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    beets(overrides?: CallOverrides): Promise<[string]>;

    beetsPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      _pid: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    harvest(
      _pid: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    harvestAll(
      _pids: BigNumberish[],
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    lpTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    massUpdatePools(
      pids: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingBeets(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { pending: BigNumber }>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        allocPoint: BigNumber;
        lastRewardBlock: BigNumber;
        accBeetsPerShare: BigNumber;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    rewarder(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _rewarder: string,
      overwrite: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    startBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    treasury(
      _treasuryAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    treasuryAddress(overrides?: CallOverrides): Promise<[string]>;

    updateEmissionRate(
      _beetsPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;

    withdrawAndHarvest(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  POOL_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

  TREASURY_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

  add(
    _allocPoint: BigNumberish,
    _lpToken: string,
    _rewarder: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  beets(overrides?: CallOverrides): Promise<string>;

  beetsPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    _pid: BigNumberish,
    _amount: BigNumberish,
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    _pid: BigNumberish,
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  harvest(
    _pid: BigNumberish,
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  harvestAll(
    _pids: BigNumberish[],
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  lpTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  massUpdatePools(
    pids: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingBeets(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;

  poolInfo(
    arg0: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      allocPoint: BigNumber;
      lastRewardBlock: BigNumber;
      accBeetsPerShare: BigNumber;
    }
  >;

  poolLength(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  rewarder(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  set(
    _pid: BigNumberish,
    _allocPoint: BigNumberish,
    _rewarder: string,
    overwrite: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  startBlock(overrides?: CallOverrides): Promise<BigNumber>;

  totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  treasury(
    _treasuryAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  treasuryAddress(overrides?: CallOverrides): Promise<string>;

  updateEmissionRate(
    _beetsPerBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  updatePool(
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;

  withdrawAndHarvest(
    _pid: BigNumberish,
    _amount: BigNumberish,
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    POOL_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

    TREASURY_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

    add(_allocPoint: BigNumberish, _lpToken: string, _rewarder: string, overrides?: CallOverrides): Promise<void>;

    beets(overrides?: CallOverrides): Promise<string>;

    beetsPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(_pid: BigNumberish, _amount: BigNumberish, _to: string, overrides?: CallOverrides): Promise<void>;

    emergencyWithdraw(_pid: BigNumberish, _to: string, overrides?: CallOverrides): Promise<void>;

    harvest(_pid: BigNumberish, _to: string, overrides?: CallOverrides): Promise<void>;

    harvestAll(_pids: BigNumberish[], _to: string, overrides?: CallOverrides): Promise<void>;

    lpTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    massUpdatePools(pids: BigNumberish[], overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingBeets(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        allocPoint: BigNumber;
        lastRewardBlock: BigNumber;
        accBeetsPerShare: BigNumber;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewarder(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _rewarder: string,
      overwrite: boolean,
      overrides?: CallOverrides,
    ): Promise<void>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    treasury(_treasuryAddress: string, overrides?: CallOverrides): Promise<void>;

    treasuryAddress(overrides?: CallOverrides): Promise<string>;

    updateEmissionRate(_beetsPerBlock: BigNumberish, overrides?: CallOverrides): Promise<void>;

    updatePool(_pid: BigNumberish, overrides?: CallOverrides): Promise<BeethovenxMasterChef.PoolInfoStructOutput>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;

    withdrawAndHarvest(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _to: string,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    'Deposit(address,uint256,uint256,address)'(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
      to?: string | null,
    ): DepositEventFilter;
    Deposit(user?: string | null, pid?: BigNumberish | null, amount?: null, to?: string | null): DepositEventFilter;

    'EmergencyWithdraw(address,uint256,uint256,address)'(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
      to?: string | null,
    ): EmergencyWithdrawEventFilter;
    EmergencyWithdraw(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
      to?: string | null,
    ): EmergencyWithdrawEventFilter;

    'Harvest(address,uint256,uint256)'(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
    ): HarvestEventFilter;
    Harvest(user?: string | null, pid?: BigNumberish | null, amount?: null): HarvestEventFilter;

    'LogPoolAddition(uint256,uint256,address,address)'(
      pid?: BigNumberish | null,
      allocPoint?: null,
      lpToken?: string | null,
      rewarder?: string | null,
    ): LogPoolAdditionEventFilter;
    LogPoolAddition(
      pid?: BigNumberish | null,
      allocPoint?: null,
      lpToken?: string | null,
      rewarder?: string | null,
    ): LogPoolAdditionEventFilter;

    'LogSetPool(uint256,uint256,address,bool)'(
      pid?: BigNumberish | null,
      allocPoint?: null,
      rewarder?: string | null,
      overwrite?: null,
    ): LogSetPoolEventFilter;
    LogSetPool(
      pid?: BigNumberish | null,
      allocPoint?: null,
      rewarder?: string | null,
      overwrite?: null,
    ): LogSetPoolEventFilter;

    'LogUpdatePool(uint256,uint256,uint256,uint256)'(
      pid?: BigNumberish | null,
      lastRewardBlock?: null,
      lpSupply?: null,
      accBeetsPerShare?: null,
    ): LogUpdatePoolEventFilter;
    LogUpdatePool(
      pid?: BigNumberish | null,
      lastRewardBlock?: null,
      lpSupply?: null,
      accBeetsPerShare?: null,
    ): LogUpdatePoolEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;

    'SetTreasuryAddress(address,address)'(
      oldAddress?: string | null,
      newAddress?: string | null,
    ): SetTreasuryAddressEventFilter;
    SetTreasuryAddress(oldAddress?: string | null, newAddress?: string | null): SetTreasuryAddressEventFilter;

    'UpdateEmissionRate(address,uint256)'(user?: string | null, _beetsPerSec?: null): UpdateEmissionRateEventFilter;
    UpdateEmissionRate(user?: string | null, _beetsPerSec?: null): UpdateEmissionRateEventFilter;

    'Withdraw(address,uint256,uint256,address)'(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
      to?: string | null,
    ): WithdrawEventFilter;
    Withdraw(user?: string | null, pid?: BigNumberish | null, amount?: null, to?: string | null): WithdrawEventFilter;
  };

  estimateGas: {
    POOL_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

    TREASURY_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

    add(
      _allocPoint: BigNumberish,
      _lpToken: string,
      _rewarder: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    beets(overrides?: CallOverrides): Promise<BigNumber>;

    beetsPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    emergencyWithdraw(
      _pid: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    harvest(
      _pid: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    harvestAll(
      _pids: BigNumberish[],
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    lpTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    massUpdatePools(
      pids: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingBeets(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    rewarder(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _rewarder: string,
      overwrite: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    treasury(_treasuryAddress: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    treasuryAddress(overrides?: CallOverrides): Promise<BigNumber>;

    updateEmissionRate(
      _beetsPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    updatePool(_pid: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdrawAndHarvest(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    POOL_PERCENTAGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TREASURY_PERCENTAGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    add(
      _allocPoint: BigNumberish,
      _lpToken: string,
      _rewarder: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    beets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    beetsPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      _pid: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    harvest(
      _pid: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    harvestAll(
      _pids: BigNumberish[],
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    lpTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    massUpdatePools(
      pids: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingBeets(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    rewarder(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _rewarder: string,
      overwrite: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    startBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    treasury(
      _treasuryAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    treasuryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateEmissionRate(
      _beetsPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawAndHarvest(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
