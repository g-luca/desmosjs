import { Network } from "./types/Network";
import { Transaction } from "./types/Transaction";
import { Wallet } from "./types/Wallet";
export {
	Network, Transaction, Wallet,
}


export class DesmosJS {
	public static addressPath: string = `m/44'/852'/0'/0/0`;
	public static addressPrefix: string = 'desmos';
	public static chainId: string = 'desmos-mainnet';


	public static usernameRegex: RegExp = /[A-Za-z0-9_]{3,30}$/;
	public static addressRegex: RegExp = /^(desmos)[0-9A-Za-z]{39}$/;


	/**
	 * Ovverride the default Desmos chain configurations with custom ones.
	 * @param addressPath path of the Desmos chain. Default: `m/44'/852'/0'/0/0`.
	 * @param addressPrefix prefix of the Desmos chain. Default: `desmos`.
	 * @param chainId id of the Desmoschain.
	 */
	public static setDesmosChainConfiguration(addressPath: string = DesmosJS.addressPath, addressPrefix: string = DesmosJS.addressPrefix, chainId: string = DesmosJS.chainId) {
		DesmosJS.addressPath = addressPath;
		DesmosJS.addressPrefix = addressPrefix;
		DesmosJS.chainId = chainId;
	}
}


/* 
	From above the code is auto-generated using `proto-ts-exports`
	Don't delete or move anything after this comment
*/

/* tslint:disable:variable-name */
import {
	PubKey as _PubKey,
	PrivKey as _PrivKey,
} from './lib/proto/cosmos/crypto/secp256r1/keys';

import {
	LegacyAminoPubKey as _LegacyAminoPubKey,
} from './lib/proto/cosmos/crypto/multisig/keys';

import {
	MultiSignature as _MultiSignature,
	CompactBitArray as _CompactBitArray,
} from './lib/proto/cosmos/crypto/multisig/v1beta1/multisig';

import {
	Plan as _Plan,
	SoftwareUpgradeProposal as _SoftwareUpgradeProposal,
	CancelSoftwareUpgradeProposal as _CancelSoftwareUpgradeProposal,
} from './lib/proto/cosmos/upgrade/v1beta1/upgrade';

import {
	QueryCurrentPlanRequest as _QueryCurrentPlanRequest,
	QueryCurrentPlanResponse as _QueryCurrentPlanResponse,
	QueryAppliedPlanRequest as _QueryAppliedPlanRequest,
	QueryAppliedPlanResponse as _QueryAppliedPlanResponse,
	QueryUpgradedConsensusStateRequest as _QueryUpgradedConsensusStateRequest,
	QueryUpgradedConsensusStateResponse as _QueryUpgradedConsensusStateResponse,
} from './lib/proto/cosmos/upgrade/v1beta1/query';

import {
	MsgGrantAllowance as _MsgGrantAllowance,
	MsgGrantAllowanceResponse as _MsgGrantAllowanceResponse,
	MsgRevokeAllowance as _MsgRevokeAllowance,
	MsgRevokeAllowanceResponse as _MsgRevokeAllowanceResponse,
} from './lib/proto/cosmos/feegrant/v1beta1/tx';

import {
	BasicAllowance as _BasicAllowance,
	PeriodicAllowance as _PeriodicAllowance,
	AllowedMsgAllowance as _AllowedMsgAllowance,
	Grant as _Grant,
} from './lib/proto/cosmos/feegrant/v1beta1/feegrant';

import {
	QueryAllowanceRequest as _QueryAllowanceRequest,
	QueryAllowanceResponse as _QueryAllowanceResponse,
	QueryAllowancesRequest as _QueryAllowancesRequest,
	QueryAllowancesResponse as _QueryAllowancesResponse,
} from './lib/proto/cosmos/feegrant/v1beta1/query';

import {
	Minter as _Minter,
} from './lib/proto/cosmos/mint/v1beta1/mint';

import {
	QueryInflationRequest as _QueryInflationRequest,
	QueryInflationResponse as _QueryInflationResponse,
	QueryAnnualProvisionsRequest as _QueryAnnualProvisionsRequest,
	QueryAnnualProvisionsResponse as _QueryAnnualProvisionsResponse,
} from './lib/proto/cosmos/mint/v1beta1/query';

import {
	Equivocation as _Equivocation,
} from './lib/proto/cosmos/evidence/v1beta1/evidence';

import {
	MsgSubmitEvidence as _MsgSubmitEvidence,
	MsgSubmitEvidenceResponse as _MsgSubmitEvidenceResponse,
} from './lib/proto/cosmos/evidence/v1beta1/tx';

import {
	QueryEvidenceRequest as _QueryEvidenceRequest,
	QueryEvidenceResponse as _QueryEvidenceResponse,
	QueryAllEvidenceRequest as _QueryAllEvidenceRequest,
	QueryAllEvidenceResponse as _QueryAllEvidenceResponse,
} from './lib/proto/cosmos/evidence/v1beta1/query';

import {
	QueryAccountsRequest as _QueryAccountsRequest,
	QueryAccountsResponse as _QueryAccountsResponse,
	QueryAccountRequest as _QueryAccountRequest,
	QueryAccountResponse as _QueryAccountResponse,
} from './lib/proto/cosmos/auth/v1beta1/query';

import {
	BaseAccount as _BaseAccount,
	ModuleAccount as _ModuleAccount,
} from './lib/proto/cosmos/auth/v1beta1/auth';

import {
	MsgSend as _MsgSend,
	MsgSendResponse as _MsgSendResponse,
	MsgMultiSend as _MsgMultiSend,
	MsgMultiSendResponse as _MsgMultiSendResponse,
} from './lib/proto/cosmos/bank/v1beta1/tx';

import {
	SendAuthorization as _SendAuthorization,
} from './lib/proto/cosmos/bank/v1beta1/authz';

import {
	SendEnabled as _SendEnabled,
	Input as _Input,
	Output as _Output,
	DenomUnit as _DenomUnit,
	Metadata as _Metadata,
} from './lib/proto/cosmos/bank/v1beta1/bank';

import {
	QueryBalanceRequest as _QueryBalanceRequest,
	QueryBalanceResponse as _QueryBalanceResponse,
	QueryAllBalancesRequest as _QueryAllBalancesRequest,
	QueryAllBalancesResponse as _QueryAllBalancesResponse,
	QueryTotalSupplyRequest as _QueryTotalSupplyRequest,
	QueryTotalSupplyResponse as _QueryTotalSupplyResponse,
	QuerySupplyOfRequest as _QuerySupplyOfRequest,
	QuerySupplyOfResponse as _QuerySupplyOfResponse,
	QueryDenomsMetadataRequest as _QueryDenomsMetadataRequest,
	QueryDenomsMetadataResponse as _QueryDenomsMetadataResponse,
	QueryDenomMetadataRequest as _QueryDenomMetadataRequest,
	QueryDenomMetadataResponse as _QueryDenomMetadataResponse,
} from './lib/proto/cosmos/bank/v1beta1/query';

import {
	Capability as _Capability,
	Owner as _Owner,
	CapabilityOwners as _CapabilityOwners,
} from './lib/proto/cosmos/capability/v1beta1/capability';

import {
	MsgSetWithdrawAddress as _MsgSetWithdrawAddress,
	MsgSetWithdrawAddressResponse as _MsgSetWithdrawAddressResponse,
	MsgWithdrawDelegatorReward as _MsgWithdrawDelegatorReward,
	MsgWithdrawDelegatorRewardResponse as _MsgWithdrawDelegatorRewardResponse,
	MsgWithdrawValidatorCommission as _MsgWithdrawValidatorCommission,
	MsgWithdrawValidatorCommissionResponse as _MsgWithdrawValidatorCommissionResponse,
	MsgFundCommunityPool as _MsgFundCommunityPool,
	MsgFundCommunityPoolResponse as _MsgFundCommunityPoolResponse,
} from './lib/proto/cosmos/distribution/v1beta1/tx';

import {
	ValidatorHistoricalRewards as _ValidatorHistoricalRewards,
	ValidatorCurrentRewards as _ValidatorCurrentRewards,
	ValidatorAccumulatedCommission as _ValidatorAccumulatedCommission,
	ValidatorOutstandingRewards as _ValidatorOutstandingRewards,
	ValidatorSlashEvent as _ValidatorSlashEvent,
	ValidatorSlashEvents as _ValidatorSlashEvents,
	FeePool as _FeePool,
	CommunityPoolSpendProposal as _CommunityPoolSpendProposal,
	DelegatorStartingInfo as _DelegatorStartingInfo,
	DelegationDelegatorReward as _DelegationDelegatorReward,
	CommunityPoolSpendProposalWithDeposit as _CommunityPoolSpendProposalWithDeposit,
} from './lib/proto/cosmos/distribution/v1beta1/distribution';

import {
	QueryValidatorOutstandingRewardsRequest as _QueryValidatorOutstandingRewardsRequest,
	QueryValidatorOutstandingRewardsResponse as _QueryValidatorOutstandingRewardsResponse,
	QueryValidatorCommissionRequest as _QueryValidatorCommissionRequest,
	QueryValidatorCommissionResponse as _QueryValidatorCommissionResponse,
	QueryValidatorSlashesRequest as _QueryValidatorSlashesRequest,
	QueryValidatorSlashesResponse as _QueryValidatorSlashesResponse,
	QueryDelegationRewardsRequest as _QueryDelegationRewardsRequest,
	QueryDelegationRewardsResponse as _QueryDelegationRewardsResponse,
	QueryDelegationTotalRewardsRequest as _QueryDelegationTotalRewardsRequest,
	QueryDelegationTotalRewardsResponse as _QueryDelegationTotalRewardsResponse,
	QueryDelegatorValidatorsRequest as _QueryDelegatorValidatorsRequest,
	QueryDelegatorValidatorsResponse as _QueryDelegatorValidatorsResponse,
	QueryDelegatorWithdrawAddressRequest as _QueryDelegatorWithdrawAddressRequest,
	QueryDelegatorWithdrawAddressResponse as _QueryDelegatorWithdrawAddressResponse,
	QueryCommunityPoolRequest as _QueryCommunityPoolRequest,
	QueryCommunityPoolResponse as _QueryCommunityPoolResponse,
} from './lib/proto/cosmos/distribution/v1beta1/query';

import {
	MsgVerifyInvariant as _MsgVerifyInvariant,
	MsgVerifyInvariantResponse as _MsgVerifyInvariantResponse,
} from './lib/proto/cosmos/crisis/v1beta1/tx';

import {
	SignatureDescriptors as _SignatureDescriptors,
	SignatureDescriptor as _SignatureDescriptor,
	SignatureDescriptor_Data as _SignatureDescriptor_Data,
	SignatureDescriptor_Data_Single as _SignatureDescriptor_Data_Single,
	SignatureDescriptor_Data_Multi as _SignatureDescriptor_Data_Multi,
	SignMode as _SignMode,
} from './lib/proto/cosmos/tx/signing/v1beta1/signing';

import {
	Tx as _Tx,
	TxRaw as _TxRaw,
	SignDoc as _SignDoc,
	TxBody as _TxBody,
	AuthInfo as _AuthInfo,
	SignerInfo as _SignerInfo,
	ModeInfo as _ModeInfo,
	ModeInfo_Single as _ModeInfo_Single,
	ModeInfo_Multi as _ModeInfo_Multi,
	Fee as _Fee,
} from './lib/proto/cosmos/tx/v1beta1/tx';

import {
	GetTxsEventRequest as _GetTxsEventRequest,
	GetTxsEventResponse as _GetTxsEventResponse,
	BroadcastTxRequest as _BroadcastTxRequest,
	BroadcastTxResponse as _BroadcastTxResponse,
	SimulateRequest as _SimulateRequest,
	SimulateResponse as _SimulateResponse,
	GetTxRequest as _GetTxRequest,
	GetTxResponse as _GetTxResponse,
	OrderBy as _OrderBy,
	BroadcastMode as _BroadcastMode,
} from './lib/proto/cosmos/tx/v1beta1/service';

import {
	MsgCreateVestingAccount as _MsgCreateVestingAccount,
	MsgCreateVestingAccountResponse as _MsgCreateVestingAccountResponse,
} from './lib/proto/cosmos/vesting/v1beta1/tx';

import {
	BaseVestingAccount as _BaseVestingAccount,
	ContinuousVestingAccount as _ContinuousVestingAccount,
	DelayedVestingAccount as _DelayedVestingAccount,
	Period as _Period,
	PeriodicVestingAccount as _PeriodicVestingAccount,
	PermanentLockedAccount as _PermanentLockedAccount,
} from './lib/proto/cosmos/vesting/v1beta1/vesting';

