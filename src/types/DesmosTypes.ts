/* tslint:disable:variable-name */

import {
	Report as _Report,
 	Reports as _Reports,
 } from '../lib/proto/desmos/posts/v1beta1/report';

import {
	PollAnswer as _PollAnswer,
 	PollData as _PollData,
 	UserAnswer as _UserAnswer,
 } from '../lib/proto/desmos/posts/v1beta1/polls';

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
 } from '../lib/proto/desmos/posts/v1beta1/msgs';

import {
	Post as _Post,
 	Attachment as _Attachment,
 	Attribute as _Attribute,
 } from '../lib/proto/desmos/posts/v1beta1/posts';

import {
	RegisteredReaction as _RegisteredReaction,
 	PostReaction as _PostReaction,
 } from '../lib/proto/desmos/posts/v1beta1/reactions';

import {
	QueryPostsRequest as _QueryPostsRequest,
 	QueryPostsResponse as _QueryPostsResponse,
 	QueryPostRequest as _QueryPostRequest,
 	QueryPostResponse as _QueryPostResponse,
 	QueryUserAnswersRequest as _QueryUserAnswersRequest,
 	QueryUserAnswersResponse as _QueryUserAnswersResponse,
 	QueryRegisteredReactionsRequest as _QueryRegisteredReactionsRequest,
 	QueryRegisteredReactionsResponse as _QueryRegisteredReactionsResponse,
 	QueryReportsRequest as _QueryReportsRequest,
 	QueryReportsResponse as _QueryReportsResponse,
 	QueryPostReactionsRequest as _QueryPostReactionsRequest,
 	QueryPostReactionsResponse as _QueryPostReactionsResponse,
 	QueryPostCommentsRequest as _QueryPostCommentsRequest,
 	QueryPostCommentsResponse as _QueryPostCommentsResponse,
 } from '../lib/proto/desmos/posts/v1beta1/query';

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
 } from '../lib/proto/desmos/subspaces/v1beta1/msgs';

import {
	Subspace as _Subspace,
 } from '../lib/proto/desmos/subspaces/v1beta1/subspace';

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
 } from '../lib/proto/desmos/subspaces/v1beta1/query';

import {
	MinFee as _MinFee,
 } from '../lib/proto/desmos/fees/v1beta1/min_fee';

import {
	QueryUserChainLinkRequest as _QueryUserChainLinkRequest,
 	QueryUserChainLinkResponse as _QueryUserChainLinkResponse,
 	QueryUserChainLinksRequest as _QueryUserChainLinksRequest,
 	QueryUserChainLinksResponse as _QueryUserChainLinksResponse,
 } from '../lib/proto/desmos/profiles/v1beta1/query_chain_links';

import {
	QueryProfileRequest as _QueryProfileRequest,
 	QueryProfileResponse as _QueryProfileResponse,
 } from '../lib/proto/desmos/profiles/v1beta1/query_profile';

import {
	Params as _Params,
 	NicknameParams as _NicknameParams,
 	DTagParams as _DTagParams,
 	BioParams as _BioParams,
 	OracleParams as _OracleParams,
 } from '../lib/proto/desmos/profiles/v1beta1/models_params';

import {
	Relationship as _Relationship,
 	UserBlock as _UserBlock,
 } from '../lib/proto/desmos/profiles/v1beta1/models_relationships';

import {
	MsgSaveProfile as _MsgSaveProfile,
 	MsgSaveProfileResponse as _MsgSaveProfileResponse,
 	MsgDeleteProfile as _MsgDeleteProfile,
 	MsgDeleteProfileResponse as _MsgDeleteProfileResponse,
 } from '../lib/proto/desmos/profiles/v1beta1/msgs_profile';

import {
	ApplicationLink as _ApplicationLink,
 	Data as _Data,
 	OracleRequest as _OracleRequest,
 	OracleRequest_CallData as _OracleRequest_CallData,
 	Result as _Result,
 	Result_Success as _Result_Success,
 	Result_Failed as _Result_Failed,
 } from '../lib/proto/desmos/profiles/v1beta1/models_app_links';

