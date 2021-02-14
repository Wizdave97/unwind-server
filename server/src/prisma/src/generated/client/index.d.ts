
/**
 * Client
**/

import * as runtime from './runtime';


/**
 * Model User
 */

export type User = {
  userId: number
  uid: string
  firstName: string
  lastName: string
  userName: string | null
  email: string
  imgUrl: string | null
  created: Date
  updated: Date
  location: Prisma.JsonValue | null
}

/**
 * Model Post
 */

export type Post = {
  id: number
  userId: string
  attachmentUrl: string
  attachmentMeta: Prisma.JsonValue
  attachmentType: AttachmentType
  content: string | null
  created: Date
  updated: Date
  reaction: Prisma.JsonValue | null
  location: Prisma.JsonValue | null
  hashtags: string[]
  kisses: string[]
  hearts: string[]
  hot: string[]
  challengeId: number | null
}

/**
 * Model Cruise
 */

export type Cruise = {
  id: number
  slogan: string
  attachmentType: AttachmentType
  attachmentMeta: Prisma.JsonValue
  attachmentUrl: string
  creatorId: string
  reaction: Prisma.JsonValue
  kisses: string[]
  hearts: string[]
  hot: string[]
  hashtags: string[]
  created: Date
  updated: Date
  userUserId: number | null
  postId: number | null
}

/**
 * Model Comment
 */

export type Comment = {
  id: number
  entityId: number
  entityType: EntityType
  comment: string
  attachmentMeta: Prisma.JsonValue | null
  attachmentType: AttachmentType | null
  attachmentUrl: string | null
  userId: string
  reaction: Prisma.JsonValue
  kisses: string[]
  hearts: string[]
  hot: string[]
  created: Date
  updated: Date
  postId: number | null
  challengeId: number | null
  cruiseId: number | null
  userUserId: number | null
}

/**
 * Model Challenge
 */