import {
	MsgCreateValidator as _MsgCreateValidator,
	MsgCreateValidatorResponse as _MsgCreateValidatorResponse,
	MsgEditValidator as _MsgEditValidator,
	MsgEditValidatorResponse as _MsgEditValidatorResponse,
	MsgDelegate as _MsgDelegate,
	MsgDelegateResponse as _MsgDelegateResponse,
	MsgBeginRedelegate as _MsgBeginRedelegate,
	MsgBeginRedelegateResponse as _MsgBeginRedelegateResponse,
	MsgUndelegate as _MsgUndelegate,
	MsgUndelegateResponse as _MsgUndelegateResponse,
} from './lib/proto/cosmos/staking/v1beta1/tx';

import {
	StakeAuthorization as _StakeAuthorization,
	StakeAuthorization_Validators as _StakeAuthorization_Validators,
	AuthorizationType as _AuthorizationType,
} from './lib/proto/cosmos/staking/v1beta1/authz';

import {
	QueryValidatorsRequest as _QueryValidatorsRequest,
	QueryValidatorsResponse as _QueryValidatorsResponse,
	QueryValidatorRequest as _QueryValidatorRequest,
	QueryValidatorResponse as _QueryValidatorResponse,
	QueryValidatorDelegationsRequest as _QueryValidatorDelegationsRequest,
	QueryValidatorDelegationsResponse as _QueryValidatorDelegationsResponse,
	QueryValidatorUnbondingDelegationsRequest as _QueryValidatorUnbondingDelegationsRequest,
	QueryValidatorUnbondingDelegationsResponse as _QueryValidatorUnbondingDelegationsResponse,
	QueryDelegationRequest as _QueryDelegationRequest,
	QueryDelegationResponse as _QueryDelegationResponse,
	QueryUnbondingDelegationRequest as _QueryUnbondingDelegationRequest,
	QueryUnbondingDelegationResponse as _QueryUnbondingDelegationResponse,
	QueryDelegatorDelegationsRequest as _QueryDelegatorDelegationsRequest,
	QueryDelegatorDelegationsResponse as _QueryDelegatorDelegationsResponse,
	QueryDelegatorUnbondingDelegationsRequest as _QueryDelegatorUnbondingDelegationsRequest,
	QueryDelegatorUnbondingDelegationsResponse as _QueryDelegatorUnbondingDelegationsResponse,
	QueryRedelegationsRequest as _QueryRedelegationsRequest,
	QueryRedelegationsResponse as _QueryRedelegationsResponse,
	QueryDelegatorValidatorRequest as _QueryDelegatorValidatorRequest,
	QueryDelegatorValidatorResponse as _QueryDelegatorValidatorResponse,
	QueryHistoricalInfoRequest as _QueryHistoricalInfoRequest,
	QueryHistoricalInfoResponse as _QueryHistoricalInfoResponse,
	QueryPoolRequest as _QueryPoolRequest,
	QueryPoolResponse as _QueryPoolResponse,
} from './lib/proto/cosmos/staking/v1beta1/query';

import {
	HistoricalInfo as _HistoricalInfo,
	CommissionRates as _CommissionRates,
	Commission as _Commission,
	Description as _Description,
	Validator as _Validator,
	ValAddresses as _ValAddresses,
	DVPair as _DVPair,
	DVPairs as _DVPairs,
	DVVTriplet as _DVVTriplet,
	DVVTriplets as _DVVTriplets,
	Delegation as _Delegation,
	UnbondingDelegation as _UnbondingDelegation,
	UnbondingDelegationEntry as _UnbondingDelegationEntry,
	RedelegationEntry as _RedelegationEntry,
	Redelegation as _Redelegation,
	DelegationResponse as _DelegationResponse,
	RedelegationEntryResponse as _RedelegationEntryResponse,
	RedelegationResponse as _RedelegationResponse,
	Pool as _Pool,
	BondStatus as _BondStatus,
} from './lib/proto/cosmos/staking/v1beta1/staking';

import {
	MsgGrant as _MsgGrant,
	MsgExecResponse as _MsgExecResponse,
	MsgExec as _MsgExec,
	MsgGrantResponse as _MsgGrantResponse,
	MsgRevoke as _MsgRevoke,
	MsgRevokeResponse as _MsgRevokeResponse,
} from './lib/proto/cosmos/authz/v1beta1/tx';

import {
	GenericAuthorization as _GenericAuthorization,
} from './lib/proto/cosmos/authz/v1beta1/authz';

import {
	QueryGrantsRequest as _QueryGrantsRequest,
	QueryGrantsResponse as _QueryGrantsResponse,
} from './lib/proto/cosmos/authz/v1beta1/query';

import {
	EventGrant as _EventGrant,
	EventRevoke as _EventRevoke,
} from './lib/proto/cosmos/authz/v1beta1/event';

import {
	MsgUnjail as _MsgUnjail,
	MsgUnjailResponse as _MsgUnjailResponse,
} from './lib/proto/cosmos/slashing/v1beta1/tx';

import {
	ValidatorSigningInfo as _ValidatorSigningInfo,
} from './lib/proto/cosmos/slashing/v1beta1/slashing';

import {
	QuerySigningInfoRequest as _QuerySigningInfoRequest,
	QuerySigningInfoResponse as _QuerySigningInfoResponse,
	QuerySigningInfosRequest as _QuerySigningInfosRequest,
	QuerySigningInfosResponse as _QuerySigningInfosResponse,
} from './lib/proto/cosmos/slashing/v1beta1/query';

import {
	TxResponse as _TxResponse,
	ABCIMessageLog as _ABCIMessageLog,
	StringEvent as _StringEvent,
	GasInfo as _GasInfo,
	SimulationResponse as _SimulationResponse,
	MsgData as _MsgData,
	TxMsgData as _TxMsgData,
	SearchTxsResult as _SearchTxsResult,
} from './lib/proto/cosmos/base/abci/v1beta1/abci';

import {
	Pairs as _Pairs,
	Pair as _Pair,
} from './lib/proto/cosmos/base/kv/v1beta1/kv';

import {
	Snapshot as _Snapshot,
} from './lib/proto/cosmos/base/snapshots/v1beta1/snapshot';

import {
	Coin as _Coin,
	DecCoin as _DecCoin,
	IntProto as _IntProto,
	DecProto as _DecProto,
} from './lib/proto/cosmos/base/v1beta1/coin';

import {
	GetValidatorSetByHeightRequest as _GetValidatorSetByHeightRequest,
	GetValidatorSetByHeightResponse as _GetValidatorSetByHeightResponse,
	GetLatestValidatorSetRequest as _GetLatestValidatorSetRequest,
	GetLatestValidatorSetResponse as _GetLatestValidatorSetResponse,
	GetBlockByHeightRequest as _GetBlockByHeightRequest,
	GetBlockByHeightResponse as _GetBlockByHeightResponse,
	GetLatestBlockRequest as _GetLatestBlockRequest,
	GetLatestBlockResponse as _GetLatestBlockResponse,
	GetSyncingRequest as _GetSyncingRequest,
	GetSyncingResponse as _GetSyncingResponse,
	GetNodeInfoRequest as _GetNodeInfoRequest,
	GetNodeInfoResponse as _GetNodeInfoResponse,
	VersionInfo as _VersionInfo,
	Module as _Module,
} from './lib/proto/cosmos/base/tendermint/v1beta1/query';

import {
	PageRequest as _PageRequest,
	PageResponse as _PageResponse,
} from './lib/proto/cosmos/base/query/v1beta1/pagination';

import {
	SnapshotItem as _SnapshotItem,
	SnapshotStoreItem as _SnapshotStoreItem,
	SnapshotIAVLItem as _SnapshotIAVLItem,
} from './lib/proto/cosmos/base/store/v1beta1/snapshot';

import {
	StoreKVPair as _StoreKVPair,
} from './lib/proto/cosmos/base/store/v1beta1/listening';

import {
	CommitInfo as _CommitInfo,
	StoreInfo as _StoreInfo,
	CommitID as _CommitID,
} from './lib/proto/cosmos/base/store/v1beta1/commit_info';

import {
	ListAllInterfacesRequest as _ListAllInterfacesRequest,
	ListAllInterfacesResponse as _ListAllInterfacesResponse,
	ListImplementationsRequest as _ListImplementationsRequest,
	ListImplementationsResponse as _ListImplementationsResponse,
} from './lib/proto/cosmos/base/reflection/v1beta1/reflection';

import {
	AppDescriptor as _AppDescriptor,
	TxDescriptor as _TxDescriptor,
	AuthnDescriptor as _AuthnDescriptor,
	SigningModeDescriptor as _SigningModeDescriptor,
	ChainDescriptor as _ChainDescriptor,
	CodecDescriptor as _CodecDescriptor,
	InterfaceDescriptor as _InterfaceDescriptor,
	InterfaceImplementerDescriptor as _InterfaceImplementerDescriptor,
	InterfaceAcceptingMessageDescriptor as _InterfaceAcceptingMessageDescriptor,
	ConfigurationDescriptor as _ConfigurationDescriptor,
	MsgDescriptor as _MsgDescriptor,
	GetAuthnDescriptorRequest as _GetAuthnDescriptorRequest,
	GetAuthnDescriptorResponse as _GetAuthnDescriptorResponse,
	GetChainDescriptorRequest as _GetChainDescriptorRequest,
	GetChainDescriptorResponse as _GetChainDescriptorResponse,
	GetCodecDescriptorRequest as _GetCodecDescriptorRequest,
	GetCodecDescriptorResponse as _GetCodecDescriptorResponse,
	GetConfigurationDescriptorRequest as _GetConfigurationDescriptorRequest,
	GetConfigurationDescriptorResponse as _GetConfigurationDescriptorResponse,
	GetQueryServicesDescriptorRequest as _GetQueryServicesDescriptorRequest,
	GetQueryServicesDescriptorResponse as _GetQueryServicesDescriptorResponse,
	GetTxDescriptorRequest as _GetTxDescriptorRequest,
	GetTxDescriptorResponse as _GetTxDescriptorResponse,
	QueryServicesDescriptor as _QueryServicesDescriptor,
	QueryServiceDescriptor as _QueryServiceDescriptor,
	QueryMethodDescriptor as _QueryMethodDescriptor,
} from './lib/proto/cosmos/base/reflection/v2alpha1/reflection';

import {
	WeightedVoteOption as _WeightedVoteOption,
	TextProposal as _TextProposal,
	Deposit as _Deposit,
	Proposal as _Proposal,
	TallyResult as _TallyResult,
	Vote as _Vote,
	DepositParams as _DepositParams,
	VotingParams as _VotingParams,
	TallyParams as _TallyParams,
	VoteOption as _VoteOption,
	ProposalStatus as _ProposalStatus,
} from './lib/proto/cosmos/gov/v1beta1/gov';

import {
	MsgSubmitProposal as _MsgSubmitProposal,
	MsgSubmitProposalResponse as _MsgSubmitProposalResponse,
	MsgVote as _MsgVote,
	MsgVoteResponse as _MsgVoteResponse,
	MsgVoteWeighted as _MsgVoteWeighted,
	MsgVoteWeightedResponse as _MsgVoteWeightedResponse,
	MsgDeposit as _MsgDeposit,
	MsgDepositResponse as _MsgDepositResponse,
} from './lib/proto/cosmos/gov/v1beta1/tx';

import {
	QueryProposalRequest as _QueryProposalRequest,
	QueryProposalResponse as _QueryProposalResponse,
	QueryProposalsRequest as _QueryProposalsRequest,
	QueryProposalsResponse as _QueryProposalsResponse,
	QueryVoteRequest as _QueryVoteRequest,
	QueryVoteResponse as _QueryVoteResponse,
	QueryVotesRequest as _QueryVotesRequest,
	QueryVotesResponse as _QueryVotesResponse,
	QueryDepositRequest as _QueryDepositRequest,
	QueryDepositResponse as _QueryDepositResponse,
	QueryDepositsRequest as _QueryDepositsRequest,
	QueryDepositsResponse as _QueryDepositsResponse,
	QueryTallyResultRequest as _QueryTallyResultRequest,
	QueryTallyResultResponse as _QueryTallyResultResponse,
} from './lib/proto/cosmos/gov/v1beta1/query';
export const CosmosPubKey = _PubKey;
export type CosmosPubKey = _PubKey;

export const CosmosPrivKey = _PrivKey;
export type CosmosPrivKey = _PrivKey;

export const CosmosLegacyAminoPubKey = _LegacyAminoPubKey;
export type CosmosLegacyAminoPubKey = _LegacyAminoPubKey;

export const CosmosMultiSignature = _MultiSignature;
export type CosmosMultiSignature = _MultiSignature;

export const CosmosCompactBitArray = _CompactBitArray;
export type CosmosCompactBitArray = _CompactBitArray;

export const CosmosPlan = _Plan;
export type CosmosPlan = _Plan;

export const CosmosSoftwareUpgradeProposal = _SoftwareUpgradeProposal;
export type CosmosSoftwareUpgradeProposal = _SoftwareUpgradeProposal;

export const CosmosCancelSoftwareUpgradeProposal = _CancelSoftwareUpgradeProposal;
export type CosmosCancelSoftwareUpgradeProposal = _CancelSoftwareUpgradeProposal;

