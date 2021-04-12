
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 */

export type User = {
  userId: number
  uid: string
  cursor: string
  firstName: string
  lastName: string
  userName: string | null
  bio: string | null
  cruise: string | null
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
  cursor: string
  userId: string
  attachmentUrl: string | null
  attachmentMeta: Prisma.JsonValue | null
  attachmentType: AttachmentType | null
  content: string
  created: Date
  updated: Date
  location: Prisma.JsonValue | null
  hashtags: string[]
  likedBy: string[]
  likes: bigint
  origin: PostOrigin
  challengeId: number | null
}

/**
 * Model Comment
 */

export type Comment = {
  id: number
  cursor: string
  entityId: number
  entityType: EntityType
  comment: string
  attachmentMeta: Prisma.JsonValue | null
  attachmentType: AttachmentType | null
  attachmentUrl: string | null
  userId: string
  likedBy: string[]
  likes: bigint
  created: Date
  updated: Date
  postId: number | null
  challengeId: number | null
  userUserId: number | null
}

/**
 * Model Challenge
 */

export type Challenge = {
  id: number
  cursor: string
  challenge: string
  userId: string
  attachmentType: AttachmentType | null
  attachmentUrl: string | null
  attachmentMeta: Prisma.JsonValue | null
  hashtags: string[]
  likedBy: string[]
  likes: bigint
  start: Date | null
  end: Date | null
  created: Date
  updated: Date
  userUserId: number | null
}

/**
 * Model Peek
 */

