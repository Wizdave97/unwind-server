
export enum AttachmentType {
    VIDEO = 'VIDEO',
    IMAGE = 'IMAGE',
    AUDIO = 'AUDIO'
}

export enum EntityType {
    POST = 'POST',
    CHALLENGE = 'CHALLENGE'
}

export enum ReactionType {
    KISSES = 'KISSES',
    HEARTS = 'HEARTS',
    HOT = 'HOT'
}
type LocationInput = {
    lat: number;
    long: number
}

type FileInput = {
    mimetype: string;
    filename: string;
    encoding: string;
    url: string;
}

export type CreateUserArgs = {
    email: string;
    firstName: string;
    lastName: string;
    uid: string;
}

export type UpdateUserArgs = {
    firstName?: string;
    lastName?: string;
    imgUrl?: string;
    userName?: string;
    bio?: string;
    cruise?: string;
    uid: string;
}

export type CreatePostArgs = {
    attachmentType?: AttachmentType;
    uid: string;
    location?: LocationInput;
    content: string;
    fileAttachment?: FileInput;
    challengeId?: number;
}

export type CreateChallengeArgs = {
    uid: string;
    challenge: string;
    attachmentType?: AttachmentType
    fileAttachment?: FileInput
    start: Date
    end: Date
}


export type CreateCommentArgs = {
    uid: string;
    comment: string;
    attachmentType?: AttachmentType
    fileAttachment?: FileInput
    entityId: number;
    entityType: EntityType;
}

export  type CreateReactionArgs =  {
    uid: string
    entityId: number;
    entityType: EntityType
    reactionType: ReactionType
}

export type FollowEntityArgs = {
    uid: string;
    id: number;
    entityType: EntityType;
}

export type UserFollowArgs = {
    currentUid: string;
    followUid: string;
}

export interface PaginationInterface<T> {
    filters: T;
    first?: number;
    last?: number;
    after: string;
    before: string;
}

type UserRelationFilter = {
    every: UserInputFilter
}

type CommentRelationFilter = {
    every: CommentInputFilter
}
type PostRelationFilter = {
    every: PostInputFilter
}


type ChallengeRelationFilter = {
    every: ChallengeInputFilter
}

export interface FieldExpressionInput {
    gte: number
    gt: number
    lt: number
    lte: number
    contains: string
    startsWith: string
    endsWith: string
    equals: number | string
    in: (number | string)[]
    notIn: (number | string) []
}

export interface PostInputFilter {
    id: FieldExpressionInput
    user: UserInputFilter
    content: FieldExpressionInput
    hashtags: FieldExpressionInput
    comments: CommentRelationFilter
    challenge: ChallengeInputFilter
    AND: PostInputFilter[]
    OR: PostInputFilter[]
}

export interface UserInputFilter {
    uid: FieldExpressionInput
    firstName: FieldExpressionInput
    lastName: FieldExpressionInput
    userName: FieldExpressionInput
    bio: FieldExpressionInput
    challengeFollowing: ChallengeRelationFilter
    following: UserRelationFilter
    followers: UserRelationFilter
    AND: UserInputFilter[]
    OR: UserInputFilter[]

}

export interface ChallengeInputFilter {
    id: FieldExpressionInput
    challenge: FieldExpressionInput
    creator: UserInputFilter
    hashtags: FieldExpressionInput
    created: FieldExpressionInput
    updated: FieldExpressionInput
    kisses: FieldExpressionInput
    hot: FieldExpressionInput
    hearts: FieldExpressionInput
    post: PostInputFilter
    AND: ChallengeInputFilter[]
    OR: ChallengeInputFilter[]
}

export interface CommentInputFilter {
    id: FieldExpressionInput
    comment: FieldExpressionInput
    user: UserInputFilter
    post: PostInputFilter
    challenge: ChallengeInputFilter
    kisses: FieldExpressionInput
    hot: FieldExpressionInput
    hearts: FieldExpressionInput
    AND: CommentInputFilter[]
    OR: CommentInputFilter[]
}