export const CosmosQueryCurrentPlanRequest = _QueryCurrentPlanRequest;
export type CosmosQueryCurrentPlanRequest = _QueryCurrentPlanRequest;

export const CosmosQueryCurrentPlanResponse = _QueryCurrentPlanResponse;
export type CosmosQueryCurrentPlanResponse = _QueryCurrentPlanResponse;

export const CosmosQueryAppliedPlanRequest = _QueryAppliedPlanRequest;
export type CosmosQueryAppliedPlanRequest = _QueryAppliedPlanRequest;

export const CosmosQueryAppliedPlanResponse = _QueryAppliedPlanResponse;
export type CosmosQueryAppliedPlanResponse = _QueryAppliedPlanResponse;

export const CosmosQueryUpgradedConsensusStateRequest = _QueryUpgradedConsensusStateRequest;
export type CosmosQueryUpgradedConsensusStateRequest = _QueryUpgradedConsensusStateRequest;

export const CosmosQueryUpgradedConsensusStateResponse = _QueryUpgradedConsensusStateResponse;
export type CosmosQueryUpgradedConsensusStateResponse = _QueryUpgradedConsensusStateResponse;

export const CosmosMsgGrantAllowance = _MsgGrantAllowance;
export type CosmosMsgGrantAllowance = _MsgGrantAllowance;

export const CosmosMsgGrantAllowanceResponse = _MsgGrantAllowanceResponse;
export type CosmosMsgGrantAllowanceResponse = _MsgGrantAllowanceResponse;

export const CosmosMsgRevokeAllowance = _MsgRevokeAllowance;
export type CosmosMsgRevokeAllowance = _MsgRevokeAllowance;

export const CosmosMsgRevokeAllowanceResponse = _MsgRevokeAllowanceResponse;
export type CosmosMsgRevokeAllowanceResponse = _MsgRevokeAllowanceResponse;

export const CosmosBasicAllowance = _BasicAllowance;
export type CosmosBasicAllowance = _BasicAllowance;

export const CosmosPeriodicAllowance = _PeriodicAllowance;
export type CosmosPeriodicAllowance = _PeriodicAllowance;

export const CosmosAllowedMsgAllowance = _AllowedMsgAllowance;
export type CosmosAllowedMsgAllowance = _AllowedMsgAllowance;

export const CosmosGrant = _Grant;
export type CosmosGrant = _Grant;

export const CosmosQueryAllowanceRequest = _QueryAllowanceRequest;
export type CosmosQueryAllowanceRequest = _QueryAllowanceRequest;

export const CosmosQueryAllowanceResponse = _QueryAllowanceResponse;
export type CosmosQueryAllowanceResponse = _QueryAllowanceResponse;

export const CosmosQueryAllowancesRequest = _QueryAllowancesRequest;
export type CosmosQueryAllowancesRequest = _QueryAllowancesRequest;

export const CosmosQueryAllowancesResponse = _QueryAllowancesResponse;
export type CosmosQueryAllowancesResponse = _QueryAllowancesResponse;

export const CosmosMinter = _Minter;
export type CosmosMinter = _Minter;

export const CosmosQueryInflationRequest = _QueryInflationRequest;
export type CosmosQueryInflationRequest = _QueryInflationRequest;

export const CosmosQueryInflationResponse = _QueryInflationResponse;
export type CosmosQueryInflationResponse = _QueryInflationResponse;

export const CosmosQueryAnnualProvisionsRequest = _QueryAnnualProvisionsRequest;
export type CosmosQueryAnnualProvisionsRequest = _QueryAnnualProvisionsRequest;

export const CosmosQueryAnnualProvisionsResponse = _QueryAnnualProvisionsResponse;
export type CosmosQueryAnnualProvisionsResponse = _QueryAnnualProvisionsResponse;

export const CosmosEquivocation = _Equivocation;
export type CosmosEquivocation = _Equivocation;

export const CosmosMsgSubmitEvidence = _MsgSubmitEvidence;
export type CosmosMsgSubmitEvidence = _MsgSubmitEvidence;

export const CosmosMsgSubmitEvidenceResponse = _MsgSubmitEvidenceResponse;
export type CosmosMsgSubmitEvidenceResponse = _MsgSubmitEvidenceResponse;

export const CosmosQueryEvidenceRequest = _QueryEvidenceRequest;
export type CosmosQueryEvidenceRequest = _QueryEvidenceRequest;

export const CosmosQueryEvidenceResponse = _QueryEvidenceResponse;
export type CosmosQueryEvidenceResponse = _QueryEvidenceResponse;

export const CosmosQueryAllEvidenceRequest = _QueryAllEvidenceRequest;
export type CosmosQueryAllEvidenceRequest = _QueryAllEvidenceRequest;

export const CosmosQueryAllEvidenceResponse = _QueryAllEvidenceResponse;
export type CosmosQueryAllEvidenceResponse = _QueryAllEvidenceResponse;

export const CosmosQueryAccountsRequest = _QueryAccountsRequest;
export type CosmosQueryAccountsRequest = _QueryAccountsRequest;

export const CosmosQueryAccountsResponse = _QueryAccountsResponse;
export type CosmosQueryAccountsResponse = _QueryAccountsResponse;

export const CosmosQueryAccountRequest = _QueryAccountRequest;
export type CosmosQueryAccountRequest = _QueryAccountRequest;

export const CosmosQueryAccountResponse = _QueryAccountResponse;
export type CosmosQueryAccountResponse = _QueryAccountResponse;

export const CosmosBaseAccount = _BaseAccount;
export type CosmosBaseAccount = _BaseAccount;

export const CosmosModuleAccount = _ModuleAccount;
export type CosmosModuleAccount = _ModuleAccount;

export const CosmosMsgSend = _MsgSend;
export type CosmosMsgSend = _MsgSend;

export const CosmosMsgSendResponse = _MsgSendResponse;
export type CosmosMsgSendResponse = _MsgSendResponse;

export const CosmosMsgMultiSend = _MsgMultiSend;
export type CosmosMsgMultiSend = _MsgMultiSend;

export const CosmosMsgMultiSendResponse = _MsgMultiSendResponse;
export type CosmosMsgMultiSendResponse = _MsgMultiSendResponse;

export const CosmosSendAuthorization = _SendAuthorization;
export type CosmosSendAuthorization = _SendAuthorization;

export const CosmosSendEnabled = _SendEnabled;
export type CosmosSendEnabled = _SendEnabled;

export const CosmosInput = _Input;
export type CosmosInput = _Input;

export const CosmosOutput = _Output;
export type CosmosOutput = _Output;

export const CosmosDenomUnit = _DenomUnit;
export type CosmosDenomUnit = _DenomUnit;

export const CosmosMetadata = _Metadata;
export type CosmosMetadata = _Metadata;

export const CosmosQueryBalanceRequest = _QueryBalanceRequest;
export type CosmosQueryBalanceRequest = _QueryBalanceRequest;

export const CosmosQueryBalanceResponse = _QueryBalanceResponse;
export type CosmosQueryBalanceResponse = _QueryBalanceResponse;

export const CosmosQueryAllBalancesRequest = _QueryAllBalancesRequest;
export type CosmosQueryAllBalancesRequest = _QueryAllBalancesRequest;

export const CosmosQueryAllBalancesResponse = _QueryAllBalancesResponse;
export type CosmosQueryAllBalancesResponse = _QueryAllBalancesResponse;

export const CosmosQueryTotalSupplyRequest = _QueryTotalSupplyRequest;
export type CosmosQueryTotalSupplyRequest = _QueryTotalSupplyRequest;

export const CosmosQueryTotalSupplyResponse = _QueryTotalSupplyResponse;
export type CosmosQueryTotalSupplyResponse = _QueryTotalSupplyResponse;

export const CosmosQuerySupplyOfRequest = _QuerySupplyOfRequest;
export type CosmosQuerySupplyOfRequest = _QuerySupplyOfRequest;

export const CosmosQuerySupplyOfResponse = _QuerySupplyOfResponse;
export type CosmosQuerySupplyOfResponse = _QuerySupplyOfResponse;

export const CosmosQueryDenomsMetadataRequest = _QueryDenomsMetadataRequest;
export type CosmosQueryDenomsMetadataRequest = _QueryDenomsMetadataRequest;

export const CosmosQueryDenomsMetadataResponse = _QueryDenomsMetadataResponse;
export type CosmosQueryDenomsMetadataResponse = _QueryDenomsMetadataResponse;

export const CosmosQueryDenomMetadataRequest = _QueryDenomMetadataRequest;
export type CosmosQueryDenomMetadataRequest = _QueryDenomMetadataRequest;

export const CosmosQueryDenomMetadataResponse = _QueryDenomMetadataResponse;
export type CosmosQueryDenomMetadataResponse = _QueryDenomMetadataResponse;

export const CosmosCapability = _Capability;
export type CosmosCapability = _Capability;

export const CosmosOwner = _Owner;
export type CosmosOwner = _Owner;

export const CosmosCapabilityOwners = _CapabilityOwners;
export type CosmosCapabilityOwners = _CapabilityOwners;

export const CosmosMsgSetWithdrawAddress = _MsgSetWithdrawAddress;
export type CosmosMsgSetWithdrawAddress = _MsgSetWithdrawAddress;

export const CosmosMsgSetWithdrawAddressResponse = _MsgSetWithdrawAddressResponse;
export type CosmosMsgSetWithdrawAddressResponse = _MsgSetWithdrawAddressResponse;

export const CosmosMsgWithdrawDelegatorReward = _MsgWithdrawDelegatorReward;
export type CosmosMsgWithdrawDelegatorReward = _MsgWithdrawDelegatorReward;

export const CosmosMsgWithdrawDelegatorRewardResponse = _MsgWithdrawDelegatorRewardResponse;
export type CosmosMsgWithdrawDelegatorRewardResponse = _MsgWithdrawDelegatorRewardResponse;

export const CosmosMsgWithdrawValidatorCommission = _MsgWithdrawValidatorCommission;
export type CosmosMsgWithdrawValidatorCommission = _MsgWithdrawValidatorCommission;

export const CosmosMsgWithdrawValidatorCommissionResponse = _MsgWithdrawValidatorCommissionResponse;
export type CosmosMsgWithdrawValidatorCommissionResponse = _MsgWithdrawValidatorCommissionResponse;

export const CosmosMsgFundCommunityPool = _MsgFundCommunityPool;
export type CosmosMsgFundCommunityPool = _MsgFundCommunityPool;

export const CosmosMsgFundCommunityPoolResponse = _MsgFundCommunityPoolResponse;
export type CosmosMsgFundCommunityPoolResponse = _MsgFundCommunityPoolResponse;

export const CosmosValidatorHistoricalRewards = _ValidatorHistoricalRewards;
export type CosmosValidatorHistoricalRewards = _ValidatorHistoricalRewards;

export const CosmosValidatorCurrentRewards = _ValidatorCurrentRewards;
export type CosmosValidatorCurrentRewards = _ValidatorCurrentRewards;

export const CosmosValidatorAccumulatedCommission = _ValidatorAccumulatedCommission;
export type CosmosValidatorAccumulatedCommission = _ValidatorAccumulatedCommission;

export const CosmosValidatorOutstandingRewards = _ValidatorOutstandingRewards;
export type CosmosValidatorOutstandingRewards = _ValidatorOutstandingRewards;

export const CosmosValidatorSlashEvent = _ValidatorSlashEvent;
export type CosmosValidatorSlashEvent = _ValidatorSlashEvent;

export const CosmosValidatorSlashEvents = _ValidatorSlashEvents;
export type CosmosValidatorSlashEvents = _ValidatorSlashEvents;

export const CosmosFeePool = _FeePool;
export type CosmosFeePool = _FeePool;

export const CosmosCommunityPoolSpendProposal = _CommunityPoolSpendProposal;
export type CosmosCommunityPoolSpendProposal = _CommunityPoolSpendProposal;

export const CosmosDelegatorStartingInfo = _DelegatorStartingInfo;
export type CosmosDelegatorStartingInfo = _DelegatorStartingInfo;

export const CosmosDelegationDelegatorReward = _DelegationDelegatorReward;
export type CosmosDelegationDelegatorReward = _DelegationDelegatorReward;

export const CosmosCommunityPoolSpendProposalWithDeposit = _CommunityPoolSpendProposalWithDeposit;
export type CosmosCommunityPoolSpendProposalWithDeposit = _CommunityPoolSpendProposalWithDeposit;

export const CosmosQueryValidatorOutstandingRewardsRequest = _QueryValidatorOutstandingRewardsRequest;
export type CosmosQueryValidatorOutstandingRewardsRequest = _QueryValidatorOutstandingRewardsRequest;

export const CosmosQueryValidatorOutstandingRewardsResponse = _QueryValidatorOutstandingRewardsResponse;
export type CosmosQueryValidatorOutstandingRewardsResponse = _QueryValidatorOutstandingRewardsResponse;

