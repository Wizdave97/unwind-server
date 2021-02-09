
/**
 * Client
**/

import * as runtime from './runtime';


/**
 * Model User
 */

export type User = {
  userId: number
  uid: string | null
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
  userId: number
  attachmentUrl: string
  attachmentType: AttahmentType
  content: string | null
  created: Date
  updated: Date
  reaction: Prisma.JsonValue | null
  location: Prisma.JsonValue | null
  hashtags: string[]
  cruiseId: number[]
  challengeId: number | null
}

/**
 * Model Cruise
 */

export type Cruise = {
  id: number
  slogan: string
  attachmentType: AttahmentType
  creatorId: number
  followers: number[]
  following: number[]
  created: Date
  updated: Date
}

/**
 * Model Comment
 */

export type Comment = {
  id: number
  postId: number
  comment: string
  userId: number
  created: Date
  updated: Date
}

/**
 * Model Challenge
 */

export type Challenge = {
  id: number
  challenge: string
  creatorId: number
  attachmentType: AttahmentType
  followers: number[]
  following: number[]
  start: Date
  end: Date
  created: Date
  updated: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const AttahmentType: {
  VIDEO: 'VIDEO',
  IMAGE: 'IMAGE'
};

export type AttahmentType = (typeof AttahmentType)[keyof typeof AttahmentType]


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
    cruise?: boolean | CruiseFindManyArgs
    comment?: boolean | CommentFindManyArgs
    challenge?: boolean | ChallengeFindManyArgs
  }

  export type UserInclude = {
    following?: boolean | UserFindManyArgs
    followers?: boolean | UserFindManyArgs
    posts?: boolean | PostFindManyArgs
    cruise?: boolean | CruiseFindManyArgs
    comment?: boolean | CommentFindManyArgs
    challenge?: boolean | ChallengeFindManyArgs
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
        P extends 'cruise'
        ? Array < CruiseGetPayload<S['include'][P]>>  :
        P extends 'comment'
        ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'challenge'
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
        P extends 'cruise'
        ? Array < CruiseGetPayload<S['select'][P]>>  :
        P extends 'comment'
        ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'challenge'
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

    cruise<T extends CruiseFindManyArgs = {}>(args?: Subset<T, CruiseFindManyArgs>): CheckSelect<T, Promise<Array<Cruise>>, Promise<Array<CruiseGetPayload<T>>>>;

    comment<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, Promise<Array<Comment>>, Promise<Array<CommentGetPayload<T>>>>;

    challenge<T extends ChallengeFindManyArgs = {}>(args?: Subset<T, ChallengeFindManyArgs>): CheckSelect<T, Promise<Array<Challenge>>, Promise<Array<ChallengeGetPayload<T>>>>;

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
    userId: number
    cruiseId: number | null
    challengeId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number
    userId: number
    cruiseId: number[]
    challengeId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number
    userId: number
    attachmentUrl: string | null
    attachmentType: AttahmentType | null
    content: string | null
    created: Date | null
    updated: Date | null
    reaction: JsonValue | null
    location: JsonValue | null
    challengeId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number
    userId: number
    attachmentUrl: string | null
    attachmentType: AttahmentType | null
    content: string | null
    created: Date | null
    updated: Date | null
    reaction: JsonValue | null
    location: JsonValue | null
    challengeId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    userId: number
    attachmentUrl: number | null
    attachmentType: number | null
    content: number | null
    created: number | null
    updated: number | null
    reaction: number | null
    location: number | null
    hashtags: number | null
    cruiseId: number | null
    challengeId: number | null
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    userId?: true
    cruiseId?: true
    challengeId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    userId?: true
    cruiseId?: true
    challengeId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    userId?: true
    attachmentUrl?: true
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
    attachmentType?: true
    content?: true
    created?: true
    updated?: true
    reaction?: true
    location?: true
    hashtags?: true
    cruiseId?: true
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
    attachmentType?: boolean
    content?: boolean
    created?: boolean
    updated?: boolean
    reaction?: boolean
    location?: boolean
    hashtags?: boolean
    comments?: boolean | CommentFindManyArgs
    cruiseId?: boolean
    challengeId?: boolean
  }

  export type PostInclude = {
    user?: boolean | UserArgs
    comments?: boolean | CommentFindManyArgs
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
        ? Array < CommentGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Post ?Post [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> :
        P extends 'comments'
        ? Array < CommentGetPayload<S['select'][P]>>  : never
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
    creatorId: number
    followers: number | null
    following: number | null
  }

  export type CruiseSumAggregateOutputType = {
    id: number
    creatorId: number
    followers: number[]
    following: number[]
  }

  export type CruiseMinAggregateOutputType = {
    id: number
    slogan: string | null
    attachmentType: AttahmentType | null
    creatorId: number
    created: Date | null
    updated: Date | null
  }

  export type CruiseMaxAggregateOutputType = {
    id: number
    slogan: string | null
    attachmentType: AttahmentType | null
    creatorId: number
    created: Date | null
    updated: Date | null
  }

  export type CruiseCountAggregateOutputType = {
    id: number
    slogan: number | null
    attachmentType: number | null
    creatorId: number
    followers: number | null
    following: number | null
    created: number | null
    updated: number | null
    _all: number
  }


  export type CruiseAvgAggregateInputType = {
    id?: true
    creatorId?: true
    followers?: true
    following?: true
  }

  export type CruiseSumAggregateInputType = {
    id?: true
    creatorId?: true
    followers?: true
    following?: true
  }

  export type CruiseMinAggregateInputType = {
    id?: true
    slogan?: true
    attachmentType?: true
    creatorId?: true
    created?: true
    updated?: true
  }

  export type CruiseMaxAggregateInputType = {
    id?: true
    slogan?: true
    attachmentType?: true
    creatorId?: true
    created?: true
    updated?: true
  }

  export type CruiseCountAggregateInputType = {
    id?: true
    slogan?: true
    attachmentType?: true
    creatorId?: true
    followers?: true
    following?: true
    created?: true
    updated?: true
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
    creatorId?: boolean
    followers?: boolean
    following?: boolean
    created?: boolean
    updated?: boolean
  }

  export type CruiseInclude = {
    creator?: boolean | UserArgs
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
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Cruise ?Cruise [P]
  : 
          P extends 'creator'
        ? UserGetPayload<S['select'][P]> : never
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
    postId: number
    userId: number
  }

  export type CommentSumAggregateOutputType = {
    id: number
    postId: number
    userId: number
  }

  export type CommentMinAggregateOutputType = {
    id: number
    postId: number
    comment: string | null
    userId: number
    created: Date | null
    updated: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number
    postId: number
    comment: string | null
    userId: number
    created: Date | null
    updated: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    postId: number
    comment: number | null
    userId: number
    created: number | null
    updated: number | null
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    postId?: true
    comment?: true
    userId?: true
    created?: true
    updated?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    postId?: true
    comment?: true
    userId?: true
    created?: true
    updated?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    postId?: true
    comment?: true
    userId?: true
    created?: true
    updated?: true
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
    postId?: boolean
    post?: boolean | PostArgs
    comment?: boolean
    userId?: boolean
    user?: boolean | UserArgs
    created?: boolean
    updated?: boolean
  }

  export type CommentInclude = {
    post?: boolean | PostArgs
    user?: boolean | UserArgs
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
          P extends 'post'
        ? PostGetPayload<S['include'][P]> :
        P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Comment ?Comment [P]
  : 
          P extends 'post'
        ? PostGetPayload<S['select'][P]> :
        P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
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

    post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, Prisma__PostClient<Post | null>, Prisma__PostClient<PostGetPayload<T> | null>>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>;

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
    creatorId: number
    followers: number | null
    following: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    id: number
    creatorId: number
    followers: number[]
    following: number[]
  }

  export type ChallengeMinAggregateOutputType = {
    id: number
    challenge: string | null
    creatorId: number
    attachmentType: AttahmentType | null
    start: Date | null
    end: Date | null
    created: Date | null
    updated: Date | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: number
    challenge: string | null
    creatorId: number
    attachmentType: AttahmentType | null
    start: Date | null
    end: Date | null
    created: Date | null
    updated: Date | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    challenge: number | null
    creatorId: number
    attachmentType: number | null
    followers: number | null
    following: number | null
    start: number | null
    end: number | null
    created: number | null
    updated: number | null
    _all: number
  }


  export type ChallengeAvgAggregateInputType = {
    id?: true
    creatorId?: true
    followers?: true
    following?: true
  }

  export type ChallengeSumAggregateInputType = {
    id?: true
    creatorId?: true
    followers?: true
    following?: true
  }

  export type ChallengeMinAggregateInputType = {
    id?: true
    challenge?: true
    creatorId?: true
    attachmentType?: true
    start?: true
    end?: true
    created?: true
    updated?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    challenge?: true
    creatorId?: true
    attachmentType?: true
    start?: true
    end?: true
    created?: true
    updated?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    challenge?: true
    creatorId?: true
    attachmentType?: true
    followers?: true
    following?: true
    start?: true
    end?: true
    created?: true
    updated?: true
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
    followers?: boolean
    following?: boolean
    start?: boolean
    end?: boolean
    created?: boolean
    updated?: boolean
  }

  export type ChallengeInclude = {
    creator?: boolean | UserArgs
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
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Challenge ?Challenge [P]
  : 
          P extends 'creator'
        ? UserGetPayload<S['select'][P]> : never
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
    attachmentType: 'attachmentType',
    content: 'content',
    created: 'created',
    updated: 'updated',
    reaction: 'reaction',
    location: 'location',
    hashtags: 'hashtags',
    cruiseId: 'cruiseId',
    challengeId: 'challengeId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CruiseScalarFieldEnum: {
    id: 'id',
    slogan: 'slogan',
    attachmentType: 'attachmentType',
    creatorId: 'creatorId',
    followers: 'followers',
    following: 'following',
    created: 'created',
    updated: 'updated'
  };

  export type CruiseScalarFieldEnum = (typeof CruiseScalarFieldEnum)[keyof typeof CruiseScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    comment: 'comment',
    userId: 'userId',
    created: 'created',
    updated: 'updated'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
    id: 'id',
    challenge: 'challenge',
    creatorId: 'creatorId',
    attachmentType: 'attachmentType',
    followers: 'followers',
    following: 'following',
    start: 'start',
    end: 'end',
    created: 'created',
    updated: 'updated'
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
    uid?: StringNullableFilter | string | null
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
    cruise?: CruiseListRelationFilter
    comment?: CommentListRelationFilter
    challenge?: ChallengeListRelationFilter
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
    userId?: IntFilter | number
    attachmentUrl?: StringFilter | string
    attachmentType?: EnumAttahmentTypeFilter | AttahmentType
    content?: StringNullableFilter | string | null
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    reaction?: JsonNullableFilter
    location?: JsonNullableFilter
    hashtags?: StringNullableListFilter
    comments?: CommentListRelationFilter
    cruiseId?: IntNullableListFilter
    challengeId?: IntNullableFilter | number | null
  }

  export type PostOrderByInput = {
    id?: SortOrder
    userId?: SortOrder
    attachmentUrl?: SortOrder
    attachmentType?: SortOrder
    content?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    reaction?: SortOrder
    location?: SortOrder
    hashtags?: SortOrder
    cruiseId?: SortOrder
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
    attachmentType?: EnumAttahmentTypeFilter | AttahmentType
    creatorId?: IntFilter | number
    followers?: IntNullableListFilter
    following?: IntNullableListFilter
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
  }

  export type CruiseOrderByInput = {
    id?: SortOrder
    slogan?: SortOrder
    attachmentType?: SortOrder
    creatorId?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type CruiseWhereUniqueInput = {
    id?: number
  }

  export type CommentWhereInput = {
    AND?: Enumerable<CommentWhereInput>
    OR?: Enumerable<CommentWhereInput>
    NOT?: Enumerable<CommentWhereInput>
    id?: IntFilter | number
    postId?: IntFilter | number
    post?: XOR<PostWhereInput, PostRelationFilter>
    comment?: StringFilter | string
    userId?: IntFilter | number
    user?: XOR<UserWhereInput, UserRelationFilter>
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
  }

  export type CommentOrderByInput = {
    id?: SortOrder
    postId?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    created?: SortOrder
    updated?: SortOrder
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
    creatorId?: IntFilter | number
    attachmentType?: EnumAttahmentTypeFilter | AttahmentType
    followers?: IntNullableListFilter
    following?: IntNullableListFilter
    start?: DateTimeFilter | Date | string
    end?: DateTimeFilter | Date | string
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
  }

  export type ChallengeOrderByInput = {
    id?: SortOrder
    challenge?: SortOrder
    creatorId?: SortOrder
    attachmentType?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    start?: SortOrder
    end?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type ChallengeWhereUniqueInput = {
    id?: number
  }

  export type UserCreateInput = {
    uid?: string | null
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
    cruise?: CruiseCreateManyWithoutCreatorInput
    comment?: CommentCreateManyWithoutUserInput
    challenge?: ChallengeCreateManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    uid?: string | null
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateManyWithoutUserInput
    cruise?: CruiseUncheckedCreateManyWithoutCreatorInput
    comment?: CommentUncheckedCreateManyWithoutUserInput
    challenge?: ChallengeUncheckedCreateManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    uid?: NullableStringFieldUpdateOperationsInput | string | null
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
    cruise?: CruiseUpdateManyWithoutCreatorInput
    comment?: CommentUpdateManyWithoutUserInput
    challenge?: ChallengeUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruise?: CruiseUncheckedUpdateManyWithoutCreatorInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenge?: ChallengeUncheckedUpdateManyWithoutCreatorInput
  }

  export type UserUpdateManyMutationInput = {
    uid?: NullableStringFieldUpdateOperationsInput | string | null
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
    uid?: NullableStringFieldUpdateOperationsInput | string | null
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
    attachmentType: AttahmentType
    content?: string | null
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    cruiseId?: PostCreatecruiseIdInput | Enumerable<number>
    user: UserCreateOneWithoutPostsInput
    comments?: CommentCreateManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    userId: number
    attachmentUrl: string
    attachmentType: AttahmentType
    content?: string | null
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    cruiseId?: PostCreatecruiseIdInput | Enumerable<number>
    comments?: CommentUncheckedCreateManyWithoutPostInput
  }

  export type PostUpdateInput = {
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    cruiseId?: PostUpdatecruiseIdInput | Enumerable<number>
    user?: UserUpdateOneRequiredWithoutPostsInput
    comments?: CommentUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    cruiseId?: PostUpdatecruiseIdInput | Enumerable<number>
    comments?: CommentUncheckedUpdateManyWithoutPostInput
  }

  export type PostUpdateManyMutationInput = {
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    cruiseId?: PostUpdatecruiseIdInput | Enumerable<number>
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    cruiseId?: PostUpdatecruiseIdInput | Enumerable<number>
  }

  export type CruiseCreateInput = {
    slogan: string
    attachmentType: AttahmentType
    created?: Date | string
    updated?: Date | string
    followers?: CruiseCreatefollowersInput | Enumerable<number>
    following?: CruiseCreatefollowingInput | Enumerable<number>
    creator: UserCreateOneWithoutCruiseInput
  }

  export type CruiseUncheckedCreateInput = {
    id?: number
    slogan: string
    attachmentType: AttahmentType
    creatorId: number
    created?: Date | string
    updated?: Date | string
    followers?: CruiseCreatefollowersInput | Enumerable<number>
    following?: CruiseCreatefollowingInput | Enumerable<number>
  }

  export type CruiseUpdateInput = {
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: CruiseUpdatefollowersInput | Enumerable<number>
    following?: CruiseUpdatefollowingInput | Enumerable<number>
    creator?: UserUpdateOneRequiredWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    creatorId?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: CruiseUpdatefollowersInput | Enumerable<number>
    following?: CruiseUpdatefollowingInput | Enumerable<number>
  }

  export type CruiseUpdateManyMutationInput = {
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: CruiseUpdatefollowersInput | Enumerable<number>
    following?: CruiseUpdatefollowingInput | Enumerable<number>
  }

  export type CruiseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    creatorId?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: CruiseUpdatefollowersInput | Enumerable<number>
    following?: CruiseUpdatefollowingInput | Enumerable<number>
  }

  export type CommentCreateInput = {
    comment: string
    created?: Date | string
    updated?: Date | string
    post: PostCreateOneWithoutCommentsInput
    user: UserCreateOneWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    postId: number
    comment: string
    userId: number
    created?: Date | string
    updated?: Date | string
  }

  export type CommentUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsInput
    user?: UserUpdateOneRequiredWithoutCommentInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeCreateInput = {
    challenge: string
    attachmentType: AttahmentType
    start: Date | string
    end: Date | string
    created?: Date | string
    updated?: Date | string
    followers?: ChallengeCreatefollowersInput | Enumerable<number>
    following?: ChallengeCreatefollowingInput | Enumerable<number>
    creator: UserCreateOneWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: number
    challenge: string
    creatorId: number
    attachmentType: AttahmentType
    start: Date | string
    end: Date | string
    created?: Date | string
    updated?: Date | string
    followers?: ChallengeCreatefollowersInput | Enumerable<number>
    following?: ChallengeCreatefollowingInput | Enumerable<number>
  }

  export type ChallengeUpdateInput = {
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: ChallengeUpdatefollowersInput | Enumerable<number>
    following?: ChallengeUpdatefollowingInput | Enumerable<number>
    creator?: UserUpdateOneRequiredWithoutChallengeInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    creatorId?: IntFieldUpdateOperationsInput | number
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: ChallengeUpdatefollowersInput | Enumerable<number>
    following?: ChallengeUpdatefollowingInput | Enumerable<number>
  }

  export type ChallengeUpdateManyMutationInput = {
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: ChallengeUpdatefollowersInput | Enumerable<number>
    following?: ChallengeUpdatefollowingInput | Enumerable<number>
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    creatorId?: IntFieldUpdateOperationsInput | number
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: ChallengeUpdatefollowersInput | Enumerable<number>
    following?: ChallengeUpdatefollowingInput | Enumerable<number>
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

  export type EnumAttahmentTypeFilter = {
    equals?: AttahmentType
    in?: Enumerable<AttahmentType>
    notIn?: Enumerable<AttahmentType>
    not?: NestedEnumAttahmentTypeFilter | AttahmentType
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type IntNullableListFilter = {
    equals?: Enumerable<number> | null
    has?: number | null
    hasEvery?: Enumerable<number>
    hasSome?: Enumerable<number>
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
    is?: PostWhereInput
    isNot?: PostWhereInput
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

  export type CruiseCreateManyWithoutCreatorInput = {
    create?: XOR<Enumerable<CruiseUncheckedCreateWithoutCreatorInput>, Enumerable<CruiseCreateWithoutCreatorInput>>
    connect?: Enumerable<CruiseWhereUniqueInput>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutcreatorInput>
  }

  export type CommentCreateManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutUserInput>, Enumerable<CommentCreateWithoutUserInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutuserInput>
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

  export type CruiseUncheckedCreateManyWithoutCreatorInput = {
    create?: XOR<Enumerable<CruiseUncheckedCreateWithoutCreatorInput>, Enumerable<CruiseCreateWithoutCreatorInput>>
    connect?: Enumerable<CruiseWhereUniqueInput>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutcreatorInput>
  }

  export type CommentUncheckedCreateManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutUserInput>, Enumerable<CommentCreateWithoutUserInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutuserInput>
  }

  export type ChallengeUncheckedCreateManyWithoutCreatorInput = {
    create?: XOR<Enumerable<ChallengeUncheckedCreateWithoutCreatorInput>, Enumerable<ChallengeCreateWithoutCreatorInput>>
    connect?: Enumerable<ChallengeWhereUniqueInput>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutcreatorInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutuserInput>
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
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutuserInput>
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

  export type PostCreatecruiseIdInput = {
    set: Enumerable<number>
  }

  export type UserCreateOneWithoutPostsInput = {
    create?: XOR<UserUncheckedCreateWithoutPostsInput, UserCreateWithoutPostsInput>
    connect?: UserWhereUniqueInput
    connectOrCreate?: UserCreateOrConnectWithoutpostsInput
  }

  export type CommentCreateManyWithoutPostInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutPostInput>, Enumerable<CommentCreateWithoutPostInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutpostInput>
  }

  export type CommentUncheckedCreateManyWithoutPostInput = {
    create?: XOR<Enumerable<CommentUncheckedCreateWithoutPostInput>, Enumerable<CommentCreateWithoutPostInput>>
    connect?: Enumerable<CommentWhereUniqueInput>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutpostInput>
  }

  export type EnumAttahmentTypeFieldUpdateOperationsInput = {
    set?: AttahmentType
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

  export type PostUpdatecruiseIdInput = {
    set: Enumerable<number>
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
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutpostInput>
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
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutpostInput>
  }

  export type CruiseCreatefollowersInput = {
    set: Enumerable<number>
  }

  export type CruiseCreatefollowingInput = {
    set: Enumerable<number>
  }

  export type UserCreateOneWithoutCruiseInput = {
    create?: XOR<UserUncheckedCreateWithoutCruiseInput, UserCreateWithoutCruiseInput>
    connect?: UserWhereUniqueInput
    connectOrCreate?: UserCreateOrConnectWithoutcruiseInput
  }

  export type CruiseUpdatefollowersInput = {
    set: Enumerable<number>
  }

  export type CruiseUpdatefollowingInput = {
    set: Enumerable<number>
  }

  export type UserUpdateOneRequiredWithoutCruiseInput = {
    create?: XOR<UserUncheckedCreateWithoutCruiseInput, UserCreateWithoutCruiseInput>
    connect?: UserWhereUniqueInput
    update?: XOR<UserUncheckedUpdateWithoutCruiseInput, UserUpdateWithoutCruiseInput>
    upsert?: UserUpsertWithoutCruiseInput
    connectOrCreate?: UserCreateOrConnectWithoutcruiseInput
  }

  export type PostCreateOneWithoutCommentsInput = {
    create?: XOR<PostUncheckedCreateWithoutCommentsInput, PostCreateWithoutCommentsInput>
    connect?: PostWhereUniqueInput
    connectOrCreate?: PostCreateOrConnectWithoutcommentsInput
  }

  export type UserCreateOneWithoutCommentInput = {
    create?: XOR<UserUncheckedCreateWithoutCommentInput, UserCreateWithoutCommentInput>
    connect?: UserWhereUniqueInput
    connectOrCreate?: UserCreateOrConnectWithoutcommentInput
  }

  export type PostUpdateOneRequiredWithoutCommentsInput = {
    create?: XOR<PostUncheckedCreateWithoutCommentsInput, PostCreateWithoutCommentsInput>
    connect?: PostWhereUniqueInput
    update?: XOR<PostUncheckedUpdateWithoutCommentsInput, PostUpdateWithoutCommentsInput>
    upsert?: PostUpsertWithoutCommentsInput
    connectOrCreate?: PostCreateOrConnectWithoutcommentsInput
  }

  export type UserUpdateOneRequiredWithoutCommentInput = {
    create?: XOR<UserUncheckedCreateWithoutCommentInput, UserCreateWithoutCommentInput>
    connect?: UserWhereUniqueInput
    update?: XOR<UserUncheckedUpdateWithoutCommentInput, UserUpdateWithoutCommentInput>
    upsert?: UserUpsertWithoutCommentInput
    connectOrCreate?: UserCreateOrConnectWithoutcommentInput
  }

  export type ChallengeCreatefollowersInput = {
    set: Enumerable<number>
  }

  export type ChallengeCreatefollowingInput = {
    set: Enumerable<number>
  }

  export type UserCreateOneWithoutChallengeInput = {
    create?: XOR<UserUncheckedCreateWithoutChallengeInput, UserCreateWithoutChallengeInput>
    connect?: UserWhereUniqueInput
    connectOrCreate?: UserCreateOrConnectWithoutchallengeInput
  }

  export type ChallengeUpdatefollowersInput = {
    set: Enumerable<number>
  }

  export type ChallengeUpdatefollowingInput = {
    set: Enumerable<number>
  }

  export type UserUpdateOneRequiredWithoutChallengeInput = {
    create?: XOR<UserUncheckedCreateWithoutChallengeInput, UserCreateWithoutChallengeInput>
    connect?: UserWhereUniqueInput
    update?: XOR<UserUncheckedUpdateWithoutChallengeInput, UserUpdateWithoutChallengeInput>
    upsert?: UserUpsertWithoutChallengeInput
    connectOrCreate?: UserCreateOrConnectWithoutchallengeInput
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

  export type NestedEnumAttahmentTypeFilter = {
    equals?: AttahmentType
    in?: Enumerable<AttahmentType>
    notIn?: Enumerable<AttahmentType>
    not?: NestedEnumAttahmentTypeFilter | AttahmentType
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

  export type UserCreateWithoutFollowersInput = {
    uid?: string | null
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
    cruise?: CruiseCreateManyWithoutCreatorInput
    comment?: CommentCreateManyWithoutUserInput
    challenge?: ChallengeCreateManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutFollowersInput = {
    userId?: number
    uid?: string | null
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateManyWithoutUserInput
    cruise?: CruiseUncheckedCreateManyWithoutCreatorInput
    comment?: CommentUncheckedCreateManyWithoutUserInput
    challenge?: ChallengeUncheckedCreateManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutfollowersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutFollowersInput, UserCreateWithoutFollowersInput>
  }

  export type UserCreateWithoutFollowingInput = {
    uid?: string | null
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
    cruise?: CruiseCreateManyWithoutCreatorInput
    comment?: CommentCreateManyWithoutUserInput
    challenge?: ChallengeCreateManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    userId?: number
    uid?: string | null
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateManyWithoutUserInput
    cruise?: CruiseUncheckedCreateManyWithoutCreatorInput
    comment?: CommentUncheckedCreateManyWithoutUserInput
    challenge?: ChallengeUncheckedCreateManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutfollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutFollowingInput, UserCreateWithoutFollowingInput>
  }

  export type PostCreateWithoutUserInput = {
    attachmentUrl: string
    attachmentType: AttahmentType
    content?: string | null
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    cruiseId?: PostCreatecruiseIdInput | Enumerable<number>
    comments?: CommentCreateManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    attachmentUrl: string
    attachmentType: AttahmentType
    content?: string | null
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    cruiseId?: PostCreatecruiseIdInput | Enumerable<number>
    comments?: CommentUncheckedCreateManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutuserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostUncheckedCreateWithoutUserInput, PostCreateWithoutUserInput>
  }

  export type CruiseCreateWithoutCreatorInput = {
    slogan: string
    attachmentType: AttahmentType
    created?: Date | string
    updated?: Date | string
    followers?: CruiseCreatefollowersInput | Enumerable<number>
    following?: CruiseCreatefollowingInput | Enumerable<number>
  }

  export type CruiseUncheckedCreateWithoutCreatorInput = {
    id?: number
    slogan: string
    attachmentType: AttahmentType
    created?: Date | string
    updated?: Date | string
    followers?: CruiseCreatefollowersInput | Enumerable<number>
    following?: CruiseCreatefollowingInput | Enumerable<number>
  }

  export type CruiseCreateOrConnectWithoutcreatorInput = {
    where: CruiseWhereUniqueInput
    create: XOR<CruiseUncheckedCreateWithoutCreatorInput, CruiseCreateWithoutCreatorInput>
  }

  export type CommentCreateWithoutUserInput = {
    comment: string
    created?: Date | string
    updated?: Date | string
    post: PostCreateOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    postId: number
    comment: string
    created?: Date | string
    updated?: Date | string
  }

  export type CommentCreateOrConnectWithoutuserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentUncheckedCreateWithoutUserInput, CommentCreateWithoutUserInput>
  }

  export type ChallengeCreateWithoutCreatorInput = {
    challenge: string
    attachmentType: AttahmentType
    start: Date | string
    end: Date | string
    created?: Date | string
    updated?: Date | string
    followers?: ChallengeCreatefollowersInput | Enumerable<number>
    following?: ChallengeCreatefollowingInput | Enumerable<number>
  }

  export type ChallengeUncheckedCreateWithoutCreatorInput = {
    id?: number
    challenge: string
    attachmentType: AttahmentType
    start: Date | string
    end: Date | string
    created?: Date | string
    updated?: Date | string
    followers?: ChallengeCreatefollowersInput | Enumerable<number>
    following?: ChallengeCreatefollowingInput | Enumerable<number>
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
    uid?: StringNullableFilter | string | null
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
    userId?: IntFilter | number
    attachmentUrl?: StringFilter | string
    attachmentType?: EnumAttahmentTypeFilter | AttahmentType
    content?: StringNullableFilter | string | null
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    reaction?: JsonNullableFilter
    location?: JsonNullableFilter
    hashtags?: StringNullableListFilter
    cruiseId?: IntNullableListFilter
    challengeId?: IntNullableFilter | number | null
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUncheckedUpdateWithoutUserInput, PostUpdateWithoutUserInput>
    create: XOR<PostUncheckedCreateWithoutUserInput, PostCreateWithoutUserInput>
  }

  export type CruiseUpdateWithWhereUniqueWithoutCreatorInput = {
    where: CruiseWhereUniqueInput
    data: XOR<CruiseUncheckedUpdateWithoutCreatorInput, CruiseUpdateWithoutCreatorInput>
  }

  export type CruiseUpdateManyWithWhereWithoutCreatorInput = {
    where: CruiseScalarWhereInput
    data: XOR<CruiseUncheckedUpdateManyWithoutCruiseInput, CruiseUpdateManyMutationInput>
  }

  export type CruiseScalarWhereInput = {
    AND?: Enumerable<CruiseScalarWhereInput>
    OR?: Enumerable<CruiseScalarWhereInput>
    NOT?: Enumerable<CruiseScalarWhereInput>
    id?: IntFilter | number
    slogan?: StringFilter | string
    attachmentType?: EnumAttahmentTypeFilter | AttahmentType
    creatorId?: IntFilter | number
    followers?: IntNullableListFilter
    following?: IntNullableListFilter
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
  }

  export type CruiseUpsertWithWhereUniqueWithoutCreatorInput = {
    where: CruiseWhereUniqueInput
    update: XOR<CruiseUncheckedUpdateWithoutCreatorInput, CruiseUpdateWithoutCreatorInput>
    create: XOR<CruiseUncheckedCreateWithoutCreatorInput, CruiseCreateWithoutCreatorInput>
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
    postId?: IntFilter | number
    comment?: StringFilter | string
    userId?: IntFilter | number
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUncheckedUpdateWithoutUserInput, CommentUpdateWithoutUserInput>
    create: XOR<CommentUncheckedCreateWithoutUserInput, CommentCreateWithoutUserInput>
  }

  export type ChallengeUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ChallengeWhereUniqueInput
    data: XOR<ChallengeUncheckedUpdateWithoutCreatorInput, ChallengeUpdateWithoutCreatorInput>
  }

  export type ChallengeUpdateManyWithWhereWithoutCreatorInput = {
    where: ChallengeScalarWhereInput
    data: XOR<ChallengeUncheckedUpdateManyWithoutChallengeInput, ChallengeUpdateManyMutationInput>
  }

  export type ChallengeScalarWhereInput = {
    AND?: Enumerable<ChallengeScalarWhereInput>
    OR?: Enumerable<ChallengeScalarWhereInput>
    NOT?: Enumerable<ChallengeScalarWhereInput>
    id?: IntFilter | number
    challenge?: StringFilter | string
    creatorId?: IntFilter | number
    attachmentType?: EnumAttahmentTypeFilter | AttahmentType
    followers?: IntNullableListFilter
    following?: IntNullableListFilter
    start?: DateTimeFilter | Date | string
    end?: DateTimeFilter | Date | string
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
  }

  export type ChallengeUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ChallengeWhereUniqueInput
    update: XOR<ChallengeUncheckedUpdateWithoutCreatorInput, ChallengeUpdateWithoutCreatorInput>
    create: XOR<ChallengeUncheckedCreateWithoutCreatorInput, ChallengeCreateWithoutCreatorInput>
  }

  export type UserCreateWithoutPostsInput = {
    uid?: string | null
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
    cruise?: CruiseCreateManyWithoutCreatorInput
    comment?: CommentCreateManyWithoutUserInput
    challenge?: ChallengeCreateManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    userId?: number
    uid?: string | null
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    cruise?: CruiseUncheckedCreateManyWithoutCreatorInput
    comment?: CommentUncheckedCreateManyWithoutUserInput
    challenge?: ChallengeUncheckedCreateManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutpostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutPostsInput, UserCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    comment: string
    created?: Date | string
    updated?: Date | string
    user: UserCreateOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: number
    comment: string
    userId: number
    created?: Date | string
    updated?: Date | string
  }

  export type CommentCreateOrConnectWithoutpostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentUncheckedCreateWithoutPostInput, CommentCreateWithoutPostInput>
  }

  export type UserUpdateWithoutPostsInput = {
    uid?: NullableStringFieldUpdateOperationsInput | string | null
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
    cruise?: CruiseUpdateManyWithoutCreatorInput
    comment?: CommentUpdateManyWithoutUserInput
    challenge?: ChallengeUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    cruise?: CruiseUncheckedUpdateManyWithoutCreatorInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenge?: ChallengeUncheckedUpdateManyWithoutCreatorInput
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

  export type UserCreateWithoutCruiseInput = {
    uid?: string | null
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
    challenge?: ChallengeCreateManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCruiseInput = {
    userId?: number
    uid?: string | null
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
    challenge?: ChallengeUncheckedCreateManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutcruiseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutCruiseInput, UserCreateWithoutCruiseInput>
  }

  export type UserUpdateWithoutCruiseInput = {
    uid?: NullableStringFieldUpdateOperationsInput | string | null
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
    challenge?: ChallengeUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateWithoutCruiseInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: NullableStringFieldUpdateOperationsInput | string | null
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
    challenge?: ChallengeUncheckedUpdateManyWithoutCreatorInput
  }

  export type UserUpsertWithoutCruiseInput = {
    update: XOR<UserUncheckedUpdateWithoutCruiseInput, UserUpdateWithoutCruiseInput>
    create: XOR<UserUncheckedCreateWithoutCruiseInput, UserCreateWithoutCruiseInput>
  }

  export type PostCreateWithoutCommentsInput = {
    attachmentUrl: string
    attachmentType: AttahmentType
    content?: string | null
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    cruiseId?: PostCreatecruiseIdInput | Enumerable<number>
    user: UserCreateOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: number
    userId: number
    attachmentUrl: string
    attachmentType: AttahmentType
    content?: string | null
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    cruiseId?: PostCreatecruiseIdInput | Enumerable<number>
  }

  export type PostCreateOrConnectWithoutcommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostUncheckedCreateWithoutCommentsInput, PostCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentInput = {
    uid?: string | null
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
    cruise?: CruiseCreateManyWithoutCreatorInput
    challenge?: ChallengeCreateManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCommentInput = {
    userId?: number
    uid?: string | null
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateManyWithoutUserInput
    cruise?: CruiseUncheckedCreateManyWithoutCreatorInput
    challenge?: ChallengeUncheckedCreateManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutcommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutCommentInput, UserCreateWithoutCommentInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    cruiseId?: PostUpdatecruiseIdInput | Enumerable<number>
    user?: UserUpdateOneRequiredWithoutPostsInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    cruiseId?: PostUpdatecruiseIdInput | Enumerable<number>
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUncheckedUpdateWithoutCommentsInput, PostUpdateWithoutCommentsInput>
    create: XOR<PostUncheckedCreateWithoutCommentsInput, PostCreateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentInput = {
    uid?: NullableStringFieldUpdateOperationsInput | string | null
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
    cruise?: CruiseUpdateManyWithoutCreatorInput
    challenge?: ChallengeUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateWithoutCommentInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruise?: CruiseUncheckedUpdateManyWithoutCreatorInput
    challenge?: ChallengeUncheckedUpdateManyWithoutCreatorInput
  }

  export type UserUpsertWithoutCommentInput = {
    update: XOR<UserUncheckedUpdateWithoutCommentInput, UserUpdateWithoutCommentInput>
    create: XOR<UserUncheckedCreateWithoutCommentInput, UserCreateWithoutCommentInput>
  }

  export type UserCreateWithoutChallengeInput = {
    uid?: string | null
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
    cruise?: CruiseCreateManyWithoutCreatorInput
    comment?: CommentCreateManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChallengeInput = {
    userId?: number
    uid?: string | null
    firstName: string
    lastName: string
    userName?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateManyWithoutUserInput
    cruise?: CruiseUncheckedCreateManyWithoutCreatorInput
    comment?: CommentUncheckedCreateManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutchallengeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutChallengeInput, UserCreateWithoutChallengeInput>
  }

  export type UserUpdateWithoutChallengeInput = {
    uid?: NullableStringFieldUpdateOperationsInput | string | null
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
    cruise?: CruiseUpdateManyWithoutCreatorInput
    comment?: CommentUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutChallengeInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruise?: CruiseUncheckedUpdateManyWithoutCreatorInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
  }

  export type UserUpsertWithoutChallengeInput = {
    update: XOR<UserUncheckedUpdateWithoutChallengeInput, UserUpdateWithoutChallengeInput>
    create: XOR<UserUncheckedCreateWithoutChallengeInput, UserCreateWithoutChallengeInput>
  }

  export type UserUpdateWithoutFollowersInput = {
    uid?: NullableStringFieldUpdateOperationsInput | string | null
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
    cruise?: CruiseUpdateManyWithoutCreatorInput
    comment?: CommentUpdateManyWithoutUserInput
    challenge?: ChallengeUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateWithoutFollowersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruise?: CruiseUncheckedUpdateManyWithoutCreatorInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenge?: ChallengeUncheckedUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateManyWithoutFollowingInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: NullableStringFieldUpdateOperationsInput | string | null
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
    uid?: NullableStringFieldUpdateOperationsInput | string | null
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
    cruise?: CruiseUpdateManyWithoutCreatorInput
    comment?: CommentUpdateManyWithoutUserInput
    challenge?: ChallengeUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruise?: CruiseUncheckedUpdateManyWithoutCreatorInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenge?: ChallengeUncheckedUpdateManyWithoutCreatorInput
  }

  export type UserUncheckedUpdateManyWithoutFollowersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: NullableStringFieldUpdateOperationsInput | string | null
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
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    cruiseId?: PostUpdatecruiseIdInput | Enumerable<number>
    comments?: CommentUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    cruiseId?: PostUpdatecruiseIdInput | Enumerable<number>
    comments?: CommentUncheckedUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    attachmentUrl?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    cruiseId?: PostUpdatecruiseIdInput | Enumerable<number>
  }

  export type CruiseUpdateWithoutCreatorInput = {
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: CruiseUpdatefollowersInput | Enumerable<number>
    following?: CruiseUpdatefollowingInput | Enumerable<number>
  }

  export type CruiseUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: CruiseUpdatefollowersInput | Enumerable<number>
    following?: CruiseUpdatefollowingInput | Enumerable<number>
  }

  export type CruiseUncheckedUpdateManyWithoutCruiseInput = {
    id?: IntFieldUpdateOperationsInput | number
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: CruiseUpdatefollowersInput | Enumerable<number>
    following?: CruiseUpdatefollowingInput | Enumerable<number>
  }

  export type CommentUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUpdateWithoutCreatorInput = {
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: ChallengeUpdatefollowersInput | Enumerable<number>
    following?: ChallengeUpdatefollowingInput | Enumerable<number>
  }

  export type ChallengeUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: ChallengeUpdatefollowersInput | Enumerable<number>
    following?: ChallengeUpdatefollowingInput | Enumerable<number>
  }

  export type ChallengeUncheckedUpdateManyWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumAttahmentTypeFieldUpdateOperationsInput | AttahmentType
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: ChallengeUpdatefollowersInput | Enumerable<number>
    following?: ChallengeUpdatefollowingInput | Enumerable<number>
  }

  export type CommentUpdateWithoutPostInput = {
    comment?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
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