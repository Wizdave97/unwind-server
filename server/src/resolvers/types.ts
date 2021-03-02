
export enum AttachmentType {
    VIDEO = 'VIDEO',
    IMAGE = 'IMAGE',
    AUDIO = 'AUDIO'
}

export enum EntityType {
    POST = 'POST',
    CHALLENGE = 'CHALLENGE',
    CRUISE = 'CRUISE',
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
    uid: string;
}

export type CreatePostArgs = {
    attachmentType: AttachmentType;
    uid: string;
    location?: LocationInput;
    content?: string;
    fileAttachment: FileInput;
}

export type CreateChallengeArgs = {
    uid: string;
    challenge: string;
    attachmentType: AttachmentType
    fileAttachment: FileInput
    start: Date
    end: Date
}

export type CreateCruiseArgs = {
    uid: string
    slogan: string
    attachmentType: AttachmentType
    fileAttachment: FileInput
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

export interface PostInputFilters {

}