export const CosmosQueryValidatorCommissionRequest = _QueryValidatorCommissionRequest;
export type CosmosQueryValidatorCommissionRequest = _QueryValidatorCommissionRequest;

export const CosmosQueryValidatorCommissionResponse = _QueryValidatorCommissionResponse;
export type CosmosQueryValidatorCommissionResponse = _QueryValidatorCommissionResponse;

export const CosmosQueryValidatorSlashesRequest = _QueryValidatorSlashesRequest;
export type CosmosQueryValidatorSlashesRequest = _QueryValidatorSlashesRequest;

export const CosmosQueryValidatorSlashesResponse = _QueryValidatorSlashesResponse;
export type CosmosQueryValidatorSlashesResponse = _QueryValidatorSlashesResponse;

export const CosmosQueryDelegationRewardsRequest = _QueryDelegationRewardsRequest;
export type CosmosQueryDelegationRewardsRequest = _QueryDelegationRewardsRequest;

export const CosmosQueryDelegationRewardsResponse = _QueryDelegationRewardsResponse;
export type CosmosQueryDelegationRewardsResponse = _QueryDelegationRewardsResponse;

export const CosmosQueryDelegationTotalRewardsRequest = _QueryDelegationTotalRewardsRequest;
export type CosmosQueryDelegationTotalRewardsRequest = _QueryDelegationTotalRewardsRequest;

export const CosmosQueryDelegationTotalRewardsResponse = _QueryDelegationTotalRewardsResponse;
export type CosmosQueryDelegationTotalRewardsResponse = _QueryDelegationTotalRewardsResponse;

export const CosmosQueryDelegatorValidatorsRequest = _QueryDelegatorValidatorsRequest;
export type CosmosQueryDelegatorValidatorsRequest = _QueryDelegatorValidatorsRequest;

export const CosmosQueryDelegatorValidatorsResponse = _QueryDelegatorValidatorsResponse;
export type CosmosQueryDelegatorValidatorsResponse = _QueryDelegatorValidatorsResponse;

export const CosmosQueryDelegatorWithdrawAddressRequest = _QueryDelegatorWithdrawAddressRequest;
export type CosmosQueryDelegatorWithdrawAddressRequest = _QueryDelegatorWithdrawAddressRequest;

export const CosmosQueryDelegatorWithdrawAddressResponse = _QueryDelegatorWithdrawAddressResponse;
export type CosmosQueryDelegatorWithdrawAddressResponse = _QueryDelegatorWithdrawAddressResponse;

export const CosmosQueryCommunityPoolRequest = _QueryCommunityPoolRequest;
export type CosmosQueryCommunityPoolRequest = _QueryCommunityPoolRequest;

export const CosmosQueryCommunityPoolResponse = _QueryCommunityPoolResponse;
export type CosmosQueryCommunityPoolResponse = _QueryCommunityPoolResponse;

export const CosmosMsgVerifyInvariant = _MsgVerifyInvariant;
export type CosmosMsgVerifyInvariant = _MsgVerifyInvariant;

export const CosmosMsgVerifyInvariantResponse = _MsgVerifyInvariantResponse;
export type CosmosMsgVerifyInvariantResponse = _MsgVerifyInvariantResponse;

export const CosmosSignatureDescriptors = _SignatureDescriptors;
export type CosmosSignatureDescriptors = _SignatureDescriptors;

export const CosmosSignatureDescriptor = _SignatureDescriptor;
export type CosmosSignatureDescriptor = _SignatureDescriptor;

export const CosmosSignatureDescriptor_Data = _SignatureDescriptor_Data;
export type CosmosSignatureDescriptor_Data = _SignatureDescriptor_Data;

export const CosmosSignatureDescriptor_Data_Single = _SignatureDescriptor_Data_Single;
export type CosmosSignatureDescriptor_Data_Single = _SignatureDescriptor_Data_Single;

export const CosmosSignatureDescriptor_Data_Multi = _SignatureDescriptor_Data_Multi;
export type CosmosSignatureDescriptor_Data_Multi = _SignatureDescriptor_Data_Multi;

export const CosmosSignMode = _SignMode;
export type CosmosSignMode = _SignMode;

export const CosmosTx = _Tx;
export type CosmosTx = _Tx;

export const CosmosTxRaw = _TxRaw;
export type CosmosTxRaw = _TxRaw;

export const CosmosSignDoc = _SignDoc;
export type CosmosSignDoc = _SignDoc;

export const CosmosTxBody = _TxBody;
export type CosmosTxBody = _TxBody;

export const CosmosAuthInfo = _AuthInfo;
export type CosmosAuthInfo = _AuthInfo;

export const CosmosSignerInfo = _SignerInfo;
export type CosmosSignerInfo = _SignerInfo;

export const CosmosModeInfo = _ModeInfo;
export type CosmosModeInfo = _ModeInfo;

export const CosmosModeInfo_Single = _ModeInfo_Single;
export type CosmosModeInfo_Single = _ModeInfo_Single;

export const CosmosModeInfo_Multi = _ModeInfo_Multi;
export type CosmosModeInfo_Multi = _ModeInfo_Multi;

export const CosmosFee = _Fee;
export type CosmosFee = _Fee;

export const CosmosGetTxsEventRequest = _GetTxsEventRequest;
export type CosmosGetTxsEventRequest = _GetTxsEventRequest;

export const CosmosGetTxsEventResponse = _GetTxsEventResponse;
export type CosmosGetTxsEventResponse = _GetTxsEventResponse;

export const CosmosBroadcastTxRequest = _BroadcastTxRequest;
export type CosmosBroadcastTxRequest = _BroadcastTxRequest;

export const CosmosBroadcastTxResponse = _BroadcastTxResponse;
export type CosmosBroadcastTxResponse = _BroadcastTxResponse;

export const CosmosSimulateRequest = _SimulateRequest;
export type CosmosSimulateRequest = _SimulateRequest;

export const CosmosSimulateResponse = _SimulateResponse;
export type CosmosSimulateResponse = _SimulateResponse;

export const CosmosGetTxRequest = _GetTxRequest;
export type CosmosGetTxRequest = _GetTxRequest;

export const CosmosGetTxResponse = _GetTxResponse;
export type CosmosGetTxResponse = _GetTxResponse;

export const CosmosOrderBy = _OrderBy;
export type CosmosOrderBy = _OrderBy;

export const CosmosBroadcastMode = _BroadcastMode;
export type CosmosBroadcastMode = _BroadcastMode;

export const CosmosMsgCreateVestingAccount = _MsgCreateVestingAccount;
export type CosmosMsgCreateVestingAccount = _MsgCreateVestingAccount;

export const CosmosMsgCreateVestingAccountResponse = _MsgCreateVestingAccountResponse;
export type CosmosMsgCreateVestingAccountResponse = _MsgCreateVestingAccountResponse;

export const CosmosBaseVestingAccount = _BaseVestingAccount;
export type CosmosBaseVestingAccount = _BaseVestingAccount;

export const CosmosContinuousVestingAccount = _ContinuousVestingAccount;
export type CosmosContinuousVestingAccount = _ContinuousVestingAccount;

export const CosmosDelayedVestingAccount = _DelayedVestingAccount;
export type CosmosDelayedVestingAccount = _DelayedVestingAccount;

export const CosmosPeriod = _Period;
export type CosmosPeriod = _Period;

export const CosmosPeriodicVestingAccount = _PeriodicVestingAccount;
export type CosmosPeriodicVestingAccount = _PeriodicVestingAccount;

export const CosmosPermanentLockedAccount = _PermanentLockedAccount;
export type CosmosPermanentLockedAccount = _PermanentLockedAccount;

export const CosmosMsgCreateValidator = _MsgCreateValidator;
export type CosmosMsgCreateValidator = _MsgCreateValidator;

export const CosmosMsgCreateValidatorResponse = _MsgCreateValidatorResponse;
export type CosmosMsgCreateValidatorResponse = _MsgCreateValidatorResponse;

export const CosmosMsgEditValidator = _MsgEditValidator;
export type CosmosMsgEditValidator = _MsgEditValidator;

export const CosmosMsgEditValidatorResponse = _MsgEditValidatorResponse;
export type CosmosMsgEditValidatorResponse = _MsgEditValidatorResponse;

export const CosmosMsgDelegate = _MsgDelegate;
export type CosmosMsgDelegate = _MsgDelegate;

export const CosmosMsgDelegateResponse = _MsgDelegateResponse;
export type CosmosMsgDelegateResponse = _MsgDelegateResponse;

export const CosmosMsgBeginRedelegate = _MsgBeginRedelegate;
export type CosmosMsgBeginRedelegate = _MsgBeginRedelegate;

export const CosmosMsgBeginRedelegateResponse = _MsgBeginRedelegateResponse;
export type CosmosMsgBeginRedelegateResponse = _MsgBeginRedelegateResponse;

export const CosmosMsgUndelegate = _MsgUndelegate;
export type CosmosMsgUndelegate = _MsgUndelegate;

export const CosmosMsgUndelegateResponse = _MsgUndelegateResponse;
export type CosmosMsgUndelegateResponse = _MsgUndelegateResponse;

export const CosmosStakeAuthorization = _StakeAuthorization;
export type CosmosStakeAuthorization = _StakeAuthorization;

export const CosmosStakeAuthorization_Validators = _StakeAuthorization_Validators;
export type CosmosStakeAuthorization_Validators = _StakeAuthorization_Validators;

export const CosmosAuthorizationType = _AuthorizationType;
export type CosmosAuthorizationType = _AuthorizationType;

export const CosmosQueryValidatorsRequest = _QueryValidatorsRequest;
export type CosmosQueryValidatorsRequest = _QueryValidatorsRequest;

export const CosmosQueryValidatorsResponse = _QueryValidatorsResponse;
export type CosmosQueryValidatorsResponse = _QueryValidatorsResponse;

export const CosmosQueryValidatorRequest = _QueryValidatorRequest;
export type CosmosQueryValidatorRequest = _QueryValidatorRequest;

export const CosmosQueryValidatorResponse = _QueryValidatorResponse;
export type CosmosQueryValidatorResponse = _QueryValidatorResponse;

export const CosmosQueryValidatorDelegationsRequest = _QueryValidatorDelegationsRequest;
export type CosmosQueryValidatorDelegationsRequest = _QueryValidatorDelegationsRequest;

export const CosmosQueryValidatorDelegationsResponse = _QueryValidatorDelegationsResponse;
export type CosmosQueryValidatorDelegationsResponse = _QueryValidatorDelegationsResponse;

export const CosmosQueryValidatorUnbondingDelegationsRequest = _QueryValidatorUnbondingDelegationsRequest;
export type CosmosQueryValidatorUnbondingDelegationsRequest = _QueryValidatorUnbondingDelegationsRequest;

export const CosmosQueryValidatorUnbondingDelegationsResponse = _QueryValidatorUnbondingDelegationsResponse;
export type CosmosQueryValidatorUnbondingDelegationsResponse = _QueryValidatorUnbondingDelegationsResponse;

export const CosmosQueryDelegationRequest = _QueryDelegationRequest;
export type CosmosQueryDelegationRequest = _QueryDelegationRequest;

export const CosmosQueryDelegationResponse = _QueryDelegationResponse;
export type CosmosQueryDelegationResponse = _QueryDelegationResponse;

export const CosmosQueryUnbondingDelegationRequest = _QueryUnbondingDelegationRequest;
export type CosmosQueryUnbondingDelegationRequest = _QueryUnbondingDelegationRequest;

export const CosmosQueryUnbondingDelegationResponse = _QueryUnbondingDelegationResponse;
export type CosmosQueryUnbondingDelegationResponse = _QueryUnbondingDelegationResponse;

export const CosmosQueryDelegatorDelegationsRequest = _QueryDelegatorDelegationsRequest;
export type CosmosQueryDelegatorDelegationsRequest = _QueryDelegatorDelegationsRequest;

export const CosmosQueryDelegatorDelegationsResponse = _QueryDelegatorDelegationsResponse;
export type CosmosQueryDelegatorDelegationsResponse = _QueryDelegatorDelegationsResponse;

export const CosmosQueryDelegatorUnbondingDelegationsRequest = _QueryDelegatorUnbondingDelegationsRequest;
export type CosmosQueryDelegatorUnbondingDelegationsRequest = _QueryDelegatorUnbondingDelegationsRequest;

export const CosmosQueryDelegatorUnbondingDelegationsResponse = _QueryDelegatorUnbondingDelegationsResponse;
export type CosmosQueryDelegatorUnbondingDelegationsResponse = _QueryDelegatorUnbondingDelegationsResponse;

export const CosmosQueryRedelegationsRequest = _QueryRedelegationsRequest;
export type CosmosQueryRedelegationsRequest = _QueryRedelegationsRequest;

export const CosmosQueryRedelegationsResponse = _QueryRedelegationsResponse;
export type CosmosQueryRedelegationsResponse = _QueryRedelegationsResponse;