import {
	ChainLink as _ChainLink,
 	ChainConfig as _ChainConfig,
 	Proof as _Proof,
 	Bech32Address as _Bech32Address,
 	Base58Address as _Base58Address,
 } from '../lib/proto/desmos/profiles/v1beta1/models_chain_links';

import {
	LinkChainAccountPacketData as _LinkChainAccountPacketData,
 	LinkChainAccountPacketAck as _LinkChainAccountPacketAck,
 } from '../lib/proto/desmos/profiles/v1beta1/models_packets';

import {
	MsgLinkChainAccount as _MsgLinkChainAccount,
 	MsgLinkChainAccountResponse as _MsgLinkChainAccountResponse,
 	MsgUnlinkChainAccount as _MsgUnlinkChainAccount,
 	MsgUnlinkChainAccountResponse as _MsgUnlinkChainAccountResponse,
 } from '../lib/proto/desmos/profiles/v1beta1/msgs_chain_links';

import {
	MsgRequestDTagTransfer as _MsgRequestDTagTransfer,
 	MsgRequestDTagTransferResponse as _MsgRequestDTagTransferResponse,
 	MsgCancelDTagTransferRequest as _MsgCancelDTagTransferRequest,
 	MsgCancelDTagTransferRequestResponse as _MsgCancelDTagTransferRequestResponse,
 	MsgAcceptDTagTransferRequest as _MsgAcceptDTagTransferRequest,
 	MsgAcceptDTagTransferRequestResponse as _MsgAcceptDTagTransferRequestResponse,
 	MsgRefuseDTagTransferRequest as _MsgRefuseDTagTransferRequest,
 	MsgRefuseDTagTransferRequestResponse as _MsgRefuseDTagTransferRequestResponse,
 } from '../lib/proto/desmos/profiles/v1beta1/msgs_dtag_requests';

import {
	QueryUserApplicationLinkRequest as _QueryUserApplicationLinkRequest,
 	QueryUserApplicationLinkResponse as _QueryUserApplicationLinkResponse,
 	QueryUserApplicationLinksRequest as _QueryUserApplicationLinksRequest,
 	QueryUserApplicationLinksResponse as _QueryUserApplicationLinksResponse,
 	QueryApplicationLinkByClientIDRequest as _QueryApplicationLinkByClientIDRequest,
 	QueryApplicationLinkByClientIDResponse as _QueryApplicationLinkByClientIDResponse,
 } from '../lib/proto/desmos/profiles/v1beta1/query_app_links';

import {
	QueryIncomingDTagTransferRequestsRequest as _QueryIncomingDTagTransferRequestsRequest,
 	QueryIncomingDTagTransferRequestsResponse as _QueryIncomingDTagTransferRequestsResponse,
 } from '../lib/proto/desmos/profiles/v1beta1/query_dtag_requests';

import {
	DTagTransferRequest as _DTagTransferRequest,
 } from '../lib/proto/desmos/profiles/v1beta1/models_dtag_requests';

import {
	MsgLinkApplication as _MsgLinkApplication,
 	MsgLinkApplicationResponse as _MsgLinkApplicationResponse,
 	MsgUnlinkApplication as _MsgUnlinkApplication,
 	MsgUnlinkApplicationResponse as _MsgUnlinkApplicationResponse,
 } from '../lib/proto/desmos/profiles/v1beta1/msgs_app_links';

import {
	QueryUserRelationshipsRequest as _QueryUserRelationshipsRequest,
 	QueryUserRelationshipsResponse as _QueryUserRelationshipsResponse,
 	QueryUserBlocksRequest as _QueryUserBlocksRequest,
 	QueryUserBlocksResponse as _QueryUserBlocksResponse,
 } from '../lib/proto/desmos/profiles/v1beta1/query_relationships';

import {
	Profile as _Profile,
 	Pictures as _Pictures,
 } from '../lib/proto/desmos/profiles/v1beta1/models_profile';

