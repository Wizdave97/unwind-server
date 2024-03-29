
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.19.0
 * Query Engine version: c1455d0b443d66b0d9db9bcb1bb9ee0d5bbc511d
 */
Prisma.prismaVersion = {
  client: "2.19.0",
  engine: "c1455d0b443d66b0d9db9bcb1bb9ee0d5bbc511d"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  userId: 'userId',
  uid: 'uid',
  cursor: 'cursor',
  firstName: 'firstName',
  lastName: 'lastName',
  userName: 'userName',
  bio: 'bio',
  cruise: 'cruise',
  email: 'email',
  imgUrl: 'imgUrl',
  created: 'created',
  updated: 'updated',
  location: 'location'
});

exports.Prisma.PostScalarFieldEnum = makeEnum({
  id: 'id',
  cursor: 'cursor',
  userId: 'userId',
  attachmentUrl: 'attachmentUrl',
  attachmentMeta: 'attachmentMeta',
  attachmentType: 'attachmentType',
  content: 'content',
  created: 'created',
  updated: 'updated',
  location: 'location',
  hashtags: 'hashtags',
  likedBy: 'likedBy',
  likes: 'likes',
  origin: 'origin',
  challengeId: 'challengeId'
});

exports.Prisma.CommentScalarFieldEnum = makeEnum({
  id: 'id',
  cursor: 'cursor',
  entityId: 'entityId',
  entityType: 'entityType',
  comment: 'comment',
  attachmentMeta: 'attachmentMeta',
  attachmentType: 'attachmentType',
  attachmentUrl: 'attachmentUrl',
  userId: 'userId',
  likedBy: 'likedBy',
  likes: 'likes',
  created: 'created',
  updated: 'updated',
  postId: 'postId',
  challengeId: 'challengeId',
  userUserId: 'userUserId'
});

exports.Prisma.ChallengeScalarFieldEnum = makeEnum({
  id: 'id',
  cursor: 'cursor',
  challenge: 'challenge',
  userId: 'userId',
  attachmentType: 'attachmentType',
  attachmentUrl: 'attachmentUrl',
  attachmentMeta: 'attachmentMeta',
  hashtags: 'hashtags',
  likedBy: 'likedBy',
  likes: 'likes',
  start: 'start',
  end: 'end',
  created: 'created',
  updated: 'updated',
  userUserId: 'userUserId'
});

exports.Prisma.PeekScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  expiresUTC: 'expiresUTC',
  active: 'active',
  peeks: 'peeks'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.AttachmentType = makeEnum({
  VIDEO: 'VIDEO',
  IMAGE: 'IMAGE',
  AUDIO: 'AUDIO'
});

exports.PostOrigin = makeEnum({
  REGULAR: 'REGULAR',
  OGCHALLENGE: 'OGCHALLENGE'
});

exports.EntityType = makeEnum({
  POST: 'POST',
  CHALLENGE: 'CHALLENGE',
  COMMENT: 'COMMENT'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Post: 'Post',
  Comment: 'Comment',
  Challenge: 'Challenge',
  Peek: 'Peek'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