export const CosmosQueryDelegatorValidatorRequest = _QueryDelegatorValidatorRequest;
export type CosmosQueryDelegatorValidatorRequest = _QueryDelegatorValidatorRequest;

export const CosmosQueryDelegatorValidatorResponse = _QueryDelegatorValidatorResponse;
export type CosmosQueryDelegatorValidatorResponse = _QueryDelegatorValidatorResponse;

export const CosmosQueryHistoricalInfoRequest = _QueryHistoricalInfoRequest;
export type CosmosQueryHistoricalInfoRequest = _QueryHistoricalInfoRequest;

export const CosmosQueryHistoricalInfoResponse = _QueryHistoricalInfoResponse;
export type CosmosQueryHistoricalInfoResponse = _QueryHistoricalInfoResponse;

export const CosmosQueryPoolRequest = _QueryPoolRequest;
export type CosmosQueryPoolRequest = _QueryPoolRequest;

export const CosmosQueryPoolResponse = _QueryPoolResponse;
export type CosmosQueryPoolResponse = _QueryPoolResponse;

export const CosmosHistoricalInfo = _HistoricalInfo;
export type CosmosHistoricalInfo = _HistoricalInfo;

export const CosmosCommissionRates = _CommissionRates;
export type CosmosCommissionRates = _CommissionRates;

export const CosmosCommission = _Commission;
export type CosmosCommission = _Commission;

export const CosmosDescription = _Description;
export type CosmosDescription = _Description;

export const CosmosValidator = _Validator;
export type CosmosValidator = _Validator;

export const CosmosValAddresses = _ValAddresses;
export type CosmosValAddresses = _ValAddresses;

export const CosmosDVPair = _DVPair;
export type CosmosDVPair = _DVPair;

export const CosmosDVPairs = _DVPairs;
export type CosmosDVPairs = _DVPairs;

export const CosmosDVVTriplet = _DVVTriplet;
export type CosmosDVVTriplet = _DVVTriplet;

export const CosmosDVVTriplets = _DVVTriplets;
export type CosmosDVVTriplets = _DVVTriplets;

export const CosmosDelegation = _Delegation;
export type CosmosDelegation = _Delegation;

export const CosmosUnbondingDelegation = _UnbondingDelegation;
export type CosmosUnbondingDelegation = _UnbondingDelegation;

export const CosmosUnbondingDelegationEntry = _UnbondingDelegationEntry;
export type CosmosUnbondingDelegationEntry = _UnbondingDelegationEntry;

export const CosmosRedelegationEntry = _RedelegationEntry;
export type CosmosRedelegationEntry = _RedelegationEntry;

export const CosmosRedelegation = _Redelegation;
export type CosmosRedelegation = _Redelegation;

export const CosmosDelegationResponse = _DelegationResponse;
export type CosmosDelegationResponse = _DelegationResponse;

export const CosmosRedelegationEntryResponse = _RedelegationEntryResponse;
export type CosmosRedelegationEntryResponse = _RedelegationEntryResponse;

export const CosmosRedelegationResponse = _RedelegationResponse;
export type CosmosRedelegationResponse = _RedelegationResponse;

export const CosmosPool = _Pool;
export type CosmosPool = _Pool;

export const CosmosBondStatus = _BondStatus;
export type CosmosBondStatus = _BondStatus;

export const CosmosMsgGrant = _MsgGrant;
export type CosmosMsgGrant = _MsgGrant;

export const CosmosMsgExecResponse = _MsgExecResponse;
export type CosmosMsgExecResponse = _MsgExecResponse;

export const CosmosMsgExec = _MsgExec;
export type CosmosMsgExec = _MsgExec;

export const CosmosMsgGrantResponse = _MsgGrantResponse;
export type CosmosMsgGrantResponse = _MsgGrantResponse;

export const CosmosMsgRevoke = _MsgRevoke;
export type CosmosMsgRevoke = _MsgRevoke;

export const CosmosMsgRevokeResponse = _MsgRevokeResponse;
export type CosmosMsgRevokeResponse = _MsgRevokeResponse;

export const CosmosGenericAuthorization = _GenericAuthorization;
export type CosmosGenericAuthorization = _GenericAuthorization;

export const CosmosQueryGrantsRequest = _QueryGrantsRequest;
export type CosmosQueryGrantsRequest = _QueryGrantsRequest;

export const CosmosQueryGrantsResponse = _QueryGrantsResponse;
export type CosmosQueryGrantsResponse = _QueryGrantsResponse;

export const CosmosEventGrant = _EventGrant;
export type CosmosEventGrant = _EventGrant;

export const CosmosEventRevoke = _EventRevoke;
export type CosmosEventRevoke = _EventRevoke;

export const CosmosMsgUnjail = _MsgUnjail;
export type CosmosMsgUnjail = _MsgUnjail;

export const CosmosMsgUnjailResponse = _MsgUnjailResponse;
export type CosmosMsgUnjailResponse = _MsgUnjailResponse;

export const CosmosValidatorSigningInfo = _ValidatorSigningInfo;
export type CosmosValidatorSigningInfo = _ValidatorSigningInfo;

export const CosmosQuerySigningInfoRequest = _QuerySigningInfoRequest;
export type CosmosQuerySigningInfoRequest = _QuerySigningInfoRequest;

export const CosmosQuerySigningInfoResponse = _QuerySigningInfoResponse;
export type CosmosQuerySigningInfoResponse = _QuerySigningInfoResponse;

export const CosmosQuerySigningInfosRequest = _QuerySigningInfosRequest;
export type CosmosQuerySigningInfosRequest = _QuerySigningInfosRequest;

export const CosmosQuerySigningInfosResponse = _QuerySigningInfosResponse;
export type CosmosQuerySigningInfosResponse = _QuerySigningInfosResponse;

export const CosmosTxResponse = _TxResponse;
export type CosmosTxResponse = _TxResponse;

export const CosmosABCIMessageLog = _ABCIMessageLog;
export type CosmosABCIMessageLog = _ABCIMessageLog;

export const CosmosStringEvent = _StringEvent;
export type CosmosStringEvent = _StringEvent;

export const CosmosGasInfo = _GasInfo;
export type CosmosGasInfo = _GasInfo;

export const CosmosSimulationResponse = _SimulationResponse;
export type CosmosSimulationResponse = _SimulationResponse;

export const CosmosMsgData = _MsgData;
export type CosmosMsgData = _MsgData;

export const CosmosTxMsgData = _TxMsgData;
export type CosmosTxMsgData = _TxMsgData;

export const CosmosSearchTxsResult = _SearchTxsResult;
export type CosmosSearchTxsResult = _SearchTxsResult;

export const CosmosPairs = _Pairs;
export type CosmosPairs = _Pairs;

export const CosmosPair = _Pair;
export type CosmosPair = _Pair;

export const CosmosSnapshot = _Snapshot;
export type CosmosSnapshot = _Snapshot;

export const CosmosCoin = _Coin;
export type CosmosCoin = _Coin;

export const CosmosDecCoin = _DecCoin;
export type CosmosDecCoin = _DecCoin;

export const CosmosIntProto = _IntProto;
export type CosmosIntProto = _IntProto;

export const CosmosDecProto = _DecProto;
export type CosmosDecProto = _DecProto;

export const CosmosGetValidatorSetByHeightRequest = _GetValidatorSetByHeightRequest;
export type CosmosGetValidatorSetByHeightRequest = _GetValidatorSetByHeightRequest;

export const CosmosGetValidatorSetByHeightResponse = _GetValidatorSetByHeightResponse;
export type CosmosGetValidatorSetByHeightResponse = _GetValidatorSetByHeightResponse;

export const CosmosGetLatestValidatorSetRequest = _GetLatestValidatorSetRequest;
export type CosmosGetLatestValidatorSetRequest = _GetLatestValidatorSetRequest;

export const CosmosGetLatestValidatorSetResponse = _GetLatestValidatorSetResponse;
export type CosmosGetLatestValidatorSetResponse = _GetLatestValidatorSetResponse;

export const CosmosGetBlockByHeightRequest = _GetBlockByHeightRequest;
export type CosmosGetBlockByHeightRequest = _GetBlockByHeightRequest;

export const CosmosGetBlockByHeightResponse = _GetBlockByHeightResponse;
export type CosmosGetBlockByHeightResponse = _GetBlockByHeightResponse;

export const CosmosGetLatestBlockRequest = _GetLatestBlockRequest;
export type CosmosGetLatestBlockRequest = _GetLatestBlockRequest;

export const CosmosGetLatestBlockResponse = _GetLatestBlockResponse;
export type CosmosGetLatestBlockResponse = _GetLatestBlockResponse;

export const CosmosGetSyncingRequest = _GetSyncingRequest;
export type CosmosGetSyncingRequest = _GetSyncingRequest;

export const CosmosGetSyncingResponse = _GetSyncingResponse;
export type CosmosGetSyncingResponse = _GetSyncingResponse;

export const CosmosGetNodeInfoRequest = _GetNodeInfoRequest;
export type CosmosGetNodeInfoRequest = _GetNodeInfoRequest;

export const CosmosGetNodeInfoResponse = _GetNodeInfoResponse;
export type CosmosGetNodeInfoResponse = _GetNodeInfoResponse;

export const CosmosVersionInfo = _VersionInfo;
export type CosmosVersionInfo = _VersionInfo;

export const CosmosModule = _Module;
export type CosmosModule = _Module;

export const CosmosPageRequest = _PageRequest;
export type CosmosPageRequest = _PageRequest;

export const CosmosPageResponse = _PageResponse;
export type CosmosPageResponse = _PageResponse;

export const CosmosSnapshotItem = _SnapshotItem;
export type CosmosSnapshotItem = _SnapshotItem;

export const CosmosSnapshotStoreItem = _SnapshotStoreItem;
export type CosmosSnapshotStoreItem = _SnapshotStoreItem;

export const CosmosSnapshotIAVLItem = _SnapshotIAVLItem;
export type CosmosSnapshotIAVLItem = _SnapshotIAVLItem;

export const CosmosStoreKVPair = _StoreKVPair;
export type CosmosStoreKVPair = _StoreKVPair;

export const CosmosCommitInfo = _CommitInfo;
export type CosmosCommitInfo = _CommitInfo;

export const CosmosStoreInfo = _StoreInfo;
export type CosmosStoreInfo = _StoreInfo;

export const CosmosCommitID = _CommitID;
export type CosmosCommitID = _CommitID;

export const CosmosListAllInterfacesRequest = _ListAllInterfacesRequest;
export type CosmosListAllInterfacesRequest = _ListAllInterfacesRequest;

export const CosmosListAllInterfacesResponse = _ListAllInterfacesResponse;
export type CosmosListAllInterfacesResponse = _ListAllInterfacesResponse;

export const CosmosListImplementationsRequest = _ListImplementationsRequest;
export type CosmosListImplementationsRequest = _ListImplementationsRequest;

export const CosmosListImplementationsResponse = _ListImplementationsResponse;
export type CosmosListImplementationsResponse = _ListImplementationsResponse;

export const CosmosAppDescriptor = _AppDescriptor;
export type CosmosAppDescriptor = _AppDescriptor;

export const CosmosTxDescriptor = _TxDescriptor;
export type CosmosTxDescriptor = _TxDescriptor;

export const CosmosAuthnDescriptor = _AuthnDescriptor;
export type CosmosAuthnDescriptor = _AuthnDescriptor;

export const CosmosSigningModeDescriptor = _SigningModeDescriptor;
export type CosmosSigningModeDescriptor = _SigningModeDescriptor;

export const CosmosChainDescriptor = _ChainDescriptor;
export type CosmosChainDescriptor = _ChainDescriptor;

export const CosmosCodecDescriptor = _CodecDescriptor;
export type CosmosCodecDescriptor = _CodecDescriptor;

export const CosmosInterfaceDescriptor = _InterfaceDescriptor;
export type CosmosInterfaceDescriptor = _InterfaceDescriptor;

export const CosmosInterfaceImplementerDescriptor = _InterfaceImplementerDescriptor;
export type CosmosInterfaceImplementerDescriptor = _InterfaceImplementerDescriptor;

export const CosmosInterfaceAcceptingMessageDescriptor = _InterfaceAcceptingMessageDescriptor;
export type CosmosInterfaceAcceptingMessageDescriptor = _InterfaceAcceptingMessageDescriptor;

export const CosmosConfigurationDescriptor = _ConfigurationDescriptor;
export type CosmosConfigurationDescriptor = _ConfigurationDescriptor;

export const CosmosMsgDescriptor = _MsgDescriptor;
export type CosmosMsgDescriptor = _MsgDescriptor;

export const CosmosGetAuthnDescriptorRequest = _GetAuthnDescriptorRequest;
export type CosmosGetAuthnDescriptorRequest = _GetAuthnDescriptorRequest;