import {
	MsgCreateRelationship as _MsgCreateRelationship,
 	MsgCreateRelationshipResponse as _MsgCreateRelationshipResponse,
 	MsgDeleteRelationship as _MsgDeleteRelationship,
 	MsgDeleteRelationshipResponse as _MsgDeleteRelationshipResponse,
 	MsgBlockUser as _MsgBlockUser,
 	MsgBlockUserResponse as _MsgBlockUserResponse,
 	MsgUnblockUser as _MsgUnblockUser,
 	MsgUnblockUserResponse as _MsgUnblockUserResponse,
 } from '../lib/proto/desmos/profiles/v1beta1/msgs_relationships';

import {
	ChainLinkJSON as _ChainLinkJSON,
 } from '../lib/proto/desmos/profiles/v1beta1/client/cli';


namespace DesmosTypes {
	export const Report = _Report;
	export type Report = _Report;

	export const Reports = _Reports;
	export type Reports = _Reports;

	export const PollAnswer = _PollAnswer;
	export type PollAnswer = _PollAnswer;

	export const PollData = _PollData;
	export type PollData = _PollData;

	export const UserAnswer = _UserAnswer;
	export type UserAnswer = _UserAnswer;

	export const MsgCreatePost = _MsgCreatePost;
	export type MsgCreatePost = _MsgCreatePost;

	export const MsgCreatePostResponse = _MsgCreatePostResponse;
	export type MsgCreatePostResponse = _MsgCreatePostResponse;

	export const MsgEditPost = _MsgEditPost;
	export type MsgEditPost = _MsgEditPost;

	export const MsgEditPostResponse = _MsgEditPostResponse;
	export type MsgEditPostResponse = _MsgEditPostResponse;

	export const MsgAddPostReaction = _MsgAddPostReaction;
	export type MsgAddPostReaction = _MsgAddPostReaction;

	export const MsgAddPostReactionResponse = _MsgAddPostReactionResponse;
	export type MsgAddPostReactionResponse = _MsgAddPostReactionResponse;

	export const MsgRemovePostReaction = _MsgRemovePostReaction;
	export type MsgRemovePostReaction = _MsgRemovePostReaction;

	export const MsgRemovePostReactionResponse = _MsgRemovePostReactionResponse;
	export type MsgRemovePostReactionResponse = _MsgRemovePostReactionResponse;

	export const MsgAnswerPoll = _MsgAnswerPoll;
	export type MsgAnswerPoll = _MsgAnswerPoll;

	export const MsgAnswerPollResponse = _MsgAnswerPollResponse;
	export type MsgAnswerPollResponse = _MsgAnswerPollResponse;

	export const MsgRegisterReaction = _MsgRegisterReaction;
	export type MsgRegisterReaction = _MsgRegisterReaction;

	export const MsgRegisterReactionResponse = _MsgRegisterReactionResponse;
	export type MsgRegisterReactionResponse = _MsgRegisterReactionResponse;

	export const MsgReportPost = _MsgReportPost;
	export type MsgReportPost = _MsgReportPost;

	export const MsgReportPostResponse = _MsgReportPostResponse;
	export type MsgReportPostResponse = _MsgReportPostResponse;

	export const Post = _Post;
	export type Post = _Post;

	export const Attachment = _Attachment;
	export type Attachment = _Attachment;

	export const Attribute = _Attribute;
	export type Attribute = _Attribute;

	export const RegisteredReaction = _RegisteredReaction;
	export type RegisteredReaction = _RegisteredReaction;

	export const PostReaction = _PostReaction;
	export type PostReaction = _PostReaction;

	export const QueryPostsRequest = _QueryPostsRequest;
	export type QueryPostsRequest = _QueryPostsRequest;

	export const QueryPostsResponse = _QueryPostsResponse;
	export type QueryPostsResponse = _QueryPostsResponse;

	export const QueryPostRequest = _QueryPostRequest;
	export type QueryPostRequest = _QueryPostRequest;

