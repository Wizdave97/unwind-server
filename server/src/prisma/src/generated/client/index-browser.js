
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.15.0
 * Query Engine version: e51dc3b5a9ee790a07104bec1c9477d51740fe54
 */
Prisma.prismaVersion = {
  client: "2.15.0",
  engine: "e51dc3b5a9ee790a07104bec1c9477d51740fe54"
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

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  userId: 'userId',
  uid: 'uid',
  firstName: 'firstName',
  lastName: 'lastName',
  userName: 'userName',
  email: 'email',
  imgUrl: 'imgUrl',
  created: 'created',
  updated: 'updated',
  location: 'location'
});

exports.Prisma.PostScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  attachmentUrl: 'attachmentUrl',
  attachmentMeta: 'attachmentMeta',
  attachmentType: 'attachmentType',
  content: 'content',
  created: 'created',
  updated: 'updated',
  reaction: 'reaction',
  location: 'location',
  hashtags: 'hashtags',
  kisses: 'kisses',
  hearts: 'hearts',
  hot: 'hot',
  challengeId: 'challengeId',
  cruiseId: 'cruiseId'
});

exports.Prisma.CruiseScalarFieldEnum = makeEnum({
  id: 'id',
  slogan: 'slogan',
  attachmentType: 'attachmentType',
  attachmentMeta: 'attachmentMeta',
  attachmentUrl: 'attachmentUrl',
  creatorId: 'creatorId',
  reaction: 'reaction',
  kisses: 'kisses',
  hearts: 'hearts',
  hot: 'hot',
  hashtags: 'hashtags',
  created: 'created',
  updated: 'updated',
  userUserId: 'userUserId',
  postId: 'postId'
});

exports.Prisma.CommentScalarFieldEnum = makeEnum({
  id: 'id',
  entityId: 'entityId',
  entityType: 'entityType',
  comment: 'comment',
  attachmentMeta: 'attachmentMeta',
  attachmentType: 'attachmentType',
  attachmentUrl: 'attachmentUrl',
  userId: 'userId',
  reaction: 'reaction',
  kisses: 'kisses',
  hearts: 'hearts',
  hot: 'hot',
  created: 'created',
  updated: 'updated',
  postId: 'postId',
  challengeId: 'challengeId',
  cruiseId: 'cruiseId',
  userUserId: 'userUserId'
});

exports.Prisma.ChallengeScalarFieldEnum = makeEnum({
  id: 'id',
  challenge: 'challenge',
  creatorId: 'creatorId',
  attachmentType: 'attachmentType',
  attachmentUrl: 'attachmentUrl',
  attachmentMeta: 'attachmentMeta',
  reaction: 'reaction',
  hashtags: 'hashtags',
  kisses: 'kisses',
  hearts: 'hearts',
  hot: 'hot',
  start: 'start',
  end: 'end',
  created: 'created',
  updated: 'updated',
  userUserId: 'userUserId'
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

exports.EntityType = makeEnum({
  POST: 'POST',
  CRUISE: 'CRUISE',
  CHALLENGE: 'CHALLENGE'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Post: 'Post',
  Cruise: 'Cruise',
  Comment: 'Comment',
  Challenge: 'Challenge'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma-client-js/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
