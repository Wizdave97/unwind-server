
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  warnEnvConflicts,
  getPrismaClient,
  debugLib,
  sqltag,
  empty,
  join,
  raw,
  Decimal
} = require('./runtime')

const path = require('path')
const debug = debugLib('prisma-client')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


const dirnamePolyfill = path.join(process.cwd(), "src/prisma/src/generated/client")
const dirname = __dirname.length === 1 ? dirnamePolyfill : __dirname

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
  cursor: 'cursor',
  slogan: 'slogan',
  attachmentType: 'attachmentType',
  attachmentMeta: 'attachmentMeta',
  attachmentUrl: 'attachmentUrl',
  userId: 'userId',
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
  cursor: 'cursor',
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
  cursor: 'cursor',
  challenge: 'challenge',
  userId: 'userId',
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
  Challenge: 'Challenge',
  Peek: 'Peek'
});


/**
 * DMMF
 */

// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */

const config = {
  "generator": {
    "name": "client",
    "provider": "prisma-client-js",
    "output": "/usr/app/src/prisma/src/generated/client",
    "binaryTargets": [],
    "previewFeatures": [
      "createMany"
    ],
    "config": {},
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../../.env",
    "schemaEnvPath": "../../../../../.env"
  },
  "sqliteDatasourceOverrides": [],
  "relativePath": "../../..",
  "clientVersion": "2.19.0",
  "engineVersion": "c1455d0b443d66b0d9db9bcb1bb9ee0d5bbc511d",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql"
}
config.document = dmmf
config.dirname = dirname

/**
 * Only for env conflict warning
 * loading of env variable occurs in getPrismaClient
 */
const envPaths = {
  rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
}
warnEnvConflicts(envPaths)

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

/**
 * Build tool annotations
 * In order to make `ncc` and `@vercel/nft` happy.
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
**/
path.join(__dirname, 'query-engine-linux-musl');
path.join(process.cwd(), './src/prisma/src/generated/client/query-engine-linux-musl');

/**
 * Annotation for `@vercel/nft`
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
**/
path.join(__dirname, 'schema.prisma');
path.join(process.cwd(), './src/prisma/src/generated/client/schema.prisma');