	export const QueryPostResponse = _QueryPostResponse;
	export type QueryPostResponse = _QueryPostResponse;

	export const QueryUserAnswersRequest = _QueryUserAnswersRequest;
	export type QueryUserAnswersRequest = _QueryUserAnswersRequest;

	export const QueryUserAnswersResponse = _QueryUserAnswersResponse;
	export type QueryUserAnswersResponse = _QueryUserAnswersResponse;

	export const QueryRegisteredReactionsRequest = _QueryRegisteredReactionsRequest;
	export type QueryRegisteredReactionsRequest = _QueryRegisteredReactionsRequest;

	export const QueryRegisteredReactionsResponse = _QueryRegisteredReactionsResponse;
	export type QueryRegisteredReactionsResponse = _QueryRegisteredReactionsResponse;

	export const QueryReportsRequest = _QueryReportsRequest;
	export type QueryReportsRequest = _QueryReportsRequest;

	export const QueryReportsResponse = _QueryReportsResponse;
	export type QueryReportsResponse = _QueryReportsResponse;

	export const QueryPostReactionsRequest = _QueryPostReactionsRequest;
	export type QueryPostReactionsRequest = _QueryPostReactionsRequest;

	export const QueryPostReactionsResponse = _QueryPostReactionsResponse;
	export type QueryPostReactionsResponse = _QueryPostReactionsResponse;

	export const QueryPostCommentsRequest = _QueryPostCommentsRequest;
	export type QueryPostCommentsRequest = _QueryPostCommentsRequest;

	export const QueryPostCommentsResponse = _QueryPostCommentsResponse;
	export type QueryPostCommentsResponse = _QueryPostCommentsResponse;

	export const MsgCreateSubspace = _MsgCreateSubspace;
	export type MsgCreateSubspace = _MsgCreateSubspace;

	export const MsgCreateSubspaceResponse = _MsgCreateSubspaceResponse;
	export type MsgCreateSubspaceResponse = _MsgCreateSubspaceResponse;

	export const MsgEditSubspace = _MsgEditSubspace;
	export type MsgEditSubspace = _MsgEditSubspace;

	export const MsgEditSubspaceResponse = _MsgEditSubspaceResponse;
	export type MsgEditSubspaceResponse = _MsgEditSubspaceResponse;

	export const MsgAddAdmin = _MsgAddAdmin;
	export type MsgAddAdmin = _MsgAddAdmin;

	export const MsgAddAdminResponse = _MsgAddAdminResponse;
	export type MsgAddAdminResponse = _MsgAddAdminResponse;

	export const MsgRemoveAdmin = _MsgRemoveAdmin;
	export type MsgRemoveAdmin = _MsgRemoveAdmin;

	export const MsgRemoveAdminResponse = _MsgRemoveAdminResponse;
	export type MsgRemoveAdminResponse = _MsgRemoveAdminResponse;

	export const MsgRegisterUser = _MsgRegisterUser;
	export type MsgRegisterUser = _MsgRegisterUser;

	export const MsgRegisterUserResponse = _MsgRegisterUserResponse;
	export type MsgRegisterUserResponse = _MsgRegisterUserResponse;

	export const MsgUnregisterUser = _MsgUnregisterUser;
	export type MsgUnregisterUser = _MsgUnregisterUser;

	export const MsgUnregisterUserResponse = _MsgUnregisterUserResponse;
	export type MsgUnregisterUserResponse = _MsgUnregisterUserResponse;

	export const MsgBanUser = _MsgBanUser;
	export type MsgBanUser = _MsgBanUser;

	export const MsgBanUserResponse = _MsgBanUserResponse;
	export type MsgBanUserResponse = _MsgBanUserResponse;

	export const MsgUnbanUser = _MsgUnbanUser;
	export type MsgUnbanUser = _MsgUnbanUser;

	export const MsgUnbanUserResponse = _MsgUnbanUserResponse;
	export type MsgUnbanUserResponse = _MsgUnbanUserResponse;

