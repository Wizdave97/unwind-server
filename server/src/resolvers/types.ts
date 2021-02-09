
export enum AttachmentType {
    VIDEO = 'VIDEO',
    IMAGE = 'IMAGE',
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
    uid: string;
}

export type CreatePostArgs = {
    attachmentType: AttachmentType;
    uid: string;
    location?: LocationInput;
    content?: string;
    fileAttachment: FileInput;
}