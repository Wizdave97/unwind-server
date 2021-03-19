
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
  reaction: Prisma.JsonValue | null
  location: Prisma.JsonValue | null
  hashtags: string[]
  kisses: string[]
  hearts: string[]
  hot: string[]
  challengeId: number | null
  cruiseId: number | null
}

/**
 * Model Cruise
 */

export type Cruise = {
  id: number
  cursor: string
  slogan: string
  attachmentType: AttachmentType | null
  attachmentMeta: Prisma.JsonValue | null
  attachmentUrl: string | null
  userId: string
  reaction: Prisma.JsonValue | null
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
  cursor: string
  entityId: number
  entityType: EntityType
  comment: string
  attachmentMeta: Prisma.JsonValue | null
  attachmentType: AttachmentType | null
  attachmentUrl: string | null
  userId: string
  reaction: Prisma.JsonValue | null
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
  cursor: string
  challenge: string
  userId: string
  attachmentType: AttachmentType | null
  attachmentUrl: string | null
  attachmentMeta: Prisma.JsonValue | null
  reaction: Prisma.JsonValue | null
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
   * `prisma.cruise`: Exposes CRUD operations for the **Cruise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cruises
    * const cruises = await prisma.cruise.findMany()
    * ```
    */
  get cruise(): Prisma.CruiseDelegate<GlobalReject>;

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
    Cruise: 'Cruise',
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
    peek?: boolean | PeekArgs
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

    cruises<T extends CruiseFindManyArgs = {}>(args?: Subset<T, CruiseFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Cruise>>, PrismaPromise<Array<CruiseGetPayload<T>>>>;

    comment<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    challenges<T extends ChallengeFindManyArgs = {}>(args?: Subset<T, ChallengeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Challenge>>, PrismaPromise<Array<ChallengeGetPayload<T>>>>;

    cruiseFollowing<T extends CruiseFindManyArgs = {}>(args?: Subset<T, CruiseFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Cruise>>, PrismaPromise<Array<CruiseGetPayload<T>>>>;

    challengeFollowing<T extends ChallengeFindManyArgs = {}>(args?: Subset<T, ChallengeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Challenge>>, PrismaPromise<Array<ChallengeGetPayload<T>>>>;

    Cruise<T extends CruiseFindManyArgs = {}>(args?: Subset<T, CruiseFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Cruise>>, PrismaPromise<Array<CruiseGetPayload<T>>>>;

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
    challengeId: number | null
    cruiseId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number
    challengeId: number | null
    cruiseId: number | null
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
    challengeId: number | null
    cruiseId: number | null
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
    challengeId: number | null
    cruiseId: number | null
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
    reaction: number | null
    location: number | null
    hashtags: number | null
    kisses: number | null
    hearts: number | null
    hot: number | null
    challengeId: number | null
    cruiseId: number | null
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    challengeId?: true
    cruiseId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    challengeId?: true
    cruiseId?: true
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
    challengeId?: true
    cruiseId?: true
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
    challengeId?: true
    cruiseId?: true
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
    reaction?: true
    location?: true
    hashtags?: true
    kisses?: true
    hearts?: true
    hot?: true
    challengeId?: true
    cruiseId?: true
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
    reaction?: boolean
    location?: boolean
    hashtags?: boolean
    comments?: boolean | CommentFindManyArgs
    cruises?: boolean | CruiseFindManyArgs
    kisses?: boolean
    hearts?: boolean
    hot?: boolean
    challengeId?: boolean
    challenge?: boolean | ChallengeArgs
    Cruise?: boolean | CruiseArgs
    cruiseId?: boolean
    Challenge?: boolean | ChallengeArgs
  }

  export type PostInclude = {
    user?: boolean | UserArgs
    comments?: boolean | CommentFindManyArgs
    cruises?: boolean | CruiseFindManyArgs
    challenge?: boolean | ChallengeArgs
    Cruise?: boolean | CruiseArgs
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
        P extends 'cruises'
        ? Array < CruiseGetPayload<S['include'][P]>>  :
        P extends 'challenge'
        ? ChallengeGetPayload<S['include'][P]> | null :
        P extends 'Cruise'
        ? CruiseGetPayload<S['include'][P]> | null :
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
        P extends 'cruises'
        ? Array < CruiseGetPayload<S['select'][P]>>  :
        P extends 'challenge'
        ? ChallengeGetPayload<S['select'][P]> | null :
        P extends 'Cruise'
        ? CruiseGetPayload<S['select'][P]> | null :
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

    cruises<T extends CruiseFindManyArgs = {}>(args?: Subset<T, CruiseFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Cruise>>, PrismaPromise<Array<CruiseGetPayload<T>>>>;

    challenge<T extends ChallengeArgs = {}>(args?: Subset<T, ChallengeArgs>): CheckSelect<T, Prisma__ChallengeClient<Challenge | null >, Prisma__ChallengeClient<ChallengeGetPayload<T> | null >>;

    Cruise<T extends CruiseArgs = {}>(args?: Subset<T, CruiseArgs>): CheckSelect<T, Prisma__CruiseClient<Cruise | null >, Prisma__CruiseClient<CruiseGetPayload<T> | null >>;

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
    cursor: string | null
    slogan: string | null
    attachmentType: AttachmentType | null
    attachmentUrl: string | null
    userId: string | null
    created: Date | null
    updated: Date | null
    userUserId: number | null
    postId: number | null
  }

  export type CruiseMaxAggregateOutputType = {
    id: number
    cursor: string | null
    slogan: string | null
    attachmentType: AttachmentType | null
    attachmentUrl: string | null
    userId: string | null
    created: Date | null
    updated: Date | null
    userUserId: number | null
    postId: number | null
  }

  export type CruiseCountAggregateOutputType = {
    id: number
    cursor: number | null
    slogan: number | null
    attachmentType: number | null
    attachmentMeta: number | null
    attachmentUrl: number | null
    userId: number | null
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
    cursor?: true
    slogan?: true
    attachmentType?: true
    attachmentUrl?: true
    userId?: true
    created?: true
    updated?: true
    userUserId?: true
    postId?: true
  }

  export type CruiseMaxAggregateInputType = {
    id?: true
    cursor?: true
    slogan?: true
    attachmentType?: true
    attachmentUrl?: true
    userId?: true
    created?: true
    updated?: true
    userUserId?: true
    postId?: true
  }

  export type CruiseCountAggregateInputType = {
    id?: true
    cursor?: true
    slogan?: true
    attachmentType?: true
    attachmentMeta?: true
    attachmentUrl?: true
    userId?: true
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
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
    user?: boolean | UserArgs
    cursor?: boolean
    slogan?: boolean
    attachmentType?: boolean
    attachmentMeta?: boolean
    attachmentUrl?: boolean
    userId?: boolean
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
    posts?: boolean | PostFindManyArgs
  }

  export type CruiseInclude = {
    user?: boolean | UserArgs
    followers?: boolean | UserFindManyArgs
    User?: boolean | UserArgs
    Post?: boolean | PostArgs
    comments?: boolean | CommentFindManyArgs
    posts?: boolean | PostFindManyArgs
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
          P extends 'user'
        ? UserGetPayload<S['include'][P]> :
        P extends 'followers'
        ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'User'
        ? UserGetPayload<S['include'][P]> | null :
        P extends 'Post'
        ? PostGetPayload<S['include'][P]> | null :
        P extends 'comments'
        ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'posts'
        ? Array < PostGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Cruise ?Cruise [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> :
        P extends 'followers'
        ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'User'
        ? UserGetPayload<S['select'][P]> | null :
        P extends 'Post'
        ? PostGetPayload<S['select'][P]> | null :
        P extends 'comments'
        ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'posts'
        ? Array < PostGetPayload<S['select'][P]>>  : never
  } 
    : Cruise
  : Cruise


  type CruiseCountArgs = Merge<
    Omit<CruiseFindManyArgs, 'select' | 'include'> & {
      select?: CruiseCountAggregateInputType | true
    }
  >

  export interface CruiseDelegate<GlobalRejectSettings> {
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
    findUnique<T extends CruiseFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CruiseFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Cruise'> extends True ? CheckSelect<T, Prisma__CruiseClient<Cruise>, Prisma__CruiseClient<CruiseGetPayload<T>>> : CheckSelect<T, Prisma__CruiseClient<Cruise | null >, Prisma__CruiseClient<CruiseGetPayload<T> | null >>

    /**
     * Find the first Cruise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CruiseFindFirstArgs} args - Arguments to find a Cruise
     * @example
     * // Get one Cruise
     * const cruise = await prisma.cruise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CruiseFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CruiseFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Cruise'> extends True ? CheckSelect<T, Prisma__CruiseClient<Cruise>, Prisma__CruiseClient<CruiseGetPayload<T>>> : CheckSelect<T, Prisma__CruiseClient<Cruise | null >, Prisma__CruiseClient<CruiseGetPayload<T> | null >>

    /**
     * Find zero or more Cruises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    ): CheckSelect<T, PrismaPromise<Array<Cruise>>, PrismaPromise<Array<CruiseGetPayload<T>>>>

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
     * Create many Cruises.
     *     @param {CruiseCreateManyArgs} args - Arguments to create many Cruises.
     *     @example
     *     // Create many Cruises
     *     const cruise = await prisma.cruise.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CruiseCreateManyArgs>(
      args?: SelectSubset<T, CruiseCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cruises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    ): PrismaPromise<BatchPayload>

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
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CruiseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cruise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
    aggregate<T extends CruiseAggregateArgs>(args: Subset<T, CruiseAggregateArgs>): PrismaPromise<GetCruiseAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Cruise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CruiseClient<T> implements PrismaPromise<T> {
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

    Post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    posts<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
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
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
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
    data: XOR<CruiseCreateInput, CruiseUncheckedCreateInput>
  }


  /**
   * Cruise createMany
   */
  export type CruiseCreateManyArgs = {
    data: Enumerable<CruiseCreateManyInput>
    skipDuplicates?: boolean
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
    data: XOR<CruiseUpdateInput, CruiseUncheckedUpdateInput>
    /**
     * Choose, which Cruise to update.
    **/
    where: CruiseWhereUniqueInput
  }


  /**
   * Cruise updateMany
   */
  export type CruiseUpdateManyArgs = {
    data: XOR<CruiseUpdateManyMutationInput, CruiseUncheckedUpdateManyInput>
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
    create: XOR<CruiseCreateInput, CruiseUncheckedCreateInput>
    /**
     * In case the Cruise was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<CruiseUpdateInput, CruiseUncheckedUpdateInput>
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
    cursor: string | null
    entityId: number
    entityType: EntityType | null
    comment: string | null
    attachmentType: AttachmentType | null
    attachmentUrl: string | null
    userId: string | null
    created: Date | null
    updated: Date | null
    postId: number | null
    challengeId: number | null
    cruiseId: number | null
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
    created: Date | null
    updated: Date | null
    postId: number | null
    challengeId: number | null
    cruiseId: number | null
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
    cursor?: true
    entityId?: true
    entityType?: true
    comment?: true
    attachmentType?: true
    attachmentUrl?: true
    userId?: true
    created?: true
    updated?: true
    postId?: true
    challengeId?: true
    cruiseId?: true
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
    created?: true
    updated?: true
    postId?: true
    challengeId?: true
    cruiseId?: true
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
    reaction?: boolean
    kisses?: boolean
    hearts?: boolean
    hot?: boolean
    user?: boolean | UserArgs
    created?: boolean
    updated?: boolean
    post?: boolean | PostArgs
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
    post?: boolean | PostArgs
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
        P extends 'post'
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
        P extends 'post'
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

    cruise<T extends CruiseArgs = {}>(args?: Subset<T, CruiseArgs>): CheckSelect<T, Prisma__CruiseClient<Cruise | null >, Prisma__CruiseClient<CruiseGetPayload<T> | null >>;

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
    userUserId: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    id: number
    userUserId: number | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: number
    cursor: string | null
    challenge: string | null
    userId: string | null
    attachmentType: AttachmentType | null
    attachmentUrl: string | null
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
    cursor?: true
    challenge?: true
    userId?: true
    attachmentType?: true
    attachmentUrl?: true
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
    reaction: 'reaction',
    location: 'location',
    hashtags: 'hashtags',
    kisses: 'kisses',
    hearts: 'hearts',
    hot: 'hot',
    challengeId: 'challengeId',
    cruiseId: 'cruiseId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CruiseScalarFieldEnum: {
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
  };

  export type CruiseScalarFieldEnum = (typeof CruiseScalarFieldEnum)[keyof typeof CruiseScalarFieldEnum]


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
    reaction?: JsonNullableFilter
    location?: JsonNullableFilter
    hashtags?: StringNullableListFilter
    comments?: CommentListRelationFilter
    cruises?: CruiseListRelationFilter
    kisses?: StringNullableListFilter
    hearts?: StringNullableListFilter
    hot?: StringNullableListFilter
    challengeId?: IntNullableFilter | number | null
    challenge?: XOR<ChallengeRelationFilter, ChallengeWhereInput> | null
    Cruise?: XOR<CruiseRelationFilter, CruiseWhereInput> | null
    cruiseId?: IntNullableFilter | number | null
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
    reaction?: SortOrder
    location?: SortOrder
    hashtags?: SortOrder
    kisses?: SortOrder
    hearts?: SortOrder
    hot?: SortOrder
    challengeId?: SortOrder
    cruiseId?: SortOrder
  }

  export type PostWhereUniqueInput = {
    id?: number
    cursor?: string
  }

  export type CruiseWhereInput = {
    AND?: Enumerable<CruiseWhereInput>
    OR?: Enumerable<CruiseWhereInput>
    NOT?: Enumerable<CruiseWhereInput>
    id?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    cursor?: StringFilter | string
    slogan?: StringFilter | string
    attachmentType?: EnumAttachmentTypeNullableFilter | AttachmentType | null
    attachmentMeta?: JsonNullableFilter
    attachmentUrl?: StringNullableFilter | string | null
    userId?: StringFilter | string
    reaction?: JsonNullableFilter
    followers?: UserListRelationFilter
    kisses?: StringNullableListFilter
    hearts?: StringNullableListFilter
    hot?: StringNullableListFilter
    hashtags?: StringNullableListFilter
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    userUserId?: IntNullableFilter | number | null
    Post?: XOR<PostRelationFilter, PostWhereInput> | null
    postId?: IntNullableFilter | number | null
    comments?: CommentListRelationFilter
    posts?: PostListRelationFilter
  }

  export type CruiseOrderByInput = {
    id?: SortOrder
    cursor?: SortOrder
    slogan?: SortOrder
    attachmentType?: SortOrder
    attachmentMeta?: SortOrder
    attachmentUrl?: SortOrder
    userId?: SortOrder
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
    reaction?: JsonNullableFilter
    kisses?: StringNullableListFilter
    hearts?: StringNullableListFilter
    hot?: StringNullableListFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput> | null
    postId?: IntNullableFilter | number | null
    challenge?: XOR<ChallengeRelationFilter, ChallengeWhereInput> | null
    challengeId?: IntNullableFilter | number | null
    cruise?: XOR<CruiseRelationFilter, CruiseWhereInput> | null
    cruiseId?: IntNullableFilter | number | null
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
    reaction?: JsonNullableFilter
    hashtags?: StringNullableListFilter
    followers?: UserListRelationFilter
    kisses?: StringNullableListFilter
    hearts?: StringNullableListFilter
    hot?: StringNullableListFilter
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
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutUserInput
    cruises?: CruiseCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    cruiseFollowing?: CruiseCreateNestedManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Cruise?: CruiseCreateNestedManyWithoutUserInput
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
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    cruises?: CruiseUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateNestedManyWithoutUserInput
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
    Cruise?: CruiseUpdateManyWithoutUserInput
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
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutUserInput
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    user: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    cruises?: CruiseCreateNestedManyWithoutPostInput
    challenge?: ChallengeCreateNestedOneWithoutPostInput
    Cruise?: CruiseCreateNestedOneWithoutPostsInput
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    cruiseId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    cruises?: CruiseUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutPostsInput
    comments?: CommentUpdateManyWithoutPostInput
    cruises?: CruiseUpdateManyWithoutPostInput
    challenge?: ChallengeUpdateOneWithoutPostInput
    Cruise?: CruiseUpdateOneWithoutPostsInput
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    cruiseId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutPostInput
    cruises?: CruiseUncheckedUpdateManyWithoutPostInput
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    cruiseId?: number | null
    hashtags?: PostCreateManyhashtagsInput | Enumerable<string>
    kisses?: PostCreateManykissesInput | Enumerable<string>
    hearts?: PostCreateManyheartsInput | Enumerable<string>
    hot?: PostCreateManyhotInput | Enumerable<string>
  }

  export type PostUpdateManyMutationInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    cruiseId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
  }

  export type CruiseCreateInput = {
    cursor?: string
    slogan: string
    attachmentType?: AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: string | null
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    user: UserCreateNestedOneWithoutCruiseInput
    followers?: UserCreateNestedManyWithoutCruiseFollowingInput
    User?: UserCreateNestedOneWithoutCruisesInput
    Post?: PostCreateNestedOneWithoutCruisesInput
    comments?: CommentCreateNestedManyWithoutCruiseInput
    posts?: PostCreateNestedManyWithoutCruiseInput
  }

  export type CruiseUncheckedCreateInput = {
    id?: number
    cursor?: string
    slogan: string
    attachmentType?: AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: string | null
    userId: string
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    postId?: number | null
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutCruiseInput
    posts?: PostUncheckedCreateNestedManyWithoutCruiseInput
  }

  export type CruiseUpdateInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCruiseInput
    followers?: UserUpdateManyWithoutCruiseFollowingInput
    User?: UserUpdateOneWithoutCruisesInput
    Post?: PostUpdateOneWithoutCruisesInput
    comments?: CommentUpdateManyWithoutCruiseInput
    posts?: PostUpdateManyWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutCruiseInput
    posts?: PostUncheckedUpdateManyWithoutCruiseInput
  }

  export type CruiseCreateManyInput = {
    id?: number
    cursor?: string
    slogan: string
    attachmentType?: AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: string | null
    userId: string
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    postId?: number | null
    kisses?: CruiseCreateManykissesInput | Enumerable<string>
    hearts?: CruiseCreateManyheartsInput | Enumerable<string>
    hot?: CruiseCreateManyhotInput | Enumerable<string>
    hashtags?: CruiseCreateManyhashtagsInput | Enumerable<string>
  }

  export type CruiseUpdateManyMutationInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
  }

  export type CruiseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue | null
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
    cursor?: string
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
    user: UserCreateNestedOneWithoutCommentInput
    post?: PostCreateNestedOneWithoutCommentsInput
    challenge?: ChallengeCreateNestedOneWithoutCommentsInput
    cruise?: CruiseCreateNestedOneWithoutCommentsInput
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
    reaction?: InputJsonValue | null
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
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCommentInput
    post?: PostUpdateOneWithoutCommentsInput
    challenge?: ChallengeUpdateOneWithoutCommentsInput
    cruise?: CruiseUpdateOneWithoutCommentsInput
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
    reaction?: InputJsonValue | null
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
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    challengeId?: number | null
    cruiseId?: number | null
    userUserId?: number | null
    kisses?: CommentCreateManykissesInput | Enumerable<string>
    hearts?: CommentCreateManyheartsInput | Enumerable<string>
    hot?: CommentCreateManyhotInput | Enumerable<string>
  }

  export type CommentUpdateManyMutationInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
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
    cursor?: string
    challenge: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    reaction?: InputJsonValue | null
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
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
    reaction?: InputJsonValue | null
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    hashtags?: ChallengeCreateManyhashtagsInput | Enumerable<string>
    kisses?: ChallengeCreateManykissesInput | Enumerable<string>
    hearts?: ChallengeCreateManyheartsInput | Enumerable<string>
    hot?: ChallengeCreateManyhotInput | Enumerable<string>
  }

  export type ChallengeUpdateManyMutationInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    reaction?: InputJsonValue | null
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
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    reaction?: InputJsonValue | null
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

  export type CruiseRelationFilter = {
    is?: CruiseWhereInput | null
    isNot?: CruiseWhereInput | null
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

  export type CruiseCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CruiseCreateWithoutUserInput>, Enumerable<CruiseUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutUserInput>
    createMany?: CruiseCreateManyUserInputEnvelope
    connect?: Enumerable<CruiseWhereUniqueInput>
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

  export type CruiseCreateNestedManyWithoutFollowersInput = {
    create?: XOR<Enumerable<CruiseCreateWithoutFollowersInput>, Enumerable<CruiseUncheckedCreateWithoutFollowersInput>>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutFollowersInput>
    connect?: Enumerable<CruiseWhereUniqueInput>
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

  export type CruiseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CruiseCreateWithoutUserInput>, Enumerable<CruiseUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutUserInput>
    createMany?: CruiseCreateManyUserInputEnvelope
    connect?: Enumerable<CruiseWhereUniqueInput>
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

  export type CruiseUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CruiseCreateWithoutUserInput>, Enumerable<CruiseUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CruiseUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CruiseCreateManyUserInputEnvelope
    connect?: Enumerable<CruiseWhereUniqueInput>
    set?: Enumerable<CruiseWhereUniqueInput>
    disconnect?: Enumerable<CruiseWhereUniqueInput>
    delete?: Enumerable<CruiseWhereUniqueInput>
    update?: Enumerable<CruiseUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CruiseUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CruiseScalarWhereInput>
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

  export type CruiseUpdateManyWithoutFollowersInput = {
    create?: XOR<Enumerable<CruiseCreateWithoutFollowersInput>, Enumerable<CruiseUncheckedCreateWithoutFollowersInput>>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutFollowersInput>
    upsert?: Enumerable<CruiseUpsertWithWhereUniqueWithoutFollowersInput>
    connect?: Enumerable<CruiseWhereUniqueInput>
    set?: Enumerable<CruiseWhereUniqueInput>
    disconnect?: Enumerable<CruiseWhereUniqueInput>
    delete?: Enumerable<CruiseWhereUniqueInput>
    update?: Enumerable<CruiseUpdateWithWhereUniqueWithoutFollowersInput>
    updateMany?: Enumerable<CruiseUpdateManyWithWhereWithoutFollowersInput>
    deleteMany?: Enumerable<CruiseScalarWhereInput>
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

  export type CruiseUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CruiseCreateWithoutUserInput>, Enumerable<CruiseUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CruiseUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CruiseCreateManyUserInputEnvelope
    connect?: Enumerable<CruiseWhereUniqueInput>
    set?: Enumerable<CruiseWhereUniqueInput>
    disconnect?: Enumerable<CruiseWhereUniqueInput>
    delete?: Enumerable<CruiseWhereUniqueInput>
    update?: Enumerable<CruiseUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CruiseUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CruiseScalarWhereInput>
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

  export type PostCreatekissesInput = {
    set: Enumerable<string>
  }

  export type PostCreateheartsInput = {
    set: Enumerable<string>
  }

  export type PostCreatehotInput = {
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

  export type CruiseCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<CruiseCreateWithoutPostInput>, Enumerable<CruiseUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutPostInput>
    createMany?: CruiseCreateManyPostInputEnvelope
    connect?: Enumerable<CruiseWhereUniqueInput>
  }

  export type ChallengeCreateNestedOneWithoutPostInput = {
    create?: XOR<ChallengeCreateWithoutPostInput, ChallengeUncheckedCreateWithoutPostInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutPostInput
    connect?: ChallengeWhereUniqueInput
  }

  export type CruiseCreateNestedOneWithoutPostsInput = {
    create?: XOR<CruiseCreateWithoutPostsInput, CruiseUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CruiseCreateOrConnectWithoutPostsInput
    connect?: CruiseWhereUniqueInput
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

  export type CruiseUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<CruiseCreateWithoutPostInput>, Enumerable<CruiseUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutPostInput>
    createMany?: CruiseCreateManyPostInputEnvelope
    connect?: Enumerable<CruiseWhereUniqueInput>
  }

  export type NullableEnumAttachmentTypeFieldUpdateOperationsInput = {
    set?: AttachmentType | null
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

  export type CruiseUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<CruiseCreateWithoutPostInput>, Enumerable<CruiseUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<CruiseUpsertWithWhereUniqueWithoutPostInput>
    createMany?: CruiseCreateManyPostInputEnvelope
    connect?: Enumerable<CruiseWhereUniqueInput>
    set?: Enumerable<CruiseWhereUniqueInput>
    disconnect?: Enumerable<CruiseWhereUniqueInput>
    delete?: Enumerable<CruiseWhereUniqueInput>
    update?: Enumerable<CruiseUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<CruiseUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<CruiseScalarWhereInput>
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

  export type CruiseUpdateOneWithoutPostsInput = {
    create?: XOR<CruiseCreateWithoutPostsInput, CruiseUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CruiseCreateOrConnectWithoutPostsInput
    upsert?: CruiseUpsertWithoutPostsInput
    connect?: CruiseWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<CruiseUpdateWithoutPostsInput, CruiseUncheckedUpdateWithoutPostsInput>
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

  export type CruiseUncheckedUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<CruiseCreateWithoutPostInput>, Enumerable<CruiseUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<CruiseCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<CruiseUpsertWithWhereUniqueWithoutPostInput>
    createMany?: CruiseCreateManyPostInputEnvelope
    connect?: Enumerable<CruiseWhereUniqueInput>
    set?: Enumerable<CruiseWhereUniqueInput>
    disconnect?: Enumerable<CruiseWhereUniqueInput>
    delete?: Enumerable<CruiseWhereUniqueInput>
    update?: Enumerable<CruiseUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<CruiseUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<CruiseScalarWhereInput>
  }

  export type PostCreateManyhashtagsInput = {
    set: Enumerable<string>
  }

  export type PostCreateManykissesInput = {
    set: Enumerable<string>
  }

  export type PostCreateManyheartsInput = {
    set: Enumerable<string>
  }

  export type PostCreateManyhotInput = {
    set: Enumerable<string>
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

  export type UserCreateNestedOneWithoutCruiseInput = {
    create?: XOR<UserCreateWithoutCruiseInput, UserUncheckedCreateWithoutCruiseInput>
    connectOrCreate?: UserCreateOrConnectWithoutCruiseInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCruiseFollowingInput = {
    create?: XOR<Enumerable<UserCreateWithoutCruiseFollowingInput>, Enumerable<UserUncheckedCreateWithoutCruiseFollowingInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCruiseFollowingInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutCruisesInput = {
    create?: XOR<UserCreateWithoutCruisesInput, UserUncheckedCreateWithoutCruisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCruisesInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCruisesInput = {
    create?: XOR<PostCreateWithoutCruisesInput, PostUncheckedCreateWithoutCruisesInput>
    connectOrCreate?: PostCreateOrConnectWithoutCruisesInput
    connect?: PostWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutCruiseInput = {
    create?: XOR<Enumerable<CommentCreateWithoutCruiseInput>, Enumerable<CommentUncheckedCreateWithoutCruiseInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutCruiseInput>
    createMany?: CommentCreateManyCruiseInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type PostCreateNestedManyWithoutCruiseInput = {
    create?: XOR<Enumerable<PostCreateWithoutCruiseInput>, Enumerable<PostUncheckedCreateWithoutCruiseInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCruiseInput>
    createMany?: PostCreateManyCruiseInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutCruiseInput = {
    create?: XOR<Enumerable<CommentCreateWithoutCruiseInput>, Enumerable<CommentUncheckedCreateWithoutCruiseInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutCruiseInput>
    createMany?: CommentCreateManyCruiseInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutCruiseInput = {
    create?: XOR<Enumerable<PostCreateWithoutCruiseInput>, Enumerable<PostUncheckedCreateWithoutCruiseInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCruiseInput>
    createMany?: PostCreateManyCruiseInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
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
    create?: XOR<UserCreateWithoutCruiseInput, UserUncheckedCreateWithoutCruiseInput>
    connectOrCreate?: UserCreateOrConnectWithoutCruiseInput
    upsert?: UserUpsertWithoutCruiseInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCruiseInput, UserUncheckedUpdateWithoutCruiseInput>
  }

  export type UserUpdateManyWithoutCruiseFollowingInput = {
    create?: XOR<Enumerable<UserCreateWithoutCruiseFollowingInput>, Enumerable<UserUncheckedCreateWithoutCruiseFollowingInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCruiseFollowingInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutCruiseFollowingInput>
    connect?: Enumerable<UserWhereUniqueInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutCruiseFollowingInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutCruiseFollowingInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUpdateOneWithoutCruisesInput = {
    create?: XOR<UserCreateWithoutCruisesInput, UserUncheckedCreateWithoutCruisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCruisesInput
    upsert?: UserUpsertWithoutCruisesInput
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UserUpdateWithoutCruisesInput, UserUncheckedUpdateWithoutCruisesInput>
  }

  export type PostUpdateOneWithoutCruisesInput = {
    create?: XOR<PostCreateWithoutCruisesInput, PostUncheckedCreateWithoutCruisesInput>
    connectOrCreate?: PostCreateOrConnectWithoutCruisesInput
    upsert?: PostUpsertWithoutCruisesInput
    connect?: PostWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<PostUpdateWithoutCruisesInput, PostUncheckedUpdateWithoutCruisesInput>
  }

  export type CommentUpdateManyWithoutCruiseInput = {
    create?: XOR<Enumerable<CommentCreateWithoutCruiseInput>, Enumerable<CommentUncheckedCreateWithoutCruiseInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutCruiseInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutCruiseInput>
    createMany?: CommentCreateManyCruiseInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutCruiseInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutCruiseInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type PostUpdateManyWithoutCruiseInput = {
    create?: XOR<Enumerable<PostCreateWithoutCruiseInput>, Enumerable<PostUncheckedCreateWithoutCruiseInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCruiseInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutCruiseInput>
    createMany?: PostCreateManyCruiseInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutCruiseInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutCruiseInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutCruiseInput = {
    create?: XOR<Enumerable<CommentCreateWithoutCruiseInput>, Enumerable<CommentUncheckedCreateWithoutCruiseInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutCruiseInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutCruiseInput>
    createMany?: CommentCreateManyCruiseInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutCruiseInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutCruiseInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutCruiseInput = {
    create?: XOR<Enumerable<PostCreateWithoutCruiseInput>, Enumerable<PostUncheckedCreateWithoutCruiseInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCruiseInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutCruiseInput>
    createMany?: PostCreateManyCruiseInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutCruiseInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutCruiseInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type CruiseCreateManykissesInput = {
    set: Enumerable<string>
  }

  export type CruiseCreateManyheartsInput = {
    set: Enumerable<string>
  }

  export type CruiseCreateManyhotInput = {
    set: Enumerable<string>
  }

  export type CruiseCreateManyhashtagsInput = {
    set: Enumerable<string>
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

  export type CruiseCreateNestedOneWithoutCommentsInput = {
    create?: XOR<CruiseCreateWithoutCommentsInput, CruiseUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: CruiseCreateOrConnectWithoutCommentsInput
    connect?: CruiseWhereUniqueInput
  }

  export type EnumEntityTypeFieldUpdateOperationsInput = {
    set?: EntityType
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

  export type CruiseUpdateOneWithoutCommentsInput = {
    create?: XOR<CruiseCreateWithoutCommentsInput, CruiseUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: CruiseCreateOrConnectWithoutCommentsInput
    upsert?: CruiseUpsertWithoutCommentsInput
    connect?: CruiseWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<CruiseUpdateWithoutCommentsInput, CruiseUncheckedUpdateWithoutCommentsInput>
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

  export type CommentCreateManykissesInput = {
    set: Enumerable<string>
  }

  export type CommentCreateManyheartsInput = {
    set: Enumerable<string>
  }

  export type CommentCreateManyhotInput = {
    set: Enumerable<string>
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

  export type ChallengeCreateManykissesInput = {
    set: Enumerable<string>
  }

  export type ChallengeCreateManyheartsInput = {
    set: Enumerable<string>
  }

  export type ChallengeCreateManyhotInput = {
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
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    posts?: PostCreateNestedManyWithoutUserInput
    cruises?: CruiseCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    cruiseFollowing?: CruiseCreateNestedManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Cruise?: CruiseCreateNestedManyWithoutUserInput
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
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    cruises?: CruiseUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateNestedManyWithoutUserInput
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
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    followers?: UserCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutUserInput
    cruises?: CruiseCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    cruiseFollowing?: CruiseCreateNestedManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Cruise?: CruiseCreateNestedManyWithoutUserInput
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
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    cruises?: CruiseUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateNestedManyWithoutUserInput
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    comments?: CommentCreateNestedManyWithoutPostInput
    cruises?: CruiseCreateNestedManyWithoutPostInput
    challenge?: ChallengeCreateNestedOneWithoutPostInput
    Cruise?: CruiseCreateNestedOneWithoutPostsInput
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    cruiseId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    cruises?: CruiseUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: Enumerable<PostCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CruiseCreateWithoutUserInput = {
    cursor?: string
    slogan: string
    attachmentType?: AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: string | null
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    user: UserCreateNestedOneWithoutCruiseInput
    followers?: UserCreateNestedManyWithoutCruiseFollowingInput
    Post?: PostCreateNestedOneWithoutCruisesInput
    comments?: CommentCreateNestedManyWithoutCruiseInput
    posts?: PostCreateNestedManyWithoutCruiseInput
  }

  export type CruiseUncheckedCreateWithoutUserInput = {
    id?: number
    cursor?: string
    slogan: string
    attachmentType?: AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: string | null
    userId: string
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutCruiseInput
    posts?: PostUncheckedCreateNestedManyWithoutCruiseInput
  }

  export type CruiseCreateOrConnectWithoutUserInput = {
    where: CruiseWhereUniqueInput
    create: XOR<CruiseCreateWithoutUserInput, CruiseUncheckedCreateWithoutUserInput>
  }

  export type CruiseCreateManyUserInputEnvelope = {
    data: Enumerable<CruiseCreateManyUserInput>
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
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
    user: UserCreateNestedOneWithoutCommentInput
    post?: PostCreateNestedOneWithoutCommentsInput
    challenge?: ChallengeCreateNestedOneWithoutCommentsInput
    cruise?: CruiseCreateNestedOneWithoutCommentsInput
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
    reaction?: InputJsonValue | null
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
    reaction?: InputJsonValue | null
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
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

  export type CruiseCreateWithoutFollowersInput = {
    cursor?: string
    slogan: string
    attachmentType?: AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: string | null
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    user: UserCreateNestedOneWithoutCruiseInput
    User?: UserCreateNestedOneWithoutCruisesInput
    Post?: PostCreateNestedOneWithoutCruisesInput
    comments?: CommentCreateNestedManyWithoutCruiseInput
    posts?: PostCreateNestedManyWithoutCruiseInput
  }

  export type CruiseUncheckedCreateWithoutFollowersInput = {
    id?: number
    cursor?: string
    slogan: string
    attachmentType?: AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: string | null
    userId: string
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    postId?: number | null
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutCruiseInput
    posts?: PostUncheckedCreateNestedManyWithoutCruiseInput
  }

  export type CruiseCreateOrConnectWithoutFollowersInput = {
    where: CruiseWhereUniqueInput
    create: XOR<CruiseCreateWithoutFollowersInput, CruiseUncheckedCreateWithoutFollowersInput>
  }

  export type ChallengeCreateWithoutFollowersInput = {
    cursor?: string
    challenge: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    reaction?: InputJsonValue | null
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
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
    reaction?: JsonNullableFilter
    location?: JsonNullableFilter
    hashtags?: StringNullableListFilter
    kisses?: StringNullableListFilter
    hearts?: StringNullableListFilter
    hot?: StringNullableListFilter
    challengeId?: IntNullableFilter | number | null
    cruiseId?: IntNullableFilter | number | null
  }

  export type CruiseUpsertWithWhereUniqueWithoutUserInput = {
    where: CruiseWhereUniqueInput
    update: XOR<CruiseUpdateWithoutUserInput, CruiseUncheckedUpdateWithoutUserInput>
    create: XOR<CruiseCreateWithoutUserInput, CruiseUncheckedCreateWithoutUserInput>
  }

  export type CruiseUpdateWithWhereUniqueWithoutUserInput = {
    where: CruiseWhereUniqueInput
    data: XOR<CruiseUpdateWithoutUserInput, CruiseUncheckedUpdateWithoutUserInput>
  }

  export type CruiseUpdateManyWithWhereWithoutUserInput = {
    where: CruiseScalarWhereInput
    data: XOR<CruiseUpdateManyMutationInput, CruiseUncheckedUpdateManyWithoutCruisesInput>
  }

  export type CruiseScalarWhereInput = {
    AND?: Enumerable<CruiseScalarWhereInput>
    OR?: Enumerable<CruiseScalarWhereInput>
    NOT?: Enumerable<CruiseScalarWhereInput>
    id?: IntFilter | number
    cursor?: StringFilter | string
    slogan?: StringFilter | string
    attachmentType?: EnumAttachmentTypeNullableFilter | AttachmentType | null
    attachmentMeta?: JsonNullableFilter
    attachmentUrl?: StringNullableFilter | string | null
    userId?: StringFilter | string
    reaction?: JsonNullableFilter
    kisses?: StringNullableListFilter
    hearts?: StringNullableListFilter
    hot?: StringNullableListFilter
    hashtags?: StringNullableListFilter
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    userUserId?: IntNullableFilter | number | null
    postId?: IntNullableFilter | number | null
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
    reaction?: JsonNullableFilter
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
    reaction?: JsonNullableFilter
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

  export type CruiseUpsertWithWhereUniqueWithoutFollowersInput = {
    where: CruiseWhereUniqueInput
    update: XOR<CruiseUpdateWithoutFollowersInput, CruiseUncheckedUpdateWithoutFollowersInput>
    create: XOR<CruiseCreateWithoutFollowersInput, CruiseUncheckedCreateWithoutFollowersInput>
  }

  export type CruiseUpdateWithWhereUniqueWithoutFollowersInput = {
    where: CruiseWhereUniqueInput
    data: XOR<CruiseUpdateWithoutFollowersInput, CruiseUncheckedUpdateWithoutFollowersInput>
  }

  export type CruiseUpdateManyWithWhereWithoutFollowersInput = {
    where: CruiseScalarWhereInput
    data: XOR<CruiseUpdateManyMutationInput, CruiseUncheckedUpdateManyWithoutCruiseFollowingInput>
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
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    cruises?: CruiseCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    cruiseFollowing?: CruiseCreateNestedManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Cruise?: CruiseCreateNestedManyWithoutUserInput
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
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    cruises?: CruiseUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateNestedManyWithoutUserInput
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
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
    user: UserCreateNestedOneWithoutCommentInput
    challenge?: ChallengeCreateNestedOneWithoutCommentsInput
    cruise?: CruiseCreateNestedOneWithoutCommentsInput
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
    reaction?: InputJsonValue | null
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
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: Enumerable<CommentCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type CruiseCreateWithoutPostInput = {
    cursor?: string
    slogan: string
    attachmentType?: AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: string | null
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    user: UserCreateNestedOneWithoutCruiseInput
    followers?: UserCreateNestedManyWithoutCruiseFollowingInput
    User?: UserCreateNestedOneWithoutCruisesInput
    comments?: CommentCreateNestedManyWithoutCruiseInput
    posts?: PostCreateNestedManyWithoutCruiseInput
  }

  export type CruiseUncheckedCreateWithoutPostInput = {
    id?: number
    cursor?: string
    slogan: string
    attachmentType?: AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: string | null
    userId: string
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutCruiseInput
    posts?: PostUncheckedCreateNestedManyWithoutCruiseInput
  }

  export type CruiseCreateOrConnectWithoutPostInput = {
    where: CruiseWhereUniqueInput
    create: XOR<CruiseCreateWithoutPostInput, CruiseUncheckedCreateWithoutPostInput>
  }

  export type CruiseCreateManyPostInputEnvelope = {
    data: Enumerable<CruiseCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type ChallengeCreateWithoutPostInput = {
    cursor?: string
    challenge: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    reaction?: InputJsonValue | null
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutChallengeInput
    posts?: PostUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutPostInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutPostInput, ChallengeUncheckedCreateWithoutPostInput>
  }

  export type CruiseCreateWithoutPostsInput = {
    cursor?: string
    slogan: string
    attachmentType?: AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: string | null
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    user: UserCreateNestedOneWithoutCruiseInput
    followers?: UserCreateNestedManyWithoutCruiseFollowingInput
    User?: UserCreateNestedOneWithoutCruisesInput
    Post?: PostCreateNestedOneWithoutCruisesInput
    comments?: CommentCreateNestedManyWithoutCruiseInput
  }

  export type CruiseUncheckedCreateWithoutPostsInput = {
    id?: number
    cursor?: string
    slogan: string
    attachmentType?: AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: string | null
    userId: string
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    postId?: number | null
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutCruiseInput
  }

  export type CruiseCreateOrConnectWithoutPostsInput = {
    where: CruiseWhereUniqueInput
    create: XOR<CruiseCreateWithoutPostsInput, CruiseUncheckedCreateWithoutPostsInput>
  }

  export type ChallengeCreateWithoutPostsInput = {
    cursor?: string
    challenge: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    reaction?: InputJsonValue | null
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
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
    Cruise?: CruiseUpdateManyWithoutUserInput
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
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutUserInput
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

  export type CruiseUpsertWithWhereUniqueWithoutPostInput = {
    where: CruiseWhereUniqueInput
    update: XOR<CruiseUpdateWithoutPostInput, CruiseUncheckedUpdateWithoutPostInput>
    create: XOR<CruiseCreateWithoutPostInput, CruiseUncheckedCreateWithoutPostInput>
  }

  export type CruiseUpdateWithWhereUniqueWithoutPostInput = {
    where: CruiseWhereUniqueInput
    data: XOR<CruiseUpdateWithoutPostInput, CruiseUncheckedUpdateWithoutPostInput>
  }

  export type CruiseUpdateManyWithWhereWithoutPostInput = {
    where: CruiseScalarWhereInput
    data: XOR<CruiseUpdateManyMutationInput, CruiseUncheckedUpdateManyWithoutCruisesInput>
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
    reaction?: InputJsonValue | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
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
    posts?: PostUncheckedUpdateManyWithoutChallengeInput
  }

  export type CruiseUpsertWithoutPostsInput = {
    update: XOR<CruiseUpdateWithoutPostsInput, CruiseUncheckedUpdateWithoutPostsInput>
    create: XOR<CruiseCreateWithoutPostsInput, CruiseUncheckedCreateWithoutPostsInput>
  }

  export type CruiseUpdateWithoutPostsInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCruiseInput
    followers?: UserUpdateManyWithoutCruiseFollowingInput
    User?: UserUpdateOneWithoutCruisesInput
    Post?: PostUpdateOneWithoutCruisesInput
    comments?: CommentUpdateManyWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue | null
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
    reaction?: InputJsonValue | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
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
    Post?: PostUncheckedUpdateManyWithoutChallengeInput
  }

  export type UserCreateWithoutCruiseInput = {
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutUserInput
    cruises?: CruiseCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    cruiseFollowing?: CruiseCreateNestedManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    Challenge?: ChallengeCreateNestedManyWithoutUserInput
    peek?: PeekCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCruiseInput = {
    userId?: number
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    cruises?: CruiseUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    peek?: PeekUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCruiseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCruiseInput, UserUncheckedCreateWithoutCruiseInput>
  }

  export type UserCreateWithoutCruiseFollowingInput = {
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutUserInput
    cruises?: CruiseCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Cruise?: CruiseCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    Challenge?: ChallengeCreateNestedManyWithoutUserInput
    peek?: PeekCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCruiseFollowingInput = {
    userId?: number
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    cruises?: CruiseUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    peek?: PeekUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCruiseFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCruiseFollowingInput, UserUncheckedCreateWithoutCruiseFollowingInput>
  }

  export type UserCreateWithoutCruisesInput = {
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
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
    cruiseFollowing?: CruiseCreateNestedManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Cruise?: CruiseCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    Challenge?: ChallengeCreateNestedManyWithoutUserInput
    peek?: PeekCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCruisesInput = {
    userId?: number
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    Challenge?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    peek?: PeekUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCruisesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCruisesInput, UserUncheckedCreateWithoutCruisesInput>
  }

  export type PostCreateWithoutCruisesInput = {
    cursor?: string
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    content: string
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    user: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    challenge?: ChallengeCreateNestedOneWithoutPostInput
    Cruise?: CruiseCreateNestedOneWithoutPostsInput
    Challenge?: ChallengeCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCruisesInput = {
    id?: number
    cursor?: string
    userId: string
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    content: string
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    cruiseId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCruisesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCruisesInput, PostUncheckedCreateWithoutCruisesInput>
  }

  export type CommentCreateWithoutCruiseInput = {
    cursor?: string
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
    user: UserCreateNestedOneWithoutCommentInput
    post?: PostCreateNestedOneWithoutCommentsInput
    challenge?: ChallengeCreateNestedOneWithoutCommentsInput
    User?: UserCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutCruiseInput = {
    id?: number
    cursor?: string
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    userId: string
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    challengeId?: number | null
    userUserId?: number | null
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
  }

  export type CommentCreateOrConnectWithoutCruiseInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutCruiseInput, CommentUncheckedCreateWithoutCruiseInput>
  }

  export type CommentCreateManyCruiseInputEnvelope = {
    data: Enumerable<CommentCreateManyCruiseInput>
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCruiseInput = {
    cursor?: string
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    content: string
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    user: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    cruises?: CruiseCreateNestedManyWithoutPostInput
    challenge?: ChallengeCreateNestedOneWithoutPostInput
    Challenge?: ChallengeCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCruiseInput = {
    id?: number
    cursor?: string
    userId: string
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    content: string
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    cruises?: CruiseUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCruiseInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCruiseInput, PostUncheckedCreateWithoutCruiseInput>
  }

  export type PostCreateManyCruiseInputEnvelope = {
    data: Enumerable<PostCreateManyCruiseInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCruiseInput = {
    update: XOR<UserUpdateWithoutCruiseInput, UserUncheckedUpdateWithoutCruiseInput>
    create: XOR<UserCreateWithoutCruiseInput, UserUncheckedCreateWithoutCruiseInput>
  }

  export type UserUpdateWithoutCruiseInput = {
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
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
    Challenge?: ChallengeUpdateManyWithoutUserInput
    peek?: PeekUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutCruiseInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
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
    Challenge?: ChallengeUncheckedUpdateManyWithoutUserInput
    peek?: PeekUncheckedUpdateOneWithoutUserInput
  }

  export type UserUpsertWithWhereUniqueWithoutCruiseFollowingInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCruiseFollowingInput, UserUncheckedUpdateWithoutCruiseFollowingInput>
    create: XOR<UserCreateWithoutCruiseFollowingInput, UserUncheckedCreateWithoutCruiseFollowingInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCruiseFollowingInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCruiseFollowingInput, UserUncheckedUpdateWithoutCruiseFollowingInput>
  }

  export type UserUpdateManyWithWhereWithoutCruiseFollowingInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowersInput>
  }

  export type UserUpsertWithoutCruisesInput = {
    update: XOR<UserUpdateWithoutCruisesInput, UserUncheckedUpdateWithoutCruisesInput>
    create: XOR<UserCreateWithoutCruisesInput, UserUncheckedCreateWithoutCruisesInput>
  }

  export type UserUpdateWithoutCruisesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
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
    Cruise?: CruiseUpdateManyWithoutUserInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutUserInput
    peek?: PeekUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutCruisesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutUserInput
    peek?: PeekUncheckedUpdateOneWithoutUserInput
  }

  export type PostUpsertWithoutCruisesInput = {
    update: XOR<PostUpdateWithoutCruisesInput, PostUncheckedUpdateWithoutCruisesInput>
    create: XOR<PostCreateWithoutCruisesInput, PostUncheckedCreateWithoutCruisesInput>
  }

  export type PostUpdateWithoutCruisesInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutPostsInput
    comments?: CommentUpdateManyWithoutPostInput
    challenge?: ChallengeUpdateOneWithoutPostInput
    Cruise?: CruiseUpdateOneWithoutPostsInput
    Challenge?: ChallengeUpdateOneWithoutPostsInput
  }

  export type PostUncheckedUpdateWithoutCruisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    cruiseId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutPostInput
  }

  export type CommentUpsertWithWhereUniqueWithoutCruiseInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutCruiseInput, CommentUncheckedUpdateWithoutCruiseInput>
    create: XOR<CommentCreateWithoutCruiseInput, CommentUncheckedCreateWithoutCruiseInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutCruiseInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutCruiseInput, CommentUncheckedUpdateWithoutCruiseInput>
  }

  export type CommentUpdateManyWithWhereWithoutCruiseInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type PostUpsertWithWhereUniqueWithoutCruiseInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCruiseInput, PostUncheckedUpdateWithoutCruiseInput>
    create: XOR<PostCreateWithoutCruiseInput, PostUncheckedCreateWithoutCruiseInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCruiseInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCruiseInput, PostUncheckedUpdateWithoutCruiseInput>
  }

  export type PostUpdateManyWithWhereWithoutCruiseInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type UserCreateWithoutCommentInput = {
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutUserInput
    cruises?: CruiseCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    cruiseFollowing?: CruiseCreateNestedManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Cruise?: CruiseCreateNestedManyWithoutUserInput
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
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    cruises?: CruiseUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateNestedManyWithoutUserInput
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    user: UserCreateNestedOneWithoutPostsInput
    cruises?: CruiseCreateNestedManyWithoutPostInput
    challenge?: ChallengeCreateNestedOneWithoutPostInput
    Cruise?: CruiseCreateNestedOneWithoutPostsInput
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    cruiseId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    cruises?: CruiseUncheckedCreateNestedManyWithoutPostInput
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
    reaction?: InputJsonValue | null
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    hashtags?: ChallengeCreatehashtagsInput | Enumerable<string>
    kisses?: ChallengeCreatekissesInput | Enumerable<string>
    hearts?: ChallengeCreateheartsInput | Enumerable<string>
    hot?: ChallengeCreatehotInput | Enumerable<string>
    posts?: PostUncheckedCreateNestedManyWithoutChallengeInput
    Post?: PostUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutCommentsInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutCommentsInput, ChallengeUncheckedCreateWithoutCommentsInput>
  }

  export type CruiseCreateWithoutCommentsInput = {
    cursor?: string
    slogan: string
    attachmentType?: AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: string | null
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    user: UserCreateNestedOneWithoutCruiseInput
    followers?: UserCreateNestedManyWithoutCruiseFollowingInput
    User?: UserCreateNestedOneWithoutCruisesInput
    Post?: PostCreateNestedOneWithoutCruisesInput
    posts?: PostCreateNestedManyWithoutCruiseInput
  }

  export type CruiseUncheckedCreateWithoutCommentsInput = {
    id?: number
    cursor?: string
    slogan: string
    attachmentType?: AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: string | null
    userId: string
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    postId?: number | null
    kisses?: CruiseCreatekissesInput | Enumerable<string>
    hearts?: CruiseCreateheartsInput | Enumerable<string>
    hot?: CruiseCreatehotInput | Enumerable<string>
    hashtags?: CruiseCreatehashtagsInput | Enumerable<string>
    posts?: PostUncheckedCreateNestedManyWithoutCruiseInput
  }

  export type CruiseCreateOrConnectWithoutCommentsInput = {
    where: CruiseWhereUniqueInput
    create: XOR<CruiseCreateWithoutCommentsInput, CruiseUncheckedCreateWithoutCommentsInput>
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
    Cruise?: CruiseUpdateManyWithoutUserInput
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
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutUserInput
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutPostsInput
    cruises?: CruiseUpdateManyWithoutPostInput
    challenge?: ChallengeUpdateOneWithoutPostInput
    Cruise?: CruiseUpdateOneWithoutPostsInput
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    cruiseId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    cruises?: CruiseUncheckedUpdateManyWithoutPostInput
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
    reaction?: InputJsonValue | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
    posts?: PostUncheckedUpdateManyWithoutChallengeInput
    Post?: PostUncheckedUpdateManyWithoutChallengeInput
  }

  export type CruiseUpsertWithoutCommentsInput = {
    update: XOR<CruiseUpdateWithoutCommentsInput, CruiseUncheckedUpdateWithoutCommentsInput>
    create: XOR<CruiseCreateWithoutCommentsInput, CruiseUncheckedCreateWithoutCommentsInput>
  }

  export type CruiseUpdateWithoutCommentsInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCruiseInput
    followers?: UserUpdateManyWithoutCruiseFollowingInput
    User?: UserUpdateOneWithoutCruisesInput
    Post?: PostUpdateOneWithoutCruisesInput
    posts?: PostUpdateManyWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    posts?: PostUncheckedUpdateManyWithoutCruiseInput
  }

  export type UserCreateWithoutChallengeInput = {
    uid: string
    cursor?: string
    firstName: string
    lastName: string
    userName?: string | null
    bio?: string | null
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutUserInput
    cruises?: CruiseCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    cruiseFollowing?: CruiseCreateNestedManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Cruise?: CruiseCreateNestedManyWithoutUserInput
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
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    cruises?: CruiseUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateNestedManyWithoutUserInput
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
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutUserInput
    cruises?: CruiseCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    cruiseFollowing?: CruiseCreateNestedManyWithoutFollowersInput
    Cruise?: CruiseCreateNestedManyWithoutUserInput
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
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    cruises?: CruiseUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateNestedManyWithoutUserInput
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
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutUserInput
    cruises?: CruiseCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    cruiseFollowing?: CruiseCreateNestedManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Cruise?: CruiseCreateNestedManyWithoutUserInput
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
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    cruises?: CruiseUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateNestedManyWithoutUserInput
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
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
    user: UserCreateNestedOneWithoutCommentInput
    post?: PostCreateNestedOneWithoutCommentsInput
    cruise?: CruiseCreateNestedOneWithoutCommentsInput
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
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    cruiseId?: number | null
    userUserId?: number | null
    kisses?: CommentCreatekissesInput | Enumerable<string>
    hearts?: CommentCreateheartsInput | Enumerable<string>
    hot?: CommentCreatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    user: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    cruises?: CruiseCreateNestedManyWithoutPostInput
    challenge?: ChallengeCreateNestedOneWithoutPostInput
    Cruise?: CruiseCreateNestedOneWithoutPostsInput
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    cruiseId?: number | null
    hashtags?: PostCreatehashtagsInput | Enumerable<string>
    kisses?: PostCreatekissesInput | Enumerable<string>
    hearts?: PostCreateheartsInput | Enumerable<string>
    hot?: PostCreatehotInput | Enumerable<string>
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    cruises?: CruiseUncheckedCreateNestedManyWithoutPostInput
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
    Cruise?: CruiseUpdateManyWithoutUserInput
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
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutUserInput
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
    Cruise?: CruiseUpdateManyWithoutUserInput
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
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutUserInput
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
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutUserInput
    cruises?: CruiseCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    cruiseFollowing?: CruiseCreateNestedManyWithoutFollowersInput
    challengeFollowing?: ChallengeCreateNestedManyWithoutFollowersInput
    Cruise?: CruiseCreateNestedManyWithoutUserInput
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
    email: string
    imgUrl?: string | null
    created?: Date | string
    updated?: Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    cruises?: CruiseUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    Cruise?: CruiseUncheckedCreateNestedManyWithoutUserInput
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
    Cruise?: CruiseUpdateManyWithoutUserInput
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
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutUserInput
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    cruiseId?: number | null
    hashtags?: PostCreateManyhashtagsInput | Enumerable<string>
    kisses?: PostCreateManykissesInput | Enumerable<string>
    hearts?: PostCreateManyheartsInput | Enumerable<string>
    hot?: PostCreateManyhotInput | Enumerable<string>
  }

  export type CruiseCreateManyUserInput = {
    id?: number
    cursor?: string
    slogan: string
    attachmentType?: AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: string | null
    userId: string
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    kisses?: CruiseCreateManykissesInput | Enumerable<string>
    hearts?: CruiseCreateManyheartsInput | Enumerable<string>
    hot?: CruiseCreateManyhotInput | Enumerable<string>
    hashtags?: CruiseCreateManyhashtagsInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    challengeId?: number | null
    cruiseId?: number | null
    kisses?: CommentCreateManykissesInput | Enumerable<string>
    hearts?: CommentCreateManyheartsInput | Enumerable<string>
    hot?: CommentCreateManyhotInput | Enumerable<string>
  }

  export type ChallengeCreateManyUserInput = {
    id?: number
    cursor?: string
    challenge: string
    userId: string
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    reaction?: InputJsonValue | null
    start?: Date | string | null
    end?: Date | string | null
    created?: Date | string
    updated?: Date | string
    hashtags?: ChallengeCreateManyhashtagsInput | Enumerable<string>
    kisses?: ChallengeCreateManykissesInput | Enumerable<string>
    hearts?: ChallengeCreateManyheartsInput | Enumerable<string>
    hot?: ChallengeCreateManyhotInput | Enumerable<string>
  }

  export type UserUpdateWithoutFollowersInput = {
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
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
    Cruise?: CruiseUpdateManyWithoutUserInput
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
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutUserInput
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
    Cruise?: CruiseUpdateManyWithoutUserInput
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
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutUserInput
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    comments?: CommentUpdateManyWithoutPostInput
    cruises?: CruiseUpdateManyWithoutPostInput
    challenge?: ChallengeUpdateOneWithoutPostInput
    Cruise?: CruiseUpdateOneWithoutPostsInput
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    cruiseId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutPostInput
    cruises?: CruiseUncheckedUpdateManyWithoutPostInput
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    cruiseId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
  }

  export type CruiseUpdateWithoutUserInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCruiseInput
    followers?: UserUpdateManyWithoutCruiseFollowingInput
    Post?: PostUpdateOneWithoutCruisesInput
    comments?: CommentUpdateManyWithoutCruiseInput
    posts?: PostUpdateManyWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutCruiseInput
    posts?: PostUncheckedUpdateManyWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateManyWithoutCruisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
  }

  export type CommentUpdateWithoutUserInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCommentInput
    post?: PostUpdateOneWithoutCommentsInput
    challenge?: ChallengeUpdateOneWithoutCommentsInput
    cruise?: CruiseUpdateOneWithoutCommentsInput
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
    reaction?: InputJsonValue | null
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
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue | null
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
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    reaction?: InputJsonValue | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
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
    cursor?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCruiseInput
    User?: UserUpdateOneWithoutCruisesInput
    Post?: PostUpdateOneWithoutCruisesInput
    comments?: CommentUpdateManyWithoutCruiseInput
    posts?: PostUpdateManyWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutCruiseInput
    posts?: PostUncheckedUpdateManyWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateManyWithoutCruiseFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue | null
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
    cursor?: StringFieldUpdateOperationsInput | string
    challenge?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    reaction?: InputJsonValue | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: ChallengeUpdatehashtagsInput | Enumerable<string>
    kisses?: ChallengeUpdatekissesInput | Enumerable<string>
    hearts?: ChallengeUpdateheartsInput | Enumerable<string>
    hot?: ChallengeUpdatehotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
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
    reaction?: InputJsonValue | null
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
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    challengeId?: number | null
    cruiseId?: number | null
    userUserId?: number | null
    kisses?: CommentCreateManykissesInput | Enumerable<string>
    hearts?: CommentCreateManyheartsInput | Enumerable<string>
    hot?: CommentCreateManyhotInput | Enumerable<string>
  }

  export type CruiseCreateManyPostInput = {
    id?: number
    cursor?: string
    slogan: string
    attachmentType?: AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: string | null
    userId: string
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    userUserId?: number | null
    kisses?: CruiseCreateManykissesInput | Enumerable<string>
    hearts?: CruiseCreateManyheartsInput | Enumerable<string>
    hot?: CruiseCreateManyhotInput | Enumerable<string>
    hashtags?: CruiseCreateManyhashtagsInput | Enumerable<string>
  }

  export type CommentUpdateWithoutPostInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue | null
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
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue | null
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
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue | null
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
    cursor?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCruiseInput
    followers?: UserUpdateManyWithoutCruiseFollowingInput
    User?: UserUpdateOneWithoutCruisesInput
    comments?: CommentUpdateManyWithoutCruiseInput
    posts?: PostUpdateManyWithoutCruiseInput
  }

  export type CruiseUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentMeta?: InputJsonValue | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CruiseUpdatekissesInput | Enumerable<string>
    hearts?: CruiseUpdateheartsInput | Enumerable<string>
    hot?: CruiseUpdatehotInput | Enumerable<string>
    hashtags?: CruiseUpdatehashtagsInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutCruiseInput
    posts?: PostUncheckedUpdateManyWithoutCruiseInput
  }

  export type CommentCreateManyCruiseInput = {
    id?: number
    cursor?: string
    entityId: number
    entityType: EntityType
    comment: string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    attachmentUrl?: string | null
    userId: string
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    challengeId?: number | null
    userUserId?: number | null
    kisses?: CommentCreateManykissesInput | Enumerable<string>
    hearts?: CommentCreateManyheartsInput | Enumerable<string>
    hot?: CommentCreateManyhotInput | Enumerable<string>
  }

  export type PostCreateManyCruiseInput = {
    id?: number
    cursor?: string
    userId: string
    attachmentUrl?: string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: AttachmentType | null
    content: string
    created?: Date | string
    updated?: Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    challengeId?: number | null
    hashtags?: PostCreateManyhashtagsInput | Enumerable<string>
    kisses?: PostCreateManykissesInput | Enumerable<string>
    hearts?: PostCreateManyheartsInput | Enumerable<string>
    hot?: PostCreateManyhotInput | Enumerable<string>
  }

  export type UserUpdateWithoutCruiseFollowingInput = {
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
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
    Cruise?: CruiseUpdateManyWithoutUserInput
    Comment?: CommentUpdateManyWithoutUserInput
    Challenge?: ChallengeUpdateManyWithoutUserInput
    peek?: PeekUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutCruiseFollowingInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    Challenge?: ChallengeUncheckedUpdateManyWithoutUserInput
    peek?: PeekUncheckedUpdateOneWithoutUserInput
  }

  export type CommentUpdateWithoutCruiseInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCommentInput
    post?: PostUpdateOneWithoutCommentsInput
    challenge?: ChallengeUpdateOneWithoutCommentsInput
    User?: UserUpdateOneWithoutCommentInput
  }

  export type CommentUncheckedUpdateWithoutCruiseInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | EntityType
    comment?: StringFieldUpdateOperationsInput | string
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    challengeId?: NullableIntFieldUpdateOperationsInput | number | null
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
  }

  export type PostUpdateWithoutCruiseInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutPostsInput
    comments?: CommentUpdateManyWithoutPostInput
    cruises?: CruiseUpdateManyWithoutPostInput
    challenge?: ChallengeUpdateOneWithoutPostInput
    Challenge?: ChallengeUpdateOneWithoutPostsInput
  }

  export type PostUncheckedUpdateWithoutCruiseInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursor?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
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
    reaction?: InputJsonValue | null
    created?: Date | string
    updated?: Date | string
    postId?: number | null
    cruiseId?: number | null
    userUserId?: number | null
    kisses?: CommentCreateManykissesInput | Enumerable<string>
    hearts?: CommentCreateManyheartsInput | Enumerable<string>
    hot?: CommentCreateManyhotInput | Enumerable<string>
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    cruiseId?: number | null
    hashtags?: PostCreateManyhashtagsInput | Enumerable<string>
    kisses?: PostCreateManykissesInput | Enumerable<string>
    hearts?: PostCreateManyheartsInput | Enumerable<string>
    hot?: PostCreateManyhotInput | Enumerable<string>
  }

  export type UserUpdateWithoutChallengeFollowingInput = {
    uid?: StringFieldUpdateOperationsInput | string
    cursor?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
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
    Cruise?: CruiseUpdateManyWithoutUserInput
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
    email?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: InputJsonValue | null
    posts?: PostUncheckedUpdateManyWithoutUserInput
    cruises?: CruiseUncheckedUpdateManyWithoutUserInput
    comment?: CommentUncheckedUpdateManyWithoutUserInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserInput
    Cruise?: CruiseUncheckedUpdateManyWithoutUserInput
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
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutCommentInput
    post?: PostUpdateOneWithoutCommentsInput
    cruise?: CruiseUpdateOneWithoutCommentsInput
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
    reaction?: InputJsonValue | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    cruiseId?: NullableIntFieldUpdateOperationsInput | number | null
    userUserId?: NullableIntFieldUpdateOperationsInput | number | null
    kisses?: CommentUpdatekissesInput | Enumerable<string>
    hearts?: CommentUpdateheartsInput | Enumerable<string>
    hot?: CommentUpdatehotInput | Enumerable<string>
  }

  export type PostUpdateWithoutChallengeInput = {
    cursor?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentMeta?: InputJsonValue | null
    attachmentType?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    content?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutPostsInput
    comments?: CommentUpdateManyWithoutPostInput
    cruises?: CruiseUpdateManyWithoutPostInput
    challenge?: ChallengeUpdateOneWithoutPostInput
    Cruise?: CruiseUpdateOneWithoutPostsInput
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
    reaction?: InputJsonValue | null
    location?: InputJsonValue | null
    cruiseId?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: PostUpdatehashtagsInput | Enumerable<string>
    kisses?: PostUpdatekissesInput | Enumerable<string>
    hearts?: PostUpdateheartsInput | Enumerable<string>
    hot?: PostUpdatehotInput | Enumerable<string>
    comments?: CommentUncheckedUpdateManyWithoutPostInput
    cruises?: CruiseUncheckedUpdateManyWithoutPostInput
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