	export const Subspace = _Subspace;
	export type Subspace = _Subspace;

	export const QuerySubspaceRequest = _QuerySubspaceRequest;
	export type QuerySubspaceRequest = _QuerySubspaceRequest;

	export const QuerySubspaceResponse = _QuerySubspaceResponse;
	export type QuerySubspaceResponse = _QuerySubspaceResponse;

	export const QuerySubspacesRequest = _QuerySubspacesRequest;
	export type QuerySubspacesRequest = _QuerySubspacesRequest;

	export const QuerySubspacesResponse = _QuerySubspacesResponse;
	export type QuerySubspacesResponse = _QuerySubspacesResponse;

	export const QueryAdminsRequest = _QueryAdminsRequest;
	export type QueryAdminsRequest = _QueryAdminsRequest;

	export const QueryAdminsResponse = _QueryAdminsResponse;
	export type QueryAdminsResponse = _QueryAdminsResponse;

	export const QueryRegisteredUsersRequest = _QueryRegisteredUsersRequest;
	export type QueryRegisteredUsersRequest = _QueryRegisteredUsersRequest;

	export const QueryRegisteredUsersResponse = _QueryRegisteredUsersResponse;
	export type QueryRegisteredUsersResponse = _QueryRegisteredUsersResponse;

	export const QueryBannedUsersRequest = _QueryBannedUsersRequest;
	export type QueryBannedUsersRequest = _QueryBannedUsersRequest;

	export const QueryBannedUsersResponse = _QueryBannedUsersResponse;
	export type QueryBannedUsersResponse = _QueryBannedUsersResponse;

	export const MinFee = _MinFee;
	export type MinFee = _MinFee;

	export const QueryUserChainLinkRequest = _QueryUserChainLinkRequest;
	export type QueryUserChainLinkRequest = _QueryUserChainLinkRequest;

	export const QueryUserChainLinkResponse = _QueryUserChainLinkResponse;
	export type QueryUserChainLinkResponse = _QueryUserChainLinkResponse;

	export const QueryUserChainLinksRequest = _QueryUserChainLinksRequest;
	export type QueryUserChainLinksRequest = _QueryUserChainLinksRequest;

	export const QueryUserChainLinksResponse = _QueryUserChainLinksResponse;
	export type QueryUserChainLinksResponse = _QueryUserChainLinksResponse;

	export const QueryProfileRequest = _QueryProfileRequest;
	export type QueryProfileRequest = _QueryProfileRequest;

	export const QueryProfileResponse = _QueryProfileResponse;
	export type QueryProfileResponse = _QueryProfileResponse;

	export const Params = _Params;
	export type Params = _Params;

	export const NicknameParams = _NicknameParams;
	export type NicknameParams = _NicknameParams;

	export const DTagParams = _DTagParams;
	export type DTagParams = _DTagParams;

	export const BioParams = _BioParams;
	export type BioParams = _BioParams;

	export const OracleParams = _OracleParams;
	export type OracleParams = _OracleParams;

	export const Relationship = _Relationship;
	export type Relationship = _Relationship;

	export const UserBlock = _UserBlock;
	export type UserBlock = _UserBlock;

	export const MsgSaveProfile = _MsgSaveProfile;
	export type MsgSaveProfile = _MsgSaveProfile;

	export const MsgSaveProfileResponse = _MsgSaveProfileResponse;
	export type MsgSaveProfileResponse = _MsgSaveProfileResponse;

	export const MsgDeleteProfile = _MsgDeleteProfile;
	export type MsgDeleteProfile = _MsgDeleteProfile;

	export const MsgDeleteProfileResponse = _MsgDeleteProfileResponse;
	export type MsgDeleteProfileResponse = _MsgDeleteProfileResponse;

	export const ApplicationLink = _ApplicationLink;
	export type ApplicationLink = _ApplicationLink;

	export const Data = _Data;
	export type Data = _Data;

	export const OracleRequest = _OracleRequest;
	export type OracleRequest = _OracleRequest;