export type Peek = {
  id: number
  userId: string
  expiresUTC: bigint | null
  active: boolean
  peeks: number
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


export const PostOrigin: {
  REGULAR: 'REGULAR',
  OGCHALLENGE: 'OGCHALLENGE'
};

export type PostOrigin = (typeof PostOrigin)[keyof typeof PostOrigin]


export const EntityType: {
  POST: 'POST',
  CHALLENGE: 'CHALLENGE',
  COMMENT: 'COMMENT'
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
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
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
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<GlobalReject>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<GlobalReject>;

  /**
   * `prisma.challenge`: Exposes CRUD operations for the **Challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.ChallengeDelegate<GlobalReject>;

  /**
   * `prisma.peek`: Exposes CRUD operations for the **Peek** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peeks
    * const peeks = await prisma.peek.findMany()
    * ```
    */
  get peek(): Prisma.PeekDelegate<GlobalReject>;
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
   * Prisma Client JS version: 2.19.0
   * Query Engine version: c1455d0b443d66b0d9db9bcb1bb9ee0d5bbc511d
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

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
    Comment: 'Comment',
    Challenge: 'Challenge',
    Peek: 'Peek'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
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
    | 'createMany'
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
    cursor: string | null
    firstName: string | null
    lastName: string | null
    userName: string | null
    bio: string | null
    cruise: string | null
    email: string | null
    imgUrl: string | null
    created: Date | null
    updated: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number
    uid: string | null
    cursor: string | null
    firstName: string | null
    lastName: string | null
    userName: string | null
    bio: string | null
    cruise: string | null
    email: string | null
    imgUrl: string | null
    created: Date | null
    updated: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    uid: number | null
    cursor: number | null
    firstName: number | null
    lastName: number | null
    userName: number | null
    bio: number | null
    cruise: number | null
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
    cursor?: true
    firstName?: true
    lastName?: true
    userName?: true
    bio?: true
    cruise?: true
    email?: true
    imgUrl?: true
    created?: true
    updated?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    uid?: true
    cursor?: true
    firstName?: true
    lastName?: true
    userName?: true
    bio?: true
    cruise?: true
    email?: true
    imgUrl?: true
    created?: true
    updated?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    uid?: true
    cursor?: true
    firstName?: true
    lastName?: true
    userName?: true
    bio?: true
    cruise?: true
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
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
    cursor?: boolean
    firstName?: boolean
    lastName?: boolean
    userName?: boolean
    bio?: boolean
    cruise?: boolean
    email?: boolean
    imgUrl?: boolean
    following?: boolean | UserFindManyArgs
    followers?: boolean | UserFindManyArgs
    created?: boolean
    updated?: boolean
    location?: boolean
    posts?: boolean | PostFindManyArgs
    comment?: boolean | CommentFindManyArgs
    challenges?: boolean | ChallengeFindManyArgs
    challengeFollowing?: boolean | ChallengeFindManyArgs
    Comment?: boolean | CommentFindManyArgs
    Challenge?: boolean | ChallengeFindManyArgs
    peek?: boolean | PeekArgs
  }

  export type UserInclude = {
    following?: boolean | UserFindManyArgs
    followers?: boolean | UserFindManyArgs
    posts?: boolean | PostFindManyArgs
    comment?: boolean | CommentFindManyArgs
    challenges?: boolean | ChallengeFindManyArgs
    challengeFollowing?: boolean | ChallengeFindManyArgs
    Comment?: boolean | CommentFindManyArgs
    Challenge?: boolean | ChallengeFindManyArgs
    peek?: boolean | PeekArgs
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
        P extends 'comment'
        ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'challenges'
        ? Array < ChallengeGetPayload<S['include'][P]>>  :
        P extends 'challengeFollowing'
        ? Array < ChallengeGetPayload<S['include'][P]>>  :
        P extends 'Comment'
        ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'Challenge'
        ? Array < ChallengeGetPayload<S['include'][P]>>  :
        P extends 'peek'
        ? PeekGetPayload<S['include'][P]> | null : never
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
        P extends 'comment'
        ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'challenges'
        ? Array < ChallengeGetPayload<S['select'][P]>>  :
        P extends 'challengeFollowing'
        ? Array < ChallengeGetPayload<S['select'][P]>>  :
        P extends 'Comment'
        ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'Challenge'
        ? Array < ChallengeGetPayload<S['select'][P]>>  :
        P extends 'peek'
        ? PeekGetPayload<S['select'][P]> | null : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
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
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

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
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    ): PrismaPromise<BatchPayload>

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
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
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

    following<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    followers<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    posts<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    comment<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    challenges<T extends ChallengeFindManyArgs = {}>(args?: Subset<T, ChallengeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Challenge>>, PrismaPromise<Array<ChallengeGetPayload<T>>>>;

    challengeFollowing<T extends ChallengeFindManyArgs = {}>(args?: Subset<T, ChallengeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Challenge>>, PrismaPromise<Array<ChallengeGetPayload<T>>>>;

    Comment<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    Challenge<T extends ChallengeFindManyArgs = {}>(args?: Subset<T, ChallengeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Challenge>>, PrismaPromise<Array<ChallengeGetPayload<T>>>>;

    peek<T extends PeekArgs = {}>(args?: Subset<T, PeekArgs>): CheckSelect<T, Prisma__PeekClient<Peek | null >, Prisma__PeekClient<PeekGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
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
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
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
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
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
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
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
    likes: number
    challengeId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number
    likes: bigint
    challengeId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number
    cursor: string | null
    userId: string | null
    attachmentUrl: string | null
    attachmentType: AttachmentType | null
    content: string | null
    created: Date | null
    updated: Date | null
    likes: bigint
    origin: PostOrigin | null
    challengeId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number
    cursor: string | null
    userId: string | null
    attachmentUrl: string | null
    attachmentType: AttachmentType | null
    content: string | null
    created: Date | null
    updated: Date | null
    likes: bigint
    origin: PostOrigin | null
    challengeId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    cursor: number | null
    userId: number | null
    attachmentUrl: number | null
    attachmentMeta: number | null
    attachmentType: number | null
    content: number | null
    created: number | null
    updated: number | null
    location: number | null
    hashtags: number | null
    likedBy: number | null
    likes: number
    origin: number | null
    challengeId: number | null
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    likes?: true
    challengeId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    likes?: true
    challengeId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    cursor?: true
    userId?: true
    attachmentUrl?: true
    attachmentType?: true
    content?: true
    created?: true
    updated?: true
    likes?: true
    origin?: true
    challengeId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    cursor?: true
    userId?: true
    attachmentUrl?: true
    attachmentType?: true
    content?: true
    created?: true
    updated?: true
    likes?: true
    origin?: true
    challengeId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    cursor?: true
    userId?: true
    attachmentUrl?: true
    attachmentMeta?: true
    attachmentType?: true
    content?: true
    created?: true
    updated?: true
    location?: true
    hashtags?: true
    likedBy?: true
    likes?: true
    origin?: true
    challengeId?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
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
    cursor?: boolean
    userId?: boolean
    attachmentUrl?: boolean
    attachmentMeta?: boolean
    attachmentType?: boolean
    content?: boolean
    created?: boolean
    updated?: boolean
    location?: boolean
    hashtags?: boolean
    comments?: boolean | CommentFindManyArgs
    likedBy?: boolean
    likes?: boolean
    origin?: boolean
    challengeId?: boolean
    challenge?: boolean | ChallengeArgs
    Challenge?: boolean | ChallengeArgs
  }

  export type PostInclude = {
    user?: boolean | UserArgs
    comments?: boolean | CommentFindManyArgs
    challenge?: boolean | ChallengeArgs
    Challenge?: boolean | ChallengeArgs
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
        P extends 'challenge'
        ? ChallengeGetPayload<S['include'][P]> | null :
        P extends 'Challenge'
        ? ChallengeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Post ?Post [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> :
        P extends 'comments'
        ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'challenge'
        ? ChallengeGetPayload<S['select'][P]> | null :
        P extends 'Challenge'
        ? ChallengeGetPayload<S['select'][P]> | null : never
  } 
    : Post
  : Post


  type PostCountArgs = Merge<
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface PostDelegate<GlobalRejectSettings> {
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
    findUnique<T extends PostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    ): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>

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
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    ): PrismaPromise<BatchPayload>

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
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): PrismaPromise<GetPostAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T> implements PrismaPromise<T> {
    [prisma]: true;
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

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    challenge<T extends ChallengeArgs = {}>(args?: Subset<T, ChallengeArgs>): CheckSelect<T, Prisma__ChallengeClient<Challenge | null >, Prisma__ChallengeClient<ChallengeGetPayload<T> | null >>;

    Challenge<T extends ChallengeArgs = {}>(args?: Subset<T, ChallengeArgs>): CheckSelect<T, Prisma__ChallengeClient<Challenge | null >, Prisma__ChallengeClient<ChallengeGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
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
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs = {
    data: Enumerable<PostCreateManyInput>
    skipDuplicates?: boolean
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
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
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
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
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
    likes: number
    postId: number | null
    challengeId: number | null
    userUserId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number
    entityId: number
    likes: bigint
    postId: number | null
    challengeId: number | null
    userUserId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number
    cursor: string | null
    entityId: number
    entityType: EntityType | null
    comment: string | null
    attachmentType: AttachmentType | null
    attachmentUrl: string | null
    userId: string | null
    likes: bigint
    created: Date | null
    updated: Date | null
    postId: number | null
    challengeId: number | null
    userUserId: number | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number
    cursor: string | null
    entityId: number
    entityType: EntityType | null
    comment: string | null
    attachmentType: AttachmentType | null
    attachmentUrl: string | null
    userId: string | null
    likes: bigint
    created: Date | null
    updated: Date | null
    postId: number | null
    challengeId: number | null
    userUserId: number | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    cursor: number | null
    entityId: number
    entityType: number | null
    comment: number | null
    attachmentMeta: number | null
    attachmentType: number | null
    attachmentUrl: number | null
    userId: number | null
    likedBy: number | null
    likes: number
    created: number | null
    updated: number | null
    postId: number | null
    challengeId: number | null
    userUserId: number | null
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    entityId?: true
    likes?: true
    postId?: true
    challengeId?: true
    userUserId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    entityId?: true
    likes?: true
    postId?: true
    challengeId?: true
    userUserId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    cursor?: true
    entityId?: true
    entityType?: true
    comment?: true
    attachmentType?: true
    attachmentUrl?: true
    userId?: true
    likes?: true
    created?: true
    updated?: true
    postId?: true
    challengeId?: true
    userUserId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    cursor?: true
    entityId?: true
    entityType?: true
    comment?: true
    attachmentType?: true
    attachmentUrl?: true
    userId?: true
    likes?: true
    created?: true
    updated?: true
    postId?: true
    challengeId?: true
    userUserId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    cursor?: true
    entityId?: true
    entityType?: true
    comment?: true
    attachmentMeta?: true
    attachmentType?: true
    attachmentUrl?: true
    userId?: true
    likedBy?: true
    likes?: true
    created?: true
    updated?: true
    postId?: true
    challengeId?: true
    userUserId?: true
    _all?: true
  }

  export type CommentAggregateArgs = {
    /**
     * Filter which Comment to aggregate.
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
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
    cursor?: boolean
    entityId?: boolean
    entityType?: boolean
    comment?: boolean
    attachmentMeta?: boolean
    attachmentType?: boolean
    attachmentUrl?: boolean
    userId?: boolean
    likedBy?: boolean
    likes?: boolean
    user?: boolean | UserArgs
    created?: boolean
    updated?: boolean
    post?: boolean | PostArgs
    postId?: boolean
    challenge?: boolean | ChallengeArgs
    challengeId?: boolean
    User?: boolean | UserArgs
    userUserId?: boolean
  }

  export type CommentInclude = {
    user?: boolean | UserArgs
    post?: boolean | PostArgs
    challenge?: boolean | ChallengeArgs
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
        P extends 'post'
        ? PostGetPayload<S['include'][P]> | null :
        P extends 'challenge'
        ? ChallengeGetPayload<S['include'][P]> | null :
        P extends 'User'
        ? UserGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Comment ?Comment [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> :
        P extends 'post'
        ? PostGetPayload<S['select'][P]> | null :
        P extends 'challenge'
        ? ChallengeGetPayload<S['select'][P]> | null :
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

  export interface CommentDelegate<GlobalRejectSettings> {
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
    findUnique<T extends CommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Comment'> extends True ? CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>> : CheckSelect<T, Prisma__CommentClient<Comment | null >, Prisma__CommentClient<CommentGetPayload<T> | null >>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Comment'> extends True ? CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>> : CheckSelect<T, Prisma__CommentClient<Comment | null >, Prisma__CommentClient<CommentGetPayload<T> | null >>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    ): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>

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
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    ): PrismaPromise<BatchPayload>

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
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): PrismaPromise<GetCommentAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
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

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>;

    challenge<T extends ChallengeArgs = {}>(args?: Subset<T, ChallengeArgs>): CheckSelect<T, Prisma__ChallengeClient<Challenge | null >, Prisma__ChallengeClient<ChallengeGetPayload<T> | null >>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
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
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs = {
    data: Enumerable<CommentCreateManyInput>
    skipDuplicates?: boolean
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
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs = {
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
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
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
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
    likes: number
    userUserId: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    id: number
    likes: bigint
    userUserId: number | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: number
    cursor: string | null
    challenge: string | null
    userId: string | null
    attachmentType: AttachmentType | null
    attachmentUrl: string | null
    likes: bigint
    start: Date | null
    end: Date | null
    created: Date | null
    updated: Date | null
    userUserId: number | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: number
    cursor: string | null
    challenge: string | null
    userId: string | null
    attachmentType: AttachmentType | null
    attachmentUrl: string | null
    likes: bigint
    start: Date | null
    end: Date | null
    created: Date | null
    updated: Date | null
    userUserId: number | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    cursor: number | null
    challenge: number | null
    userId: number | null
    attachmentType: number | null
    attachmentUrl: number | null
    attachmentMeta: number | null
    hashtags: number | null
    likedBy: number | null
    likes: number
    start: number | null
    end: number | null
    created: number | null
    updated: number | null
    userUserId: number | null
    _all: number
  }


  export type ChallengeAvgAggregateInputType = {
    id?: true
    likes?: true
    userUserId?: true
  }

  export type ChallengeSumAggregateInputType = {
    id?: true
    likes?: true
    userUserId?: true
  }

  export type ChallengeMinAggregateInputType = {
    id?: true
    cursor?: true
    challenge?: true
    userId?: true
    attachmentType?: true
    attachmentUrl?: true
    likes?: true
    start?: true
    end?: true
    created?: true
    updated?: true
    userUserId?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    cursor?: true
    challenge?: true
    userId?: true
    attachmentType?: true
    attachmentUrl?: true
    likes?: true
    start?: true
    end?: true
    created?: true
    updated?: true
    userUserId?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    cursor?: true
    challenge?: true
    userId?: true
    attachmentType?: true
    attachmentUrl?: true
    attachmentMeta?: true
    hashtags?: true
    likedBy?: true
    likes?: true
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
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
    user?: boolean | UserArgs
    cursor?: boolean
    challenge?: boolean
    userId?: boolean
    attachmentType?: boolean
    attachmentUrl?: boolean
    attachmentMeta?: boolean
    hashtags?: boolean
    followers?: boolean | UserFindManyArgs
    likedBy?: boolean
    likes?: boolean
    start?: boolean
    end?: boolean
    created?: boolean
    updated?: boolean
    User?: boolean | UserArgs
    userUserId?: boolean
    comments?: boolean | CommentFindManyArgs
    posts?: boolean | PostFindManyArgs
    Post?: boolean | PostFindManyArgs
  }

  export type ChallengeInclude = {
    user?: boolean | UserArgs
    followers?: boolean | UserFindManyArgs
    User?: boolean | UserArgs
    comments?: boolean | CommentFindManyArgs
    posts?: boolean | PostFindManyArgs
    Post?: boolean | PostFindManyArgs
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
          P extends 'user'
        ? UserGetPayload<S['include'][P]> :
        P extends 'followers'
        ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'User'
        ? UserGetPayload<S['include'][P]> | null :
        P extends 'comments'
        ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'posts'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends 'Post'
        ? Array < PostGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Challenge ?Challenge [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> :
        P extends 'followers'
        ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'User'
        ? UserGetPayload<S['select'][P]> | null :
        P extends 'comments'
        ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'posts'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends 'Post'
        ? Array < PostGetPayload<S['select'][P]>>  : never
  } 
    : Challenge
  : Challenge


  type ChallengeCountArgs = Merge<
    Omit<ChallengeFindManyArgs, 'select' | 'include'> & {
      select?: ChallengeCountAggregateInputType | true
    }
  >

  export interface ChallengeDelegate<GlobalRejectSettings> {
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
    findUnique<T extends ChallengeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ChallengeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Challenge'> extends True ? CheckSelect<T, Prisma__ChallengeClient<Challenge>, Prisma__ChallengeClient<ChallengeGetPayload<T>>> : CheckSelect<T, Prisma__ChallengeClient<Challenge | null >, Prisma__ChallengeClient<ChallengeGetPayload<T> | null >>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChallengeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ChallengeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Challenge'> extends True ? CheckSelect<T, Prisma__ChallengeClient<Challenge>, Prisma__ChallengeClient<ChallengeGetPayload<T>>> : CheckSelect<T, Prisma__ChallengeClient<Challenge | null >, Prisma__ChallengeClient<ChallengeGetPayload<T> | null >>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    ): CheckSelect<T, PrismaPromise<Array<Challenge>>, PrismaPromise<Array<ChallengeGetPayload<T>>>>

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
     * Create many Challenges.
     *     @param {ChallengeCreateManyArgs} args - Arguments to create many Challenges.
     *     @example
     *     // Create many Challenges
     *     const challenge = await prisma.challenge.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChallengeCreateManyArgs>(
      args?: SelectSubset<T, ChallengeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    ): PrismaPromise<BatchPayload>

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
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): PrismaPromise<GetChallengeAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ChallengeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
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

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    followers<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    posts<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    Post<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
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
    data: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
  }


  /**
   * Challenge createMany
   */
  export type ChallengeCreateManyArgs = {
    data: Enumerable<ChallengeCreateManyInput>
    skipDuplicates?: boolean
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
    data: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
    /**
     * Choose, which Challenge to update.
    **/
    where: ChallengeWhereUniqueInput
  }


  /**
   * Challenge updateMany
   */
  export type ChallengeUpdateManyArgs = {
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
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
    create: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
    /**
     * In case the Challenge was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
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
   * Model Peek
   */


  export type AggregatePeek = {
    count: PeekCountAggregateOutputType | null
    avg: PeekAvgAggregateOutputType | null
    sum: PeekSumAggregateOutputType | null
    min: PeekMinAggregateOutputType | null
    max: PeekMaxAggregateOutputType | null
  }

  export type PeekAvgAggregateOutputType = {
    id: number
    expiresUTC: number | null
    peeks: number
  }

  export type PeekSumAggregateOutputType = {
    id: number
    expiresUTC: bigint | null
    peeks: number
  }

  export type PeekMinAggregateOutputType = {
    id: number
    userId: string | null
    expiresUTC: bigint | null
    active: boolean | null
    peeks: number
  }

  export type PeekMaxAggregateOutputType = {
    id: number
    userId: string | null
    expiresUTC: bigint | null
    active: boolean | null
    peeks: number
  }

  export type PeekCountAggregateOutputType = {
    id: number
    userId: number | null
    expiresUTC: number | null
    active: number | null
    peeks: number
    _all: number
  }


  export type PeekAvgAggregateInputType = {
    id?: true
    expiresUTC?: true
    peeks?: true
  }

  export type PeekSumAggregateInputType = {
    id?: true
    expiresUTC?: true
    peeks?: true
  }

  export type PeekMinAggregateInputType = {
    id?: true
    userId?: true
    expiresUTC?: true
    active?: true
    peeks?: true
  }

  export type PeekMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresUTC?: true
    active?: true
    peeks?: true
  }

  export type PeekCountAggregateInputType = {
    id?: true
    userId?: true
    expiresUTC?: true
    active?: true
    peeks?: true
    _all?: true
  }

  export type PeekAggregateArgs = {
    /**
     * Filter which Peek to aggregate.
    **/
    where?: PeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peeks to fetch.
    **/
    orderBy?: Enumerable<PeekOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: PeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peeks from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peeks.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Peeks
    **/
    count?: true | PeekCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: PeekAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: PeekSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: PeekMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: PeekMaxAggregateInputType
  }

  export type GetPeekAggregateType<T extends PeekAggregateArgs> = {
    [P in keyof T & keyof AggregatePeek]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeek[P]>
      : GetScalarType<T[P], AggregatePeek[P]>
  }



  export type PeekSelect = {
    id?: boolean
    userId?: boolean
    user?: boolean | UserArgs
    expiresUTC?: boolean
    active?: boolean
    peeks?: boolean
  }

  export type PeekInclude = {
    user?: boolean | UserArgs
  }

  export type PeekGetPayload<
    S extends boolean | null | undefined | PeekArgs,
    U = keyof S
      > = S extends true
        ? Peek
    : S extends undefined
    ? never
    : S extends PeekArgs | PeekFindManyArgs
    ?'include' extends U
    ? Peek  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Peek ?Peek [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Peek
  : Peek


  type PeekCountArgs = Merge<
    Omit<PeekFindManyArgs, 'select' | 'include'> & {
      select?: PeekCountAggregateInputType | true
    }
  >

  export interface PeekDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Peek that matches the filter.
     * @param {PeekFindUniqueArgs} args - Arguments to find a Peek
     * @example
     * // Get one Peek
     * const peek = await prisma.peek.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PeekFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PeekFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Peek'> extends True ? CheckSelect<T, Prisma__PeekClient<Peek>, Prisma__PeekClient<PeekGetPayload<T>>> : CheckSelect<T, Prisma__PeekClient<Peek | null >, Prisma__PeekClient<PeekGetPayload<T> | null >>

    /**
     * Find the first Peek that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeekFindFirstArgs} args - Arguments to find a Peek
     * @example
     * // Get one Peek
     * const peek = await prisma.peek.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PeekFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PeekFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Peek'> extends True ? CheckSelect<T, Prisma__PeekClient<Peek>, Prisma__PeekClient<PeekGetPayload<T>>> : CheckSelect<T, Prisma__PeekClient<Peek | null >, Prisma__PeekClient<PeekGetPayload<T> | null >>

    /**
     * Find zero or more Peeks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeekFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peeks
     * const peeks = await prisma.peek.findMany()
     * 
     * // Get first 10 Peeks
     * const peeks = await prisma.peek.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peekWithIdOnly = await prisma.peek.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PeekFindManyArgs>(
      args?: SelectSubset<T, PeekFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Peek>>, PrismaPromise<Array<PeekGetPayload<T>>>>

    /**
     * Create a Peek.
     * @param {PeekCreateArgs} args - Arguments to create a Peek.
     * @example
     * // Create one Peek
     * const Peek = await prisma.peek.create({
     *   data: {
     *     // ... data to create a Peek
     *   }
     * })
     * 
    **/
    create<T extends PeekCreateArgs>(
      args: SelectSubset<T, PeekCreateArgs>
    ): CheckSelect<T, Prisma__PeekClient<Peek>, Prisma__PeekClient<PeekGetPayload<T>>>

    /**
     * Create many Peeks.
     *     @param {PeekCreateManyArgs} args - Arguments to create many Peeks.
     *     @example
     *     // Create many Peeks
     *     const peek = await prisma.peek.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PeekCreateManyArgs>(
      args?: SelectSubset<T, PeekCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Peek.
     * @param {PeekDeleteArgs} args - Arguments to delete one Peek.
     * @example
     * // Delete one Peek
     * const Peek = await prisma.peek.delete({
     *   where: {
     *     // ... filter to delete one Peek
     *   }
     * })
     * 
    **/
    delete<T extends PeekDeleteArgs>(
      args: SelectSubset<T, PeekDeleteArgs>
    ): CheckSelect<T, Prisma__PeekClient<Peek>, Prisma__PeekClient<PeekGetPayload<T>>>

    /**
     * Update one Peek.
     * @param {PeekUpdateArgs} args - Arguments to update one Peek.
     * @example
     * // Update one Peek
     * const peek = await prisma.peek.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PeekUpdateArgs>(
      args: SelectSubset<T, PeekUpdateArgs>
    ): CheckSelect<T, Prisma__PeekClient<Peek>, Prisma__PeekClient<PeekGetPayload<T>>>

    /**
     * Delete zero or more Peeks.
     * @param {PeekDeleteManyArgs} args - Arguments to filter Peeks to delete.
     * @example
     * // Delete a few Peeks
     * const { count } = await prisma.peek.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PeekDeleteManyArgs>(
      args?: SelectSubset<T, PeekDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeekUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peeks
     * const peek = await prisma.peek.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PeekUpdateManyArgs>(
      args: SelectSubset<T, PeekUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Peek.
     * @param {PeekUpsertArgs} args - Arguments to update or create a Peek.
     * @example
     * // Update or create a Peek
     * const peek = await prisma.peek.upsert({
     *   create: {
     *     // ... data to create a Peek
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peek we want to update
     *   }
     * })
    **/
    upsert<T extends PeekUpsertArgs>(
      args: SelectSubset<T, PeekUpsertArgs>
    ): CheckSelect<T, Prisma__PeekClient<Peek>, Prisma__PeekClient<PeekGetPayload<T>>>

    /**
     * Count the number of Peeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeekCountArgs} args - Arguments to filter Peeks to count.
     * @example
     * // Count the number of Peeks
     * const count = await prisma.peek.count({
     *   where: {
     *     // ... the filter for the Peeks we want to count
     *   }
     * })
    **/
    count<T extends PeekCountArgs>(
      args?: Subset<T, PeekCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeekCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peek.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeekAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeekAggregateArgs>(args: Subset<T, PeekAggregateArgs>): PrismaPromise<GetPeekAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Peek.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PeekClient<T> implements PrismaPromise<T> {
    [prisma]: true;
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

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
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
   * Peek findUnique
   */
  export type PeekFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Peek
    **/
    select?: PeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PeekInclude | null
    /**
     * Throw an Error if a Peek can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Peek to fetch.
    **/
    where: PeekWhereUniqueInput
  }


  /**
   * Peek findFirst
   */
  export type PeekFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Peek
    **/
    select?: PeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PeekInclude | null
    /**
     * Throw an Error if a Peek can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Peek to fetch.
    **/
    where?: PeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peeks to fetch.
    **/
    orderBy?: Enumerable<PeekOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peeks.
    **/
    cursor?: PeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peeks from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peeks.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peeks.
    **/
    distinct?: Enumerable<PeekScalarFieldEnum>
  }


  /**
   * Peek findMany
   */
  export type PeekFindManyArgs = {
    /**
     * Select specific fields to fetch from the Peek
    **/
    select?: PeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PeekInclude | null
    /**
     * Filter, which Peeks to fetch.
    **/
    where?: PeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peeks to fetch.
    **/
    orderBy?: Enumerable<PeekOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Peeks.
    **/
    cursor?: PeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peeks from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peeks.
    **/
    skip?: number
    distinct?: Enumerable<PeekScalarFieldEnum>
  }


  /**
   * Peek create
   */
  export type PeekCreateArgs = {
    /**
     * Select specific fields to fetch from the Peek
    **/
    select?: PeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PeekInclude | null
    /**
     * The data needed to create a Peek.
    **/
    data: XOR<PeekCreateInput, PeekUncheckedCreateInput>
  }


  /**
   * Peek createMany
   */
  export type PeekCreateManyArgs = {
    data: Enumerable<PeekCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Peek update
   */
  export type PeekUpdateArgs = {
    /**
     * Select specific fields to fetch from the Peek
    **/
    select?: PeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PeekInclude | null
    /**
     * The data needed to update a Peek.
    **/
    data: XOR<PeekUpdateInput, PeekUncheckedUpdateInput>
    /**
     * Choose, which Peek to update.
    **/
    where: PeekWhereUniqueInput
  }


  /**
   * Peek updateMany
   */
  export type PeekUpdateManyArgs = {
    data: XOR<PeekUpdateManyMutationInput, PeekUncheckedUpdateManyInput>
    where?: PeekWhereInput
  }


  /**
   * Peek upsert
   */
  export type PeekUpsertArgs = {
    /**
     * Select specific fields to fetch from the Peek
    **/
    select?: PeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PeekInclude | null
    /**
     * The filter to search for the Peek to update in case it exists.
    **/
    where: PeekWhereUniqueInput
    /**
     * In case the Peek found by the `where` argument doesn't exist, create a new Peek with this data.
    **/
    create: XOR<PeekCreateInput, PeekUncheckedCreateInput>
    /**
     * In case the Peek was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<PeekUpdateInput, PeekUncheckedUpdateInput>
  }


  /**
   * Peek delete
   */
  export type PeekDeleteArgs = {
    /**
     * Select specific fields to fetch from the Peek
    **/
    select?: PeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PeekInclude | null
    /**
     * Filter which Peek to delete.
    **/
    where: PeekWhereUniqueInput
  }


  /**
   * Peek deleteMany
   */
  export type PeekDeleteManyArgs = {
    where?: PeekWhereInput
  }


  /**
   * Peek without action
   */
  export type PeekArgs = {
    /**
     * Select specific fields to fetch from the Peek
    **/
    select?: PeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PeekInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
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
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
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
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CommentScalarFieldEnum: {
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
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
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
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const PeekScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresUTC: 'expiresUTC',
    active: 'active',
    peeks: 'peeks'
  };

  export type PeekScalarFieldEnum = (typeof PeekScalarFieldEnum)[keyof typeof PeekScalarFieldEnum]


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
    cursor?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    userName?: StringNullableFilter | string | null
    bio?: StringNullableFilter | string | null
    cruise?: StringNullableFilter | string | null
    email?: StringFilter | string
    imgUrl?: StringNullableFilter | string | null
    following?: UserListRelationFilter
    followers?: UserListRelationFilter
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    location?: JsonNullableFilter
    posts?: PostListRelationFilter
    comment?: CommentListRelationFilter
    challenges?: ChallengeListRelationFilter
    challengeFollowing?: ChallengeListRelationFilter
    Comment?: CommentListRelationFilter
    Challenge?: ChallengeListRelationFilter
    peek?: XOR<PeekRelationFilter, PeekWhereInput> | null
  }

  export type UserOrderByInput = {
    userId?: SortOrder
    uid?: SortOrder
    cursor?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userName?: SortOrder
    bio?: SortOrder
    cruise?: SortOrder
    email?: SortOrder
    imgUrl?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    location?: SortOrder
  }

  export type UserWhereUniqueInput = {
    userId?: number
    uid?: string
    cursor?: string
    userName?: string
    email?: string
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    cursor?: StringFilter | string
    userId?: StringFilter | string
    attachmentUrl?: StringNullableFilter | string | null
    attachmentMeta?: JsonNullableFilter
    attachmentType?: EnumAttachmentTypeNullableFilter | AttachmentType | null
    content?: StringFilter | string
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    location?: JsonNullableFilter
    hashtags?: StringNullableListFilter
    comments?: CommentListRelationFilter
    likedBy?: StringNullableListFilter
    likes?: BigIntFilter | bigint | number
    origin?: EnumPostOriginFilter | PostOrigin
    challengeId?: IntNullableFilter | number | null
    challenge?: XOR<ChallengeRelationFilter, ChallengeWhereInput> | null
    Challenge?: XOR<ChallengeRelationFilter, ChallengeWhereInput> | null
  }

  export type PostOrderByInput = {
    id?: SortOrder
    cursor?: SortOrder
    userId?: SortOrder
    attachmentUrl?: SortOrder
    attachmentMeta?: SortOrder
    attachmentType?: SortOrder
    content?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    location?: SortOrder
    hashtags?: SortOrder
    likedBy?: SortOrder
    likes?: SortOrder
    origin?: SortOrder
    challengeId?: SortOrder
  }

  export type PostWhereUniqueInput = {
    id?: number
    cursor?: string
  }

  export type CommentWhereInput = {
    AND?: Enumerable<CommentWhereInput>
    OR?: Enumerable<CommentWhereInput>
    NOT?: Enumerable<CommentWhereInput>
    id?: IntFilter | number
    cursor?: StringFilter | string
    entityId?: IntFilter | number
    entityType?: EnumEntityTypeFilter | EntityType
    comment?: StringFilter | string
    attachmentMeta?: JsonNullableFilter
    attachmentType?: EnumAttachmentTypeNullableFilter | AttachmentType | null
    attachmentUrl?: StringNullableFilter | string | null
    userId?: StringFilter | string
    likedBy?: StringNullableListFilter
    likes?: BigIntFilter | bigint | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput> | null
    postId?: IntNullableFilter | number | null
    challenge?: XOR<ChallengeRelationFilter, ChallengeWhereInput> | null
    challengeId?: IntNullableFilter | number | null
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    userUserId?: IntNullableFilter | number | null
  }

  export type CommentOrderByInput = {
    id?: SortOrder
    cursor?: SortOrder
    entityId?: SortOrder
    entityType?: SortOrder
    comment?: SortOrder
    attachmentMeta?: SortOrder
    attachmentType?: SortOrder
    attachmentUrl?: SortOrder
    userId?: SortOrder
    likedBy?: SortOrder
    likes?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    postId?: SortOrder
    challengeId?: SortOrder
    userUserId?: SortOrder
  }

  export type CommentWhereUniqueInput = {
    id?: number
    cursor?: string
  }

  export type ChallengeWhereInput = {
    AND?: Enumerable<ChallengeWhereInput>
    OR?: Enumerable<ChallengeWhereInput>
    NOT?: Enumerable<ChallengeWhereInput>
    id?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    cursor?: StringFilter | string
    challenge?: StringFilter | string
    userId?: StringFilter | string
    attachmentType?: EnumAttachmentTypeNullableFilter | AttachmentType | null
    attachmentUrl?: StringNullableFilter | string | null
    attachmentMeta?: JsonNullableFilter
    hashtags?: StringNullableListFilter
    followers?: UserListRelationFilter
    likedBy?: StringNullableListFilter
    likes?: BigIntFilter | bigint | number
    start?: DateTimeNullableFilter | Date | string | null
    end?: DateTimeNullableFilter | Date | string | null
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    userUserId?: IntNullableFilter | number | null
    comments?: CommentListRelationFilter
    posts?: PostListRelationFilter
    Post?: PostListRelationFilter
  }

  export type ChallengeOrderByInput = {
    id?: SortOrder
    cursor?: SortOrder
    challenge?: SortOrder
    userId?: SortOrder
    attachmentType?: SortOrder
    attachmentUrl?: SortOrder
    attachmentMeta?: SortOrder
    hashtags?: SortOrder
    likedBy?: SortOrder
    likes?: SortOrder
    start?: SortOrder
    end?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    userUserId?: SortOrder
  }

  export type ChallengeWhereUniqueInput = {
    id?: number
    cursor?: string
  }

  export type PeekWhereInput = {
    AND?: Enumerable<PeekWhereInput>
    OR?: Enumerable<PeekWhereInput>
    NOT?: Enumerable<PeekWhereInput>
    id?: IntFilter | number
    userId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    expiresUTC?: BigIntNullableFilter | bigint | number | null
    active?: BoolFilter | boolean
    peeks?: IntFilter | number
  }

  export type PeekOrderByInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresUTC?: SortOrder
    active?: SortOrder
    peeks?: SortOrder
  }

  export type PeekWhereUniqueInput = {
    id?: number
  }

  export type UserCreateInput = {
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    Challenge?: ChallengeCreateNestedManyWithoutUserInput
    peek?: PeekCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    peek?: PeekUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
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
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutUserInput
    peek?: PeekUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutUserInput
    peek?: PeekUncheckedUpdateOneWithoutUserInput
  }

  export type UserCreateManyInput = {
    userId?: number
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
  }

  export type UserUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
  }

  export type PostCreateInput = {
    cursor?: string
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    content: string
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    likes?: bigint | number
    origin?: PostOrigin
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    likedBy?: PostCreatelikedByInput | Enumerable<string>
    user: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    challenge?: ChallengeCreateNestedOneWithoutPostInput
    Challenge?: ChallengeCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    cursor?: string
    userId: string
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    content: string
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    likes?: bigint | number
    origin?: PostOrigin
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    likedBy?: PostCreatelikedByInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    origin?: EnumPostOriginFieldUpdateOperationsInput | PostOrigin
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    likedBy?: PostUpdatelikedByInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutPostsInput
    comments?: CommentUpdateManyWithoutPostInput
    challenge?: ChallengeUpdateOneWithoutPostInput
    Challenge?: ChallengeUpdateOneWithoutPostsInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    origin?: EnumPostOriginFieldUpdateOperationsInput | PostOrigin
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    likedBy?: PostUpdatelikedByInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutPostInput
  }

  export type PostCreateManyInput = {
    id?: number
    cursor?: string
    userId: string
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    content: string
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    likes?: bigint | number
    origin?: PostOrigin
    challengeId?: number | null
    hashtags?: PostCreateManyhashtagsInput | Enumerable<string>
    likedBy?: PostCreateManylikedByInput | Enumerable<string>
  }

  export type PostUpdateManyMutationInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    origin?: EnumPostOriginFieldUpdateOperationsInput | PostOrigin
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    likedBy?: PostUpdatelikedByInput | Enumerable<string>
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    origin?: EnumPostOriginFieldUpdateOperationsInput | PostOrigin
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    likedBy?: PostUpdatelikedByInput | Enumerable<string>
  }

  export type CommentCreateInput = {
    cursor?: string
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    likes?: bigint | number
    created?: Date | string
    updated?: Date | string
    likedBy?: CommentCreatelikedByInput | Enumerable<string>
    user: UserCreateNestedOneWithoutCommentInput
    post?: PostCreateNestedOneWithoutCommentsInput
    challenge?: ChallengeCreateNestedOneWithoutCommentsInput
    User?: UserCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    cursor?: string
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    userId: string
    likes?: bigint | number
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    challengeId?: number | null
    userUserId?: number | null
    likedBy?: CommentCreatelikedByInput | Enumerable<string>
  }

  export type CommentUpdateInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    likedBy?: CommentUpdatelikedByInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCommentInput
    post?: PostUpdateOneWithoutCommentsInput
    challenge?: ChallengeUpdateOneWithoutCommentsInput
    User?: UserUpdateOneWithoutCommentInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    likedBy?: CommentUpdatelikedByInput | Enumerable<string>
  }

  export type CommentCreateManyInput = {
    id?: number
    cursor?: string
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    userId: string
    likes?: bigint | number
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    challengeId?: number | null
    userUserId?: number | null
    likedBy?: CommentCreateManylikedByInput | Enumerable<string>
  }

  export type CommentUpdateManyMutationInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    likedBy?: CommentUpdatelikedByInput | Enumerable<string>
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    likedBy?: CommentUpdatelikedByInput | Enumerable<string>
  }

  export type ChallengeCreateInput = {
    cursor?: string
    challenge: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    likes?: bigint | number
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeCreatelikedByInput | Enumerable<string>
    user: UserCreateNestedOneWithoutChallengeInput
    followers?: UserCreateNestedManyWithoutChallengeFollowingInput
    User?: UserCreateNestedOneWithoutChallengesInput
    comments?: CommentCreateNestedManyWithoutChallengeInput
    posts?: PostCreateNestedManyWithoutChallengeInput
    Post?: PostCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: number
    cursor?: string
    challenge: string
    userId: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    likes?: bigint | number
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeCreatelikedByInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutChallengeInput
    posts?: PostUncheckedCreateNestedManyWithoutChallengeInput
    Post?: PostUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUpdateInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeUpdatelikedByInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutChallengeInput
    followers?: UserUpdateManyWithoutChallengeFollowingInput
    User?: UserUpdateOneWithoutChallengesInput
    comments?: CommentUpdateManyWithoutChallengeInput
    posts?: PostUpdateManyWithoutChallengeInput
    Post?: PostUpdateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeUpdatelikedByInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutChallengeInput
    posts?: PostUncheckedUpdateManyWithoutChallengeInput
    Post?: PostUncheckedUpdateManyWithoutChallengeInput
  }

  export type ChallengeCreateManyInput = {
    id?: number
    cursor?: string
    challenge: string
    userId: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    likes?: bigint | number
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    hashtags?: ChallengeCreateManyhashtagsInput | Enumerable<string>
    likedBy?: ChallengeCreateManylikedByInput | Enumerable<string>
  }

  export type ChallengeUpdateManyMutationInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeUpdatelikedByInput | Enumerable<string>
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeUpdatelikedByInput | Enumerable<string>
  }

  export type PeekCreateInput = {
    expiresUTC?: bigint | number | null
    active: boolean
    peeks: number
    user: UserCreateNestedOneWithoutPeekInput
  }

  export type PeekUncheckedCreateInput = {
    id?: number
    userId: string
    expiresUTC?: bigint | number | null
    active: boolean
    peeks: number
  }

  export type PeekUpdateInput = {
    expiresUTC?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    peeks?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPeekInput
  }

  export type PeekUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    expiresUTC?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    peeks?: IntFieldUpdateOperationsInput | number
  }

  export type PeekCreateManyInput = {
    id?: number
    userId: string
    expiresUTC?: bigint | number | null
    active: boolean
    peeks: number
  }

  export type PeekUpdateManyMutationInput = {
    expiresUTC?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    peeks?: IntFieldUpdateOperationsInput | number
  }

  export type PeekUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    expiresUTC?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    peeks?: IntFieldUpdateOperationsInput | number
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

  export type PeekRelationFilter = {
    is?: PeekWhereInput | null
    isNot?: PeekWhereInput | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EnumAttachmentTypeNullableFilter = {
    equals?: AttachmentType | null
    in?: Enumerable<AttachmentType> | null
    notIn?: Enumerable<AttachmentType> | null
    not?: NestedEnumAttachmentTypeNullableFilter | AttachmentType | null
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type EnumPostOriginFilter = {
    equals?: PostOrigin
    in?: Enumerable<PostOrigin>
    notIn?: Enumerable<PostOrigin>
    not?: NestedEnumPostOriginFilter | PostOrigin
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

  export type ChallengeRelationFilter = {
    is?: ChallengeWhereInput | null
    isNot?: ChallengeWhereInput | null
  }

  export type EnumEntityTypeFilter = {
    equals?: EntityType
    in?: Enumerable<EntityType>
    notIn?: Enumerable<EntityType>
    not?: NestedEnumEntityTypeFilter | EntityType
  }

  export type PostRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
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

  export type BigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UserCreateNestedManyWithoutFollowersInput = {
    create?: XOR<Enumerable<UserCreateWithoutFollowersInput>, Enumerable<UserUncheckedCreateWithoutFollowersInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutFollowersInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserCreateNestedManyWithoutFollowingInput = {
    create?: XOR<Enumerable<UserCreateWithoutFollowingInput>, Enumerable<UserUncheckedCreateWithoutFollowingInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutFollowingInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PostCreateWithoutUserInput>, Enumerable<PostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutUserInput>
    createMany?: PostCreateManyUserInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type ChallengeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ChallengeCreateWithoutUserInput>, Enumerable<ChallengeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutUserInput>
    createMany?: ChallengeCreateManyUserInputEnvelope
    connect?: Enumerable<ChallengeWhereUniqueInput>
  }

  export type ChallengeCreateNestedManyWithoutFollowersInput = {
    create?: XOR<Enumerable<ChallengeCreateWithoutFollowersInput>, Enumerable<ChallengeUncheckedCreateWithoutFollowersInput>>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutFollowersInput>
    connect?: Enumerable<ChallengeWhereUniqueInput>
  }

  export type PeekCreateNestedOneWithoutUserInput = {
    create?: XOR<PeekCreateWithoutUserInput, PeekUncheckedCreateWithoutUserInput>
    connectOrCreate?: PeekCreateOrConnectWithoutUserInput
    connect?: PeekWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PostCreateWithoutUserInput>, Enumerable<PostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutUserInput>
    createMany?: PostCreateManyUserInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type ChallengeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ChallengeCreateWithoutUserInput>, Enumerable<ChallengeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutUserInput>
    createMany?: ChallengeCreateManyUserInputEnvelope
    connect?: Enumerable<ChallengeWhereUniqueInput>
  }

  export type PeekUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PeekCreateWithoutUserInput, PeekUncheckedCreateWithoutUserInput>
    connectOrCreate?: PeekCreateOrConnectWithoutUserInput
    connect?: PeekWhereUniqueInput
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
    create?: XOR<Enumerable<UserCreateWithoutFollowersInput>, Enumerable<UserUncheckedCreateWithoutFollowersInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutFollowersInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutFollowersInput>
    connect?: Enumerable<UserWhereUniqueInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutFollowersInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutFollowersInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUpdateManyWithoutFollowingInput = {
    create?: XOR<Enumerable<UserCreateWithoutFollowingInput>, Enumerable<UserUncheckedCreateWithoutFollowingInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutFollowingInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutFollowingInput>
    connect?: Enumerable<UserWhereUniqueInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutFollowingInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutFollowingInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type PostUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<PostCreateWithoutUserInput>, Enumerable<PostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PostCreateManyUserInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type CommentUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type ChallengeUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ChallengeCreateWithoutUserInput>, Enumerable<ChallengeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ChallengeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ChallengeCreateManyUserInputEnvelope
    connect?: Enumerable<ChallengeWhereUniqueInput>
    set?: Enumerable<ChallengeWhereUniqueInput>
    disconnect?: Enumerable<ChallengeWhereUniqueInput>
    delete?: Enumerable<ChallengeWhereUniqueInput>
    update?: Enumerable<ChallengeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ChallengeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ChallengeScalarWhereInput>
  }

  export type ChallengeUpdateManyWithoutFollowersInput = {
    create?: XOR<Enumerable<ChallengeCreateWithoutFollowersInput>, Enumerable<ChallengeUncheckedCreateWithoutFollowersInput>>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutFollowersInput>
    upsert?: Enumerable<ChallengeUpsertWithWhereUniqueWithoutFollowersInput>
    connect?: Enumerable<ChallengeWhereUniqueInput>
    set?: Enumerable<ChallengeWhereUniqueInput>
    disconnect?: Enumerable<ChallengeWhereUniqueInput>
    delete?: Enumerable<ChallengeWhereUniqueInput>
    update?: Enumerable<ChallengeUpdateWithWhereUniqueWithoutFollowersInput>
    updateMany?: Enumerable<ChallengeUpdateManyWithWhereWithoutFollowersInput>
    deleteMany?: Enumerable<ChallengeScalarWhereInput>
  }

  export type PeekUpdateOneWithoutUserInput = {
    create?: XOR<PeekCreateWithoutUserInput, PeekUncheckedCreateWithoutUserInput>
    connectOrCreate?: PeekCreateOrConnectWithoutUserInput
    upsert?: PeekUpsertWithoutUserInput
    connect?: PeekWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<PeekUpdateWithoutUserInput, PeekUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<PostCreateWithoutUserInput>, Enumerable<PostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PostCreateManyUserInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type ChallengeUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ChallengeCreateWithoutUserInput>, Enumerable<ChallengeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ChallengeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ChallengeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ChallengeCreateManyUserInputEnvelope
    connect?: Enumerable<ChallengeWhereUniqueInput>
    set?: Enumerable<ChallengeWhereUniqueInput>
    disconnect?: Enumerable<ChallengeWhereUniqueInput>
    delete?: Enumerable<ChallengeWhereUniqueInput>
    update?: Enumerable<ChallengeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ChallengeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ChallengeScalarWhereInput>
  }

  export type PeekUncheckedUpdateOneWithoutUserInput = {
    create?: XOR<PeekCreateWithoutUserInput, PeekUncheckedCreateWithoutUserInput>
    connectOrCreate?: PeekCreateOrConnectWithoutUserInput
    upsert?: PeekUpsertWithoutUserInput
    connect?: PeekWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<PeekUpdateWithoutUserInput, PeekUncheckedUpdateWithoutUserInput>
  }

  export type PostCreatehashtagsInput = {
    set: Enumerable<string>
  }

  export type PostCreatelikedByInput = {
    set: Enumerable<string>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<CommentCreateWithoutPostInput>, Enumerable<CommentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutPostInput>
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type ChallengeCreateNestedOneWithoutPostInput = {
    create?: XOR<ChallengeCreateWithoutPostInput, ChallengeUncheckedCreateWithoutPostInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutPostInput
    connect?: ChallengeWhereUniqueInput
  }

  export type ChallengeCreateNestedOneWithoutPostsInput = {
    create?: XOR<ChallengeCreateWithoutPostsInput, ChallengeUncheckedCreateWithoutPostsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutPostsInput
    connect?: ChallengeWhereUniqueInput
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<CommentCreateWithoutPostInput>, Enumerable<CommentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutPostInput>
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type NullableEnumAttachmentTypeFieldUpdateOperationsInput = {
    set?: AttachmentType | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumPostOriginFieldUpdateOperationsInput = {
    set?: PostOrigin
  }

  export type PostUpdatehashtagsInput = {
    set: Enumerable<string>
  }

  export type PostUpdatelikedByInput = {
    set: Enumerable<string>
  }

  export type UserUpdateOneRequiredWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CommentUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<CommentCreateWithoutPostInput>, Enumerable<CommentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutPostInput>
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type ChallengeUpdateOneWithoutPostInput = {
    create?: XOR<ChallengeCreateWithoutPostInput, ChallengeUncheckedCreateWithoutPostInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutPostInput
    upsert?: ChallengeUpsertWithoutPostInput
    connect?: ChallengeWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ChallengeUpdateWithoutPostInput, ChallengeUncheckedUpdateWithoutPostInput>
  }

  export type ChallengeUpdateOneWithoutPostsInput = {
    create?: XOR<ChallengeCreateWithoutPostsInput, ChallengeUncheckedCreateWithoutPostsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutPostsInput
    upsert?: ChallengeUpsertWithoutPostsInput
    connect?: ChallengeWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ChallengeUpdateWithoutPostsInput, ChallengeUncheckedUpdateWithoutPostsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<CommentCreateWithoutPostInput>, Enumerable<CommentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutPostInput>
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type PostCreateManyhashtagsInput = {
    set: Enumerable<string>
  }

  export type PostCreateManylikedByInput = {
    set: Enumerable<string>
  }

  export type CommentCreatelikedByInput = {
    set: Enumerable<string>
  }

  export type UserCreateNestedOneWithoutCommentInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type ChallengeCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ChallengeCreateWithoutCommentsInput, ChallengeUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutCommentsInput
    connect?: ChallengeWhereUniqueInput
  }

  export type EnumEntityTypeFieldUpdateOperationsInput = {
    set?: EntityType
  }

  export type CommentUpdatelikedByInput = {
    set: Enumerable<string>
  }

  export type UserUpdateOneRequiredWithoutCommentInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    upsert?: UserUpsertWithoutCommentInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
  }

  export type PostUpdateOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type ChallengeUpdateOneWithoutCommentsInput = {
    create?: XOR<ChallengeCreateWithoutCommentsInput, ChallengeUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutCommentsInput
    upsert?: ChallengeUpsertWithoutCommentsInput
    connect?: ChallengeWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ChallengeUpdateWithoutCommentsInput, ChallengeUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneWithoutCommentInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    upsert?: UserUpsertWithoutCommentInput
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
  }

  export type CommentCreateManylikedByInput = {
    set: Enumerable<string>
  }

  export type ChallengeCreatehashtagsInput = {
    set: Enumerable<string>
  }

  export type ChallengeCreatelikedByInput = {
    set: Enumerable<string>
  }

  export type UserCreateNestedOneWithoutChallengeInput = {
    create?: XOR<UserCreateWithoutChallengeInput, UserUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengeInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutChallengeFollowingInput = {
    create?: XOR<Enumerable<UserCreateWithoutChallengeFollowingInput>, Enumerable<UserUncheckedCreateWithoutChallengeFollowingInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutChallengeFollowingInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutChallengesInput = {
    create?: XOR<UserCreateWithoutChallengesInput, UserUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengesInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutChallengeInput = {
    create?: XOR<Enumerable<CommentCreateWithoutChallengeInput>, Enumerable<CommentUncheckedCreateWithoutChallengeInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutChallengeInput>
    createMany?: CommentCreateManyChallengeInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type PostCreateNestedManyWithoutChallengeInput = {
    create?: XOR<Enumerable<PostCreateWithoutChallengeInput>, Enumerable<PostUncheckedCreateWithoutChallengeInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutChallengeInput>
    createMany?: PostCreateManyChallengeInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<Enumerable<CommentCreateWithoutChallengeInput>, Enumerable<CommentUncheckedCreateWithoutChallengeInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutChallengeInput>
    createMany?: CommentCreateManyChallengeInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<Enumerable<PostCreateWithoutChallengeInput>, Enumerable<PostUncheckedCreateWithoutChallengeInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutChallengeInput>
    createMany?: PostCreateManyChallengeInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ChallengeUpdatehashtagsInput = {
    set: Enumerable<string>
  }

  export type ChallengeUpdatelikedByInput = {
    set: Enumerable<string>
  }

  export type UserUpdateOneRequiredWithoutChallengeInput = {
    create?: XOR<UserCreateWithoutChallengeInput, UserUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengeInput
    upsert?: UserUpsertWithoutChallengeInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutChallengeInput, UserUncheckedUpdateWithoutChallengeInput>
  }

  export type UserUpdateManyWithoutChallengeFollowingInput = {
    create?: XOR<Enumerable<UserCreateWithoutChallengeFollowingInput>, Enumerable<UserUncheckedCreateWithoutChallengeFollowingInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutChallengeFollowingInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutChallengeFollowingInput>
    connect?: Enumerable<UserWhereUniqueInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutChallengeFollowingInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutChallengeFollowingInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUpdateOneWithoutChallengesInput = {
    create?: XOR<UserCreateWithoutChallengesInput, UserUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengesInput
    upsert?: UserUpsertWithoutChallengesInput
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UserUpdateWithoutChallengesInput, UserUncheckedUpdateWithoutChallengesInput>
  }

  export type CommentUpdateManyWithoutChallengeInput = {
    create?: XOR<Enumerable<CommentCreateWithoutChallengeInput>, Enumerable<CommentUncheckedCreateWithoutChallengeInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutChallengeInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutChallengeInput>
    createMany?: CommentCreateManyChallengeInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutChallengeInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutChallengeInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type PostUpdateManyWithoutChallengeInput = {
    create?: XOR<Enumerable<PostCreateWithoutChallengeInput>, Enumerable<PostUncheckedCreateWithoutChallengeInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutChallengeInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutChallengeInput>
    createMany?: PostCreateManyChallengeInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutChallengeInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutChallengeInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutChallengeInput = {
    create?: XOR<Enumerable<CommentCreateWithoutChallengeInput>, Enumerable<CommentUncheckedCreateWithoutChallengeInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutChallengeInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutChallengeInput>
    createMany?: CommentCreateManyChallengeInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutChallengeInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutChallengeInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutChallengeInput = {
    create?: XOR<Enumerable<PostCreateWithoutChallengeInput>, Enumerable<PostUncheckedCreateWithoutChallengeInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutChallengeInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutChallengeInput>
    createMany?: PostCreateManyChallengeInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutChallengeInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutChallengeInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type ChallengeCreateManyhashtagsInput = {
    set: Enumerable<string>
  }

  export type ChallengeCreateManylikedByInput = {
    set: Enumerable<string>
  }

  export type UserCreateNestedOneWithoutPeekInput = {
    create?: XOR<UserCreateWithoutPeekInput, UserUncheckedCreateWithoutPeekInput>
    connectOrCreate?: UserCreateOrConnectWithoutPeekInput
    connect?: UserWhereUniqueInput
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPeekInput = {
    create?: XOR<UserCreateWithoutPeekInput, UserUncheckedCreateWithoutPeekInput>
    connectOrCreate?: UserCreateOrConnectWithoutPeekInput
    upsert?: UserUpsertWithoutPeekInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPeekInput, UserUncheckedUpdateWithoutPeekInput>
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

  export type NestedEnumAttachmentTypeNullableFilter = {
    equals?: AttachmentType | null
    in?: Enumerable<AttachmentType> | null
    notIn?: Enumerable<AttachmentType> | null
    not?: NestedEnumAttachmentTypeNullableFilter | AttachmentType | null
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedEnumPostOriginFilter = {
    equals?: PostOrigin
    in?: Enumerable<PostOrigin>
    notIn?: Enumerable<PostOrigin>
    not?: NestedEnumPostOriginFilter | PostOrigin
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

  export type NestedBigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UserCreateWithoutFollowersInput = {
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    posts?: PostCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    Challenge?: ChallengeCreateNestedManyWithoutUserInput
    peek?: PeekCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowersInput = {
    userId?: number
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    peek?: PeekUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserCreateWithoutFollowingInput = {
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    followers?: UserCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    Challenge?: ChallengeCreateNestedManyWithoutUserInput
    peek?: PeekCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    userId?: number
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    peek?: PeekUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type PostCreateWithoutUserInput = {
    cursor?: string
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    content: string
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    likes?: bigint | number
    origin?: PostOrigin
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    likedBy?: PostCreatelikedByInput | Enumerable<string>
    comments?: CommentCreateNestedManyWithoutPostInput
    challenge?: ChallengeCreateNestedOneWithoutPostInput
    Challenge?: ChallengeCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    cursor?: string
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    content: string
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    likes?: bigint | number
    origin?: PostOrigin
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    likedBy?: PostCreatelikedByInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: Enumerable<PostCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    cursor?: string
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    likes?: bigint | number
    created?: Date | string
    updated?: Date | string
    likedBy?: CommentCreatelikedByInput | Enumerable<string>
    user: UserCreateNestedOneWithoutCommentInput
    post?: PostCreateNestedOneWithoutCommentsInput
    challenge?: ChallengeCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    cursor?: string
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    userId: string
    likes?: bigint | number
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    challengeId?: number | null
    likedBy?: CommentCreatelikedByInput | Enumerable<string>
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: Enumerable<CommentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ChallengeCreateWithoutUserInput = {
    cursor?: string
    challenge: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    likes?: bigint | number
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeCreatelikedByInput | Enumerable<string>
    user: UserCreateNestedOneWithoutChallengeInput
    followers?: UserCreateNestedManyWithoutChallengeFollowingInput
    comments?: CommentCreateNestedManyWithoutChallengeInput
    posts?: PostCreateNestedManyWithoutChallengeInput
    Post?: PostCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutUserInput = {
    id?: number
    cursor?: string
    challenge: string
    userId: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    likes?: bigint | number
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeCreatelikedByInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutChallengeInput
    posts?: PostUncheckedCreateNestedManyWithoutChallengeInput
    Post?: PostUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutUserInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutUserInput, ChallengeUncheckedCreateWithoutUserInput>
  }

  export type ChallengeCreateManyUserInputEnvelope = {
    data: Enumerable<ChallengeCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ChallengeCreateWithoutFollowersInput = {
    cursor?: string
    challenge: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    likes?: bigint | number
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeCreatelikedByInput | Enumerable<string>
    user: UserCreateNestedOneWithoutChallengeInput
    User?: UserCreateNestedOneWithoutChallengesInput
    comments?: CommentCreateNestedManyWithoutChallengeInput
    posts?: PostCreateNestedManyWithoutChallengeInput
    Post?: PostCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutFollowersInput = {
    id?: number
    cursor?: string
    challenge: string
    userId: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    likes?: bigint | number
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeCreatelikedByInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutChallengeInput
    posts?: PostUncheckedCreateNestedManyWithoutChallengeInput
    Post?: PostUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutFollowersInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutFollowersInput, ChallengeUncheckedCreateWithoutFollowersInput>
  }

  export type PeekCreateWithoutUserInput = {
    expiresUTC?: bigint | number | null
    active: boolean
    peeks: number
  }

  export type PeekUncheckedCreateWithoutUserInput = {
    id?: number
    expiresUTC?: bigint | number | null
    active: boolean
    peeks: number
  }

  export type PeekCreateOrConnectWithoutUserInput = {
    where: PeekWhereUniqueInput
    create: XOR<PeekCreateWithoutUserInput, PeekUncheckedCreateWithoutUserInput>
  }

  export type UserUpsertWithWhereUniqueWithoutFollowersInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowersInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowersInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowingInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    userId?: IntFilter | number
    uid?: StringFilter | string
    cursor?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    userName?: StringNullableFilter | string | null
    bio?: StringNullableFilter | string | null
    cruise?: StringNullableFilter | string | null
    email?: StringFilter | string
    imgUrl?: StringNullableFilter | string | null
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    location?: JsonNullableFilter
  }

  export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowingInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowersInput>
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    id?: IntFilter | number
    cursor?: StringFilter | string
    userId?: StringFilter | string
    attachmentUrl?: StringNullableFilter | string | null
    attachmentMeta?: JsonNullableFilter
    attachmentType?: EnumAttachmentTypeNullableFilter | AttachmentType | null
    content?: StringFilter | string
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    location?: JsonNullableFilter
    hashtags?: StringNullableListFilter
    likedBy?: StringNullableListFilter
    likes?: BigIntFilter | bigint | number
    origin?: EnumPostOriginFilter | PostOrigin
    challengeId?: IntNullableFilter | number | null
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentInput>
  }

  export type CommentScalarWhereInput = {
    AND?: Enumerable<CommentScalarWhereInput>
    OR?: Enumerable<CommentScalarWhereInput>
    NOT?: Enumerable<CommentScalarWhereInput>
    id?: IntFilter | number
    cursor?: StringFilter | string
    entityId?: IntFilter | number
    entityType?: EnumEntityTypeFilter | EntityType
    comment?: StringFilter | string
    attachmentMeta?: JsonNullableFilter
    attachmentType?: EnumAttachmentTypeNullableFilter | AttachmentType | null
    attachmentUrl?: StringNullableFilter | string | null
    userId?: StringFilter | string
    likedBy?: StringNullableListFilter
    likes?: BigIntFilter | bigint | number
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    postId?: IntNullableFilter | number | null
    challengeId?: IntNullableFilter | number | null
    userUserId?: IntNullableFilter | number | null
  }

  export type ChallengeUpsertWithWhereUniqueWithoutUserInput = {
    where: ChallengeWhereUniqueInput
    update: XOR<ChallengeUpdateWithoutUserInput, ChallengeUncheckedUpdateWithoutUserInput>
    create: XOR<ChallengeCreateWithoutUserInput, ChallengeUncheckedCreateWithoutUserInput>
  }

  export type ChallengeUpdateWithWhereUniqueWithoutUserInput = {
    where: ChallengeWhereUniqueInput
    data: XOR<ChallengeUpdateWithoutUserInput, ChallengeUncheckedUpdateWithoutUserInput>
  }

  export type ChallengeUpdateManyWithWhereWithoutUserInput = {
    where: ChallengeScalarWhereInput
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyWithoutChallengesInput>
  }

  export type ChallengeScalarWhereInput = {
    AND?: Enumerable<ChallengeScalarWhereInput>
    OR?: Enumerable<ChallengeScalarWhereInput>
    NOT?: Enumerable<ChallengeScalarWhereInput>
    id?: IntFilter | number
    cursor?: StringFilter | string
    challenge?: StringFilter | string
    userId?: StringFilter | string
    attachmentType?: EnumAttachmentTypeNullableFilter | AttachmentType | null
    attachmentUrl?: StringNullableFilter | string | null
    attachmentMeta?: JsonNullableFilter
    hashtags?: StringNullableListFilter
    likedBy?: StringNullableListFilter
    likes?: BigIntFilter | bigint | number
    start?: DateTimeNullableFilter | Date | string | null
    end?: DateTimeNullableFilter | Date | string | null
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    userUserId?: IntNullableFilter | number | null
  }

  export type ChallengeUpsertWithWhereUniqueWithoutFollowersInput = {
    where: ChallengeWhereUniqueInput
    update: XOR<ChallengeUpdateWithoutFollowersInput, ChallengeUncheckedUpdateWithoutFollowersInput>
    create: XOR<ChallengeCreateWithoutFollowersInput, ChallengeUncheckedCreateWithoutFollowersInput>
  }

  export type ChallengeUpdateWithWhereUniqueWithoutFollowersInput = {
    where: ChallengeWhereUniqueInput
    data: XOR<ChallengeUpdateWithoutFollowersInput, ChallengeUncheckedUpdateWithoutFollowersInput>
  }

  export type ChallengeUpdateManyWithWhereWithoutFollowersInput = {
    where: ChallengeScalarWhereInput
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyWithoutChallengeFollowingInput>
  }

  export type PeekUpsertWithoutUserInput = {
    update: XOR<PeekUpdateWithoutUserInput, PeekUncheckedUpdateWithoutUserInput>
    create: XOR<PeekCreateWithoutUserInput, PeekUncheckedCreateWithoutUserInput>
  }

  export type PeekUpdateWithoutUserInput = {
    expiresUTC?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    peeks?: IntFieldUpdateOperationsInput | number
  }

  export type PeekUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiresUTC?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    peeks?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutPostsInput = {
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    Challenge?: ChallengeCreateNestedManyWithoutUserInput
    peek?: PeekCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    userId?: number
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    peek?: PeekUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    cursor?: string
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    likes?: bigint | number
    created?: Date | string
    updated?: Date | string
    likedBy?: CommentCreatelikedByInput | Enumerable<string>
    user: UserCreateNestedOneWithoutCommentInput
    challenge?: ChallengeCreateNestedOneWithoutCommentsInput
    User?: UserCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: number
    cursor?: string
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    userId: string
    likes?: bigint | number
    created?: Date | string
    updated?: Date | string
    challengeId?: number | null
    userUserId?: number | null
    likedBy?: CommentCreatelikedByInput | Enumerable<string>
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: Enumerable<CommentCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type ChallengeCreateWithoutPostInput = {
    cursor?: string
    challenge: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    likes?: bigint | number
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeCreatelikedByInput | Enumerable<string>
    user: UserCreateNestedOneWithoutChallengeInput
    followers?: UserCreateNestedManyWithoutChallengeFollowingInput
    User?: UserCreateNestedOneWithoutChallengesInput
    comments?: CommentCreateNestedManyWithoutChallengeInput
    posts?: PostCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutPostInput = {
    id?: number
    cursor?: string
    challenge: string
    userId: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    likes?: bigint | number
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeCreatelikedByInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutChallengeInput
    posts?: PostUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutPostInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutPostInput, ChallengeUncheckedCreateWithoutPostInput>
  }

  export type ChallengeCreateWithoutPostsInput = {
    cursor?: string
    challenge: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    likes?: bigint | number
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeCreatelikedByInput | Enumerable<string>
    user: UserCreateNestedOneWithoutChallengeInput
    followers?: UserCreateNestedManyWithoutChallengeFollowingInput
    User?: UserCreateNestedOneWithoutChallengesInput
    comments?: CommentCreateNestedManyWithoutChallengeInput
    Post?: PostCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutPostsInput = {
    id?: number
    cursor?: string
    challenge: string
    userId: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    likes?: bigint | number
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeCreatelikedByInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutChallengeInput
    Post?: PostUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutPostsInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutPostsInput, ChallengeUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    following?: UserUpdateManyWithoutFollowersInput
    followers?: UserUpdateManyWithoutFollowingInput
    comment?: CommentUpdateManyWithoutUserInput
    challenges?: ChallengeUpdateManyWithoutUserInput
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutUserInput
    peek?: PeekUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutUserInput
    peek?: PeekUncheckedUpdateOneWithoutUserInput
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type ChallengeUpsertWithoutPostInput = {
    update: XOR<ChallengeUpdateWithoutPostInput, ChallengeUncheckedUpdateWithoutPostInput>
    create: XOR<ChallengeCreateWithoutPostInput, ChallengeUncheckedCreateWithoutPostInput>
  }

  export type ChallengeUpdateWithoutPostInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeUpdatelikedByInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutChallengeInput
    followers?: UserUpdateManyWithoutChallengeFollowingInput
    User?: UserUpdateOneWithoutChallengesInput
    comments?: CommentUpdateManyWithoutChallengeInput
    posts?: PostUpdateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeUpdatelikedByInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutChallengeInput
    posts?: PostUncheckedUpdateManyWithoutChallengeInput
  }

  export type ChallengeUpsertWithoutPostsInput = {
    update: XOR<ChallengeUpdateWithoutPostsInput, ChallengeUncheckedUpdateWithoutPostsInput>
    create: XOR<ChallengeCreateWithoutPostsInput, ChallengeUncheckedCreateWithoutPostsInput>
  }

  export type ChallengeUpdateWithoutPostsInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeUpdatelikedByInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutChallengeInput
    followers?: UserUpdateManyWithoutChallengeFollowingInput
    User?: UserUpdateOneWithoutChallengesInput
    comments?: CommentUpdateManyWithoutChallengeInput
    Post?: PostUpdateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeUpdatelikedByInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutChallengeInput
    Post?: PostUncheckedUpdateManyWithoutChallengeInput
  }

  export type UserCreateWithoutCommentInput = {
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Challenge?: ChallengeCreateNestedManyWithoutUserInput
    peek?: PeekCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentInput = {
    userId?: number
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    peek?: PeekUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
  }

  export type PostCreateWithoutCommentsInput = {
    cursor?: string
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    content: string
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    likes?: bigint | number
    origin?: PostOrigin
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    likedBy?: PostCreatelikedByInput | Enumerable<string>
    user: UserCreateNestedOneWithoutPostsInput
    challenge?: ChallengeCreateNestedOneWithoutPostInput
    Challenge?: ChallengeCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: number
    cursor?: string
    userId: string
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    content: string
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    likes?: bigint | number
    origin?: PostOrigin
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    likedBy?: PostCreatelikedByInput | Enumerable<string>
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type ChallengeCreateWithoutCommentsInput = {
    cursor?: string
    challenge: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    likes?: bigint | number
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeCreatelikedByInput | Enumerable<string>
    user: UserCreateNestedOneWithoutChallengeInput
    followers?: UserCreateNestedManyWithoutChallengeFollowingInput
    User?: UserCreateNestedOneWithoutChallengesInput
    posts?: PostCreateNestedManyWithoutChallengeInput
    Post?: PostCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutCommentsInput = {
    id?: number
    cursor?: string
    challenge: string
    userId: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    likes?: bigint | number
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeCreatelikedByInput | Enumerable<string>
    posts?: PostUncheckedCreateNestedManyWithoutChallengeInput
    Post?: PostUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutCommentsInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutCommentsInput, ChallengeUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentInput = {
    update: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
  }

  export type UserUpdateWithoutCommentInput = {
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
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
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Challenge?: ChallengeUpdateManyWithoutUserInput
    peek?: PeekUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutCommentInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutUserInput
    peek?: PeekUncheckedUpdateOneWithoutUserInput
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    origin?: EnumPostOriginFieldUpdateOperationsInput | PostOrigin
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    likedBy?: PostUpdatelikedByInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutPostsInput
    challenge?: ChallengeUpdateOneWithoutPostInput
    Challenge?: ChallengeUpdateOneWithoutPostsInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    origin?: EnumPostOriginFieldUpdateOperationsInput | PostOrigin
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    likedBy?: PostUpdatelikedByInput | Enumerable<string>
  }

  export type ChallengeUpsertWithoutCommentsInput = {
    update: XOR<ChallengeUpdateWithoutCommentsInput, ChallengeUncheckedUpdateWithoutCommentsInput>
    create: XOR<ChallengeCreateWithoutCommentsInput, ChallengeUncheckedCreateWithoutCommentsInput>
  }

  export type ChallengeUpdateWithoutCommentsInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeUpdatelikedByInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutChallengeInput
    followers?: UserUpdateManyWithoutChallengeFollowingInput
    User?: UserUpdateOneWithoutChallengesInput
    posts?: PostUpdateManyWithoutChallengeInput
    Post?: PostUpdateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeUpdatelikedByInput | Enumerable<string>
    posts?: PostUncheckedUpdateManyWithoutChallengeInput
    Post?: PostUncheckedUpdateManyWithoutChallengeInput
  }

  export type UserCreateWithoutChallengeInput = {
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    peek?: PeekCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChallengeInput = {
    userId?: number
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    peek?: PeekUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChallengeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChallengeInput, UserUncheckedCreateWithoutChallengeInput>
  }

  export type UserCreateWithoutChallengeFollowingInput = {
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    Challenge?: ChallengeCreateNestedManyWithoutUserInput
    peek?: PeekCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChallengeFollowingInput = {
    userId?: number
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    peek?: PeekUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChallengeFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChallengeFollowingInput, UserUncheckedCreateWithoutChallengeFollowingInput>
  }

  export type UserCreateWithoutChallengesInput = {
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    Challenge?: ChallengeCreateNestedManyWithoutUserInput
    peek?: PeekCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChallengesInput = {
    userId?: number
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    peek?: PeekUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChallengesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChallengesInput, UserUncheckedCreateWithoutChallengesInput>
  }

  export type CommentCreateWithoutChallengeInput = {
    cursor?: string
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    likes?: bigint | number
    created?: Date | string
    updated?: Date | string
    likedBy?: CommentCreatelikedByInput | Enumerable<string>
    user: UserCreateNestedOneWithoutCommentInput
    post?: PostCreateNestedOneWithoutCommentsInput
    User?: UserCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutChallengeInput = {
    id?: number
    cursor?: string
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    userId: string
    likes?: bigint | number
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    userUserId?: number | null
    likedBy?: CommentCreatelikedByInput | Enumerable<string>
  }

  export type CommentCreateOrConnectWithoutChallengeInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutChallengeInput, CommentUncheckedCreateWithoutChallengeInput>
  }

  export type CommentCreateManyChallengeInputEnvelope = {
    data: Enumerable<CommentCreateManyChallengeInput>
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutChallengeInput = {
    cursor?: string
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    content: string
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    likes?: bigint | number
    origin?: PostOrigin
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    likedBy?: PostCreatelikedByInput | Enumerable<string>
    user: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    challenge?: ChallengeCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateWithoutChallengeInput = {
    id?: number
    cursor?: string
    userId: string
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    content: string
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    likes?: bigint | number
    origin?: PostOrigin
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    likedBy?: PostCreatelikedByInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutChallengeInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutChallengeInput, PostUncheckedCreateWithoutChallengeInput>
  }

  export type PostCreateManyChallengeInputEnvelope = {
    data: Enumerable<PostCreateManyChallengeInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChallengeInput = {
    update: XOR<UserUpdateWithoutChallengeInput, UserUncheckedUpdateWithoutChallengeInput>
    create: XOR<UserCreateWithoutChallengeInput, UserUncheckedCreateWithoutChallengeInput>
  }

  export type UserUpdateWithoutChallengeInput = {
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
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
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Comment?: CommentUpdateManyWithoutUserInput
    peek?: PeekUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutChallengeInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    peek?: PeekUncheckedUpdateOneWithoutUserInput
  }

  export type UserUpsertWithWhereUniqueWithoutChallengeFollowingInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutChallengeFollowingInput, UserUncheckedUpdateWithoutChallengeFollowingInput>
    create: XOR<UserCreateWithoutChallengeFollowingInput, UserUncheckedCreateWithoutChallengeFollowingInput>
  }

  export type UserUpdateWithWhereUniqueWithoutChallengeFollowingInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutChallengeFollowingInput, UserUncheckedUpdateWithoutChallengeFollowingInput>
  }

  export type UserUpdateManyWithWhereWithoutChallengeFollowingInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowersInput>
  }

  export type UserUpsertWithoutChallengesInput = {
    update: XOR<UserUpdateWithoutChallengesInput, UserUncheckedUpdateWithoutChallengesInput>
    create: XOR<UserCreateWithoutChallengesInput, UserUncheckedCreateWithoutChallengesInput>
  }

  export type UserUpdateWithoutChallengesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    following?: UserUpdateManyWithoutFollowersInput
    followers?: UserUpdateManyWithoutFollowingInput
    posts?: PostUpdateManyWithoutUserInput
    comment?: CommentUpdateManyWithoutUserInput
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutUserInput
    peek?: PeekUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutChallengesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutUserInput
    peek?: PeekUncheckedUpdateOneWithoutUserInput
  }

  export type CommentUpsertWithWhereUniqueWithoutChallengeInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutChallengeInput, CommentUncheckedUpdateWithoutChallengeInput>
    create: XOR<CommentCreateWithoutChallengeInput, CommentUncheckedCreateWithoutChallengeInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutChallengeInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutChallengeInput, CommentUncheckedUpdateWithoutChallengeInput>
  }

  export type CommentUpdateManyWithWhereWithoutChallengeInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type PostUpsertWithWhereUniqueWithoutChallengeInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutChallengeInput, PostUncheckedUpdateWithoutChallengeInput>
    create: XOR<PostCreateWithoutChallengeInput, PostUncheckedCreateWithoutChallengeInput>
  }

  export type PostUpdateWithWhereUniqueWithoutChallengeInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutChallengeInput, PostUncheckedUpdateWithoutChallengeInput>
  }

  export type PostUpdateManyWithWhereWithoutChallengeInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type UserCreateWithoutPeekInput = {
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    Challenge?: ChallengeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPeekInput = {
    userId?: number
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    cruise?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPeekInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPeekInput, UserUncheckedCreateWithoutPeekInput>
  }

  export type UserUpsertWithoutPeekInput = {
    update: XOR<UserUpdateWithoutPeekInput, UserUncheckedUpdateWithoutPeekInput>
    create: XOR<UserCreateWithoutPeekInput, UserUncheckedCreateWithoutPeekInput>
  }

  export type UserUpdateWithoutPeekInput = {
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
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
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutPeekInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutUserInput
  }

  export type PostCreateManyUserInput = {
    id?: number
    cursor?: string
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    content: string
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    likes?: bigint | number
    origin?: PostOrigin
    challengeId?: number | null
    hashtags?: PostCreateManyhashtagsInput | Enumerable<string>
    likedBy?: PostCreateManylikedByInput | Enumerable<string>
  }

  export type CommentCreateManyUserInput = {
    id?: number
    cursor?: string
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    userId: string
    likes?: bigint | number
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    challengeId?: number | null
    likedBy?: CommentCreateManylikedByInput | Enumerable<string>
  }

  export type ChallengeCreateManyUserInput = {
    id?: number
    cursor?: string
    challenge: string
    userId: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    likes?: bigint | number
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreateManyhashtagsInput | Enumerable<string>
    likedBy?: ChallengeCreateManylikedByInput | Enumerable<string>
  }

  export type UserUpdateWithoutFollowersInput = {
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    following?: UserUpdateManyWithoutFollowersInput
    posts?: PostUpdateManyWithoutUserInput
    comment?: CommentUpdateManyWithoutUserInput
    challenges?: ChallengeUpdateManyWithoutUserInput
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutUserInput
    peek?: PeekUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutFollowersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutUserInput
    peek?: PeekUncheckedUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateManyWithoutFollowingInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
  }

  export type UserUpdateWithoutFollowingInput = {
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    followers?: UserUpdateManyWithoutFollowingInput
    posts?: PostUpdateManyWithoutUserInput
    comment?: CommentUpdateManyWithoutUserInput
    challenges?: ChallengeUpdateManyWithoutUserInput
    challengeFollowing?: ChallengeUpdateManyWithoutFollowersInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutUserInput
    peek?: PeekUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutUserInput
    peek?: PeekUncheckedUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateManyWithoutFollowersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
  }

  export type PostUpdateWithoutUserInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    origin?: EnumPostOriginFieldUpdateOperationsInput | PostOrigin
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    likedBy?: PostUpdatelikedByInput | Enumerable<string>
    comments?: CommentUpdateManyWithoutPostInput
    challenge?: ChallengeUpdateOneWithoutPostInput
    Challenge?: ChallengeUpdateOneWithoutPostsInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    origin?: EnumPostOriginFieldUpdateOperationsInput | PostOrigin
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    likedBy?: PostUpdatelikedByInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    origin?: EnumPostOriginFieldUpdateOperationsInput | PostOrigin
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    likedBy?: PostUpdatelikedByInput | Enumerable<string>
  }

  export type CommentUpdateWithoutUserInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    likedBy?: CommentUpdatelikedByInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCommentInput
    post?: PostUpdateOneWithoutCommentsInput
    challenge?: ChallengeUpdateOneWithoutCommentsInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    likedBy?: CommentUpdatelikedByInput | Enumerable<string>
  }

  export type CommentUncheckedUpdateManyWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    likedBy?: CommentUpdatelikedByInput | Enumerable<string>
  }

  export type ChallengeUpdateWithoutUserInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeUpdatelikedByInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutChallengeInput
    followers?: UserUpdateManyWithoutChallengeFollowingInput
    comments?: CommentUpdateManyWithoutChallengeInput
    posts?: PostUpdateManyWithoutChallengeInput
    Post?: PostUpdateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeUpdatelikedByInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutChallengeInput
    posts?: PostUncheckedUpdateManyWithoutChallengeInput
    Post?: PostUncheckedUpdateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedUpdateManyWithoutChallengesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeUpdatelikedByInput | Enumerable<string>
  }

  export type ChallengeUpdateWithoutFollowersInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeUpdatelikedByInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutChallengeInput
    User?: UserUpdateOneWithoutChallengesInput
    comments?: CommentUpdateManyWithoutChallengeInput
    posts?: PostUpdateManyWithoutChallengeInput
    Post?: PostUpdateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeUpdatelikedByInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutChallengeInput
    posts?: PostUncheckedUpdateManyWithoutChallengeInput
    Post?: PostUncheckedUpdateManyWithoutChallengeInput
  }

  export type ChallengeUncheckedUpdateManyWithoutChallengeFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    likedBy?: ChallengeUpdatelikedByInput | Enumerable<string>
  }

  export type CommentCreateManyPostInput = {
    id?: number
    cursor?: string
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    userId: string
    likes?: bigint | number
    created?: Date | string
    updated?: Date | string
    challengeId?: number | null
    userUserId?: number | null
    likedBy?: CommentCreateManylikedByInput | Enumerable<string>
  }

  export type CommentUpdateWithoutPostInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    likedBy?: CommentUpdatelikedByInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCommentInput
    challenge?: ChallengeUpdateOneWithoutCommentsInput
    User?: UserUpdateOneWithoutCommentInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    likedBy?: CommentUpdatelikedByInput | Enumerable<string>
  }

  export type CommentUncheckedUpdateManyWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    likedBy?: CommentUpdatelikedByInput | Enumerable<string>
  }

  export type CommentCreateManyChallengeInput = {
    id?: number
    cursor?: string
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    userId: string
    likes?: bigint | number
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    userUserId?: number | null
    likedBy?: CommentCreateManylikedByInput | Enumerable<string>
  }

  export type PostCreateManyChallengeInput = {
    id?: number
    cursor?: string
    userId: string
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    content: string
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    likes?: bigint | number
    origin?: PostOrigin
    hashtags?: PostCreateManyhashtagsInput | Enumerable<string>
    likedBy?: PostCreateManylikedByInput | Enumerable<string>
  }

  export type UserUpdateWithoutChallengeFollowingInput = {
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
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
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutUserInput
    peek?: PeekUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutChallengeFollowingInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    cruise?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutUserInput
    peek?: PeekUncheckedUpdateOneWithoutUserInput
  }

  export type CommentUpdateWithoutChallengeInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    likedBy?: CommentUpdatelikedByInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCommentInput
    post?: PostUpdateOneWithoutCommentsInput
    User?: UserUpdateOneWithoutCommentInput
  }

  export type CommentUncheckedUpdateWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    likedBy?: CommentUpdatelikedByInput | Enumerable<string>
  }

  export type PostUpdateWithoutChallengeInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    origin?: EnumPostOriginFieldUpdateOperationsInput | PostOrigin
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    likedBy?: PostUpdatelikedByInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutPostsInput
    comments?: CommentUpdateManyWithoutPostInput
    challenge?: ChallengeUpdateOneWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    likes?: BigIntFieldUpdateOperationsInput | bigint | number
    origin?: EnumPostOriginFieldUpdateOperationsInput | PostOrigin
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    likedBy?: PostUpdatelikedByInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutPostInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}