export type Challenge = {
  id: number
  challenge: string
  creatorId: string
  attachmentType: AttachmentType
  attachmentUrl: string
  attachmentMeta: Prisma.JsonValue
  reaction: Prisma.JsonValue
  hashtags: string[]
  kisses: string[]
  hearts: string[]
  hot: string[]
  start: Date | null
  end: Date | null
  created: Date
  updated: Date
  userUserId: number | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const AttachmentType: {
  VIDEO: 'VIDEO',
  IMAGE: 'IMAGE',
  AUDIO: 'AUDIO'
};

export type AttachmentType = (typeof AttachmentType)[keyof typeof AttachmentType]


export const EntityType: {
  POST: 'POST',
  CRUISE: 'CRUISE',
  CHALLENGE: 'CHALLENGE'
};

export type EntityType = (typeof EntityType)[keyof typeof EntityType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): Promise<T>;

  /**
   * Execute queries in a transaction
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   */
  $transaction: PromiseConstructor['all']

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate;

  /**
   * `prisma.cruise`: Exposes CRUD operations for the **Cruise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cruises
    * const cruises = await prisma.cruise.findMany()
    * ```
    */
  get cruise(): Prisma.CruiseDelegate;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate;

  /**
   * `prisma.challenge`: Exposes CRUD operations for the **Challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.ChallengeDelegate;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 2.15.0
   * Query Engine version: e51dc3b5a9ee790a07104bec1c9477d51740fe54
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  export type Union = any

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, 'avg' | 'sum' | 'count' | 'min' | 'max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Post: 'Post',
    Cruise: 'Cruise',
    Comment: 'Comment',
    Challenge: 'Challenge'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 

  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }


  /**
   * Model User
   */


  export type AggregateUser = {
    count: UserCountAggregateOutputType | null
    avg: UserAvgAggregateOutputType | null
    sum: UserSumAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number
  }

  export type UserSumAggregateOutputType = {
    userId: number
  }

  export type UserMinAggregateOutputType = {
    userId: number
    uid: string | null
    firstName: string | null
    lastName: string | null
    userName: string | null
    email: string | null
    imgUrl: string | null
    created: Date | null
    updated: Date | null
    location: JsonValue | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number
    uid: string | null
    firstName: string | null
    lastName: string | null
    userName: string | null
    email: string | null
    imgUrl: string | null
    created: Date | null
    updated: Date | null
    location: JsonValue | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    uid: number | null
    firstName: number | null
    lastName: number | null
    userName: number | null
    email: number | null
    imgUrl: number | null
    created: number | null
    updated: number | null
    location: number | null
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    uid?: true
    firstName?: true
    lastName?: true
    userName?: true
    email?: true
    imgUrl?: true
    created?: true
    updated?: true
    location?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    uid?: true
    firstName?: true
    lastName?: true
    userName?: true
    email?: true
    imgUrl?: true
    created?: true
    updated?: true
    location?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    uid?: true
    firstName?: true
    lastName?: true
    userName?: true
    email?: true
    imgUrl?: true
    created?: true
    updated?: true
    location?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
    **/
    where?: UserWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Users to fetch.
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }



  export type UserSelect = {
    userId?: boolean
    uid?: boolean
    firstName?: boolean
    lastName?: boolean
    userName?: boolean
    email?: boolean
    imgUrl?: boolean
    following?: boolean | UserFindManyArgs
    followers?: boolean | UserFindManyArgs
    created?: boolean
    updated?: boolean
    location?: boolean
    posts?: boolean | PostFindManyArgs
    cruises?: boolean | CruiseFindManyArgs
    comment?: boolean | CommentFindManyArgs
    challenges?: boolean | ChallengeFindManyArgs
    cruiseFollowing?: boolean | CruiseFindManyArgs
    challengeFollowing?: boolean | ChallengeFindManyArgs
    Cruise?: boolean | CruiseFindManyArgs
    Comment?: boolean | CommentFindManyArgs
    Challenge?: boolean | ChallengeFindManyArgs
  }

  export type UserInclude = {
    following?: boolean | UserFindManyArgs
    followers?: boolean | UserFindManyArgs
    posts?: boolean | PostFindManyArgs
    cruises?: boolean | CruiseFindManyArgs
    comment?: boolean | CommentFindManyArgs
    challenges?: boolean | ChallengeFindManyArgs
    cruiseFollowing?: boolean | CruiseFindManyArgs
    challengeFollowing?: boolean | ChallengeFindManyArgs
    Cruise?: boolean | CruiseFindManyArgs
    Comment?: boolean | CommentFindManyArgs
    Challenge?: boolean | ChallengeFindManyArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'following'
        ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'followers'
        ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'posts'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends 'cruises'
        ? Array < CruiseGetPayload<S['include'][P]>>  :
        P extends 'comment'
        ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'challenges'
        ? Array < ChallengeGetPayload<S['include'][P]>>  :
        P extends 'cruiseFollowing'
        ? Array < CruiseGetPayload<S['include'][P]>>  :
        P extends 'challengeFollowing'
        ? Array < ChallengeGetPayload<S['include'][P]>>  :
        P extends 'Cruise'
        ? Array < CruiseGetPayload<S['include'][P]>>  :
        P extends 'Comment'
        ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'Challenge'
        ? Array < ChallengeGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'following'
        ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'followers'
        ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'posts'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends 'cruises'
        ? Array < CruiseGetPayload<S['select'][P]>>  :
        P extends 'comment'
        ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'challenges'
        ? Array < ChallengeGetPayload<S['select'][P]>>  :
        P extends 'cruiseFollowing'
        ? Array < CruiseGetPayload<S['select'][P]>>  :
        P extends 'challengeFollowing'
        ? Array < ChallengeGetPayload<S['select'][P]>>  :
        P extends 'Cruise'
        ? Array < CruiseGetPayload<S['select'][P]>>  :
        P extends 'Comment'
        ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'Challenge'
        ? Array < ChallengeGetPayload<S['select'][P]>>  : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>

    /**
     * Find the first User that matches the filter.
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Users.
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Promise<GetUserAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    following<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>;

    followers<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>;

    posts<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, Promise<Array<Post>>, Promise<Array<PostGetPayload<T>>>>;

    cruises<T extends CruiseFindManyArgs = {}>(args?: Subset<T, CruiseFindManyArgs>): CheckSelect<T, Promise<Array<Cruise>>, Promise<Array<CruiseGetPayload<T>>>>;

    comment<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, Promise<Array<Comment>>, Promise<Array<CommentGetPayload<T>>>>;

    challenges<T extends ChallengeFindManyArgs = {}>(args?: Subset<T, ChallengeFindManyArgs>): CheckSelect<T, Promise<Array<Challenge>>, Promise<Array<ChallengeGetPayload<T>>>>;

    cruiseFollowing<T extends CruiseFindManyArgs = {}>(args?: Subset<T, CruiseFindManyArgs>): CheckSelect<T, Promise<Array<Cruise>>, Promise<Array<CruiseGetPayload<T>>>>;

    challengeFollowing<T extends ChallengeFindManyArgs = {}>(args?: Subset<T, ChallengeFindManyArgs>): CheckSelect<T, Promise<Array<Challenge>>, Promise<Array<ChallengeGetPayload<T>>>>;

    Cruise<T extends CruiseFindManyArgs = {}>(args?: Subset<T, CruiseFindManyArgs>): CheckSelect<T, Promise<Array<Cruise>>, Promise<Array<CruiseGetPayload<T>>>>;

    Comment<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, Promise<Array<Comment>>, Promise<Array<CommentGetPayload<T>>>>;

    Challenge<T extends ChallengeFindManyArgs = {}>(args?: Subset<T, ChallengeFindManyArgs>): CheckSelect<T, Promise<Array<Challenge>>, Promise<Array<ChallengeGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
    **/
    where?: UserWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Users to fetch.
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Users.
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
    **/
    where?: UserWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Users to fetch.
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
    **/
    data: XOR<UserUncheckedCreateInput, UserCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
    **/
    data: XOR<UserUncheckedUpdateInput, UserUpdateInput>
    /**
     * Choose, which User to update.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUncheckedUpdateManyInput, UserUpdateManyMutationInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
    **/
    create: XOR<UserUncheckedCreateInput, UserCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<UserUncheckedUpdateInput, UserUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
  }



  /**
   * Model Post
   */


  export type AggregatePost = {
    count: PostCountAggregateOutputType | null
    avg: PostAvgAggregateOutputType | null
    sum: PostSumAggregateOutputType | null
    min: PostMinAggregateOutputType | null
    max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number
    challengeId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number
    challengeId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number
    userId: string | null
    attachmentUrl: string | null
    attachmentMeta: JsonValue | null
    attachmentType: AttachmentType | null
    content: string | null
    created: Date | null
    updated: Date | null
    reaction: JsonValue | null
    location: JsonValue | null
    challengeId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number
    userId: string | null
    attachmentUrl: string | null
    attachmentMeta: JsonValue | null
    attachmentType: AttachmentType | null
    content: string | null
    created: Date | null
    updated: Date | null
    reaction: JsonValue | null
    location: JsonValue | null
    challengeId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    userId: number | null
    attachmentUrl: number | null
    attachmentMeta: number | null
    attachmentType: number | null
    content: number | null
    created: number | null
    updated: number | null
    reaction: number | null
    location: number | null
    hashtags: number | null
    kisses: number | null
    hearts: number | null
    hot: number | null
    challengeId: number | null
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    challengeId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    challengeId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    userId?: true
    attachmentUrl?: true
    attachmentMeta?: true
    attachmentType?: true
    content?: true
    created?: true
    updated?: true
    reaction?: true
    location?: true
    challengeId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    userId?: true
    attachmentUrl?: true
    attachmentMeta?: true
    attachmentType?: true
    content?: true
    created?: true
    updated?: true
    reaction?: true
    location?: true
    challengeId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    userId?: true
    attachmentUrl?: true
    attachmentMeta?: true
    attachmentType?: true
    content?: true
    created?: true
    updated?: true
    reaction?: true
    location?: true
    hashtags?: true
    kisses?: true
    hearts?: true
    hot?: true
    challengeId?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
    **/
    where?: PostWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Posts to fetch.
    **/
    orderBy?: Enumerable<PostOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
    [P in keyof T & keyof AggregatePost]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }



  export type PostSelect = {
    id?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    attachmentUrl?: boolean
    attachmentMeta?: boolean
    attachmentType?: boolean
    content?: boolean
    created?: boolean
    updated?: boolean
    reaction?: boolean
    location?: boolean
    hashtags?: boolean
    comments?: boolean | CommentFindManyArgs
    cruises?: boolean | CruiseFindManyArgs
    kisses?: boolean
    hearts?: boolean
    hot?: boolean
    challengeId?: boolean
  }

  export type PostInclude = {
    user?: boolean | UserArgs
    comments?: boolean | CommentFindManyArgs
    cruises?: boolean | CruiseFindManyArgs
  }

  export type PostGetPayload<
    S extends boolean | null | undefined | PostArgs,
    U = keyof S
      > = S extends true
        ? Post
    : S extends undefined
    ? never
    : S extends PostArgs | PostFindManyArgs
    ?'include' extends U
    ? Post  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> :
        P extends 'comments'
        ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'cruises'
        ? Array < CruiseGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Post ?Post [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> :
        P extends 'comments'
        ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'cruises'
        ? Array < CruiseGetPayload<S['select'][P]>>  : never
  } 
    : Post
  : Post


  type PostCountArgs = Merge<
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface PostDelegate {
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs>(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): CheckSelect<T, Prisma__PostClient<Post | null>, Prisma__PostClient<PostGetPayload<T> | null>>

    /**
     * Find the first Post that matches the filter.
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs>(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): CheckSelect<T, Prisma__PostClient<Post | null>, Prisma__PostClient<PostGetPayload<T> | null>>

    /**
     * Find zero or more Posts that matches the filter.
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>
    ): CheckSelect<T, Promise<Array<Post>>, Promise<Array<PostGetPayload<T>>>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Posts.
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Count the number of Posts.
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Promise<GetPostAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, Promise<Array<Comment>>, Promise<Array<CommentGetPayload<T>>>>;

    cruises<T extends CruiseFindManyArgs = {}>(args?: Subset<T, CruiseFindManyArgs>): CheckSelect<T, Promise<Array<Cruise>>, Promise<Array<CruiseGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Post
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Post
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
    **/
    where?: PostWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Posts to fetch.
    **/
    orderBy?: Enumerable<PostOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Posts.
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PostInclude | null
    /**
     * Filter, which Posts to fetch.
    **/
    where?: PostWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Posts to fetch.
    **/
    orderBy?: Enumerable<PostOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
    **/
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PostInclude | null
    /**
     * The data needed to create a Post.
    **/
    data: XOR<PostUncheckedCreateInput, PostCreateInput>
  }


  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PostInclude | null
    /**
     * The data needed to update a Post.
    **/
    data: XOR<PostUncheckedUpdateInput, PostUpdateInput>
    /**
     * Choose, which Post to update.
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    data: XOR<PostUncheckedUpdateManyInput, PostUpdateManyMutationInput>
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PostInclude | null
    /**
     * The filter to search for the Post to update in case it exists.
    **/
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
    **/
    create: XOR<PostUncheckedCreateInput, PostCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<PostUncheckedUpdateInput, PostUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PostInclude | null
    /**
     * Filter which Post to delete.
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    where?: PostWhereInput
  }


  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PostInclude | null
  }



  /**
   * Model Cruise
   */


  export type AggregateCruise = {
    count: CruiseCountAggregateOutputType | null
    avg: CruiseAvgAggregateOutputType | null
    sum: CruiseSumAggregateOutputType | null
    min: CruiseMinAggregateOutputType | null
    max: CruiseMaxAggregateOutputType | null
  }

  export type CruiseAvgAggregateOutputType = {
    id: number
    userUserId: number | null
    postId: number | null
  }

  export type CruiseSumAggregateOutputType = {
    id: number
    userUserId: number | null
    postId: number | null
  }

  export type CruiseMinAggregateOutputType = {
    id: number
    slogan: string | null
    attachmentType: AttachmentType | null
    attachmentMeta: JsonValue | null
    attachmentUrl: string | null
    creatorId: string | null
    reaction: JsonValue | null
    created: Date | null
    updated: Date | null
    userUserId: number | null
    postId: number | null
  }

  export type CruiseMaxAggregateOutputType = {
    id: number
    slogan: string | null
    attachmentType: AttachmentType | null
    attachmentMeta: JsonValue | null
    attachmentUrl: string | null
    creatorId: string | null
    reaction: JsonValue | null
    created: Date | null
    updated: Date | null
    userUserId: number | null
    postId: number | null
  }

  export type CruiseCountAggregateOutputType = {
    id: number
    slogan: number | null
    attachmentType: number | null
    attachmentMeta: number | null
    attachmentUrl: number | null
    creatorId: number | null
    reaction: number | null
    kisses: number | null
    hearts: number | null
    hot: number | null
    hashtags: number | null
    created: number | null
    updated: number | null
    userUserId: number | null
    postId: number | null
    _all: number
  }


  export type CruiseAvgAggregateInputType = {
    id?: true
    userUserId?: true
    postId?: true
  }

  export type CruiseSumAggregateInputType = {
    id?: true
    userUserId?: true
    postId?: true
  }

  export type CruiseMinAggregateInputType = {
    id?: true
    slogan?: true
    attachmentType?: true
    attachmentMeta?: true
    attachmentUrl?: true
    creatorId?: true
    reaction?: true
    created?: true
    updated?: true
    userUserId?: true
    postId?: true
  }

  export type CruiseMaxAggregateInputType = {
    id?: true
    slogan?: true
    attachmentType?: true
    attachmentMeta?: true
    attachmentUrl?: true
    creatorId?: true
    reaction?: true
    created?: true
    updated?: true
    userUserId?: true
    postId?: true
  }

  export type CruiseCountAggregateInputType = {
    id?: true
    slogan?: true
    attachmentType?: true
    attachmentMeta?: true
    attachmentUrl?: true
    creatorId?: true
    reaction?: true
    kisses?: true
    hearts?: true
    hot?: true
    hashtags?: true
    created?: true
    updated?: true
    userUserId?: true
    postId?: true
    _all?: true
  }

  export type CruiseAggregateArgs = {
    /**
     * Filter which Cruise to aggregate.
    **/
    where?: CruiseWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Cruises to fetch.
    **/
    orderBy?: Enumerable<CruiseOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: CruiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cruises from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cruises.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cruises
    **/
    count?: true | CruiseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: CruiseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: CruiseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: CruiseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: CruiseMaxAggregateInputType
  }

  export type GetCruiseAggregateType<T extends CruiseAggregateArgs> = {
    [P in keyof T & keyof AggregateCruise]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCruise[P]>
      : GetScalarType<T[P], AggregateCruise[P]>
  }



  export type CruiseSelect = {
    id?: boolean
    creator?: boolean | UserArgs
    slogan?: boolean
    attachmentType?: boolean
    attachmentMeta?: boolean
    attachmentUrl?: boolean
    creatorId?: boolean
    reaction?: boolean
    followers?: boolean | UserFindManyArgs
    kisses?: boolean
    hearts?: boolean
    hot?: boolean
    hashtags?: boolean
    created?: boolean
    updated?: boolean
    User?: boolean | UserArgs
    userUserId?: boolean
    Post?: boolean | PostArgs
    postId?: boolean
    comments?: boolean | CommentFindManyArgs
  }

  export type CruiseInclude = {
    creator?: boolean | UserArgs
    followers?: boolean | UserFindManyArgs
    User?: boolean | UserArgs
    Post?: boolean | PostArgs
    comments?: boolean | CommentFindManyArgs
  }

  export type CruiseGetPayload<
    S extends boolean | null | undefined | CruiseArgs,
    U = keyof S
      > = S extends true
        ? Cruise
    : S extends undefined
    ? never
    : S extends CruiseArgs | CruiseFindManyArgs
    ?'include' extends U
    ? Cruise  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'creator'
        ? UserGetPayload<S['include'][P]> :
        P extends 'followers'
        ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'User'
        ? UserGetPayload<S['include'][P]> | null :
        P extends 'Post'
        ? PostGetPayload<S['include'][P]> | null :
        P extends 'comments'
        ? Array < CommentGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Cruise ?Cruise [P]
  : 
          P extends 'creator'
        ? UserGetPayload<S['select'][P]> :
        P extends 'followers'
        ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'User'
        ? UserGetPayload<S['select'][P]> | null :
        P extends 'Post'
        ? PostGetPayload<S['select'][P]> | null :
        P extends 'comments'
        ? Array < CommentGetPayload<S['select'][P]>>  : never
  } 
    : Cruise
  : Cruise


  type CruiseCountArgs = Merge<
    Omit<CruiseFindManyArgs, 'select' | 'include'> & {
      select?: CruiseCountAggregateInputType | true
    }
  >

  export interface CruiseDelegate {
    /**
     * Find zero or one Cruise that matches the filter.
     * @param {CruiseFindUniqueArgs} args - Arguments to find a Cruise
     * @example
     * // Get one Cruise
     * const cruise = await prisma.cruise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CruiseFindUniqueArgs>(
      args: SelectSubset<T, CruiseFindUniqueArgs>
    ): CheckSelect<T, Prisma__CruiseClient<Cruise | null>, Prisma__CruiseClient<CruiseGetPayload<T> | null>>

    /**
     * Find the first Cruise that matches the filter.
     * @param {CruiseFindFirstArgs} args - Arguments to find a Cruise
     * @example
     * // Get one Cruise
     * const cruise = await prisma.cruise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CruiseFindFirstArgs>(
      args?: SelectSubset<T, CruiseFindFirstArgs>
    ): CheckSelect<T, Prisma__CruiseClient<Cruise | null>, Prisma__CruiseClient<CruiseGetPayload<T> | null>>

    /**
     * Find zero or more Cruises that matches the filter.
     * @param {CruiseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cruises
     * const cruises = await prisma.cruise.findMany()
     * 
     * // Get first 10 Cruises
     * const cruises = await prisma.cruise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cruiseWithIdOnly = await prisma.cruise.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CruiseFindManyArgs>(
      args?: SelectSubset<T, CruiseFindManyArgs>
    ): CheckSelect<T, Promise<Array<Cruise>>, Promise<Array<CruiseGetPayload<T>>>>

    /**
     * Create a Cruise.
     * @param {CruiseCreateArgs} args - Arguments to create a Cruise.
     * @example
     * // Create one Cruise
     * const Cruise = await prisma.cruise.create({
     *   data: {
     *     // ... data to create a Cruise
     *   }
     * })
     * 
    **/
    create<T extends CruiseCreateArgs>(
      args: SelectSubset<T, CruiseCreateArgs>
    ): CheckSelect<T, Prisma__CruiseClient<Cruise>, Prisma__CruiseClient<CruiseGetPayload<T>>>

    /**
     * Delete a Cruise.
     * @param {CruiseDeleteArgs} args - Arguments to delete one Cruise.
     * @example
     * // Delete one Cruise
     * const Cruise = await prisma.cruise.delete({
     *   where: {
     *     // ... filter to delete one Cruise
     *   }
     * })
     * 
    **/
    delete<T extends CruiseDeleteArgs>(
      args: SelectSubset<T, CruiseDeleteArgs>
    ): CheckSelect<T, Prisma__CruiseClient<Cruise>, Prisma__CruiseClient<CruiseGetPayload<T>>>

    /**
     * Update one Cruise.
     * @param {CruiseUpdateArgs} args - Arguments to update one Cruise.
     * @example
     * // Update one Cruise
     * const cruise = await prisma.cruise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CruiseUpdateArgs>(
      args: SelectSubset<T, CruiseUpdateArgs>
    ): CheckSelect<T, Prisma__CruiseClient<Cruise>, Prisma__CruiseClient<CruiseGetPayload<T>>>

    /**
     * Delete zero or more Cruises.
     * @param {CruiseDeleteManyArgs} args - Arguments to filter Cruises to delete.
     * @example
     * // Delete a few Cruises
     * const { count } = await prisma.cruise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CruiseDeleteManyArgs>(
      args?: SelectSubset<T, CruiseDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Cruises.
     * @param {CruiseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cruises
     * const cruise = await prisma.cruise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CruiseUpdateManyArgs>(
      args: SelectSubset<T, CruiseUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Cruise.
     * @param {CruiseUpsertArgs} args - Arguments to update or create a Cruise.
     * @example
     * // Update or create a Cruise
     * const cruise = await prisma.cruise.upsert({
     *   create: {
     *     // ... data to create a Cruise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cruise we want to update
     *   }
     * })
    **/
    upsert<T extends CruiseUpsertArgs>(
      args: SelectSubset<T, CruiseUpsertArgs>
    ): CheckSelect<T, Prisma__CruiseClient<Cruise>, Prisma__CruiseClient<CruiseGetPayload<T>>>

    /**
     * Count the number of Cruises.
     * @param {CruiseCountArgs} args - Arguments to filter Cruises to count.
     * @example
     * // Count the number of Cruises
     * const count = await prisma.cruise.count({
     *   where: {
     *     // ... the filter for the Cruises we want to count
     *   }
     * })
    **/
    count<T extends CruiseCountArgs>(
      args?: Subset<T, CruiseCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CruiseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cruise.
     * @param {CruiseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CruiseAggregateArgs>(args: Subset<T, CruiseAggregateArgs>): Promise<GetCruiseAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Cruise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CruiseClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    creator<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>;

    followers<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>;

    Post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, Prisma__PostClient<Post | null>, Prisma__PostClient<PostGetPayload<T> | null>>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, Promise<Array<Comment>>, Promise<Array<CommentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Cruise findUnique
   */
  export type CruiseFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Cruise
    **/
    select?: CruiseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CruiseInclude | null
    /**
     * Throw an Error if a Cruise can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Cruise to fetch.
    **/
    where: CruiseWhereUniqueInput
  }


  /**
   * Cruise findFirst
   */
  export type CruiseFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Cruise
    **/
    select?: CruiseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CruiseInclude | null
    /**
     * Throw an Error if a Cruise can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Cruise to fetch.
    **/
    where?: CruiseWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Cruises to fetch.
    **/
    orderBy?: Enumerable<CruiseOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cruises.
    **/
    cursor?: CruiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cruises from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cruises.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Cruises.
    **/
    distinct?: Enumerable<CruiseScalarFieldEnum>
  }


  /**
   * Cruise findMany
   */
  export type CruiseFindManyArgs = {
    /**
     * Select specific fields to fetch from the Cruise
    **/
    select?: CruiseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CruiseInclude | null
    /**
     * Filter, which Cruises to fetch.
    **/
    where?: CruiseWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Cruises to fetch.
    **/
    orderBy?: Enumerable<CruiseOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cruises.
    **/
    cursor?: CruiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cruises from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cruises.
    **/
    skip?: number
    distinct?: Enumerable<CruiseScalarFieldEnum>
  }


  /**
   * Cruise create
   */
  export type CruiseCreateArgs = {
    /**
     * Select specific fields to fetch from the Cruise
    **/
    select?: CruiseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CruiseInclude | null
    /**
     * The data needed to create a Cruise.
    **/
    data: XOR<CruiseUncheckedCreateInput, CruiseCreateInput>
  }


  /**
   * Cruise update
   */
  export type CruiseUpdateArgs = {
    /**
     * Select specific fields to fetch from the Cruise
    **/
    select?: CruiseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CruiseInclude | null
    /**
     * The data needed to update a Cruise.
    **/
    data: XOR<CruiseUncheckedUpdateInput, CruiseUpdateInput>
    /**
     * Choose, which Cruise to update.
    **/
    where: CruiseWhereUniqueInput
  }


  /**
   * Cruise updateMany
   */
  export type CruiseUpdateManyArgs = {
    data: XOR<CruiseUncheckedUpdateManyInput, CruiseUpdateManyMutationInput>
    where?: CruiseWhereInput
  }


  /**
   * Cruise upsert
   */
  export type CruiseUpsertArgs = {
    /**
     * Select specific fields to fetch from the Cruise
    **/
    select?: CruiseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CruiseInclude | null
    /**
     * The filter to search for the Cruise to update in case it exists.
    **/
    where: CruiseWhereUniqueInput
    /**
     * In case the Cruise found by the `where` argument doesn't exist, create a new Cruise with this data.
    **/
    create: XOR<CruiseUncheckedCreateInput, CruiseCreateInput>
    /**
     * In case the Cruise was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<CruiseUncheckedUpdateInput, CruiseUpdateInput>
  }


  /**
   * Cruise delete
   */
  export type CruiseDeleteArgs = {
    /**
     * Select specific fields to fetch from the Cruise
    **/
    select?: CruiseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CruiseInclude | null
    /**
     * Filter which Cruise to delete.
    **/
    where: CruiseWhereUniqueInput
  }


  /**
   * Cruise deleteMany
   */
  export type CruiseDeleteManyArgs = {
    where?: CruiseWhereInput
  }


  /**
   * Cruise without action
   */
  export type CruiseArgs = {
    /**
     * Select specific fields to fetch from the Cruise
    **/
    select?: CruiseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CruiseInclude | null
  }



  /**
   * Model Comment
   */


  export type AggregateComment = {
    count: CommentCountAggregateOutputType | null
    avg: CommentAvgAggregateOutputType | null
    sum: CommentSumAggregateOutputType | null
    min: CommentMinAggregateOutputType | null
    max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number
    entityId: number
    postId: number | null
    challengeId: number | null
    cruiseId: number | null
    userUserId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number
    entityId: number
    postId: number | null
    challengeId: number | null
    cruiseId: number | null
    userUserId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number
    entityId: number
    entityType: EntityType | null
    comment: string | null
    attachmentMeta: JsonValue | null
    attachmentType: AttachmentType | null
    attachmentUrl: string | null
    userId: string | null
    reaction: JsonValue | null
    created: Date | null
    updated: Date | null
    postId: number | null
    challengeId: number | null
    cruiseId: number | null
    userUserId: number | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number
    entityId: number
    entityType: EntityType | null
    comment: string | null
    attachmentMeta: JsonValue | null
    attachmentType: AttachmentType | null
    attachmentUrl: string | null
    userId: string | null
    reaction: JsonValue | null
    created: Date | null
    updated: Date | null
    postId: number | null
    challengeId: number | null
    cruiseId: number | null
    userUserId: number | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    entityId: number
    entityType: number | null
    comment: number | null
    attachmentMeta: number | null
    attachmentType: number | null
    attachmentUrl: number | null
    userId: number | null
    reaction: number | null
    kisses: number | null
    hearts: number | null
    hot: number | null
    created: number | null
    updated: number | null
    postId: number | null
    challengeId: number | null
    cruiseId: number | null
    userUserId: number | null
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    entityId?: true
    postId?: true
    challengeId?: true
    cruiseId?: true
    userUserId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    entityId?: true
    postId?: true
    challengeId?: true
    cruiseId?: true
    userUserId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    entityId?: true
    entityType?: true
    comment?: true
    attachmentMeta?: true
    attachmentType?: true
    attachmentUrl?: true
    userId?: true
    reaction?: true
    created?: true
    updated?: true
    postId?: true
    challengeId?: true
    cruiseId?: true
    userUserId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    entityId?: true
    entityType?: true
    comment?: true
    attachmentMeta?: true
    attachmentType?: true
    attachmentUrl?: true
    userId?: true
    reaction?: true
    created?: true
    updated?: true
    postId?: true
    challengeId?: true
    cruiseId?: true
    userUserId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    entityId?: true
    entityType?: true
    comment?: true
    attachmentMeta?: true
    attachmentType?: true
    attachmentUrl?: true
    userId?: true
    reaction?: true
    kisses?: true
    hearts?: true
    hot?: true
    created?: true
    updated?: true
    postId?: true
    challengeId?: true
    cruiseId?: true
    userUserId?: true
    _all?: true
  }

  export type CommentAggregateArgs = {
    /**
     * Filter which Comment to aggregate.
    **/
    where?: CommentWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Comments to fetch.
    **/
    orderBy?: Enumerable<CommentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
    [P in keyof T & keyof AggregateComment]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }



  export type CommentSelect = {
    id?: boolean
    entityId?: boolean
    entityType?: boolean
    comment?: boolean
    attachmentMeta?: boolean
    attachmentType?: boolean
    attachmentUrl?: boolean
    userId?: boolean
    reaction?: boolean
    kisses?: boolean
    hearts?: boolean
    hot?: boolean
    user?: boolean | UserArgs
    created?: boolean
    updated?: boolean
    Post?: boolean | PostArgs
    postId?: boolean
    challenge?: boolean | ChallengeArgs
    challengeId?: boolean
    cruise?: boolean | CruiseArgs
    cruiseId?: boolean
    User?: boolean | UserArgs
    userUserId?: boolean
  }

  export type CommentInclude = {
    user?: boolean | UserArgs
    Post?: boolean | PostArgs
    challenge?: boolean | ChallengeArgs
    cruise?: boolean | CruiseArgs
    User?: boolean | UserArgs
  }

  export type CommentGetPayload<
    S extends boolean | null | undefined | CommentArgs,
    U = keyof S
      > = S extends true
        ? Comment
    : S extends undefined
    ? never
    : S extends CommentArgs | CommentFindManyArgs
    ?'include' extends U
    ? Comment  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> :
        P extends 'Post'
        ? PostGetPayload<S['include'][P]> | null :
        P extends 'challenge'
        ? ChallengeGetPayload<S['include'][P]> | null :
        P extends 'cruise'
        ? CruiseGetPayload<S['include'][P]> | null :
        P extends 'User'
        ? UserGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Comment ?Comment [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> :
        P extends 'Post'
        ? PostGetPayload<S['select'][P]> | null :
        P extends 'challenge'
        ? ChallengeGetPayload<S['select'][P]> | null :
        P extends 'cruise'
        ? CruiseGetPayload<S['select'][P]> | null :
        P extends 'User'
        ? UserGetPayload<S['select'][P]> | null : never
  } 
    : Comment
  : Comment


  type CommentCountArgs = Merge<
    Omit<CommentFindManyArgs, 'select' | 'include'> & {
      select?: CommentCountAggregateInputType | true
    }
  >

  export interface CommentDelegate {
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs>(
      args: SelectSubset<T, CommentFindUniqueArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment | null>, Prisma__CommentClient<CommentGetPayload<T> | null>>

    /**
     * Find the first Comment that matches the filter.
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs>(
      args?: SelectSubset<T, CommentFindFirstArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment | null>, Prisma__CommentClient<CommentGetPayload<T> | null>>

    /**
     * Find zero or more Comments that matches the filter.
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs>
    ): CheckSelect<T, Promise<Array<Comment>>, Promise<Array<CommentGetPayload<T>>>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Comments.
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Count the number of Comments.
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Promise<GetCommentAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>;

    Post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, Prisma__PostClient<Post | null>, Prisma__PostClient<PostGetPayload<T> | null>>;

    challenge<T extends ChallengeArgs = {}>(args?: Subset<T, ChallengeArgs>): CheckSelect<T, Prisma__ChallengeClient<Challenge | null>, Prisma__ChallengeClient<ChallengeGetPayload<T> | null>>;

    cruise<T extends CruiseArgs = {}>(args?: Subset<T, CruiseArgs>): CheckSelect<T, Prisma__CruiseClient<Cruise | null>, Prisma__CruiseClient<CruiseGetPayload<T> | null>>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Comment
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CommentInclude | null
    /**
     * Throw an Error if a Comment can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comment to fetch.
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Comment
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CommentInclude | null
    /**
     * Throw an Error if a Comment can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comment to fetch.
    **/
    where?: CommentWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Comments to fetch.
    **/
    orderBy?: Enumerable<CommentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Comments.
    **/
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Comment
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comments to fetch.
    **/
    where?: CommentWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Comments to fetch.
    **/
    orderBy?: Enumerable<CommentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
    **/
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs = {
    /**
     * Select specific fields to fetch from the Comment
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CommentInclude | null
    /**
     * The data needed to create a Comment.
    **/
    data: XOR<CommentUncheckedCreateInput, CommentCreateInput>
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Comment
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CommentInclude | null
    /**
     * The data needed to update a Comment.
    **/
    data: XOR<CommentUncheckedUpdateInput, CommentUpdateInput>
    /**
     * Choose, which Comment to update.
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs = {
    data: XOR<CommentUncheckedUpdateManyInput, CommentUpdateManyMutationInput>
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Comment
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CommentInclude | null
    /**
     * The filter to search for the Comment to update in case it exists.
    **/
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
    **/
    create: XOR<CommentUncheckedCreateInput, CommentCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<CommentUncheckedUpdateInput, CommentUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Comment
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CommentInclude | null
    /**
     * Filter which Comment to delete.
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs = {
    where?: CommentWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CommentInclude | null
  }



  /**
   * Model Challenge
   */


  export type AggregateChallenge = {
    count: ChallengeCountAggregateOutputType | null
    avg: ChallengeAvgAggregateOutputType | null
    sum: ChallengeSumAggregateOutputType | null
    min: ChallengeMinAggregateOutputType | null
    max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeAvgAggregateOutputType = {
    id: number
    userUserId: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    id: number
    userUserId: number | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: number
    challenge: string | null
    creatorId: string | null
    attachmentType: AttachmentType | null
    attachmentUrl: string | null
    attachmentMeta: JsonValue | null
    reaction: JsonValue | null
    start: Date | null
    end: Date | null
    created: Date | null
    updated: Date | null
    userUserId: number | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: number
    challenge: string | null
    creatorId: string | null
    attachmentType: AttachmentType | null
    attachmentUrl: string | null
    attachmentMeta: JsonValue | null
    reaction: JsonValue | null
    start: Date | null
    end: Date | null
    created: Date | null
    updated: Date | null
    userUserId: number | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    challenge: number | null
    creatorId: number | null
    attachmentType: number | null
    attachmentUrl: number | null
    attachmentMeta: number | null
    reaction: number | null
    hashtags: number | null
    kisses: number | null
    hearts: number | null
    hot: number | null
    start: number | null
    end: number | null
    created: number | null
    updated: number | null
    userUserId: number | null
    _all: number
  }


  export type ChallengeAvgAggregateInputType = {
    id?: true
    userUserId?: true
  }

  export type ChallengeSumAggregateInputType = {
    id?: true
    userUserId?: true
  }

  export type ChallengeMinAggregateInputType = {
    id?: true
    challenge?: true
    creatorId?: true
    attachmentType?: true
    attachmentUrl?: true
    attachmentMeta?: true
    reaction?: true
    start?: true
    end?: true
    created?: true
    updated?: true
    userUserId?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    challenge?: true
    creatorId?: true
    attachmentType?: true
    attachmentUrl?: true
    attachmentMeta?: true
    reaction?: true
    start?: true
    end?: true
    created?: true
    updated?: true
    userUserId?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    challenge?: true
    creatorId?: true
    attachmentType?: true
    attachmentUrl?: true
    attachmentMeta?: true
    reaction?: true
    hashtags?: true
    kisses?: true
    hearts?: true
    hot?: true
    start?: true
    end?: true
    created?: true
    updated?: true
    userUserId?: true
    _all?: true
  }

  export type ChallengeAggregateArgs = {
    /**
     * Filter which Challenge to aggregate.
    **/
    where?: ChallengeWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Challenges to fetch.
    **/
    orderBy?: Enumerable<ChallengeOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challenges
    **/
    count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: ChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: ChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
    [P in keyof T & keyof AggregateChallenge]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }



  export type ChallengeSelect = {
    id?: boolean
    creator?: boolean | UserArgs
    challenge?: boolean
    creatorId?: boolean
    attachmentType?: boolean
    attachmentUrl?: boolean
    attachmentMeta?: boolean
    reaction?: boolean
    hashtags?: boolean
    followers?: boolean | UserFindManyArgs
    kisses?: boolean
    hearts?: boolean
    hot?: boolean
    start?: boolean
    end?: boolean
    created?: boolean
    updated?: boolean
    User?: boolean | UserArgs
    userUserId?: boolean
    comments?: boolean | CommentFindManyArgs
  }

  export type ChallengeInclude = {
    creator?: boolean | UserArgs
    followers?: boolean | UserFindManyArgs
    User?: boolean | UserArgs
    comments?: boolean | CommentFindManyArgs
  }

  export type ChallengeGetPayload<
    S extends boolean | null | undefined | ChallengeArgs,
    U = keyof S
      > = S extends true
        ? Challenge
    : S extends undefined
    ? never
    : S extends ChallengeArgs | ChallengeFindManyArgs
    ?'include' extends U
    ? Challenge  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'creator'
        ? UserGetPayload<S['include'][P]> :
        P extends 'followers'
        ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'User'
        ? UserGetPayload<S['include'][P]> | null :
        P extends 'comments'
        ? Array < CommentGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Challenge ?Challenge [P]
  : 
          P extends 'creator'
        ? UserGetPayload<S['select'][P]> :
        P extends 'followers'
        ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'User'
        ? UserGetPayload<S['select'][P]> | null :
        P extends 'comments'
        ? Array < CommentGetPayload<S['select'][P]>>  : never
  } 
    : Challenge
  : Challenge


  type ChallengeCountArgs = Merge<
    Omit<ChallengeFindManyArgs, 'select' | 'include'> & {
      select?: ChallengeCountAggregateInputType | true
    }
  >

  export interface ChallengeDelegate {
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {ChallengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChallengeFindUniqueArgs>(
      args: SelectSubset<T, ChallengeFindUniqueArgs>
    ): CheckSelect<T, Prisma__ChallengeClient<Challenge | null>, Prisma__ChallengeClient<ChallengeGetPayload<T> | null>>

    /**
     * Find the first Challenge that matches the filter.
     * @param {ChallengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChallengeFindFirstArgs>(
      args?: SelectSubset<T, ChallengeFindFirstArgs>
    ): CheckSelect<T, Prisma__ChallengeClient<Challenge | null>, Prisma__ChallengeClient<ChallengeGetPayload<T> | null>>

    /**
     * Find zero or more Challenges that matches the filter.
     * @param {ChallengeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeWithIdOnly = await prisma.challenge.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChallengeFindManyArgs>(
      args?: SelectSubset<T, ChallengeFindManyArgs>
    ): CheckSelect<T, Promise<Array<Challenge>>, Promise<Array<ChallengeGetPayload<T>>>>

    /**
     * Create a Challenge.
     * @param {ChallengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
    **/
    create<T extends ChallengeCreateArgs>(
      args: SelectSubset<T, ChallengeCreateArgs>
    ): CheckSelect<T, Prisma__ChallengeClient<Challenge>, Prisma__ChallengeClient<ChallengeGetPayload<T>>>

    /**
     * Delete a Challenge.
     * @param {ChallengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
    **/
    delete<T extends ChallengeDeleteArgs>(
      args: SelectSubset<T, ChallengeDeleteArgs>
    ): CheckSelect<T, Prisma__ChallengeClient<Challenge>, Prisma__ChallengeClient<ChallengeGetPayload<T>>>

    /**
     * Update one Challenge.
     * @param {ChallengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChallengeUpdateArgs>(
      args: SelectSubset<T, ChallengeUpdateArgs>
    ): CheckSelect<T, Prisma__ChallengeClient<Challenge>, Prisma__ChallengeClient<ChallengeGetPayload<T>>>

    /**
     * Delete zero or more Challenges.
     * @param {ChallengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChallengeDeleteManyArgs>(
      args?: SelectSubset<T, ChallengeDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * @param {ChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChallengeUpdateManyArgs>(
      args: SelectSubset<T, ChallengeUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Challenge.
     * @param {ChallengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
    **/
    upsert<T extends ChallengeUpsertArgs>(
      args: SelectSubset<T, ChallengeUpsertArgs>
    ): CheckSelect<T, Prisma__ChallengeClient<Challenge>, Prisma__ChallengeClient<ChallengeGetPayload<T>>>

    /**
     * Count the number of Challenges.
     * @param {ChallengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends ChallengeCountArgs>(
      args?: Subset<T, ChallengeCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Promise<GetChallengeAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ChallengeClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    creator<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>;

    followers<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, Promise<Array<Comment>>, Promise<Array<CommentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Challenge findUnique
   */
  export type ChallengeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Challenge
    **/
    select?: ChallengeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ChallengeInclude | null
    /**
     * Throw an Error if a Challenge can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Challenge to fetch.
    **/
    where: ChallengeWhereUniqueInput
  }


  /**
   * Challenge findFirst
   */
  export type ChallengeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Challenge
    **/
    select?: ChallengeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ChallengeInclude | null
    /**
     * Throw an Error if a Challenge can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Challenge to fetch.
    **/
    where?: ChallengeWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Challenges to fetch.
    **/
    orderBy?: Enumerable<ChallengeOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
    **/
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Challenges.
    **/
    distinct?: Enumerable<ChallengeScalarFieldEnum>
  }


  /**
   * Challenge findMany
   */
  export type ChallengeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Challenge
    **/
    select?: ChallengeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ChallengeInclude | null
    /**
     * Filter, which Challenges to fetch.
    **/
    where?: ChallengeWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Challenges to fetch.
    **/
    orderBy?: Enumerable<ChallengeOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challenges.
    **/
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
    **/
    skip?: number
    distinct?: Enumerable<ChallengeScalarFieldEnum>
  }


  /**
   * Challenge create
   */
  export type ChallengeCreateArgs = {
    /**
     * Select specific fields to fetch from the Challenge
    **/
    select?: ChallengeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ChallengeInclude | null
    /**
     * The data needed to create a Challenge.
    **/
    data: XOR<ChallengeUncheckedCreateInput, ChallengeCreateInput>
  }


  /**
   * Challenge update
   */
  export type ChallengeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Challenge
    **/
    select?: ChallengeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ChallengeInclude | null
    /**
     * The data needed to update a Challenge.
    **/
    data: XOR<ChallengeUncheckedUpdateInput, ChallengeUpdateInput>
    /**
     * Choose, which Challenge to update.
    **/
    where: ChallengeWhereUniqueInput
  }


  /**
   * Challenge updateMany
   */
  export type ChallengeUpdateManyArgs = {
    data: XOR<ChallengeUncheckedUpdateManyInput, ChallengeUpdateManyMutationInput>
    where?: ChallengeWhereInput
  }


  /**
   * Challenge upsert
   */
  export type ChallengeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Challenge
    **/
    select?: ChallengeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ChallengeInclude | null
    /**
     * The filter to search for the Challenge to update in case it exists.
    **/
    where: ChallengeWhereUniqueInput
    /**
     * In case the Challenge found by the `where` argument doesn't exist, create a new Challenge with this data.
    **/
    create: XOR<ChallengeUncheckedCreateInput, ChallengeCreateInput>
    /**
     * In case the Challenge was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<ChallengeUncheckedUpdateInput, ChallengeUpdateInput>
  }


  /**
   * Challenge delete
   */
  export type ChallengeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Challenge
    **/
    select?: ChallengeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ChallengeInclude | null
    /**
     * Filter which Challenge to delete.
    **/
    where: ChallengeWhereUniqueInput
  }


  /**
   * Challenge deleteMany
   */
  export type ChallengeDeleteManyArgs = {
    where?: ChallengeWhereInput
  }


  /**
   * Challenge without action
   */
  export type ChallengeArgs = {
    /**
     * Select specific fields to fetch from the Challenge
    **/
    select?: ChallengeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ChallengeInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
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
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
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
    challengeId: 'challengeId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CruiseScalarFieldEnum: {
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
  };

  export type CruiseScalarFieldEnum = (typeof CruiseScalarFieldEnum)[keyof typeof CruiseScalarFieldEnum]


  export const CommentScalarFieldEnum: {
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
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
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
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    userId?: IntFilter | number
    uid?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    userName?: StringNullableFilter | string | null
    email?: StringFilter | string
    imgUrl?: StringNullableFilter | string | null
    following?: UserListRelationFilter
    followers?: UserListRelationFilter
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    location?: JsonNullableFilter
    posts?: PostListRelationFilter
    cruises?: CruiseListRelationFilter
    comment?: CommentListRelationFilter
    challenges?: ChallengeListRelationFilter
    cruiseFollowing?: CruiseListRelationFilter
    challengeFollowing?: ChallengeListRelationFilter
    Cruise?: CruiseListRelationFilter
    Comment?: CommentListRelationFilter
    Challenge?: ChallengeListRelationFilter
  }

  export type UserOrderByInput = {
    userId?: SortOrder
    uid?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    imgUrl?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    location?: SortOrder
  }

  export type UserWhereUniqueInput = {
    userId?: number
    uid?: string
    userName?: string
    email?: string
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: IntFilter | number
    user?: XOR<UserWhereInput, UserRelationFilter>
    userId?: StringFilter | string
    attachmentUrl?: StringFilter | string
    attachmentMeta?: JsonFilter
    attachmentType?: EnumAttachmentTypeFilter | AttachmentType
    content?: StringNullableFilter | string | null
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    reaction?: JsonNullableFilter
    location?: JsonNullableFilter
    hashtags?: StringNullableListFilter
    comments?: CommentListRelationFilter
    cruises?: CruiseListRelationFilter
    kisses?: StringNullableListFilter
    hearts?: StringNullableListFilter
    hot?: StringNullableListFilter
    challengeId?: IntNullableFilter | number | null
  }

  export type PostOrderByInput = {
    id?: SortOrder
    userId?: SortOrder
    attachmentUrl?: SortOrder
    attachmentMeta?: SortOrder
    attachmentType?: SortOrder
    content?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    reaction?: SortOrder
    location?: SortOrder
    hashtags?: SortOrder
    kisses?: SortOrder
    hearts?: SortOrder
    hot?: SortOrder
    challengeId?: SortOrder
  }

  export type PostWhereUniqueInput = {
    id?: number
  }

  export type CruiseWhereInput = {
    AND?: Enumerable<CruiseWhereInput>
    OR?: Enumerable<CruiseWhereInput>
    NOT?: Enumerable<CruiseWhereInput>
    id?: IntFilter | number
    creator?: XOR<UserWhereInput, UserRelationFilter>
    slogan?: StringFilter | string
    attachmentType?: EnumAttachmentTypeFilter | AttachmentType
    attachmentMeta?: JsonFilter
    attachmentUrl?: StringFilter | string
    creatorId?: StringFilter | string
    reaction?: JsonFilter
    followers?: UserListRelationFilter
    kisses?: StringNullableListFilter
    hearts?: StringNullableListFilter
    hot?: StringNullableListFilter
    hashtags?: StringNullableListFilter
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    User?: XOR<UserWhereInput, UserRelationFilter> | null
    userUserId?: IntNullableFilter | number | null
    Post?: XOR<PostWhereInput, PostRelationFilter> | null
    postId?: IntNullableFilter | number | null
    comments?: CommentListRelationFilter
  }

  export type CruiseOrderByInput = {
    id?: SortOrder
    slogan?: SortOrder
    attachmentType?: SortOrder
    attachmentMeta?: SortOrder
    attachmentUrl?: SortOrder
    creatorId?: SortOrder
    reaction?: SortOrder
    kisses?: SortOrder
    hearts?: SortOrder
    hot?: SortOrder
    hashtags?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    userUserId?: SortOrder
    postId?: SortOrder
  }

  export type CruiseWhereUniqueInput = {
    id?: number
  }

  export type CommentWhereInput = {
    AND?: Enumerable<CommentWhereInput>
    OR?: Enumerable<CommentWhereInput>
    NOT?: Enumerable<CommentWhereInput>
    id?: IntFilter | number
    entityId?: IntFilter | number
    entityType?: EnumEntityTypeFilter | EntityType
    comment?: StringFilter | string
    attachmentMeta?: JsonNullableFilter
    attachmentType?: EnumAttachmentTypeNullableFilter | AttachmentType | null
    attachmentUrl?: StringNullableFilter | string | null
    userId?: StringFilter | string
    reaction?: JsonFilter
    kisses?: StringNullableListFilter
    hearts?: StringNullableListFilter
    hot?: StringNullableListFilter
    user?: XOR<UserWhereInput, UserRelationFilter>
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    Post?: XOR<PostWhereInput, PostRelationFilter> | null
    postId?: IntNullableFilter | number | null
    challenge?: XOR<ChallengeWhereInput, ChallengeRelationFilter> | null
    challengeId?: IntNullableFilter | number | null
    cruise?: XOR<CruiseWhereInput, CruiseRelationFilter> | null
    cruiseId?: IntNullableFilter | number | null
    User?: XOR<UserWhereInput, UserRelationFilter> | null
    userUserId?: IntNullableFilter | number | null
  }

  export type CommentOrderByInput = {
    id?: SortOrder
    entityId?: SortOrder
    entityType?: SortOrder
    comment?: SortOrder
    attachmentMeta?: SortOrder
    attachmentType?: SortOrder
    attachmentUrl?: SortOrder
    userId?: SortOrder
    reaction?: SortOrder
    kisses?: SortOrder
    hearts?: SortOrder
    hot?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    postId?: SortOrder
    challengeId?: SortOrder
    cruiseId?: SortOrder
    userUserId?: SortOrder
  }

  export type CommentWhereUniqueInput = {
    id?: number
  }

  export type ChallengeWhereInput = {
    AND?: Enumerable<ChallengeWhereInput>
    OR?: Enumerable<ChallengeWhereInput>
    NOT?: Enumerable<ChallengeWhereInput>
    id?: IntFilter | number
    creator?: XOR<UserWhereInput, UserRelationFilter>
    challenge?: StringFilter | string
    creatorId?: StringFilter | string
    attachmentType?: EnumAttachmentTypeFilter | AttachmentType
    attachmentUrl?: StringFilter | string
    attachmentMeta?: JsonFilter
    reaction?: JsonFilter
    hashtags?: StringNullableListFilter
    followers?: UserListRelationFilter
    kisses?: StringNullableListFilter
    hearts?: StringNullableListFilter
    hot?: StringNullableListFilter
    start?: DateTimeNullableFilter | Date | string | null
    end?: DateTimeNullableFilter | Date | string | null
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    User?: XOR<UserWhereInput, UserRelationFilter> | null
    userUserId?: IntNullableFilter | number | null
    comments?: CommentListRelationFilter
  }

  export type ChallengeOrderByInput = {
    id?: SortOrder
    challenge?: SortOrder
    creatorId?: SortOrder
    attachmentType?: SortOrder
    attachmentUrl?: SortOrder
    attachmentMeta?: SortOrder
    reaction?: SortOrder
    hashtags?: SortOrder
    kisses?: SortOrder
    hearts?: SortOrder
    hot?: SortOrder
    start?: SortOrder
    end?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    userUserId?: SortOrder
  }

  export type ChallengeWhereUniqueInput = {
    id?: number
  }

  export type UserCreateInput = {
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateManyWithoutFollowersInput
    followers?: UserCreateManyWithoutFollowingInput
    posts?: PostCreateManyWithoutUserInput
    cruises?: CruiseCreateManyWithoutUserInput
    comment?: CommentCreateManyWithoutUserInput
    challenges?: ChallengeCreateManyWithoutUserInput
    cruiseFollowing?: CruiseCreateManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateManyWithoutFollowersInput
    Cruise?: CruiseCreateManyWithoutCreatorInput
    Comment?: CommentCreateManyWithoutUserInput
    Challenge?: ChallengeCreateManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateManyWithoutUserInput
    cruises?: CruiseUncheckedCreateManyWithoutUserInput
    comment?: CommentUncheckedCreateManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateManyWithoutCreatorInput
    Comment?: CommentUncheckedCreateManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    following?: UserUpdateManyWithoutFollowersInput
    followers?: UserUpdateManyWithoutFollowingInput
    posts?: PostUpdateManyWithoutUserInput
    cruises?: CruiseUpdateManyWithoutUserInput
    comment?: CommentUpdateManyWithoutUserInput
    challenges?: ChallengeUpdateManyWithoutUserInput
    cruiseFollowing?: CruiseUpdateManyWithoutFollowersInput
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Cruise?: CruiseUpdateManyWithoutCreatorInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutCreatorInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutCreatorInput
  }

  export type UserUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
  }

  export type PostCreateInput = {
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    attachmentType: AttachmentType
    content?: string | null
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    user: UserCreateOneWithoutPostsInput
    comments?: CommentCreateManyWithoutPostInput
    cruises?: CruiseCreateManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    userId: string
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    attachmentType: AttachmentType
    content?: string | null
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    comments?: CommentUncheckedCreateManyWithoutPostInput
    cruises?: CruiseUncheckedCreateManyWithoutPostInput
  }

  export type PostUpdateInput = {
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutPostsInput
    comments?: CommentUpdateManyWithoutPostInput
    cruises?: CruiseUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutPostInput
    cruises?: CruiseUncheckedUpdateManyWithoutPostInput
  }

  export type PostUpdateManyMutationInput = {
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
  }

  export type CruiseCreateInput = {
    slogan: string
    attachmentType: AttachmentType
    attachmentMeta: InputJsonValue
    attachmentUrl: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    creator: UserCreateOneWithoutCruiseInput
    followers?: UserCreateManyWithoutCruiseFollowingInput
    User?: UserCreateOneWithoutCruisesInput
    Post?: PostCreateOneWithoutCruisesInput
    comments?: CommentCreateManyWithoutCruiseInput
  }

  export type CruiseUncheckedCreateInput = {
    id?: number
    slogan: string
    attachmentType: AttachmentType
    attachmentMeta: InputJsonValue
    attachmentUrl: string
    creatorId: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    postId?: number | null
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedCreateManyWithoutCruiseInput
  }

  export type CruiseUpdateInput = {
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    creator?: UserUpdateOneRequiredWithoutCruiseInput
    followers?: UserUpdateManyWithoutCruiseFollowingInput
    User?: UserUpdateOneWithoutCruisesInput
    Post?: PostUpdateOneWithoutCruisesInput
    comments?: CommentUpdateManyWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutCruiseInput
  }

  export type CruiseUpdateManyMutationInput = {
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
  }

  export type CruiseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
  }

  export type CommentCreateInput = {
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
    user: UserCreateOneWithoutCommentInput
    Post?: PostCreateOneWithoutCommentsInput
    challenge?: ChallengeCreateOneWithoutCommentsInput
    cruise?: CruiseCreateOneWithoutCommentsInput
    User?: UserCreateOneWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    userId: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    challengeId?: number | null
    cruiseId?: number | null
    userUserId?: number | null
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
  }

  export type CommentUpdateInput = {
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCommentInput
    Post?: PostUpdateOneWithoutCommentsInput
    challenge?: ChallengeUpdateOneWithoutCommentsInput
    cruise?: CruiseUpdateOneWithoutCommentsInput
    User?: UserUpdateOneWithoutCommentInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    cruiseId?: NullableIntFieldUpdateOperationsInput | number | null
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
  }

  export type CommentUpdateManyMutationInput = {
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    cruiseId?: NullableIntFieldUpdateOperationsInput | number | null
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
  }

  export type ChallengeCreateInput = {
    challenge: string
    attachmentType: AttachmentType
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    reaction: InputJsonValue
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
    creator: UserCreateOneWithoutChallengeInput
    followers?: UserCreateManyWithoutChallengeFollowingInput
    User?: UserCreateOneWithoutChallengesInput
    comments?: CommentCreateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: number
    challenge: string
    creatorId: string
    attachmentType: AttachmentType
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    reaction: InputJsonValue
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
    comments?: CommentUncheckedCreateManyWithoutChallengeInput
  }

  export type ChallengeUpdateInput = {
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    reaction?: InputJsonValue
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
    creator?: UserUpdateOneRequiredWithoutChallengeInput
    followers?: UserUpdateManyWithoutChallengeFollowingInput
    User?: UserUpdateOneWithoutChallengesInput
    comments?: CommentUpdateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    reaction?: InputJsonValue
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutChallengeInput
  }

  export type ChallengeUpdateManyMutationInput = {
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    reaction?: InputJsonValue
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    reaction?: InputJsonValue
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type JsonNullableFilter = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type CruiseListRelationFilter = {
    every?: CruiseWhereInput
    some?: CruiseWhereInput
    none?: CruiseWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type ChallengeListRelationFilter = {
    every?: ChallengeWhereInput
    some?: ChallengeWhereInput
    none?: ChallengeWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type JsonFilter = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type EnumAttachmentTypeFilter = {
    equals?: AttachmentType
    in?: Enumerable<AttachmentType>
    notIn?: Enumerable<AttachmentType>
    not?: NestedEnumAttachmentTypeFilter | AttachmentType
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type PostRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type EnumEntityTypeFilter = {
    equals?: EntityType
    in?: Enumerable<EntityType>
    notIn?: Enumerable<EntityType>
    not?: NestedEnumEntityTypeFilter | EntityType
  }

  export type EnumAttachmentTypeNullableFilter = {
    equals?: AttachmentType | null
    in?: Enumerable<AttachmentType> | null
    notIn?: Enumerable<AttachmentType> | null
    not?: NestedEnumAttachmentTypeNullableFilter | AttachmentType | null
  }

  export type ChallengeRelationFilter = {
    is?: ChallengeWhereInput | null
    isNot?: ChallengeWhereInput | null
  }

  export type CruiseRelationFilter = {
    is?: CruiseWhereInput | null
    isNot?: CruiseWhereInput | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type UserCreateManyWithoutFollowersInput = {
    create?: XOR<Enumerable<UserUncheckedCreateWithoutFollowersInput>, Enumerable<UserCreateWithoutFollowersInput>>
    connect?: Enumerable<UserWhereUniqueInput>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutfollowersInput>
  }

  export type UserCreateManyWithoutFollowingInput = {
    create?: XOR<Enumerable<UserUncheckedCreateWithoutFollowingInput>, Enumerable<UserCreateWithoutFollowingInput>>
    connect?: Enumerable<UserWhereUniqueInput>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutfollowingInput>
  }

  export type PostCreateManyWithoutUserInput = {
    create?: XOR<Enumerable<PostUncheckedCreateWithoutUserInput>, Enumerable<PostCreateWithoutUserInput>>
    connect?: Enumerable<PostWhereUniqueInput>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutuserInput>
  }

  export type CruiseCreateManyWithoutUserInput = {
    create?: XOR<Enumerable<CruiseUncheckedCreateWithoutUserInput>, Enumerable<CruiseCreateWithoutUserInput>>
    connect?: Enumerable<CruiseWhereUniqueInput>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutUserInput>
  }

  export type CommentCreateManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutUserInput>, Enumerable<CommentCreateWithoutUserInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
  }

  export type ChallengeCreateManyWithoutUserInput = {
    create?: XOR<Enumerable<ChallengeUncheckedCreateWithoutUserInput>, Enumerable<ChallengeCreateWithoutUserInput>>
    connect?: Enumerable<ChallengeWhereUniqueInput>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutUserInput>
  }

  export type CruiseCreateManyWithoutFollowersInput = {
    create?: XOR<Enumerable<CruiseUncheckedCreateWithoutFollowersInput>, Enumerable<CruiseCreateWithoutFollowersInput>>
    connect?: Enumerable<CruiseWhereUniqueInput>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutfollowersInput>
  }

  export type ChallengeCreateManyWithoutFollowersInput = {
    create?: XOR<Enumerable<ChallengeUncheckedCreateWithoutFollowersInput>, Enumerable<ChallengeCreateWithoutFollowersInput>>
    connect?: Enumerable<ChallengeWhereUniqueInput>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutfollowersInput>
  }

  export type CruiseCreateManyWithoutCreatorInput = {
    create?: XOR<Enumerable<CruiseUncheckedCreateWithoutCreatorInput>, Enumerable<CruiseCreateWithoutCreatorInput>>
    connect?: Enumerable<CruiseWhereUniqueInput>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutcreatorInput>
  }

  export type ChallengeCreateManyWithoutCreatorInput = {
    create?: XOR<Enumerable<ChallengeUncheckedCreateWithoutCreatorInput>, Enumerable<ChallengeCreateWithoutCreatorInput>>
    connect?: Enumerable<ChallengeWhereUniqueInput>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutcreatorInput>
  }

  export type PostUncheckedCreateManyWithoutUserInput = {
    create?: XOR<Enumerable<PostUncheckedCreateWithoutUserInput>, Enumerable<PostCreateWithoutUserInput>>
    connect?: Enumerable<PostWhereUniqueInput>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutuserInput>
  }

  export type CruiseUncheckedCreateManyWithoutUserInput = {
    create?: XOR<Enumerable<CruiseUncheckedCreateWithoutUserInput>, Enumerable<CruiseCreateWithoutUserInput>>
    connect?: Enumerable<CruiseWhereUniqueInput>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutUserInput>
  }

  export type CommentUncheckedCreateManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutUserInput>, Enumerable<CommentCreateWithoutUserInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
  }

  export type ChallengeUncheckedCreateManyWithoutUserInput = {
    create?: XOR<Enumerable<ChallengeUncheckedCreateWithoutUserInput>, Enumerable<ChallengeCreateWithoutUserInput>>
    connect?: Enumerable<ChallengeWhereUniqueInput>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutUserInput>
  }

  export type CruiseUncheckedCreateManyWithoutCreatorInput = {
    create?: XOR<Enumerable<CruiseUncheckedCreateWithoutCreatorInput>, Enumerable<CruiseCreateWithoutCreatorInput>>
    connect?: Enumerable<CruiseWhereUniqueInput>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutcreatorInput>
  }

  export type ChallengeUncheckedCreateManyWithoutCreatorInput = {
    create?: XOR<Enumerable<ChallengeUncheckedCreateWithoutCreatorInput>, Enumerable<ChallengeCreateWithoutCreatorInput>>
    connect?: Enumerable<ChallengeWhereUniqueInput>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutcreatorInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutFollowersInput = {
    create?: XOR<Enumerable<UserUncheckedCreateWithoutFollowersInput>, Enumerable<UserCreateWithoutFollowersInput>>
    connect?: Enumerable<UserWhereUniqueInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutFollowersInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutFollowersInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutFollowersInput>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutfollowersInput>
  }

  export type UserUpdateManyWithoutFollowingInput = {
    create?: XOR<Enumerable<UserUncheckedCreateWithoutFollowingInput>, Enumerable<UserCreateWithoutFollowingInput>>
    connect?: Enumerable<UserWhereUniqueInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutFollowingInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutFollowingInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutFollowingInput>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutfollowingInput>
  }

  export type PostUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<PostUncheckedCreateWithoutUserInput>, Enumerable<PostCreateWithoutUserInput>>
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutUserInput>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutuserInput>
  }

  export type CruiseUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CruiseUncheckedCreateWithoutUserInput>, Enumerable<CruiseCreateWithoutUserInput>>
    connect?: Enumerable<CruiseWhereUniqueInput>
    set?: Enumerable<CruiseWhereUniqueInput>
    disconnect?: Enumerable<CruiseWhereUniqueInput>
    delete?: Enumerable<CruiseWhereUniqueInput>
    update?: Enumerable<CruiseUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CruiseUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CruiseScalarWhereInput>
    upsert?: Enumerable<CruiseUpsertWithWhereUniqueWithoutUserInput>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutUserInput>
  }

  export type CommentUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutUserInput>, Enumerable<CommentCreateWithoutUserInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUserInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
  }

  export type ChallengeUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ChallengeUncheckedCreateWithoutUserInput>, Enumerable<ChallengeCreateWithoutUserInput>>
    connect?: Enumerable<ChallengeWhereUniqueInput>
    set?: Enumerable<ChallengeWhereUniqueInput>
    disconnect?: Enumerable<ChallengeWhereUniqueInput>
    delete?: Enumerable<ChallengeWhereUniqueInput>
    update?: Enumerable<ChallengeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ChallengeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ChallengeScalarWhereInput>
    upsert?: Enumerable<ChallengeUpsertWithWhereUniqueWithoutUserInput>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutUserInput>
  }

  export type CruiseUpdateManyWithoutFollowersInput = {
    create?: XOR<Enumerable<CruiseUncheckedCreateWithoutFollowersInput>, Enumerable<CruiseCreateWithoutFollowersInput>>
    connect?: Enumerable<CruiseWhereUniqueInput>
    set?: Enumerable<CruiseWhereUniqueInput>
    disconnect?: Enumerable<CruiseWhereUniqueInput>
    delete?: Enumerable<CruiseWhereUniqueInput>
    update?: Enumerable<CruiseUpdateWithWhereUniqueWithoutFollowersInput>
    updateMany?: Enumerable<CruiseUpdateManyWithWhereWithoutFollowersInput>
    deleteMany?: Enumerable<CruiseScalarWhereInput>
    upsert?: Enumerable<CruiseUpsertWithWhereUniqueWithoutFollowersInput>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutfollowersInput>
  }

  export type ChallengeUpdateManyWithoutFollowersInput = {
    create?: XOR<Enumerable<ChallengeUncheckedCreateWithoutFollowersInput>, Enumerable<ChallengeCreateWithoutFollowersInput>>
    connect?: Enumerable<ChallengeWhereUniqueInput>
    set?: Enumerable<ChallengeWhereUniqueInput>
    disconnect?: Enumerable<ChallengeWhereUniqueInput>
    delete?: Enumerable<ChallengeWhereUniqueInput>
    update?: Enumerable<ChallengeUpdateWithWhereUniqueWithoutFollowersInput>
    updateMany?: Enumerable<ChallengeUpdateManyWithWhereWithoutFollowersInput>
    deleteMany?: Enumerable<ChallengeScalarWhereInput>
    upsert?: Enumerable<ChallengeUpsertWithWhereUniqueWithoutFollowersInput>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutfollowersInput>
  }

  export type CruiseUpdateManyWithoutCreatorInput = {
    create?: XOR<Enumerable<CruiseUncheckedCreateWithoutCreatorInput>, Enumerable<CruiseCreateWithoutCreatorInput>>
    connect?: Enumerable<CruiseWhereUniqueInput>
    set?: Enumerable<CruiseWhereUniqueInput>
    disconnect?: Enumerable<CruiseWhereUniqueInput>
    delete?: Enumerable<CruiseWhereUniqueInput>
    update?: Enumerable<CruiseUpdateWithWhereUniqueWithoutCreatorInput>
    updateMany?: Enumerable<CruiseUpdateManyWithWhereWithoutCreatorInput>
    deleteMany?: Enumerable<CruiseScalarWhereInput>
    upsert?: Enumerable<CruiseUpsertWithWhereUniqueWithoutCreatorInput>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutcreatorInput>
  }

  export type ChallengeUpdateManyWithoutCreatorInput = {
    create?: XOR<Enumerable<ChallengeUncheckedCreateWithoutCreatorInput>, Enumerable<ChallengeCreateWithoutCreatorInput>>
    connect?: Enumerable<ChallengeWhereUniqueInput>
    set?: Enumerable<ChallengeWhereUniqueInput>
    disconnect?: Enumerable<ChallengeWhereUniqueInput>
    delete?: Enumerable<ChallengeWhereUniqueInput>
    update?: Enumerable<ChallengeUpdateWithWhereUniqueWithoutCreatorInput>
    updateMany?: Enumerable<ChallengeUpdateManyWithWhereWithoutCreatorInput>
    deleteMany?: Enumerable<ChallengeScalarWhereInput>
    upsert?: Enumerable<ChallengeUpsertWithWhereUniqueWithoutCreatorInput>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutcreatorInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<PostUncheckedCreateWithoutUserInput>, Enumerable<PostCreateWithoutUserInput>>
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutUserInput>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutuserInput>
  }

  export type CruiseUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CruiseUncheckedCreateWithoutUserInput>, Enumerable<CruiseCreateWithoutUserInput>>
    connect?: Enumerable<CruiseWhereUniqueInput>
    set?: Enumerable<CruiseWhereUniqueInput>
    disconnect?: Enumerable<CruiseWhereUniqueInput>
    delete?: Enumerable<CruiseWhereUniqueInput>
    update?: Enumerable<CruiseUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CruiseUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CruiseScalarWhereInput>
    upsert?: Enumerable<CruiseUpsertWithWhereUniqueWithoutUserInput>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutUserInput>
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutUserInput>, Enumerable<CommentCreateWithoutUserInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUserInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
  }

  export type ChallengeUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ChallengeUncheckedCreateWithoutUserInput>, Enumerable<ChallengeCreateWithoutUserInput>>
    connect?: Enumerable<ChallengeWhereUniqueInput>
    set?: Enumerable<ChallengeWhereUniqueInput>
    disconnect?: Enumerable<ChallengeWhereUniqueInput>
    delete?: Enumerable<ChallengeWhereUniqueInput>
    update?: Enumerable<ChallengeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ChallengeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ChallengeScalarWhereInput>
    upsert?: Enumerable<ChallengeUpsertWithWhereUniqueWithoutUserInput>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutUserInput>
  }

  export type CruiseUncheckedUpdateManyWithoutCreatorInput = {
    create?: XOR<Enumerable<CruiseUncheckedCreateWithoutCreatorInput>, Enumerable<CruiseCreateWithoutCreatorInput>>
    connect?: Enumerable<CruiseWhereUniqueInput>
    set?: Enumerable<CruiseWhereUniqueInput>
    disconnect?: Enumerable<CruiseWhereUniqueInput>
    delete?: Enumerable<CruiseWhereUniqueInput>
    update?: Enumerable<CruiseUpdateWithWhereUniqueWithoutCreatorInput>
    updateMany?: Enumerable<CruiseUpdateManyWithWhereWithoutCreatorInput>
    deleteMany?: Enumerable<CruiseScalarWhereInput>
    upsert?: Enumerable<CruiseUpsertWithWhereUniqueWithoutCreatorInput>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutcreatorInput>
  }

  export type ChallengeUncheckedUpdateManyWithoutCreatorInput = {
    create?: XOR<Enumerable<ChallengeUncheckedCreateWithoutCreatorInput>, Enumerable<ChallengeCreateWithoutCreatorInput>>
    connect?: Enumerable<ChallengeWhereUniqueInput>
    set?: Enumerable<ChallengeWhereUniqueInput>
    disconnect?: Enumerable<ChallengeWhereUniqueInput>
    delete?: Enumerable<ChallengeWhereUniqueInput>
    update?: Enumerable<ChallengeUpdateWithWhereUniqueWithoutCreatorInput>
    updateMany?: Enumerable<ChallengeUpdateManyWithWhereWithoutCreatorInput>
    deleteMany?: Enumerable<ChallengeScalarWhereInput>
    upsert?: Enumerable<ChallengeUpsertWithWhereUniqueWithoutCreatorInput>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutcreatorInput>
  }

  export type PostCreatehashtagsInput = {
    set: Enumerable<string>
  }

  export type PostCreatekissesInput = {
    set: Enumerable<string>
  }

  export type PostCreateheartsInput = {
    set: Enumerable<string>
  }

  export type PostCreatehotInput = {
    set: Enumerable<string>
  }

  export type UserCreateOneWithoutPostsInput = {
    create?: XOR<UserUncheckedCreateWithoutPostsInput, UserCreateWithoutPostsInput>
    connect?: UserWhereUniqueInput
    connectOrCreate?: UserCreateOrConnectWithoutpostsInput
  }

  export type CommentCreateManyWithoutPostInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutPostInput>, Enumerable<CommentCreateWithoutPostInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutPostInput>
  }

  export type CruiseCreateManyWithoutPostInput = {
    create?: XOR<Enumerable<CruiseUncheckedCreateWithoutPostInput>, Enumerable<CruiseCreateWithoutPostInput>>
    connect?: Enumerable<CruiseWhereUniqueInput>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutPostInput>
  }

  export type CommentUncheckedCreateManyWithoutPostInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutPostInput>, Enumerable<CommentCreateWithoutPostInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutPostInput>
  }

  export type CruiseUncheckedCreateManyWithoutPostInput = {
    create?: XOR<Enumerable<CruiseUncheckedCreateWithoutPostInput>, Enumerable<CruiseCreateWithoutPostInput>>
    connect?: Enumerable<CruiseWhereUniqueInput>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutPostInput>
  }

  export type EnumAttachmentTypeFieldUpdateOperationsInput = {
    set?: AttachmentType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUpdatehashtagsInput = {
    set: Enumerable<string>
  }

  export type PostUpdatekissesInput = {
    set: Enumerable<string>
  }

  export type PostUpdateheartsInput = {
    set: Enumerable<string>
  }

  export type PostUpdatehotInput = {
    set: Enumerable<string>
  }

  export type UserUpdateOneRequiredWithoutPostsInput = {
    create?: XOR<UserUncheckedCreateWithoutPostsInput, UserCreateWithoutPostsInput>
    connect?: UserWhereUniqueInput
    update?: XOR<UserUncheckedUpdateWithoutPostsInput, UserUpdateWithoutPostsInput>
    upsert?: UserUpsertWithoutPostsInput
    connectOrCreate?: UserCreateOrConnectWithoutpostsInput
  }

  export type CommentUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutPostInput>, Enumerable<CommentCreateWithoutPostInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutPostInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutPostInput>
  }

  export type CruiseUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<CruiseUncheckedCreateWithoutPostInput>, Enumerable<CruiseCreateWithoutPostInput>>
    connect?: Enumerable<CruiseWhereUniqueInput>
    set?: Enumerable<CruiseWhereUniqueInput>
    disconnect?: Enumerable<CruiseWhereUniqueInput>
    delete?: Enumerable<CruiseWhereUniqueInput>
    update?: Enumerable<CruiseUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<CruiseUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<CruiseScalarWhereInput>
    upsert?: Enumerable<CruiseUpsertWithWhereUniqueWithoutPostInput>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutPostInput>
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutPostInput>, Enumerable<CommentCreateWithoutPostInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutPostInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutPostInput>
  }

  export type CruiseUncheckedUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<CruiseUncheckedCreateWithoutPostInput>, Enumerable<CruiseCreateWithoutPostInput>>
    connect?: Enumerable<CruiseWhereUniqueInput>
    set?: Enumerable<CruiseWhereUniqueInput>
    disconnect?: Enumerable<CruiseWhereUniqueInput>
    delete?: Enumerable<CruiseWhereUniqueInput>
    update?: Enumerable<CruiseUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<CruiseUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<CruiseScalarWhereInput>
    upsert?: Enumerable<CruiseUpsertWithWhereUniqueWithoutPostInput>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutPostInput>
  }

  export type CruiseCreatekissesInput = {
    set: Enumerable<string>
  }

  export type CruiseCreateheartsInput = {
    set: Enumerable<string>
  }

  export type CruiseCreatehotInput = {
    set: Enumerable<string>
  }

  export type CruiseCreatehashtagsInput = {
    set: Enumerable<string>
  }

  export type UserCreateOneWithoutCruiseInput = {
    create?: XOR<UserUncheckedCreateWithoutCruiseInput, UserCreateWithoutCruiseInput>
    connect?: UserWhereUniqueInput
    connectOrCreate?: UserCreateOrConnectWithoutCruiseInput
  }

  export type UserCreateManyWithoutCruiseFollowingInput = {
    create?: XOR<Enumerable<UserUncheckedCreateWithoutCruiseFollowingInput>, Enumerable<UserCreateWithoutCruiseFollowingInput>>
    connect?: Enumerable<UserWhereUniqueInput>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutcruiseFollowingInput>
  }

  export type UserCreateOneWithoutCruisesInput = {
    create?: XOR<UserUncheckedCreateWithoutCruisesInput, UserCreateWithoutCruisesInput>
    connect?: UserWhereUniqueInput
    connectOrCreate?: UserCreateOrConnectWithoutcruisesInput
  }

  export type PostCreateOneWithoutCruisesInput = {
    create?: XOR<PostUncheckedCreateWithoutCruisesInput, PostCreateWithoutCruisesInput>
    connect?: PostWhereUniqueInput
    connectOrCreate?: PostCreateOrConnectWithoutcruisesInput
  }

  export type CommentCreateManyWithoutCruiseInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutCruiseInput>, Enumerable<CommentCreateWithoutCruiseInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutcruiseInput>
  }

  export type CommentUncheckedCreateManyWithoutCruiseInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutCruiseInput>, Enumerable<CommentCreateWithoutCruiseInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutcruiseInput>
  }

  export type CruiseUpdatekissesInput = {
    set: Enumerable<string>
  }

  export type CruiseUpdateheartsInput = {
    set: Enumerable<string>
  }

  export type CruiseUpdatehotInput = {
    set: Enumerable<string>
  }

  export type CruiseUpdatehashtagsInput = {
    set: Enumerable<string>
  }

  export type UserUpdateOneRequiredWithoutCruiseInput = {
    create?: XOR<UserUncheckedCreateWithoutCruiseInput, UserCreateWithoutCruiseInput>
    connect?: UserWhereUniqueInput
    update?: XOR<UserUncheckedUpdateWithoutCruiseInput, UserUpdateWithoutCruiseInput>
    upsert?: UserUpsertWithoutCruiseInput
    connectOrCreate?: UserCreateOrConnectWithoutCruiseInput
  }

  export type UserUpdateManyWithoutCruiseFollowingInput = {
    create?: XOR<Enumerable<UserUncheckedCreateWithoutCruiseFollowingInput>, Enumerable<UserCreateWithoutCruiseFollowingInput>>
    connect?: Enumerable<UserWhereUniqueInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutCruiseFollowingInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutCruiseFollowingInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutCruiseFollowingInput>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutcruiseFollowingInput>
  }

  export type UserUpdateOneWithoutCruisesInput = {
    create?: XOR<UserUncheckedCreateWithoutCruisesInput, UserCreateWithoutCruisesInput>
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UserUncheckedUpdateWithoutCruisesInput, UserUpdateWithoutCruisesInput>
    upsert?: UserUpsertWithoutCruisesInput
    connectOrCreate?: UserCreateOrConnectWithoutcruisesInput
  }

  export type PostUpdateOneWithoutCruisesInput = {
    create?: XOR<PostUncheckedCreateWithoutCruisesInput, PostCreateWithoutCruisesInput>
    connect?: PostWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<PostUncheckedUpdateWithoutCruisesInput, PostUpdateWithoutCruisesInput>
    upsert?: PostUpsertWithoutCruisesInput
    connectOrCreate?: PostCreateOrConnectWithoutcruisesInput
  }

  export type CommentUpdateManyWithoutCruiseInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutCruiseInput>, Enumerable<CommentCreateWithoutCruiseInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutCruiseInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutCruiseInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutCruiseInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutcruiseInput>
  }

  export type CommentUncheckedUpdateManyWithoutCruiseInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutCruiseInput>, Enumerable<CommentCreateWithoutCruiseInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutCruiseInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutCruiseInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutCruiseInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutcruiseInput>
  }

  export type CommentCreatekissesInput = {
    set: Enumerable<string>
  }

  export type CommentCreateheartsInput = {
    set: Enumerable<string>
  }

  export type CommentCreatehotInput = {
    set: Enumerable<string>
  }

  export type UserCreateOneWithoutCommentInput = {
    create?: XOR<UserUncheckedCreateWithoutCommentInput, UserCreateWithoutCommentInput>
    connect?: UserWhereUniqueInput
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
  }

  export type PostCreateOneWithoutCommentsInput = {
    create?: XOR<PostUncheckedCreateWithoutCommentsInput, PostCreateWithoutCommentsInput>
    connect?: PostWhereUniqueInput
    connectOrCreate?: PostCreateOrConnectWithoutcommentsInput
  }

  export type ChallengeCreateOneWithoutCommentsInput = {
    create?: XOR<ChallengeUncheckedCreateWithoutCommentsInput, ChallengeCreateWithoutCommentsInput>
    connect?: ChallengeWhereUniqueInput
    connectOrCreate?: ChallengeCreateOrConnectWithoutcommentsInput
  }

  export type CruiseCreateOneWithoutCommentsInput = {
    create?: XOR<CruiseUncheckedCreateWithoutCommentsInput, CruiseCreateWithoutCommentsInput>
    connect?: CruiseWhereUniqueInput
    connectOrCreate?: CruiseCreateOrConnectWithoutcommentsInput
  }

  export type EnumEntityTypeFieldUpdateOperationsInput = {
    set?: EntityType
  }

  export type NullableEnumAttachmentTypeFieldUpdateOperationsInput = {
    set?: AttachmentType | null
  }

  export type CommentUpdatekissesInput = {
    set: Enumerable<string>
  }

  export type CommentUpdateheartsInput = {
    set: Enumerable<string>
  }

  export type CommentUpdatehotInput = {
    set: Enumerable<string>
  }

  export type UserUpdateOneRequiredWithoutCommentInput = {
    create?: XOR<UserUncheckedCreateWithoutCommentInput, UserCreateWithoutCommentInput>
    connect?: UserWhereUniqueInput
    update?: XOR<UserUncheckedUpdateWithoutCommentInput, UserUpdateWithoutCommentInput>
    upsert?: UserUpsertWithoutCommentInput
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
  }

  export type PostUpdateOneWithoutCommentsInput = {
    create?: XOR<PostUncheckedCreateWithoutCommentsInput, PostCreateWithoutCommentsInput>
    connect?: PostWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<PostUncheckedUpdateWithoutCommentsInput, PostUpdateWithoutCommentsInput>
    upsert?: PostUpsertWithoutCommentsInput
    connectOrCreate?: PostCreateOrConnectWithoutcommentsInput
  }

  export type ChallengeUpdateOneWithoutCommentsInput = {
    create?: XOR<ChallengeUncheckedCreateWithoutCommentsInput, ChallengeCreateWithoutCommentsInput>
    connect?: ChallengeWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ChallengeUncheckedUpdateWithoutCommentsInput, ChallengeUpdateWithoutCommentsInput>
    upsert?: ChallengeUpsertWithoutCommentsInput
    connectOrCreate?: ChallengeCreateOrConnectWithoutcommentsInput
  }

  export type CruiseUpdateOneWithoutCommentsInput = {
    create?: XOR<CruiseUncheckedCreateWithoutCommentsInput, CruiseCreateWithoutCommentsInput>
    connect?: CruiseWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<CruiseUncheckedUpdateWithoutCommentsInput, CruiseUpdateWithoutCommentsInput>
    upsert?: CruiseUpsertWithoutCommentsInput
    connectOrCreate?: CruiseCreateOrConnectWithoutcommentsInput
  }

  export type UserUpdateOneWithoutCommentInput = {
    create?: XOR<UserUncheckedCreateWithoutCommentInput, UserCreateWithoutCommentInput>
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UserUncheckedUpdateWithoutCommentInput, UserUpdateWithoutCommentInput>
    upsert?: UserUpsertWithoutCommentInput
    connectOrCreate?: UserCreateOrConnectWithoutcommentInput
  }

  export type ChallengeCreatehashtagsInput = {
    set: Enumerable<string>
  }

  export type ChallengeCreatekissesInput = {
    set: Enumerable<string>
  }

  export type ChallengeCreateheartsInput = {
    set: Enumerable<string>
  }

  export type ChallengeCreatehotInput = {
    set: Enumerable<string>
  }

  export type UserCreateOneWithoutChallengeInput = {
    create?: XOR<UserUncheckedCreateWithoutChallengeInput, UserCreateWithoutChallengeInput>
    connect?: UserWhereUniqueInput
    connectOrCreate?: UserCreateOrConnectWithoutChallengeInput
  }

  export type UserCreateManyWithoutChallengeFollowingInput = {
    create?: XOR<Enumerable<UserUncheckedCreateWithoutChallengeFollowingInput>, Enumerable<UserCreateWithoutChallengeFollowingInput>>
    connect?: Enumerable<UserWhereUniqueInput>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutchallengeFollowingInput>
  }

  export type UserCreateOneWithoutChallengesInput = {
    create?: XOR<UserUncheckedCreateWithoutChallengesInput, UserCreateWithoutChallengesInput>
    connect?: UserWhereUniqueInput
    connectOrCreate?: UserCreateOrConnectWithoutchallengesInput
  }

  export type CommentCreateManyWithoutChallengeInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutChallengeInput>, Enumerable<CommentCreateWithoutChallengeInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutchallengeInput>
  }

  export type CommentUncheckedCreateManyWithoutChallengeInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutChallengeInput>, Enumerable<CommentCreateWithoutChallengeInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutchallengeInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ChallengeUpdatehashtagsInput = {
    set: Enumerable<string>
  }

  export type ChallengeUpdatekissesInput = {
    set: Enumerable<string>
  }

  export type ChallengeUpdateheartsInput = {
    set: Enumerable<string>
  }

  export type ChallengeUpdatehotInput = {
    set: Enumerable<string>
  }

  export type UserUpdateOneRequiredWithoutChallengeInput = {
    create?: XOR<UserUncheckedCreateWithoutChallengeInput, UserCreateWithoutChallengeInput>
    connect?: UserWhereUniqueInput
    update?: XOR<UserUncheckedUpdateWithoutChallengeInput, UserUpdateWithoutChallengeInput>
    upsert?: UserUpsertWithoutChallengeInput
    connectOrCreate?: UserCreateOrConnectWithoutChallengeInput
  }

  export type UserUpdateManyWithoutChallengeFollowingInput = {
    create?: XOR<Enumerable<UserUncheckedCreateWithoutChallengeFollowingInput>, Enumerable<UserCreateWithoutChallengeFollowingInput>>
    connect?: Enumerable<UserWhereUniqueInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutChallengeFollowingInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutChallengeFollowingInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutChallengeFollowingInput>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutchallengeFollowingInput>
  }

  export type UserUpdateOneWithoutChallengesInput = {
    create?: XOR<UserUncheckedCreateWithoutChallengesInput, UserCreateWithoutChallengesInput>
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UserUncheckedUpdateWithoutChallengesInput, UserUpdateWithoutChallengesInput>
    upsert?: UserUpsertWithoutChallengesInput
    connectOrCreate?: UserCreateOrConnectWithoutchallengesInput
  }

  export type CommentUpdateManyWithoutChallengeInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutChallengeInput>, Enumerable<CommentCreateWithoutChallengeInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutChallengeInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutChallengeInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutChallengeInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutchallengeInput>
  }

  export type CommentUncheckedUpdateManyWithoutChallengeInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutChallengeInput>, Enumerable<CommentCreateWithoutChallengeInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutChallengeInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutChallengeInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutChallengeInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutchallengeInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedEnumAttachmentTypeFilter = {
    equals?: AttachmentType
    in?: Enumerable<AttachmentType>
    notIn?: Enumerable<AttachmentType>
    not?: NestedEnumAttachmentTypeFilter | AttachmentType
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumEntityTypeFilter = {
    equals?: EntityType
    in?: Enumerable<EntityType>
    notIn?: Enumerable<EntityType>
    not?: NestedEnumEntityTypeFilter | EntityType
  }

  export type NestedEnumAttachmentTypeNullableFilter = {
    equals?: AttachmentType | null
    in?: Enumerable<AttachmentType> | null
    notIn?: Enumerable<AttachmentType> | null
    not?: NestedEnumAttachmentTypeNullableFilter | AttachmentType | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type UserCreateWithoutFollowersInput = {
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateManyWithoutFollowersInput
    posts?: PostCreateManyWithoutUserInput
    cruises?: CruiseCreateManyWithoutUserInput
    comment?: CommentCreateManyWithoutUserInput
    challenges?: ChallengeCreateManyWithoutUserInput
    cruiseFollowing?: CruiseCreateManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateManyWithoutFollowersInput
    Cruise?: CruiseCreateManyWithoutCreatorInput
    Comment?: CommentCreateManyWithoutUserInput
    Challenge?: ChallengeCreateManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutFollowersInput = {
    userId?: number
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateManyWithoutUserInput
    cruises?: CruiseUncheckedCreateManyWithoutUserInput
    comment?: CommentUncheckedCreateManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateManyWithoutCreatorInput
    Comment?: CommentUncheckedCreateManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutfollowersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutFollowersInput, UserCreateWithoutFollowersInput>
  }

  export type UserCreateWithoutFollowingInput = {
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    followers?: UserCreateManyWithoutFollowingInput
    posts?: PostCreateManyWithoutUserInput
    cruises?: CruiseCreateManyWithoutUserInput
    comment?: CommentCreateManyWithoutUserInput
    challenges?: ChallengeCreateManyWithoutUserInput
    cruiseFollowing?: CruiseCreateManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateManyWithoutFollowersInput
    Cruise?: CruiseCreateManyWithoutCreatorInput
    Comment?: CommentCreateManyWithoutUserInput
    Challenge?: ChallengeCreateManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    userId?: number
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateManyWithoutUserInput
    cruises?: CruiseUncheckedCreateManyWithoutUserInput
    comment?: CommentUncheckedCreateManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateManyWithoutCreatorInput
    Comment?: CommentUncheckedCreateManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutfollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutFollowingInput, UserCreateWithoutFollowingInput>
  }

  export type PostCreateWithoutUserInput = {
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    attachmentType: AttachmentType
    content?: string | null
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    comments?: CommentCreateManyWithoutPostInput
    cruises?: CruiseCreateManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    attachmentType: AttachmentType
    content?: string | null
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    comments?: CommentUncheckedCreateManyWithoutPostInput
    cruises?: CruiseUncheckedCreateManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutuserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostUncheckedCreateWithoutUserInput, PostCreateWithoutUserInput>
  }

  export type CruiseCreateWithoutUserInput = {
    slogan: string
    attachmentType: AttachmentType
    attachmentMeta: InputJsonValue
    attachmentUrl: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    creator: UserCreateOneWithoutCruiseInput
    followers?: UserCreateManyWithoutCruiseFollowingInput
    Post?: PostCreateOneWithoutCruisesInput
    comments?: CommentCreateManyWithoutCruiseInput
  }

  export type CruiseUncheckedCreateWithoutUserInput = {
    id?: number
    slogan: string
    attachmentType: AttachmentType
    attachmentMeta: InputJsonValue
    attachmentUrl: string
    creatorId: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedCreateManyWithoutCruiseInput
  }

  export type CruiseCreateOrConnectWithoutUserInput = {
    where: CruiseWhereUniqueInput
    create: XOR<CruiseUncheckedCreateWithoutUserInput, CruiseCreateWithoutUserInput>
  }

  export type CommentCreateWithoutUserInput = {
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
    user: UserCreateOneWithoutCommentInput
    Post?: PostCreateOneWithoutCommentsInput
    challenge?: ChallengeCreateOneWithoutCommentsInput
    cruise?: CruiseCreateOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    userId: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    challengeId?: number | null
    cruiseId?: number | null
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentUncheckedCreateWithoutUserInput, CommentCreateWithoutUserInput>
  }

  export type ChallengeCreateWithoutUserInput = {
    challenge: string
    attachmentType: AttachmentType
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    reaction: InputJsonValue
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
    creator: UserCreateOneWithoutChallengeInput
    followers?: UserCreateManyWithoutChallengeFollowingInput
    comments?: CommentCreateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutUserInput = {
    id?: number
    challenge: string
    creatorId: string
    attachmentType: AttachmentType
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    reaction: InputJsonValue
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
    comments?: CommentUncheckedCreateManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutUserInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeUncheckedCreateWithoutUserInput, ChallengeCreateWithoutUserInput>
  }

  export type CruiseCreateWithoutFollowersInput = {
    slogan: string
    attachmentType: AttachmentType
    attachmentMeta: InputJsonValue
    attachmentUrl: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    creator: UserCreateOneWithoutCruiseInput
    User?: UserCreateOneWithoutCruisesInput
    Post?: PostCreateOneWithoutCruisesInput
    comments?: CommentCreateManyWithoutCruiseInput
  }

  export type CruiseUncheckedCreateWithoutFollowersInput = {
    id?: number
    slogan: string
    attachmentType: AttachmentType
    attachmentMeta: InputJsonValue
    attachmentUrl: string
    creatorId: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    postId?: number | null
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedCreateManyWithoutCruiseInput
  }

  export type CruiseCreateOrConnectWithoutfollowersInput = {
    where: CruiseWhereUniqueInput
    create: XOR<CruiseUncheckedCreateWithoutFollowersInput, CruiseCreateWithoutFollowersInput>
  }

  export type ChallengeCreateWithoutFollowersInput = {
    challenge: string
    attachmentType: AttachmentType
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    reaction: InputJsonValue
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
    creator: UserCreateOneWithoutChallengeInput
    User?: UserCreateOneWithoutChallengesInput
    comments?: CommentCreateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutFollowersInput = {
    id?: number
    challenge: string
    creatorId: string
    attachmentType: AttachmentType
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    reaction: InputJsonValue
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
    comments?: CommentUncheckedCreateManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutfollowersInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeUncheckedCreateWithoutFollowersInput, ChallengeCreateWithoutFollowersInput>
  }

  export type CruiseCreateWithoutCreatorInput = {
    slogan: string
    attachmentType: AttachmentType
    attachmentMeta: InputJsonValue
    attachmentUrl: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    followers?: UserCreateManyWithoutCruiseFollowingInput
    User?: UserCreateOneWithoutCruisesInput
    Post?: PostCreateOneWithoutCruisesInput
    comments?: CommentCreateManyWithoutCruiseInput
  }

  export type CruiseUncheckedCreateWithoutCreatorInput = {
    id?: number
    slogan: string
    attachmentType: AttachmentType
    attachmentMeta: InputJsonValue
    attachmentUrl: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    postId?: number | null
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedCreateManyWithoutCruiseInput
  }

  export type CruiseCreateOrConnectWithoutcreatorInput = {
    where: CruiseWhereUniqueInput
    create: XOR<CruiseUncheckedCreateWithoutCreatorInput, CruiseCreateWithoutCreatorInput>
  }

  export type ChallengeCreateWithoutCreatorInput = {
    challenge: string
    attachmentType: AttachmentType
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    reaction: InputJsonValue
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
    followers?: UserCreateManyWithoutChallengeFollowingInput
    User?: UserCreateOneWithoutChallengesInput
    comments?: CommentCreateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutCreatorInput = {
    id?: number
    challenge: string
    attachmentType: AttachmentType
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    reaction: InputJsonValue
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
    comments?: CommentUncheckedCreateManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutcreatorInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeUncheckedCreateWithoutCreatorInput, ChallengeCreateWithoutCreatorInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowersInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUncheckedUpdateWithoutFollowersInput, UserUpdateWithoutFollowersInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowersInput = {
    where: UserScalarWhereInput
    data: XOR<UserUncheckedUpdateManyWithoutFollowingInput, UserUpdateManyMutationInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    userId?: IntFilter | number
    uid?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    userName?: StringNullableFilter | string | null
    email?: StringFilter | string
    imgUrl?: StringNullableFilter | string | null
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    location?: JsonNullableFilter
  }

  export type UserUpsertWithWhereUniqueWithoutFollowersInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUncheckedUpdateWithoutFollowersInput, UserUpdateWithoutFollowersInput>
    create: XOR<UserUncheckedCreateWithoutFollowersInput, UserCreateWithoutFollowersInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUncheckedUpdateWithoutFollowingInput, UserUpdateWithoutFollowingInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowingInput = {
    where: UserScalarWhereInput
    data: XOR<UserUncheckedUpdateManyWithoutFollowersInput, UserUpdateManyMutationInput>
  }

  export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUncheckedUpdateWithoutFollowingInput, UserUpdateWithoutFollowingInput>
    create: XOR<UserUncheckedCreateWithoutFollowingInput, UserCreateWithoutFollowingInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUncheckedUpdateWithoutUserInput, PostUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUncheckedUpdateManyWithoutPostsInput, PostUpdateManyMutationInput>
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    id?: IntFilter | number
    userId?: StringFilter | string
    attachmentUrl?: StringFilter | string
    attachmentMeta?: JsonFilter
    attachmentType?: EnumAttachmentTypeFilter | AttachmentType
    content?: StringNullableFilter | string | null
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    reaction?: JsonNullableFilter
    location?: JsonNullableFilter
    hashtags?: StringNullableListFilter
    kisses?: StringNullableListFilter
    hearts?: StringNullableListFilter
    hot?: StringNullableListFilter
    challengeId?: IntNullableFilter | number | null
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUncheckedUpdateWithoutUserInput, PostUpdateWithoutUserInput>
    create: XOR<PostUncheckedCreateWithoutUserInput, PostCreateWithoutUserInput>
  }

  export type CruiseUpdateWithWhereUniqueWithoutUserInput = {
    where: CruiseWhereUniqueInput
    data: XOR<CruiseUncheckedUpdateWithoutUserInput, CruiseUpdateWithoutUserInput>
  }

  export type CruiseUpdateManyWithWhereWithoutUserInput = {
    where: CruiseScalarWhereInput
    data: XOR<CruiseUncheckedUpdateManyWithoutCruisesInput, CruiseUpdateManyMutationInput>
  }

  export type CruiseScalarWhereInput = {
    AND?: Enumerable<CruiseScalarWhereInput>
    OR?: Enumerable<CruiseScalarWhereInput>
    NOT?: Enumerable<CruiseScalarWhereInput>
    id?: IntFilter | number
    slogan?: StringFilter | string
    attachmentType?: EnumAttachmentTypeFilter | AttachmentType
    attachmentMeta?: JsonFilter
    attachmentUrl?: StringFilter | string
    creatorId?: StringFilter | string
    reaction?: JsonFilter
    kisses?: StringNullableListFilter
    hearts?: StringNullableListFilter
    hot?: StringNullableListFilter
    hashtags?: StringNullableListFilter
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    userUserId?: IntNullableFilter | number | null
    postId?: IntNullableFilter | number | null
  }

  export type CruiseUpsertWithWhereUniqueWithoutUserInput = {
    where: CruiseWhereUniqueInput
    update: XOR<CruiseUncheckedUpdateWithoutUserInput, CruiseUpdateWithoutUserInput>
    create: XOR<CruiseUncheckedCreateWithoutUserInput, CruiseCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUncheckedUpdateWithoutUserInput, CommentUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUncheckedUpdateManyWithoutCommentInput, CommentUpdateManyMutationInput>
  }

  export type CommentScalarWhereInput = {
    AND?: Enumerable<CommentScalarWhereInput>
    OR?: Enumerable<CommentScalarWhereInput>
    NOT?: Enumerable<CommentScalarWhereInput>
    id?: IntFilter | number
    entityId?: IntFilter | number
    entityType?: EnumEntityTypeFilter | EntityType
    comment?: StringFilter | string
    attachmentMeta?: JsonNullableFilter
    attachmentType?: EnumAttachmentTypeNullableFilter | AttachmentType | null
    attachmentUrl?: StringNullableFilter | string | null
    userId?: StringFilter | string
    reaction?: JsonFilter
    kisses?: StringNullableListFilter
    hearts?: StringNullableListFilter
    hot?: StringNullableListFilter
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    postId?: IntNullableFilter | number | null
    challengeId?: IntNullableFilter | number | null
    cruiseId?: IntNullableFilter | number | null
    userUserId?: IntNullableFilter | number | null
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUncheckedUpdateWithoutUserInput, CommentUpdateWithoutUserInput>
    create: XOR<CommentUncheckedCreateWithoutUserInput, CommentCreateWithoutUserInput>
  }

  export type ChallengeUpdateWithWhereUniqueWithoutUserInput = {
    where: ChallengeWhereUniqueInput
    data: XOR<ChallengeUncheckedUpdateWithoutUserInput, ChallengeUpdateWithoutUserInput>
  }

  export type ChallengeUpdateManyWithWhereWithoutUserInput = {
    where: ChallengeScalarWhereInput
    data: XOR<ChallengeUncheckedUpdateManyWithoutChallengesInput, ChallengeUpdateManyMutationInput>
  }

  export type ChallengeScalarWhereInput = {
    AND?: Enumerable<ChallengeScalarWhereInput>
    OR?: Enumerable<ChallengeScalarWhereInput>
    NOT?: Enumerable<ChallengeScalarWhereInput>
    id?: IntFilter | number
    challenge?: StringFilter | string
    creatorId?: StringFilter | string
    attachmentType?: EnumAttachmentTypeFilter | AttachmentType
    attachmentUrl?: StringFilter | string
    attachmentMeta?: JsonFilter
    reaction?: JsonFilter
    hashtags?: StringNullableListFilter
    kisses?: StringNullableListFilter
    hearts?: StringNullableListFilter
    hot?: StringNullableListFilter
    start?: DateTimeNullableFilter | Date | string | null
    end?: DateTimeNullableFilter | Date | string | null
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    userUserId?: IntNullableFilter | number | null
  }

  export type ChallengeUpsertWithWhereUniqueWithoutUserInput = {
    where: ChallengeWhereUniqueInput
    update: XOR<ChallengeUncheckedUpdateWithoutUserInput, ChallengeUpdateWithoutUserInput>
    create: XOR<ChallengeUncheckedCreateWithoutUserInput, ChallengeCreateWithoutUserInput>
  }

  export type CruiseUpdateWithWhereUniqueWithoutFollowersInput = {
    where: CruiseWhereUniqueInput
    data: XOR<CruiseUncheckedUpdateWithoutFollowersInput, CruiseUpdateWithoutFollowersInput>
  }

  export type CruiseUpdateManyWithWhereWithoutFollowersInput = {
    where: CruiseScalarWhereInput
    data: XOR<CruiseUncheckedUpdateManyWithoutCruiseFollowingInput, CruiseUpdateManyMutationInput>
  }

  export type CruiseUpsertWithWhereUniqueWithoutFollowersInput = {
    where: CruiseWhereUniqueInput
    update: XOR<CruiseUncheckedUpdateWithoutFollowersInput, CruiseUpdateWithoutFollowersInput>
    create: XOR<CruiseUncheckedCreateWithoutFollowersInput, CruiseCreateWithoutFollowersInput>
  }

  export type ChallengeUpdateWithWhereUniqueWithoutFollowersInput = {
    where: ChallengeWhereUniqueInput
    data: XOR<ChallengeUncheckedUpdateWithoutFollowersInput, ChallengeUpdateWithoutFollowersInput>
  }

  export type ChallengeUpdateManyWithWhereWithoutFollowersInput = {
    where: ChallengeScalarWhereInput
    data: XOR<ChallengeUncheckedUpdateManyWithoutChallengeFollowingInput, ChallengeUpdateManyMutationInput>
  }

  export type ChallengeUpsertWithWhereUniqueWithoutFollowersInput = {
    where: ChallengeWhereUniqueInput
    update: XOR<ChallengeUncheckedUpdateWithoutFollowersInput, ChallengeUpdateWithoutFollowersInput>
    create: XOR<ChallengeUncheckedCreateWithoutFollowersInput, ChallengeCreateWithoutFollowersInput>
  }

  export type CruiseUpdateWithWhereUniqueWithoutCreatorInput = {
    where: CruiseWhereUniqueInput
    data: XOR<CruiseUncheckedUpdateWithoutCreatorInput, CruiseUpdateWithoutCreatorInput>
  }

  export type CruiseUpdateManyWithWhereWithoutCreatorInput = {
    where: CruiseScalarWhereInput
    data: XOR<CruiseUncheckedUpdateManyWithoutCruiseInput, CruiseUpdateManyMutationInput>
  }

  export type CruiseUpsertWithWhereUniqueWithoutCreatorInput = {
    where: CruiseWhereUniqueInput
    update: XOR<CruiseUncheckedUpdateWithoutCreatorInput, CruiseUpdateWithoutCreatorInput>
    create: XOR<CruiseUncheckedCreateWithoutCreatorInput, CruiseCreateWithoutCreatorInput>
  }

  export type ChallengeUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ChallengeWhereUniqueInput
    data: XOR<ChallengeUncheckedUpdateWithoutCreatorInput, ChallengeUpdateWithoutCreatorInput>
  }

  export type ChallengeUpdateManyWithWhereWithoutCreatorInput = {
    where: ChallengeScalarWhereInput
    data: XOR<ChallengeUncheckedUpdateManyWithoutChallengeInput, ChallengeUpdateManyMutationInput>
  }

  export type ChallengeUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ChallengeWhereUniqueInput
    update: XOR<ChallengeUncheckedUpdateWithoutCreatorInput, ChallengeUpdateWithoutCreatorInput>
    create: XOR<ChallengeUncheckedCreateWithoutCreatorInput, ChallengeCreateWithoutCreatorInput>
  }

  export type UserCreateWithoutPostsInput = {
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateManyWithoutFollowersInput
    followers?: UserCreateManyWithoutFollowingInput
    cruises?: CruiseCreateManyWithoutUserInput
    comment?: CommentCreateManyWithoutUserInput
    challenges?: ChallengeCreateManyWithoutUserInput
    cruiseFollowing?: CruiseCreateManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateManyWithoutFollowersInput
    Cruise?: CruiseCreateManyWithoutCreatorInput
    Comment?: CommentCreateManyWithoutUserInput
    Challenge?: ChallengeCreateManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    userId?: number
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    cruises?: CruiseUncheckedCreateManyWithoutUserInput
    comment?: CommentUncheckedCreateManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateManyWithoutCreatorInput
    Comment?: CommentUncheckedCreateManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutpostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutPostsInput, UserCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
    user: UserCreateOneWithoutCommentInput
    challenge?: ChallengeCreateOneWithoutCommentsInput
    cruise?: CruiseCreateOneWithoutCommentsInput
    User?: UserCreateOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: number
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    userId: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    challengeId?: number | null
    cruiseId?: number | null
    userUserId?: number | null
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentUncheckedCreateWithoutPostInput, CommentCreateWithoutPostInput>
  }

  export type CruiseCreateWithoutPostInput = {
    slogan: string
    attachmentType: AttachmentType
    attachmentMeta: InputJsonValue
    attachmentUrl: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    creator: UserCreateOneWithoutCruiseInput
    followers?: UserCreateManyWithoutCruiseFollowingInput
    User?: UserCreateOneWithoutCruisesInput
    comments?: CommentCreateManyWithoutCruiseInput
  }

  export type CruiseUncheckedCreateWithoutPostInput = {
    id?: number
    slogan: string
    attachmentType: AttachmentType
    attachmentMeta: InputJsonValue
    attachmentUrl: string
    creatorId: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedCreateManyWithoutCruiseInput
  }

  export type CruiseCreateOrConnectWithoutPostInput = {
    where: CruiseWhereUniqueInput
    create: XOR<CruiseUncheckedCreateWithoutPostInput, CruiseCreateWithoutPostInput>
  }

  export type UserUpdateWithoutPostsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    following?: UserUpdateManyWithoutFollowersInput
    followers?: UserUpdateManyWithoutFollowingInput
    cruises?: CruiseUpdateManyWithoutUserInput
    comment?: CommentUpdateManyWithoutUserInput
    challenges?: ChallengeUpdateManyWithoutUserInput
    cruiseFollowing?: CruiseUpdateManyWithoutFollowersInput
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Cruise?: CruiseUpdateManyWithoutCreatorInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutCreatorInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutCreatorInput
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUncheckedUpdateWithoutPostsInput, UserUpdateWithoutPostsInput>
    create: XOR<UserUncheckedCreateWithoutPostsInput, UserCreateWithoutPostsInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUncheckedUpdateWithoutPostInput, CommentUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUncheckedUpdateManyWithoutCommentsInput, CommentUpdateManyMutationInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUncheckedUpdateWithoutPostInput, CommentUpdateWithoutPostInput>
    create: XOR<CommentUncheckedCreateWithoutPostInput, CommentCreateWithoutPostInput>
  }

  export type CruiseUpdateWithWhereUniqueWithoutPostInput = {
    where: CruiseWhereUniqueInput
    data: XOR<CruiseUncheckedUpdateWithoutPostInput, CruiseUpdateWithoutPostInput>
  }

  export type CruiseUpdateManyWithWhereWithoutPostInput = {
    where: CruiseScalarWhereInput
    data: XOR<CruiseUncheckedUpdateManyWithoutCruisesInput, CruiseUpdateManyMutationInput>
  }

  export type CruiseUpsertWithWhereUniqueWithoutPostInput = {
    where: CruiseWhereUniqueInput
    update: XOR<CruiseUncheckedUpdateWithoutPostInput, CruiseUpdateWithoutPostInput>
    create: XOR<CruiseUncheckedCreateWithoutPostInput, CruiseCreateWithoutPostInput>
  }

  export type UserCreateWithoutCruiseInput = {
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateManyWithoutFollowersInput
    followers?: UserCreateManyWithoutFollowingInput
    posts?: PostCreateManyWithoutUserInput
    cruises?: CruiseCreateManyWithoutUserInput
    comment?: CommentCreateManyWithoutUserInput
    challenges?: ChallengeCreateManyWithoutUserInput
    cruiseFollowing?: CruiseCreateManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateManyWithoutFollowersInput
    Comment?: CommentCreateManyWithoutUserInput
    Challenge?: ChallengeCreateManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCruiseInput = {
    userId?: number
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateManyWithoutUserInput
    cruises?: CruiseUncheckedCreateManyWithoutUserInput
    comment?: CommentUncheckedCreateManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateManyWithoutUserInput
    Comment?: CommentUncheckedCreateManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCruiseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutCruiseInput, UserCreateWithoutCruiseInput>
  }

  export type UserCreateWithoutCruiseFollowingInput = {
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateManyWithoutFollowersInput
    followers?: UserCreateManyWithoutFollowingInput
    posts?: PostCreateManyWithoutUserInput
    cruises?: CruiseCreateManyWithoutUserInput
    comment?: CommentCreateManyWithoutUserInput
    challenges?: ChallengeCreateManyWithoutUserInput
    challengeFollowing?: ChallengeCreateManyWithoutFollowersInput
    Cruise?: CruiseCreateManyWithoutCreatorInput
    Comment?: CommentCreateManyWithoutUserInput
    Challenge?: ChallengeCreateManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCruiseFollowingInput = {
    userId?: number
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateManyWithoutUserInput
    cruises?: CruiseUncheckedCreateManyWithoutUserInput
    comment?: CommentUncheckedCreateManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateManyWithoutCreatorInput
    Comment?: CommentUncheckedCreateManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutcruiseFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutCruiseFollowingInput, UserCreateWithoutCruiseFollowingInput>
  }

  export type UserCreateWithoutCruisesInput = {
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateManyWithoutFollowersInput
    followers?: UserCreateManyWithoutFollowingInput
    posts?: PostCreateManyWithoutUserInput
    comment?: CommentCreateManyWithoutUserInput
    challenges?: ChallengeCreateManyWithoutUserInput
    cruiseFollowing?: CruiseCreateManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateManyWithoutFollowersInput
    Cruise?: CruiseCreateManyWithoutCreatorInput
    Comment?: CommentCreateManyWithoutUserInput
    Challenge?: ChallengeCreateManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCruisesInput = {
    userId?: number
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateManyWithoutUserInput
    comment?: CommentUncheckedCreateManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateManyWithoutCreatorInput
    Comment?: CommentUncheckedCreateManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutcruisesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutCruisesInput, UserCreateWithoutCruisesInput>
  }

  export type PostCreateWithoutCruisesInput = {
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    attachmentType: AttachmentType
    content?: string | null
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    user: UserCreateOneWithoutPostsInput
    comments?: CommentCreateManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCruisesInput = {
    id?: number
    userId: string
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    attachmentType: AttachmentType
    content?: string | null
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    comments?: CommentUncheckedCreateManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutcruisesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostUncheckedCreateWithoutCruisesInput, PostCreateWithoutCruisesInput>
  }

  export type CommentCreateWithoutCruiseInput = {
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
    user: UserCreateOneWithoutCommentInput
    Post?: PostCreateOneWithoutCommentsInput
    challenge?: ChallengeCreateOneWithoutCommentsInput
    User?: UserCreateOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutCruiseInput = {
    id?: number
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    userId: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    challengeId?: number | null
    userUserId?: number | null
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
  }

  export type CommentCreateOrConnectWithoutcruiseInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentUncheckedCreateWithoutCruiseInput, CommentCreateWithoutCruiseInput>
  }

  export type UserUpdateWithoutCruiseInput = {
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    following?: UserUpdateManyWithoutFollowersInput
    followers?: UserUpdateManyWithoutFollowingInput
    posts?: PostUpdateManyWithoutUserInput
    cruises?: CruiseUpdateManyWithoutUserInput
    comment?: CommentUpdateManyWithoutUserInput
    challenges?: ChallengeUpdateManyWithoutUserInput
    cruiseFollowing?: CruiseUpdateManyWithoutFollowersInput
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateWithoutCruiseInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutCreatorInput
  }

  export type UserUpsertWithoutCruiseInput = {
    update: XOR<UserUncheckedUpdateWithoutCruiseInput, UserUpdateWithoutCruiseInput>
    create: XOR<UserUncheckedCreateWithoutCruiseInput, UserCreateWithoutCruiseInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCruiseFollowingInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUncheckedUpdateWithoutCruiseFollowingInput, UserUpdateWithoutCruiseFollowingInput>
  }

  export type UserUpdateManyWithWhereWithoutCruiseFollowingInput = {
    where: UserScalarWhereInput
    data: XOR<UserUncheckedUpdateManyWithoutFollowersInput, UserUpdateManyMutationInput>
  }

  export type UserUpsertWithWhereUniqueWithoutCruiseFollowingInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUncheckedUpdateWithoutCruiseFollowingInput, UserUpdateWithoutCruiseFollowingInput>
    create: XOR<UserUncheckedCreateWithoutCruiseFollowingInput, UserCreateWithoutCruiseFollowingInput>
  }

  export type UserUpdateWithoutCruisesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    following?: UserUpdateManyWithoutFollowersInput
    followers?: UserUpdateManyWithoutFollowingInput
    posts?: PostUpdateManyWithoutUserInput
    comment?: CommentUpdateManyWithoutUserInput
    challenges?: ChallengeUpdateManyWithoutUserInput
    cruiseFollowing?: CruiseUpdateManyWithoutFollowersInput
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Cruise?: CruiseUpdateManyWithoutCreatorInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateWithoutCruisesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutCreatorInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutCreatorInput
  }

  export type UserUpsertWithoutCruisesInput = {
    update: XOR<UserUncheckedUpdateWithoutCruisesInput, UserUpdateWithoutCruisesInput>
    create: XOR<UserUncheckedCreateWithoutCruisesInput, UserCreateWithoutCruisesInput>
  }

  export type PostUpdateWithoutCruisesInput = {
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutPostsInput
    comments?: CommentUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutCruisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutPostInput
  }

  export type PostUpsertWithoutCruisesInput = {
    update: XOR<PostUncheckedUpdateWithoutCruisesInput, PostUpdateWithoutCruisesInput>
    create: XOR<PostUncheckedCreateWithoutCruisesInput, PostCreateWithoutCruisesInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutCruiseInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUncheckedUpdateWithoutCruiseInput, CommentUpdateWithoutCruiseInput>
  }

  export type CommentUpdateManyWithWhereWithoutCruiseInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUncheckedUpdateManyWithoutCommentsInput, CommentUpdateManyMutationInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutCruiseInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUncheckedUpdateWithoutCruiseInput, CommentUpdateWithoutCruiseInput>
    create: XOR<CommentUncheckedCreateWithoutCruiseInput, CommentCreateWithoutCruiseInput>
  }

  export type UserCreateWithoutCommentInput = {
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateManyWithoutFollowersInput
    followers?: UserCreateManyWithoutFollowingInput
    posts?: PostCreateManyWithoutUserInput
    cruises?: CruiseCreateManyWithoutUserInput
    comment?: CommentCreateManyWithoutUserInput
    challenges?: ChallengeCreateManyWithoutUserInput
    cruiseFollowing?: CruiseCreateManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateManyWithoutFollowersInput
    Cruise?: CruiseCreateManyWithoutCreatorInput
    Challenge?: ChallengeCreateManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCommentInput = {
    userId?: number
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateManyWithoutUserInput
    cruises?: CruiseUncheckedCreateManyWithoutUserInput
    comment?: CommentUncheckedCreateManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateManyWithoutCreatorInput
    Challenge?: ChallengeUncheckedCreateManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutCommentInput, UserCreateWithoutCommentInput>
  }

  export type PostCreateWithoutCommentsInput = {
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    attachmentType: AttachmentType
    content?: string | null
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    user: UserCreateOneWithoutPostsInput
    cruises?: CruiseCreateManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: number
    userId: string
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    attachmentType: AttachmentType
    content?: string | null
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    cruises?: CruiseUncheckedCreateManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutcommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostUncheckedCreateWithoutCommentsInput, PostCreateWithoutCommentsInput>
  }

  export type ChallengeCreateWithoutCommentsInput = {
    challenge: string
    attachmentType: AttachmentType
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    reaction: InputJsonValue
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
    creator: UserCreateOneWithoutChallengeInput
    followers?: UserCreateManyWithoutChallengeFollowingInput
    User?: UserCreateOneWithoutChallengesInput
  }

  export type ChallengeUncheckedCreateWithoutCommentsInput = {
    id?: number
    challenge: string
    creatorId: string
    attachmentType: AttachmentType
    attachmentUrl: string
    attachmentMeta: InputJsonValue
    reaction: InputJsonValue
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
  }

  export type ChallengeCreateOrConnectWithoutcommentsInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeUncheckedCreateWithoutCommentsInput, ChallengeCreateWithoutCommentsInput>
  }

  export type CruiseCreateWithoutCommentsInput = {
    slogan: string
    attachmentType: AttachmentType
    attachmentMeta: InputJsonValue
    attachmentUrl: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    creator: UserCreateOneWithoutCruiseInput
    followers?: UserCreateManyWithoutCruiseFollowingInput
    User?: UserCreateOneWithoutCruisesInput
    Post?: PostCreateOneWithoutCruisesInput
  }

  export type CruiseUncheckedCreateWithoutCommentsInput = {
    id?: number
    slogan: string
    attachmentType: AttachmentType
    attachmentMeta: InputJsonValue
    attachmentUrl: string
    creatorId: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    postId?: number | null
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
  }

  export type CruiseCreateOrConnectWithoutcommentsInput = {
    where: CruiseWhereUniqueInput
    create: XOR<CruiseUncheckedCreateWithoutCommentsInput, CruiseCreateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentInput = {
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    following?: UserUpdateManyWithoutFollowersInput
    followers?: UserUpdateManyWithoutFollowingInput
    posts?: PostUpdateManyWithoutUserInput
    cruises?: CruiseUpdateManyWithoutUserInput
    comment?: CommentUpdateManyWithoutUserInput
    challenges?: ChallengeUpdateManyWithoutUserInput
    cruiseFollowing?: CruiseUpdateManyWithoutFollowersInput
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Cruise?: CruiseUpdateManyWithoutCreatorInput
    Challenge?: ChallengeUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateWithoutCommentInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutCreatorInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutCreatorInput
  }

  export type UserUpsertWithoutCommentInput = {
    update: XOR<UserUncheckedUpdateWithoutCommentInput, UserUpdateWithoutCommentInput>
    create: XOR<UserUncheckedCreateWithoutCommentInput, UserCreateWithoutCommentInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutPostsInput
    cruises?: CruiseUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    cruises?: CruiseUncheckedUpdateManyWithoutPostInput
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUncheckedUpdateWithoutCommentsInput, PostUpdateWithoutCommentsInput>
    create: XOR<PostUncheckedCreateWithoutCommentsInput, PostCreateWithoutCommentsInput>
  }

  export type ChallengeUpdateWithoutCommentsInput = {
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    reaction?: InputJsonValue
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
    creator?: UserUpdateOneRequiredWithoutChallengeInput
    followers?: UserUpdateManyWithoutChallengeFollowingInput
    User?: UserUpdateOneWithoutChallengesInput
  }

  export type ChallengeUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    reaction?: InputJsonValue
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
  }

  export type ChallengeUpsertWithoutCommentsInput = {
    update: XOR<ChallengeUncheckedUpdateWithoutCommentsInput, ChallengeUpdateWithoutCommentsInput>
    create: XOR<ChallengeUncheckedCreateWithoutCommentsInput, ChallengeCreateWithoutCommentsInput>
  }

  export type CruiseUpdateWithoutCommentsInput = {
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    creator?: UserUpdateOneRequiredWithoutCruiseInput
    followers?: UserUpdateManyWithoutCruiseFollowingInput
    User?: UserUpdateOneWithoutCruisesInput
    Post?: PostUpdateOneWithoutCruisesInput
  }

  export type CruiseUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
  }

  export type CruiseUpsertWithoutCommentsInput = {
    update: XOR<CruiseUncheckedUpdateWithoutCommentsInput, CruiseUpdateWithoutCommentsInput>
    create: XOR<CruiseUncheckedCreateWithoutCommentsInput, CruiseCreateWithoutCommentsInput>
  }

  export type UserCreateOrConnectWithoutcommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutCommentInput, UserCreateWithoutCommentInput>
  }

  export type UserCreateWithoutChallengeInput = {
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateManyWithoutFollowersInput
    followers?: UserCreateManyWithoutFollowingInput
    posts?: PostCreateManyWithoutUserInput
    cruises?: CruiseCreateManyWithoutUserInput
    comment?: CommentCreateManyWithoutUserInput
    challenges?: ChallengeCreateManyWithoutUserInput
    cruiseFollowing?: CruiseCreateManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateManyWithoutFollowersInput
    Cruise?: CruiseCreateManyWithoutCreatorInput
    Comment?: CommentCreateManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChallengeInput = {
    userId?: number
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateManyWithoutUserInput
    cruises?: CruiseUncheckedCreateManyWithoutUserInput
    comment?: CommentUncheckedCreateManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateManyWithoutCreatorInput
    Comment?: CommentUncheckedCreateManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChallengeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutChallengeInput, UserCreateWithoutChallengeInput>
  }

  export type UserCreateWithoutChallengeFollowingInput = {
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateManyWithoutFollowersInput
    followers?: UserCreateManyWithoutFollowingInput
    posts?: PostCreateManyWithoutUserInput
    cruises?: CruiseCreateManyWithoutUserInput
    comment?: CommentCreateManyWithoutUserInput
    challenges?: ChallengeCreateManyWithoutUserInput
    cruiseFollowing?: CruiseCreateManyWithoutFollowersInput
    Cruise?: CruiseCreateManyWithoutCreatorInput
    Comment?: CommentCreateManyWithoutUserInput
    Challenge?: ChallengeCreateManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutChallengeFollowingInput = {
    userId?: number
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateManyWithoutUserInput
    cruises?: CruiseUncheckedCreateManyWithoutUserInput
    comment?: CommentUncheckedCreateManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateManyWithoutCreatorInput
    Comment?: CommentUncheckedCreateManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutchallengeFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutChallengeFollowingInput, UserCreateWithoutChallengeFollowingInput>
  }

  export type UserCreateWithoutChallengesInput = {
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateManyWithoutFollowersInput
    followers?: UserCreateManyWithoutFollowingInput
    posts?: PostCreateManyWithoutUserInput
    cruises?: CruiseCreateManyWithoutUserInput
    comment?: CommentCreateManyWithoutUserInput
    cruiseFollowing?: CruiseCreateManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateManyWithoutFollowersInput
    Cruise?: CruiseCreateManyWithoutCreatorInput
    Comment?: CommentCreateManyWithoutUserInput
    Challenge?: ChallengeCreateManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutChallengesInput = {
    userId?: number
    uid: string
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateManyWithoutUserInput
    cruises?: CruiseUncheckedCreateManyWithoutUserInput
    comment?: CommentUncheckedCreateManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateManyWithoutCreatorInput
    Comment?: CommentUncheckedCreateManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutchallengesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutChallengesInput, UserCreateWithoutChallengesInput>
  }

  export type CommentCreateWithoutChallengeInput = {
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
    user: UserCreateOneWithoutCommentInput
    Post?: PostCreateOneWithoutCommentsInput
    cruise?: CruiseCreateOneWithoutCommentsInput
    User?: UserCreateOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutChallengeInput = {
    id?: number
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    userId: string
    reaction: InputJsonValue
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    cruiseId?: number | null
    userUserId?: number | null
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
  }

  export type CommentCreateOrConnectWithoutchallengeInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentUncheckedCreateWithoutChallengeInput, CommentCreateWithoutChallengeInput>
  }

  export type UserUpdateWithoutChallengeInput = {
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    following?: UserUpdateManyWithoutFollowersInput
    followers?: UserUpdateManyWithoutFollowingInput
    posts?: PostUpdateManyWithoutUserInput
    cruises?: CruiseUpdateManyWithoutUserInput
    comment?: CommentUpdateManyWithoutUserInput
    challenges?: ChallengeUpdateManyWithoutUserInput
    cruiseFollowing?: CruiseUpdateManyWithoutFollowersInput
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Cruise?: CruiseUpdateManyWithoutCreatorInput
    Comment?: CommentUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutChallengeInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutCreatorInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
  }

  export type UserUpsertWithoutChallengeInput = {
    update: XOR<UserUncheckedUpdateWithoutChallengeInput, UserUpdateWithoutChallengeInput>
    create: XOR<UserUncheckedCreateWithoutChallengeInput, UserCreateWithoutChallengeInput>
  }

  export type UserUpdateWithWhereUniqueWithoutChallengeFollowingInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUncheckedUpdateWithoutChallengeFollowingInput, UserUpdateWithoutChallengeFollowingInput>
  }

  export type UserUpdateManyWithWhereWithoutChallengeFollowingInput = {
    where: UserScalarWhereInput
    data: XOR<UserUncheckedUpdateManyWithoutFollowersInput, UserUpdateManyMutationInput>
  }

  export type UserUpsertWithWhereUniqueWithoutChallengeFollowingInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUncheckedUpdateWithoutChallengeFollowingInput, UserUpdateWithoutChallengeFollowingInput>
    create: XOR<UserUncheckedCreateWithoutChallengeFollowingInput, UserCreateWithoutChallengeFollowingInput>
  }

  export type UserUpdateWithoutChallengesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    following?: UserUpdateManyWithoutFollowersInput
    followers?: UserUpdateManyWithoutFollowingInput
    posts?: PostUpdateManyWithoutUserInput
    cruises?: CruiseUpdateManyWithoutUserInput
    comment?: CommentUpdateManyWithoutUserInput
    cruiseFollowing?: CruiseUpdateManyWithoutFollowersInput
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Cruise?: CruiseUpdateManyWithoutCreatorInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateWithoutChallengesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutCreatorInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutCreatorInput
  }

  export type UserUpsertWithoutChallengesInput = {
    update: XOR<UserUncheckedUpdateWithoutChallengesInput, UserUpdateWithoutChallengesInput>
    create: XOR<UserUncheckedCreateWithoutChallengesInput, UserCreateWithoutChallengesInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutChallengeInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUncheckedUpdateWithoutChallengeInput, CommentUpdateWithoutChallengeInput>
  }

  export type CommentUpdateManyWithWhereWithoutChallengeInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUncheckedUpdateManyWithoutCommentsInput, CommentUpdateManyMutationInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutChallengeInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUncheckedUpdateWithoutChallengeInput, CommentUpdateWithoutChallengeInput>
    create: XOR<CommentUncheckedCreateWithoutChallengeInput, CommentCreateWithoutChallengeInput>
  }

  export type UserUpdateWithoutFollowersInput = {
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    following?: UserUpdateManyWithoutFollowersInput
    posts?: PostUpdateManyWithoutUserInput
    cruises?: CruiseUpdateManyWithoutUserInput
    comment?: CommentUpdateManyWithoutUserInput
    challenges?: ChallengeUpdateManyWithoutUserInput
    cruiseFollowing?: CruiseUpdateManyWithoutFollowersInput
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Cruise?: CruiseUpdateManyWithoutCreatorInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateWithoutFollowersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutCreatorInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateManyWithoutFollowingInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
  }

  export type UserUpdateWithoutFollowingInput = {
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    followers?: UserUpdateManyWithoutFollowingInput
    posts?: PostUpdateManyWithoutUserInput
    cruises?: CruiseUpdateManyWithoutUserInput
    comment?: CommentUpdateManyWithoutUserInput
    challenges?: ChallengeUpdateManyWithoutUserInput
    cruiseFollowing?: CruiseUpdateManyWithoutFollowersInput
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Cruise?: CruiseUpdateManyWithoutCreatorInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutCreatorInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateManyWithoutFollowersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
  }

  export type PostUpdateWithoutUserInput = {
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    comments?: CommentUpdateManyWithoutPostInput
    cruises?: CruiseUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutPostInput
    cruises?: CruiseUncheckedUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
  }

  export type CruiseUpdateWithoutUserInput = {
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    creator?: UserUpdateOneRequiredWithoutCruiseInput
    followers?: UserUpdateManyWithoutCruiseFollowingInput
    Post?: PostUpdateOneWithoutCruisesInput
    comments?: CommentUpdateManyWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateManyWithoutCruisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
  }

  export type CommentUpdateWithoutUserInput = {
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCommentInput
    Post?: PostUpdateOneWithoutCommentsInput
    challenge?: ChallengeUpdateOneWithoutCommentsInput
    cruise?: CruiseUpdateOneWithoutCommentsInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    cruiseId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
  }

  export type CommentUncheckedUpdateManyWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    cruiseId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
  }

  export type ChallengeUpdateWithoutUserInput = {
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    reaction?: InputJsonValue
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
    creator?: UserUpdateOneRequiredWithoutChallengeInput
    followers?: UserUpdateManyWithoutChallengeFollowingInput
    comments?: CommentUpdateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    reaction?: InputJsonValue
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedUpdateManyWithoutChallengesInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    reaction?: InputJsonValue
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
  }

  export type CruiseUpdateWithoutFollowersInput = {
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    creator?: UserUpdateOneRequiredWithoutCruiseInput
    User?: UserUpdateOneWithoutCruisesInput
    Post?: PostUpdateOneWithoutCruisesInput
    comments?: CommentUpdateManyWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateManyWithoutCruiseFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
  }

  export type ChallengeUpdateWithoutFollowersInput = {
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    reaction?: InputJsonValue
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
    creator?: UserUpdateOneRequiredWithoutChallengeInput
    User?: UserUpdateOneWithoutChallengesInput
    comments?: CommentUpdateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    reaction?: InputJsonValue
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedUpdateManyWithoutChallengeFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    reaction?: InputJsonValue
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
  }

  export type CruiseUpdateWithoutCreatorInput = {
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    followers?: UserUpdateManyWithoutCruiseFollowingInput
    User?: UserUpdateOneWithoutCruisesInput
    Post?: PostUpdateOneWithoutCruisesInput
    comments?: CommentUpdateManyWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateManyWithoutCruiseInput = {
    id?: IntFieldUpdateOperationsInput | number
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
  }

  export type ChallengeUpdateWithoutCreatorInput = {
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    reaction?: InputJsonValue
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
    followers?: UserUpdateManyWithoutChallengeFollowingInput
    User?: UserUpdateOneWithoutChallengesInput
    comments?: CommentUpdateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    reaction?: InputJsonValue
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedUpdateManyWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue
    reaction?: InputJsonValue
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
  }

  export type CommentUpdateWithoutPostInput = {
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCommentInput
    challenge?: ChallengeUpdateOneWithoutCommentsInput
    cruise?: CruiseUpdateOneWithoutCommentsInput
    User?: UserUpdateOneWithoutCommentInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    cruiseId?: NullableIntFieldUpdateOperationsInput | number | null
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
  }

  export type CommentUncheckedUpdateManyWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    cruiseId?: NullableIntFieldUpdateOperationsInput | number | null
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
  }

  export type CruiseUpdateWithoutPostInput = {
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    creator?: UserUpdateOneRequiredWithoutCruiseInput
    followers?: UserUpdateManyWithoutCruiseFollowingInput
    User?: UserUpdateOneWithoutCruisesInput
    comments?: CommentUpdateManyWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    attachmentMeta?: InputJsonValue
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutCruiseInput
  }

  export type UserUpdateWithoutCruiseFollowingInput = {
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    following?: UserUpdateManyWithoutFollowersInput
    followers?: UserUpdateManyWithoutFollowingInput
    posts?: PostUpdateManyWithoutUserInput
    cruises?: CruiseUpdateManyWithoutUserInput
    comment?: CommentUpdateManyWithoutUserInput
    challenges?: ChallengeUpdateManyWithoutUserInput
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Cruise?: CruiseUpdateManyWithoutCreatorInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateWithoutCruiseFollowingInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutCreatorInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutCreatorInput
  }

  export type CommentUpdateWithoutCruiseInput = {
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCommentInput
    Post?: PostUpdateOneWithoutCommentsInput
    challenge?: ChallengeUpdateOneWithoutCommentsInput
    User?: UserUpdateOneWithoutCommentInput
  }

  export type CommentUncheckedUpdateWithoutCruiseInput = {
    id?: IntFieldUpdateOperationsInput | number
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
  }

  export type UserUpdateWithoutChallengeFollowingInput = {
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    following?: UserUpdateManyWithoutFollowersInput
    followers?: UserUpdateManyWithoutFollowingInput
    posts?: PostUpdateManyWithoutUserInput
    cruises?: CruiseUpdateManyWithoutUserInput
    comment?: CommentUpdateManyWithoutUserInput
    challenges?: ChallengeUpdateManyWithoutUserInput
    cruiseFollowing?: CruiseUpdateManyWithoutFollowersInput
    Cruise?: CruiseUpdateManyWithoutCreatorInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateWithoutChallengeFollowingInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutCreatorInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutCreatorInput
  }

  export type CommentUpdateWithoutChallengeInput = {
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCommentInput
    Post?: PostUpdateOneWithoutCommentsInput
    cruise?: CruiseUpdateOneWithoutCommentsInput
    User?: UserUpdateOneWithoutCommentInput
  }

  export type CommentUncheckedUpdateWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    cruiseId?: NullableIntFieldUpdateOperationsInput | number | null
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
  }



  /**
   * Batch Payload for updateMany & deleteMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}