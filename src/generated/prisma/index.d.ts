
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model TipoUser
 * 
 */
export type TipoUser = $Result.DefaultSelection<Prisma.$TipoUserPayload>
/**
 * Model Propriedade
 * 
 */
export type Propriedade = $Result.DefaultSelection<Prisma.$PropriedadePayload>
/**
 * Model Historico
 * 
 */
export type Historico = $Result.DefaultSelection<Prisma.$HistoricoPayload>
/**
 * Model Precipitacao
 * 
 */
export type Precipitacao = $Result.DefaultSelection<Prisma.$PrecipitacaoPayload>
/**
 * Model Solo
 * 
 */
export type Solo = $Result.DefaultSelection<Prisma.$SoloPayload>
/**
 * Model Estimativas
 * 
 */
export type Estimativas = $Result.DefaultSelection<Prisma.$EstimativasPayload>
/**
 * Model Simulacao
 * 
 */
export type Simulacao = $Result.DefaultSelection<Prisma.$SimulacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoUser`: Exposes CRUD operations for the **TipoUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoUsers
    * const tipoUsers = await prisma.tipoUser.findMany()
    * ```
    */
  get tipoUser(): Prisma.TipoUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propriedade`: Exposes CRUD operations for the **Propriedade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Propriedades
    * const propriedades = await prisma.propriedade.findMany()
    * ```
    */
  get propriedade(): Prisma.PropriedadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historico`: Exposes CRUD operations for the **Historico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historicos
    * const historicos = await prisma.historico.findMany()
    * ```
    */
  get historico(): Prisma.HistoricoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.precipitacao`: Exposes CRUD operations for the **Precipitacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Precipitacaos
    * const precipitacaos = await prisma.precipitacao.findMany()
    * ```
    */
  get precipitacao(): Prisma.PrecipitacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solo`: Exposes CRUD operations for the **Solo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solos
    * const solos = await prisma.solo.findMany()
    * ```
    */
  get solo(): Prisma.SoloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estimativas`: Exposes CRUD operations for the **Estimativas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estimativas
    * const estimativas = await prisma.estimativas.findMany()
    * ```
    */
  get estimativas(): Prisma.EstimativasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.simulacao`: Exposes CRUD operations for the **Simulacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Simulacaos
    * const simulacaos = await prisma.simulacao.findMany()
    * ```
    */
  get simulacao(): Prisma.SimulacaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    TipoUser: 'TipoUser',
    Propriedade: 'Propriedade',
    Historico: 'Historico',
    Precipitacao: 'Precipitacao',
    Solo: 'Solo',
    Estimativas: 'Estimativas',
    Simulacao: 'Simulacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "tipoUser" | "propriedade" | "historico" | "precipitacao" | "solo" | "estimativas" | "simulacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      TipoUser: {
        payload: Prisma.$TipoUserPayload<ExtArgs>
        fields: Prisma.TipoUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoUserPayload>
          }
          findFirst: {
            args: Prisma.TipoUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoUserPayload>
          }
          findMany: {
            args: Prisma.TipoUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoUserPayload>[]
          }
          create: {
            args: Prisma.TipoUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoUserPayload>
          }
          createMany: {
            args: Prisma.TipoUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipoUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoUserPayload>
          }
          update: {
            args: Prisma.TipoUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoUserPayload>
          }
          deleteMany: {
            args: Prisma.TipoUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipoUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoUserPayload>
          }
          aggregate: {
            args: Prisma.TipoUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoUser>
          }
          groupBy: {
            args: Prisma.TipoUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoUserCountArgs<ExtArgs>
            result: $Utils.Optional<TipoUserCountAggregateOutputType> | number
          }
        }
      }
      Propriedade: {
        payload: Prisma.$PropriedadePayload<ExtArgs>
        fields: Prisma.PropriedadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropriedadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropriedadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload>
          }
          findFirst: {
            args: Prisma.PropriedadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropriedadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload>
          }
          findMany: {
            args: Prisma.PropriedadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload>[]
          }
          create: {
            args: Prisma.PropriedadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload>
          }
          createMany: {
            args: Prisma.PropriedadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PropriedadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload>
          }
          update: {
            args: Prisma.PropriedadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload>
          }
          deleteMany: {
            args: Prisma.PropriedadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropriedadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropriedadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload>
          }
          aggregate: {
            args: Prisma.PropriedadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropriedade>
          }
          groupBy: {
            args: Prisma.PropriedadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropriedadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropriedadeCountArgs<ExtArgs>
            result: $Utils.Optional<PropriedadeCountAggregateOutputType> | number
          }
        }
      }
      Historico: {
        payload: Prisma.$HistoricoPayload<ExtArgs>
        fields: Prisma.HistoricoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          findFirst: {
            args: Prisma.HistoricoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          findMany: {
            args: Prisma.HistoricoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>[]
          }
          create: {
            args: Prisma.HistoricoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          createMany: {
            args: Prisma.HistoricoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HistoricoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          update: {
            args: Prisma.HistoricoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          deleteMany: {
            args: Prisma.HistoricoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoricoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          aggregate: {
            args: Prisma.HistoricoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorico>
          }
          groupBy: {
            args: Prisma.HistoricoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricoCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoCountAggregateOutputType> | number
          }
        }
      }
      Precipitacao: {
        payload: Prisma.$PrecipitacaoPayload<ExtArgs>
        fields: Prisma.PrecipitacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrecipitacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecipitacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrecipitacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecipitacaoPayload>
          }
          findFirst: {
            args: Prisma.PrecipitacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecipitacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrecipitacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecipitacaoPayload>
          }
          findMany: {
            args: Prisma.PrecipitacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecipitacaoPayload>[]
          }
          create: {
            args: Prisma.PrecipitacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecipitacaoPayload>
          }
          createMany: {
            args: Prisma.PrecipitacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PrecipitacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecipitacaoPayload>
          }
          update: {
            args: Prisma.PrecipitacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecipitacaoPayload>
          }
          deleteMany: {
            args: Prisma.PrecipitacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrecipitacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrecipitacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecipitacaoPayload>
          }
          aggregate: {
            args: Prisma.PrecipitacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrecipitacao>
          }
          groupBy: {
            args: Prisma.PrecipitacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrecipitacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrecipitacaoCountArgs<ExtArgs>
            result: $Utils.Optional<PrecipitacaoCountAggregateOutputType> | number
          }
        }
      }
      Solo: {
        payload: Prisma.$SoloPayload<ExtArgs>
        fields: Prisma.SoloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SoloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SoloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoloPayload>
          }
          findFirst: {
            args: Prisma.SoloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SoloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoloPayload>
          }
          findMany: {
            args: Prisma.SoloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoloPayload>[]
          }
          create: {
            args: Prisma.SoloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoloPayload>
          }
          createMany: {
            args: Prisma.SoloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SoloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoloPayload>
          }
          update: {
            args: Prisma.SoloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoloPayload>
          }
          deleteMany: {
            args: Prisma.SoloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SoloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SoloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoloPayload>
          }
          aggregate: {
            args: Prisma.SoloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolo>
          }
          groupBy: {
            args: Prisma.SoloGroupByArgs<ExtArgs>
            result: $Utils.Optional<SoloGroupByOutputType>[]
          }
          count: {
            args: Prisma.SoloCountArgs<ExtArgs>
            result: $Utils.Optional<SoloCountAggregateOutputType> | number
          }
        }
      }
      Estimativas: {
        payload: Prisma.$EstimativasPayload<ExtArgs>
        fields: Prisma.EstimativasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstimativasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimativasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstimativasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimativasPayload>
          }
          findFirst: {
            args: Prisma.EstimativasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimativasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstimativasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimativasPayload>
          }
          findMany: {
            args: Prisma.EstimativasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimativasPayload>[]
          }
          create: {
            args: Prisma.EstimativasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimativasPayload>
          }
          createMany: {
            args: Prisma.EstimativasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EstimativasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimativasPayload>
          }
          update: {
            args: Prisma.EstimativasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimativasPayload>
          }
          deleteMany: {
            args: Prisma.EstimativasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstimativasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstimativasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimativasPayload>
          }
          aggregate: {
            args: Prisma.EstimativasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstimativas>
          }
          groupBy: {
            args: Prisma.EstimativasGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstimativasGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstimativasCountArgs<ExtArgs>
            result: $Utils.Optional<EstimativasCountAggregateOutputType> | number
          }
        }
      }
      Simulacao: {
        payload: Prisma.$SimulacaoPayload<ExtArgs>
        fields: Prisma.SimulacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SimulacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SimulacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulacaoPayload>
          }
          findFirst: {
            args: Prisma.SimulacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SimulacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulacaoPayload>
          }
          findMany: {
            args: Prisma.SimulacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulacaoPayload>[]
          }
          create: {
            args: Prisma.SimulacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulacaoPayload>
          }
          createMany: {
            args: Prisma.SimulacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SimulacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulacaoPayload>
          }
          update: {
            args: Prisma.SimulacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulacaoPayload>
          }
          deleteMany: {
            args: Prisma.SimulacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SimulacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SimulacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulacaoPayload>
          }
          aggregate: {
            args: Prisma.SimulacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSimulacao>
          }
          groupBy: {
            args: Prisma.SimulacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SimulacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SimulacaoCountArgs<ExtArgs>
            result: $Utils.Optional<SimulacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    tipoUser?: TipoUserOmit
    propriedade?: PropriedadeOmit
    historico?: HistoricoOmit
    precipitacao?: PrecipitacaoOmit
    solo?: SoloOmit
    estimativas?: EstimativasOmit
    simulacao?: SimulacaoOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TipoUserCountOutputType
   */

  export type TipoUserCountOutputType = {
    admins: number
  }

  export type TipoUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | TipoUserCountOutputTypeCountAdminsArgs
  }

  // Custom InputTypes
  /**
   * TipoUserCountOutputType without action
   */
  export type TipoUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoUserCountOutputType
     */
    select?: TipoUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoUserCountOutputType without action
   */
  export type TipoUserCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
  }


  /**
   * Count Type PropriedadeCountOutputType
   */

  export type PropriedadeCountOutputType = {
    estimativas: number
    simulacoes: number
    historicos: number
  }

  export type PropriedadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estimativas?: boolean | PropriedadeCountOutputTypeCountEstimativasArgs
    simulacoes?: boolean | PropriedadeCountOutputTypeCountSimulacoesArgs
    historicos?: boolean | PropriedadeCountOutputTypeCountHistoricosArgs
  }

  // Custom InputTypes
  /**
   * PropriedadeCountOutputType without action
   */
  export type PropriedadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeCountOutputType
     */
    select?: PropriedadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropriedadeCountOutputType without action
   */
  export type PropriedadeCountOutputTypeCountEstimativasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstimativasWhereInput
  }

  /**
   * PropriedadeCountOutputType without action
   */
  export type PropriedadeCountOutputTypeCountSimulacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimulacaoWhereInput
  }

  /**
   * PropriedadeCountOutputType without action
   */
  export type PropriedadeCountOutputTypeCountHistoricosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
    tipoUserId: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
    tipoUserId: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    cpf: string | null
    senha: string | null
    ativado: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    tipoUserId: number | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    cpf: string | null
    senha: string | null
    ativado: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    tipoUserId: number | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    cpf: number
    senha: number
    ativado: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    tipoUserId: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
    tipoUserId?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
    tipoUserId?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    senha?: true
    ativado?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    tipoUserId?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    senha?: true
    ativado?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    tipoUserId?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    senha?: true
    ativado?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    tipoUserId?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    nome: string
    email: string
    cpf: string
    senha: string
    ativado: boolean
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    tipoUserId: number | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    senha?: boolean
    ativado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    tipoUserId?: boolean
    tipoUser?: boolean | Admin$tipoUserArgs<ExtArgs>
    propriedade?: boolean | Admin$propriedadeArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    senha?: boolean
    ativado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    tipoUserId?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "cpf" | "senha" | "ativado" | "createdAt" | "updatedAt" | "deletedAt" | "tipoUserId", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoUser?: boolean | Admin$tipoUserArgs<ExtArgs>
    propriedade?: boolean | Admin$propriedadeArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      tipoUser: Prisma.$TipoUserPayload<ExtArgs> | null
      propriedade: Prisma.$PropriedadePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      cpf: string
      senha: string
      ativado: boolean
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
      tipoUserId: number | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipoUser<T extends Admin$tipoUserArgs<ExtArgs> = {}>(args?: Subset<T, Admin$tipoUserArgs<ExtArgs>>): Prisma__TipoUserClient<$Result.GetResult<Prisma.$TipoUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    propriedade<T extends Admin$propriedadeArgs<ExtArgs> = {}>(args?: Subset<T, Admin$propriedadeArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly nome: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly cpf: FieldRef<"Admin", 'String'>
    readonly senha: FieldRef<"Admin", 'String'>
    readonly ativado: FieldRef<"Admin", 'Boolean'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
    readonly deletedAt: FieldRef<"Admin", 'DateTime'>
    readonly tipoUserId: FieldRef<"Admin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.tipoUser
   */
  export type Admin$tipoUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoUser
     */
    select?: TipoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoUser
     */
    omit?: TipoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoUserInclude<ExtArgs> | null
    where?: TipoUserWhereInput
  }

  /**
   * Admin.propriedade
   */
  export type Admin$propriedadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propriedade
     */
    omit?: PropriedadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    where?: PropriedadeWhereInput
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model TipoUser
   */

  export type AggregateTipoUser = {
    _count: TipoUserCountAggregateOutputType | null
    _avg: TipoUserAvgAggregateOutputType | null
    _sum: TipoUserSumAggregateOutputType | null
    _min: TipoUserMinAggregateOutputType | null
    _max: TipoUserMaxAggregateOutputType | null
  }

  export type TipoUserAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoUserSumAggregateOutputType = {
    id: number | null
  }

  export type TipoUserMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    ativado: boolean | null
  }

  export type TipoUserMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    ativado: boolean | null
  }

  export type TipoUserCountAggregateOutputType = {
    id: number
    tipo: number
    descricao: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    ativado: number
    _all: number
  }


  export type TipoUserAvgAggregateInputType = {
    id?: true
  }

  export type TipoUserSumAggregateInputType = {
    id?: true
  }

  export type TipoUserMinAggregateInputType = {
    id?: true
    tipo?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    ativado?: true
  }

  export type TipoUserMaxAggregateInputType = {
    id?: true
    tipo?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    ativado?: true
  }

  export type TipoUserCountAggregateInputType = {
    id?: true
    tipo?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    ativado?: true
    _all?: true
  }

  export type TipoUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoUser to aggregate.
     */
    where?: TipoUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoUsers to fetch.
     */
    orderBy?: TipoUserOrderByWithRelationInput | TipoUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoUsers
    **/
    _count?: true | TipoUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoUserMaxAggregateInputType
  }

  export type GetTipoUserAggregateType<T extends TipoUserAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoUser[P]>
      : GetScalarType<T[P], AggregateTipoUser[P]>
  }




  export type TipoUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoUserWhereInput
    orderBy?: TipoUserOrderByWithAggregationInput | TipoUserOrderByWithAggregationInput[]
    by: TipoUserScalarFieldEnum[] | TipoUserScalarFieldEnum
    having?: TipoUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoUserCountAggregateInputType | true
    _avg?: TipoUserAvgAggregateInputType
    _sum?: TipoUserSumAggregateInputType
    _min?: TipoUserMinAggregateInputType
    _max?: TipoUserMaxAggregateInputType
  }

  export type TipoUserGroupByOutputType = {
    id: number
    tipo: string
    descricao: string | null
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    ativado: boolean
    _count: TipoUserCountAggregateOutputType | null
    _avg: TipoUserAvgAggregateOutputType | null
    _sum: TipoUserSumAggregateOutputType | null
    _min: TipoUserMinAggregateOutputType | null
    _max: TipoUserMaxAggregateOutputType | null
  }

  type GetTipoUserGroupByPayload<T extends TipoUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoUserGroupByOutputType[P]>
            : GetScalarType<T[P], TipoUserGroupByOutputType[P]>
        }
      >
    >


  export type TipoUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    ativado?: boolean
    admins?: boolean | TipoUser$adminsArgs<ExtArgs>
    _count?: boolean | TipoUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoUser"]>



  export type TipoUserSelectScalar = {
    id?: boolean
    tipo?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    ativado?: boolean
  }

  export type TipoUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "descricao" | "createdAt" | "updatedAt" | "deletedAt" | "ativado", ExtArgs["result"]["tipoUser"]>
  export type TipoUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | TipoUser$adminsArgs<ExtArgs>
    _count?: boolean | TipoUserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TipoUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoUser"
    objects: {
      admins: Prisma.$AdminPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
      descricao: string | null
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
      ativado: boolean
    }, ExtArgs["result"]["tipoUser"]>
    composites: {}
  }

  type TipoUserGetPayload<S extends boolean | null | undefined | TipoUserDefaultArgs> = $Result.GetResult<Prisma.$TipoUserPayload, S>

  type TipoUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoUserCountAggregateInputType | true
    }

  export interface TipoUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoUser'], meta: { name: 'TipoUser' } }
    /**
     * Find zero or one TipoUser that matches the filter.
     * @param {TipoUserFindUniqueArgs} args - Arguments to find a TipoUser
     * @example
     * // Get one TipoUser
     * const tipoUser = await prisma.tipoUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoUserFindUniqueArgs>(args: SelectSubset<T, TipoUserFindUniqueArgs<ExtArgs>>): Prisma__TipoUserClient<$Result.GetResult<Prisma.$TipoUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoUserFindUniqueOrThrowArgs} args - Arguments to find a TipoUser
     * @example
     * // Get one TipoUser
     * const tipoUser = await prisma.tipoUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoUserFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoUserClient<$Result.GetResult<Prisma.$TipoUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoUserFindFirstArgs} args - Arguments to find a TipoUser
     * @example
     * // Get one TipoUser
     * const tipoUser = await prisma.tipoUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoUserFindFirstArgs>(args?: SelectSubset<T, TipoUserFindFirstArgs<ExtArgs>>): Prisma__TipoUserClient<$Result.GetResult<Prisma.$TipoUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoUserFindFirstOrThrowArgs} args - Arguments to find a TipoUser
     * @example
     * // Get one TipoUser
     * const tipoUser = await prisma.tipoUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoUserFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoUserClient<$Result.GetResult<Prisma.$TipoUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoUsers
     * const tipoUsers = await prisma.tipoUser.findMany()
     * 
     * // Get first 10 TipoUsers
     * const tipoUsers = await prisma.tipoUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoUserWithIdOnly = await prisma.tipoUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoUserFindManyArgs>(args?: SelectSubset<T, TipoUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoUser.
     * @param {TipoUserCreateArgs} args - Arguments to create a TipoUser.
     * @example
     * // Create one TipoUser
     * const TipoUser = await prisma.tipoUser.create({
     *   data: {
     *     // ... data to create a TipoUser
     *   }
     * })
     * 
     */
    create<T extends TipoUserCreateArgs>(args: SelectSubset<T, TipoUserCreateArgs<ExtArgs>>): Prisma__TipoUserClient<$Result.GetResult<Prisma.$TipoUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoUsers.
     * @param {TipoUserCreateManyArgs} args - Arguments to create many TipoUsers.
     * @example
     * // Create many TipoUsers
     * const tipoUser = await prisma.tipoUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoUserCreateManyArgs>(args?: SelectSubset<T, TipoUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipoUser.
     * @param {TipoUserDeleteArgs} args - Arguments to delete one TipoUser.
     * @example
     * // Delete one TipoUser
     * const TipoUser = await prisma.tipoUser.delete({
     *   where: {
     *     // ... filter to delete one TipoUser
     *   }
     * })
     * 
     */
    delete<T extends TipoUserDeleteArgs>(args: SelectSubset<T, TipoUserDeleteArgs<ExtArgs>>): Prisma__TipoUserClient<$Result.GetResult<Prisma.$TipoUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoUser.
     * @param {TipoUserUpdateArgs} args - Arguments to update one TipoUser.
     * @example
     * // Update one TipoUser
     * const tipoUser = await prisma.tipoUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoUserUpdateArgs>(args: SelectSubset<T, TipoUserUpdateArgs<ExtArgs>>): Prisma__TipoUserClient<$Result.GetResult<Prisma.$TipoUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoUsers.
     * @param {TipoUserDeleteManyArgs} args - Arguments to filter TipoUsers to delete.
     * @example
     * // Delete a few TipoUsers
     * const { count } = await prisma.tipoUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoUserDeleteManyArgs>(args?: SelectSubset<T, TipoUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoUsers
     * const tipoUser = await prisma.tipoUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoUserUpdateManyArgs>(args: SelectSubset<T, TipoUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoUser.
     * @param {TipoUserUpsertArgs} args - Arguments to update or create a TipoUser.
     * @example
     * // Update or create a TipoUser
     * const tipoUser = await prisma.tipoUser.upsert({
     *   create: {
     *     // ... data to create a TipoUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoUser we want to update
     *   }
     * })
     */
    upsert<T extends TipoUserUpsertArgs>(args: SelectSubset<T, TipoUserUpsertArgs<ExtArgs>>): Prisma__TipoUserClient<$Result.GetResult<Prisma.$TipoUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoUserCountArgs} args - Arguments to filter TipoUsers to count.
     * @example
     * // Count the number of TipoUsers
     * const count = await prisma.tipoUser.count({
     *   where: {
     *     // ... the filter for the TipoUsers we want to count
     *   }
     * })
    **/
    count<T extends TipoUserCountArgs>(
      args?: Subset<T, TipoUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
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
    aggregate<T extends TipoUserAggregateArgs>(args: Subset<T, TipoUserAggregateArgs>): Prisma.PrismaPromise<GetTipoUserAggregateType<T>>

    /**
     * Group by TipoUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoUserGroupByArgs['orderBy'] }
        : { orderBy?: TipoUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoUser model
   */
  readonly fields: TipoUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admins<T extends TipoUser$adminsArgs<ExtArgs> = {}>(args?: Subset<T, TipoUser$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoUser model
   */
  interface TipoUserFieldRefs {
    readonly id: FieldRef<"TipoUser", 'Int'>
    readonly tipo: FieldRef<"TipoUser", 'String'>
    readonly descricao: FieldRef<"TipoUser", 'String'>
    readonly createdAt: FieldRef<"TipoUser", 'DateTime'>
    readonly updatedAt: FieldRef<"TipoUser", 'DateTime'>
    readonly deletedAt: FieldRef<"TipoUser", 'DateTime'>
    readonly ativado: FieldRef<"TipoUser", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TipoUser findUnique
   */
  export type TipoUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoUser
     */
    select?: TipoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoUser
     */
    omit?: TipoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoUserInclude<ExtArgs> | null
    /**
     * Filter, which TipoUser to fetch.
     */
    where: TipoUserWhereUniqueInput
  }

  /**
   * TipoUser findUniqueOrThrow
   */
  export type TipoUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoUser
     */
    select?: TipoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoUser
     */
    omit?: TipoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoUserInclude<ExtArgs> | null
    /**
     * Filter, which TipoUser to fetch.
     */
    where: TipoUserWhereUniqueInput
  }

  /**
   * TipoUser findFirst
   */
  export type TipoUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoUser
     */
    select?: TipoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoUser
     */
    omit?: TipoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoUserInclude<ExtArgs> | null
    /**
     * Filter, which TipoUser to fetch.
     */
    where?: TipoUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoUsers to fetch.
     */
    orderBy?: TipoUserOrderByWithRelationInput | TipoUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoUsers.
     */
    cursor?: TipoUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoUsers.
     */
    distinct?: TipoUserScalarFieldEnum | TipoUserScalarFieldEnum[]
  }

  /**
   * TipoUser findFirstOrThrow
   */
  export type TipoUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoUser
     */
    select?: TipoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoUser
     */
    omit?: TipoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoUserInclude<ExtArgs> | null
    /**
     * Filter, which TipoUser to fetch.
     */
    where?: TipoUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoUsers to fetch.
     */
    orderBy?: TipoUserOrderByWithRelationInput | TipoUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoUsers.
     */
    cursor?: TipoUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoUsers.
     */
    distinct?: TipoUserScalarFieldEnum | TipoUserScalarFieldEnum[]
  }

  /**
   * TipoUser findMany
   */
  export type TipoUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoUser
     */
    select?: TipoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoUser
     */
    omit?: TipoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoUserInclude<ExtArgs> | null
    /**
     * Filter, which TipoUsers to fetch.
     */
    where?: TipoUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoUsers to fetch.
     */
    orderBy?: TipoUserOrderByWithRelationInput | TipoUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoUsers.
     */
    cursor?: TipoUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoUsers.
     */
    skip?: number
    distinct?: TipoUserScalarFieldEnum | TipoUserScalarFieldEnum[]
  }

  /**
   * TipoUser create
   */
  export type TipoUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoUser
     */
    select?: TipoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoUser
     */
    omit?: TipoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoUserInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoUser.
     */
    data: XOR<TipoUserCreateInput, TipoUserUncheckedCreateInput>
  }

  /**
   * TipoUser createMany
   */
  export type TipoUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoUsers.
     */
    data: TipoUserCreateManyInput | TipoUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoUser update
   */
  export type TipoUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoUser
     */
    select?: TipoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoUser
     */
    omit?: TipoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoUserInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoUser.
     */
    data: XOR<TipoUserUpdateInput, TipoUserUncheckedUpdateInput>
    /**
     * Choose, which TipoUser to update.
     */
    where: TipoUserWhereUniqueInput
  }

  /**
   * TipoUser updateMany
   */
  export type TipoUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoUsers.
     */
    data: XOR<TipoUserUpdateManyMutationInput, TipoUserUncheckedUpdateManyInput>
    /**
     * Filter which TipoUsers to update
     */
    where?: TipoUserWhereInput
    /**
     * Limit how many TipoUsers to update.
     */
    limit?: number
  }

  /**
   * TipoUser upsert
   */
  export type TipoUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoUser
     */
    select?: TipoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoUser
     */
    omit?: TipoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoUserInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoUser to update in case it exists.
     */
    where: TipoUserWhereUniqueInput
    /**
     * In case the TipoUser found by the `where` argument doesn't exist, create a new TipoUser with this data.
     */
    create: XOR<TipoUserCreateInput, TipoUserUncheckedCreateInput>
    /**
     * In case the TipoUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoUserUpdateInput, TipoUserUncheckedUpdateInput>
  }

  /**
   * TipoUser delete
   */
  export type TipoUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoUser
     */
    select?: TipoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoUser
     */
    omit?: TipoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoUserInclude<ExtArgs> | null
    /**
     * Filter which TipoUser to delete.
     */
    where: TipoUserWhereUniqueInput
  }

  /**
   * TipoUser deleteMany
   */
  export type TipoUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoUsers to delete
     */
    where?: TipoUserWhereInput
    /**
     * Limit how many TipoUsers to delete.
     */
    limit?: number
  }

  /**
   * TipoUser.admins
   */
  export type TipoUser$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    cursor?: AdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * TipoUser without action
   */
  export type TipoUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoUser
     */
    select?: TipoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoUser
     */
    omit?: TipoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoUserInclude<ExtArgs> | null
  }


  /**
   * Model Propriedade
   */

  export type AggregatePropriedade = {
    _count: PropriedadeCountAggregateOutputType | null
    _avg: PropriedadeAvgAggregateOutputType | null
    _sum: PropriedadeSumAggregateOutputType | null
    _min: PropriedadeMinAggregateOutputType | null
    _max: PropriedadeMaxAggregateOutputType | null
  }

  export type PropriedadeAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    adminId: number | null
  }

  export type PropriedadeSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    adminId: number | null
  }

  export type PropriedadeMinAggregateOutputType = {
    id: number | null
    nomeProprietario: string | null
    nomePropriedade: string | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    simulacao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    adminId: number | null
  }

  export type PropriedadeMaxAggregateOutputType = {
    id: number | null
    nomeProprietario: string | null
    nomePropriedade: string | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    simulacao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    adminId: number | null
  }

  export type PropriedadeCountAggregateOutputType = {
    id: number
    nomeProprietario: number
    nomePropriedade: number
    latitude: number
    longitude: number
    altitude: number
    simulacao: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    adminId: number
    _all: number
  }


  export type PropriedadeAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    altitude?: true
    adminId?: true
  }

  export type PropriedadeSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    altitude?: true
    adminId?: true
  }

  export type PropriedadeMinAggregateInputType = {
    id?: true
    nomeProprietario?: true
    nomePropriedade?: true
    latitude?: true
    longitude?: true
    altitude?: true
    simulacao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    adminId?: true
  }

  export type PropriedadeMaxAggregateInputType = {
    id?: true
    nomeProprietario?: true
    nomePropriedade?: true
    latitude?: true
    longitude?: true
    altitude?: true
    simulacao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    adminId?: true
  }

  export type PropriedadeCountAggregateInputType = {
    id?: true
    nomeProprietario?: true
    nomePropriedade?: true
    latitude?: true
    longitude?: true
    altitude?: true
    simulacao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    adminId?: true
    _all?: true
  }

  export type PropriedadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Propriedade to aggregate.
     */
    where?: PropriedadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propriedades to fetch.
     */
    orderBy?: PropriedadeOrderByWithRelationInput | PropriedadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropriedadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propriedades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propriedades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Propriedades
    **/
    _count?: true | PropriedadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropriedadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropriedadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropriedadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropriedadeMaxAggregateInputType
  }

  export type GetPropriedadeAggregateType<T extends PropriedadeAggregateArgs> = {
        [P in keyof T & keyof AggregatePropriedade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropriedade[P]>
      : GetScalarType<T[P], AggregatePropriedade[P]>
  }




  export type PropriedadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropriedadeWhereInput
    orderBy?: PropriedadeOrderByWithAggregationInput | PropriedadeOrderByWithAggregationInput[]
    by: PropriedadeScalarFieldEnum[] | PropriedadeScalarFieldEnum
    having?: PropriedadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropriedadeCountAggregateInputType | true
    _avg?: PropriedadeAvgAggregateInputType
    _sum?: PropriedadeSumAggregateInputType
    _min?: PropriedadeMinAggregateInputType
    _max?: PropriedadeMaxAggregateInputType
  }

  export type PropriedadeGroupByOutputType = {
    id: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    altitude: number
    simulacao: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    adminId: number | null
    _count: PropriedadeCountAggregateOutputType | null
    _avg: PropriedadeAvgAggregateOutputType | null
    _sum: PropriedadeSumAggregateOutputType | null
    _min: PropriedadeMinAggregateOutputType | null
    _max: PropriedadeMaxAggregateOutputType | null
  }

  type GetPropriedadeGroupByPayload<T extends PropriedadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropriedadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropriedadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropriedadeGroupByOutputType[P]>
            : GetScalarType<T[P], PropriedadeGroupByOutputType[P]>
        }
      >
    >


  export type PropriedadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeProprietario?: boolean
    nomePropriedade?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
    simulacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    adminId?: boolean
    admin?: boolean | Propriedade$adminArgs<ExtArgs>
    estimativas?: boolean | Propriedade$estimativasArgs<ExtArgs>
    simulacoes?: boolean | Propriedade$simulacoesArgs<ExtArgs>
    historicos?: boolean | Propriedade$historicosArgs<ExtArgs>
    _count?: boolean | PropriedadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propriedade"]>



  export type PropriedadeSelectScalar = {
    id?: boolean
    nomeProprietario?: boolean
    nomePropriedade?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
    simulacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    adminId?: boolean
  }

  export type PropriedadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeProprietario" | "nomePropriedade" | "latitude" | "longitude" | "altitude" | "simulacao" | "createdAt" | "updatedAt" | "deletedAt" | "adminId", ExtArgs["result"]["propriedade"]>
  export type PropriedadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | Propriedade$adminArgs<ExtArgs>
    estimativas?: boolean | Propriedade$estimativasArgs<ExtArgs>
    simulacoes?: boolean | Propriedade$simulacoesArgs<ExtArgs>
    historicos?: boolean | Propriedade$historicosArgs<ExtArgs>
    _count?: boolean | PropriedadeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PropriedadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Propriedade"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
      estimativas: Prisma.$EstimativasPayload<ExtArgs>[]
      simulacoes: Prisma.$SimulacaoPayload<ExtArgs>[]
      historicos: Prisma.$HistoricoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeProprietario: string
      nomePropriedade: string
      latitude: number
      longitude: number
      altitude: number
      simulacao: string
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
      adminId: number | null
    }, ExtArgs["result"]["propriedade"]>
    composites: {}
  }

  type PropriedadeGetPayload<S extends boolean | null | undefined | PropriedadeDefaultArgs> = $Result.GetResult<Prisma.$PropriedadePayload, S>

  type PropriedadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropriedadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropriedadeCountAggregateInputType | true
    }

  export interface PropriedadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Propriedade'], meta: { name: 'Propriedade' } }
    /**
     * Find zero or one Propriedade that matches the filter.
     * @param {PropriedadeFindUniqueArgs} args - Arguments to find a Propriedade
     * @example
     * // Get one Propriedade
     * const propriedade = await prisma.propriedade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropriedadeFindUniqueArgs>(args: SelectSubset<T, PropriedadeFindUniqueArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Propriedade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropriedadeFindUniqueOrThrowArgs} args - Arguments to find a Propriedade
     * @example
     * // Get one Propriedade
     * const propriedade = await prisma.propriedade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropriedadeFindUniqueOrThrowArgs>(args: SelectSubset<T, PropriedadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Propriedade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeFindFirstArgs} args - Arguments to find a Propriedade
     * @example
     * // Get one Propriedade
     * const propriedade = await prisma.propriedade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropriedadeFindFirstArgs>(args?: SelectSubset<T, PropriedadeFindFirstArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Propriedade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeFindFirstOrThrowArgs} args - Arguments to find a Propriedade
     * @example
     * // Get one Propriedade
     * const propriedade = await prisma.propriedade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropriedadeFindFirstOrThrowArgs>(args?: SelectSubset<T, PropriedadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Propriedades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Propriedades
     * const propriedades = await prisma.propriedade.findMany()
     * 
     * // Get first 10 Propriedades
     * const propriedades = await prisma.propriedade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propriedadeWithIdOnly = await prisma.propriedade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropriedadeFindManyArgs>(args?: SelectSubset<T, PropriedadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Propriedade.
     * @param {PropriedadeCreateArgs} args - Arguments to create a Propriedade.
     * @example
     * // Create one Propriedade
     * const Propriedade = await prisma.propriedade.create({
     *   data: {
     *     // ... data to create a Propriedade
     *   }
     * })
     * 
     */
    create<T extends PropriedadeCreateArgs>(args: SelectSubset<T, PropriedadeCreateArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Propriedades.
     * @param {PropriedadeCreateManyArgs} args - Arguments to create many Propriedades.
     * @example
     * // Create many Propriedades
     * const propriedade = await prisma.propriedade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropriedadeCreateManyArgs>(args?: SelectSubset<T, PropriedadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Propriedade.
     * @param {PropriedadeDeleteArgs} args - Arguments to delete one Propriedade.
     * @example
     * // Delete one Propriedade
     * const Propriedade = await prisma.propriedade.delete({
     *   where: {
     *     // ... filter to delete one Propriedade
     *   }
     * })
     * 
     */
    delete<T extends PropriedadeDeleteArgs>(args: SelectSubset<T, PropriedadeDeleteArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Propriedade.
     * @param {PropriedadeUpdateArgs} args - Arguments to update one Propriedade.
     * @example
     * // Update one Propriedade
     * const propriedade = await prisma.propriedade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropriedadeUpdateArgs>(args: SelectSubset<T, PropriedadeUpdateArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Propriedades.
     * @param {PropriedadeDeleteManyArgs} args - Arguments to filter Propriedades to delete.
     * @example
     * // Delete a few Propriedades
     * const { count } = await prisma.propriedade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropriedadeDeleteManyArgs>(args?: SelectSubset<T, PropriedadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Propriedades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Propriedades
     * const propriedade = await prisma.propriedade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropriedadeUpdateManyArgs>(args: SelectSubset<T, PropriedadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Propriedade.
     * @param {PropriedadeUpsertArgs} args - Arguments to update or create a Propriedade.
     * @example
     * // Update or create a Propriedade
     * const propriedade = await prisma.propriedade.upsert({
     *   create: {
     *     // ... data to create a Propriedade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Propriedade we want to update
     *   }
     * })
     */
    upsert<T extends PropriedadeUpsertArgs>(args: SelectSubset<T, PropriedadeUpsertArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Propriedades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeCountArgs} args - Arguments to filter Propriedades to count.
     * @example
     * // Count the number of Propriedades
     * const count = await prisma.propriedade.count({
     *   where: {
     *     // ... the filter for the Propriedades we want to count
     *   }
     * })
    **/
    count<T extends PropriedadeCountArgs>(
      args?: Subset<T, PropriedadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropriedadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Propriedade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
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
    aggregate<T extends PropriedadeAggregateArgs>(args: Subset<T, PropriedadeAggregateArgs>): Prisma.PrismaPromise<GetPropriedadeAggregateType<T>>

    /**
     * Group by Propriedade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropriedadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropriedadeGroupByArgs['orderBy'] }
        : { orderBy?: PropriedadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropriedadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropriedadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Propriedade model
   */
  readonly fields: PropriedadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Propriedade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropriedadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends Propriedade$adminArgs<ExtArgs> = {}>(args?: Subset<T, Propriedade$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    estimativas<T extends Propriedade$estimativasArgs<ExtArgs> = {}>(args?: Subset<T, Propriedade$estimativasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    simulacoes<T extends Propriedade$simulacoesArgs<ExtArgs> = {}>(args?: Subset<T, Propriedade$simulacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historicos<T extends Propriedade$historicosArgs<ExtArgs> = {}>(args?: Subset<T, Propriedade$historicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Propriedade model
   */
  interface PropriedadeFieldRefs {
    readonly id: FieldRef<"Propriedade", 'Int'>
    readonly nomeProprietario: FieldRef<"Propriedade", 'String'>
    readonly nomePropriedade: FieldRef<"Propriedade", 'String'>
    readonly latitude: FieldRef<"Propriedade", 'Float'>
    readonly longitude: FieldRef<"Propriedade", 'Float'>
    readonly altitude: FieldRef<"Propriedade", 'Float'>
    readonly simulacao: FieldRef<"Propriedade", 'String'>
    readonly createdAt: FieldRef<"Propriedade", 'DateTime'>
    readonly updatedAt: FieldRef<"Propriedade", 'DateTime'>
    readonly deletedAt: FieldRef<"Propriedade", 'DateTime'>
    readonly adminId: FieldRef<"Propriedade", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Propriedade findUnique
   */
  export type PropriedadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propriedade
     */
    omit?: PropriedadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * Filter, which Propriedade to fetch.
     */
    where: PropriedadeWhereUniqueInput
  }

  /**
   * Propriedade findUniqueOrThrow
   */
  export type PropriedadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propriedade
     */
    omit?: PropriedadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * Filter, which Propriedade to fetch.
     */
    where: PropriedadeWhereUniqueInput
  }

  /**
   * Propriedade findFirst
   */
  export type PropriedadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propriedade
     */
    omit?: PropriedadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * Filter, which Propriedade to fetch.
     */
    where?: PropriedadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propriedades to fetch.
     */
    orderBy?: PropriedadeOrderByWithRelationInput | PropriedadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Propriedades.
     */
    cursor?: PropriedadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propriedades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propriedades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Propriedades.
     */
    distinct?: PropriedadeScalarFieldEnum | PropriedadeScalarFieldEnum[]
  }

  /**
   * Propriedade findFirstOrThrow
   */
  export type PropriedadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propriedade
     */
    omit?: PropriedadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * Filter, which Propriedade to fetch.
     */
    where?: PropriedadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propriedades to fetch.
     */
    orderBy?: PropriedadeOrderByWithRelationInput | PropriedadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Propriedades.
     */
    cursor?: PropriedadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propriedades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propriedades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Propriedades.
     */
    distinct?: PropriedadeScalarFieldEnum | PropriedadeScalarFieldEnum[]
  }

  /**
   * Propriedade findMany
   */
  export type PropriedadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propriedade
     */
    omit?: PropriedadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * Filter, which Propriedades to fetch.
     */
    where?: PropriedadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propriedades to fetch.
     */
    orderBy?: PropriedadeOrderByWithRelationInput | PropriedadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Propriedades.
     */
    cursor?: PropriedadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propriedades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propriedades.
     */
    skip?: number
    distinct?: PropriedadeScalarFieldEnum | PropriedadeScalarFieldEnum[]
  }

  /**
   * Propriedade create
   */
  export type PropriedadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propriedade
     */
    omit?: PropriedadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Propriedade.
     */
    data: XOR<PropriedadeCreateInput, PropriedadeUncheckedCreateInput>
  }

  /**
   * Propriedade createMany
   */
  export type PropriedadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Propriedades.
     */
    data: PropriedadeCreateManyInput | PropriedadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Propriedade update
   */
  export type PropriedadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propriedade
     */
    omit?: PropriedadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Propriedade.
     */
    data: XOR<PropriedadeUpdateInput, PropriedadeUncheckedUpdateInput>
    /**
     * Choose, which Propriedade to update.
     */
    where: PropriedadeWhereUniqueInput
  }

  /**
   * Propriedade updateMany
   */
  export type PropriedadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Propriedades.
     */
    data: XOR<PropriedadeUpdateManyMutationInput, PropriedadeUncheckedUpdateManyInput>
    /**
     * Filter which Propriedades to update
     */
    where?: PropriedadeWhereInput
    /**
     * Limit how many Propriedades to update.
     */
    limit?: number
  }

  /**
   * Propriedade upsert
   */
  export type PropriedadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propriedade
     */
    omit?: PropriedadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Propriedade to update in case it exists.
     */
    where: PropriedadeWhereUniqueInput
    /**
     * In case the Propriedade found by the `where` argument doesn't exist, create a new Propriedade with this data.
     */
    create: XOR<PropriedadeCreateInput, PropriedadeUncheckedCreateInput>
    /**
     * In case the Propriedade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropriedadeUpdateInput, PropriedadeUncheckedUpdateInput>
  }

  /**
   * Propriedade delete
   */
  export type PropriedadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propriedade
     */
    omit?: PropriedadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * Filter which Propriedade to delete.
     */
    where: PropriedadeWhereUniqueInput
  }

  /**
   * Propriedade deleteMany
   */
  export type PropriedadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Propriedades to delete
     */
    where?: PropriedadeWhereInput
    /**
     * Limit how many Propriedades to delete.
     */
    limit?: number
  }

  /**
   * Propriedade.admin
   */
  export type Propriedade$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Propriedade.estimativas
   */
  export type Propriedade$estimativasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimativas
     */
    select?: EstimativasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimativas
     */
    omit?: EstimativasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimativasInclude<ExtArgs> | null
    where?: EstimativasWhereInput
    orderBy?: EstimativasOrderByWithRelationInput | EstimativasOrderByWithRelationInput[]
    cursor?: EstimativasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstimativasScalarFieldEnum | EstimativasScalarFieldEnum[]
  }

  /**
   * Propriedade.simulacoes
   */
  export type Propriedade$simulacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulacao
     */
    select?: SimulacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulacao
     */
    omit?: SimulacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulacaoInclude<ExtArgs> | null
    where?: SimulacaoWhereInput
    orderBy?: SimulacaoOrderByWithRelationInput | SimulacaoOrderByWithRelationInput[]
    cursor?: SimulacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SimulacaoScalarFieldEnum | SimulacaoScalarFieldEnum[]
  }

  /**
   * Propriedade.historicos
   */
  export type Propriedade$historicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    where?: HistoricoWhereInput
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    cursor?: HistoricoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Propriedade without action
   */
  export type PropriedadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propriedade
     */
    omit?: PropriedadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
  }


  /**
   * Model Historico
   */

  export type AggregateHistorico = {
    _count: HistoricoCountAggregateOutputType | null
    _avg: HistoricoAvgAggregateOutputType | null
    _sum: HistoricoSumAggregateOutputType | null
    _min: HistoricoMinAggregateOutputType | null
    _max: HistoricoMaxAggregateOutputType | null
  }

  export type HistoricoAvgAggregateOutputType = {
    id: number | null
    valorSimulacao: number | null
    propriedadeId: number | null
  }

  export type HistoricoSumAggregateOutputType = {
    id: number | null
    valorSimulacao: number | null
    propriedadeId: number | null
  }

  export type HistoricoMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    valorSimulacao: number | null
    propriedadeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type HistoricoMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    valorSimulacao: number | null
    propriedadeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type HistoricoCountAggregateOutputType = {
    id: number
    descricao: number
    valorSimulacao: number
    propriedadeId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type HistoricoAvgAggregateInputType = {
    id?: true
    valorSimulacao?: true
    propriedadeId?: true
  }

  export type HistoricoSumAggregateInputType = {
    id?: true
    valorSimulacao?: true
    propriedadeId?: true
  }

  export type HistoricoMinAggregateInputType = {
    id?: true
    descricao?: true
    valorSimulacao?: true
    propriedadeId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type HistoricoMaxAggregateInputType = {
    id?: true
    descricao?: true
    valorSimulacao?: true
    propriedadeId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type HistoricoCountAggregateInputType = {
    id?: true
    descricao?: true
    valorSimulacao?: true
    propriedadeId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type HistoricoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historico to aggregate.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Historicos
    **/
    _count?: true | HistoricoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoricoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoricoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoMaxAggregateInputType
  }

  export type GetHistoricoAggregateType<T extends HistoricoAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorico[P]>
      : GetScalarType<T[P], AggregateHistorico[P]>
  }




  export type HistoricoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
    orderBy?: HistoricoOrderByWithAggregationInput | HistoricoOrderByWithAggregationInput[]
    by: HistoricoScalarFieldEnum[] | HistoricoScalarFieldEnum
    having?: HistoricoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoCountAggregateInputType | true
    _avg?: HistoricoAvgAggregateInputType
    _sum?: HistoricoSumAggregateInputType
    _min?: HistoricoMinAggregateInputType
    _max?: HistoricoMaxAggregateInputType
  }

  export type HistoricoGroupByOutputType = {
    id: number
    descricao: string | null
    valorSimulacao: number
    propriedadeId: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: HistoricoCountAggregateOutputType | null
    _avg: HistoricoAvgAggregateOutputType | null
    _sum: HistoricoSumAggregateOutputType | null
    _min: HistoricoMinAggregateOutputType | null
    _max: HistoricoMaxAggregateOutputType | null
  }

  type GetHistoricoGroupByPayload<T extends HistoricoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoGroupByOutputType[P]>
        }
      >
    >


  export type HistoricoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    valorSimulacao?: boolean
    propriedadeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    propriedade?: boolean | PropriedadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico"]>



  export type HistoricoSelectScalar = {
    id?: boolean
    descricao?: boolean
    valorSimulacao?: boolean
    propriedadeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type HistoricoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "valorSimulacao" | "propriedadeId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["historico"]>
  export type HistoricoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propriedade?: boolean | PropriedadeDefaultArgs<ExtArgs>
  }

  export type $HistoricoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Historico"
    objects: {
      propriedade: Prisma.$PropriedadePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string | null
      valorSimulacao: number
      propriedadeId: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["historico"]>
    composites: {}
  }

  type HistoricoGetPayload<S extends boolean | null | undefined | HistoricoDefaultArgs> = $Result.GetResult<Prisma.$HistoricoPayload, S>

  type HistoricoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoricoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricoCountAggregateInputType | true
    }

  export interface HistoricoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Historico'], meta: { name: 'Historico' } }
    /**
     * Find zero or one Historico that matches the filter.
     * @param {HistoricoFindUniqueArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricoFindUniqueArgs>(args: SelectSubset<T, HistoricoFindUniqueArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoricoFindUniqueOrThrowArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricoFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindFirstArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricoFindFirstArgs>(args?: SelectSubset<T, HistoricoFindFirstArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindFirstOrThrowArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricoFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historicos
     * const historicos = await prisma.historico.findMany()
     * 
     * // Get first 10 Historicos
     * const historicos = await prisma.historico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicoWithIdOnly = await prisma.historico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoricoFindManyArgs>(args?: SelectSubset<T, HistoricoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historico.
     * @param {HistoricoCreateArgs} args - Arguments to create a Historico.
     * @example
     * // Create one Historico
     * const Historico = await prisma.historico.create({
     *   data: {
     *     // ... data to create a Historico
     *   }
     * })
     * 
     */
    create<T extends HistoricoCreateArgs>(args: SelectSubset<T, HistoricoCreateArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historicos.
     * @param {HistoricoCreateManyArgs} args - Arguments to create many Historicos.
     * @example
     * // Create many Historicos
     * const historico = await prisma.historico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricoCreateManyArgs>(args?: SelectSubset<T, HistoricoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Historico.
     * @param {HistoricoDeleteArgs} args - Arguments to delete one Historico.
     * @example
     * // Delete one Historico
     * const Historico = await prisma.historico.delete({
     *   where: {
     *     // ... filter to delete one Historico
     *   }
     * })
     * 
     */
    delete<T extends HistoricoDeleteArgs>(args: SelectSubset<T, HistoricoDeleteArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historico.
     * @param {HistoricoUpdateArgs} args - Arguments to update one Historico.
     * @example
     * // Update one Historico
     * const historico = await prisma.historico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricoUpdateArgs>(args: SelectSubset<T, HistoricoUpdateArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historicos.
     * @param {HistoricoDeleteManyArgs} args - Arguments to filter Historicos to delete.
     * @example
     * // Delete a few Historicos
     * const { count } = await prisma.historico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricoDeleteManyArgs>(args?: SelectSubset<T, HistoricoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historicos
     * const historico = await prisma.historico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricoUpdateManyArgs>(args: SelectSubset<T, HistoricoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Historico.
     * @param {HistoricoUpsertArgs} args - Arguments to update or create a Historico.
     * @example
     * // Update or create a Historico
     * const historico = await prisma.historico.upsert({
     *   create: {
     *     // ... data to create a Historico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historico we want to update
     *   }
     * })
     */
    upsert<T extends HistoricoUpsertArgs>(args: SelectSubset<T, HistoricoUpsertArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoCountArgs} args - Arguments to filter Historicos to count.
     * @example
     * // Count the number of Historicos
     * const count = await prisma.historico.count({
     *   where: {
     *     // ... the filter for the Historicos we want to count
     *   }
     * })
    **/
    count<T extends HistoricoCountArgs>(
      args?: Subset<T, HistoricoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
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
    aggregate<T extends HistoricoAggregateArgs>(args: Subset<T, HistoricoAggregateArgs>): Prisma.PrismaPromise<GetHistoricoAggregateType<T>>

    /**
     * Group by Historico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoricoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricoGroupByArgs['orderBy'] }
        : { orderBy?: HistoricoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoricoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Historico model
   */
  readonly fields: HistoricoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Historico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propriedade<T extends PropriedadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropriedadeDefaultArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Historico model
   */
  interface HistoricoFieldRefs {
    readonly id: FieldRef<"Historico", 'Int'>
    readonly descricao: FieldRef<"Historico", 'String'>
    readonly valorSimulacao: FieldRef<"Historico", 'Float'>
    readonly propriedadeId: FieldRef<"Historico", 'Int'>
    readonly createdAt: FieldRef<"Historico", 'DateTime'>
    readonly updatedAt: FieldRef<"Historico", 'DateTime'>
    readonly deletedAt: FieldRef<"Historico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Historico findUnique
   */
  export type HistoricoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico findUniqueOrThrow
   */
  export type HistoricoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico findFirst
   */
  export type HistoricoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historicos.
     */
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico findFirstOrThrow
   */
  export type HistoricoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historicos.
     */
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico findMany
   */
  export type HistoricoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historicos to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico create
   */
  export type HistoricoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The data needed to create a Historico.
     */
    data: XOR<HistoricoCreateInput, HistoricoUncheckedCreateInput>
  }

  /**
   * Historico createMany
   */
  export type HistoricoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Historicos.
     */
    data: HistoricoCreateManyInput | HistoricoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Historico update
   */
  export type HistoricoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The data needed to update a Historico.
     */
    data: XOR<HistoricoUpdateInput, HistoricoUncheckedUpdateInput>
    /**
     * Choose, which Historico to update.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico updateMany
   */
  export type HistoricoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Historicos.
     */
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyInput>
    /**
     * Filter which Historicos to update
     */
    where?: HistoricoWhereInput
    /**
     * Limit how many Historicos to update.
     */
    limit?: number
  }

  /**
   * Historico upsert
   */
  export type HistoricoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The filter to search for the Historico to update in case it exists.
     */
    where: HistoricoWhereUniqueInput
    /**
     * In case the Historico found by the `where` argument doesn't exist, create a new Historico with this data.
     */
    create: XOR<HistoricoCreateInput, HistoricoUncheckedCreateInput>
    /**
     * In case the Historico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricoUpdateInput, HistoricoUncheckedUpdateInput>
  }

  /**
   * Historico delete
   */
  export type HistoricoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter which Historico to delete.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico deleteMany
   */
  export type HistoricoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historicos to delete
     */
    where?: HistoricoWhereInput
    /**
     * Limit how many Historicos to delete.
     */
    limit?: number
  }

  /**
   * Historico without action
   */
  export type HistoricoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historico
     */
    omit?: HistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
  }


  /**
   * Model Precipitacao
   */

  export type AggregatePrecipitacao = {
    _count: PrecipitacaoCountAggregateOutputType | null
    _avg: PrecipitacaoAvgAggregateOutputType | null
    _sum: PrecipitacaoSumAggregateOutputType | null
    _min: PrecipitacaoMinAggregateOutputType | null
    _max: PrecipitacaoMaxAggregateOutputType | null
  }

  export type PrecipitacaoAvgAggregateOutputType = {
    id: number | null
    mmAno: number | null
    chuvas: number | null
    mmDia: number | null
    cvDia: number | null
    mmMes: number | null
    cvMes: number | null
  }

  export type PrecipitacaoSumAggregateOutputType = {
    id: number | null
    mmAno: number | null
    chuvas: number | null
    mmDia: number | null
    cvDia: number | null
    mmMes: number | null
    cvMes: number | null
  }

  export type PrecipitacaoMinAggregateOutputType = {
    id: number | null
    mmAno: number | null
    chuvas: number | null
    mmDia: number | null
    cvDia: number | null
    mmMes: number | null
    cvMes: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PrecipitacaoMaxAggregateOutputType = {
    id: number | null
    mmAno: number | null
    chuvas: number | null
    mmDia: number | null
    cvDia: number | null
    mmMes: number | null
    cvMes: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PrecipitacaoCountAggregateOutputType = {
    id: number
    mmAno: number
    chuvas: number
    mmDia: number
    cvDia: number
    mmMes: number
    cvMes: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PrecipitacaoAvgAggregateInputType = {
    id?: true
    mmAno?: true
    chuvas?: true
    mmDia?: true
    cvDia?: true
    mmMes?: true
    cvMes?: true
  }

  export type PrecipitacaoSumAggregateInputType = {
    id?: true
    mmAno?: true
    chuvas?: true
    mmDia?: true
    cvDia?: true
    mmMes?: true
    cvMes?: true
  }

  export type PrecipitacaoMinAggregateInputType = {
    id?: true
    mmAno?: true
    chuvas?: true
    mmDia?: true
    cvDia?: true
    mmMes?: true
    cvMes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PrecipitacaoMaxAggregateInputType = {
    id?: true
    mmAno?: true
    chuvas?: true
    mmDia?: true
    cvDia?: true
    mmMes?: true
    cvMes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PrecipitacaoCountAggregateInputType = {
    id?: true
    mmAno?: true
    chuvas?: true
    mmDia?: true
    cvDia?: true
    mmMes?: true
    cvMes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PrecipitacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Precipitacao to aggregate.
     */
    where?: PrecipitacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Precipitacaos to fetch.
     */
    orderBy?: PrecipitacaoOrderByWithRelationInput | PrecipitacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrecipitacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Precipitacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Precipitacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Precipitacaos
    **/
    _count?: true | PrecipitacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrecipitacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrecipitacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrecipitacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrecipitacaoMaxAggregateInputType
  }

  export type GetPrecipitacaoAggregateType<T extends PrecipitacaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePrecipitacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrecipitacao[P]>
      : GetScalarType<T[P], AggregatePrecipitacao[P]>
  }




  export type PrecipitacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrecipitacaoWhereInput
    orderBy?: PrecipitacaoOrderByWithAggregationInput | PrecipitacaoOrderByWithAggregationInput[]
    by: PrecipitacaoScalarFieldEnum[] | PrecipitacaoScalarFieldEnum
    having?: PrecipitacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrecipitacaoCountAggregateInputType | true
    _avg?: PrecipitacaoAvgAggregateInputType
    _sum?: PrecipitacaoSumAggregateInputType
    _min?: PrecipitacaoMinAggregateInputType
    _max?: PrecipitacaoMaxAggregateInputType
  }

  export type PrecipitacaoGroupByOutputType = {
    id: number
    mmAno: number
    chuvas: number
    mmDia: number
    cvDia: number
    mmMes: number
    cvMes: number
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: PrecipitacaoCountAggregateOutputType | null
    _avg: PrecipitacaoAvgAggregateOutputType | null
    _sum: PrecipitacaoSumAggregateOutputType | null
    _min: PrecipitacaoMinAggregateOutputType | null
    _max: PrecipitacaoMaxAggregateOutputType | null
  }

  type GetPrecipitacaoGroupByPayload<T extends PrecipitacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrecipitacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrecipitacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrecipitacaoGroupByOutputType[P]>
            : GetScalarType<T[P], PrecipitacaoGroupByOutputType[P]>
        }
      >
    >


  export type PrecipitacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mmAno?: boolean
    chuvas?: boolean
    mmDia?: boolean
    cvDia?: boolean
    mmMes?: boolean
    cvMes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["precipitacao"]>



  export type PrecipitacaoSelectScalar = {
    id?: boolean
    mmAno?: boolean
    chuvas?: boolean
    mmDia?: boolean
    cvDia?: boolean
    mmMes?: boolean
    cvMes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PrecipitacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mmAno" | "chuvas" | "mmDia" | "cvDia" | "mmMes" | "cvMes" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["precipitacao"]>

  export type $PrecipitacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Precipitacao"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mmAno: number
      chuvas: number
      mmDia: number
      cvDia: number
      mmMes: number
      cvMes: number
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["precipitacao"]>
    composites: {}
  }

  type PrecipitacaoGetPayload<S extends boolean | null | undefined | PrecipitacaoDefaultArgs> = $Result.GetResult<Prisma.$PrecipitacaoPayload, S>

  type PrecipitacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrecipitacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrecipitacaoCountAggregateInputType | true
    }

  export interface PrecipitacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Precipitacao'], meta: { name: 'Precipitacao' } }
    /**
     * Find zero or one Precipitacao that matches the filter.
     * @param {PrecipitacaoFindUniqueArgs} args - Arguments to find a Precipitacao
     * @example
     * // Get one Precipitacao
     * const precipitacao = await prisma.precipitacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrecipitacaoFindUniqueArgs>(args: SelectSubset<T, PrecipitacaoFindUniqueArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Precipitacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrecipitacaoFindUniqueOrThrowArgs} args - Arguments to find a Precipitacao
     * @example
     * // Get one Precipitacao
     * const precipitacao = await prisma.precipitacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrecipitacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PrecipitacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Precipitacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecipitacaoFindFirstArgs} args - Arguments to find a Precipitacao
     * @example
     * // Get one Precipitacao
     * const precipitacao = await prisma.precipitacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrecipitacaoFindFirstArgs>(args?: SelectSubset<T, PrecipitacaoFindFirstArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Precipitacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecipitacaoFindFirstOrThrowArgs} args - Arguments to find a Precipitacao
     * @example
     * // Get one Precipitacao
     * const precipitacao = await prisma.precipitacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrecipitacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PrecipitacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Precipitacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecipitacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Precipitacaos
     * const precipitacaos = await prisma.precipitacao.findMany()
     * 
     * // Get first 10 Precipitacaos
     * const precipitacaos = await prisma.precipitacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const precipitacaoWithIdOnly = await prisma.precipitacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrecipitacaoFindManyArgs>(args?: SelectSubset<T, PrecipitacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Precipitacao.
     * @param {PrecipitacaoCreateArgs} args - Arguments to create a Precipitacao.
     * @example
     * // Create one Precipitacao
     * const Precipitacao = await prisma.precipitacao.create({
     *   data: {
     *     // ... data to create a Precipitacao
     *   }
     * })
     * 
     */
    create<T extends PrecipitacaoCreateArgs>(args: SelectSubset<T, PrecipitacaoCreateArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Precipitacaos.
     * @param {PrecipitacaoCreateManyArgs} args - Arguments to create many Precipitacaos.
     * @example
     * // Create many Precipitacaos
     * const precipitacao = await prisma.precipitacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrecipitacaoCreateManyArgs>(args?: SelectSubset<T, PrecipitacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Precipitacao.
     * @param {PrecipitacaoDeleteArgs} args - Arguments to delete one Precipitacao.
     * @example
     * // Delete one Precipitacao
     * const Precipitacao = await prisma.precipitacao.delete({
     *   where: {
     *     // ... filter to delete one Precipitacao
     *   }
     * })
     * 
     */
    delete<T extends PrecipitacaoDeleteArgs>(args: SelectSubset<T, PrecipitacaoDeleteArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Precipitacao.
     * @param {PrecipitacaoUpdateArgs} args - Arguments to update one Precipitacao.
     * @example
     * // Update one Precipitacao
     * const precipitacao = await prisma.precipitacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrecipitacaoUpdateArgs>(args: SelectSubset<T, PrecipitacaoUpdateArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Precipitacaos.
     * @param {PrecipitacaoDeleteManyArgs} args - Arguments to filter Precipitacaos to delete.
     * @example
     * // Delete a few Precipitacaos
     * const { count } = await prisma.precipitacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrecipitacaoDeleteManyArgs>(args?: SelectSubset<T, PrecipitacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Precipitacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecipitacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Precipitacaos
     * const precipitacao = await prisma.precipitacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrecipitacaoUpdateManyArgs>(args: SelectSubset<T, PrecipitacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Precipitacao.
     * @param {PrecipitacaoUpsertArgs} args - Arguments to update or create a Precipitacao.
     * @example
     * // Update or create a Precipitacao
     * const precipitacao = await prisma.precipitacao.upsert({
     *   create: {
     *     // ... data to create a Precipitacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Precipitacao we want to update
     *   }
     * })
     */
    upsert<T extends PrecipitacaoUpsertArgs>(args: SelectSubset<T, PrecipitacaoUpsertArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Precipitacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecipitacaoCountArgs} args - Arguments to filter Precipitacaos to count.
     * @example
     * // Count the number of Precipitacaos
     * const count = await prisma.precipitacao.count({
     *   where: {
     *     // ... the filter for the Precipitacaos we want to count
     *   }
     * })
    **/
    count<T extends PrecipitacaoCountArgs>(
      args?: Subset<T, PrecipitacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrecipitacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Precipitacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecipitacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
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
    aggregate<T extends PrecipitacaoAggregateArgs>(args: Subset<T, PrecipitacaoAggregateArgs>): Prisma.PrismaPromise<GetPrecipitacaoAggregateType<T>>

    /**
     * Group by Precipitacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecipitacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrecipitacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrecipitacaoGroupByArgs['orderBy'] }
        : { orderBy?: PrecipitacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrecipitacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrecipitacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Precipitacao model
   */
  readonly fields: PrecipitacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Precipitacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrecipitacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Precipitacao model
   */
  interface PrecipitacaoFieldRefs {
    readonly id: FieldRef<"Precipitacao", 'Int'>
    readonly mmAno: FieldRef<"Precipitacao", 'Float'>
    readonly chuvas: FieldRef<"Precipitacao", 'Float'>
    readonly mmDia: FieldRef<"Precipitacao", 'Float'>
    readonly cvDia: FieldRef<"Precipitacao", 'Float'>
    readonly mmMes: FieldRef<"Precipitacao", 'Float'>
    readonly cvMes: FieldRef<"Precipitacao", 'Float'>
    readonly createdAt: FieldRef<"Precipitacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Precipitacao", 'DateTime'>
    readonly deletedAt: FieldRef<"Precipitacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Precipitacao findUnique
   */
  export type PrecipitacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precipitacao
     */
    select?: PrecipitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precipitacao
     */
    omit?: PrecipitacaoOmit<ExtArgs> | null
    /**
     * Filter, which Precipitacao to fetch.
     */
    where: PrecipitacaoWhereUniqueInput
  }

  /**
   * Precipitacao findUniqueOrThrow
   */
  export type PrecipitacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precipitacao
     */
    select?: PrecipitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precipitacao
     */
    omit?: PrecipitacaoOmit<ExtArgs> | null
    /**
     * Filter, which Precipitacao to fetch.
     */
    where: PrecipitacaoWhereUniqueInput
  }

  /**
   * Precipitacao findFirst
   */
  export type PrecipitacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precipitacao
     */
    select?: PrecipitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precipitacao
     */
    omit?: PrecipitacaoOmit<ExtArgs> | null
    /**
     * Filter, which Precipitacao to fetch.
     */
    where?: PrecipitacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Precipitacaos to fetch.
     */
    orderBy?: PrecipitacaoOrderByWithRelationInput | PrecipitacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Precipitacaos.
     */
    cursor?: PrecipitacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Precipitacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Precipitacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Precipitacaos.
     */
    distinct?: PrecipitacaoScalarFieldEnum | PrecipitacaoScalarFieldEnum[]
  }

  /**
   * Precipitacao findFirstOrThrow
   */
  export type PrecipitacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precipitacao
     */
    select?: PrecipitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precipitacao
     */
    omit?: PrecipitacaoOmit<ExtArgs> | null
    /**
     * Filter, which Precipitacao to fetch.
     */
    where?: PrecipitacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Precipitacaos to fetch.
     */
    orderBy?: PrecipitacaoOrderByWithRelationInput | PrecipitacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Precipitacaos.
     */
    cursor?: PrecipitacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Precipitacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Precipitacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Precipitacaos.
     */
    distinct?: PrecipitacaoScalarFieldEnum | PrecipitacaoScalarFieldEnum[]
  }

  /**
   * Precipitacao findMany
   */
  export type PrecipitacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precipitacao
     */
    select?: PrecipitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precipitacao
     */
    omit?: PrecipitacaoOmit<ExtArgs> | null
    /**
     * Filter, which Precipitacaos to fetch.
     */
    where?: PrecipitacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Precipitacaos to fetch.
     */
    orderBy?: PrecipitacaoOrderByWithRelationInput | PrecipitacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Precipitacaos.
     */
    cursor?: PrecipitacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Precipitacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Precipitacaos.
     */
    skip?: number
    distinct?: PrecipitacaoScalarFieldEnum | PrecipitacaoScalarFieldEnum[]
  }

  /**
   * Precipitacao create
   */
  export type PrecipitacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precipitacao
     */
    select?: PrecipitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precipitacao
     */
    omit?: PrecipitacaoOmit<ExtArgs> | null
    /**
     * The data needed to create a Precipitacao.
     */
    data: XOR<PrecipitacaoCreateInput, PrecipitacaoUncheckedCreateInput>
  }

  /**
   * Precipitacao createMany
   */
  export type PrecipitacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Precipitacaos.
     */
    data: PrecipitacaoCreateManyInput | PrecipitacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Precipitacao update
   */
  export type PrecipitacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precipitacao
     */
    select?: PrecipitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precipitacao
     */
    omit?: PrecipitacaoOmit<ExtArgs> | null
    /**
     * The data needed to update a Precipitacao.
     */
    data: XOR<PrecipitacaoUpdateInput, PrecipitacaoUncheckedUpdateInput>
    /**
     * Choose, which Precipitacao to update.
     */
    where: PrecipitacaoWhereUniqueInput
  }

  /**
   * Precipitacao updateMany
   */
  export type PrecipitacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Precipitacaos.
     */
    data: XOR<PrecipitacaoUpdateManyMutationInput, PrecipitacaoUncheckedUpdateManyInput>
    /**
     * Filter which Precipitacaos to update
     */
    where?: PrecipitacaoWhereInput
    /**
     * Limit how many Precipitacaos to update.
     */
    limit?: number
  }

  /**
   * Precipitacao upsert
   */
  export type PrecipitacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precipitacao
     */
    select?: PrecipitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precipitacao
     */
    omit?: PrecipitacaoOmit<ExtArgs> | null
    /**
     * The filter to search for the Precipitacao to update in case it exists.
     */
    where: PrecipitacaoWhereUniqueInput
    /**
     * In case the Precipitacao found by the `where` argument doesn't exist, create a new Precipitacao with this data.
     */
    create: XOR<PrecipitacaoCreateInput, PrecipitacaoUncheckedCreateInput>
    /**
     * In case the Precipitacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrecipitacaoUpdateInput, PrecipitacaoUncheckedUpdateInput>
  }

  /**
   * Precipitacao delete
   */
  export type PrecipitacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precipitacao
     */
    select?: PrecipitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precipitacao
     */
    omit?: PrecipitacaoOmit<ExtArgs> | null
    /**
     * Filter which Precipitacao to delete.
     */
    where: PrecipitacaoWhereUniqueInput
  }

  /**
   * Precipitacao deleteMany
   */
  export type PrecipitacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Precipitacaos to delete
     */
    where?: PrecipitacaoWhereInput
    /**
     * Limit how many Precipitacaos to delete.
     */
    limit?: number
  }

  /**
   * Precipitacao without action
   */
  export type PrecipitacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precipitacao
     */
    select?: PrecipitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precipitacao
     */
    omit?: PrecipitacaoOmit<ExtArgs> | null
  }


  /**
   * Model Solo
   */

  export type AggregateSolo = {
    _count: SoloCountAggregateOutputType | null
    _avg: SoloAvgAggregateOutputType | null
    _sum: SoloSumAggregateOutputType | null
    _min: SoloMinAggregateOutputType | null
    _max: SoloMaxAggregateOutputType | null
  }

  export type SoloAvgAggregateOutputType = {
    id: number | null
    profundidade: number | null
    fatorRocha: number | null
    condutHidraulicaSaturada: number | null
    densidadeAparente: number | null
    agua0Bar: number | null
    agua13Bar: number | null
    agua15Bar: number | null
  }

  export type SoloSumAggregateOutputType = {
    id: number | null
    profundidade: number | null
    fatorRocha: number | null
    condutHidraulicaSaturada: number | null
    densidadeAparente: number | null
    agua0Bar: number | null
    agua13Bar: number | null
    agua15Bar: number | null
  }

  export type SoloMinAggregateOutputType = {
    id: number | null
    profundidade: number | null
    fatorRocha: number | null
    condutHidraulicaSaturada: number | null
    densidadeAparente: number | null
    agua0Bar: number | null
    agua13Bar: number | null
    agua15Bar: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SoloMaxAggregateOutputType = {
    id: number | null
    profundidade: number | null
    fatorRocha: number | null
    condutHidraulicaSaturada: number | null
    densidadeAparente: number | null
    agua0Bar: number | null
    agua13Bar: number | null
    agua15Bar: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SoloCountAggregateOutputType = {
    id: number
    profundidade: number
    fatorRocha: number
    condutHidraulicaSaturada: number
    densidadeAparente: number
    agua0Bar: number
    agua13Bar: number
    agua15Bar: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type SoloAvgAggregateInputType = {
    id?: true
    profundidade?: true
    fatorRocha?: true
    condutHidraulicaSaturada?: true
    densidadeAparente?: true
    agua0Bar?: true
    agua13Bar?: true
    agua15Bar?: true
  }

  export type SoloSumAggregateInputType = {
    id?: true
    profundidade?: true
    fatorRocha?: true
    condutHidraulicaSaturada?: true
    densidadeAparente?: true
    agua0Bar?: true
    agua13Bar?: true
    agua15Bar?: true
  }

  export type SoloMinAggregateInputType = {
    id?: true
    profundidade?: true
    fatorRocha?: true
    condutHidraulicaSaturada?: true
    densidadeAparente?: true
    agua0Bar?: true
    agua13Bar?: true
    agua15Bar?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SoloMaxAggregateInputType = {
    id?: true
    profundidade?: true
    fatorRocha?: true
    condutHidraulicaSaturada?: true
    densidadeAparente?: true
    agua0Bar?: true
    agua13Bar?: true
    agua15Bar?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SoloCountAggregateInputType = {
    id?: true
    profundidade?: true
    fatorRocha?: true
    condutHidraulicaSaturada?: true
    densidadeAparente?: true
    agua0Bar?: true
    agua13Bar?: true
    agua15Bar?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type SoloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solo to aggregate.
     */
    where?: SoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solos to fetch.
     */
    orderBy?: SoloOrderByWithRelationInput | SoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Solos
    **/
    _count?: true | SoloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SoloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SoloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoloMaxAggregateInputType
  }

  export type GetSoloAggregateType<T extends SoloAggregateArgs> = {
        [P in keyof T & keyof AggregateSolo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolo[P]>
      : GetScalarType<T[P], AggregateSolo[P]>
  }




  export type SoloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoloWhereInput
    orderBy?: SoloOrderByWithAggregationInput | SoloOrderByWithAggregationInput[]
    by: SoloScalarFieldEnum[] | SoloScalarFieldEnum
    having?: SoloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoloCountAggregateInputType | true
    _avg?: SoloAvgAggregateInputType
    _sum?: SoloSumAggregateInputType
    _min?: SoloMinAggregateInputType
    _max?: SoloMaxAggregateInputType
  }

  export type SoloGroupByOutputType = {
    id: number
    profundidade: number
    fatorRocha: number
    condutHidraulicaSaturada: number
    densidadeAparente: number
    agua0Bar: number
    agua13Bar: number
    agua15Bar: number
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: SoloCountAggregateOutputType | null
    _avg: SoloAvgAggregateOutputType | null
    _sum: SoloSumAggregateOutputType | null
    _min: SoloMinAggregateOutputType | null
    _max: SoloMaxAggregateOutputType | null
  }

  type GetSoloGroupByPayload<T extends SoloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoloGroupByOutputType[P]>
            : GetScalarType<T[P], SoloGroupByOutputType[P]>
        }
      >
    >


  export type SoloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profundidade?: boolean
    fatorRocha?: boolean
    condutHidraulicaSaturada?: boolean
    densidadeAparente?: boolean
    agua0Bar?: boolean
    agua13Bar?: boolean
    agua15Bar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["solo"]>



  export type SoloSelectScalar = {
    id?: boolean
    profundidade?: boolean
    fatorRocha?: boolean
    condutHidraulicaSaturada?: boolean
    densidadeAparente?: boolean
    agua0Bar?: boolean
    agua13Bar?: boolean
    agua15Bar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type SoloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profundidade" | "fatorRocha" | "condutHidraulicaSaturada" | "densidadeAparente" | "agua0Bar" | "agua13Bar" | "agua15Bar" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["solo"]>

  export type $SoloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Solo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      profundidade: number
      fatorRocha: number
      condutHidraulicaSaturada: number
      densidadeAparente: number
      agua0Bar: number
      agua13Bar: number
      agua15Bar: number
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["solo"]>
    composites: {}
  }

  type SoloGetPayload<S extends boolean | null | undefined | SoloDefaultArgs> = $Result.GetResult<Prisma.$SoloPayload, S>

  type SoloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SoloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SoloCountAggregateInputType | true
    }

  export interface SoloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Solo'], meta: { name: 'Solo' } }
    /**
     * Find zero or one Solo that matches the filter.
     * @param {SoloFindUniqueArgs} args - Arguments to find a Solo
     * @example
     * // Get one Solo
     * const solo = await prisma.solo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SoloFindUniqueArgs>(args: SelectSubset<T, SoloFindUniqueArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Solo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SoloFindUniqueOrThrowArgs} args - Arguments to find a Solo
     * @example
     * // Get one Solo
     * const solo = await prisma.solo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SoloFindUniqueOrThrowArgs>(args: SelectSubset<T, SoloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoloFindFirstArgs} args - Arguments to find a Solo
     * @example
     * // Get one Solo
     * const solo = await prisma.solo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SoloFindFirstArgs>(args?: SelectSubset<T, SoloFindFirstArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoloFindFirstOrThrowArgs} args - Arguments to find a Solo
     * @example
     * // Get one Solo
     * const solo = await prisma.solo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SoloFindFirstOrThrowArgs>(args?: SelectSubset<T, SoloFindFirstOrThrowArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Solos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solos
     * const solos = await prisma.solo.findMany()
     * 
     * // Get first 10 Solos
     * const solos = await prisma.solo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const soloWithIdOnly = await prisma.solo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SoloFindManyArgs>(args?: SelectSubset<T, SoloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Solo.
     * @param {SoloCreateArgs} args - Arguments to create a Solo.
     * @example
     * // Create one Solo
     * const Solo = await prisma.solo.create({
     *   data: {
     *     // ... data to create a Solo
     *   }
     * })
     * 
     */
    create<T extends SoloCreateArgs>(args: SelectSubset<T, SoloCreateArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Solos.
     * @param {SoloCreateManyArgs} args - Arguments to create many Solos.
     * @example
     * // Create many Solos
     * const solo = await prisma.solo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SoloCreateManyArgs>(args?: SelectSubset<T, SoloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Solo.
     * @param {SoloDeleteArgs} args - Arguments to delete one Solo.
     * @example
     * // Delete one Solo
     * const Solo = await prisma.solo.delete({
     *   where: {
     *     // ... filter to delete one Solo
     *   }
     * })
     * 
     */
    delete<T extends SoloDeleteArgs>(args: SelectSubset<T, SoloDeleteArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Solo.
     * @param {SoloUpdateArgs} args - Arguments to update one Solo.
     * @example
     * // Update one Solo
     * const solo = await prisma.solo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SoloUpdateArgs>(args: SelectSubset<T, SoloUpdateArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Solos.
     * @param {SoloDeleteManyArgs} args - Arguments to filter Solos to delete.
     * @example
     * // Delete a few Solos
     * const { count } = await prisma.solo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SoloDeleteManyArgs>(args?: SelectSubset<T, SoloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solos
     * const solo = await prisma.solo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SoloUpdateManyArgs>(args: SelectSubset<T, SoloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Solo.
     * @param {SoloUpsertArgs} args - Arguments to update or create a Solo.
     * @example
     * // Update or create a Solo
     * const solo = await prisma.solo.upsert({
     *   create: {
     *     // ... data to create a Solo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solo we want to update
     *   }
     * })
     */
    upsert<T extends SoloUpsertArgs>(args: SelectSubset<T, SoloUpsertArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Solos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoloCountArgs} args - Arguments to filter Solos to count.
     * @example
     * // Count the number of Solos
     * const count = await prisma.solo.count({
     *   where: {
     *     // ... the filter for the Solos we want to count
     *   }
     * })
    **/
    count<T extends SoloCountArgs>(
      args?: Subset<T, SoloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
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
    aggregate<T extends SoloAggregateArgs>(args: Subset<T, SoloAggregateArgs>): Prisma.PrismaPromise<GetSoloAggregateType<T>>

    /**
     * Group by Solo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoloGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SoloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SoloGroupByArgs['orderBy'] }
        : { orderBy?: SoloGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SoloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Solo model
   */
  readonly fields: SoloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Solo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SoloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Solo model
   */
  interface SoloFieldRefs {
    readonly id: FieldRef<"Solo", 'Int'>
    readonly profundidade: FieldRef<"Solo", 'Float'>
    readonly fatorRocha: FieldRef<"Solo", 'Float'>
    readonly condutHidraulicaSaturada: FieldRef<"Solo", 'Float'>
    readonly densidadeAparente: FieldRef<"Solo", 'Float'>
    readonly agua0Bar: FieldRef<"Solo", 'Float'>
    readonly agua13Bar: FieldRef<"Solo", 'Float'>
    readonly agua15Bar: FieldRef<"Solo", 'Float'>
    readonly createdAt: FieldRef<"Solo", 'DateTime'>
    readonly updatedAt: FieldRef<"Solo", 'DateTime'>
    readonly deletedAt: FieldRef<"Solo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Solo findUnique
   */
  export type SoloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solo
     */
    select?: SoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solo
     */
    omit?: SoloOmit<ExtArgs> | null
    /**
     * Filter, which Solo to fetch.
     */
    where: SoloWhereUniqueInput
  }

  /**
   * Solo findUniqueOrThrow
   */
  export type SoloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solo
     */
    select?: SoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solo
     */
    omit?: SoloOmit<ExtArgs> | null
    /**
     * Filter, which Solo to fetch.
     */
    where: SoloWhereUniqueInput
  }

  /**
   * Solo findFirst
   */
  export type SoloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solo
     */
    select?: SoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solo
     */
    omit?: SoloOmit<ExtArgs> | null
    /**
     * Filter, which Solo to fetch.
     */
    where?: SoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solos to fetch.
     */
    orderBy?: SoloOrderByWithRelationInput | SoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solos.
     */
    cursor?: SoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solos.
     */
    distinct?: SoloScalarFieldEnum | SoloScalarFieldEnum[]
  }

  /**
   * Solo findFirstOrThrow
   */
  export type SoloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solo
     */
    select?: SoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solo
     */
    omit?: SoloOmit<ExtArgs> | null
    /**
     * Filter, which Solo to fetch.
     */
    where?: SoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solos to fetch.
     */
    orderBy?: SoloOrderByWithRelationInput | SoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solos.
     */
    cursor?: SoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solos.
     */
    distinct?: SoloScalarFieldEnum | SoloScalarFieldEnum[]
  }

  /**
   * Solo findMany
   */
  export type SoloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solo
     */
    select?: SoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solo
     */
    omit?: SoloOmit<ExtArgs> | null
    /**
     * Filter, which Solos to fetch.
     */
    where?: SoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solos to fetch.
     */
    orderBy?: SoloOrderByWithRelationInput | SoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Solos.
     */
    cursor?: SoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solos.
     */
    skip?: number
    distinct?: SoloScalarFieldEnum | SoloScalarFieldEnum[]
  }

  /**
   * Solo create
   */
  export type SoloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solo
     */
    select?: SoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solo
     */
    omit?: SoloOmit<ExtArgs> | null
    /**
     * The data needed to create a Solo.
     */
    data: XOR<SoloCreateInput, SoloUncheckedCreateInput>
  }

  /**
   * Solo createMany
   */
  export type SoloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Solos.
     */
    data: SoloCreateManyInput | SoloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Solo update
   */
  export type SoloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solo
     */
    select?: SoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solo
     */
    omit?: SoloOmit<ExtArgs> | null
    /**
     * The data needed to update a Solo.
     */
    data: XOR<SoloUpdateInput, SoloUncheckedUpdateInput>
    /**
     * Choose, which Solo to update.
     */
    where: SoloWhereUniqueInput
  }

  /**
   * Solo updateMany
   */
  export type SoloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Solos.
     */
    data: XOR<SoloUpdateManyMutationInput, SoloUncheckedUpdateManyInput>
    /**
     * Filter which Solos to update
     */
    where?: SoloWhereInput
    /**
     * Limit how many Solos to update.
     */
    limit?: number
  }

  /**
   * Solo upsert
   */
  export type SoloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solo
     */
    select?: SoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solo
     */
    omit?: SoloOmit<ExtArgs> | null
    /**
     * The filter to search for the Solo to update in case it exists.
     */
    where: SoloWhereUniqueInput
    /**
     * In case the Solo found by the `where` argument doesn't exist, create a new Solo with this data.
     */
    create: XOR<SoloCreateInput, SoloUncheckedCreateInput>
    /**
     * In case the Solo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SoloUpdateInput, SoloUncheckedUpdateInput>
  }

  /**
   * Solo delete
   */
  export type SoloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solo
     */
    select?: SoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solo
     */
    omit?: SoloOmit<ExtArgs> | null
    /**
     * Filter which Solo to delete.
     */
    where: SoloWhereUniqueInput
  }

  /**
   * Solo deleteMany
   */
  export type SoloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solos to delete
     */
    where?: SoloWhereInput
    /**
     * Limit how many Solos to delete.
     */
    limit?: number
  }

  /**
   * Solo without action
   */
  export type SoloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solo
     */
    select?: SoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solo
     */
    omit?: SoloOmit<ExtArgs> | null
  }


  /**
   * Model Estimativas
   */

  export type AggregateEstimativas = {
    _count: EstimativasCountAggregateOutputType | null
    _avg: EstimativasAvgAggregateOutputType | null
    _sum: EstimativasSumAggregateOutputType | null
    _min: EstimativasMinAggregateOutputType | null
    _max: EstimativasMaxAggregateOutputType | null
  }

  export type EstimativasAvgAggregateOutputType = {
    id: number | null
    valorTotal: number | null
    propriedadeId: number | null
  }

  export type EstimativasSumAggregateOutputType = {
    id: number | null
    valorTotal: number | null
    propriedadeId: number | null
  }

  export type EstimativasMinAggregateOutputType = {
    id: number | null
    valorTotal: number | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    propriedadeId: number | null
  }

  export type EstimativasMaxAggregateOutputType = {
    id: number | null
    valorTotal: number | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    propriedadeId: number | null
  }

  export type EstimativasCountAggregateOutputType = {
    id: number
    valorTotal: number
    descricao: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    propriedadeId: number
    _all: number
  }


  export type EstimativasAvgAggregateInputType = {
    id?: true
    valorTotal?: true
    propriedadeId?: true
  }

  export type EstimativasSumAggregateInputType = {
    id?: true
    valorTotal?: true
    propriedadeId?: true
  }

  export type EstimativasMinAggregateInputType = {
    id?: true
    valorTotal?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    propriedadeId?: true
  }

  export type EstimativasMaxAggregateInputType = {
    id?: true
    valorTotal?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    propriedadeId?: true
  }

  export type EstimativasCountAggregateInputType = {
    id?: true
    valorTotal?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    propriedadeId?: true
    _all?: true
  }

  export type EstimativasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estimativas to aggregate.
     */
    where?: EstimativasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estimativas to fetch.
     */
    orderBy?: EstimativasOrderByWithRelationInput | EstimativasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstimativasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estimativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estimativas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estimativas
    **/
    _count?: true | EstimativasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstimativasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstimativasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstimativasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstimativasMaxAggregateInputType
  }

  export type GetEstimativasAggregateType<T extends EstimativasAggregateArgs> = {
        [P in keyof T & keyof AggregateEstimativas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstimativas[P]>
      : GetScalarType<T[P], AggregateEstimativas[P]>
  }




  export type EstimativasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstimativasWhereInput
    orderBy?: EstimativasOrderByWithAggregationInput | EstimativasOrderByWithAggregationInput[]
    by: EstimativasScalarFieldEnum[] | EstimativasScalarFieldEnum
    having?: EstimativasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstimativasCountAggregateInputType | true
    _avg?: EstimativasAvgAggregateInputType
    _sum?: EstimativasSumAggregateInputType
    _min?: EstimativasMinAggregateInputType
    _max?: EstimativasMaxAggregateInputType
  }

  export type EstimativasGroupByOutputType = {
    id: number
    valorTotal: number
    descricao: string | null
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    propriedadeId: number
    _count: EstimativasCountAggregateOutputType | null
    _avg: EstimativasAvgAggregateOutputType | null
    _sum: EstimativasSumAggregateOutputType | null
    _min: EstimativasMinAggregateOutputType | null
    _max: EstimativasMaxAggregateOutputType | null
  }

  type GetEstimativasGroupByPayload<T extends EstimativasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstimativasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstimativasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstimativasGroupByOutputType[P]>
            : GetScalarType<T[P], EstimativasGroupByOutputType[P]>
        }
      >
    >


  export type EstimativasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valorTotal?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    propriedadeId?: boolean
    propriedade?: boolean | Estimativas$propriedadeArgs<ExtArgs>
  }, ExtArgs["result"]["estimativas"]>



  export type EstimativasSelectScalar = {
    id?: boolean
    valorTotal?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    propriedadeId?: boolean
  }

  export type EstimativasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "valorTotal" | "descricao" | "createdAt" | "updatedAt" | "deletedAt" | "propriedadeId", ExtArgs["result"]["estimativas"]>
  export type EstimativasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propriedade?: boolean | Estimativas$propriedadeArgs<ExtArgs>
  }

  export type $EstimativasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estimativas"
    objects: {
      propriedade: Prisma.$PropriedadePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      valorTotal: number
      descricao: string | null
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
      propriedadeId: number
    }, ExtArgs["result"]["estimativas"]>
    composites: {}
  }

  type EstimativasGetPayload<S extends boolean | null | undefined | EstimativasDefaultArgs> = $Result.GetResult<Prisma.$EstimativasPayload, S>

  type EstimativasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstimativasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstimativasCountAggregateInputType | true
    }

  export interface EstimativasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estimativas'], meta: { name: 'Estimativas' } }
    /**
     * Find zero or one Estimativas that matches the filter.
     * @param {EstimativasFindUniqueArgs} args - Arguments to find a Estimativas
     * @example
     * // Get one Estimativas
     * const estimativas = await prisma.estimativas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstimativasFindUniqueArgs>(args: SelectSubset<T, EstimativasFindUniqueArgs<ExtArgs>>): Prisma__EstimativasClient<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estimativas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstimativasFindUniqueOrThrowArgs} args - Arguments to find a Estimativas
     * @example
     * // Get one Estimativas
     * const estimativas = await prisma.estimativas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstimativasFindUniqueOrThrowArgs>(args: SelectSubset<T, EstimativasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstimativasClient<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estimativas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimativasFindFirstArgs} args - Arguments to find a Estimativas
     * @example
     * // Get one Estimativas
     * const estimativas = await prisma.estimativas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstimativasFindFirstArgs>(args?: SelectSubset<T, EstimativasFindFirstArgs<ExtArgs>>): Prisma__EstimativasClient<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estimativas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimativasFindFirstOrThrowArgs} args - Arguments to find a Estimativas
     * @example
     * // Get one Estimativas
     * const estimativas = await prisma.estimativas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstimativasFindFirstOrThrowArgs>(args?: SelectSubset<T, EstimativasFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstimativasClient<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estimativas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimativasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estimativas
     * const estimativas = await prisma.estimativas.findMany()
     * 
     * // Get first 10 Estimativas
     * const estimativas = await prisma.estimativas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estimativasWithIdOnly = await prisma.estimativas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstimativasFindManyArgs>(args?: SelectSubset<T, EstimativasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estimativas.
     * @param {EstimativasCreateArgs} args - Arguments to create a Estimativas.
     * @example
     * // Create one Estimativas
     * const Estimativas = await prisma.estimativas.create({
     *   data: {
     *     // ... data to create a Estimativas
     *   }
     * })
     * 
     */
    create<T extends EstimativasCreateArgs>(args: SelectSubset<T, EstimativasCreateArgs<ExtArgs>>): Prisma__EstimativasClient<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estimativas.
     * @param {EstimativasCreateManyArgs} args - Arguments to create many Estimativas.
     * @example
     * // Create many Estimativas
     * const estimativas = await prisma.estimativas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstimativasCreateManyArgs>(args?: SelectSubset<T, EstimativasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estimativas.
     * @param {EstimativasDeleteArgs} args - Arguments to delete one Estimativas.
     * @example
     * // Delete one Estimativas
     * const Estimativas = await prisma.estimativas.delete({
     *   where: {
     *     // ... filter to delete one Estimativas
     *   }
     * })
     * 
     */
    delete<T extends EstimativasDeleteArgs>(args: SelectSubset<T, EstimativasDeleteArgs<ExtArgs>>): Prisma__EstimativasClient<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estimativas.
     * @param {EstimativasUpdateArgs} args - Arguments to update one Estimativas.
     * @example
     * // Update one Estimativas
     * const estimativas = await prisma.estimativas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstimativasUpdateArgs>(args: SelectSubset<T, EstimativasUpdateArgs<ExtArgs>>): Prisma__EstimativasClient<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estimativas.
     * @param {EstimativasDeleteManyArgs} args - Arguments to filter Estimativas to delete.
     * @example
     * // Delete a few Estimativas
     * const { count } = await prisma.estimativas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstimativasDeleteManyArgs>(args?: SelectSubset<T, EstimativasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estimativas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimativasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estimativas
     * const estimativas = await prisma.estimativas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstimativasUpdateManyArgs>(args: SelectSubset<T, EstimativasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estimativas.
     * @param {EstimativasUpsertArgs} args - Arguments to update or create a Estimativas.
     * @example
     * // Update or create a Estimativas
     * const estimativas = await prisma.estimativas.upsert({
     *   create: {
     *     // ... data to create a Estimativas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estimativas we want to update
     *   }
     * })
     */
    upsert<T extends EstimativasUpsertArgs>(args: SelectSubset<T, EstimativasUpsertArgs<ExtArgs>>): Prisma__EstimativasClient<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estimativas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimativasCountArgs} args - Arguments to filter Estimativas to count.
     * @example
     * // Count the number of Estimativas
     * const count = await prisma.estimativas.count({
     *   where: {
     *     // ... the filter for the Estimativas we want to count
     *   }
     * })
    **/
    count<T extends EstimativasCountArgs>(
      args?: Subset<T, EstimativasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstimativasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estimativas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimativasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
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
    aggregate<T extends EstimativasAggregateArgs>(args: Subset<T, EstimativasAggregateArgs>): Prisma.PrismaPromise<GetEstimativasAggregateType<T>>

    /**
     * Group by Estimativas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimativasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstimativasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstimativasGroupByArgs['orderBy'] }
        : { orderBy?: EstimativasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstimativasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstimativasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estimativas model
   */
  readonly fields: EstimativasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estimativas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstimativasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propriedade<T extends Estimativas$propriedadeArgs<ExtArgs> = {}>(args?: Subset<T, Estimativas$propriedadeArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Estimativas model
   */
  interface EstimativasFieldRefs {
    readonly id: FieldRef<"Estimativas", 'Int'>
    readonly valorTotal: FieldRef<"Estimativas", 'Float'>
    readonly descricao: FieldRef<"Estimativas", 'String'>
    readonly createdAt: FieldRef<"Estimativas", 'DateTime'>
    readonly updatedAt: FieldRef<"Estimativas", 'DateTime'>
    readonly deletedAt: FieldRef<"Estimativas", 'DateTime'>
    readonly propriedadeId: FieldRef<"Estimativas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Estimativas findUnique
   */
  export type EstimativasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimativas
     */
    select?: EstimativasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimativas
     */
    omit?: EstimativasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimativasInclude<ExtArgs> | null
    /**
     * Filter, which Estimativas to fetch.
     */
    where: EstimativasWhereUniqueInput
  }

  /**
   * Estimativas findUniqueOrThrow
   */
  export type EstimativasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimativas
     */
    select?: EstimativasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimativas
     */
    omit?: EstimativasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimativasInclude<ExtArgs> | null
    /**
     * Filter, which Estimativas to fetch.
     */
    where: EstimativasWhereUniqueInput
  }

  /**
   * Estimativas findFirst
   */
  export type EstimativasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimativas
     */
    select?: EstimativasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimativas
     */
    omit?: EstimativasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimativasInclude<ExtArgs> | null
    /**
     * Filter, which Estimativas to fetch.
     */
    where?: EstimativasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estimativas to fetch.
     */
    orderBy?: EstimativasOrderByWithRelationInput | EstimativasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estimativas.
     */
    cursor?: EstimativasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estimativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estimativas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estimativas.
     */
    distinct?: EstimativasScalarFieldEnum | EstimativasScalarFieldEnum[]
  }

  /**
   * Estimativas findFirstOrThrow
   */
  export type EstimativasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimativas
     */
    select?: EstimativasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimativas
     */
    omit?: EstimativasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimativasInclude<ExtArgs> | null
    /**
     * Filter, which Estimativas to fetch.
     */
    where?: EstimativasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estimativas to fetch.
     */
    orderBy?: EstimativasOrderByWithRelationInput | EstimativasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estimativas.
     */
    cursor?: EstimativasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estimativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estimativas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estimativas.
     */
    distinct?: EstimativasScalarFieldEnum | EstimativasScalarFieldEnum[]
  }

  /**
   * Estimativas findMany
   */
  export type EstimativasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimativas
     */
    select?: EstimativasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimativas
     */
    omit?: EstimativasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimativasInclude<ExtArgs> | null
    /**
     * Filter, which Estimativas to fetch.
     */
    where?: EstimativasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estimativas to fetch.
     */
    orderBy?: EstimativasOrderByWithRelationInput | EstimativasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estimativas.
     */
    cursor?: EstimativasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estimativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estimativas.
     */
    skip?: number
    distinct?: EstimativasScalarFieldEnum | EstimativasScalarFieldEnum[]
  }

  /**
   * Estimativas create
   */
  export type EstimativasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimativas
     */
    select?: EstimativasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimativas
     */
    omit?: EstimativasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimativasInclude<ExtArgs> | null
    /**
     * The data needed to create a Estimativas.
     */
    data: XOR<EstimativasCreateInput, EstimativasUncheckedCreateInput>
  }

  /**
   * Estimativas createMany
   */
  export type EstimativasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estimativas.
     */
    data: EstimativasCreateManyInput | EstimativasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estimativas update
   */
  export type EstimativasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimativas
     */
    select?: EstimativasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimativas
     */
    omit?: EstimativasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimativasInclude<ExtArgs> | null
    /**
     * The data needed to update a Estimativas.
     */
    data: XOR<EstimativasUpdateInput, EstimativasUncheckedUpdateInput>
    /**
     * Choose, which Estimativas to update.
     */
    where: EstimativasWhereUniqueInput
  }

  /**
   * Estimativas updateMany
   */
  export type EstimativasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estimativas.
     */
    data: XOR<EstimativasUpdateManyMutationInput, EstimativasUncheckedUpdateManyInput>
    /**
     * Filter which Estimativas to update
     */
    where?: EstimativasWhereInput
    /**
     * Limit how many Estimativas to update.
     */
    limit?: number
  }

  /**
   * Estimativas upsert
   */
  export type EstimativasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimativas
     */
    select?: EstimativasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimativas
     */
    omit?: EstimativasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimativasInclude<ExtArgs> | null
    /**
     * The filter to search for the Estimativas to update in case it exists.
     */
    where: EstimativasWhereUniqueInput
    /**
     * In case the Estimativas found by the `where` argument doesn't exist, create a new Estimativas with this data.
     */
    create: XOR<EstimativasCreateInput, EstimativasUncheckedCreateInput>
    /**
     * In case the Estimativas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstimativasUpdateInput, EstimativasUncheckedUpdateInput>
  }

  /**
   * Estimativas delete
   */
  export type EstimativasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimativas
     */
    select?: EstimativasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimativas
     */
    omit?: EstimativasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimativasInclude<ExtArgs> | null
    /**
     * Filter which Estimativas to delete.
     */
    where: EstimativasWhereUniqueInput
  }

  /**
   * Estimativas deleteMany
   */
  export type EstimativasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estimativas to delete
     */
    where?: EstimativasWhereInput
    /**
     * Limit how many Estimativas to delete.
     */
    limit?: number
  }

  /**
   * Estimativas.propriedade
   */
  export type Estimativas$propriedadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propriedade
     */
    omit?: PropriedadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    where?: PropriedadeWhereInput
  }

  /**
   * Estimativas without action
   */
  export type EstimativasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimativas
     */
    select?: EstimativasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimativas
     */
    omit?: EstimativasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimativasInclude<ExtArgs> | null
  }


  /**
   * Model Simulacao
   */

  export type AggregateSimulacao = {
    _count: SimulacaoCountAggregateOutputType | null
    _avg: SimulacaoAvgAggregateOutputType | null
    _sum: SimulacaoSumAggregateOutputType | null
    _min: SimulacaoMinAggregateOutputType | null
    _max: SimulacaoMaxAggregateOutputType | null
  }

  export type SimulacaoAvgAggregateOutputType = {
    id: number | null
    resultado: number | null
    propriedadeId: number | null
  }

  export type SimulacaoSumAggregateOutputType = {
    id: number | null
    resultado: number | null
    propriedadeId: number | null
  }

  export type SimulacaoMinAggregateOutputType = {
    id: number | null
    resultado: number | null
    dataSimulacao: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    propriedadeId: number | null
  }

  export type SimulacaoMaxAggregateOutputType = {
    id: number | null
    resultado: number | null
    dataSimulacao: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    propriedadeId: number | null
  }

  export type SimulacaoCountAggregateOutputType = {
    id: number
    dadosJson: number
    resultado: number
    dataSimulacao: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    propriedadeId: number
    _all: number
  }


  export type SimulacaoAvgAggregateInputType = {
    id?: true
    resultado?: true
    propriedadeId?: true
  }

  export type SimulacaoSumAggregateInputType = {
    id?: true
    resultado?: true
    propriedadeId?: true
  }

  export type SimulacaoMinAggregateInputType = {
    id?: true
    resultado?: true
    dataSimulacao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    propriedadeId?: true
  }

  export type SimulacaoMaxAggregateInputType = {
    id?: true
    resultado?: true
    dataSimulacao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    propriedadeId?: true
  }

  export type SimulacaoCountAggregateInputType = {
    id?: true
    dadosJson?: true
    resultado?: true
    dataSimulacao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    propriedadeId?: true
    _all?: true
  }

  export type SimulacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Simulacao to aggregate.
     */
    where?: SimulacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simulacaos to fetch.
     */
    orderBy?: SimulacaoOrderByWithRelationInput | SimulacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SimulacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simulacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simulacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Simulacaos
    **/
    _count?: true | SimulacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SimulacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SimulacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SimulacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SimulacaoMaxAggregateInputType
  }

  export type GetSimulacaoAggregateType<T extends SimulacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateSimulacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSimulacao[P]>
      : GetScalarType<T[P], AggregateSimulacao[P]>
  }




  export type SimulacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimulacaoWhereInput
    orderBy?: SimulacaoOrderByWithAggregationInput | SimulacaoOrderByWithAggregationInput[]
    by: SimulacaoScalarFieldEnum[] | SimulacaoScalarFieldEnum
    having?: SimulacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SimulacaoCountAggregateInputType | true
    _avg?: SimulacaoAvgAggregateInputType
    _sum?: SimulacaoSumAggregateInputType
    _min?: SimulacaoMinAggregateInputType
    _max?: SimulacaoMaxAggregateInputType
  }

  export type SimulacaoGroupByOutputType = {
    id: number
    dadosJson: JsonValue
    resultado: number
    dataSimulacao: Date
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    propriedadeId: number
    _count: SimulacaoCountAggregateOutputType | null
    _avg: SimulacaoAvgAggregateOutputType | null
    _sum: SimulacaoSumAggregateOutputType | null
    _min: SimulacaoMinAggregateOutputType | null
    _max: SimulacaoMaxAggregateOutputType | null
  }

  type GetSimulacaoGroupByPayload<T extends SimulacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SimulacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SimulacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SimulacaoGroupByOutputType[P]>
            : GetScalarType<T[P], SimulacaoGroupByOutputType[P]>
        }
      >
    >


  export type SimulacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dadosJson?: boolean
    resultado?: boolean
    dataSimulacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    propriedadeId?: boolean
    propriedade?: boolean | PropriedadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simulacao"]>



  export type SimulacaoSelectScalar = {
    id?: boolean
    dadosJson?: boolean
    resultado?: boolean
    dataSimulacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    propriedadeId?: boolean
  }

  export type SimulacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dadosJson" | "resultado" | "dataSimulacao" | "createdAt" | "updatedAt" | "deletedAt" | "propriedadeId", ExtArgs["result"]["simulacao"]>
  export type SimulacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propriedade?: boolean | PropriedadeDefaultArgs<ExtArgs>
  }

  export type $SimulacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Simulacao"
    objects: {
      propriedade: Prisma.$PropriedadePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dadosJson: Prisma.JsonValue
      resultado: number
      dataSimulacao: Date
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
      propriedadeId: number
    }, ExtArgs["result"]["simulacao"]>
    composites: {}
  }

  type SimulacaoGetPayload<S extends boolean | null | undefined | SimulacaoDefaultArgs> = $Result.GetResult<Prisma.$SimulacaoPayload, S>

  type SimulacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SimulacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SimulacaoCountAggregateInputType | true
    }

  export interface SimulacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Simulacao'], meta: { name: 'Simulacao' } }
    /**
     * Find zero or one Simulacao that matches the filter.
     * @param {SimulacaoFindUniqueArgs} args - Arguments to find a Simulacao
     * @example
     * // Get one Simulacao
     * const simulacao = await prisma.simulacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SimulacaoFindUniqueArgs>(args: SelectSubset<T, SimulacaoFindUniqueArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Simulacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SimulacaoFindUniqueOrThrowArgs} args - Arguments to find a Simulacao
     * @example
     * // Get one Simulacao
     * const simulacao = await prisma.simulacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SimulacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, SimulacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Simulacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulacaoFindFirstArgs} args - Arguments to find a Simulacao
     * @example
     * // Get one Simulacao
     * const simulacao = await prisma.simulacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SimulacaoFindFirstArgs>(args?: SelectSubset<T, SimulacaoFindFirstArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Simulacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulacaoFindFirstOrThrowArgs} args - Arguments to find a Simulacao
     * @example
     * // Get one Simulacao
     * const simulacao = await prisma.simulacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SimulacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, SimulacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Simulacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Simulacaos
     * const simulacaos = await prisma.simulacao.findMany()
     * 
     * // Get first 10 Simulacaos
     * const simulacaos = await prisma.simulacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const simulacaoWithIdOnly = await prisma.simulacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SimulacaoFindManyArgs>(args?: SelectSubset<T, SimulacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Simulacao.
     * @param {SimulacaoCreateArgs} args - Arguments to create a Simulacao.
     * @example
     * // Create one Simulacao
     * const Simulacao = await prisma.simulacao.create({
     *   data: {
     *     // ... data to create a Simulacao
     *   }
     * })
     * 
     */
    create<T extends SimulacaoCreateArgs>(args: SelectSubset<T, SimulacaoCreateArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Simulacaos.
     * @param {SimulacaoCreateManyArgs} args - Arguments to create many Simulacaos.
     * @example
     * // Create many Simulacaos
     * const simulacao = await prisma.simulacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SimulacaoCreateManyArgs>(args?: SelectSubset<T, SimulacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Simulacao.
     * @param {SimulacaoDeleteArgs} args - Arguments to delete one Simulacao.
     * @example
     * // Delete one Simulacao
     * const Simulacao = await prisma.simulacao.delete({
     *   where: {
     *     // ... filter to delete one Simulacao
     *   }
     * })
     * 
     */
    delete<T extends SimulacaoDeleteArgs>(args: SelectSubset<T, SimulacaoDeleteArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Simulacao.
     * @param {SimulacaoUpdateArgs} args - Arguments to update one Simulacao.
     * @example
     * // Update one Simulacao
     * const simulacao = await prisma.simulacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SimulacaoUpdateArgs>(args: SelectSubset<T, SimulacaoUpdateArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Simulacaos.
     * @param {SimulacaoDeleteManyArgs} args - Arguments to filter Simulacaos to delete.
     * @example
     * // Delete a few Simulacaos
     * const { count } = await prisma.simulacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SimulacaoDeleteManyArgs>(args?: SelectSubset<T, SimulacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Simulacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Simulacaos
     * const simulacao = await prisma.simulacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SimulacaoUpdateManyArgs>(args: SelectSubset<T, SimulacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Simulacao.
     * @param {SimulacaoUpsertArgs} args - Arguments to update or create a Simulacao.
     * @example
     * // Update or create a Simulacao
     * const simulacao = await prisma.simulacao.upsert({
     *   create: {
     *     // ... data to create a Simulacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Simulacao we want to update
     *   }
     * })
     */
    upsert<T extends SimulacaoUpsertArgs>(args: SelectSubset<T, SimulacaoUpsertArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Simulacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulacaoCountArgs} args - Arguments to filter Simulacaos to count.
     * @example
     * // Count the number of Simulacaos
     * const count = await prisma.simulacao.count({
     *   where: {
     *     // ... the filter for the Simulacaos we want to count
     *   }
     * })
    **/
    count<T extends SimulacaoCountArgs>(
      args?: Subset<T, SimulacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SimulacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Simulacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
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
    aggregate<T extends SimulacaoAggregateArgs>(args: Subset<T, SimulacaoAggregateArgs>): Prisma.PrismaPromise<GetSimulacaoAggregateType<T>>

    /**
     * Group by Simulacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SimulacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SimulacaoGroupByArgs['orderBy'] }
        : { orderBy?: SimulacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SimulacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSimulacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Simulacao model
   */
  readonly fields: SimulacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Simulacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SimulacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propriedade<T extends PropriedadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropriedadeDefaultArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Simulacao model
   */
  interface SimulacaoFieldRefs {
    readonly id: FieldRef<"Simulacao", 'Int'>
    readonly dadosJson: FieldRef<"Simulacao", 'Json'>
    readonly resultado: FieldRef<"Simulacao", 'Float'>
    readonly dataSimulacao: FieldRef<"Simulacao", 'DateTime'>
    readonly createdAt: FieldRef<"Simulacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Simulacao", 'DateTime'>
    readonly deletedAt: FieldRef<"Simulacao", 'DateTime'>
    readonly propriedadeId: FieldRef<"Simulacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Simulacao findUnique
   */
  export type SimulacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulacao
     */
    select?: SimulacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulacao
     */
    omit?: SimulacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulacaoInclude<ExtArgs> | null
    /**
     * Filter, which Simulacao to fetch.
     */
    where: SimulacaoWhereUniqueInput
  }

  /**
   * Simulacao findUniqueOrThrow
   */
  export type SimulacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulacao
     */
    select?: SimulacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulacao
     */
    omit?: SimulacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulacaoInclude<ExtArgs> | null
    /**
     * Filter, which Simulacao to fetch.
     */
    where: SimulacaoWhereUniqueInput
  }

  /**
   * Simulacao findFirst
   */
  export type SimulacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulacao
     */
    select?: SimulacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulacao
     */
    omit?: SimulacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulacaoInclude<ExtArgs> | null
    /**
     * Filter, which Simulacao to fetch.
     */
    where?: SimulacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simulacaos to fetch.
     */
    orderBy?: SimulacaoOrderByWithRelationInput | SimulacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Simulacaos.
     */
    cursor?: SimulacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simulacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simulacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Simulacaos.
     */
    distinct?: SimulacaoScalarFieldEnum | SimulacaoScalarFieldEnum[]
  }

  /**
   * Simulacao findFirstOrThrow
   */
  export type SimulacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulacao
     */
    select?: SimulacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulacao
     */
    omit?: SimulacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulacaoInclude<ExtArgs> | null
    /**
     * Filter, which Simulacao to fetch.
     */
    where?: SimulacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simulacaos to fetch.
     */
    orderBy?: SimulacaoOrderByWithRelationInput | SimulacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Simulacaos.
     */
    cursor?: SimulacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simulacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simulacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Simulacaos.
     */
    distinct?: SimulacaoScalarFieldEnum | SimulacaoScalarFieldEnum[]
  }

  /**
   * Simulacao findMany
   */
  export type SimulacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulacao
     */
    select?: SimulacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulacao
     */
    omit?: SimulacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulacaoInclude<ExtArgs> | null
    /**
     * Filter, which Simulacaos to fetch.
     */
    where?: SimulacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simulacaos to fetch.
     */
    orderBy?: SimulacaoOrderByWithRelationInput | SimulacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Simulacaos.
     */
    cursor?: SimulacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simulacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simulacaos.
     */
    skip?: number
    distinct?: SimulacaoScalarFieldEnum | SimulacaoScalarFieldEnum[]
  }

  /**
   * Simulacao create
   */
  export type SimulacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulacao
     */
    select?: SimulacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulacao
     */
    omit?: SimulacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Simulacao.
     */
    data: XOR<SimulacaoCreateInput, SimulacaoUncheckedCreateInput>
  }

  /**
   * Simulacao createMany
   */
  export type SimulacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Simulacaos.
     */
    data: SimulacaoCreateManyInput | SimulacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Simulacao update
   */
  export type SimulacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulacao
     */
    select?: SimulacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulacao
     */
    omit?: SimulacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Simulacao.
     */
    data: XOR<SimulacaoUpdateInput, SimulacaoUncheckedUpdateInput>
    /**
     * Choose, which Simulacao to update.
     */
    where: SimulacaoWhereUniqueInput
  }

  /**
   * Simulacao updateMany
   */
  export type SimulacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Simulacaos.
     */
    data: XOR<SimulacaoUpdateManyMutationInput, SimulacaoUncheckedUpdateManyInput>
    /**
     * Filter which Simulacaos to update
     */
    where?: SimulacaoWhereInput
    /**
     * Limit how many Simulacaos to update.
     */
    limit?: number
  }

  /**
   * Simulacao upsert
   */
  export type SimulacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulacao
     */
    select?: SimulacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulacao
     */
    omit?: SimulacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Simulacao to update in case it exists.
     */
    where: SimulacaoWhereUniqueInput
    /**
     * In case the Simulacao found by the `where` argument doesn't exist, create a new Simulacao with this data.
     */
    create: XOR<SimulacaoCreateInput, SimulacaoUncheckedCreateInput>
    /**
     * In case the Simulacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SimulacaoUpdateInput, SimulacaoUncheckedUpdateInput>
  }

  /**
   * Simulacao delete
   */
  export type SimulacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulacao
     */
    select?: SimulacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulacao
     */
    omit?: SimulacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulacaoInclude<ExtArgs> | null
    /**
     * Filter which Simulacao to delete.
     */
    where: SimulacaoWhereUniqueInput
  }

  /**
   * Simulacao deleteMany
   */
  export type SimulacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Simulacaos to delete
     */
    where?: SimulacaoWhereInput
    /**
     * Limit how many Simulacaos to delete.
     */
    limit?: number
  }

  /**
   * Simulacao without action
   */
  export type SimulacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulacao
     */
    select?: SimulacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulacao
     */
    omit?: SimulacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    cpf: 'cpf',
    senha: 'senha',
    ativado: 'ativado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    tipoUserId: 'tipoUserId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const TipoUserScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    descricao: 'descricao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    ativado: 'ativado'
  };

  export type TipoUserScalarFieldEnum = (typeof TipoUserScalarFieldEnum)[keyof typeof TipoUserScalarFieldEnum]


  export const PropriedadeScalarFieldEnum: {
    id: 'id',
    nomeProprietario: 'nomeProprietario',
    nomePropriedade: 'nomePropriedade',
    latitude: 'latitude',
    longitude: 'longitude',
    altitude: 'altitude',
    simulacao: 'simulacao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    adminId: 'adminId'
  };

  export type PropriedadeScalarFieldEnum = (typeof PropriedadeScalarFieldEnum)[keyof typeof PropriedadeScalarFieldEnum]


  export const HistoricoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    valorSimulacao: 'valorSimulacao',
    propriedadeId: 'propriedadeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type HistoricoScalarFieldEnum = (typeof HistoricoScalarFieldEnum)[keyof typeof HistoricoScalarFieldEnum]


  export const PrecipitacaoScalarFieldEnum: {
    id: 'id',
    mmAno: 'mmAno',
    chuvas: 'chuvas',
    mmDia: 'mmDia',
    cvDia: 'cvDia',
    mmMes: 'mmMes',
    cvMes: 'cvMes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PrecipitacaoScalarFieldEnum = (typeof PrecipitacaoScalarFieldEnum)[keyof typeof PrecipitacaoScalarFieldEnum]


  export const SoloScalarFieldEnum: {
    id: 'id',
    profundidade: 'profundidade',
    fatorRocha: 'fatorRocha',
    condutHidraulicaSaturada: 'condutHidraulicaSaturada',
    densidadeAparente: 'densidadeAparente',
    agua0Bar: 'agua0Bar',
    agua13Bar: 'agua13Bar',
    agua15Bar: 'agua15Bar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type SoloScalarFieldEnum = (typeof SoloScalarFieldEnum)[keyof typeof SoloScalarFieldEnum]


  export const EstimativasScalarFieldEnum: {
    id: 'id',
    valorTotal: 'valorTotal',
    descricao: 'descricao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    propriedadeId: 'propriedadeId'
  };

  export type EstimativasScalarFieldEnum = (typeof EstimativasScalarFieldEnum)[keyof typeof EstimativasScalarFieldEnum]


  export const SimulacaoScalarFieldEnum: {
    id: 'id',
    dadosJson: 'dadosJson',
    resultado: 'resultado',
    dataSimulacao: 'dataSimulacao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    propriedadeId: 'propriedadeId'
  };

  export type SimulacaoScalarFieldEnum = (typeof SimulacaoScalarFieldEnum)[keyof typeof SimulacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AdminOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    cpf: 'cpf',
    senha: 'senha'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const TipoUserOrderByRelevanceFieldEnum: {
    tipo: 'tipo',
    descricao: 'descricao'
  };

  export type TipoUserOrderByRelevanceFieldEnum = (typeof TipoUserOrderByRelevanceFieldEnum)[keyof typeof TipoUserOrderByRelevanceFieldEnum]


  export const PropriedadeOrderByRelevanceFieldEnum: {
    nomeProprietario: 'nomeProprietario',
    nomePropriedade: 'nomePropriedade',
    simulacao: 'simulacao'
  };

  export type PropriedadeOrderByRelevanceFieldEnum = (typeof PropriedadeOrderByRelevanceFieldEnum)[keyof typeof PropriedadeOrderByRelevanceFieldEnum]


  export const HistoricoOrderByRelevanceFieldEnum: {
    descricao: 'descricao'
  };

  export type HistoricoOrderByRelevanceFieldEnum = (typeof HistoricoOrderByRelevanceFieldEnum)[keyof typeof HistoricoOrderByRelevanceFieldEnum]


  export const EstimativasOrderByRelevanceFieldEnum: {
    descricao: 'descricao'
  };

  export type EstimativasOrderByRelevanceFieldEnum = (typeof EstimativasOrderByRelevanceFieldEnum)[keyof typeof EstimativasOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    nome?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    cpf?: StringFilter<"Admin"> | string
    senha?: StringFilter<"Admin"> | string
    ativado?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    tipoUserId?: IntNullableFilter<"Admin"> | number | null
    tipoUser?: XOR<TipoUserNullableScalarRelationFilter, TipoUserWhereInput> | null
    propriedade?: XOR<PropriedadeNullableScalarRelationFilter, PropriedadeWhereInput> | null
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    ativado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    tipoUserId?: SortOrderInput | SortOrder
    tipoUser?: TipoUserOrderByWithRelationInput
    propriedade?: PropriedadeOrderByWithRelationInput
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    nome?: StringFilter<"Admin"> | string
    senha?: StringFilter<"Admin"> | string
    ativado?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    tipoUserId?: IntNullableFilter<"Admin"> | number | null
    tipoUser?: XOR<TipoUserNullableScalarRelationFilter, TipoUserWhereInput> | null
    propriedade?: XOR<PropriedadeNullableScalarRelationFilter, PropriedadeWhereInput> | null
  }, "id" | "email" | "cpf">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    ativado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    tipoUserId?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    nome?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    cpf?: StringWithAggregatesFilter<"Admin"> | string
    senha?: StringWithAggregatesFilter<"Admin"> | string
    ativado?: BoolWithAggregatesFilter<"Admin"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
    tipoUserId?: IntNullableWithAggregatesFilter<"Admin"> | number | null
  }

  export type TipoUserWhereInput = {
    AND?: TipoUserWhereInput | TipoUserWhereInput[]
    OR?: TipoUserWhereInput[]
    NOT?: TipoUserWhereInput | TipoUserWhereInput[]
    id?: IntFilter<"TipoUser"> | number
    tipo?: StringFilter<"TipoUser"> | string
    descricao?: StringNullableFilter<"TipoUser"> | string | null
    createdAt?: DateTimeFilter<"TipoUser"> | Date | string
    updatedAt?: DateTimeNullableFilter<"TipoUser"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"TipoUser"> | Date | string | null
    ativado?: BoolFilter<"TipoUser"> | boolean
    admins?: AdminListRelationFilter
  }

  export type TipoUserOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    ativado?: SortOrder
    admins?: AdminOrderByRelationAggregateInput
    _relevance?: TipoUserOrderByRelevanceInput
  }

  export type TipoUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipoUserWhereInput | TipoUserWhereInput[]
    OR?: TipoUserWhereInput[]
    NOT?: TipoUserWhereInput | TipoUserWhereInput[]
    tipo?: StringFilter<"TipoUser"> | string
    descricao?: StringNullableFilter<"TipoUser"> | string | null
    createdAt?: DateTimeFilter<"TipoUser"> | Date | string
    updatedAt?: DateTimeNullableFilter<"TipoUser"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"TipoUser"> | Date | string | null
    ativado?: BoolFilter<"TipoUser"> | boolean
    admins?: AdminListRelationFilter
  }, "id">

  export type TipoUserOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    ativado?: SortOrder
    _count?: TipoUserCountOrderByAggregateInput
    _avg?: TipoUserAvgOrderByAggregateInput
    _max?: TipoUserMaxOrderByAggregateInput
    _min?: TipoUserMinOrderByAggregateInput
    _sum?: TipoUserSumOrderByAggregateInput
  }

  export type TipoUserScalarWhereWithAggregatesInput = {
    AND?: TipoUserScalarWhereWithAggregatesInput | TipoUserScalarWhereWithAggregatesInput[]
    OR?: TipoUserScalarWhereWithAggregatesInput[]
    NOT?: TipoUserScalarWhereWithAggregatesInput | TipoUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoUser"> | number
    tipo?: StringWithAggregatesFilter<"TipoUser"> | string
    descricao?: StringNullableWithAggregatesFilter<"TipoUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TipoUser"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"TipoUser"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TipoUser"> | Date | string | null
    ativado?: BoolWithAggregatesFilter<"TipoUser"> | boolean
  }

  export type PropriedadeWhereInput = {
    AND?: PropriedadeWhereInput | PropriedadeWhereInput[]
    OR?: PropriedadeWhereInput[]
    NOT?: PropriedadeWhereInput | PropriedadeWhereInput[]
    id?: IntFilter<"Propriedade"> | number
    nomeProprietario?: StringFilter<"Propriedade"> | string
    nomePropriedade?: StringFilter<"Propriedade"> | string
    latitude?: FloatFilter<"Propriedade"> | number
    longitude?: FloatFilter<"Propriedade"> | number
    altitude?: FloatFilter<"Propriedade"> | number
    simulacao?: StringFilter<"Propriedade"> | string
    createdAt?: DateTimeFilter<"Propriedade"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Propriedade"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Propriedade"> | Date | string | null
    adminId?: IntNullableFilter<"Propriedade"> | number | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    estimativas?: EstimativasListRelationFilter
    simulacoes?: SimulacaoListRelationFilter
    historicos?: HistoricoListRelationFilter
  }

  export type PropriedadeOrderByWithRelationInput = {
    id?: SortOrder
    nomeProprietario?: SortOrder
    nomePropriedade?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    simulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    admin?: AdminOrderByWithRelationInput
    estimativas?: EstimativasOrderByRelationAggregateInput
    simulacoes?: SimulacaoOrderByRelationAggregateInput
    historicos?: HistoricoOrderByRelationAggregateInput
    _relevance?: PropriedadeOrderByRelevanceInput
  }

  export type PropriedadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    adminId?: number
    AND?: PropriedadeWhereInput | PropriedadeWhereInput[]
    OR?: PropriedadeWhereInput[]
    NOT?: PropriedadeWhereInput | PropriedadeWhereInput[]
    nomeProprietario?: StringFilter<"Propriedade"> | string
    nomePropriedade?: StringFilter<"Propriedade"> | string
    latitude?: FloatFilter<"Propriedade"> | number
    longitude?: FloatFilter<"Propriedade"> | number
    altitude?: FloatFilter<"Propriedade"> | number
    simulacao?: StringFilter<"Propriedade"> | string
    createdAt?: DateTimeFilter<"Propriedade"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Propriedade"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Propriedade"> | Date | string | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    estimativas?: EstimativasListRelationFilter
    simulacoes?: SimulacaoListRelationFilter
    historicos?: HistoricoListRelationFilter
  }, "id" | "adminId">

  export type PropriedadeOrderByWithAggregationInput = {
    id?: SortOrder
    nomeProprietario?: SortOrder
    nomePropriedade?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    simulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    _count?: PropriedadeCountOrderByAggregateInput
    _avg?: PropriedadeAvgOrderByAggregateInput
    _max?: PropriedadeMaxOrderByAggregateInput
    _min?: PropriedadeMinOrderByAggregateInput
    _sum?: PropriedadeSumOrderByAggregateInput
  }

  export type PropriedadeScalarWhereWithAggregatesInput = {
    AND?: PropriedadeScalarWhereWithAggregatesInput | PropriedadeScalarWhereWithAggregatesInput[]
    OR?: PropriedadeScalarWhereWithAggregatesInput[]
    NOT?: PropriedadeScalarWhereWithAggregatesInput | PropriedadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Propriedade"> | number
    nomeProprietario?: StringWithAggregatesFilter<"Propriedade"> | string
    nomePropriedade?: StringWithAggregatesFilter<"Propriedade"> | string
    latitude?: FloatWithAggregatesFilter<"Propriedade"> | number
    longitude?: FloatWithAggregatesFilter<"Propriedade"> | number
    altitude?: FloatWithAggregatesFilter<"Propriedade"> | number
    simulacao?: StringWithAggregatesFilter<"Propriedade"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Propriedade"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Propriedade"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Propriedade"> | Date | string | null
    adminId?: IntNullableWithAggregatesFilter<"Propriedade"> | number | null
  }

  export type HistoricoWhereInput = {
    AND?: HistoricoWhereInput | HistoricoWhereInput[]
    OR?: HistoricoWhereInput[]
    NOT?: HistoricoWhereInput | HistoricoWhereInput[]
    id?: IntFilter<"Historico"> | number
    descricao?: StringNullableFilter<"Historico"> | string | null
    valorSimulacao?: FloatFilter<"Historico"> | number
    propriedadeId?: IntFilter<"Historico"> | number
    createdAt?: DateTimeFilter<"Historico"> | Date | string
    updatedAt?: DateTimeFilter<"Historico"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Historico"> | Date | string | null
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
  }

  export type HistoricoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valorSimulacao?: SortOrder
    propriedadeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    propriedade?: PropriedadeOrderByWithRelationInput
    _relevance?: HistoricoOrderByRelevanceInput
  }

  export type HistoricoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistoricoWhereInput | HistoricoWhereInput[]
    OR?: HistoricoWhereInput[]
    NOT?: HistoricoWhereInput | HistoricoWhereInput[]
    descricao?: StringNullableFilter<"Historico"> | string | null
    valorSimulacao?: FloatFilter<"Historico"> | number
    propriedadeId?: IntFilter<"Historico"> | number
    createdAt?: DateTimeFilter<"Historico"> | Date | string
    updatedAt?: DateTimeFilter<"Historico"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Historico"> | Date | string | null
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
  }, "id">

  export type HistoricoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valorSimulacao?: SortOrder
    propriedadeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: HistoricoCountOrderByAggregateInput
    _avg?: HistoricoAvgOrderByAggregateInput
    _max?: HistoricoMaxOrderByAggregateInput
    _min?: HistoricoMinOrderByAggregateInput
    _sum?: HistoricoSumOrderByAggregateInput
  }

  export type HistoricoScalarWhereWithAggregatesInput = {
    AND?: HistoricoScalarWhereWithAggregatesInput | HistoricoScalarWhereWithAggregatesInput[]
    OR?: HistoricoScalarWhereWithAggregatesInput[]
    NOT?: HistoricoScalarWhereWithAggregatesInput | HistoricoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Historico"> | number
    descricao?: StringNullableWithAggregatesFilter<"Historico"> | string | null
    valorSimulacao?: FloatWithAggregatesFilter<"Historico"> | number
    propriedadeId?: IntWithAggregatesFilter<"Historico"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Historico"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Historico"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Historico"> | Date | string | null
  }

  export type PrecipitacaoWhereInput = {
    AND?: PrecipitacaoWhereInput | PrecipitacaoWhereInput[]
    OR?: PrecipitacaoWhereInput[]
    NOT?: PrecipitacaoWhereInput | PrecipitacaoWhereInput[]
    id?: IntFilter<"Precipitacao"> | number
    mmAno?: FloatFilter<"Precipitacao"> | number
    chuvas?: FloatFilter<"Precipitacao"> | number
    mmDia?: FloatFilter<"Precipitacao"> | number
    cvDia?: FloatFilter<"Precipitacao"> | number
    mmMes?: FloatFilter<"Precipitacao"> | number
    cvMes?: FloatFilter<"Precipitacao"> | number
    createdAt?: DateTimeFilter<"Precipitacao"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Precipitacao"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Precipitacao"> | Date | string | null
  }

  export type PrecipitacaoOrderByWithRelationInput = {
    id?: SortOrder
    mmAno?: SortOrder
    chuvas?: SortOrder
    mmDia?: SortOrder
    cvDia?: SortOrder
    mmMes?: SortOrder
    cvMes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
  }

  export type PrecipitacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrecipitacaoWhereInput | PrecipitacaoWhereInput[]
    OR?: PrecipitacaoWhereInput[]
    NOT?: PrecipitacaoWhereInput | PrecipitacaoWhereInput[]
    mmAno?: FloatFilter<"Precipitacao"> | number
    chuvas?: FloatFilter<"Precipitacao"> | number
    mmDia?: FloatFilter<"Precipitacao"> | number
    cvDia?: FloatFilter<"Precipitacao"> | number
    mmMes?: FloatFilter<"Precipitacao"> | number
    cvMes?: FloatFilter<"Precipitacao"> | number
    createdAt?: DateTimeFilter<"Precipitacao"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Precipitacao"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Precipitacao"> | Date | string | null
  }, "id">

  export type PrecipitacaoOrderByWithAggregationInput = {
    id?: SortOrder
    mmAno?: SortOrder
    chuvas?: SortOrder
    mmDia?: SortOrder
    cvDia?: SortOrder
    mmMes?: SortOrder
    cvMes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PrecipitacaoCountOrderByAggregateInput
    _avg?: PrecipitacaoAvgOrderByAggregateInput
    _max?: PrecipitacaoMaxOrderByAggregateInput
    _min?: PrecipitacaoMinOrderByAggregateInput
    _sum?: PrecipitacaoSumOrderByAggregateInput
  }

  export type PrecipitacaoScalarWhereWithAggregatesInput = {
    AND?: PrecipitacaoScalarWhereWithAggregatesInput | PrecipitacaoScalarWhereWithAggregatesInput[]
    OR?: PrecipitacaoScalarWhereWithAggregatesInput[]
    NOT?: PrecipitacaoScalarWhereWithAggregatesInput | PrecipitacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Precipitacao"> | number
    mmAno?: FloatWithAggregatesFilter<"Precipitacao"> | number
    chuvas?: FloatWithAggregatesFilter<"Precipitacao"> | number
    mmDia?: FloatWithAggregatesFilter<"Precipitacao"> | number
    cvDia?: FloatWithAggregatesFilter<"Precipitacao"> | number
    mmMes?: FloatWithAggregatesFilter<"Precipitacao"> | number
    cvMes?: FloatWithAggregatesFilter<"Precipitacao"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Precipitacao"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Precipitacao"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Precipitacao"> | Date | string | null
  }

  export type SoloWhereInput = {
    AND?: SoloWhereInput | SoloWhereInput[]
    OR?: SoloWhereInput[]
    NOT?: SoloWhereInput | SoloWhereInput[]
    id?: IntFilter<"Solo"> | number
    profundidade?: FloatFilter<"Solo"> | number
    fatorRocha?: FloatFilter<"Solo"> | number
    condutHidraulicaSaturada?: FloatFilter<"Solo"> | number
    densidadeAparente?: FloatFilter<"Solo"> | number
    agua0Bar?: FloatFilter<"Solo"> | number
    agua13Bar?: FloatFilter<"Solo"> | number
    agua15Bar?: FloatFilter<"Solo"> | number
    createdAt?: DateTimeFilter<"Solo"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Solo"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Solo"> | Date | string | null
  }

  export type SoloOrderByWithRelationInput = {
    id?: SortOrder
    profundidade?: SortOrder
    fatorRocha?: SortOrder
    condutHidraulicaSaturada?: SortOrder
    densidadeAparente?: SortOrder
    agua0Bar?: SortOrder
    agua13Bar?: SortOrder
    agua15Bar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
  }

  export type SoloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SoloWhereInput | SoloWhereInput[]
    OR?: SoloWhereInput[]
    NOT?: SoloWhereInput | SoloWhereInput[]
    profundidade?: FloatFilter<"Solo"> | number
    fatorRocha?: FloatFilter<"Solo"> | number
    condutHidraulicaSaturada?: FloatFilter<"Solo"> | number
    densidadeAparente?: FloatFilter<"Solo"> | number
    agua0Bar?: FloatFilter<"Solo"> | number
    agua13Bar?: FloatFilter<"Solo"> | number
    agua15Bar?: FloatFilter<"Solo"> | number
    createdAt?: DateTimeFilter<"Solo"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Solo"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Solo"> | Date | string | null
  }, "id">

  export type SoloOrderByWithAggregationInput = {
    id?: SortOrder
    profundidade?: SortOrder
    fatorRocha?: SortOrder
    condutHidraulicaSaturada?: SortOrder
    densidadeAparente?: SortOrder
    agua0Bar?: SortOrder
    agua13Bar?: SortOrder
    agua15Bar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SoloCountOrderByAggregateInput
    _avg?: SoloAvgOrderByAggregateInput
    _max?: SoloMaxOrderByAggregateInput
    _min?: SoloMinOrderByAggregateInput
    _sum?: SoloSumOrderByAggregateInput
  }

  export type SoloScalarWhereWithAggregatesInput = {
    AND?: SoloScalarWhereWithAggregatesInput | SoloScalarWhereWithAggregatesInput[]
    OR?: SoloScalarWhereWithAggregatesInput[]
    NOT?: SoloScalarWhereWithAggregatesInput | SoloScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Solo"> | number
    profundidade?: FloatWithAggregatesFilter<"Solo"> | number
    fatorRocha?: FloatWithAggregatesFilter<"Solo"> | number
    condutHidraulicaSaturada?: FloatWithAggregatesFilter<"Solo"> | number
    densidadeAparente?: FloatWithAggregatesFilter<"Solo"> | number
    agua0Bar?: FloatWithAggregatesFilter<"Solo"> | number
    agua13Bar?: FloatWithAggregatesFilter<"Solo"> | number
    agua15Bar?: FloatWithAggregatesFilter<"Solo"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Solo"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Solo"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Solo"> | Date | string | null
  }

  export type EstimativasWhereInput = {
    AND?: EstimativasWhereInput | EstimativasWhereInput[]
    OR?: EstimativasWhereInput[]
    NOT?: EstimativasWhereInput | EstimativasWhereInput[]
    id?: IntFilter<"Estimativas"> | number
    valorTotal?: FloatFilter<"Estimativas"> | number
    descricao?: StringNullableFilter<"Estimativas"> | string | null
    createdAt?: DateTimeFilter<"Estimativas"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Estimativas"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Estimativas"> | Date | string | null
    propriedadeId?: IntFilter<"Estimativas"> | number
    propriedade?: XOR<PropriedadeNullableScalarRelationFilter, PropriedadeWhereInput> | null
  }

  export type EstimativasOrderByWithRelationInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    propriedadeId?: SortOrder
    propriedade?: PropriedadeOrderByWithRelationInput
    _relevance?: EstimativasOrderByRelevanceInput
  }

  export type EstimativasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstimativasWhereInput | EstimativasWhereInput[]
    OR?: EstimativasWhereInput[]
    NOT?: EstimativasWhereInput | EstimativasWhereInput[]
    valorTotal?: FloatFilter<"Estimativas"> | number
    descricao?: StringNullableFilter<"Estimativas"> | string | null
    createdAt?: DateTimeFilter<"Estimativas"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Estimativas"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Estimativas"> | Date | string | null
    propriedadeId?: IntFilter<"Estimativas"> | number
    propriedade?: XOR<PropriedadeNullableScalarRelationFilter, PropriedadeWhereInput> | null
  }, "id">

  export type EstimativasOrderByWithAggregationInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    propriedadeId?: SortOrder
    _count?: EstimativasCountOrderByAggregateInput
    _avg?: EstimativasAvgOrderByAggregateInput
    _max?: EstimativasMaxOrderByAggregateInput
    _min?: EstimativasMinOrderByAggregateInput
    _sum?: EstimativasSumOrderByAggregateInput
  }

  export type EstimativasScalarWhereWithAggregatesInput = {
    AND?: EstimativasScalarWhereWithAggregatesInput | EstimativasScalarWhereWithAggregatesInput[]
    OR?: EstimativasScalarWhereWithAggregatesInput[]
    NOT?: EstimativasScalarWhereWithAggregatesInput | EstimativasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estimativas"> | number
    valorTotal?: FloatWithAggregatesFilter<"Estimativas"> | number
    descricao?: StringNullableWithAggregatesFilter<"Estimativas"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Estimativas"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Estimativas"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Estimativas"> | Date | string | null
    propriedadeId?: IntWithAggregatesFilter<"Estimativas"> | number
  }

  export type SimulacaoWhereInput = {
    AND?: SimulacaoWhereInput | SimulacaoWhereInput[]
    OR?: SimulacaoWhereInput[]
    NOT?: SimulacaoWhereInput | SimulacaoWhereInput[]
    id?: IntFilter<"Simulacao"> | number
    dadosJson?: JsonFilter<"Simulacao">
    resultado?: FloatFilter<"Simulacao"> | number
    dataSimulacao?: DateTimeFilter<"Simulacao"> | Date | string
    createdAt?: DateTimeFilter<"Simulacao"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Simulacao"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Simulacao"> | Date | string | null
    propriedadeId?: IntFilter<"Simulacao"> | number
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
  }

  export type SimulacaoOrderByWithRelationInput = {
    id?: SortOrder
    dadosJson?: SortOrder
    resultado?: SortOrder
    dataSimulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    propriedadeId?: SortOrder
    propriedade?: PropriedadeOrderByWithRelationInput
  }

  export type SimulacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SimulacaoWhereInput | SimulacaoWhereInput[]
    OR?: SimulacaoWhereInput[]
    NOT?: SimulacaoWhereInput | SimulacaoWhereInput[]
    dadosJson?: JsonFilter<"Simulacao">
    resultado?: FloatFilter<"Simulacao"> | number
    dataSimulacao?: DateTimeFilter<"Simulacao"> | Date | string
    createdAt?: DateTimeFilter<"Simulacao"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Simulacao"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Simulacao"> | Date | string | null
    propriedadeId?: IntFilter<"Simulacao"> | number
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
  }, "id">

  export type SimulacaoOrderByWithAggregationInput = {
    id?: SortOrder
    dadosJson?: SortOrder
    resultado?: SortOrder
    dataSimulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    propriedadeId?: SortOrder
    _count?: SimulacaoCountOrderByAggregateInput
    _avg?: SimulacaoAvgOrderByAggregateInput
    _max?: SimulacaoMaxOrderByAggregateInput
    _min?: SimulacaoMinOrderByAggregateInput
    _sum?: SimulacaoSumOrderByAggregateInput
  }

  export type SimulacaoScalarWhereWithAggregatesInput = {
    AND?: SimulacaoScalarWhereWithAggregatesInput | SimulacaoScalarWhereWithAggregatesInput[]
    OR?: SimulacaoScalarWhereWithAggregatesInput[]
    NOT?: SimulacaoScalarWhereWithAggregatesInput | SimulacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Simulacao"> | number
    dadosJson?: JsonWithAggregatesFilter<"Simulacao">
    resultado?: FloatWithAggregatesFilter<"Simulacao"> | number
    dataSimulacao?: DateTimeWithAggregatesFilter<"Simulacao"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Simulacao"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Simulacao"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Simulacao"> | Date | string | null
    propriedadeId?: IntWithAggregatesFilter<"Simulacao"> | number
  }

  export type AdminCreateInput = {
    nome: string
    email: string
    cpf: string
    senha: string
    ativado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    tipoUser?: TipoUserCreateNestedOneWithoutAdminsInput
    propriedade?: PropriedadeCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    senha: string
    ativado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    tipoUserId?: number | null
    propriedade?: PropriedadeUncheckedCreateNestedOneWithoutAdminInput
  }

  export type AdminUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoUser?: TipoUserUpdateOneWithoutAdminsNestedInput
    propriedade?: PropriedadeUpdateOneWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    propriedade?: PropriedadeUncheckedUpdateOneWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    senha: string
    ativado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    tipoUserId?: number | null
  }

  export type AdminUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TipoUserCreateInput = {
    tipo: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    ativado?: boolean
    admins?: AdminCreateNestedManyWithoutTipoUserInput
  }

  export type TipoUserUncheckedCreateInput = {
    id?: number
    tipo: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    ativado?: boolean
    admins?: AdminUncheckedCreateNestedManyWithoutTipoUserInput
  }

  export type TipoUserUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    admins?: AdminUpdateManyWithoutTipoUserNestedInput
  }

  export type TipoUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
    admins?: AdminUncheckedUpdateManyWithoutTipoUserNestedInput
  }

  export type TipoUserCreateManyInput = {
    id?: number
    tipo: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    ativado?: boolean
  }

  export type TipoUserUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TipoUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropriedadeCreateInput = {
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    altitude: number
    simulacao: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadeInput
    estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateInput = {
    id?: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    altitude: number
    simulacao: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    adminId?: number | null
    estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUpdateInput = {
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    simulacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadeNestedInput
    estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    simulacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeCreateManyInput = {
    id?: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    altitude: number
    simulacao: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    adminId?: number | null
  }

  export type PropriedadeUpdateManyMutationInput = {
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    simulacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropriedadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    simulacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistoricoCreateInput = {
    descricao?: string | null
    valorSimulacao: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    propriedade: PropriedadeCreateNestedOneWithoutHistoricosInput
  }

  export type HistoricoUncheckedCreateInput = {
    id?: number
    descricao?: string | null
    valorSimulacao: number
    propriedadeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type HistoricoUpdateInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedade?: PropriedadeUpdateOneRequiredWithoutHistoricosNestedInput
  }

  export type HistoricoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoricoCreateManyInput = {
    id?: number
    descricao?: string | null
    valorSimulacao: number
    propriedadeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type HistoricoUpdateManyMutationInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoricoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrecipitacaoCreateInput = {
    mmAno: number
    chuvas: number
    mmDia: number
    cvDia: number
    mmMes: number
    cvMes: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type PrecipitacaoUncheckedCreateInput = {
    id?: number
    mmAno: number
    chuvas: number
    mmDia: number
    cvDia: number
    mmMes: number
    cvMes: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type PrecipitacaoUpdateInput = {
    mmAno?: FloatFieldUpdateOperationsInput | number
    chuvas?: FloatFieldUpdateOperationsInput | number
    mmDia?: FloatFieldUpdateOperationsInput | number
    cvDia?: FloatFieldUpdateOperationsInput | number
    mmMes?: FloatFieldUpdateOperationsInput | number
    cvMes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrecipitacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mmAno?: FloatFieldUpdateOperationsInput | number
    chuvas?: FloatFieldUpdateOperationsInput | number
    mmDia?: FloatFieldUpdateOperationsInput | number
    cvDia?: FloatFieldUpdateOperationsInput | number
    mmMes?: FloatFieldUpdateOperationsInput | number
    cvMes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrecipitacaoCreateManyInput = {
    id?: number
    mmAno: number
    chuvas: number
    mmDia: number
    cvDia: number
    mmMes: number
    cvMes: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type PrecipitacaoUpdateManyMutationInput = {
    mmAno?: FloatFieldUpdateOperationsInput | number
    chuvas?: FloatFieldUpdateOperationsInput | number
    mmDia?: FloatFieldUpdateOperationsInput | number
    cvDia?: FloatFieldUpdateOperationsInput | number
    mmMes?: FloatFieldUpdateOperationsInput | number
    cvMes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrecipitacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mmAno?: FloatFieldUpdateOperationsInput | number
    chuvas?: FloatFieldUpdateOperationsInput | number
    mmDia?: FloatFieldUpdateOperationsInput | number
    cvDia?: FloatFieldUpdateOperationsInput | number
    mmMes?: FloatFieldUpdateOperationsInput | number
    cvMes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SoloCreateInput = {
    profundidade: number
    fatorRocha: number
    condutHidraulicaSaturada: number
    densidadeAparente: number
    agua0Bar: number
    agua13Bar: number
    agua15Bar: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type SoloUncheckedCreateInput = {
    id?: number
    profundidade: number
    fatorRocha: number
    condutHidraulicaSaturada: number
    densidadeAparente: number
    agua0Bar: number
    agua13Bar: number
    agua15Bar: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type SoloUpdateInput = {
    profundidade?: FloatFieldUpdateOperationsInput | number
    fatorRocha?: FloatFieldUpdateOperationsInput | number
    condutHidraulicaSaturada?: FloatFieldUpdateOperationsInput | number
    densidadeAparente?: FloatFieldUpdateOperationsInput | number
    agua0Bar?: FloatFieldUpdateOperationsInput | number
    agua13Bar?: FloatFieldUpdateOperationsInput | number
    agua15Bar?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SoloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    profundidade?: FloatFieldUpdateOperationsInput | number
    fatorRocha?: FloatFieldUpdateOperationsInput | number
    condutHidraulicaSaturada?: FloatFieldUpdateOperationsInput | number
    densidadeAparente?: FloatFieldUpdateOperationsInput | number
    agua0Bar?: FloatFieldUpdateOperationsInput | number
    agua13Bar?: FloatFieldUpdateOperationsInput | number
    agua15Bar?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SoloCreateManyInput = {
    id?: number
    profundidade: number
    fatorRocha: number
    condutHidraulicaSaturada: number
    densidadeAparente: number
    agua0Bar: number
    agua13Bar: number
    agua15Bar: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type SoloUpdateManyMutationInput = {
    profundidade?: FloatFieldUpdateOperationsInput | number
    fatorRocha?: FloatFieldUpdateOperationsInput | number
    condutHidraulicaSaturada?: FloatFieldUpdateOperationsInput | number
    densidadeAparente?: FloatFieldUpdateOperationsInput | number
    agua0Bar?: FloatFieldUpdateOperationsInput | number
    agua13Bar?: FloatFieldUpdateOperationsInput | number
    agua15Bar?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SoloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    profundidade?: FloatFieldUpdateOperationsInput | number
    fatorRocha?: FloatFieldUpdateOperationsInput | number
    condutHidraulicaSaturada?: FloatFieldUpdateOperationsInput | number
    densidadeAparente?: FloatFieldUpdateOperationsInput | number
    agua0Bar?: FloatFieldUpdateOperationsInput | number
    agua13Bar?: FloatFieldUpdateOperationsInput | number
    agua15Bar?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EstimativasCreateInput = {
    valorTotal: number
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedade?: PropriedadeCreateNestedOneWithoutEstimativasInput
  }

  export type EstimativasUncheckedCreateInput = {
    id?: number
    valorTotal: number
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId: number
  }

  export type EstimativasUpdateInput = {
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedade?: PropriedadeUpdateOneWithoutEstimativasNestedInput
  }

  export type EstimativasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: IntFieldUpdateOperationsInput | number
  }

  export type EstimativasCreateManyInput = {
    id?: number
    valorTotal: number
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId: number
  }

  export type EstimativasUpdateManyMutationInput = {
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EstimativasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: IntFieldUpdateOperationsInput | number
  }

  export type SimulacaoCreateInput = {
    dadosJson: JsonNullValueInput | InputJsonValue
    resultado: number
    dataSimulacao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedade: PropriedadeCreateNestedOneWithoutSimulacoesInput
  }

  export type SimulacaoUncheckedCreateInput = {
    id?: number
    dadosJson: JsonNullValueInput | InputJsonValue
    resultado: number
    dataSimulacao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId: number
  }

  export type SimulacaoUpdateInput = {
    dadosJson?: JsonNullValueInput | InputJsonValue
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedade?: PropriedadeUpdateOneRequiredWithoutSimulacoesNestedInput
  }

  export type SimulacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dadosJson?: JsonNullValueInput | InputJsonValue
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: IntFieldUpdateOperationsInput | number
  }

  export type SimulacaoCreateManyInput = {
    id?: number
    dadosJson: JsonNullValueInput | InputJsonValue
    resultado: number
    dataSimulacao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId: number
  }

  export type SimulacaoUpdateManyMutationInput = {
    dadosJson?: JsonNullValueInput | InputJsonValue
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SimulacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dadosJson?: JsonNullValueInput | InputJsonValue
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TipoUserNullableScalarRelationFilter = {
    is?: TipoUserWhereInput | null
    isNot?: TipoUserWhereInput | null
  }

  export type PropriedadeNullableScalarRelationFilter = {
    is?: PropriedadeWhereInput | null
    isNot?: PropriedadeWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    ativado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    tipoUserId?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
    tipoUserId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    ativado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    tipoUserId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    ativado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    tipoUserId?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
    tipoUserId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AdminListRelationFilter = {
    every?: AdminWhereInput
    some?: AdminWhereInput
    none?: AdminWhereInput
  }

  export type AdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoUserOrderByRelevanceInput = {
    fields: TipoUserOrderByRelevanceFieldEnum | TipoUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TipoUserCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    ativado?: SortOrder
  }

  export type TipoUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoUserMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    ativado?: SortOrder
  }

  export type TipoUserMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    ativado?: SortOrder
  }

  export type TipoUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type EstimativasListRelationFilter = {
    every?: EstimativasWhereInput
    some?: EstimativasWhereInput
    none?: EstimativasWhereInput
  }

  export type SimulacaoListRelationFilter = {
    every?: SimulacaoWhereInput
    some?: SimulacaoWhereInput
    none?: SimulacaoWhereInput
  }

  export type HistoricoListRelationFilter = {
    every?: HistoricoWhereInput
    some?: HistoricoWhereInput
    none?: HistoricoWhereInput
  }

  export type EstimativasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SimulacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoricoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropriedadeOrderByRelevanceInput = {
    fields: PropriedadeOrderByRelevanceFieldEnum | PropriedadeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PropriedadeCountOrderByAggregateInput = {
    id?: SortOrder
    nomeProprietario?: SortOrder
    nomePropriedade?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    simulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    adminId?: SortOrder
  }

  export type PropriedadeAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    adminId?: SortOrder
  }

  export type PropriedadeMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeProprietario?: SortOrder
    nomePropriedade?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    simulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    adminId?: SortOrder
  }

  export type PropriedadeMinOrderByAggregateInput = {
    id?: SortOrder
    nomeProprietario?: SortOrder
    nomePropriedade?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    simulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    adminId?: SortOrder
  }

  export type PropriedadeSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    adminId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PropriedadeScalarRelationFilter = {
    is?: PropriedadeWhereInput
    isNot?: PropriedadeWhereInput
  }

  export type HistoricoOrderByRelevanceInput = {
    fields: HistoricoOrderByRelevanceFieldEnum | HistoricoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HistoricoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    valorSimulacao?: SortOrder
    propriedadeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type HistoricoAvgOrderByAggregateInput = {
    id?: SortOrder
    valorSimulacao?: SortOrder
    propriedadeId?: SortOrder
  }

  export type HistoricoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    valorSimulacao?: SortOrder
    propriedadeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type HistoricoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    valorSimulacao?: SortOrder
    propriedadeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type HistoricoSumOrderByAggregateInput = {
    id?: SortOrder
    valorSimulacao?: SortOrder
    propriedadeId?: SortOrder
  }

  export type PrecipitacaoCountOrderByAggregateInput = {
    id?: SortOrder
    mmAno?: SortOrder
    chuvas?: SortOrder
    mmDia?: SortOrder
    cvDia?: SortOrder
    mmMes?: SortOrder
    cvMes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PrecipitacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    mmAno?: SortOrder
    chuvas?: SortOrder
    mmDia?: SortOrder
    cvDia?: SortOrder
    mmMes?: SortOrder
    cvMes?: SortOrder
  }

  export type PrecipitacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    mmAno?: SortOrder
    chuvas?: SortOrder
    mmDia?: SortOrder
    cvDia?: SortOrder
    mmMes?: SortOrder
    cvMes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PrecipitacaoMinOrderByAggregateInput = {
    id?: SortOrder
    mmAno?: SortOrder
    chuvas?: SortOrder
    mmDia?: SortOrder
    cvDia?: SortOrder
    mmMes?: SortOrder
    cvMes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PrecipitacaoSumOrderByAggregateInput = {
    id?: SortOrder
    mmAno?: SortOrder
    chuvas?: SortOrder
    mmDia?: SortOrder
    cvDia?: SortOrder
    mmMes?: SortOrder
    cvMes?: SortOrder
  }

  export type SoloCountOrderByAggregateInput = {
    id?: SortOrder
    profundidade?: SortOrder
    fatorRocha?: SortOrder
    condutHidraulicaSaturada?: SortOrder
    densidadeAparente?: SortOrder
    agua0Bar?: SortOrder
    agua13Bar?: SortOrder
    agua15Bar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SoloAvgOrderByAggregateInput = {
    id?: SortOrder
    profundidade?: SortOrder
    fatorRocha?: SortOrder
    condutHidraulicaSaturada?: SortOrder
    densidadeAparente?: SortOrder
    agua0Bar?: SortOrder
    agua13Bar?: SortOrder
    agua15Bar?: SortOrder
  }

  export type SoloMaxOrderByAggregateInput = {
    id?: SortOrder
    profundidade?: SortOrder
    fatorRocha?: SortOrder
    condutHidraulicaSaturada?: SortOrder
    densidadeAparente?: SortOrder
    agua0Bar?: SortOrder
    agua13Bar?: SortOrder
    agua15Bar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SoloMinOrderByAggregateInput = {
    id?: SortOrder
    profundidade?: SortOrder
    fatorRocha?: SortOrder
    condutHidraulicaSaturada?: SortOrder
    densidadeAparente?: SortOrder
    agua0Bar?: SortOrder
    agua13Bar?: SortOrder
    agua15Bar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SoloSumOrderByAggregateInput = {
    id?: SortOrder
    profundidade?: SortOrder
    fatorRocha?: SortOrder
    condutHidraulicaSaturada?: SortOrder
    densidadeAparente?: SortOrder
    agua0Bar?: SortOrder
    agua13Bar?: SortOrder
    agua15Bar?: SortOrder
  }

  export type EstimativasOrderByRelevanceInput = {
    fields: EstimativasOrderByRelevanceFieldEnum | EstimativasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EstimativasCountOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    propriedadeId?: SortOrder
  }

  export type EstimativasAvgOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    propriedadeId?: SortOrder
  }

  export type EstimativasMaxOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    propriedadeId?: SortOrder
  }

  export type EstimativasMinOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    propriedadeId?: SortOrder
  }

  export type EstimativasSumOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    propriedadeId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SimulacaoCountOrderByAggregateInput = {
    id?: SortOrder
    dadosJson?: SortOrder
    resultado?: SortOrder
    dataSimulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    propriedadeId?: SortOrder
  }

  export type SimulacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    resultado?: SortOrder
    propriedadeId?: SortOrder
  }

  export type SimulacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    resultado?: SortOrder
    dataSimulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    propriedadeId?: SortOrder
  }

  export type SimulacaoMinOrderByAggregateInput = {
    id?: SortOrder
    resultado?: SortOrder
    dataSimulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    propriedadeId?: SortOrder
  }

  export type SimulacaoSumOrderByAggregateInput = {
    id?: SortOrder
    resultado?: SortOrder
    propriedadeId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type TipoUserCreateNestedOneWithoutAdminsInput = {
    create?: XOR<TipoUserCreateWithoutAdminsInput, TipoUserUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: TipoUserCreateOrConnectWithoutAdminsInput
    connect?: TipoUserWhereUniqueInput
  }

  export type PropriedadeCreateNestedOneWithoutAdminInput = {
    create?: XOR<PropriedadeCreateWithoutAdminInput, PropriedadeUncheckedCreateWithoutAdminInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutAdminInput
    connect?: PropriedadeWhereUniqueInput
  }

  export type PropriedadeUncheckedCreateNestedOneWithoutAdminInput = {
    create?: XOR<PropriedadeCreateWithoutAdminInput, PropriedadeUncheckedCreateWithoutAdminInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutAdminInput
    connect?: PropriedadeWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TipoUserUpdateOneWithoutAdminsNestedInput = {
    create?: XOR<TipoUserCreateWithoutAdminsInput, TipoUserUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: TipoUserCreateOrConnectWithoutAdminsInput
    upsert?: TipoUserUpsertWithoutAdminsInput
    disconnect?: TipoUserWhereInput | boolean
    delete?: TipoUserWhereInput | boolean
    connect?: TipoUserWhereUniqueInput
    update?: XOR<XOR<TipoUserUpdateToOneWithWhereWithoutAdminsInput, TipoUserUpdateWithoutAdminsInput>, TipoUserUncheckedUpdateWithoutAdminsInput>
  }

  export type PropriedadeUpdateOneWithoutAdminNestedInput = {
    create?: XOR<PropriedadeCreateWithoutAdminInput, PropriedadeUncheckedCreateWithoutAdminInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutAdminInput
    upsert?: PropriedadeUpsertWithoutAdminInput
    disconnect?: PropriedadeWhereInput | boolean
    delete?: PropriedadeWhereInput | boolean
    connect?: PropriedadeWhereUniqueInput
    update?: XOR<XOR<PropriedadeUpdateToOneWithWhereWithoutAdminInput, PropriedadeUpdateWithoutAdminInput>, PropriedadeUncheckedUpdateWithoutAdminInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropriedadeUncheckedUpdateOneWithoutAdminNestedInput = {
    create?: XOR<PropriedadeCreateWithoutAdminInput, PropriedadeUncheckedCreateWithoutAdminInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutAdminInput
    upsert?: PropriedadeUpsertWithoutAdminInput
    disconnect?: PropriedadeWhereInput | boolean
    delete?: PropriedadeWhereInput | boolean
    connect?: PropriedadeWhereUniqueInput
    update?: XOR<XOR<PropriedadeUpdateToOneWithWhereWithoutAdminInput, PropriedadeUpdateWithoutAdminInput>, PropriedadeUncheckedUpdateWithoutAdminInput>
  }

  export type AdminCreateNestedManyWithoutTipoUserInput = {
    create?: XOR<AdminCreateWithoutTipoUserInput, AdminUncheckedCreateWithoutTipoUserInput> | AdminCreateWithoutTipoUserInput[] | AdminUncheckedCreateWithoutTipoUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutTipoUserInput | AdminCreateOrConnectWithoutTipoUserInput[]
    createMany?: AdminCreateManyTipoUserInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedManyWithoutTipoUserInput = {
    create?: XOR<AdminCreateWithoutTipoUserInput, AdminUncheckedCreateWithoutTipoUserInput> | AdminCreateWithoutTipoUserInput[] | AdminUncheckedCreateWithoutTipoUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutTipoUserInput | AdminCreateOrConnectWithoutTipoUserInput[]
    createMany?: AdminCreateManyTipoUserInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AdminUpdateManyWithoutTipoUserNestedInput = {
    create?: XOR<AdminCreateWithoutTipoUserInput, AdminUncheckedCreateWithoutTipoUserInput> | AdminCreateWithoutTipoUserInput[] | AdminUncheckedCreateWithoutTipoUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutTipoUserInput | AdminCreateOrConnectWithoutTipoUserInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutTipoUserInput | AdminUpsertWithWhereUniqueWithoutTipoUserInput[]
    createMany?: AdminCreateManyTipoUserInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutTipoUserInput | AdminUpdateWithWhereUniqueWithoutTipoUserInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutTipoUserInput | AdminUpdateManyWithWhereWithoutTipoUserInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type AdminUncheckedUpdateManyWithoutTipoUserNestedInput = {
    create?: XOR<AdminCreateWithoutTipoUserInput, AdminUncheckedCreateWithoutTipoUserInput> | AdminCreateWithoutTipoUserInput[] | AdminUncheckedCreateWithoutTipoUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutTipoUserInput | AdminCreateOrConnectWithoutTipoUserInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutTipoUserInput | AdminUpsertWithWhereUniqueWithoutTipoUserInput[]
    createMany?: AdminCreateManyTipoUserInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutTipoUserInput | AdminUpdateWithWhereUniqueWithoutTipoUserInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutTipoUserInput | AdminUpdateManyWithWhereWithoutTipoUserInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutPropriedadeInput = {
    create?: XOR<AdminCreateWithoutPropriedadeInput, AdminUncheckedCreateWithoutPropriedadeInput>
    connectOrCreate?: AdminCreateOrConnectWithoutPropriedadeInput
    connect?: AdminWhereUniqueInput
  }

  export type EstimativasCreateNestedManyWithoutPropriedadeInput = {
    create?: XOR<EstimativasCreateWithoutPropriedadeInput, EstimativasUncheckedCreateWithoutPropriedadeInput> | EstimativasCreateWithoutPropriedadeInput[] | EstimativasUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: EstimativasCreateOrConnectWithoutPropriedadeInput | EstimativasCreateOrConnectWithoutPropriedadeInput[]
    createMany?: EstimativasCreateManyPropriedadeInputEnvelope
    connect?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
  }

  export type SimulacaoCreateNestedManyWithoutPropriedadeInput = {
    create?: XOR<SimulacaoCreateWithoutPropriedadeInput, SimulacaoUncheckedCreateWithoutPropriedadeInput> | SimulacaoCreateWithoutPropriedadeInput[] | SimulacaoUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: SimulacaoCreateOrConnectWithoutPropriedadeInput | SimulacaoCreateOrConnectWithoutPropriedadeInput[]
    createMany?: SimulacaoCreateManyPropriedadeInputEnvelope
    connect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
  }

  export type HistoricoCreateNestedManyWithoutPropriedadeInput = {
    create?: XOR<HistoricoCreateWithoutPropriedadeInput, HistoricoUncheckedCreateWithoutPropriedadeInput> | HistoricoCreateWithoutPropriedadeInput[] | HistoricoUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutPropriedadeInput | HistoricoCreateOrConnectWithoutPropriedadeInput[]
    createMany?: HistoricoCreateManyPropriedadeInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput = {
    create?: XOR<EstimativasCreateWithoutPropriedadeInput, EstimativasUncheckedCreateWithoutPropriedadeInput> | EstimativasCreateWithoutPropriedadeInput[] | EstimativasUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: EstimativasCreateOrConnectWithoutPropriedadeInput | EstimativasCreateOrConnectWithoutPropriedadeInput[]
    createMany?: EstimativasCreateManyPropriedadeInputEnvelope
    connect?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
  }

  export type SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput = {
    create?: XOR<SimulacaoCreateWithoutPropriedadeInput, SimulacaoUncheckedCreateWithoutPropriedadeInput> | SimulacaoCreateWithoutPropriedadeInput[] | SimulacaoUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: SimulacaoCreateOrConnectWithoutPropriedadeInput | SimulacaoCreateOrConnectWithoutPropriedadeInput[]
    createMany?: SimulacaoCreateManyPropriedadeInputEnvelope
    connect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
  }

  export type HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput = {
    create?: XOR<HistoricoCreateWithoutPropriedadeInput, HistoricoUncheckedCreateWithoutPropriedadeInput> | HistoricoCreateWithoutPropriedadeInput[] | HistoricoUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutPropriedadeInput | HistoricoCreateOrConnectWithoutPropriedadeInput[]
    createMany?: HistoricoCreateManyPropriedadeInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdminUpdateOneWithoutPropriedadeNestedInput = {
    create?: XOR<AdminCreateWithoutPropriedadeInput, AdminUncheckedCreateWithoutPropriedadeInput>
    connectOrCreate?: AdminCreateOrConnectWithoutPropriedadeInput
    upsert?: AdminUpsertWithoutPropriedadeInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutPropriedadeInput, AdminUpdateWithoutPropriedadeInput>, AdminUncheckedUpdateWithoutPropriedadeInput>
  }

  export type EstimativasUpdateManyWithoutPropriedadeNestedInput = {
    create?: XOR<EstimativasCreateWithoutPropriedadeInput, EstimativasUncheckedCreateWithoutPropriedadeInput> | EstimativasCreateWithoutPropriedadeInput[] | EstimativasUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: EstimativasCreateOrConnectWithoutPropriedadeInput | EstimativasCreateOrConnectWithoutPropriedadeInput[]
    upsert?: EstimativasUpsertWithWhereUniqueWithoutPropriedadeInput | EstimativasUpsertWithWhereUniqueWithoutPropriedadeInput[]
    createMany?: EstimativasCreateManyPropriedadeInputEnvelope
    set?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
    disconnect?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
    delete?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
    connect?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
    update?: EstimativasUpdateWithWhereUniqueWithoutPropriedadeInput | EstimativasUpdateWithWhereUniqueWithoutPropriedadeInput[]
    updateMany?: EstimativasUpdateManyWithWhereWithoutPropriedadeInput | EstimativasUpdateManyWithWhereWithoutPropriedadeInput[]
    deleteMany?: EstimativasScalarWhereInput | EstimativasScalarWhereInput[]
  }

  export type SimulacaoUpdateManyWithoutPropriedadeNestedInput = {
    create?: XOR<SimulacaoCreateWithoutPropriedadeInput, SimulacaoUncheckedCreateWithoutPropriedadeInput> | SimulacaoCreateWithoutPropriedadeInput[] | SimulacaoUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: SimulacaoCreateOrConnectWithoutPropriedadeInput | SimulacaoCreateOrConnectWithoutPropriedadeInput[]
    upsert?: SimulacaoUpsertWithWhereUniqueWithoutPropriedadeInput | SimulacaoUpsertWithWhereUniqueWithoutPropriedadeInput[]
    createMany?: SimulacaoCreateManyPropriedadeInputEnvelope
    set?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    disconnect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    delete?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    connect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    update?: SimulacaoUpdateWithWhereUniqueWithoutPropriedadeInput | SimulacaoUpdateWithWhereUniqueWithoutPropriedadeInput[]
    updateMany?: SimulacaoUpdateManyWithWhereWithoutPropriedadeInput | SimulacaoUpdateManyWithWhereWithoutPropriedadeInput[]
    deleteMany?: SimulacaoScalarWhereInput | SimulacaoScalarWhereInput[]
  }

  export type HistoricoUpdateManyWithoutPropriedadeNestedInput = {
    create?: XOR<HistoricoCreateWithoutPropriedadeInput, HistoricoUncheckedCreateWithoutPropriedadeInput> | HistoricoCreateWithoutPropriedadeInput[] | HistoricoUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutPropriedadeInput | HistoricoCreateOrConnectWithoutPropriedadeInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutPropriedadeInput | HistoricoUpsertWithWhereUniqueWithoutPropriedadeInput[]
    createMany?: HistoricoCreateManyPropriedadeInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutPropriedadeInput | HistoricoUpdateWithWhereUniqueWithoutPropriedadeInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutPropriedadeInput | HistoricoUpdateManyWithWhereWithoutPropriedadeInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput = {
    create?: XOR<EstimativasCreateWithoutPropriedadeInput, EstimativasUncheckedCreateWithoutPropriedadeInput> | EstimativasCreateWithoutPropriedadeInput[] | EstimativasUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: EstimativasCreateOrConnectWithoutPropriedadeInput | EstimativasCreateOrConnectWithoutPropriedadeInput[]
    upsert?: EstimativasUpsertWithWhereUniqueWithoutPropriedadeInput | EstimativasUpsertWithWhereUniqueWithoutPropriedadeInput[]
    createMany?: EstimativasCreateManyPropriedadeInputEnvelope
    set?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
    disconnect?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
    delete?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
    connect?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
    update?: EstimativasUpdateWithWhereUniqueWithoutPropriedadeInput | EstimativasUpdateWithWhereUniqueWithoutPropriedadeInput[]
    updateMany?: EstimativasUpdateManyWithWhereWithoutPropriedadeInput | EstimativasUpdateManyWithWhereWithoutPropriedadeInput[]
    deleteMany?: EstimativasScalarWhereInput | EstimativasScalarWhereInput[]
  }

  export type SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput = {
    create?: XOR<SimulacaoCreateWithoutPropriedadeInput, SimulacaoUncheckedCreateWithoutPropriedadeInput> | SimulacaoCreateWithoutPropriedadeInput[] | SimulacaoUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: SimulacaoCreateOrConnectWithoutPropriedadeInput | SimulacaoCreateOrConnectWithoutPropriedadeInput[]
    upsert?: SimulacaoUpsertWithWhereUniqueWithoutPropriedadeInput | SimulacaoUpsertWithWhereUniqueWithoutPropriedadeInput[]
    createMany?: SimulacaoCreateManyPropriedadeInputEnvelope
    set?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    disconnect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    delete?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    connect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    update?: SimulacaoUpdateWithWhereUniqueWithoutPropriedadeInput | SimulacaoUpdateWithWhereUniqueWithoutPropriedadeInput[]
    updateMany?: SimulacaoUpdateManyWithWhereWithoutPropriedadeInput | SimulacaoUpdateManyWithWhereWithoutPropriedadeInput[]
    deleteMany?: SimulacaoScalarWhereInput | SimulacaoScalarWhereInput[]
  }

  export type HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput = {
    create?: XOR<HistoricoCreateWithoutPropriedadeInput, HistoricoUncheckedCreateWithoutPropriedadeInput> | HistoricoCreateWithoutPropriedadeInput[] | HistoricoUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutPropriedadeInput | HistoricoCreateOrConnectWithoutPropriedadeInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutPropriedadeInput | HistoricoUpsertWithWhereUniqueWithoutPropriedadeInput[]
    createMany?: HistoricoCreateManyPropriedadeInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutPropriedadeInput | HistoricoUpdateWithWhereUniqueWithoutPropriedadeInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutPropriedadeInput | HistoricoUpdateManyWithWhereWithoutPropriedadeInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type PropriedadeCreateNestedOneWithoutHistoricosInput = {
    create?: XOR<PropriedadeCreateWithoutHistoricosInput, PropriedadeUncheckedCreateWithoutHistoricosInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutHistoricosInput
    connect?: PropriedadeWhereUniqueInput
  }

  export type PropriedadeUpdateOneRequiredWithoutHistoricosNestedInput = {
    create?: XOR<PropriedadeCreateWithoutHistoricosInput, PropriedadeUncheckedCreateWithoutHistoricosInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutHistoricosInput
    upsert?: PropriedadeUpsertWithoutHistoricosInput
    connect?: PropriedadeWhereUniqueInput
    update?: XOR<XOR<PropriedadeUpdateToOneWithWhereWithoutHistoricosInput, PropriedadeUpdateWithoutHistoricosInput>, PropriedadeUncheckedUpdateWithoutHistoricosInput>
  }

  export type PropriedadeCreateNestedOneWithoutEstimativasInput = {
    create?: XOR<PropriedadeCreateWithoutEstimativasInput, PropriedadeUncheckedCreateWithoutEstimativasInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutEstimativasInput
    connect?: PropriedadeWhereUniqueInput
  }

  export type PropriedadeUpdateOneWithoutEstimativasNestedInput = {
    create?: XOR<PropriedadeCreateWithoutEstimativasInput, PropriedadeUncheckedCreateWithoutEstimativasInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutEstimativasInput
    upsert?: PropriedadeUpsertWithoutEstimativasInput
    disconnect?: PropriedadeWhereInput | boolean
    delete?: PropriedadeWhereInput | boolean
    connect?: PropriedadeWhereUniqueInput
    update?: XOR<XOR<PropriedadeUpdateToOneWithWhereWithoutEstimativasInput, PropriedadeUpdateWithoutEstimativasInput>, PropriedadeUncheckedUpdateWithoutEstimativasInput>
  }

  export type PropriedadeCreateNestedOneWithoutSimulacoesInput = {
    create?: XOR<PropriedadeCreateWithoutSimulacoesInput, PropriedadeUncheckedCreateWithoutSimulacoesInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutSimulacoesInput
    connect?: PropriedadeWhereUniqueInput
  }

  export type PropriedadeUpdateOneRequiredWithoutSimulacoesNestedInput = {
    create?: XOR<PropriedadeCreateWithoutSimulacoesInput, PropriedadeUncheckedCreateWithoutSimulacoesInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutSimulacoesInput
    upsert?: PropriedadeUpsertWithoutSimulacoesInput
    connect?: PropriedadeWhereUniqueInput
    update?: XOR<XOR<PropriedadeUpdateToOneWithWhereWithoutSimulacoesInput, PropriedadeUpdateWithoutSimulacoesInput>, PropriedadeUncheckedUpdateWithoutSimulacoesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TipoUserCreateWithoutAdminsInput = {
    tipo: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    ativado?: boolean
  }

  export type TipoUserUncheckedCreateWithoutAdminsInput = {
    id?: number
    tipo: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    ativado?: boolean
  }

  export type TipoUserCreateOrConnectWithoutAdminsInput = {
    where: TipoUserWhereUniqueInput
    create: XOR<TipoUserCreateWithoutAdminsInput, TipoUserUncheckedCreateWithoutAdminsInput>
  }

  export type PropriedadeCreateWithoutAdminInput = {
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    altitude: number
    simulacao: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutAdminInput = {
    id?: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    altitude: number
    simulacao: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutAdminInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutAdminInput, PropriedadeUncheckedCreateWithoutAdminInput>
  }

  export type TipoUserUpsertWithoutAdminsInput = {
    update: XOR<TipoUserUpdateWithoutAdminsInput, TipoUserUncheckedUpdateWithoutAdminsInput>
    create: XOR<TipoUserCreateWithoutAdminsInput, TipoUserUncheckedCreateWithoutAdminsInput>
    where?: TipoUserWhereInput
  }

  export type TipoUserUpdateToOneWithWhereWithoutAdminsInput = {
    where?: TipoUserWhereInput
    data: XOR<TipoUserUpdateWithoutAdminsInput, TipoUserUncheckedUpdateWithoutAdminsInput>
  }

  export type TipoUserUpdateWithoutAdminsInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TipoUserUncheckedUpdateWithoutAdminsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropriedadeUpsertWithoutAdminInput = {
    update: XOR<PropriedadeUpdateWithoutAdminInput, PropriedadeUncheckedUpdateWithoutAdminInput>
    create: XOR<PropriedadeCreateWithoutAdminInput, PropriedadeUncheckedCreateWithoutAdminInput>
    where?: PropriedadeWhereInput
  }

  export type PropriedadeUpdateToOneWithWhereWithoutAdminInput = {
    where?: PropriedadeWhereInput
    data: XOR<PropriedadeUpdateWithoutAdminInput, PropriedadeUncheckedUpdateWithoutAdminInput>
  }

  export type PropriedadeUpdateWithoutAdminInput = {
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    simulacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    simulacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
  }

  export type AdminCreateWithoutTipoUserInput = {
    nome: string
    email: string
    cpf: string
    senha: string
    ativado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedade?: PropriedadeCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutTipoUserInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    senha: string
    ativado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedade?: PropriedadeUncheckedCreateNestedOneWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutTipoUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutTipoUserInput, AdminUncheckedCreateWithoutTipoUserInput>
  }

  export type AdminCreateManyTipoUserInputEnvelope = {
    data: AdminCreateManyTipoUserInput | AdminCreateManyTipoUserInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithWhereUniqueWithoutTipoUserInput = {
    where: AdminWhereUniqueInput
    update: XOR<AdminUpdateWithoutTipoUserInput, AdminUncheckedUpdateWithoutTipoUserInput>
    create: XOR<AdminCreateWithoutTipoUserInput, AdminUncheckedCreateWithoutTipoUserInput>
  }

  export type AdminUpdateWithWhereUniqueWithoutTipoUserInput = {
    where: AdminWhereUniqueInput
    data: XOR<AdminUpdateWithoutTipoUserInput, AdminUncheckedUpdateWithoutTipoUserInput>
  }

  export type AdminUpdateManyWithWhereWithoutTipoUserInput = {
    where: AdminScalarWhereInput
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyWithoutTipoUserInput>
  }

  export type AdminScalarWhereInput = {
    AND?: AdminScalarWhereInput | AdminScalarWhereInput[]
    OR?: AdminScalarWhereInput[]
    NOT?: AdminScalarWhereInput | AdminScalarWhereInput[]
    id?: IntFilter<"Admin"> | number
    nome?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    cpf?: StringFilter<"Admin"> | string
    senha?: StringFilter<"Admin"> | string
    ativado?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    tipoUserId?: IntNullableFilter<"Admin"> | number | null
  }

  export type AdminCreateWithoutPropriedadeInput = {
    nome: string
    email: string
    cpf: string
    senha: string
    ativado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    tipoUser?: TipoUserCreateNestedOneWithoutAdminsInput
  }

  export type AdminUncheckedCreateWithoutPropriedadeInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    senha: string
    ativado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    tipoUserId?: number | null
  }

  export type AdminCreateOrConnectWithoutPropriedadeInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutPropriedadeInput, AdminUncheckedCreateWithoutPropriedadeInput>
  }

  export type EstimativasCreateWithoutPropriedadeInput = {
    valorTotal: number
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type EstimativasUncheckedCreateWithoutPropriedadeInput = {
    id?: number
    valorTotal: number
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type EstimativasCreateOrConnectWithoutPropriedadeInput = {
    where: EstimativasWhereUniqueInput
    create: XOR<EstimativasCreateWithoutPropriedadeInput, EstimativasUncheckedCreateWithoutPropriedadeInput>
  }

  export type EstimativasCreateManyPropriedadeInputEnvelope = {
    data: EstimativasCreateManyPropriedadeInput | EstimativasCreateManyPropriedadeInput[]
    skipDuplicates?: boolean
  }

  export type SimulacaoCreateWithoutPropriedadeInput = {
    dadosJson: JsonNullValueInput | InputJsonValue
    resultado: number
    dataSimulacao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type SimulacaoUncheckedCreateWithoutPropriedadeInput = {
    id?: number
    dadosJson: JsonNullValueInput | InputJsonValue
    resultado: number
    dataSimulacao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type SimulacaoCreateOrConnectWithoutPropriedadeInput = {
    where: SimulacaoWhereUniqueInput
    create: XOR<SimulacaoCreateWithoutPropriedadeInput, SimulacaoUncheckedCreateWithoutPropriedadeInput>
  }

  export type SimulacaoCreateManyPropriedadeInputEnvelope = {
    data: SimulacaoCreateManyPropriedadeInput | SimulacaoCreateManyPropriedadeInput[]
    skipDuplicates?: boolean
  }

  export type HistoricoCreateWithoutPropriedadeInput = {
    descricao?: string | null
    valorSimulacao: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type HistoricoUncheckedCreateWithoutPropriedadeInput = {
    id?: number
    descricao?: string | null
    valorSimulacao: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type HistoricoCreateOrConnectWithoutPropriedadeInput = {
    where: HistoricoWhereUniqueInput
    create: XOR<HistoricoCreateWithoutPropriedadeInput, HistoricoUncheckedCreateWithoutPropriedadeInput>
  }

  export type HistoricoCreateManyPropriedadeInputEnvelope = {
    data: HistoricoCreateManyPropriedadeInput | HistoricoCreateManyPropriedadeInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutPropriedadeInput = {
    update: XOR<AdminUpdateWithoutPropriedadeInput, AdminUncheckedUpdateWithoutPropriedadeInput>
    create: XOR<AdminCreateWithoutPropriedadeInput, AdminUncheckedCreateWithoutPropriedadeInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutPropriedadeInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutPropriedadeInput, AdminUncheckedUpdateWithoutPropriedadeInput>
  }

  export type AdminUpdateWithoutPropriedadeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoUser?: TipoUserUpdateOneWithoutAdminsNestedInput
  }

  export type AdminUncheckedUpdateWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipoUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EstimativasUpsertWithWhereUniqueWithoutPropriedadeInput = {
    where: EstimativasWhereUniqueInput
    update: XOR<EstimativasUpdateWithoutPropriedadeInput, EstimativasUncheckedUpdateWithoutPropriedadeInput>
    create: XOR<EstimativasCreateWithoutPropriedadeInput, EstimativasUncheckedCreateWithoutPropriedadeInput>
  }

  export type EstimativasUpdateWithWhereUniqueWithoutPropriedadeInput = {
    where: EstimativasWhereUniqueInput
    data: XOR<EstimativasUpdateWithoutPropriedadeInput, EstimativasUncheckedUpdateWithoutPropriedadeInput>
  }

  export type EstimativasUpdateManyWithWhereWithoutPropriedadeInput = {
    where: EstimativasScalarWhereInput
    data: XOR<EstimativasUpdateManyMutationInput, EstimativasUncheckedUpdateManyWithoutPropriedadeInput>
  }

  export type EstimativasScalarWhereInput = {
    AND?: EstimativasScalarWhereInput | EstimativasScalarWhereInput[]
    OR?: EstimativasScalarWhereInput[]
    NOT?: EstimativasScalarWhereInput | EstimativasScalarWhereInput[]
    id?: IntFilter<"Estimativas"> | number
    valorTotal?: FloatFilter<"Estimativas"> | number
    descricao?: StringNullableFilter<"Estimativas"> | string | null
    createdAt?: DateTimeFilter<"Estimativas"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Estimativas"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Estimativas"> | Date | string | null
    propriedadeId?: IntFilter<"Estimativas"> | number
  }

  export type SimulacaoUpsertWithWhereUniqueWithoutPropriedadeInput = {
    where: SimulacaoWhereUniqueInput
    update: XOR<SimulacaoUpdateWithoutPropriedadeInput, SimulacaoUncheckedUpdateWithoutPropriedadeInput>
    create: XOR<SimulacaoCreateWithoutPropriedadeInput, SimulacaoUncheckedCreateWithoutPropriedadeInput>
  }

  export type SimulacaoUpdateWithWhereUniqueWithoutPropriedadeInput = {
    where: SimulacaoWhereUniqueInput
    data: XOR<SimulacaoUpdateWithoutPropriedadeInput, SimulacaoUncheckedUpdateWithoutPropriedadeInput>
  }

  export type SimulacaoUpdateManyWithWhereWithoutPropriedadeInput = {
    where: SimulacaoScalarWhereInput
    data: XOR<SimulacaoUpdateManyMutationInput, SimulacaoUncheckedUpdateManyWithoutPropriedadeInput>
  }

  export type SimulacaoScalarWhereInput = {
    AND?: SimulacaoScalarWhereInput | SimulacaoScalarWhereInput[]
    OR?: SimulacaoScalarWhereInput[]
    NOT?: SimulacaoScalarWhereInput | SimulacaoScalarWhereInput[]
    id?: IntFilter<"Simulacao"> | number
    dadosJson?: JsonFilter<"Simulacao">
    resultado?: FloatFilter<"Simulacao"> | number
    dataSimulacao?: DateTimeFilter<"Simulacao"> | Date | string
    createdAt?: DateTimeFilter<"Simulacao"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Simulacao"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Simulacao"> | Date | string | null
    propriedadeId?: IntFilter<"Simulacao"> | number
  }

  export type HistoricoUpsertWithWhereUniqueWithoutPropriedadeInput = {
    where: HistoricoWhereUniqueInput
    update: XOR<HistoricoUpdateWithoutPropriedadeInput, HistoricoUncheckedUpdateWithoutPropriedadeInput>
    create: XOR<HistoricoCreateWithoutPropriedadeInput, HistoricoUncheckedCreateWithoutPropriedadeInput>
  }

  export type HistoricoUpdateWithWhereUniqueWithoutPropriedadeInput = {
    where: HistoricoWhereUniqueInput
    data: XOR<HistoricoUpdateWithoutPropriedadeInput, HistoricoUncheckedUpdateWithoutPropriedadeInput>
  }

  export type HistoricoUpdateManyWithWhereWithoutPropriedadeInput = {
    where: HistoricoScalarWhereInput
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyWithoutPropriedadeInput>
  }

  export type HistoricoScalarWhereInput = {
    AND?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
    OR?: HistoricoScalarWhereInput[]
    NOT?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
    id?: IntFilter<"Historico"> | number
    descricao?: StringNullableFilter<"Historico"> | string | null
    valorSimulacao?: FloatFilter<"Historico"> | number
    propriedadeId?: IntFilter<"Historico"> | number
    createdAt?: DateTimeFilter<"Historico"> | Date | string
    updatedAt?: DateTimeFilter<"Historico"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Historico"> | Date | string | null
  }

  export type PropriedadeCreateWithoutHistoricosInput = {
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    altitude: number
    simulacao: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadeInput
    estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutHistoricosInput = {
    id?: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    altitude: number
    simulacao: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    adminId?: number | null
    estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutHistoricosInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutHistoricosInput, PropriedadeUncheckedCreateWithoutHistoricosInput>
  }

  export type PropriedadeUpsertWithoutHistoricosInput = {
    update: XOR<PropriedadeUpdateWithoutHistoricosInput, PropriedadeUncheckedUpdateWithoutHistoricosInput>
    create: XOR<PropriedadeCreateWithoutHistoricosInput, PropriedadeUncheckedCreateWithoutHistoricosInput>
    where?: PropriedadeWhereInput
  }

  export type PropriedadeUpdateToOneWithWhereWithoutHistoricosInput = {
    where?: PropriedadeWhereInput
    data: XOR<PropriedadeUpdateWithoutHistoricosInput, PropriedadeUncheckedUpdateWithoutHistoricosInput>
  }

  export type PropriedadeUpdateWithoutHistoricosInput = {
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    simulacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadeNestedInput
    estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutHistoricosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    simulacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeCreateWithoutEstimativasInput = {
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    altitude: number
    simulacao: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutEstimativasInput = {
    id?: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    altitude: number
    simulacao: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    adminId?: number | null
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutEstimativasInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutEstimativasInput, PropriedadeUncheckedCreateWithoutEstimativasInput>
  }

  export type PropriedadeUpsertWithoutEstimativasInput = {
    update: XOR<PropriedadeUpdateWithoutEstimativasInput, PropriedadeUncheckedUpdateWithoutEstimativasInput>
    create: XOR<PropriedadeCreateWithoutEstimativasInput, PropriedadeUncheckedCreateWithoutEstimativasInput>
    where?: PropriedadeWhereInput
  }

  export type PropriedadeUpdateToOneWithWhereWithoutEstimativasInput = {
    where?: PropriedadeWhereInput
    data: XOR<PropriedadeUpdateWithoutEstimativasInput, PropriedadeUncheckedUpdateWithoutEstimativasInput>
  }

  export type PropriedadeUpdateWithoutEstimativasInput = {
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    simulacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutEstimativasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    simulacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeCreateWithoutSimulacoesInput = {
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    altitude: number
    simulacao: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadeInput
    estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutSimulacoesInput = {
    id?: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    altitude: number
    simulacao: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    adminId?: number | null
    estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutSimulacoesInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutSimulacoesInput, PropriedadeUncheckedCreateWithoutSimulacoesInput>
  }

  export type PropriedadeUpsertWithoutSimulacoesInput = {
    update: XOR<PropriedadeUpdateWithoutSimulacoesInput, PropriedadeUncheckedUpdateWithoutSimulacoesInput>
    create: XOR<PropriedadeCreateWithoutSimulacoesInput, PropriedadeUncheckedCreateWithoutSimulacoesInput>
    where?: PropriedadeWhereInput
  }

  export type PropriedadeUpdateToOneWithWhereWithoutSimulacoesInput = {
    where?: PropriedadeWhereInput
    data: XOR<PropriedadeUpdateWithoutSimulacoesInput, PropriedadeUncheckedUpdateWithoutSimulacoesInput>
  }

  export type PropriedadeUpdateWithoutSimulacoesInput = {
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    simulacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadeNestedInput
    estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutSimulacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    simulacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
  }

  export type AdminCreateManyTipoUserInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    senha: string
    ativado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AdminUpdateWithoutTipoUserInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedade?: PropriedadeUpdateOneWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutTipoUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedade?: PropriedadeUncheckedUpdateOneWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateManyWithoutTipoUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EstimativasCreateManyPropriedadeInput = {
    id?: number
    valorTotal: number
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type SimulacaoCreateManyPropriedadeInput = {
    id?: number
    dadosJson: JsonNullValueInput | InputJsonValue
    resultado: number
    dataSimulacao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type HistoricoCreateManyPropriedadeInput = {
    id?: number
    descricao?: string | null
    valorSimulacao: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EstimativasUpdateWithoutPropriedadeInput = {
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EstimativasUncheckedUpdateWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EstimativasUncheckedUpdateManyWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SimulacaoUpdateWithoutPropriedadeInput = {
    dadosJson?: JsonNullValueInput | InputJsonValue
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SimulacaoUncheckedUpdateWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    dadosJson?: JsonNullValueInput | InputJsonValue
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SimulacaoUncheckedUpdateManyWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    dadosJson?: JsonNullValueInput | InputJsonValue
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoricoUpdateWithoutPropriedadeInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoricoUncheckedUpdateWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoricoUncheckedUpdateManyWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
  export const dmmf: runtime.BaseDMMF
}