export const CosmosGetAuthnDescriptorResponse = _GetAuthnDescriptorResponse;
export type CosmosGetAuthnDescriptorResponse = _GetAuthnDescriptorResponse;

export const CosmosGetChainDescriptorRequest = _GetChainDescriptorRequest;
export type CosmosGetChainDescriptorRequest = _GetChainDescriptorRequest;

export const CosmosGetChainDescriptorResponse = _GetChainDescriptorResponse;
export type CosmosGetChainDescriptorResponse = _GetChainDescriptorResponse;

export const CosmosGetCodecDescriptorRequest = _GetCodecDescriptorRequest;
export type CosmosGetCodecDescriptorRequest = _GetCodecDescriptorRequest;

export const CosmosGetCodecDescriptorResponse = _GetCodecDescriptorResponse;
export type CosmosGetCodecDescriptorResponse = _GetCodecDescriptorResponse;

export const CosmosGetConfigurationDescriptorRequest = _GetConfigurationDescriptorRequest;
export type CosmosGetConfigurationDescriptorRequest = _GetConfigurationDescriptorRequest;

export const CosmosGetConfigurationDescriptorResponse = _GetConfigurationDescriptorResponse;
export type CosmosGetConfigurationDescriptorResponse = _GetConfigurationDescriptorResponse;

export const CosmosGetQueryServicesDescriptorRequest = _GetQueryServicesDescriptorRequest;
export type CosmosGetQueryServicesDescriptorRequest = _GetQueryServicesDescriptorRequest;

export const CosmosGetQueryServicesDescriptorResponse = _GetQueryServicesDescriptorResponse;
export type CosmosGetQueryServicesDescriptorResponse = _GetQueryServicesDescriptorResponse;

export const CosmosGetTxDescriptorRequest = _GetTxDescriptorRequest;
export type CosmosGetTxDescriptorRequest = _GetTxDescriptorRequest;

export const CosmosGetTxDescriptorResponse = _GetTxDescriptorResponse;
export type CosmosGetTxDescriptorResponse = _GetTxDescriptorResponse;

export const CosmosQueryServicesDescriptor = _QueryServicesDescriptor;
export type CosmosQueryServicesDescriptor = _QueryServicesDescriptor;

export const CosmosQueryServiceDescriptor = _QueryServiceDescriptor;
export type CosmosQueryServiceDescriptor = _QueryServiceDescriptor;

export const CosmosQueryMethodDescriptor = _QueryMethodDescriptor;
export type CosmosQueryMethodDescriptor = _QueryMethodDescriptor;

export const CosmosWeightedVoteOption = _WeightedVoteOption;
export type CosmosWeightedVoteOption = _WeightedVoteOption;

export const CosmosTextProposal = _TextProposal;
export type CosmosTextProposal = _TextProposal;

export const CosmosDeposit = _Deposit;
export type CosmosDeposit = _Deposit;

export const CosmosProposal = _Proposal;
export type CosmosProposal = _Proposal;

export const CosmosTallyResult = _TallyResult;
export type CosmosTallyResult = _TallyResult;

export const CosmosVote = _Vote;
export type CosmosVote = _Vote;

export const CosmosDepositParams = _DepositParams;
export type CosmosDepositParams = _DepositParams;

export const CosmosVotingParams = _VotingParams;
export type CosmosVotingParams = _VotingParams;

export const CosmosTallyParams = _TallyParams;
export type CosmosTallyParams = _TallyParams;

export const CosmosVoteOption = _VoteOption;
export type CosmosVoteOption = _VoteOption;

export const CosmosProposalStatus = _ProposalStatus;
export type CosmosProposalStatus = _ProposalStatus;

export const CosmosMsgSubmitProposal = _MsgSubmitProposal;
export type CosmosMsgSubmitProposal = _MsgSubmitProposal;

export const CosmosMsgSubmitProposalResponse = _MsgSubmitProposalResponse;
export type CosmosMsgSubmitProposalResponse = _MsgSubmitProposalResponse;

export const CosmosMsgVote = _MsgVote;
export type CosmosMsgVote = _MsgVote;

export const CosmosMsgVoteResponse = _MsgVoteResponse;
export type CosmosMsgVoteResponse = _MsgVoteResponse;

export const CosmosMsgVoteWeighted = _MsgVoteWeighted;
export type CosmosMsgVoteWeighted = _MsgVoteWeighted;

export const CosmosMsgVoteWeightedResponse = _MsgVoteWeightedResponse;
export type CosmosMsgVoteWeightedResponse = _MsgVoteWeightedResponse;

export const CosmosMsgDeposit = _MsgDeposit;
export type CosmosMsgDeposit = _MsgDeposit;

export const CosmosMsgDepositResponse = _MsgDepositResponse;
export type CosmosMsgDepositResponse = _MsgDepositResponse;

export const CosmosQueryProposalRequest = _QueryProposalRequest;
export type CosmosQueryProposalRequest = _QueryProposalRequest;

export const CosmosQueryProposalResponse = _QueryProposalResponse;
export type CosmosQueryProposalResponse = _QueryProposalResponse;

export const CosmosQueryProposalsRequest = _QueryProposalsRequest;
export type CosmosQueryProposalsRequest = _QueryProposalsRequest;

export const CosmosQueryProposalsResponse = _QueryProposalsResponse;
export type CosmosQueryProposalsResponse = _QueryProposalsResponse;

export const CosmosQueryVoteRequest = _QueryVoteRequest;
export type CosmosQueryVoteRequest = _QueryVoteRequest;

export const CosmosQueryVoteResponse = _QueryVoteResponse;
export type CosmosQueryVoteResponse = _QueryVoteResponse;

export const CosmosQueryVotesRequest = _QueryVotesRequest;
export type CosmosQueryVotesRequest = _QueryVotesRequest;

export const CosmosQueryVotesResponse = _QueryVotesResponse;
export type CosmosQueryVotesResponse = _QueryVotesResponse;

export const CosmosQueryDepositRequest = _QueryDepositRequest;
export type CosmosQueryDepositRequest = _QueryDepositRequest;

export const CosmosQueryDepositResponse = _QueryDepositResponse;
export type CosmosQueryDepositResponse = _QueryDepositResponse;

export const CosmosQueryDepositsRequest = _QueryDepositsRequest;
export type CosmosQueryDepositsRequest = _QueryDepositsRequest;

export const CosmosQueryDepositsResponse = _QueryDepositsResponse;
export type CosmosQueryDepositsResponse = _QueryDepositsResponse;

export const CosmosQueryTallyResultRequest = _QueryTallyResultRequest;
export type CosmosQueryTallyResultRequest = _QueryTallyResultRequest;

export const CosmosQueryTallyResultResponse = _QueryTallyResultResponse;
export type CosmosQueryTallyResultResponse = _QueryTallyResultResponse;

/* tslint:disable:variable-name */
import {
	Report as _Report,
	Reports as _Reports,
} from './lib/proto/desmos/posts/v1beta1/report';

import {
	ProvidedAnswer as _ProvidedAnswer,
	Poll as _Poll,
	UserAnswer as _UserAnswer,
} from './lib/proto/desmos/posts/v1beta1/polls';

import {
	MsgCreatePost as _MsgCreatePost,
	MsgCreatePostResponse as _MsgCreatePostResponse,
	MsgEditPost as _MsgEditPost,
	MsgEditPostResponse as _MsgEditPostResponse,
	MsgAddPostReaction as _MsgAddPostReaction,
	MsgAddPostReactionResponse as _MsgAddPostReactionResponse,
	MsgRemovePostReaction as _MsgRemovePostReaction,
	MsgRemovePostReactionResponse as _MsgRemovePostReactionResponse,
	MsgAnswerPoll as _MsgAnswerPoll,
	MsgAnswerPollResponse as _MsgAnswerPollResponse,
	MsgRegisterReaction as _MsgRegisterReaction,
	MsgRegisterReactionResponse as _MsgRegisterReactionResponse,
	MsgReportPost as _MsgReportPost,
	MsgReportPostResponse as _MsgReportPostResponse,
} from './lib/proto/desmos/posts/v1beta1/msgs';

import {
	Post as _Post,
	Attachment as _Attachment,
	Attribute as _Attribute,
	CommentsState as _CommentsState,
} from './lib/proto/desmos/posts/v1beta1/posts';

import {
	RegisteredReaction as _RegisteredReaction,
	PostReaction as _PostReaction,
} from './lib/proto/desmos/posts/v1beta1/reactions';

import {
	QueryPostsRequest as _QueryPostsRequest,
	QueryPostsResponse as _QueryPostsResponse,
	QueryPostRequest as _QueryPostRequest,
	QueryPostResponse as _QueryPostResponse,
	QueryUserAnswersRequest as _QueryUserAnswersRequest,
	QueryUserAnswersResponse as _QueryUserAnswersResponse,
	QueryRegisteredReactionsRequest as _QueryRegisteredReactionsRequest,
	QueryRegisteredReactionsResponse as _QueryRegisteredReactionsResponse,
	QueryParamsRequest as _QueryParamsRequest,
	QueryParamsResponse as _QueryParamsResponse,
	QueryReportsRequest as _QueryReportsRequest,
	QueryReportsResponse as _QueryReportsResponse,
	QueryPostReactionsRequest as _QueryPostReactionsRequest,
	QueryPostReactionsResponse as _QueryPostReactionsResponse,
	QueryPostCommentsRequest as _QueryPostCommentsRequest,
	QueryPostCommentsResponse as _QueryPostCommentsResponse,
} from './lib/proto/desmos/posts/v1beta1/query';

import {
	MsgCreateSubspace as _MsgCreateSubspace,
	MsgCreateSubspaceResponse as _MsgCreateSubspaceResponse,
	MsgEditSubspace as _MsgEditSubspace,
	MsgEditSubspaceResponse as _MsgEditSubspaceResponse,
	MsgAddAdmin as _MsgAddAdmin,
	MsgAddAdminResponse as _MsgAddAdminResponse,
	MsgRemoveAdmin as _MsgRemoveAdmin,
	MsgRemoveAdminResponse as _MsgRemoveAdminResponse,
	MsgRegisterUser as _MsgRegisterUser,
	MsgRegisterUserResponse as _MsgRegisterUserResponse,
	MsgUnregisterUser as _MsgUnregisterUser,
	MsgUnregisterUserResponse as _MsgUnregisterUserResponse,
	MsgBanUser as _MsgBanUser,
	MsgBanUserResponse as _MsgBanUserResponse,
	MsgUnbanUser as _MsgUnbanUser,
	MsgUnbanUserResponse as _MsgUnbanUserResponse,
} from './lib/proto/desmos/subspaces/v1beta1/msgs';

import {
	Subspace as _Subspace,
	SubspaceType as _SubspaceType,
} from './lib/proto/desmos/subspaces/v1beta1/subspace';

import {
	QuerySubspaceRequest as _QuerySubspaceRequest,
	QuerySubspaceResponse as _QuerySubspaceResponse,
	QuerySubspacesRequest as _QuerySubspacesRequest,
	QuerySubspacesResponse as _QuerySubspacesResponse,
	QueryAdminsRequest as _QueryAdminsRequest,
	QueryAdminsResponse as _QueryAdminsResponse,
	QueryRegisteredUsersRequest as _QueryRegisteredUsersRequest,
	QueryRegisteredUsersResponse as _QueryRegisteredUsersResponse,
	QueryBannedUsersRequest as _QueryBannedUsersRequest,
	QueryBannedUsersResponse as _QueryBannedUsersResponse,
} from './lib/proto/desmos/subspaces/v1beta1/query';

import {
	MinFee as _MinFee,
} from './lib/proto/desmos/fees/v1beta1/min_fee';

import {
	QueryUserChainLinkRequest as _QueryUserChainLinkRequest,
	QueryUserChainLinkResponse as _QueryUserChainLinkResponse,
	QueryChainLinksRequest as _QueryChainLinksRequest,
	QueryChainLinksResponse as _QueryChainLinksResponse,
} from './lib/proto/desmos/profiles/v1beta1/query_chain_links';

import {
	QueryProfileRequest as _QueryProfileRequest,
	QueryProfileResponse as _QueryProfileResponse,
} from './lib/proto/desmos/profiles/v1beta1/query_profile';

import {
	Params as _Params,
	NicknameParams as _NicknameParams,
	DTagParams as _DTagParams,
	BioParams as _BioParams,
	OracleParams as _OracleParams,
} from './lib/proto/desmos/profiles/v1beta1/models_params';

import {
	Relationship as _Relationship,
	UserBlock as _UserBlock,
} from './lib/proto/desmos/profiles/v1beta1/models_relationships';

import {
	MsgSaveProfile as _MsgSaveProfile,
	MsgSaveProfileResponse as _MsgSaveProfileResponse,
	MsgDeleteProfile as _MsgDeleteProfile,
	MsgDeleteProfileResponse as _MsgDeleteProfileResponse,
} from './lib/proto/desmos/profiles/v1beta1/msgs_profile';