	export const OracleRequest_CallData = _OracleRequest_CallData;
	export type OracleRequest_CallData = _OracleRequest_CallData;

	export const Result = _Result;
	export type Result = _Result;

	export const Result_Success = _Result_Success;
	export type Result_Success = _Result_Success;

	export const Result_Failed = _Result_Failed;
	export type Result_Failed = _Result_Failed;

	export const ChainLink = _ChainLink;
	export type ChainLink = _ChainLink;

	export const ChainConfig = _ChainConfig;
	export type ChainConfig = _ChainConfig;

	export const Proof = _Proof;
	export type Proof = _Proof;

	export const Bech32Address = _Bech32Address;
	export type Bech32Address = _Bech32Address;

	export const Base58Address = _Base58Address;
	export type Base58Address = _Base58Address;

	export const LinkChainAccountPacketData = _LinkChainAccountPacketData;
	export type LinkChainAccountPacketData = _LinkChainAccountPacketData;

	export const LinkChainAccountPacketAck = _LinkChainAccountPacketAck;
	export type LinkChainAccountPacketAck = _LinkChainAccountPacketAck;

	export const MsgLinkChainAccount = _MsgLinkChainAccount;
	export type MsgLinkChainAccount = _MsgLinkChainAccount;

	export const MsgLinkChainAccountResponse = _MsgLinkChainAccountResponse;
	export type MsgLinkChainAccountResponse = _MsgLinkChainAccountResponse;

	export const MsgUnlinkChainAccount = _MsgUnlinkChainAccount;
	export type MsgUnlinkChainAccount = _MsgUnlinkChainAccount;

	export const MsgUnlinkChainAccountResponse = _MsgUnlinkChainAccountResponse;
	export type MsgUnlinkChainAccountResponse = _MsgUnlinkChainAccountResponse;

	export const MsgRequestDTagTransfer = _MsgRequestDTagTransfer;
	export type MsgRequestDTagTransfer = _MsgRequestDTagTransfer;

	export const MsgRequestDTagTransferResponse = _MsgRequestDTagTransferResponse;
	export type MsgRequestDTagTransferResponse = _MsgRequestDTagTransferResponse;

	export const MsgCancelDTagTransferRequest = _MsgCancelDTagTransferRequest;
	export type MsgCancelDTagTransferRequest = _MsgCancelDTagTransferRequest;

	export const MsgCancelDTagTransferRequestResponse = _MsgCancelDTagTransferRequestResponse;
	export type MsgCancelDTagTransferRequestResponse = _MsgCancelDTagTransferRequestResponse;

	export const MsgAcceptDTagTransferRequest = _MsgAcceptDTagTransferRequest;
	export type MsgAcceptDTagTransferRequest = _MsgAcceptDTagTransferRequest;

	export const MsgAcceptDTagTransferRequestResponse = _MsgAcceptDTagTransferRequestResponse;
	export type MsgAcceptDTagTransferRequestResponse = _MsgAcceptDTagTransferRequestResponse;

	export const MsgRefuseDTagTransferRequest = _MsgRefuseDTagTransferRequest;
	export type MsgRefuseDTagTransferRequest = _MsgRefuseDTagTransferRequest;

	export const MsgRefuseDTagTransferRequestResponse = _MsgRefuseDTagTransferRequestResponse;
	export type MsgRefuseDTagTransferRequestResponse = _MsgRefuseDTagTransferRequestResponse;

	export const QueryUserApplicationLinkRequest = _QueryUserApplicationLinkRequest;
	export type QueryUserApplicationLinkRequest = _QueryUserApplicationLinkRequest;

	export const QueryUserApplicationLinkResponse = _QueryUserApplicationLinkResponse;
	export type QueryUserApplicationLinkResponse = _QueryUserApplicationLinkResponse;

	export const QueryUserApplicationLinksRequest = _QueryUserApplicationLinksRequest;
	export type QueryUserApplicationLinksRequest = _QueryUserApplicationLinksRequest;