import {
	ApplicationLink as _ApplicationLink,
	Data as _Data,
	OracleRequest as _OracleRequest,
	OracleRequest_CallData as _OracleRequest_CallData,
	Result as _Result,
	Result_Success as _Result_Success,
	Result_Failed as _Result_Failed,
	ApplicationLinkState as _ApplicationLinkState,
} from './lib/proto/desmos/profiles/v1beta1/models_app_links';

import {
	ChainLink as _ChainLink,
	ChainConfig as _ChainConfig,
	Proof as _Proof,
	Bech32Address as _Bech32Address,
	Base58Address as _Base58Address,
} from './lib/proto/desmos/profiles/v1beta1/models_chain_links';

import {
	LinkChainAccountPacketData as _LinkChainAccountPacketData,
	LinkChainAccountPacketAck as _LinkChainAccountPacketAck,
} from './lib/proto/desmos/profiles/v1beta1/models_packets';

import {
	MsgLinkChainAccount as _MsgLinkChainAccount,
	MsgLinkChainAccountResponse as _MsgLinkChainAccountResponse,
	MsgUnlinkChainAccount as _MsgUnlinkChainAccount,
	MsgUnlinkChainAccountResponse as _MsgUnlinkChainAccountResponse,
} from './lib/proto/desmos/profiles/v1beta1/msgs_chain_links';

import {
	MsgRequestDTagTransfer as _MsgRequestDTagTransfer,
	MsgRequestDTagTransferResponse as _MsgRequestDTagTransferResponse,
	MsgCancelDTagTransferRequest as _MsgCancelDTagTransferRequest,
	MsgCancelDTagTransferRequestResponse as _MsgCancelDTagTransferRequestResponse,
	MsgAcceptDTagTransferRequest as _MsgAcceptDTagTransferRequest,
	MsgAcceptDTagTransferRequestResponse as _MsgAcceptDTagTransferRequestResponse,
	MsgRefuseDTagTransferRequest as _MsgRefuseDTagTransferRequest,
	MsgRefuseDTagTransferRequestResponse as _MsgRefuseDTagTransferRequestResponse,
} from './lib/proto/desmos/profiles/v1beta1/msgs_dtag_requests';

import {
	QueryUserApplicationLinkRequest as _QueryUserApplicationLinkRequest,
	QueryUserApplicationLinkResponse as _QueryUserApplicationLinkResponse,
	QueryApplicationLinksRequest as _QueryApplicationLinksRequest,
	QueryApplicationLinksResponse as _QueryApplicationLinksResponse,
	QueryApplicationLinkByClientIDRequest as _QueryApplicationLinkByClientIDRequest,
	QueryApplicationLinkByClientIDResponse as _QueryApplicationLinkByClientIDResponse,
} from './lib/proto/desmos/profiles/v1beta1/query_app_links';

import {
	QueryIncomingDTagTransferRequestsRequest as _QueryIncomingDTagTransferRequestsRequest,
	QueryIncomingDTagTransferRequestsResponse as _QueryIncomingDTagTransferRequestsResponse,
} from './lib/proto/desmos/profiles/v1beta1/query_dtag_requests';

import {
	DTagTransferRequest as _DTagTransferRequest,
} from './lib/proto/desmos/profiles/v1beta1/models_dtag_requests';

import {
	MsgLinkApplication as _MsgLinkApplication,
	MsgLinkApplicationResponse as _MsgLinkApplicationResponse,
	MsgUnlinkApplication as _MsgUnlinkApplication,
	MsgUnlinkApplicationResponse as _MsgUnlinkApplicationResponse,
} from './lib/proto/desmos/profiles/v1beta1/msgs_app_links';

import {
	QueryRelationshipsRequest as _QueryRelationshipsRequest,
	QueryRelationshipsResponse as _QueryRelationshipsResponse,
	QueryBlocksRequest as _QueryBlocksRequest,
	QueryBlocksResponse as _QueryBlocksResponse,
} from './lib/proto/desmos/profiles/v1beta1/query_relationships';

import {
	Profile as _Profile,
	Pictures as _Pictures,
} from './lib/proto/desmos/profiles/v1beta1/models_profile';

import {
	MsgCreateRelationship as _MsgCreateRelationship,
	MsgCreateRelationshipResponse as _MsgCreateRelationshipResponse,
	MsgDeleteRelationship as _MsgDeleteRelationship,
	MsgDeleteRelationshipResponse as _MsgDeleteRelationshipResponse,
	MsgBlockUser as _MsgBlockUser,
	MsgBlockUserResponse as _MsgBlockUserResponse,
	MsgUnblockUser as _MsgUnblockUser,
	MsgUnblockUserResponse as _MsgUnblockUserResponse,
} from './lib/proto/desmos/profiles/v1beta1/msgs_relationships';

import {
	ChainLinkJSON as _ChainLinkJSON,
} from './lib/proto/desmos/profiles/v1beta1/client/cli';
export const DesmosReport = _Report;
export type DesmosReport = _Report;

export const DesmosReports = _Reports;
export type DesmosReports = _Reports;

export const DesmosProvidedAnswer = _ProvidedAnswer;
export type DesmosProvidedAnswer = _ProvidedAnswer;

export const DesmosPoll = _Poll;
export type DesmosPoll = _Poll;

export const DesmosUserAnswer = _UserAnswer;
export type DesmosUserAnswer = _UserAnswer;

export const DesmosMsgCreatePost = _MsgCreatePost;
export type DesmosMsgCreatePost = _MsgCreatePost;

export const DesmosMsgCreatePostResponse = _MsgCreatePostResponse;
export type DesmosMsgCreatePostResponse = _MsgCreatePostResponse;

export const DesmosMsgEditPost = _MsgEditPost;
export type DesmosMsgEditPost = _MsgEditPost;

export const DesmosMsgEditPostResponse = _MsgEditPostResponse;
export type DesmosMsgEditPostResponse = _MsgEditPostResponse;

export const DesmosMsgAddPostReaction = _MsgAddPostReaction;
export type DesmosMsgAddPostReaction = _MsgAddPostReaction;

export const DesmosMsgAddPostReactionResponse = _MsgAddPostReactionResponse;
export type DesmosMsgAddPostReactionResponse = _MsgAddPostReactionResponse;

export const DesmosMsgRemovePostReaction = _MsgRemovePostReaction;
export type DesmosMsgRemovePostReaction = _MsgRemovePostReaction;

export const DesmosMsgRemovePostReactionResponse = _MsgRemovePostReactionResponse;
export type DesmosMsgRemovePostReactionResponse = _MsgRemovePostReactionResponse;

export const DesmosMsgAnswerPoll = _MsgAnswerPoll;
export type DesmosMsgAnswerPoll = _MsgAnswerPoll;

export const DesmosMsgAnswerPollResponse = _MsgAnswerPollResponse;
export type DesmosMsgAnswerPollResponse = _MsgAnswerPollResponse;

export const DesmosMsgRegisterReaction = _MsgRegisterReaction;
export type DesmosMsgRegisterReaction = _MsgRegisterReaction;

export const DesmosMsgRegisterReactionResponse = _MsgRegisterReactionResponse;
export type DesmosMsgRegisterReactionResponse = _MsgRegisterReactionResponse;

export const DesmosMsgReportPost = _MsgReportPost;
export type DesmosMsgReportPost = _MsgReportPost;

export const DesmosMsgReportPostResponse = _MsgReportPostResponse;
export type DesmosMsgReportPostResponse = _MsgReportPostResponse;

export const DesmosPost = _Post;
export type DesmosPost = _Post;

export const DesmosAttachment = _Attachment;
export type DesmosAttachment = _Attachment;

export const DesmosAttribute = _Attribute;
export type DesmosAttribute = _Attribute;

export const DesmosCommentsState = _CommentsState;
export type DesmosCommentsState = _CommentsState;

export const DesmosRegisteredReaction = _RegisteredReaction;
export type DesmosRegisteredReaction = _RegisteredReaction;

export const DesmosPostReaction = _PostReaction;
export type DesmosPostReaction = _PostReaction;

export const DesmosQueryPostsRequest = _QueryPostsRequest;
export type DesmosQueryPostsRequest = _QueryPostsRequest;

export const DesmosQueryPostsResponse = _QueryPostsResponse;
export type DesmosQueryPostsResponse = _QueryPostsResponse;

export const DesmosQueryPostRequest = _QueryPostRequest;
export type DesmosQueryPostRequest = _QueryPostRequest;

export const DesmosQueryPostResponse = _QueryPostResponse;
export type DesmosQueryPostResponse = _QueryPostResponse;

export const DesmosQueryUserAnswersRequest = _QueryUserAnswersRequest;
export type DesmosQueryUserAnswersRequest = _QueryUserAnswersRequest;

export const DesmosQueryUserAnswersResponse = _QueryUserAnswersResponse;
export type DesmosQueryUserAnswersResponse = _QueryUserAnswersResponse;

export const DesmosQueryRegisteredReactionsRequest = _QueryRegisteredReactionsRequest;
export type DesmosQueryRegisteredReactionsRequest = _QueryRegisteredReactionsRequest;

export const DesmosQueryRegisteredReactionsResponse = _QueryRegisteredReactionsResponse;
export type DesmosQueryRegisteredReactionsResponse = _QueryRegisteredReactionsResponse;

export const DesmosQueryParamsRequest = _QueryParamsRequest;
export type DesmosQueryParamsRequest = _QueryParamsRequest;

export const DesmosQueryParamsResponse = _QueryParamsResponse;
export type DesmosQueryParamsResponse = _QueryParamsResponse;

export const DesmosQueryReportsRequest = _QueryReportsRequest;
export type DesmosQueryReportsRequest = _QueryReportsRequest;

export const DesmosQueryReportsResponse = _QueryReportsResponse;
export type DesmosQueryReportsResponse = _QueryReportsResponse;

export const DesmosQueryPostReactionsRequest = _QueryPostReactionsRequest;
export type DesmosQueryPostReactionsRequest = _QueryPostReactionsRequest;

export const DesmosQueryPostReactionsResponse = _QueryPostReactionsResponse;
export type DesmosQueryPostReactionsResponse = _QueryPostReactionsResponse;

export const DesmosQueryPostCommentsRequest = _QueryPostCommentsRequest;
export type DesmosQueryPostCommentsRequest = _QueryPostCommentsRequest;

export const DesmosQueryPostCommentsResponse = _QueryPostCommentsResponse;
export type DesmosQueryPostCommentsResponse = _QueryPostCommentsResponse;

export const DesmosMsgCreateSubspace = _MsgCreateSubspace;
export type DesmosMsgCreateSubspace = _MsgCreateSubspace;

export const DesmosMsgCreateSubspaceResponse = _MsgCreateSubspaceResponse;
export type DesmosMsgCreateSubspaceResponse = _MsgCreateSubspaceResponse;

export const DesmosMsgEditSubspace = _MsgEditSubspace;
export type DesmosMsgEditSubspace = _MsgEditSubspace;

export const DesmosMsgEditSubspaceResponse = _MsgEditSubspaceResponse;
export type DesmosMsgEditSubspaceResponse = _MsgEditSubspaceResponse;

export const DesmosMsgAddAdmin = _MsgAddAdmin;
export type DesmosMsgAddAdmin = _MsgAddAdmin;

export const DesmosMsgAddAdminResponse = _MsgAddAdminResponse;
export type DesmosMsgAddAdminResponse = _MsgAddAdminResponse;

export const DesmosMsgRemoveAdmin = _MsgRemoveAdmin;
export type DesmosMsgRemoveAdmin = _MsgRemoveAdmin;

export const DesmosMsgRemoveAdminResponse = _MsgRemoveAdminResponse;
export type DesmosMsgRemoveAdminResponse = _MsgRemoveAdminResponse;

export const DesmosMsgRegisterUser = _MsgRegisterUser;
export type DesmosMsgRegisterUser = _MsgRegisterUser;

export const DesmosMsgRegisterUserResponse = _MsgRegisterUserResponse;
export type DesmosMsgRegisterUserResponse = _MsgRegisterUserResponse;

export const DesmosMsgUnregisterUser = _MsgUnregisterUser;
export type DesmosMsgUnregisterUser = _MsgUnregisterUser;

export const DesmosMsgUnregisterUserResponse = _MsgUnregisterUserResponse;
export type DesmosMsgUnregisterUserResponse = _MsgUnregisterUserResponse;

export const DesmosMsgBanUser = _MsgBanUser;
export type DesmosMsgBanUser = _MsgBanUser;

export const DesmosMsgBanUserResponse = _MsgBanUserResponse;
export type DesmosMsgBanUserResponse = _MsgBanUserResponse;

export const DesmosMsgUnbanUser = _MsgUnbanUser;
export type DesmosMsgUnbanUser = _MsgUnbanUser;

export const DesmosMsgUnbanUserResponse = _MsgUnbanUserResponse;
export type DesmosMsgUnbanUserResponse = _MsgUnbanUserResponse;