	export const QueryUserApplicationLinksResponse = _QueryUserApplicationLinksResponse;
	export type QueryUserApplicationLinksResponse = _QueryUserApplicationLinksResponse;

	export const QueryApplicationLinkByClientIDRequest = _QueryApplicationLinkByClientIDRequest;
	export type QueryApplicationLinkByClientIDRequest = _QueryApplicationLinkByClientIDRequest;

	export const QueryApplicationLinkByClientIDResponse = _QueryApplicationLinkByClientIDResponse;
	export type QueryApplicationLinkByClientIDResponse = _QueryApplicationLinkByClientIDResponse;

	export const QueryIncomingDTagTransferRequestsRequest = _QueryIncomingDTagTransferRequestsRequest;
	export type QueryIncomingDTagTransferRequestsRequest = _QueryIncomingDTagTransferRequestsRequest;

	export const QueryIncomingDTagTransferRequestsResponse = _QueryIncomingDTagTransferRequestsResponse;
	export type QueryIncomingDTagTransferRequestsResponse = _QueryIncomingDTagTransferRequestsResponse;

	export const DTagTransferRequest = _DTagTransferRequest;
	export type DTagTransferRequest = _DTagTransferRequest;

	export const MsgLinkApplication = _MsgLinkApplication;
	export type MsgLinkApplication = _MsgLinkApplication;

	export const MsgLinkApplicationResponse = _MsgLinkApplicationResponse;
	export type MsgLinkApplicationResponse = _MsgLinkApplicationResponse;

	export const MsgUnlinkApplication = _MsgUnlinkApplication;
	export type MsgUnlinkApplication = _MsgUnlinkApplication;

	export const MsgUnlinkApplicationResponse = _MsgUnlinkApplicationResponse;
	export type MsgUnlinkApplicationResponse = _MsgUnlinkApplicationResponse;

	export const QueryUserRelationshipsRequest = _QueryUserRelationshipsRequest;
	export type QueryUserRelationshipsRequest = _QueryUserRelationshipsRequest;

	export const QueryUserRelationshipsResponse = _QueryUserRelationshipsResponse;
	export type QueryUserRelationshipsResponse = _QueryUserRelationshipsResponse;

	export const QueryUserBlocksRequest = _QueryUserBlocksRequest;
	export type QueryUserBlocksRequest = _QueryUserBlocksRequest;

	export const QueryUserBlocksResponse = _QueryUserBlocksResponse;
	export type QueryUserBlocksResponse = _QueryUserBlocksResponse;

	export const Profile = _Profile;
	export type Profile = _Profile;

	export const Pictures = _Pictures;
	export type Pictures = _Pictures;

	export const MsgCreateRelationship = _MsgCreateRelationship;
	export type MsgCreateRelationship = _MsgCreateRelationship;

	export const MsgCreateRelationshipResponse = _MsgCreateRelationshipResponse;
	export type MsgCreateRelationshipResponse = _MsgCreateRelationshipResponse;

	export const MsgDeleteRelationship = _MsgDeleteRelationship;
	export type MsgDeleteRelationship = _MsgDeleteRelationship;

	export const MsgDeleteRelationshipResponse = _MsgDeleteRelationshipResponse;
	export type MsgDeleteRelationshipResponse = _MsgDeleteRelationshipResponse;

	export const MsgBlockUser = _MsgBlockUser;
	export type MsgBlockUser = _MsgBlockUser;

	export const MsgBlockUserResponse = _MsgBlockUserResponse;
	export type MsgBlockUserResponse = _MsgBlockUserResponse;

	export const MsgUnblockUser = _MsgUnblockUser;
	export type MsgUnblockUser = _MsgUnblockUser;

	export const MsgUnblockUserResponse = _MsgUnblockUserResponse;
	export type MsgUnblockUserResponse = _MsgUnblockUserResponse;

	export const ChainLinkJSON = _ChainLinkJSON;
	export type ChainLinkJSON = _ChainLinkJSON;

}

export default DesmosTypes;