export const DesmosSubspace = _Subspace;
export type DesmosSubspace = _Subspace;

export const DesmosSubspaceType = _SubspaceType;
export type DesmosSubspaceType = _SubspaceType;

export const DesmosQuerySubspaceRequest = _QuerySubspaceRequest;
export type DesmosQuerySubspaceRequest = _QuerySubspaceRequest;

export const DesmosQuerySubspaceResponse = _QuerySubspaceResponse;
export type DesmosQuerySubspaceResponse = _QuerySubspaceResponse;

export const DesmosQuerySubspacesRequest = _QuerySubspacesRequest;
export type DesmosQuerySubspacesRequest = _QuerySubspacesRequest;

export const DesmosQuerySubspacesResponse = _QuerySubspacesResponse;
export type DesmosQuerySubspacesResponse = _QuerySubspacesResponse;

export const DesmosQueryAdminsRequest = _QueryAdminsRequest;
export type DesmosQueryAdminsRequest = _QueryAdminsRequest;

export const DesmosQueryAdminsResponse = _QueryAdminsResponse;
export type DesmosQueryAdminsResponse = _QueryAdminsResponse;

export const DesmosQueryRegisteredUsersRequest = _QueryRegisteredUsersRequest;
export type DesmosQueryRegisteredUsersRequest = _QueryRegisteredUsersRequest;

export const DesmosQueryRegisteredUsersResponse = _QueryRegisteredUsersResponse;
export type DesmosQueryRegisteredUsersResponse = _QueryRegisteredUsersResponse;

export const DesmosQueryBannedUsersRequest = _QueryBannedUsersRequest;
export type DesmosQueryBannedUsersRequest = _QueryBannedUsersRequest;

export const DesmosQueryBannedUsersResponse = _QueryBannedUsersResponse;
export type DesmosQueryBannedUsersResponse = _QueryBannedUsersResponse;

export const DesmosMinFee = _MinFee;
export type DesmosMinFee = _MinFee;

export const DesmosQueryUserChainLinkRequest = _QueryUserChainLinkRequest;
export type DesmosQueryUserChainLinkRequest = _QueryUserChainLinkRequest;

export const DesmosQueryUserChainLinkResponse = _QueryUserChainLinkResponse;
export type DesmosQueryUserChainLinkResponse = _QueryUserChainLinkResponse;

export const DesmosQueryChainLinksRequest = _QueryChainLinksRequest;
export type DesmosQueryChainLinksRequest = _QueryChainLinksRequest;

export const DesmosQueryChainLinksResponse = _QueryChainLinksResponse;
export type DesmosQueryChainLinksResponse = _QueryChainLinksResponse;

export const DesmosQueryProfileRequest = _QueryProfileRequest;
export type DesmosQueryProfileRequest = _QueryProfileRequest;

export const DesmosQueryProfileResponse = _QueryProfileResponse;
export type DesmosQueryProfileResponse = _QueryProfileResponse;

export const DesmosParams = _Params;
export type DesmosParams = _Params;

export const DesmosNicknameParams = _NicknameParams;
export type DesmosNicknameParams = _NicknameParams;

export const DesmosDTagParams = _DTagParams;
export type DesmosDTagParams = _DTagParams;

export const DesmosBioParams = _BioParams;
export type DesmosBioParams = _BioParams;

export const DesmosOracleParams = _OracleParams;
export type DesmosOracleParams = _OracleParams;

export const DesmosRelationship = _Relationship;
export type DesmosRelationship = _Relationship;

export const DesmosUserBlock = _UserBlock;
export type DesmosUserBlock = _UserBlock;

export const DesmosMsgSaveProfile = _MsgSaveProfile;
export type DesmosMsgSaveProfile = _MsgSaveProfile;

export const DesmosMsgSaveProfileResponse = _MsgSaveProfileResponse;
export type DesmosMsgSaveProfileResponse = _MsgSaveProfileResponse;

export const DesmosMsgDeleteProfile = _MsgDeleteProfile;
export type DesmosMsgDeleteProfile = _MsgDeleteProfile;

export const DesmosMsgDeleteProfileResponse = _MsgDeleteProfileResponse;
export type DesmosMsgDeleteProfileResponse = _MsgDeleteProfileResponse;

export const DesmosApplicationLink = _ApplicationLink;
export type DesmosApplicationLink = _ApplicationLink;

export const DesmosData = _Data;
export type DesmosData = _Data;

export const DesmosOracleRequest = _OracleRequest;
export type DesmosOracleRequest = _OracleRequest;

export const DesmosOracleRequest_CallData = _OracleRequest_CallData;
export type DesmosOracleRequest_CallData = _OracleRequest_CallData;

export const DesmosResult = _Result;
export type DesmosResult = _Result;

export const DesmosResult_Success = _Result_Success;
export type DesmosResult_Success = _Result_Success;

export const DesmosResult_Failed = _Result_Failed;
export type DesmosResult_Failed = _Result_Failed;

export const DesmosApplicationLinkState = _ApplicationLinkState;
export type DesmosApplicationLinkState = _ApplicationLinkState;

export const DesmosChainLink = _ChainLink;
export type DesmosChainLink = _ChainLink;

export const DesmosChainConfig = _ChainConfig;
export type DesmosChainConfig = _ChainConfig;

export const DesmosProof = _Proof;
export type DesmosProof = _Proof;

export const DesmosBech32Address = _Bech32Address;
export type DesmosBech32Address = _Bech32Address;

export const DesmosBase58Address = _Base58Address;
export type DesmosBase58Address = _Base58Address;

export const DesmosLinkChainAccountPacketData = _LinkChainAccountPacketData;
export type DesmosLinkChainAccountPacketData = _LinkChainAccountPacketData;

export const DesmosLinkChainAccountPacketAck = _LinkChainAccountPacketAck;
export type DesmosLinkChainAccountPacketAck = _LinkChainAccountPacketAck;

export const DesmosMsgLinkChainAccount = _MsgLinkChainAccount;
export type DesmosMsgLinkChainAccount = _MsgLinkChainAccount;

export const DesmosMsgLinkChainAccountResponse = _MsgLinkChainAccountResponse;
export type DesmosMsgLinkChainAccountResponse = _MsgLinkChainAccountResponse;

export const DesmosMsgUnlinkChainAccount = _MsgUnlinkChainAccount;
export type DesmosMsgUnlinkChainAccount = _MsgUnlinkChainAccount;

export const DesmosMsgUnlinkChainAccountResponse = _MsgUnlinkChainAccountResponse;
export type DesmosMsgUnlinkChainAccountResponse = _MsgUnlinkChainAccountResponse;

export const DesmosMsgRequestDTagTransfer = _MsgRequestDTagTransfer;
export type DesmosMsgRequestDTagTransfer = _MsgRequestDTagTransfer;

export const DesmosMsgRequestDTagTransferResponse = _MsgRequestDTagTransferResponse;
export type DesmosMsgRequestDTagTransferResponse = _MsgRequestDTagTransferResponse;

export const DesmosMsgCancelDTagTransferRequest = _MsgCancelDTagTransferRequest;
export type DesmosMsgCancelDTagTransferRequest = _MsgCancelDTagTransferRequest;

export const DesmosMsgCancelDTagTransferRequestResponse = _MsgCancelDTagTransferRequestResponse;
export type DesmosMsgCancelDTagTransferRequestResponse = _MsgCancelDTagTransferRequestResponse;

export const DesmosMsgAcceptDTagTransferRequest = _MsgAcceptDTagTransferRequest;
export type DesmosMsgAcceptDTagTransferRequest = _MsgAcceptDTagTransferRequest;

export const DesmosMsgAcceptDTagTransferRequestResponse = _MsgAcceptDTagTransferRequestResponse;
export type DesmosMsgAcceptDTagTransferRequestResponse = _MsgAcceptDTagTransferRequestResponse;

export const DesmosMsgRefuseDTagTransferRequest = _MsgRefuseDTagTransferRequest;
export type DesmosMsgRefuseDTagTransferRequest = _MsgRefuseDTagTransferRequest;

export const DesmosMsgRefuseDTagTransferRequestResponse = _MsgRefuseDTagTransferRequestResponse;
export type DesmosMsgRefuseDTagTransferRequestResponse = _MsgRefuseDTagTransferRequestResponse;

export const DesmosQueryUserApplicationLinkRequest = _QueryUserApplicationLinkRequest;
export type DesmosQueryUserApplicationLinkRequest = _QueryUserApplicationLinkRequest;

export const DesmosQueryUserApplicationLinkResponse = _QueryUserApplicationLinkResponse;
export type DesmosQueryUserApplicationLinkResponse = _QueryUserApplicationLinkResponse;

export const DesmosQueryApplicationLinksRequest = _QueryApplicationLinksRequest;
export type DesmosQueryApplicationLinksRequest = _QueryApplicationLinksRequest;

export const DesmosQueryApplicationLinksResponse = _QueryApplicationLinksResponse;
export type DesmosQueryApplicationLinksResponse = _QueryApplicationLinksResponse;

export const DesmosQueryApplicationLinkByClientIDRequest = _QueryApplicationLinkByClientIDRequest;
export type DesmosQueryApplicationLinkByClientIDRequest = _QueryApplicationLinkByClientIDRequest;

export const DesmosQueryApplicationLinkByClientIDResponse = _QueryApplicationLinkByClientIDResponse;
export type DesmosQueryApplicationLinkByClientIDResponse = _QueryApplicationLinkByClientIDResponse;

export const DesmosQueryIncomingDTagTransferRequestsRequest = _QueryIncomingDTagTransferRequestsRequest;
export type DesmosQueryIncomingDTagTransferRequestsRequest = _QueryIncomingDTagTransferRequestsRequest;

export const DesmosQueryIncomingDTagTransferRequestsResponse = _QueryIncomingDTagTransferRequestsResponse;
export type DesmosQueryIncomingDTagTransferRequestsResponse = _QueryIncomingDTagTransferRequestsResponse;

export const DesmosDTagTransferRequest = _DTagTransferRequest;
export type DesmosDTagTransferRequest = _DTagTransferRequest;

export const DesmosMsgLinkApplication = _MsgLinkApplication;
export type DesmosMsgLinkApplication = _MsgLinkApplication;

export const DesmosMsgLinkApplicationResponse = _MsgLinkApplicationResponse;
export type DesmosMsgLinkApplicationResponse = _MsgLinkApplicationResponse;

export const DesmosMsgUnlinkApplication = _MsgUnlinkApplication;
export type DesmosMsgUnlinkApplication = _MsgUnlinkApplication;

export const DesmosMsgUnlinkApplicationResponse = _MsgUnlinkApplicationResponse;
export type DesmosMsgUnlinkApplicationResponse = _MsgUnlinkApplicationResponse;

export const DesmosQueryRelationshipsRequest = _QueryRelationshipsRequest;
export type DesmosQueryRelationshipsRequest = _QueryRelationshipsRequest;

export const DesmosQueryRelationshipsResponse = _QueryRelationshipsResponse;
export type DesmosQueryRelationshipsResponse = _QueryRelationshipsResponse;

export const DesmosQueryBlocksRequest = _QueryBlocksRequest;
export type DesmosQueryBlocksRequest = _QueryBlocksRequest;

export const DesmosQueryBlocksResponse = _QueryBlocksResponse;
export type DesmosQueryBlocksResponse = _QueryBlocksResponse;

export const DesmosProfile = _Profile;
export type DesmosProfile = _Profile;

export const DesmosPictures = _Pictures;
export type DesmosPictures = _Pictures;

export const DesmosMsgCreateRelationship = _MsgCreateRelationship;
export type DesmosMsgCreateRelationship = _MsgCreateRelationship;

export const DesmosMsgCreateRelationshipResponse = _MsgCreateRelationshipResponse;
export type DesmosMsgCreateRelationshipResponse = _MsgCreateRelationshipResponse;

export const DesmosMsgDeleteRelationship = _MsgDeleteRelationship;
export type DesmosMsgDeleteRelationship = _MsgDeleteRelationship;

export const DesmosMsgDeleteRelationshipResponse = _MsgDeleteRelationshipResponse;
export type DesmosMsgDeleteRelationshipResponse = _MsgDeleteRelationshipResponse;

export const DesmosMsgBlockUser = _MsgBlockUser;
export type DesmosMsgBlockUser = _MsgBlockUser;

export const DesmosMsgBlockUserResponse = _MsgBlockUserResponse;
export type DesmosMsgBlockUserResponse = _MsgBlockUserResponse;

export const DesmosMsgUnblockUser = _MsgUnblockUser;
export type DesmosMsgUnblockUser = _MsgUnblockUser;

export const DesmosMsgUnblockUserResponse = _MsgUnblockUserResponse;
export type DesmosMsgUnblockUserResponse = _MsgUnblockUserResponse;

export const DesmosChainLinkJSON = _ChainLinkJSON;
export type DesmosChainLinkJSON = _ChainLinkJSON;

