
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
 * Model PropriedadeCultura
 * 
 */
export type PropriedadeCultura = $Result.DefaultSelection<Prisma.$PropriedadeCulturaPayload>
/**
 * Model PropriedadeSolo
 * 
 */
export type PropriedadeSolo = $Result.DefaultSelection<Prisma.$PropriedadeSoloPayload>
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
 * Model Cultura
 * 
 */
export type Cultura = $Result.DefaultSelection<Prisma.$CulturaPayload>

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
   * `prisma.propriedadeCultura`: Exposes CRUD operations for the **PropriedadeCultura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropriedadeCulturas
    * const propriedadeCulturas = await prisma.propriedadeCultura.findMany()
    * ```
    */
  get propriedadeCultura(): Prisma.PropriedadeCulturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propriedadeSolo`: Exposes CRUD operations for the **PropriedadeSolo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropriedadeSolos
    * const propriedadeSolos = await prisma.propriedadeSolo.findMany()
    * ```
    */
  get propriedadeSolo(): Prisma.PropriedadeSoloDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.cultura`: Exposes CRUD operations for the **Cultura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Culturas
    * const culturas = await prisma.cultura.findMany()
    * ```
    */
  get cultura(): Prisma.CulturaDelegate<ExtArgs, ClientOptions>;
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
    PropriedadeCultura: 'PropriedadeCultura',
    PropriedadeSolo: 'PropriedadeSolo',
    Historico: 'Historico',
    Precipitacao: 'Precipitacao',
    Solo: 'Solo',
    Estimativas: 'Estimativas',
    Simulacao: 'Simulacao',
    Cultura: 'Cultura'
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
      modelProps: "admin" | "tipoUser" | "propriedade" | "propriedadeCultura" | "propriedadeSolo" | "historico" | "precipitacao" | "solo" | "estimativas" | "simulacao" | "cultura"
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
      PropriedadeCultura: {
        payload: Prisma.$PropriedadeCulturaPayload<ExtArgs>
        fields: Prisma.PropriedadeCulturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropriedadeCulturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeCulturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropriedadeCulturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeCulturaPayload>
          }
          findFirst: {
            args: Prisma.PropriedadeCulturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeCulturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropriedadeCulturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeCulturaPayload>
          }
          findMany: {
            args: Prisma.PropriedadeCulturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeCulturaPayload>[]
          }
          create: {
            args: Prisma.PropriedadeCulturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeCulturaPayload>
          }
          createMany: {
            args: Prisma.PropriedadeCulturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PropriedadeCulturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeCulturaPayload>
          }
          update: {
            args: Prisma.PropriedadeCulturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeCulturaPayload>
          }
          deleteMany: {
            args: Prisma.PropriedadeCulturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropriedadeCulturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropriedadeCulturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeCulturaPayload>
          }
          aggregate: {
            args: Prisma.PropriedadeCulturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropriedadeCultura>
          }
          groupBy: {
            args: Prisma.PropriedadeCulturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropriedadeCulturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropriedadeCulturaCountArgs<ExtArgs>
            result: $Utils.Optional<PropriedadeCulturaCountAggregateOutputType> | number
          }
        }
      }
      PropriedadeSolo: {
        payload: Prisma.$PropriedadeSoloPayload<ExtArgs>
        fields: Prisma.PropriedadeSoloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropriedadeSoloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeSoloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropriedadeSoloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeSoloPayload>
          }
          findFirst: {
            args: Prisma.PropriedadeSoloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeSoloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropriedadeSoloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeSoloPayload>
          }
          findMany: {
            args: Prisma.PropriedadeSoloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeSoloPayload>[]
          }
          create: {
            args: Prisma.PropriedadeSoloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeSoloPayload>
          }
          createMany: {
            args: Prisma.PropriedadeSoloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PropriedadeSoloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeSoloPayload>
          }
          update: {
            args: Prisma.PropriedadeSoloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeSoloPayload>
          }
          deleteMany: {
            args: Prisma.PropriedadeSoloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropriedadeSoloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropriedadeSoloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadeSoloPayload>
          }
          aggregate: {
            args: Prisma.PropriedadeSoloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropriedadeSolo>
          }
          groupBy: {
            args: Prisma.PropriedadeSoloGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropriedadeSoloGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropriedadeSoloCountArgs<ExtArgs>
            result: $Utils.Optional<PropriedadeSoloCountAggregateOutputType> | number
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
      Cultura: {
        payload: Prisma.$CulturaPayload<ExtArgs>
        fields: Prisma.CulturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CulturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CulturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturaPayload>
          }
          findFirst: {
            args: Prisma.CulturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CulturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturaPayload>
          }
          findMany: {
            args: Prisma.CulturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturaPayload>[]
          }
          create: {
            args: Prisma.CulturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturaPayload>
          }
          createMany: {
            args: Prisma.CulturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CulturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturaPayload>
          }
          update: {
            args: Prisma.CulturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturaPayload>
          }
          deleteMany: {
            args: Prisma.CulturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CulturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CulturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturaPayload>
          }
          aggregate: {
            args: Prisma.CulturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCultura>
          }
          groupBy: {
            args: Prisma.CulturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CulturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CulturaCountArgs<ExtArgs>
            result: $Utils.Optional<CulturaCountAggregateOutputType> | number
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
    propriedadeCultura?: PropriedadeCulturaOmit
    propriedadeSolo?: PropriedadeSoloOmit
    historico?: HistoricoOmit
    precipitacao?: PrecipitacaoOmit
    solo?: SoloOmit
    estimativas?: EstimativasOmit
    simulacao?: SimulacaoOmit
    cultura?: CulturaOmit
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
    precipitacoes: number
    propriedadeCultura: number
    propriedadeSolo: number
    Solo: number
  }

  export type PropriedadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estimativas?: boolean | PropriedadeCountOutputTypeCountEstimativasArgs
    simulacoes?: boolean | PropriedadeCountOutputTypeCountSimulacoesArgs
    historicos?: boolean | PropriedadeCountOutputTypeCountHistoricosArgs
    precipitacoes?: boolean | PropriedadeCountOutputTypeCountPrecipitacoesArgs
    propriedadeCultura?: boolean | PropriedadeCountOutputTypeCountPropriedadeCulturaArgs
    propriedadeSolo?: boolean | PropriedadeCountOutputTypeCountPropriedadeSoloArgs
    Solo?: boolean | PropriedadeCountOutputTypeCountSoloArgs
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
   * PropriedadeCountOutputType without action
   */
  export type PropriedadeCountOutputTypeCountPrecipitacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrecipitacaoWhereInput
  }

  /**
   * PropriedadeCountOutputType without action
   */
  export type PropriedadeCountOutputTypeCountPropriedadeCulturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropriedadeCulturaWhereInput
  }

  /**
   * PropriedadeCountOutputType without action
   */
  export type PropriedadeCountOutputTypeCountPropriedadeSoloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropriedadeSoloWhereInput
  }

  /**
   * PropriedadeCountOutputType without action
   */
  export type PropriedadeCountOutputTypeCountSoloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoloWhereInput
  }


  /**
   * Count Type PrecipitacaoCountOutputType
   */

  export type PrecipitacaoCountOutputType = {
    historico: number
  }

  export type PrecipitacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historico?: boolean | PrecipitacaoCountOutputTypeCountHistoricoArgs
  }

  // Custom InputTypes
  /**
   * PrecipitacaoCountOutputType without action
   */
  export type PrecipitacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrecipitacaoCountOutputType
     */
    select?: PrecipitacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrecipitacaoCountOutputType without action
   */
  export type PrecipitacaoCountOutputTypeCountHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
  }


  /**
   * Count Type SoloCountOutputType
   */

  export type SoloCountOutputType = {
    historico: number
    propriedadeSolo: number
  }

  export type SoloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historico?: boolean | SoloCountOutputTypeCountHistoricoArgs
    propriedadeSolo?: boolean | SoloCountOutputTypeCountPropriedadeSoloArgs
  }

  // Custom InputTypes
  /**
   * SoloCountOutputType without action
   */
  export type SoloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoloCountOutputType
     */
    select?: SoloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SoloCountOutputType without action
   */
  export type SoloCountOutputTypeCountHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
  }

  /**
   * SoloCountOutputType without action
   */
  export type SoloCountOutputTypeCountPropriedadeSoloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropriedadeSoloWhereInput
  }


  /**
   * Count Type SimulacaoCountOutputType
   */

  export type SimulacaoCountOutputType = {
    historico: number
    estimativas: number
  }

  export type SimulacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historico?: boolean | SimulacaoCountOutputTypeCountHistoricoArgs
    estimativas?: boolean | SimulacaoCountOutputTypeCountEstimativasArgs
  }

  // Custom InputTypes
  /**
   * SimulacaoCountOutputType without action
   */
  export type SimulacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulacaoCountOutputType
     */
    select?: SimulacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SimulacaoCountOutputType without action
   */
  export type SimulacaoCountOutputTypeCountHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
  }

  /**
   * SimulacaoCountOutputType without action
   */
  export type SimulacaoCountOutputTypeCountEstimativasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstimativasWhereInput
  }


  /**
   * Count Type CulturaCountOutputType
   */

  export type CulturaCountOutputType = {
    PropriedadeCultura: number
  }

  export type CulturaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PropriedadeCultura?: boolean | CulturaCountOutputTypeCountPropriedadeCulturaArgs
  }

  // Custom InputTypes
  /**
   * CulturaCountOutputType without action
   */
  export type CulturaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CulturaCountOutputType
     */
    select?: CulturaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CulturaCountOutputType without action
   */
  export type CulturaCountOutputTypeCountPropriedadeCulturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropriedadeCulturaWhereInput
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
    adminId: number | null
  }

  export type PropriedadeSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    adminId: number | null
  }

  export type PropriedadeMinAggregateOutputType = {
    id: number | null
    nomeProprietario: string | null
    nomePropriedade: string | null
    latitude: number | null
    longitude: number | null
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
    adminId?: true
  }

  export type PropriedadeSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    adminId?: true
  }

  export type PropriedadeMinAggregateInputType = {
    id?: true
    nomeProprietario?: true
    nomePropriedade?: true
    latitude?: true
    longitude?: true
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
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    adminId?: boolean
    admin?: boolean | Propriedade$adminArgs<ExtArgs>
    estimativas?: boolean | Propriedade$estimativasArgs<ExtArgs>
    simulacoes?: boolean | Propriedade$simulacoesArgs<ExtArgs>
    historicos?: boolean | Propriedade$historicosArgs<ExtArgs>
    precipitacoes?: boolean | Propriedade$precipitacoesArgs<ExtArgs>
    propriedadeCultura?: boolean | Propriedade$propriedadeCulturaArgs<ExtArgs>
    propriedadeSolo?: boolean | Propriedade$propriedadeSoloArgs<ExtArgs>
    Solo?: boolean | Propriedade$SoloArgs<ExtArgs>
    _count?: boolean | PropriedadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propriedade"]>



  export type PropriedadeSelectScalar = {
    id?: boolean
    nomeProprietario?: boolean
    nomePropriedade?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    adminId?: boolean
  }

  export type PropriedadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeProprietario" | "nomePropriedade" | "latitude" | "longitude" | "createdAt" | "updatedAt" | "deletedAt" | "adminId", ExtArgs["result"]["propriedade"]>
  export type PropriedadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | Propriedade$adminArgs<ExtArgs>
    estimativas?: boolean | Propriedade$estimativasArgs<ExtArgs>
    simulacoes?: boolean | Propriedade$simulacoesArgs<ExtArgs>
    historicos?: boolean | Propriedade$historicosArgs<ExtArgs>
    precipitacoes?: boolean | Propriedade$precipitacoesArgs<ExtArgs>
    propriedadeCultura?: boolean | Propriedade$propriedadeCulturaArgs<ExtArgs>
    propriedadeSolo?: boolean | Propriedade$propriedadeSoloArgs<ExtArgs>
    Solo?: boolean | Propriedade$SoloArgs<ExtArgs>
    _count?: boolean | PropriedadeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PropriedadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Propriedade"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
      estimativas: Prisma.$EstimativasPayload<ExtArgs>[]
      simulacoes: Prisma.$SimulacaoPayload<ExtArgs>[]
      historicos: Prisma.$HistoricoPayload<ExtArgs>[]
      precipitacoes: Prisma.$PrecipitacaoPayload<ExtArgs>[]
      propriedadeCultura: Prisma.$PropriedadeCulturaPayload<ExtArgs>[]
      propriedadeSolo: Prisma.$PropriedadeSoloPayload<ExtArgs>[]
      Solo: Prisma.$SoloPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeProprietario: string
      nomePropriedade: string
      latitude: number
      longitude: number
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
    precipitacoes<T extends Propriedade$precipitacoesArgs<ExtArgs> = {}>(args?: Subset<T, Propriedade$precipitacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propriedadeCultura<T extends Propriedade$propriedadeCulturaArgs<ExtArgs> = {}>(args?: Subset<T, Propriedade$propriedadeCulturaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propriedadeSolo<T extends Propriedade$propriedadeSoloArgs<ExtArgs> = {}>(args?: Subset<T, Propriedade$propriedadeSoloArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Solo<T extends Propriedade$SoloArgs<ExtArgs> = {}>(args?: Subset<T, Propriedade$SoloArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Propriedade.precipitacoes
   */
  export type Propriedade$precipitacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precipitacao
     */
    select?: PrecipitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precipitacao
     */
    omit?: PrecipitacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecipitacaoInclude<ExtArgs> | null
    where?: PrecipitacaoWhereInput
    orderBy?: PrecipitacaoOrderByWithRelationInput | PrecipitacaoOrderByWithRelationInput[]
    cursor?: PrecipitacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrecipitacaoScalarFieldEnum | PrecipitacaoScalarFieldEnum[]
  }

  /**
   * Propriedade.propriedadeCultura
   */
  export type Propriedade$propriedadeCulturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeCultura
     */
    select?: PropriedadeCulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeCultura
     */
    omit?: PropriedadeCulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeCulturaInclude<ExtArgs> | null
    where?: PropriedadeCulturaWhereInput
    orderBy?: PropriedadeCulturaOrderByWithRelationInput | PropriedadeCulturaOrderByWithRelationInput[]
    cursor?: PropriedadeCulturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropriedadeCulturaScalarFieldEnum | PropriedadeCulturaScalarFieldEnum[]
  }

  /**
   * Propriedade.propriedadeSolo
   */
  export type Propriedade$propriedadeSoloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeSolo
     */
    select?: PropriedadeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeSolo
     */
    omit?: PropriedadeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeSoloInclude<ExtArgs> | null
    where?: PropriedadeSoloWhereInput
    orderBy?: PropriedadeSoloOrderByWithRelationInput | PropriedadeSoloOrderByWithRelationInput[]
    cursor?: PropriedadeSoloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropriedadeSoloScalarFieldEnum | PropriedadeSoloScalarFieldEnum[]
  }

  /**
   * Propriedade.Solo
   */
  export type Propriedade$SoloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solo
     */
    select?: SoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solo
     */
    omit?: SoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoloInclude<ExtArgs> | null
    where?: SoloWhereInput
    orderBy?: SoloOrderByWithRelationInput | SoloOrderByWithRelationInput[]
    cursor?: SoloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SoloScalarFieldEnum | SoloScalarFieldEnum[]
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
   * Model PropriedadeCultura
   */

  export type AggregatePropriedadeCultura = {
    _count: PropriedadeCulturaCountAggregateOutputType | null
    _avg: PropriedadeCulturaAvgAggregateOutputType | null
    _sum: PropriedadeCulturaSumAggregateOutputType | null
    _min: PropriedadeCulturaMinAggregateOutputType | null
    _max: PropriedadeCulturaMaxAggregateOutputType | null
  }

  export type PropriedadeCulturaAvgAggregateOutputType = {
    id: number | null
    propriedadeId: number | null
    culturaId: number | null
  }

  export type PropriedadeCulturaSumAggregateOutputType = {
    id: number | null
    propriedadeId: number | null
    culturaId: number | null
  }

  export type PropriedadeCulturaMinAggregateOutputType = {
    id: number | null
    propriedadeId: number | null
    culturaId: number | null
  }

  export type PropriedadeCulturaMaxAggregateOutputType = {
    id: number | null
    propriedadeId: number | null
    culturaId: number | null
  }

  export type PropriedadeCulturaCountAggregateOutputType = {
    id: number
    propriedadeId: number
    culturaId: number
    _all: number
  }


  export type PropriedadeCulturaAvgAggregateInputType = {
    id?: true
    propriedadeId?: true
    culturaId?: true
  }

  export type PropriedadeCulturaSumAggregateInputType = {
    id?: true
    propriedadeId?: true
    culturaId?: true
  }

  export type PropriedadeCulturaMinAggregateInputType = {
    id?: true
    propriedadeId?: true
    culturaId?: true
  }

  export type PropriedadeCulturaMaxAggregateInputType = {
    id?: true
    propriedadeId?: true
    culturaId?: true
  }

  export type PropriedadeCulturaCountAggregateInputType = {
    id?: true
    propriedadeId?: true
    culturaId?: true
    _all?: true
  }

  export type PropriedadeCulturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropriedadeCultura to aggregate.
     */
    where?: PropriedadeCulturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropriedadeCulturas to fetch.
     */
    orderBy?: PropriedadeCulturaOrderByWithRelationInput | PropriedadeCulturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropriedadeCulturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropriedadeCulturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropriedadeCulturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropriedadeCulturas
    **/
    _count?: true | PropriedadeCulturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropriedadeCulturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropriedadeCulturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropriedadeCulturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropriedadeCulturaMaxAggregateInputType
  }

  export type GetPropriedadeCulturaAggregateType<T extends PropriedadeCulturaAggregateArgs> = {
        [P in keyof T & keyof AggregatePropriedadeCultura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropriedadeCultura[P]>
      : GetScalarType<T[P], AggregatePropriedadeCultura[P]>
  }




  export type PropriedadeCulturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropriedadeCulturaWhereInput
    orderBy?: PropriedadeCulturaOrderByWithAggregationInput | PropriedadeCulturaOrderByWithAggregationInput[]
    by: PropriedadeCulturaScalarFieldEnum[] | PropriedadeCulturaScalarFieldEnum
    having?: PropriedadeCulturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropriedadeCulturaCountAggregateInputType | true
    _avg?: PropriedadeCulturaAvgAggregateInputType
    _sum?: PropriedadeCulturaSumAggregateInputType
    _min?: PropriedadeCulturaMinAggregateInputType
    _max?: PropriedadeCulturaMaxAggregateInputType
  }

  export type PropriedadeCulturaGroupByOutputType = {
    id: number
    propriedadeId: number
    culturaId: number
    _count: PropriedadeCulturaCountAggregateOutputType | null
    _avg: PropriedadeCulturaAvgAggregateOutputType | null
    _sum: PropriedadeCulturaSumAggregateOutputType | null
    _min: PropriedadeCulturaMinAggregateOutputType | null
    _max: PropriedadeCulturaMaxAggregateOutputType | null
  }

  type GetPropriedadeCulturaGroupByPayload<T extends PropriedadeCulturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropriedadeCulturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropriedadeCulturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropriedadeCulturaGroupByOutputType[P]>
            : GetScalarType<T[P], PropriedadeCulturaGroupByOutputType[P]>
        }
      >
    >


  export type PropriedadeCulturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propriedadeId?: boolean
    culturaId?: boolean
    propriedade?: boolean | PropriedadeDefaultArgs<ExtArgs>
    cultura?: boolean | CulturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propriedadeCultura"]>



  export type PropriedadeCulturaSelectScalar = {
    id?: boolean
    propriedadeId?: boolean
    culturaId?: boolean
  }

  export type PropriedadeCulturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propriedadeId" | "culturaId", ExtArgs["result"]["propriedadeCultura"]>
  export type PropriedadeCulturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propriedade?: boolean | PropriedadeDefaultArgs<ExtArgs>
    cultura?: boolean | CulturaDefaultArgs<ExtArgs>
  }

  export type $PropriedadeCulturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropriedadeCultura"
    objects: {
      propriedade: Prisma.$PropriedadePayload<ExtArgs>
      cultura: Prisma.$CulturaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      propriedadeId: number
      culturaId: number
    }, ExtArgs["result"]["propriedadeCultura"]>
    composites: {}
  }

  type PropriedadeCulturaGetPayload<S extends boolean | null | undefined | PropriedadeCulturaDefaultArgs> = $Result.GetResult<Prisma.$PropriedadeCulturaPayload, S>

  type PropriedadeCulturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropriedadeCulturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropriedadeCulturaCountAggregateInputType | true
    }

  export interface PropriedadeCulturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropriedadeCultura'], meta: { name: 'PropriedadeCultura' } }
    /**
     * Find zero or one PropriedadeCultura that matches the filter.
     * @param {PropriedadeCulturaFindUniqueArgs} args - Arguments to find a PropriedadeCultura
     * @example
     * // Get one PropriedadeCultura
     * const propriedadeCultura = await prisma.propriedadeCultura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropriedadeCulturaFindUniqueArgs>(args: SelectSubset<T, PropriedadeCulturaFindUniqueArgs<ExtArgs>>): Prisma__PropriedadeCulturaClient<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropriedadeCultura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropriedadeCulturaFindUniqueOrThrowArgs} args - Arguments to find a PropriedadeCultura
     * @example
     * // Get one PropriedadeCultura
     * const propriedadeCultura = await prisma.propriedadeCultura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropriedadeCulturaFindUniqueOrThrowArgs>(args: SelectSubset<T, PropriedadeCulturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropriedadeCulturaClient<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropriedadeCultura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeCulturaFindFirstArgs} args - Arguments to find a PropriedadeCultura
     * @example
     * // Get one PropriedadeCultura
     * const propriedadeCultura = await prisma.propriedadeCultura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropriedadeCulturaFindFirstArgs>(args?: SelectSubset<T, PropriedadeCulturaFindFirstArgs<ExtArgs>>): Prisma__PropriedadeCulturaClient<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropriedadeCultura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeCulturaFindFirstOrThrowArgs} args - Arguments to find a PropriedadeCultura
     * @example
     * // Get one PropriedadeCultura
     * const propriedadeCultura = await prisma.propriedadeCultura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropriedadeCulturaFindFirstOrThrowArgs>(args?: SelectSubset<T, PropriedadeCulturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropriedadeCulturaClient<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropriedadeCulturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeCulturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropriedadeCulturas
     * const propriedadeCulturas = await prisma.propriedadeCultura.findMany()
     * 
     * // Get first 10 PropriedadeCulturas
     * const propriedadeCulturas = await prisma.propriedadeCultura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propriedadeCulturaWithIdOnly = await prisma.propriedadeCultura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropriedadeCulturaFindManyArgs>(args?: SelectSubset<T, PropriedadeCulturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropriedadeCultura.
     * @param {PropriedadeCulturaCreateArgs} args - Arguments to create a PropriedadeCultura.
     * @example
     * // Create one PropriedadeCultura
     * const PropriedadeCultura = await prisma.propriedadeCultura.create({
     *   data: {
     *     // ... data to create a PropriedadeCultura
     *   }
     * })
     * 
     */
    create<T extends PropriedadeCulturaCreateArgs>(args: SelectSubset<T, PropriedadeCulturaCreateArgs<ExtArgs>>): Prisma__PropriedadeCulturaClient<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropriedadeCulturas.
     * @param {PropriedadeCulturaCreateManyArgs} args - Arguments to create many PropriedadeCulturas.
     * @example
     * // Create many PropriedadeCulturas
     * const propriedadeCultura = await prisma.propriedadeCultura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropriedadeCulturaCreateManyArgs>(args?: SelectSubset<T, PropriedadeCulturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PropriedadeCultura.
     * @param {PropriedadeCulturaDeleteArgs} args - Arguments to delete one PropriedadeCultura.
     * @example
     * // Delete one PropriedadeCultura
     * const PropriedadeCultura = await prisma.propriedadeCultura.delete({
     *   where: {
     *     // ... filter to delete one PropriedadeCultura
     *   }
     * })
     * 
     */
    delete<T extends PropriedadeCulturaDeleteArgs>(args: SelectSubset<T, PropriedadeCulturaDeleteArgs<ExtArgs>>): Prisma__PropriedadeCulturaClient<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropriedadeCultura.
     * @param {PropriedadeCulturaUpdateArgs} args - Arguments to update one PropriedadeCultura.
     * @example
     * // Update one PropriedadeCultura
     * const propriedadeCultura = await prisma.propriedadeCultura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropriedadeCulturaUpdateArgs>(args: SelectSubset<T, PropriedadeCulturaUpdateArgs<ExtArgs>>): Prisma__PropriedadeCulturaClient<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropriedadeCulturas.
     * @param {PropriedadeCulturaDeleteManyArgs} args - Arguments to filter PropriedadeCulturas to delete.
     * @example
     * // Delete a few PropriedadeCulturas
     * const { count } = await prisma.propriedadeCultura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropriedadeCulturaDeleteManyArgs>(args?: SelectSubset<T, PropriedadeCulturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropriedadeCulturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeCulturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropriedadeCulturas
     * const propriedadeCultura = await prisma.propriedadeCultura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropriedadeCulturaUpdateManyArgs>(args: SelectSubset<T, PropriedadeCulturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropriedadeCultura.
     * @param {PropriedadeCulturaUpsertArgs} args - Arguments to update or create a PropriedadeCultura.
     * @example
     * // Update or create a PropriedadeCultura
     * const propriedadeCultura = await prisma.propriedadeCultura.upsert({
     *   create: {
     *     // ... data to create a PropriedadeCultura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropriedadeCultura we want to update
     *   }
     * })
     */
    upsert<T extends PropriedadeCulturaUpsertArgs>(args: SelectSubset<T, PropriedadeCulturaUpsertArgs<ExtArgs>>): Prisma__PropriedadeCulturaClient<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropriedadeCulturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeCulturaCountArgs} args - Arguments to filter PropriedadeCulturas to count.
     * @example
     * // Count the number of PropriedadeCulturas
     * const count = await prisma.propriedadeCultura.count({
     *   where: {
     *     // ... the filter for the PropriedadeCulturas we want to count
     *   }
     * })
    **/
    count<T extends PropriedadeCulturaCountArgs>(
      args?: Subset<T, PropriedadeCulturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropriedadeCulturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropriedadeCultura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeCulturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropriedadeCulturaAggregateArgs>(args: Subset<T, PropriedadeCulturaAggregateArgs>): Prisma.PrismaPromise<GetPropriedadeCulturaAggregateType<T>>

    /**
     * Group by PropriedadeCultura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeCulturaGroupByArgs} args - Group by arguments.
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
      T extends PropriedadeCulturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropriedadeCulturaGroupByArgs['orderBy'] }
        : { orderBy?: PropriedadeCulturaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropriedadeCulturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropriedadeCulturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropriedadeCultura model
   */
  readonly fields: PropriedadeCulturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropriedadeCultura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropriedadeCulturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propriedade<T extends PropriedadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropriedadeDefaultArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cultura<T extends CulturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CulturaDefaultArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PropriedadeCultura model
   */
  interface PropriedadeCulturaFieldRefs {
    readonly id: FieldRef<"PropriedadeCultura", 'Int'>
    readonly propriedadeId: FieldRef<"PropriedadeCultura", 'Int'>
    readonly culturaId: FieldRef<"PropriedadeCultura", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PropriedadeCultura findUnique
   */
  export type PropriedadeCulturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeCultura
     */
    select?: PropriedadeCulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeCultura
     */
    omit?: PropriedadeCulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeCulturaInclude<ExtArgs> | null
    /**
     * Filter, which PropriedadeCultura to fetch.
     */
    where: PropriedadeCulturaWhereUniqueInput
  }

  /**
   * PropriedadeCultura findUniqueOrThrow
   */
  export type PropriedadeCulturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeCultura
     */
    select?: PropriedadeCulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeCultura
     */
    omit?: PropriedadeCulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeCulturaInclude<ExtArgs> | null
    /**
     * Filter, which PropriedadeCultura to fetch.
     */
    where: PropriedadeCulturaWhereUniqueInput
  }

  /**
   * PropriedadeCultura findFirst
   */
  export type PropriedadeCulturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeCultura
     */
    select?: PropriedadeCulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeCultura
     */
    omit?: PropriedadeCulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeCulturaInclude<ExtArgs> | null
    /**
     * Filter, which PropriedadeCultura to fetch.
     */
    where?: PropriedadeCulturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropriedadeCulturas to fetch.
     */
    orderBy?: PropriedadeCulturaOrderByWithRelationInput | PropriedadeCulturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropriedadeCulturas.
     */
    cursor?: PropriedadeCulturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropriedadeCulturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropriedadeCulturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropriedadeCulturas.
     */
    distinct?: PropriedadeCulturaScalarFieldEnum | PropriedadeCulturaScalarFieldEnum[]
  }

  /**
   * PropriedadeCultura findFirstOrThrow
   */
  export type PropriedadeCulturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeCultura
     */
    select?: PropriedadeCulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeCultura
     */
    omit?: PropriedadeCulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeCulturaInclude<ExtArgs> | null
    /**
     * Filter, which PropriedadeCultura to fetch.
     */
    where?: PropriedadeCulturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropriedadeCulturas to fetch.
     */
    orderBy?: PropriedadeCulturaOrderByWithRelationInput | PropriedadeCulturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropriedadeCulturas.
     */
    cursor?: PropriedadeCulturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropriedadeCulturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropriedadeCulturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropriedadeCulturas.
     */
    distinct?: PropriedadeCulturaScalarFieldEnum | PropriedadeCulturaScalarFieldEnum[]
  }

  /**
   * PropriedadeCultura findMany
   */
  export type PropriedadeCulturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeCultura
     */
    select?: PropriedadeCulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeCultura
     */
    omit?: PropriedadeCulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeCulturaInclude<ExtArgs> | null
    /**
     * Filter, which PropriedadeCulturas to fetch.
     */
    where?: PropriedadeCulturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropriedadeCulturas to fetch.
     */
    orderBy?: PropriedadeCulturaOrderByWithRelationInput | PropriedadeCulturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropriedadeCulturas.
     */
    cursor?: PropriedadeCulturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropriedadeCulturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropriedadeCulturas.
     */
    skip?: number
    distinct?: PropriedadeCulturaScalarFieldEnum | PropriedadeCulturaScalarFieldEnum[]
  }

  /**
   * PropriedadeCultura create
   */
  export type PropriedadeCulturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeCultura
     */
    select?: PropriedadeCulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeCultura
     */
    omit?: PropriedadeCulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeCulturaInclude<ExtArgs> | null
    /**
     * The data needed to create a PropriedadeCultura.
     */
    data: XOR<PropriedadeCulturaCreateInput, PropriedadeCulturaUncheckedCreateInput>
  }

  /**
   * PropriedadeCultura createMany
   */
  export type PropriedadeCulturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropriedadeCulturas.
     */
    data: PropriedadeCulturaCreateManyInput | PropriedadeCulturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropriedadeCultura update
   */
  export type PropriedadeCulturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeCultura
     */
    select?: PropriedadeCulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeCultura
     */
    omit?: PropriedadeCulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeCulturaInclude<ExtArgs> | null
    /**
     * The data needed to update a PropriedadeCultura.
     */
    data: XOR<PropriedadeCulturaUpdateInput, PropriedadeCulturaUncheckedUpdateInput>
    /**
     * Choose, which PropriedadeCultura to update.
     */
    where: PropriedadeCulturaWhereUniqueInput
  }

  /**
   * PropriedadeCultura updateMany
   */
  export type PropriedadeCulturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropriedadeCulturas.
     */
    data: XOR<PropriedadeCulturaUpdateManyMutationInput, PropriedadeCulturaUncheckedUpdateManyInput>
    /**
     * Filter which PropriedadeCulturas to update
     */
    where?: PropriedadeCulturaWhereInput
    /**
     * Limit how many PropriedadeCulturas to update.
     */
    limit?: number
  }

  /**
   * PropriedadeCultura upsert
   */
  export type PropriedadeCulturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeCultura
     */
    select?: PropriedadeCulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeCultura
     */
    omit?: PropriedadeCulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeCulturaInclude<ExtArgs> | null
    /**
     * The filter to search for the PropriedadeCultura to update in case it exists.
     */
    where: PropriedadeCulturaWhereUniqueInput
    /**
     * In case the PropriedadeCultura found by the `where` argument doesn't exist, create a new PropriedadeCultura with this data.
     */
    create: XOR<PropriedadeCulturaCreateInput, PropriedadeCulturaUncheckedCreateInput>
    /**
     * In case the PropriedadeCultura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropriedadeCulturaUpdateInput, PropriedadeCulturaUncheckedUpdateInput>
  }

  /**
   * PropriedadeCultura delete
   */
  export type PropriedadeCulturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeCultura
     */
    select?: PropriedadeCulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeCultura
     */
    omit?: PropriedadeCulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeCulturaInclude<ExtArgs> | null
    /**
     * Filter which PropriedadeCultura to delete.
     */
    where: PropriedadeCulturaWhereUniqueInput
  }

  /**
   * PropriedadeCultura deleteMany
   */
  export type PropriedadeCulturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropriedadeCulturas to delete
     */
    where?: PropriedadeCulturaWhereInput
    /**
     * Limit how many PropriedadeCulturas to delete.
     */
    limit?: number
  }

  /**
   * PropriedadeCultura without action
   */
  export type PropriedadeCulturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeCultura
     */
    select?: PropriedadeCulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeCultura
     */
    omit?: PropriedadeCulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeCulturaInclude<ExtArgs> | null
  }


  /**
   * Model PropriedadeSolo
   */

  export type AggregatePropriedadeSolo = {
    _count: PropriedadeSoloCountAggregateOutputType | null
    _avg: PropriedadeSoloAvgAggregateOutputType | null
    _sum: PropriedadeSoloSumAggregateOutputType | null
    _min: PropriedadeSoloMinAggregateOutputType | null
    _max: PropriedadeSoloMaxAggregateOutputType | null
  }

  export type PropriedadeSoloAvgAggregateOutputType = {
    id: number | null
    propriedadeId: number | null
    soloId: number | null
  }

  export type PropriedadeSoloSumAggregateOutputType = {
    id: number | null
    propriedadeId: number | null
    soloId: number | null
  }

  export type PropriedadeSoloMinAggregateOutputType = {
    id: number | null
    propriedadeId: number | null
    soloId: number | null
  }

  export type PropriedadeSoloMaxAggregateOutputType = {
    id: number | null
    propriedadeId: number | null
    soloId: number | null
  }

  export type PropriedadeSoloCountAggregateOutputType = {
    id: number
    propriedadeId: number
    soloId: number
    _all: number
  }


  export type PropriedadeSoloAvgAggregateInputType = {
    id?: true
    propriedadeId?: true
    soloId?: true
  }

  export type PropriedadeSoloSumAggregateInputType = {
    id?: true
    propriedadeId?: true
    soloId?: true
  }

  export type PropriedadeSoloMinAggregateInputType = {
    id?: true
    propriedadeId?: true
    soloId?: true
  }

  export type PropriedadeSoloMaxAggregateInputType = {
    id?: true
    propriedadeId?: true
    soloId?: true
  }

  export type PropriedadeSoloCountAggregateInputType = {
    id?: true
    propriedadeId?: true
    soloId?: true
    _all?: true
  }

  export type PropriedadeSoloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropriedadeSolo to aggregate.
     */
    where?: PropriedadeSoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropriedadeSolos to fetch.
     */
    orderBy?: PropriedadeSoloOrderByWithRelationInput | PropriedadeSoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropriedadeSoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropriedadeSolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropriedadeSolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropriedadeSolos
    **/
    _count?: true | PropriedadeSoloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropriedadeSoloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropriedadeSoloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropriedadeSoloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropriedadeSoloMaxAggregateInputType
  }

  export type GetPropriedadeSoloAggregateType<T extends PropriedadeSoloAggregateArgs> = {
        [P in keyof T & keyof AggregatePropriedadeSolo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropriedadeSolo[P]>
      : GetScalarType<T[P], AggregatePropriedadeSolo[P]>
  }




  export type PropriedadeSoloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropriedadeSoloWhereInput
    orderBy?: PropriedadeSoloOrderByWithAggregationInput | PropriedadeSoloOrderByWithAggregationInput[]
    by: PropriedadeSoloScalarFieldEnum[] | PropriedadeSoloScalarFieldEnum
    having?: PropriedadeSoloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropriedadeSoloCountAggregateInputType | true
    _avg?: PropriedadeSoloAvgAggregateInputType
    _sum?: PropriedadeSoloSumAggregateInputType
    _min?: PropriedadeSoloMinAggregateInputType
    _max?: PropriedadeSoloMaxAggregateInputType
  }

  export type PropriedadeSoloGroupByOutputType = {
    id: number
    propriedadeId: number
    soloId: number
    _count: PropriedadeSoloCountAggregateOutputType | null
    _avg: PropriedadeSoloAvgAggregateOutputType | null
    _sum: PropriedadeSoloSumAggregateOutputType | null
    _min: PropriedadeSoloMinAggregateOutputType | null
    _max: PropriedadeSoloMaxAggregateOutputType | null
  }

  type GetPropriedadeSoloGroupByPayload<T extends PropriedadeSoloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropriedadeSoloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropriedadeSoloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropriedadeSoloGroupByOutputType[P]>
            : GetScalarType<T[P], PropriedadeSoloGroupByOutputType[P]>
        }
      >
    >


  export type PropriedadeSoloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propriedadeId?: boolean
    soloId?: boolean
    propriedade?: boolean | PropriedadeDefaultArgs<ExtArgs>
    solo?: boolean | SoloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propriedadeSolo"]>



  export type PropriedadeSoloSelectScalar = {
    id?: boolean
    propriedadeId?: boolean
    soloId?: boolean
  }

  export type PropriedadeSoloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propriedadeId" | "soloId", ExtArgs["result"]["propriedadeSolo"]>
  export type PropriedadeSoloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propriedade?: boolean | PropriedadeDefaultArgs<ExtArgs>
    solo?: boolean | SoloDefaultArgs<ExtArgs>
  }

  export type $PropriedadeSoloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropriedadeSolo"
    objects: {
      propriedade: Prisma.$PropriedadePayload<ExtArgs>
      solo: Prisma.$SoloPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      propriedadeId: number
      soloId: number
    }, ExtArgs["result"]["propriedadeSolo"]>
    composites: {}
  }

  type PropriedadeSoloGetPayload<S extends boolean | null | undefined | PropriedadeSoloDefaultArgs> = $Result.GetResult<Prisma.$PropriedadeSoloPayload, S>

  type PropriedadeSoloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropriedadeSoloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropriedadeSoloCountAggregateInputType | true
    }

  export interface PropriedadeSoloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropriedadeSolo'], meta: { name: 'PropriedadeSolo' } }
    /**
     * Find zero or one PropriedadeSolo that matches the filter.
     * @param {PropriedadeSoloFindUniqueArgs} args - Arguments to find a PropriedadeSolo
     * @example
     * // Get one PropriedadeSolo
     * const propriedadeSolo = await prisma.propriedadeSolo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropriedadeSoloFindUniqueArgs>(args: SelectSubset<T, PropriedadeSoloFindUniqueArgs<ExtArgs>>): Prisma__PropriedadeSoloClient<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropriedadeSolo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropriedadeSoloFindUniqueOrThrowArgs} args - Arguments to find a PropriedadeSolo
     * @example
     * // Get one PropriedadeSolo
     * const propriedadeSolo = await prisma.propriedadeSolo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropriedadeSoloFindUniqueOrThrowArgs>(args: SelectSubset<T, PropriedadeSoloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropriedadeSoloClient<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropriedadeSolo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeSoloFindFirstArgs} args - Arguments to find a PropriedadeSolo
     * @example
     * // Get one PropriedadeSolo
     * const propriedadeSolo = await prisma.propriedadeSolo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropriedadeSoloFindFirstArgs>(args?: SelectSubset<T, PropriedadeSoloFindFirstArgs<ExtArgs>>): Prisma__PropriedadeSoloClient<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropriedadeSolo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeSoloFindFirstOrThrowArgs} args - Arguments to find a PropriedadeSolo
     * @example
     * // Get one PropriedadeSolo
     * const propriedadeSolo = await prisma.propriedadeSolo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropriedadeSoloFindFirstOrThrowArgs>(args?: SelectSubset<T, PropriedadeSoloFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropriedadeSoloClient<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropriedadeSolos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeSoloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropriedadeSolos
     * const propriedadeSolos = await prisma.propriedadeSolo.findMany()
     * 
     * // Get first 10 PropriedadeSolos
     * const propriedadeSolos = await prisma.propriedadeSolo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propriedadeSoloWithIdOnly = await prisma.propriedadeSolo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropriedadeSoloFindManyArgs>(args?: SelectSubset<T, PropriedadeSoloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropriedadeSolo.
     * @param {PropriedadeSoloCreateArgs} args - Arguments to create a PropriedadeSolo.
     * @example
     * // Create one PropriedadeSolo
     * const PropriedadeSolo = await prisma.propriedadeSolo.create({
     *   data: {
     *     // ... data to create a PropriedadeSolo
     *   }
     * })
     * 
     */
    create<T extends PropriedadeSoloCreateArgs>(args: SelectSubset<T, PropriedadeSoloCreateArgs<ExtArgs>>): Prisma__PropriedadeSoloClient<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropriedadeSolos.
     * @param {PropriedadeSoloCreateManyArgs} args - Arguments to create many PropriedadeSolos.
     * @example
     * // Create many PropriedadeSolos
     * const propriedadeSolo = await prisma.propriedadeSolo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropriedadeSoloCreateManyArgs>(args?: SelectSubset<T, PropriedadeSoloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PropriedadeSolo.
     * @param {PropriedadeSoloDeleteArgs} args - Arguments to delete one PropriedadeSolo.
     * @example
     * // Delete one PropriedadeSolo
     * const PropriedadeSolo = await prisma.propriedadeSolo.delete({
     *   where: {
     *     // ... filter to delete one PropriedadeSolo
     *   }
     * })
     * 
     */
    delete<T extends PropriedadeSoloDeleteArgs>(args: SelectSubset<T, PropriedadeSoloDeleteArgs<ExtArgs>>): Prisma__PropriedadeSoloClient<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropriedadeSolo.
     * @param {PropriedadeSoloUpdateArgs} args - Arguments to update one PropriedadeSolo.
     * @example
     * // Update one PropriedadeSolo
     * const propriedadeSolo = await prisma.propriedadeSolo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropriedadeSoloUpdateArgs>(args: SelectSubset<T, PropriedadeSoloUpdateArgs<ExtArgs>>): Prisma__PropriedadeSoloClient<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropriedadeSolos.
     * @param {PropriedadeSoloDeleteManyArgs} args - Arguments to filter PropriedadeSolos to delete.
     * @example
     * // Delete a few PropriedadeSolos
     * const { count } = await prisma.propriedadeSolo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropriedadeSoloDeleteManyArgs>(args?: SelectSubset<T, PropriedadeSoloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropriedadeSolos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeSoloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropriedadeSolos
     * const propriedadeSolo = await prisma.propriedadeSolo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropriedadeSoloUpdateManyArgs>(args: SelectSubset<T, PropriedadeSoloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropriedadeSolo.
     * @param {PropriedadeSoloUpsertArgs} args - Arguments to update or create a PropriedadeSolo.
     * @example
     * // Update or create a PropriedadeSolo
     * const propriedadeSolo = await prisma.propriedadeSolo.upsert({
     *   create: {
     *     // ... data to create a PropriedadeSolo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropriedadeSolo we want to update
     *   }
     * })
     */
    upsert<T extends PropriedadeSoloUpsertArgs>(args: SelectSubset<T, PropriedadeSoloUpsertArgs<ExtArgs>>): Prisma__PropriedadeSoloClient<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropriedadeSolos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeSoloCountArgs} args - Arguments to filter PropriedadeSolos to count.
     * @example
     * // Count the number of PropriedadeSolos
     * const count = await prisma.propriedadeSolo.count({
     *   where: {
     *     // ... the filter for the PropriedadeSolos we want to count
     *   }
     * })
    **/
    count<T extends PropriedadeSoloCountArgs>(
      args?: Subset<T, PropriedadeSoloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropriedadeSoloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropriedadeSolo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeSoloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropriedadeSoloAggregateArgs>(args: Subset<T, PropriedadeSoloAggregateArgs>): Prisma.PrismaPromise<GetPropriedadeSoloAggregateType<T>>

    /**
     * Group by PropriedadeSolo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeSoloGroupByArgs} args - Group by arguments.
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
      T extends PropriedadeSoloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropriedadeSoloGroupByArgs['orderBy'] }
        : { orderBy?: PropriedadeSoloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropriedadeSoloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropriedadeSoloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropriedadeSolo model
   */
  readonly fields: PropriedadeSoloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropriedadeSolo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropriedadeSoloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propriedade<T extends PropriedadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropriedadeDefaultArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    solo<T extends SoloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SoloDefaultArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PropriedadeSolo model
   */
  interface PropriedadeSoloFieldRefs {
    readonly id: FieldRef<"PropriedadeSolo", 'Int'>
    readonly propriedadeId: FieldRef<"PropriedadeSolo", 'Int'>
    readonly soloId: FieldRef<"PropriedadeSolo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PropriedadeSolo findUnique
   */
  export type PropriedadeSoloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeSolo
     */
    select?: PropriedadeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeSolo
     */
    omit?: PropriedadeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeSoloInclude<ExtArgs> | null
    /**
     * Filter, which PropriedadeSolo to fetch.
     */
    where: PropriedadeSoloWhereUniqueInput
  }

  /**
   * PropriedadeSolo findUniqueOrThrow
   */
  export type PropriedadeSoloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeSolo
     */
    select?: PropriedadeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeSolo
     */
    omit?: PropriedadeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeSoloInclude<ExtArgs> | null
    /**
     * Filter, which PropriedadeSolo to fetch.
     */
    where: PropriedadeSoloWhereUniqueInput
  }

  /**
   * PropriedadeSolo findFirst
   */
  export type PropriedadeSoloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeSolo
     */
    select?: PropriedadeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeSolo
     */
    omit?: PropriedadeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeSoloInclude<ExtArgs> | null
    /**
     * Filter, which PropriedadeSolo to fetch.
     */
    where?: PropriedadeSoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropriedadeSolos to fetch.
     */
    orderBy?: PropriedadeSoloOrderByWithRelationInput | PropriedadeSoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropriedadeSolos.
     */
    cursor?: PropriedadeSoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropriedadeSolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropriedadeSolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropriedadeSolos.
     */
    distinct?: PropriedadeSoloScalarFieldEnum | PropriedadeSoloScalarFieldEnum[]
  }

  /**
   * PropriedadeSolo findFirstOrThrow
   */
  export type PropriedadeSoloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeSolo
     */
    select?: PropriedadeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeSolo
     */
    omit?: PropriedadeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeSoloInclude<ExtArgs> | null
    /**
     * Filter, which PropriedadeSolo to fetch.
     */
    where?: PropriedadeSoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropriedadeSolos to fetch.
     */
    orderBy?: PropriedadeSoloOrderByWithRelationInput | PropriedadeSoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropriedadeSolos.
     */
    cursor?: PropriedadeSoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropriedadeSolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropriedadeSolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropriedadeSolos.
     */
    distinct?: PropriedadeSoloScalarFieldEnum | PropriedadeSoloScalarFieldEnum[]
  }

  /**
   * PropriedadeSolo findMany
   */
  export type PropriedadeSoloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeSolo
     */
    select?: PropriedadeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeSolo
     */
    omit?: PropriedadeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeSoloInclude<ExtArgs> | null
    /**
     * Filter, which PropriedadeSolos to fetch.
     */
    where?: PropriedadeSoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropriedadeSolos to fetch.
     */
    orderBy?: PropriedadeSoloOrderByWithRelationInput | PropriedadeSoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropriedadeSolos.
     */
    cursor?: PropriedadeSoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropriedadeSolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropriedadeSolos.
     */
    skip?: number
    distinct?: PropriedadeSoloScalarFieldEnum | PropriedadeSoloScalarFieldEnum[]
  }

  /**
   * PropriedadeSolo create
   */
  export type PropriedadeSoloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeSolo
     */
    select?: PropriedadeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeSolo
     */
    omit?: PropriedadeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeSoloInclude<ExtArgs> | null
    /**
     * The data needed to create a PropriedadeSolo.
     */
    data: XOR<PropriedadeSoloCreateInput, PropriedadeSoloUncheckedCreateInput>
  }

  /**
   * PropriedadeSolo createMany
   */
  export type PropriedadeSoloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropriedadeSolos.
     */
    data: PropriedadeSoloCreateManyInput | PropriedadeSoloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropriedadeSolo update
   */
  export type PropriedadeSoloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeSolo
     */
    select?: PropriedadeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeSolo
     */
    omit?: PropriedadeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeSoloInclude<ExtArgs> | null
    /**
     * The data needed to update a PropriedadeSolo.
     */
    data: XOR<PropriedadeSoloUpdateInput, PropriedadeSoloUncheckedUpdateInput>
    /**
     * Choose, which PropriedadeSolo to update.
     */
    where: PropriedadeSoloWhereUniqueInput
  }

  /**
   * PropriedadeSolo updateMany
   */
  export type PropriedadeSoloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropriedadeSolos.
     */
    data: XOR<PropriedadeSoloUpdateManyMutationInput, PropriedadeSoloUncheckedUpdateManyInput>
    /**
     * Filter which PropriedadeSolos to update
     */
    where?: PropriedadeSoloWhereInput
    /**
     * Limit how many PropriedadeSolos to update.
     */
    limit?: number
  }

  /**
   * PropriedadeSolo upsert
   */
  export type PropriedadeSoloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeSolo
     */
    select?: PropriedadeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeSolo
     */
    omit?: PropriedadeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeSoloInclude<ExtArgs> | null
    /**
     * The filter to search for the PropriedadeSolo to update in case it exists.
     */
    where: PropriedadeSoloWhereUniqueInput
    /**
     * In case the PropriedadeSolo found by the `where` argument doesn't exist, create a new PropriedadeSolo with this data.
     */
    create: XOR<PropriedadeSoloCreateInput, PropriedadeSoloUncheckedCreateInput>
    /**
     * In case the PropriedadeSolo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropriedadeSoloUpdateInput, PropriedadeSoloUncheckedUpdateInput>
  }

  /**
   * PropriedadeSolo delete
   */
  export type PropriedadeSoloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeSolo
     */
    select?: PropriedadeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeSolo
     */
    omit?: PropriedadeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeSoloInclude<ExtArgs> | null
    /**
     * Filter which PropriedadeSolo to delete.
     */
    where: PropriedadeSoloWhereUniqueInput
  }

  /**
   * PropriedadeSolo deleteMany
   */
  export type PropriedadeSoloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropriedadeSolos to delete
     */
    where?: PropriedadeSoloWhereInput
    /**
     * Limit how many PropriedadeSolos to delete.
     */
    limit?: number
  }

  /**
   * PropriedadeSolo without action
   */
  export type PropriedadeSoloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeSolo
     */
    select?: PropriedadeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeSolo
     */
    omit?: PropriedadeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeSoloInclude<ExtArgs> | null
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
    simulacaoId: number | null
    soloId: number | null
    precipitacaoId: number | null
  }

  export type HistoricoSumAggregateOutputType = {
    id: number | null
    valorSimulacao: number | null
    propriedadeId: number | null
    simulacaoId: number | null
    soloId: number | null
    precipitacaoId: number | null
  }

  export type HistoricoMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    valorSimulacao: number | null
    propriedadeId: number | null
    simulacaoId: number | null
    soloId: number | null
    precipitacaoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type HistoricoMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    valorSimulacao: number | null
    propriedadeId: number | null
    simulacaoId: number | null
    soloId: number | null
    precipitacaoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type HistoricoCountAggregateOutputType = {
    id: number
    descricao: number
    valorSimulacao: number
    propriedadeId: number
    simulacaoId: number
    soloId: number
    precipitacaoId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type HistoricoAvgAggregateInputType = {
    id?: true
    valorSimulacao?: true
    propriedadeId?: true
    simulacaoId?: true
    soloId?: true
    precipitacaoId?: true
  }

  export type HistoricoSumAggregateInputType = {
    id?: true
    valorSimulacao?: true
    propriedadeId?: true
    simulacaoId?: true
    soloId?: true
    precipitacaoId?: true
  }

  export type HistoricoMinAggregateInputType = {
    id?: true
    descricao?: true
    valorSimulacao?: true
    propriedadeId?: true
    simulacaoId?: true
    soloId?: true
    precipitacaoId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type HistoricoMaxAggregateInputType = {
    id?: true
    descricao?: true
    valorSimulacao?: true
    propriedadeId?: true
    simulacaoId?: true
    soloId?: true
    precipitacaoId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type HistoricoCountAggregateInputType = {
    id?: true
    descricao?: true
    valorSimulacao?: true
    propriedadeId?: true
    simulacaoId?: true
    soloId?: true
    precipitacaoId?: true
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
    simulacaoId: number
    soloId: number
    precipitacaoId: number
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
    simulacaoId?: boolean
    soloId?: boolean
    precipitacaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    propriedade?: boolean | PropriedadeDefaultArgs<ExtArgs>
    simulacao?: boolean | SimulacaoDefaultArgs<ExtArgs>
    solo?: boolean | SoloDefaultArgs<ExtArgs>
    precipitacao?: boolean | PrecipitacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico"]>



  export type HistoricoSelectScalar = {
    id?: boolean
    descricao?: boolean
    valorSimulacao?: boolean
    propriedadeId?: boolean
    simulacaoId?: boolean
    soloId?: boolean
    precipitacaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type HistoricoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "valorSimulacao" | "propriedadeId" | "simulacaoId" | "soloId" | "precipitacaoId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["historico"]>
  export type HistoricoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propriedade?: boolean | PropriedadeDefaultArgs<ExtArgs>
    simulacao?: boolean | SimulacaoDefaultArgs<ExtArgs>
    solo?: boolean | SoloDefaultArgs<ExtArgs>
    precipitacao?: boolean | PrecipitacaoDefaultArgs<ExtArgs>
  }

  export type $HistoricoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Historico"
    objects: {
      propriedade: Prisma.$PropriedadePayload<ExtArgs>
      simulacao: Prisma.$SimulacaoPayload<ExtArgs>
      solo: Prisma.$SoloPayload<ExtArgs>
      precipitacao: Prisma.$PrecipitacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string | null
      valorSimulacao: number
      propriedadeId: number
      simulacaoId: number
      soloId: number
      precipitacaoId: number
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
    simulacao<T extends SimulacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SimulacaoDefaultArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    solo<T extends SoloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SoloDefaultArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    precipitacao<T extends PrecipitacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrecipitacaoDefaultArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly simulacaoId: FieldRef<"Historico", 'Int'>
    readonly soloId: FieldRef<"Historico", 'Int'>
    readonly precipitacaoId: FieldRef<"Historico", 'Int'>
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
    propriedadeId: number | null
  }

  export type PrecipitacaoSumAggregateOutputType = {
    id: number | null
    mmAno: number | null
    chuvas: number | null
    mmDia: number | null
    cvDia: number | null
    mmMes: number | null
    cvMes: number | null
    propriedadeId: number | null
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
    propriedadeId: number | null
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
    propriedadeId: number | null
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
    propriedadeId: number
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
    propriedadeId?: true
  }

  export type PrecipitacaoSumAggregateInputType = {
    id?: true
    mmAno?: true
    chuvas?: true
    mmDia?: true
    cvDia?: true
    mmMes?: true
    cvMes?: true
    propriedadeId?: true
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
    propriedadeId?: true
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
    propriedadeId?: true
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
    propriedadeId?: true
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
    propriedadeId: number
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
    propriedadeId?: boolean
    propriedade?: boolean | PropriedadeDefaultArgs<ExtArgs>
    historico?: boolean | Precipitacao$historicoArgs<ExtArgs>
    _count?: boolean | PrecipitacaoCountOutputTypeDefaultArgs<ExtArgs>
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
    propriedadeId?: boolean
  }

  export type PrecipitacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mmAno" | "chuvas" | "mmDia" | "cvDia" | "mmMes" | "cvMes" | "createdAt" | "updatedAt" | "deletedAt" | "propriedadeId", ExtArgs["result"]["precipitacao"]>
  export type PrecipitacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propriedade?: boolean | PropriedadeDefaultArgs<ExtArgs>
    historico?: boolean | Precipitacao$historicoArgs<ExtArgs>
    _count?: boolean | PrecipitacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PrecipitacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Precipitacao"
    objects: {
      propriedade: Prisma.$PropriedadePayload<ExtArgs>
      historico: Prisma.$HistoricoPayload<ExtArgs>[]
    }
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
      propriedadeId: number
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
    propriedade<T extends PropriedadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropriedadeDefaultArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    historico<T extends Precipitacao$historicoArgs<ExtArgs> = {}>(args?: Subset<T, Precipitacao$historicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly propriedadeId: FieldRef<"Precipitacao", 'Int'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: PrecipitacaoInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PrecipitacaoInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PrecipitacaoInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PrecipitacaoInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PrecipitacaoInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PrecipitacaoInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PrecipitacaoInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PrecipitacaoInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PrecipitacaoInclude<ExtArgs> | null
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
   * Precipitacao.historico
   */
  export type Precipitacao$historicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecipitacaoInclude<ExtArgs> | null
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
    propriedadeId: number | null
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
    propriedadeId: number | null
  }

  export type SoloMinAggregateOutputType = {
    id: number | null
    nomeClasse: string | null
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
    propriedadeId: number | null
  }

  export type SoloMaxAggregateOutputType = {
    id: number | null
    nomeClasse: string | null
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
    propriedadeId: number | null
  }

  export type SoloCountAggregateOutputType = {
    id: number
    nomeClasse: number
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
    propriedadeId: number
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
    propriedadeId?: true
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
    propriedadeId?: true
  }

  export type SoloMinAggregateInputType = {
    id?: true
    nomeClasse?: true
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
    propriedadeId?: true
  }

  export type SoloMaxAggregateInputType = {
    id?: true
    nomeClasse?: true
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
    propriedadeId?: true
  }

  export type SoloCountAggregateInputType = {
    id?: true
    nomeClasse?: true
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
    propriedadeId?: true
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
    nomeClasse: string
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
    propriedadeId: number | null
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
    nomeClasse?: boolean
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
    propriedadeId?: boolean
    historico?: boolean | Solo$historicoArgs<ExtArgs>
    propriedadeSolo?: boolean | Solo$propriedadeSoloArgs<ExtArgs>
    Propriedade?: boolean | Solo$PropriedadeArgs<ExtArgs>
    _count?: boolean | SoloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solo"]>



  export type SoloSelectScalar = {
    id?: boolean
    nomeClasse?: boolean
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
    propriedadeId?: boolean
  }

  export type SoloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeClasse" | "profundidade" | "fatorRocha" | "condutHidraulicaSaturada" | "densidadeAparente" | "agua0Bar" | "agua13Bar" | "agua15Bar" | "createdAt" | "updatedAt" | "deletedAt" | "propriedadeId", ExtArgs["result"]["solo"]>
  export type SoloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historico?: boolean | Solo$historicoArgs<ExtArgs>
    propriedadeSolo?: boolean | Solo$propriedadeSoloArgs<ExtArgs>
    Propriedade?: boolean | Solo$PropriedadeArgs<ExtArgs>
    _count?: boolean | SoloCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SoloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Solo"
    objects: {
      historico: Prisma.$HistoricoPayload<ExtArgs>[]
      propriedadeSolo: Prisma.$PropriedadeSoloPayload<ExtArgs>[]
      Propriedade: Prisma.$PropriedadePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeClasse: string
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
      propriedadeId: number | null
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
    historico<T extends Solo$historicoArgs<ExtArgs> = {}>(args?: Subset<T, Solo$historicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propriedadeSolo<T extends Solo$propriedadeSoloArgs<ExtArgs> = {}>(args?: Subset<T, Solo$propriedadeSoloArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Propriedade<T extends Solo$PropriedadeArgs<ExtArgs> = {}>(args?: Subset<T, Solo$PropriedadeArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly nomeClasse: FieldRef<"Solo", 'String'>
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
    readonly propriedadeId: FieldRef<"Solo", 'Int'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: SoloInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SoloInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SoloInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SoloInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SoloInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SoloInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SoloInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SoloInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SoloInclude<ExtArgs> | null
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
   * Solo.historico
   */
  export type Solo$historicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Solo.propriedadeSolo
   */
  export type Solo$propriedadeSoloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeSolo
     */
    select?: PropriedadeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeSolo
     */
    omit?: PropriedadeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeSoloInclude<ExtArgs> | null
    where?: PropriedadeSoloWhereInput
    orderBy?: PropriedadeSoloOrderByWithRelationInput | PropriedadeSoloOrderByWithRelationInput[]
    cursor?: PropriedadeSoloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropriedadeSoloScalarFieldEnum | PropriedadeSoloScalarFieldEnum[]
  }

  /**
   * Solo.Propriedade
   */
  export type Solo$PropriedadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoloInclude<ExtArgs> | null
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
    simulacaoId: number | null
  }

  export type EstimativasSumAggregateOutputType = {
    id: number | null
    valorTotal: number | null
    propriedadeId: number | null
    simulacaoId: number | null
  }

  export type EstimativasMinAggregateOutputType = {
    id: number | null
    valorTotal: number | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    propriedadeId: number | null
    simulacaoId: number | null
  }

  export type EstimativasMaxAggregateOutputType = {
    id: number | null
    valorTotal: number | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    propriedadeId: number | null
    simulacaoId: number | null
  }

  export type EstimativasCountAggregateOutputType = {
    id: number
    valorTotal: number
    descricao: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    propriedadeId: number
    simulacaoId: number
    _all: number
  }


  export type EstimativasAvgAggregateInputType = {
    id?: true
    valorTotal?: true
    propriedadeId?: true
    simulacaoId?: true
  }

  export type EstimativasSumAggregateInputType = {
    id?: true
    valorTotal?: true
    propriedadeId?: true
    simulacaoId?: true
  }

  export type EstimativasMinAggregateInputType = {
    id?: true
    valorTotal?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    propriedadeId?: true
    simulacaoId?: true
  }

  export type EstimativasMaxAggregateInputType = {
    id?: true
    valorTotal?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    propriedadeId?: true
    simulacaoId?: true
  }

  export type EstimativasCountAggregateInputType = {
    id?: true
    valorTotal?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    propriedadeId?: true
    simulacaoId?: true
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
    simulacaoId: number
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
    simulacaoId?: boolean
    simulacao?: boolean | SimulacaoDefaultArgs<ExtArgs>
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
    simulacaoId?: boolean
  }

  export type EstimativasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "valorTotal" | "descricao" | "createdAt" | "updatedAt" | "deletedAt" | "propriedadeId" | "simulacaoId", ExtArgs["result"]["estimativas"]>
  export type EstimativasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulacao?: boolean | SimulacaoDefaultArgs<ExtArgs>
    propriedade?: boolean | Estimativas$propriedadeArgs<ExtArgs>
  }

  export type $EstimativasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estimativas"
    objects: {
      simulacao: Prisma.$SimulacaoPayload<ExtArgs>
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
      simulacaoId: number
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
    simulacao<T extends SimulacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SimulacaoDefaultArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly simulacaoId: FieldRef<"Estimativas", 'Int'>
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
    culturaId: number | null
    soloId: number | null
    resultado: number | null
    propriedadeId: number | null
  }

  export type SimulacaoSumAggregateOutputType = {
    id: number | null
    culturaId: number | null
    soloId: number | null
    resultado: number | null
    propriedadeId: number | null
  }

  export type SimulacaoMinAggregateOutputType = {
    id: number | null
    nomeSimulacao: string | null
    culturaId: number | null
    soloId: number | null
    resultado: number | null
    dataSimulacao: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    propriedadeId: number | null
  }

  export type SimulacaoMaxAggregateOutputType = {
    id: number | null
    nomeSimulacao: string | null
    culturaId: number | null
    soloId: number | null
    resultado: number | null
    dataSimulacao: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    propriedadeId: number | null
  }

  export type SimulacaoCountAggregateOutputType = {
    id: number
    nomeSimulacao: number
    dadosJson: number
    culturaId: number
    soloId: number
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
    culturaId?: true
    soloId?: true
    resultado?: true
    propriedadeId?: true
  }

  export type SimulacaoSumAggregateInputType = {
    id?: true
    culturaId?: true
    soloId?: true
    resultado?: true
    propriedadeId?: true
  }

  export type SimulacaoMinAggregateInputType = {
    id?: true
    nomeSimulacao?: true
    culturaId?: true
    soloId?: true
    resultado?: true
    dataSimulacao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    propriedadeId?: true
  }

  export type SimulacaoMaxAggregateInputType = {
    id?: true
    nomeSimulacao?: true
    culturaId?: true
    soloId?: true
    resultado?: true
    dataSimulacao?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    propriedadeId?: true
  }

  export type SimulacaoCountAggregateInputType = {
    id?: true
    nomeSimulacao?: true
    dadosJson?: true
    culturaId?: true
    soloId?: true
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
    nomeSimulacao: string
    dadosJson: JsonValue | null
    culturaId: number
    soloId: number
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
    nomeSimulacao?: boolean
    dadosJson?: boolean
    culturaId?: boolean
    soloId?: boolean
    resultado?: boolean
    dataSimulacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    propriedadeId?: boolean
    propriedade?: boolean | PropriedadeDefaultArgs<ExtArgs>
    historico?: boolean | Simulacao$historicoArgs<ExtArgs>
    estimativas?: boolean | Simulacao$estimativasArgs<ExtArgs>
    _count?: boolean | SimulacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simulacao"]>



  export type SimulacaoSelectScalar = {
    id?: boolean
    nomeSimulacao?: boolean
    dadosJson?: boolean
    culturaId?: boolean
    soloId?: boolean
    resultado?: boolean
    dataSimulacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    propriedadeId?: boolean
  }

  export type SimulacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeSimulacao" | "dadosJson" | "culturaId" | "soloId" | "resultado" | "dataSimulacao" | "createdAt" | "updatedAt" | "deletedAt" | "propriedadeId", ExtArgs["result"]["simulacao"]>
  export type SimulacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propriedade?: boolean | PropriedadeDefaultArgs<ExtArgs>
    historico?: boolean | Simulacao$historicoArgs<ExtArgs>
    estimativas?: boolean | Simulacao$estimativasArgs<ExtArgs>
    _count?: boolean | SimulacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SimulacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Simulacao"
    objects: {
      propriedade: Prisma.$PropriedadePayload<ExtArgs>
      historico: Prisma.$HistoricoPayload<ExtArgs>[]
      estimativas: Prisma.$EstimativasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeSimulacao: string
      dadosJson: Prisma.JsonValue | null
      culturaId: number
      soloId: number
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
    historico<T extends Simulacao$historicoArgs<ExtArgs> = {}>(args?: Subset<T, Simulacao$historicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estimativas<T extends Simulacao$estimativasArgs<ExtArgs> = {}>(args?: Subset<T, Simulacao$estimativasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly nomeSimulacao: FieldRef<"Simulacao", 'String'>
    readonly dadosJson: FieldRef<"Simulacao", 'Json'>
    readonly culturaId: FieldRef<"Simulacao", 'Int'>
    readonly soloId: FieldRef<"Simulacao", 'Int'>
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
   * Simulacao.historico
   */
  export type Simulacao$historicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Simulacao.estimativas
   */
  export type Simulacao$estimativasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model Cultura
   */

  export type AggregateCultura = {
    _count: CulturaCountAggregateOutputType | null
    _avg: CulturaAvgAggregateOutputType | null
    _sum: CulturaSumAggregateOutputType | null
    _min: CulturaMinAggregateOutputType | null
    _max: CulturaMaxAggregateOutputType | null
  }

  export type CulturaAvgAggregateOutputType = {
    id: number | null
    eua: number | null
  }

  export type CulturaSumAggregateOutputType = {
    id: number | null
    eua: number | null
  }

  export type CulturaMinAggregateOutputType = {
    id: number | null
    name: string | null
    eua: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CulturaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    eua: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CulturaCountAggregateOutputType = {
    id: number
    name: number
    eua: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CulturaAvgAggregateInputType = {
    id?: true
    eua?: true
  }

  export type CulturaSumAggregateInputType = {
    id?: true
    eua?: true
  }

  export type CulturaMinAggregateInputType = {
    id?: true
    name?: true
    eua?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CulturaMaxAggregateInputType = {
    id?: true
    name?: true
    eua?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CulturaCountAggregateInputType = {
    id?: true
    name?: true
    eua?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CulturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cultura to aggregate.
     */
    where?: CulturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Culturas to fetch.
     */
    orderBy?: CulturaOrderByWithRelationInput | CulturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CulturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Culturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Culturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Culturas
    **/
    _count?: true | CulturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CulturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CulturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CulturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CulturaMaxAggregateInputType
  }

  export type GetCulturaAggregateType<T extends CulturaAggregateArgs> = {
        [P in keyof T & keyof AggregateCultura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCultura[P]>
      : GetScalarType<T[P], AggregateCultura[P]>
  }




  export type CulturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CulturaWhereInput
    orderBy?: CulturaOrderByWithAggregationInput | CulturaOrderByWithAggregationInput[]
    by: CulturaScalarFieldEnum[] | CulturaScalarFieldEnum
    having?: CulturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CulturaCountAggregateInputType | true
    _avg?: CulturaAvgAggregateInputType
    _sum?: CulturaSumAggregateInputType
    _min?: CulturaMinAggregateInputType
    _max?: CulturaMaxAggregateInputType
  }

  export type CulturaGroupByOutputType = {
    id: number
    name: string
    eua: number
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: CulturaCountAggregateOutputType | null
    _avg: CulturaAvgAggregateOutputType | null
    _sum: CulturaSumAggregateOutputType | null
    _min: CulturaMinAggregateOutputType | null
    _max: CulturaMaxAggregateOutputType | null
  }

  type GetCulturaGroupByPayload<T extends CulturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CulturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CulturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CulturaGroupByOutputType[P]>
            : GetScalarType<T[P], CulturaGroupByOutputType[P]>
        }
      >
    >


  export type CulturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    eua?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    PropriedadeCultura?: boolean | Cultura$PropriedadeCulturaArgs<ExtArgs>
    _count?: boolean | CulturaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cultura"]>



  export type CulturaSelectScalar = {
    id?: boolean
    name?: boolean
    eua?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CulturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "eua" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["cultura"]>
  export type CulturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PropriedadeCultura?: boolean | Cultura$PropriedadeCulturaArgs<ExtArgs>
    _count?: boolean | CulturaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CulturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cultura"
    objects: {
      PropriedadeCultura: Prisma.$PropriedadeCulturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      eua: number
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["cultura"]>
    composites: {}
  }

  type CulturaGetPayload<S extends boolean | null | undefined | CulturaDefaultArgs> = $Result.GetResult<Prisma.$CulturaPayload, S>

  type CulturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CulturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CulturaCountAggregateInputType | true
    }

  export interface CulturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cultura'], meta: { name: 'Cultura' } }
    /**
     * Find zero or one Cultura that matches the filter.
     * @param {CulturaFindUniqueArgs} args - Arguments to find a Cultura
     * @example
     * // Get one Cultura
     * const cultura = await prisma.cultura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CulturaFindUniqueArgs>(args: SelectSubset<T, CulturaFindUniqueArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cultura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CulturaFindUniqueOrThrowArgs} args - Arguments to find a Cultura
     * @example
     * // Get one Cultura
     * const cultura = await prisma.cultura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CulturaFindUniqueOrThrowArgs>(args: SelectSubset<T, CulturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cultura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturaFindFirstArgs} args - Arguments to find a Cultura
     * @example
     * // Get one Cultura
     * const cultura = await prisma.cultura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CulturaFindFirstArgs>(args?: SelectSubset<T, CulturaFindFirstArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cultura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturaFindFirstOrThrowArgs} args - Arguments to find a Cultura
     * @example
     * // Get one Cultura
     * const cultura = await prisma.cultura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CulturaFindFirstOrThrowArgs>(args?: SelectSubset<T, CulturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Culturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Culturas
     * const culturas = await prisma.cultura.findMany()
     * 
     * // Get first 10 Culturas
     * const culturas = await prisma.cultura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const culturaWithIdOnly = await prisma.cultura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CulturaFindManyArgs>(args?: SelectSubset<T, CulturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cultura.
     * @param {CulturaCreateArgs} args - Arguments to create a Cultura.
     * @example
     * // Create one Cultura
     * const Cultura = await prisma.cultura.create({
     *   data: {
     *     // ... data to create a Cultura
     *   }
     * })
     * 
     */
    create<T extends CulturaCreateArgs>(args: SelectSubset<T, CulturaCreateArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Culturas.
     * @param {CulturaCreateManyArgs} args - Arguments to create many Culturas.
     * @example
     * // Create many Culturas
     * const cultura = await prisma.cultura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CulturaCreateManyArgs>(args?: SelectSubset<T, CulturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cultura.
     * @param {CulturaDeleteArgs} args - Arguments to delete one Cultura.
     * @example
     * // Delete one Cultura
     * const Cultura = await prisma.cultura.delete({
     *   where: {
     *     // ... filter to delete one Cultura
     *   }
     * })
     * 
     */
    delete<T extends CulturaDeleteArgs>(args: SelectSubset<T, CulturaDeleteArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cultura.
     * @param {CulturaUpdateArgs} args - Arguments to update one Cultura.
     * @example
     * // Update one Cultura
     * const cultura = await prisma.cultura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CulturaUpdateArgs>(args: SelectSubset<T, CulturaUpdateArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Culturas.
     * @param {CulturaDeleteManyArgs} args - Arguments to filter Culturas to delete.
     * @example
     * // Delete a few Culturas
     * const { count } = await prisma.cultura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CulturaDeleteManyArgs>(args?: SelectSubset<T, CulturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Culturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Culturas
     * const cultura = await prisma.cultura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CulturaUpdateManyArgs>(args: SelectSubset<T, CulturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cultura.
     * @param {CulturaUpsertArgs} args - Arguments to update or create a Cultura.
     * @example
     * // Update or create a Cultura
     * const cultura = await prisma.cultura.upsert({
     *   create: {
     *     // ... data to create a Cultura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cultura we want to update
     *   }
     * })
     */
    upsert<T extends CulturaUpsertArgs>(args: SelectSubset<T, CulturaUpsertArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Culturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturaCountArgs} args - Arguments to filter Culturas to count.
     * @example
     * // Count the number of Culturas
     * const count = await prisma.cultura.count({
     *   where: {
     *     // ... the filter for the Culturas we want to count
     *   }
     * })
    **/
    count<T extends CulturaCountArgs>(
      args?: Subset<T, CulturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CulturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cultura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CulturaAggregateArgs>(args: Subset<T, CulturaAggregateArgs>): Prisma.PrismaPromise<GetCulturaAggregateType<T>>

    /**
     * Group by Cultura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturaGroupByArgs} args - Group by arguments.
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
      T extends CulturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CulturaGroupByArgs['orderBy'] }
        : { orderBy?: CulturaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CulturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCulturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cultura model
   */
  readonly fields: CulturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cultura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CulturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PropriedadeCultura<T extends Cultura$PropriedadeCulturaArgs<ExtArgs> = {}>(args?: Subset<T, Cultura$PropriedadeCulturaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cultura model
   */
  interface CulturaFieldRefs {
    readonly id: FieldRef<"Cultura", 'Int'>
    readonly name: FieldRef<"Cultura", 'String'>
    readonly eua: FieldRef<"Cultura", 'Float'>
    readonly createdAt: FieldRef<"Cultura", 'DateTime'>
    readonly updatedAt: FieldRef<"Cultura", 'DateTime'>
    readonly deletedAt: FieldRef<"Cultura", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cultura findUnique
   */
  export type CulturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cultura
     */
    select?: CulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cultura
     */
    omit?: CulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturaInclude<ExtArgs> | null
    /**
     * Filter, which Cultura to fetch.
     */
    where: CulturaWhereUniqueInput
  }

  /**
   * Cultura findUniqueOrThrow
   */
  export type CulturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cultura
     */
    select?: CulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cultura
     */
    omit?: CulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturaInclude<ExtArgs> | null
    /**
     * Filter, which Cultura to fetch.
     */
    where: CulturaWhereUniqueInput
  }

  /**
   * Cultura findFirst
   */
  export type CulturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cultura
     */
    select?: CulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cultura
     */
    omit?: CulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturaInclude<ExtArgs> | null
    /**
     * Filter, which Cultura to fetch.
     */
    where?: CulturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Culturas to fetch.
     */
    orderBy?: CulturaOrderByWithRelationInput | CulturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Culturas.
     */
    cursor?: CulturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Culturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Culturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Culturas.
     */
    distinct?: CulturaScalarFieldEnum | CulturaScalarFieldEnum[]
  }

  /**
   * Cultura findFirstOrThrow
   */
  export type CulturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cultura
     */
    select?: CulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cultura
     */
    omit?: CulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturaInclude<ExtArgs> | null
    /**
     * Filter, which Cultura to fetch.
     */
    where?: CulturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Culturas to fetch.
     */
    orderBy?: CulturaOrderByWithRelationInput | CulturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Culturas.
     */
    cursor?: CulturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Culturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Culturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Culturas.
     */
    distinct?: CulturaScalarFieldEnum | CulturaScalarFieldEnum[]
  }

  /**
   * Cultura findMany
   */
  export type CulturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cultura
     */
    select?: CulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cultura
     */
    omit?: CulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturaInclude<ExtArgs> | null
    /**
     * Filter, which Culturas to fetch.
     */
    where?: CulturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Culturas to fetch.
     */
    orderBy?: CulturaOrderByWithRelationInput | CulturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Culturas.
     */
    cursor?: CulturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Culturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Culturas.
     */
    skip?: number
    distinct?: CulturaScalarFieldEnum | CulturaScalarFieldEnum[]
  }

  /**
   * Cultura create
   */
  export type CulturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cultura
     */
    select?: CulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cultura
     */
    omit?: CulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cultura.
     */
    data: XOR<CulturaCreateInput, CulturaUncheckedCreateInput>
  }

  /**
   * Cultura createMany
   */
  export type CulturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Culturas.
     */
    data: CulturaCreateManyInput | CulturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cultura update
   */
  export type CulturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cultura
     */
    select?: CulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cultura
     */
    omit?: CulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cultura.
     */
    data: XOR<CulturaUpdateInput, CulturaUncheckedUpdateInput>
    /**
     * Choose, which Cultura to update.
     */
    where: CulturaWhereUniqueInput
  }

  /**
   * Cultura updateMany
   */
  export type CulturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Culturas.
     */
    data: XOR<CulturaUpdateManyMutationInput, CulturaUncheckedUpdateManyInput>
    /**
     * Filter which Culturas to update
     */
    where?: CulturaWhereInput
    /**
     * Limit how many Culturas to update.
     */
    limit?: number
  }

  /**
   * Cultura upsert
   */
  export type CulturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cultura
     */
    select?: CulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cultura
     */
    omit?: CulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cultura to update in case it exists.
     */
    where: CulturaWhereUniqueInput
    /**
     * In case the Cultura found by the `where` argument doesn't exist, create a new Cultura with this data.
     */
    create: XOR<CulturaCreateInput, CulturaUncheckedCreateInput>
    /**
     * In case the Cultura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CulturaUpdateInput, CulturaUncheckedUpdateInput>
  }

  /**
   * Cultura delete
   */
  export type CulturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cultura
     */
    select?: CulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cultura
     */
    omit?: CulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturaInclude<ExtArgs> | null
    /**
     * Filter which Cultura to delete.
     */
    where: CulturaWhereUniqueInput
  }

  /**
   * Cultura deleteMany
   */
  export type CulturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Culturas to delete
     */
    where?: CulturaWhereInput
    /**
     * Limit how many Culturas to delete.
     */
    limit?: number
  }

  /**
   * Cultura.PropriedadeCultura
   */
  export type Cultura$PropriedadeCulturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropriedadeCultura
     */
    select?: PropriedadeCulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropriedadeCultura
     */
    omit?: PropriedadeCulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeCulturaInclude<ExtArgs> | null
    where?: PropriedadeCulturaWhereInput
    orderBy?: PropriedadeCulturaOrderByWithRelationInput | PropriedadeCulturaOrderByWithRelationInput[]
    cursor?: PropriedadeCulturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropriedadeCulturaScalarFieldEnum | PropriedadeCulturaScalarFieldEnum[]
  }

  /**
   * Cultura without action
   */
  export type CulturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cultura
     */
    select?: CulturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cultura
     */
    omit?: CulturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturaInclude<ExtArgs> | null
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    adminId: 'adminId'
  };

  export type PropriedadeScalarFieldEnum = (typeof PropriedadeScalarFieldEnum)[keyof typeof PropriedadeScalarFieldEnum]


  export const PropriedadeCulturaScalarFieldEnum: {
    id: 'id',
    propriedadeId: 'propriedadeId',
    culturaId: 'culturaId'
  };

  export type PropriedadeCulturaScalarFieldEnum = (typeof PropriedadeCulturaScalarFieldEnum)[keyof typeof PropriedadeCulturaScalarFieldEnum]


  export const PropriedadeSoloScalarFieldEnum: {
    id: 'id',
    propriedadeId: 'propriedadeId',
    soloId: 'soloId'
  };

  export type PropriedadeSoloScalarFieldEnum = (typeof PropriedadeSoloScalarFieldEnum)[keyof typeof PropriedadeSoloScalarFieldEnum]


  export const HistoricoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    valorSimulacao: 'valorSimulacao',
    propriedadeId: 'propriedadeId',
    simulacaoId: 'simulacaoId',
    soloId: 'soloId',
    precipitacaoId: 'precipitacaoId',
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
    deletedAt: 'deletedAt',
    propriedadeId: 'propriedadeId'
  };

  export type PrecipitacaoScalarFieldEnum = (typeof PrecipitacaoScalarFieldEnum)[keyof typeof PrecipitacaoScalarFieldEnum]


  export const SoloScalarFieldEnum: {
    id: 'id',
    nomeClasse: 'nomeClasse',
    profundidade: 'profundidade',
    fatorRocha: 'fatorRocha',
    condutHidraulicaSaturada: 'condutHidraulicaSaturada',
    densidadeAparente: 'densidadeAparente',
    agua0Bar: 'agua0Bar',
    agua13Bar: 'agua13Bar',
    agua15Bar: 'agua15Bar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    propriedadeId: 'propriedadeId'
  };

  export type SoloScalarFieldEnum = (typeof SoloScalarFieldEnum)[keyof typeof SoloScalarFieldEnum]


  export const EstimativasScalarFieldEnum: {
    id: 'id',
    valorTotal: 'valorTotal',
    descricao: 'descricao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    propriedadeId: 'propriedadeId',
    simulacaoId: 'simulacaoId'
  };

  export type EstimativasScalarFieldEnum = (typeof EstimativasScalarFieldEnum)[keyof typeof EstimativasScalarFieldEnum]


  export const SimulacaoScalarFieldEnum: {
    id: 'id',
    nomeSimulacao: 'nomeSimulacao',
    dadosJson: 'dadosJson',
    culturaId: 'culturaId',
    soloId: 'soloId',
    resultado: 'resultado',
    dataSimulacao: 'dataSimulacao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    propriedadeId: 'propriedadeId'
  };

  export type SimulacaoScalarFieldEnum = (typeof SimulacaoScalarFieldEnum)[keyof typeof SimulacaoScalarFieldEnum]


  export const CulturaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    eua: 'eua',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CulturaScalarFieldEnum = (typeof CulturaScalarFieldEnum)[keyof typeof CulturaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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
    nomePropriedade: 'nomePropriedade'
  };

  export type PropriedadeOrderByRelevanceFieldEnum = (typeof PropriedadeOrderByRelevanceFieldEnum)[keyof typeof PropriedadeOrderByRelevanceFieldEnum]


  export const HistoricoOrderByRelevanceFieldEnum: {
    descricao: 'descricao'
  };

  export type HistoricoOrderByRelevanceFieldEnum = (typeof HistoricoOrderByRelevanceFieldEnum)[keyof typeof HistoricoOrderByRelevanceFieldEnum]


  export const SoloOrderByRelevanceFieldEnum: {
    nomeClasse: 'nomeClasse'
  };

  export type SoloOrderByRelevanceFieldEnum = (typeof SoloOrderByRelevanceFieldEnum)[keyof typeof SoloOrderByRelevanceFieldEnum]


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


  export const SimulacaoOrderByRelevanceFieldEnum: {
    nomeSimulacao: 'nomeSimulacao'
  };

  export type SimulacaoOrderByRelevanceFieldEnum = (typeof SimulacaoOrderByRelevanceFieldEnum)[keyof typeof SimulacaoOrderByRelevanceFieldEnum]


  export const CulturaOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CulturaOrderByRelevanceFieldEnum = (typeof CulturaOrderByRelevanceFieldEnum)[keyof typeof CulturaOrderByRelevanceFieldEnum]


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
    createdAt?: DateTimeFilter<"Propriedade"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Propriedade"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Propriedade"> | Date | string | null
    adminId?: IntNullableFilter<"Propriedade"> | number | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    estimativas?: EstimativasListRelationFilter
    simulacoes?: SimulacaoListRelationFilter
    historicos?: HistoricoListRelationFilter
    precipitacoes?: PrecipitacaoListRelationFilter
    propriedadeCultura?: PropriedadeCulturaListRelationFilter
    propriedadeSolo?: PropriedadeSoloListRelationFilter
    Solo?: SoloListRelationFilter
  }

  export type PropriedadeOrderByWithRelationInput = {
    id?: SortOrder
    nomeProprietario?: SortOrder
    nomePropriedade?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    admin?: AdminOrderByWithRelationInput
    estimativas?: EstimativasOrderByRelationAggregateInput
    simulacoes?: SimulacaoOrderByRelationAggregateInput
    historicos?: HistoricoOrderByRelationAggregateInput
    precipitacoes?: PrecipitacaoOrderByRelationAggregateInput
    propriedadeCultura?: PropriedadeCulturaOrderByRelationAggregateInput
    propriedadeSolo?: PropriedadeSoloOrderByRelationAggregateInput
    Solo?: SoloOrderByRelationAggregateInput
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
    createdAt?: DateTimeFilter<"Propriedade"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Propriedade"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Propriedade"> | Date | string | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    estimativas?: EstimativasListRelationFilter
    simulacoes?: SimulacaoListRelationFilter
    historicos?: HistoricoListRelationFilter
    precipitacoes?: PrecipitacaoListRelationFilter
    propriedadeCultura?: PropriedadeCulturaListRelationFilter
    propriedadeSolo?: PropriedadeSoloListRelationFilter
    Solo?: SoloListRelationFilter
  }, "id" | "adminId">

  export type PropriedadeOrderByWithAggregationInput = {
    id?: SortOrder
    nomeProprietario?: SortOrder
    nomePropriedade?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"Propriedade"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Propriedade"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Propriedade"> | Date | string | null
    adminId?: IntNullableWithAggregatesFilter<"Propriedade"> | number | null
  }

  export type PropriedadeCulturaWhereInput = {
    AND?: PropriedadeCulturaWhereInput | PropriedadeCulturaWhereInput[]
    OR?: PropriedadeCulturaWhereInput[]
    NOT?: PropriedadeCulturaWhereInput | PropriedadeCulturaWhereInput[]
    id?: IntFilter<"PropriedadeCultura"> | number
    propriedadeId?: IntFilter<"PropriedadeCultura"> | number
    culturaId?: IntFilter<"PropriedadeCultura"> | number
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
    cultura?: XOR<CulturaScalarRelationFilter, CulturaWhereInput>
  }

  export type PropriedadeCulturaOrderByWithRelationInput = {
    id?: SortOrder
    propriedadeId?: SortOrder
    culturaId?: SortOrder
    propriedade?: PropriedadeOrderByWithRelationInput
    cultura?: CulturaOrderByWithRelationInput
  }

  export type PropriedadeCulturaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    propriedadeId_culturaId?: PropriedadeCulturaPropriedadeIdCulturaIdCompoundUniqueInput
    AND?: PropriedadeCulturaWhereInput | PropriedadeCulturaWhereInput[]
    OR?: PropriedadeCulturaWhereInput[]
    NOT?: PropriedadeCulturaWhereInput | PropriedadeCulturaWhereInput[]
    propriedadeId?: IntFilter<"PropriedadeCultura"> | number
    culturaId?: IntFilter<"PropriedadeCultura"> | number
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
    cultura?: XOR<CulturaScalarRelationFilter, CulturaWhereInput>
  }, "id" | "propriedadeId_culturaId">

  export type PropriedadeCulturaOrderByWithAggregationInput = {
    id?: SortOrder
    propriedadeId?: SortOrder
    culturaId?: SortOrder
    _count?: PropriedadeCulturaCountOrderByAggregateInput
    _avg?: PropriedadeCulturaAvgOrderByAggregateInput
    _max?: PropriedadeCulturaMaxOrderByAggregateInput
    _min?: PropriedadeCulturaMinOrderByAggregateInput
    _sum?: PropriedadeCulturaSumOrderByAggregateInput
  }

  export type PropriedadeCulturaScalarWhereWithAggregatesInput = {
    AND?: PropriedadeCulturaScalarWhereWithAggregatesInput | PropriedadeCulturaScalarWhereWithAggregatesInput[]
    OR?: PropriedadeCulturaScalarWhereWithAggregatesInput[]
    NOT?: PropriedadeCulturaScalarWhereWithAggregatesInput | PropriedadeCulturaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropriedadeCultura"> | number
    propriedadeId?: IntWithAggregatesFilter<"PropriedadeCultura"> | number
    culturaId?: IntWithAggregatesFilter<"PropriedadeCultura"> | number
  }

  export type PropriedadeSoloWhereInput = {
    AND?: PropriedadeSoloWhereInput | PropriedadeSoloWhereInput[]
    OR?: PropriedadeSoloWhereInput[]
    NOT?: PropriedadeSoloWhereInput | PropriedadeSoloWhereInput[]
    id?: IntFilter<"PropriedadeSolo"> | number
    propriedadeId?: IntFilter<"PropriedadeSolo"> | number
    soloId?: IntFilter<"PropriedadeSolo"> | number
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
    solo?: XOR<SoloScalarRelationFilter, SoloWhereInput>
  }

  export type PropriedadeSoloOrderByWithRelationInput = {
    id?: SortOrder
    propriedadeId?: SortOrder
    soloId?: SortOrder
    propriedade?: PropriedadeOrderByWithRelationInput
    solo?: SoloOrderByWithRelationInput
  }

  export type PropriedadeSoloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    propriedadeId_soloId?: PropriedadeSoloPropriedadeIdSoloIdCompoundUniqueInput
    AND?: PropriedadeSoloWhereInput | PropriedadeSoloWhereInput[]
    OR?: PropriedadeSoloWhereInput[]
    NOT?: PropriedadeSoloWhereInput | PropriedadeSoloWhereInput[]
    propriedadeId?: IntFilter<"PropriedadeSolo"> | number
    soloId?: IntFilter<"PropriedadeSolo"> | number
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
    solo?: XOR<SoloScalarRelationFilter, SoloWhereInput>
  }, "id" | "propriedadeId_soloId">

  export type PropriedadeSoloOrderByWithAggregationInput = {
    id?: SortOrder
    propriedadeId?: SortOrder
    soloId?: SortOrder
    _count?: PropriedadeSoloCountOrderByAggregateInput
    _avg?: PropriedadeSoloAvgOrderByAggregateInput
    _max?: PropriedadeSoloMaxOrderByAggregateInput
    _min?: PropriedadeSoloMinOrderByAggregateInput
    _sum?: PropriedadeSoloSumOrderByAggregateInput
  }

  export type PropriedadeSoloScalarWhereWithAggregatesInput = {
    AND?: PropriedadeSoloScalarWhereWithAggregatesInput | PropriedadeSoloScalarWhereWithAggregatesInput[]
    OR?: PropriedadeSoloScalarWhereWithAggregatesInput[]
    NOT?: PropriedadeSoloScalarWhereWithAggregatesInput | PropriedadeSoloScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropriedadeSolo"> | number
    propriedadeId?: IntWithAggregatesFilter<"PropriedadeSolo"> | number
    soloId?: IntWithAggregatesFilter<"PropriedadeSolo"> | number
  }

  export type HistoricoWhereInput = {
    AND?: HistoricoWhereInput | HistoricoWhereInput[]
    OR?: HistoricoWhereInput[]
    NOT?: HistoricoWhereInput | HistoricoWhereInput[]
    id?: IntFilter<"Historico"> | number
    descricao?: StringNullableFilter<"Historico"> | string | null
    valorSimulacao?: FloatFilter<"Historico"> | number
    propriedadeId?: IntFilter<"Historico"> | number
    simulacaoId?: IntFilter<"Historico"> | number
    soloId?: IntFilter<"Historico"> | number
    precipitacaoId?: IntFilter<"Historico"> | number
    createdAt?: DateTimeFilter<"Historico"> | Date | string
    updatedAt?: DateTimeFilter<"Historico"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Historico"> | Date | string | null
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
    simulacao?: XOR<SimulacaoScalarRelationFilter, SimulacaoWhereInput>
    solo?: XOR<SoloScalarRelationFilter, SoloWhereInput>
    precipitacao?: XOR<PrecipitacaoScalarRelationFilter, PrecipitacaoWhereInput>
  }

  export type HistoricoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valorSimulacao?: SortOrder
    propriedadeId?: SortOrder
    simulacaoId?: SortOrder
    soloId?: SortOrder
    precipitacaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    propriedade?: PropriedadeOrderByWithRelationInput
    simulacao?: SimulacaoOrderByWithRelationInput
    solo?: SoloOrderByWithRelationInput
    precipitacao?: PrecipitacaoOrderByWithRelationInput
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
    simulacaoId?: IntFilter<"Historico"> | number
    soloId?: IntFilter<"Historico"> | number
    precipitacaoId?: IntFilter<"Historico"> | number
    createdAt?: DateTimeFilter<"Historico"> | Date | string
    updatedAt?: DateTimeFilter<"Historico"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Historico"> | Date | string | null
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
    simulacao?: XOR<SimulacaoScalarRelationFilter, SimulacaoWhereInput>
    solo?: XOR<SoloScalarRelationFilter, SoloWhereInput>
    precipitacao?: XOR<PrecipitacaoScalarRelationFilter, PrecipitacaoWhereInput>
  }, "id">

  export type HistoricoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valorSimulacao?: SortOrder
    propriedadeId?: SortOrder
    simulacaoId?: SortOrder
    soloId?: SortOrder
    precipitacaoId?: SortOrder
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
    simulacaoId?: IntWithAggregatesFilter<"Historico"> | number
    soloId?: IntWithAggregatesFilter<"Historico"> | number
    precipitacaoId?: IntWithAggregatesFilter<"Historico"> | number
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
    propriedadeId?: IntFilter<"Precipitacao"> | number
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
    historico?: HistoricoListRelationFilter
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
    propriedadeId?: SortOrder
    propriedade?: PropriedadeOrderByWithRelationInput
    historico?: HistoricoOrderByRelationAggregateInput
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
    propriedadeId?: IntFilter<"Precipitacao"> | number
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
    historico?: HistoricoListRelationFilter
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
    propriedadeId?: SortOrder
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
    propriedadeId?: IntWithAggregatesFilter<"Precipitacao"> | number
  }

  export type SoloWhereInput = {
    AND?: SoloWhereInput | SoloWhereInput[]
    OR?: SoloWhereInput[]
    NOT?: SoloWhereInput | SoloWhereInput[]
    id?: IntFilter<"Solo"> | number
    nomeClasse?: StringFilter<"Solo"> | string
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
    propriedadeId?: IntNullableFilter<"Solo"> | number | null
    historico?: HistoricoListRelationFilter
    propriedadeSolo?: PropriedadeSoloListRelationFilter
    Propriedade?: XOR<PropriedadeNullableScalarRelationFilter, PropriedadeWhereInput> | null
  }

  export type SoloOrderByWithRelationInput = {
    id?: SortOrder
    nomeClasse?: SortOrder
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
    propriedadeId?: SortOrderInput | SortOrder
    historico?: HistoricoOrderByRelationAggregateInput
    propriedadeSolo?: PropriedadeSoloOrderByRelationAggregateInput
    Propriedade?: PropriedadeOrderByWithRelationInput
    _relevance?: SoloOrderByRelevanceInput
  }

  export type SoloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SoloWhereInput | SoloWhereInput[]
    OR?: SoloWhereInput[]
    NOT?: SoloWhereInput | SoloWhereInput[]
    nomeClasse?: StringFilter<"Solo"> | string
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
    propriedadeId?: IntNullableFilter<"Solo"> | number | null
    historico?: HistoricoListRelationFilter
    propriedadeSolo?: PropriedadeSoloListRelationFilter
    Propriedade?: XOR<PropriedadeNullableScalarRelationFilter, PropriedadeWhereInput> | null
  }, "id">

  export type SoloOrderByWithAggregationInput = {
    id?: SortOrder
    nomeClasse?: SortOrder
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
    propriedadeId?: SortOrderInput | SortOrder
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
    nomeClasse?: StringWithAggregatesFilter<"Solo"> | string
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
    propriedadeId?: IntNullableWithAggregatesFilter<"Solo"> | number | null
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
    simulacaoId?: IntFilter<"Estimativas"> | number
    simulacao?: XOR<SimulacaoScalarRelationFilter, SimulacaoWhereInput>
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
    simulacaoId?: SortOrder
    simulacao?: SimulacaoOrderByWithRelationInput
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
    simulacaoId?: IntFilter<"Estimativas"> | number
    simulacao?: XOR<SimulacaoScalarRelationFilter, SimulacaoWhereInput>
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
    simulacaoId?: SortOrder
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
    simulacaoId?: IntWithAggregatesFilter<"Estimativas"> | number
  }

  export type SimulacaoWhereInput = {
    AND?: SimulacaoWhereInput | SimulacaoWhereInput[]
    OR?: SimulacaoWhereInput[]
    NOT?: SimulacaoWhereInput | SimulacaoWhereInput[]
    id?: IntFilter<"Simulacao"> | number
    nomeSimulacao?: StringFilter<"Simulacao"> | string
    dadosJson?: JsonNullableFilter<"Simulacao">
    culturaId?: IntFilter<"Simulacao"> | number
    soloId?: IntFilter<"Simulacao"> | number
    resultado?: FloatFilter<"Simulacao"> | number
    dataSimulacao?: DateTimeFilter<"Simulacao"> | Date | string
    createdAt?: DateTimeFilter<"Simulacao"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Simulacao"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Simulacao"> | Date | string | null
    propriedadeId?: IntFilter<"Simulacao"> | number
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
    historico?: HistoricoListRelationFilter
    estimativas?: EstimativasListRelationFilter
  }

  export type SimulacaoOrderByWithRelationInput = {
    id?: SortOrder
    nomeSimulacao?: SortOrder
    dadosJson?: SortOrderInput | SortOrder
    culturaId?: SortOrder
    soloId?: SortOrder
    resultado?: SortOrder
    dataSimulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    propriedadeId?: SortOrder
    propriedade?: PropriedadeOrderByWithRelationInput
    historico?: HistoricoOrderByRelationAggregateInput
    estimativas?: EstimativasOrderByRelationAggregateInput
    _relevance?: SimulacaoOrderByRelevanceInput
  }

  export type SimulacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SimulacaoWhereInput | SimulacaoWhereInput[]
    OR?: SimulacaoWhereInput[]
    NOT?: SimulacaoWhereInput | SimulacaoWhereInput[]
    nomeSimulacao?: StringFilter<"Simulacao"> | string
    dadosJson?: JsonNullableFilter<"Simulacao">
    culturaId?: IntFilter<"Simulacao"> | number
    soloId?: IntFilter<"Simulacao"> | number
    resultado?: FloatFilter<"Simulacao"> | number
    dataSimulacao?: DateTimeFilter<"Simulacao"> | Date | string
    createdAt?: DateTimeFilter<"Simulacao"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Simulacao"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Simulacao"> | Date | string | null
    propriedadeId?: IntFilter<"Simulacao"> | number
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
    historico?: HistoricoListRelationFilter
    estimativas?: EstimativasListRelationFilter
  }, "id">

  export type SimulacaoOrderByWithAggregationInput = {
    id?: SortOrder
    nomeSimulacao?: SortOrder
    dadosJson?: SortOrderInput | SortOrder
    culturaId?: SortOrder
    soloId?: SortOrder
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
    nomeSimulacao?: StringWithAggregatesFilter<"Simulacao"> | string
    dadosJson?: JsonNullableWithAggregatesFilter<"Simulacao">
    culturaId?: IntWithAggregatesFilter<"Simulacao"> | number
    soloId?: IntWithAggregatesFilter<"Simulacao"> | number
    resultado?: FloatWithAggregatesFilter<"Simulacao"> | number
    dataSimulacao?: DateTimeWithAggregatesFilter<"Simulacao"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Simulacao"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Simulacao"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Simulacao"> | Date | string | null
    propriedadeId?: IntWithAggregatesFilter<"Simulacao"> | number
  }

  export type CulturaWhereInput = {
    AND?: CulturaWhereInput | CulturaWhereInput[]
    OR?: CulturaWhereInput[]
    NOT?: CulturaWhereInput | CulturaWhereInput[]
    id?: IntFilter<"Cultura"> | number
    name?: StringFilter<"Cultura"> | string
    eua?: FloatFilter<"Cultura"> | number
    createdAt?: DateTimeFilter<"Cultura"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Cultura"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Cultura"> | Date | string | null
    PropriedadeCultura?: PropriedadeCulturaListRelationFilter
  }

  export type CulturaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    eua?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    PropriedadeCultura?: PropriedadeCulturaOrderByRelationAggregateInput
    _relevance?: CulturaOrderByRelevanceInput
  }

  export type CulturaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CulturaWhereInput | CulturaWhereInput[]
    OR?: CulturaWhereInput[]
    NOT?: CulturaWhereInput | CulturaWhereInput[]
    name?: StringFilter<"Cultura"> | string
    eua?: FloatFilter<"Cultura"> | number
    createdAt?: DateTimeFilter<"Cultura"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Cultura"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Cultura"> | Date | string | null
    PropriedadeCultura?: PropriedadeCulturaListRelationFilter
  }, "id">

  export type CulturaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    eua?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CulturaCountOrderByAggregateInput
    _avg?: CulturaAvgOrderByAggregateInput
    _max?: CulturaMaxOrderByAggregateInput
    _min?: CulturaMinOrderByAggregateInput
    _sum?: CulturaSumOrderByAggregateInput
  }

  export type CulturaScalarWhereWithAggregatesInput = {
    AND?: CulturaScalarWhereWithAggregatesInput | CulturaScalarWhereWithAggregatesInput[]
    OR?: CulturaScalarWhereWithAggregatesInput[]
    NOT?: CulturaScalarWhereWithAggregatesInput | CulturaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cultura"> | number
    name?: StringWithAggregatesFilter<"Cultura"> | string
    eua?: FloatWithAggregatesFilter<"Cultura"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Cultura"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Cultura"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Cultura"> | Date | string | null
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadeInput
    estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoCreateNestedManyWithoutPropriedadeInput
    precipitacoes?: PrecipitacaoCreateNestedManyWithoutPropriedadeInput
    propriedadeCultura?: PropriedadeCulturaCreateNestedManyWithoutPropriedadeInput
    propriedadeSolo?: PropriedadeSoloCreateNestedManyWithoutPropriedadeInput
    Solo?: SoloCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateInput = {
    id?: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    adminId?: number | null
    estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
    precipitacoes?: PrecipitacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    propriedadeCultura?: PropriedadeCulturaUncheckedCreateNestedManyWithoutPropriedadeInput
    propriedadeSolo?: PropriedadeSoloUncheckedCreateNestedManyWithoutPropriedadeInput
    Solo?: SoloUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUpdateInput = {
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadeNestedInput
    estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUpdateManyWithoutPropriedadeNestedInput
    precipitacoes?: PrecipitacaoUpdateManyWithoutPropriedadeNestedInput
    propriedadeCultura?: PropriedadeCulturaUpdateManyWithoutPropriedadeNestedInput
    propriedadeSolo?: PropriedadeSoloUpdateManyWithoutPropriedadeNestedInput
    Solo?: SoloUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
    precipitacoes?: PrecipitacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    propriedadeCultura?: PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeNestedInput
    propriedadeSolo?: PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeNestedInput
    Solo?: SoloUncheckedUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeCreateManyInput = {
    id?: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PropriedadeCulturaCreateInput = {
    propriedade: PropriedadeCreateNestedOneWithoutPropriedadeCulturaInput
    cultura: CulturaCreateNestedOneWithoutPropriedadeCulturaInput
  }

  export type PropriedadeCulturaUncheckedCreateInput = {
    id?: number
    propriedadeId: number
    culturaId: number
  }

  export type PropriedadeCulturaUpdateInput = {
    propriedade?: PropriedadeUpdateOneRequiredWithoutPropriedadeCulturaNestedInput
    cultura?: CulturaUpdateOneRequiredWithoutPropriedadeCulturaNestedInput
  }

  export type PropriedadeCulturaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
    culturaId?: IntFieldUpdateOperationsInput | number
  }

  export type PropriedadeCulturaCreateManyInput = {
    id?: number
    propriedadeId: number
    culturaId: number
  }

  export type PropriedadeCulturaUpdateManyMutationInput = {

  }

  export type PropriedadeCulturaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
    culturaId?: IntFieldUpdateOperationsInput | number
  }

  export type PropriedadeSoloCreateInput = {
    propriedade: PropriedadeCreateNestedOneWithoutPropriedadeSoloInput
    solo: SoloCreateNestedOneWithoutPropriedadeSoloInput
  }

  export type PropriedadeSoloUncheckedCreateInput = {
    id?: number
    propriedadeId: number
    soloId: number
  }

  export type PropriedadeSoloUpdateInput = {
    propriedade?: PropriedadeUpdateOneRequiredWithoutPropriedadeSoloNestedInput
    solo?: SoloUpdateOneRequiredWithoutPropriedadeSoloNestedInput
  }

  export type PropriedadeSoloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
  }

  export type PropriedadeSoloCreateManyInput = {
    id?: number
    propriedadeId: number
    soloId: number
  }

  export type PropriedadeSoloUpdateManyMutationInput = {

  }

  export type PropriedadeSoloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricoCreateInput = {
    descricao?: string | null
    valorSimulacao: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    propriedade: PropriedadeCreateNestedOneWithoutHistoricosInput
    simulacao: SimulacaoCreateNestedOneWithoutHistoricoInput
    solo: SoloCreateNestedOneWithoutHistoricoInput
    precipitacao: PrecipitacaoCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateInput = {
    id?: number
    descricao?: string | null
    valorSimulacao: number
    propriedadeId: number
    simulacaoId: number
    soloId: number
    precipitacaoId: number
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
    simulacao?: SimulacaoUpdateOneRequiredWithoutHistoricoNestedInput
    solo?: SoloUpdateOneRequiredWithoutHistoricoNestedInput
    precipitacao?: PrecipitacaoUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
    simulacaoId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    precipitacaoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoricoCreateManyInput = {
    id?: number
    descricao?: string | null
    valorSimulacao: number
    propriedadeId: number
    simulacaoId: number
    soloId: number
    precipitacaoId: number
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
    simulacaoId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    precipitacaoId?: IntFieldUpdateOperationsInput | number
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
    propriedade: PropriedadeCreateNestedOneWithoutPrecipitacoesInput
    historico?: HistoricoCreateNestedManyWithoutPrecipitacaoInput
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
    propriedadeId: number
    historico?: HistoricoUncheckedCreateNestedManyWithoutPrecipitacaoInput
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
    propriedade?: PropriedadeUpdateOneRequiredWithoutPrecipitacoesNestedInput
    historico?: HistoricoUpdateManyWithoutPrecipitacaoNestedInput
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
    propriedadeId?: IntFieldUpdateOperationsInput | number
    historico?: HistoricoUncheckedUpdateManyWithoutPrecipitacaoNestedInput
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
    propriedadeId: number
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
    propriedadeId?: IntFieldUpdateOperationsInput | number
  }

  export type SoloCreateInput = {
    nomeClasse: string
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
    historico?: HistoricoCreateNestedManyWithoutSoloInput
    propriedadeSolo?: PropriedadeSoloCreateNestedManyWithoutSoloInput
    Propriedade?: PropriedadeCreateNestedOneWithoutSoloInput
  }

  export type SoloUncheckedCreateInput = {
    id?: number
    nomeClasse: string
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
    propriedadeId?: number | null
    historico?: HistoricoUncheckedCreateNestedManyWithoutSoloInput
    propriedadeSolo?: PropriedadeSoloUncheckedCreateNestedManyWithoutSoloInput
  }

  export type SoloUpdateInput = {
    nomeClasse?: StringFieldUpdateOperationsInput | string
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
    historico?: HistoricoUpdateManyWithoutSoloNestedInput
    propriedadeSolo?: PropriedadeSoloUpdateManyWithoutSoloNestedInput
    Propriedade?: PropriedadeUpdateOneWithoutSoloNestedInput
  }

  export type SoloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeClasse?: StringFieldUpdateOperationsInput | string
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
    propriedadeId?: NullableIntFieldUpdateOperationsInput | number | null
    historico?: HistoricoUncheckedUpdateManyWithoutSoloNestedInput
    propriedadeSolo?: PropriedadeSoloUncheckedUpdateManyWithoutSoloNestedInput
  }

  export type SoloCreateManyInput = {
    id?: number
    nomeClasse: string
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
    propriedadeId?: number | null
  }

  export type SoloUpdateManyMutationInput = {
    nomeClasse?: StringFieldUpdateOperationsInput | string
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
    nomeClasse?: StringFieldUpdateOperationsInput | string
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
    propriedadeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EstimativasCreateInput = {
    valorTotal: number
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    simulacao: SimulacaoCreateNestedOneWithoutEstimativasInput
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
    simulacaoId: number
  }

  export type EstimativasUpdateInput = {
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    simulacao?: SimulacaoUpdateOneRequiredWithoutEstimativasNestedInput
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
    simulacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type EstimativasCreateManyInput = {
    id?: number
    valorTotal: number
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId: number
    simulacaoId: number
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
    simulacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type SimulacaoCreateInput = {
    nomeSimulacao: string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId: number
    soloId: number
    resultado: number
    dataSimulacao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedade: PropriedadeCreateNestedOneWithoutSimulacoesInput
    historico?: HistoricoCreateNestedManyWithoutSimulacaoInput
    estimativas?: EstimativasCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoUncheckedCreateInput = {
    id?: number
    nomeSimulacao: string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId: number
    soloId: number
    resultado: number
    dataSimulacao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId: number
    historico?: HistoricoUncheckedCreateNestedManyWithoutSimulacaoInput
    estimativas?: EstimativasUncheckedCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoUpdateInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedade?: PropriedadeUpdateOneRequiredWithoutSimulacoesNestedInput
    historico?: HistoricoUpdateManyWithoutSimulacaoNestedInput
    estimativas?: EstimativasUpdateManyWithoutSimulacaoNestedInput
  }

  export type SimulacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: IntFieldUpdateOperationsInput | number
    historico?: HistoricoUncheckedUpdateManyWithoutSimulacaoNestedInput
    estimativas?: EstimativasUncheckedUpdateManyWithoutSimulacaoNestedInput
  }

  export type SimulacaoCreateManyInput = {
    id?: number
    nomeSimulacao: string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId: number
    soloId: number
    resultado: number
    dataSimulacao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId: number
  }

  export type SimulacaoUpdateManyMutationInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SimulacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: IntFieldUpdateOperationsInput | number
  }

  export type CulturaCreateInput = {
    name: string
    eua: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    PropriedadeCultura?: PropriedadeCulturaCreateNestedManyWithoutCulturaInput
  }

  export type CulturaUncheckedCreateInput = {
    id?: number
    name: string
    eua: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    PropriedadeCultura?: PropriedadeCulturaUncheckedCreateNestedManyWithoutCulturaInput
  }

  export type CulturaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    eua?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PropriedadeCultura?: PropriedadeCulturaUpdateManyWithoutCulturaNestedInput
  }

  export type CulturaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    eua?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PropriedadeCultura?: PropriedadeCulturaUncheckedUpdateManyWithoutCulturaNestedInput
  }

  export type CulturaCreateManyInput = {
    id?: number
    name: string
    eua: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CulturaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    eua?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CulturaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    eua?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type PrecipitacaoListRelationFilter = {
    every?: PrecipitacaoWhereInput
    some?: PrecipitacaoWhereInput
    none?: PrecipitacaoWhereInput
  }

  export type PropriedadeCulturaListRelationFilter = {
    every?: PropriedadeCulturaWhereInput
    some?: PropriedadeCulturaWhereInput
    none?: PropriedadeCulturaWhereInput
  }

  export type PropriedadeSoloListRelationFilter = {
    every?: PropriedadeSoloWhereInput
    some?: PropriedadeSoloWhereInput
    none?: PropriedadeSoloWhereInput
  }

  export type SoloListRelationFilter = {
    every?: SoloWhereInput
    some?: SoloWhereInput
    none?: SoloWhereInput
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

  export type PrecipitacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropriedadeCulturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropriedadeSoloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SoloOrderByRelationAggregateInput = {
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    adminId?: SortOrder
  }

  export type PropriedadeAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    adminId?: SortOrder
  }

  export type PropriedadeMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeProprietario?: SortOrder
    nomePropriedade?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    adminId?: SortOrder
  }

  export type PropriedadeSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type CulturaScalarRelationFilter = {
    is?: CulturaWhereInput
    isNot?: CulturaWhereInput
  }

  export type PropriedadeCulturaPropriedadeIdCulturaIdCompoundUniqueInput = {
    propriedadeId: number
    culturaId: number
  }

  export type PropriedadeCulturaCountOrderByAggregateInput = {
    id?: SortOrder
    propriedadeId?: SortOrder
    culturaId?: SortOrder
  }

  export type PropriedadeCulturaAvgOrderByAggregateInput = {
    id?: SortOrder
    propriedadeId?: SortOrder
    culturaId?: SortOrder
  }

  export type PropriedadeCulturaMaxOrderByAggregateInput = {
    id?: SortOrder
    propriedadeId?: SortOrder
    culturaId?: SortOrder
  }

  export type PropriedadeCulturaMinOrderByAggregateInput = {
    id?: SortOrder
    propriedadeId?: SortOrder
    culturaId?: SortOrder
  }

  export type PropriedadeCulturaSumOrderByAggregateInput = {
    id?: SortOrder
    propriedadeId?: SortOrder
    culturaId?: SortOrder
  }

  export type SoloScalarRelationFilter = {
    is?: SoloWhereInput
    isNot?: SoloWhereInput
  }

  export type PropriedadeSoloPropriedadeIdSoloIdCompoundUniqueInput = {
    propriedadeId: number
    soloId: number
  }

  export type PropriedadeSoloCountOrderByAggregateInput = {
    id?: SortOrder
    propriedadeId?: SortOrder
    soloId?: SortOrder
  }

  export type PropriedadeSoloAvgOrderByAggregateInput = {
    id?: SortOrder
    propriedadeId?: SortOrder
    soloId?: SortOrder
  }

  export type PropriedadeSoloMaxOrderByAggregateInput = {
    id?: SortOrder
    propriedadeId?: SortOrder
    soloId?: SortOrder
  }

  export type PropriedadeSoloMinOrderByAggregateInput = {
    id?: SortOrder
    propriedadeId?: SortOrder
    soloId?: SortOrder
  }

  export type PropriedadeSoloSumOrderByAggregateInput = {
    id?: SortOrder
    propriedadeId?: SortOrder
    soloId?: SortOrder
  }

  export type SimulacaoScalarRelationFilter = {
    is?: SimulacaoWhereInput
    isNot?: SimulacaoWhereInput
  }

  export type PrecipitacaoScalarRelationFilter = {
    is?: PrecipitacaoWhereInput
    isNot?: PrecipitacaoWhereInput
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
    simulacaoId?: SortOrder
    soloId?: SortOrder
    precipitacaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type HistoricoAvgOrderByAggregateInput = {
    id?: SortOrder
    valorSimulacao?: SortOrder
    propriedadeId?: SortOrder
    simulacaoId?: SortOrder
    soloId?: SortOrder
    precipitacaoId?: SortOrder
  }

  export type HistoricoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    valorSimulacao?: SortOrder
    propriedadeId?: SortOrder
    simulacaoId?: SortOrder
    soloId?: SortOrder
    precipitacaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type HistoricoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    valorSimulacao?: SortOrder
    propriedadeId?: SortOrder
    simulacaoId?: SortOrder
    soloId?: SortOrder
    precipitacaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type HistoricoSumOrderByAggregateInput = {
    id?: SortOrder
    valorSimulacao?: SortOrder
    propriedadeId?: SortOrder
    simulacaoId?: SortOrder
    soloId?: SortOrder
    precipitacaoId?: SortOrder
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
    propriedadeId?: SortOrder
  }

  export type PrecipitacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    mmAno?: SortOrder
    chuvas?: SortOrder
    mmDia?: SortOrder
    cvDia?: SortOrder
    mmMes?: SortOrder
    cvMes?: SortOrder
    propriedadeId?: SortOrder
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
    propriedadeId?: SortOrder
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
    propriedadeId?: SortOrder
  }

  export type PrecipitacaoSumOrderByAggregateInput = {
    id?: SortOrder
    mmAno?: SortOrder
    chuvas?: SortOrder
    mmDia?: SortOrder
    cvDia?: SortOrder
    mmMes?: SortOrder
    cvMes?: SortOrder
    propriedadeId?: SortOrder
  }

  export type SoloOrderByRelevanceInput = {
    fields: SoloOrderByRelevanceFieldEnum | SoloOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SoloCountOrderByAggregateInput = {
    id?: SortOrder
    nomeClasse?: SortOrder
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
    propriedadeId?: SortOrder
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
    propriedadeId?: SortOrder
  }

  export type SoloMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeClasse?: SortOrder
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
    propriedadeId?: SortOrder
  }

  export type SoloMinOrderByAggregateInput = {
    id?: SortOrder
    nomeClasse?: SortOrder
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
    propriedadeId?: SortOrder
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
    propriedadeId?: SortOrder
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
    simulacaoId?: SortOrder
  }

  export type EstimativasAvgOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    propriedadeId?: SortOrder
    simulacaoId?: SortOrder
  }

  export type EstimativasMaxOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    propriedadeId?: SortOrder
    simulacaoId?: SortOrder
  }

  export type EstimativasMinOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    propriedadeId?: SortOrder
    simulacaoId?: SortOrder
  }

  export type EstimativasSumOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    propriedadeId?: SortOrder
    simulacaoId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
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

  export type SimulacaoOrderByRelevanceInput = {
    fields: SimulacaoOrderByRelevanceFieldEnum | SimulacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SimulacaoCountOrderByAggregateInput = {
    id?: SortOrder
    nomeSimulacao?: SortOrder
    dadosJson?: SortOrder
    culturaId?: SortOrder
    soloId?: SortOrder
    resultado?: SortOrder
    dataSimulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    propriedadeId?: SortOrder
  }

  export type SimulacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    culturaId?: SortOrder
    soloId?: SortOrder
    resultado?: SortOrder
    propriedadeId?: SortOrder
  }

  export type SimulacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeSimulacao?: SortOrder
    culturaId?: SortOrder
    soloId?: SortOrder
    resultado?: SortOrder
    dataSimulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    propriedadeId?: SortOrder
  }

  export type SimulacaoMinOrderByAggregateInput = {
    id?: SortOrder
    nomeSimulacao?: SortOrder
    culturaId?: SortOrder
    soloId?: SortOrder
    resultado?: SortOrder
    dataSimulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    propriedadeId?: SortOrder
  }

  export type SimulacaoSumOrderByAggregateInput = {
    id?: SortOrder
    culturaId?: SortOrder
    soloId?: SortOrder
    resultado?: SortOrder
    propriedadeId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type CulturaOrderByRelevanceInput = {
    fields: CulturaOrderByRelevanceFieldEnum | CulturaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CulturaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    eua?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CulturaAvgOrderByAggregateInput = {
    id?: SortOrder
    eua?: SortOrder
  }

  export type CulturaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    eua?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CulturaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    eua?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CulturaSumOrderByAggregateInput = {
    id?: SortOrder
    eua?: SortOrder
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

  export type PrecipitacaoCreateNestedManyWithoutPropriedadeInput = {
    create?: XOR<PrecipitacaoCreateWithoutPropriedadeInput, PrecipitacaoUncheckedCreateWithoutPropriedadeInput> | PrecipitacaoCreateWithoutPropriedadeInput[] | PrecipitacaoUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: PrecipitacaoCreateOrConnectWithoutPropriedadeInput | PrecipitacaoCreateOrConnectWithoutPropriedadeInput[]
    createMany?: PrecipitacaoCreateManyPropriedadeInputEnvelope
    connect?: PrecipitacaoWhereUniqueInput | PrecipitacaoWhereUniqueInput[]
  }

  export type PropriedadeCulturaCreateNestedManyWithoutPropriedadeInput = {
    create?: XOR<PropriedadeCulturaCreateWithoutPropriedadeInput, PropriedadeCulturaUncheckedCreateWithoutPropriedadeInput> | PropriedadeCulturaCreateWithoutPropriedadeInput[] | PropriedadeCulturaUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: PropriedadeCulturaCreateOrConnectWithoutPropriedadeInput | PropriedadeCulturaCreateOrConnectWithoutPropriedadeInput[]
    createMany?: PropriedadeCulturaCreateManyPropriedadeInputEnvelope
    connect?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
  }

  export type PropriedadeSoloCreateNestedManyWithoutPropriedadeInput = {
    create?: XOR<PropriedadeSoloCreateWithoutPropriedadeInput, PropriedadeSoloUncheckedCreateWithoutPropriedadeInput> | PropriedadeSoloCreateWithoutPropriedadeInput[] | PropriedadeSoloUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: PropriedadeSoloCreateOrConnectWithoutPropriedadeInput | PropriedadeSoloCreateOrConnectWithoutPropriedadeInput[]
    createMany?: PropriedadeSoloCreateManyPropriedadeInputEnvelope
    connect?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
  }

  export type SoloCreateNestedManyWithoutPropriedadeInput = {
    create?: XOR<SoloCreateWithoutPropriedadeInput, SoloUncheckedCreateWithoutPropriedadeInput> | SoloCreateWithoutPropriedadeInput[] | SoloUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: SoloCreateOrConnectWithoutPropriedadeInput | SoloCreateOrConnectWithoutPropriedadeInput[]
    createMany?: SoloCreateManyPropriedadeInputEnvelope
    connect?: SoloWhereUniqueInput | SoloWhereUniqueInput[]
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

  export type PrecipitacaoUncheckedCreateNestedManyWithoutPropriedadeInput = {
    create?: XOR<PrecipitacaoCreateWithoutPropriedadeInput, PrecipitacaoUncheckedCreateWithoutPropriedadeInput> | PrecipitacaoCreateWithoutPropriedadeInput[] | PrecipitacaoUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: PrecipitacaoCreateOrConnectWithoutPropriedadeInput | PrecipitacaoCreateOrConnectWithoutPropriedadeInput[]
    createMany?: PrecipitacaoCreateManyPropriedadeInputEnvelope
    connect?: PrecipitacaoWhereUniqueInput | PrecipitacaoWhereUniqueInput[]
  }

  export type PropriedadeCulturaUncheckedCreateNestedManyWithoutPropriedadeInput = {
    create?: XOR<PropriedadeCulturaCreateWithoutPropriedadeInput, PropriedadeCulturaUncheckedCreateWithoutPropriedadeInput> | PropriedadeCulturaCreateWithoutPropriedadeInput[] | PropriedadeCulturaUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: PropriedadeCulturaCreateOrConnectWithoutPropriedadeInput | PropriedadeCulturaCreateOrConnectWithoutPropriedadeInput[]
    createMany?: PropriedadeCulturaCreateManyPropriedadeInputEnvelope
    connect?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
  }

  export type PropriedadeSoloUncheckedCreateNestedManyWithoutPropriedadeInput = {
    create?: XOR<PropriedadeSoloCreateWithoutPropriedadeInput, PropriedadeSoloUncheckedCreateWithoutPropriedadeInput> | PropriedadeSoloCreateWithoutPropriedadeInput[] | PropriedadeSoloUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: PropriedadeSoloCreateOrConnectWithoutPropriedadeInput | PropriedadeSoloCreateOrConnectWithoutPropriedadeInput[]
    createMany?: PropriedadeSoloCreateManyPropriedadeInputEnvelope
    connect?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
  }

  export type SoloUncheckedCreateNestedManyWithoutPropriedadeInput = {
    create?: XOR<SoloCreateWithoutPropriedadeInput, SoloUncheckedCreateWithoutPropriedadeInput> | SoloCreateWithoutPropriedadeInput[] | SoloUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: SoloCreateOrConnectWithoutPropriedadeInput | SoloCreateOrConnectWithoutPropriedadeInput[]
    createMany?: SoloCreateManyPropriedadeInputEnvelope
    connect?: SoloWhereUniqueInput | SoloWhereUniqueInput[]
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

  export type PrecipitacaoUpdateManyWithoutPropriedadeNestedInput = {
    create?: XOR<PrecipitacaoCreateWithoutPropriedadeInput, PrecipitacaoUncheckedCreateWithoutPropriedadeInput> | PrecipitacaoCreateWithoutPropriedadeInput[] | PrecipitacaoUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: PrecipitacaoCreateOrConnectWithoutPropriedadeInput | PrecipitacaoCreateOrConnectWithoutPropriedadeInput[]
    upsert?: PrecipitacaoUpsertWithWhereUniqueWithoutPropriedadeInput | PrecipitacaoUpsertWithWhereUniqueWithoutPropriedadeInput[]
    createMany?: PrecipitacaoCreateManyPropriedadeInputEnvelope
    set?: PrecipitacaoWhereUniqueInput | PrecipitacaoWhereUniqueInput[]
    disconnect?: PrecipitacaoWhereUniqueInput | PrecipitacaoWhereUniqueInput[]
    delete?: PrecipitacaoWhereUniqueInput | PrecipitacaoWhereUniqueInput[]
    connect?: PrecipitacaoWhereUniqueInput | PrecipitacaoWhereUniqueInput[]
    update?: PrecipitacaoUpdateWithWhereUniqueWithoutPropriedadeInput | PrecipitacaoUpdateWithWhereUniqueWithoutPropriedadeInput[]
    updateMany?: PrecipitacaoUpdateManyWithWhereWithoutPropriedadeInput | PrecipitacaoUpdateManyWithWhereWithoutPropriedadeInput[]
    deleteMany?: PrecipitacaoScalarWhereInput | PrecipitacaoScalarWhereInput[]
  }

  export type PropriedadeCulturaUpdateManyWithoutPropriedadeNestedInput = {
    create?: XOR<PropriedadeCulturaCreateWithoutPropriedadeInput, PropriedadeCulturaUncheckedCreateWithoutPropriedadeInput> | PropriedadeCulturaCreateWithoutPropriedadeInput[] | PropriedadeCulturaUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: PropriedadeCulturaCreateOrConnectWithoutPropriedadeInput | PropriedadeCulturaCreateOrConnectWithoutPropriedadeInput[]
    upsert?: PropriedadeCulturaUpsertWithWhereUniqueWithoutPropriedadeInput | PropriedadeCulturaUpsertWithWhereUniqueWithoutPropriedadeInput[]
    createMany?: PropriedadeCulturaCreateManyPropriedadeInputEnvelope
    set?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
    disconnect?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
    delete?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
    connect?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
    update?: PropriedadeCulturaUpdateWithWhereUniqueWithoutPropriedadeInput | PropriedadeCulturaUpdateWithWhereUniqueWithoutPropriedadeInput[]
    updateMany?: PropriedadeCulturaUpdateManyWithWhereWithoutPropriedadeInput | PropriedadeCulturaUpdateManyWithWhereWithoutPropriedadeInput[]
    deleteMany?: PropriedadeCulturaScalarWhereInput | PropriedadeCulturaScalarWhereInput[]
  }

  export type PropriedadeSoloUpdateManyWithoutPropriedadeNestedInput = {
    create?: XOR<PropriedadeSoloCreateWithoutPropriedadeInput, PropriedadeSoloUncheckedCreateWithoutPropriedadeInput> | PropriedadeSoloCreateWithoutPropriedadeInput[] | PropriedadeSoloUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: PropriedadeSoloCreateOrConnectWithoutPropriedadeInput | PropriedadeSoloCreateOrConnectWithoutPropriedadeInput[]
    upsert?: PropriedadeSoloUpsertWithWhereUniqueWithoutPropriedadeInput | PropriedadeSoloUpsertWithWhereUniqueWithoutPropriedadeInput[]
    createMany?: PropriedadeSoloCreateManyPropriedadeInputEnvelope
    set?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
    disconnect?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
    delete?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
    connect?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
    update?: PropriedadeSoloUpdateWithWhereUniqueWithoutPropriedadeInput | PropriedadeSoloUpdateWithWhereUniqueWithoutPropriedadeInput[]
    updateMany?: PropriedadeSoloUpdateManyWithWhereWithoutPropriedadeInput | PropriedadeSoloUpdateManyWithWhereWithoutPropriedadeInput[]
    deleteMany?: PropriedadeSoloScalarWhereInput | PropriedadeSoloScalarWhereInput[]
  }

  export type SoloUpdateManyWithoutPropriedadeNestedInput = {
    create?: XOR<SoloCreateWithoutPropriedadeInput, SoloUncheckedCreateWithoutPropriedadeInput> | SoloCreateWithoutPropriedadeInput[] | SoloUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: SoloCreateOrConnectWithoutPropriedadeInput | SoloCreateOrConnectWithoutPropriedadeInput[]
    upsert?: SoloUpsertWithWhereUniqueWithoutPropriedadeInput | SoloUpsertWithWhereUniqueWithoutPropriedadeInput[]
    createMany?: SoloCreateManyPropriedadeInputEnvelope
    set?: SoloWhereUniqueInput | SoloWhereUniqueInput[]
    disconnect?: SoloWhereUniqueInput | SoloWhereUniqueInput[]
    delete?: SoloWhereUniqueInput | SoloWhereUniqueInput[]
    connect?: SoloWhereUniqueInput | SoloWhereUniqueInput[]
    update?: SoloUpdateWithWhereUniqueWithoutPropriedadeInput | SoloUpdateWithWhereUniqueWithoutPropriedadeInput[]
    updateMany?: SoloUpdateManyWithWhereWithoutPropriedadeInput | SoloUpdateManyWithWhereWithoutPropriedadeInput[]
    deleteMany?: SoloScalarWhereInput | SoloScalarWhereInput[]
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

  export type PrecipitacaoUncheckedUpdateManyWithoutPropriedadeNestedInput = {
    create?: XOR<PrecipitacaoCreateWithoutPropriedadeInput, PrecipitacaoUncheckedCreateWithoutPropriedadeInput> | PrecipitacaoCreateWithoutPropriedadeInput[] | PrecipitacaoUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: PrecipitacaoCreateOrConnectWithoutPropriedadeInput | PrecipitacaoCreateOrConnectWithoutPropriedadeInput[]
    upsert?: PrecipitacaoUpsertWithWhereUniqueWithoutPropriedadeInput | PrecipitacaoUpsertWithWhereUniqueWithoutPropriedadeInput[]
    createMany?: PrecipitacaoCreateManyPropriedadeInputEnvelope
    set?: PrecipitacaoWhereUniqueInput | PrecipitacaoWhereUniqueInput[]
    disconnect?: PrecipitacaoWhereUniqueInput | PrecipitacaoWhereUniqueInput[]
    delete?: PrecipitacaoWhereUniqueInput | PrecipitacaoWhereUniqueInput[]
    connect?: PrecipitacaoWhereUniqueInput | PrecipitacaoWhereUniqueInput[]
    update?: PrecipitacaoUpdateWithWhereUniqueWithoutPropriedadeInput | PrecipitacaoUpdateWithWhereUniqueWithoutPropriedadeInput[]
    updateMany?: PrecipitacaoUpdateManyWithWhereWithoutPropriedadeInput | PrecipitacaoUpdateManyWithWhereWithoutPropriedadeInput[]
    deleteMany?: PrecipitacaoScalarWhereInput | PrecipitacaoScalarWhereInput[]
  }

  export type PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeNestedInput = {
    create?: XOR<PropriedadeCulturaCreateWithoutPropriedadeInput, PropriedadeCulturaUncheckedCreateWithoutPropriedadeInput> | PropriedadeCulturaCreateWithoutPropriedadeInput[] | PropriedadeCulturaUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: PropriedadeCulturaCreateOrConnectWithoutPropriedadeInput | PropriedadeCulturaCreateOrConnectWithoutPropriedadeInput[]
    upsert?: PropriedadeCulturaUpsertWithWhereUniqueWithoutPropriedadeInput | PropriedadeCulturaUpsertWithWhereUniqueWithoutPropriedadeInput[]
    createMany?: PropriedadeCulturaCreateManyPropriedadeInputEnvelope
    set?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
    disconnect?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
    delete?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
    connect?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
    update?: PropriedadeCulturaUpdateWithWhereUniqueWithoutPropriedadeInput | PropriedadeCulturaUpdateWithWhereUniqueWithoutPropriedadeInput[]
    updateMany?: PropriedadeCulturaUpdateManyWithWhereWithoutPropriedadeInput | PropriedadeCulturaUpdateManyWithWhereWithoutPropriedadeInput[]
    deleteMany?: PropriedadeCulturaScalarWhereInput | PropriedadeCulturaScalarWhereInput[]
  }

  export type PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeNestedInput = {
    create?: XOR<PropriedadeSoloCreateWithoutPropriedadeInput, PropriedadeSoloUncheckedCreateWithoutPropriedadeInput> | PropriedadeSoloCreateWithoutPropriedadeInput[] | PropriedadeSoloUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: PropriedadeSoloCreateOrConnectWithoutPropriedadeInput | PropriedadeSoloCreateOrConnectWithoutPropriedadeInput[]
    upsert?: PropriedadeSoloUpsertWithWhereUniqueWithoutPropriedadeInput | PropriedadeSoloUpsertWithWhereUniqueWithoutPropriedadeInput[]
    createMany?: PropriedadeSoloCreateManyPropriedadeInputEnvelope
    set?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
    disconnect?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
    delete?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
    connect?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
    update?: PropriedadeSoloUpdateWithWhereUniqueWithoutPropriedadeInput | PropriedadeSoloUpdateWithWhereUniqueWithoutPropriedadeInput[]
    updateMany?: PropriedadeSoloUpdateManyWithWhereWithoutPropriedadeInput | PropriedadeSoloUpdateManyWithWhereWithoutPropriedadeInput[]
    deleteMany?: PropriedadeSoloScalarWhereInput | PropriedadeSoloScalarWhereInput[]
  }

  export type SoloUncheckedUpdateManyWithoutPropriedadeNestedInput = {
    create?: XOR<SoloCreateWithoutPropriedadeInput, SoloUncheckedCreateWithoutPropriedadeInput> | SoloCreateWithoutPropriedadeInput[] | SoloUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: SoloCreateOrConnectWithoutPropriedadeInput | SoloCreateOrConnectWithoutPropriedadeInput[]
    upsert?: SoloUpsertWithWhereUniqueWithoutPropriedadeInput | SoloUpsertWithWhereUniqueWithoutPropriedadeInput[]
    createMany?: SoloCreateManyPropriedadeInputEnvelope
    set?: SoloWhereUniqueInput | SoloWhereUniqueInput[]
    disconnect?: SoloWhereUniqueInput | SoloWhereUniqueInput[]
    delete?: SoloWhereUniqueInput | SoloWhereUniqueInput[]
    connect?: SoloWhereUniqueInput | SoloWhereUniqueInput[]
    update?: SoloUpdateWithWhereUniqueWithoutPropriedadeInput | SoloUpdateWithWhereUniqueWithoutPropriedadeInput[]
    updateMany?: SoloUpdateManyWithWhereWithoutPropriedadeInput | SoloUpdateManyWithWhereWithoutPropriedadeInput[]
    deleteMany?: SoloScalarWhereInput | SoloScalarWhereInput[]
  }

  export type PropriedadeCreateNestedOneWithoutPropriedadeCulturaInput = {
    create?: XOR<PropriedadeCreateWithoutPropriedadeCulturaInput, PropriedadeUncheckedCreateWithoutPropriedadeCulturaInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutPropriedadeCulturaInput
    connect?: PropriedadeWhereUniqueInput
  }

  export type CulturaCreateNestedOneWithoutPropriedadeCulturaInput = {
    create?: XOR<CulturaCreateWithoutPropriedadeCulturaInput, CulturaUncheckedCreateWithoutPropriedadeCulturaInput>
    connectOrCreate?: CulturaCreateOrConnectWithoutPropriedadeCulturaInput
    connect?: CulturaWhereUniqueInput
  }

  export type PropriedadeUpdateOneRequiredWithoutPropriedadeCulturaNestedInput = {
    create?: XOR<PropriedadeCreateWithoutPropriedadeCulturaInput, PropriedadeUncheckedCreateWithoutPropriedadeCulturaInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutPropriedadeCulturaInput
    upsert?: PropriedadeUpsertWithoutPropriedadeCulturaInput
    connect?: PropriedadeWhereUniqueInput
    update?: XOR<XOR<PropriedadeUpdateToOneWithWhereWithoutPropriedadeCulturaInput, PropriedadeUpdateWithoutPropriedadeCulturaInput>, PropriedadeUncheckedUpdateWithoutPropriedadeCulturaInput>
  }

  export type CulturaUpdateOneRequiredWithoutPropriedadeCulturaNestedInput = {
    create?: XOR<CulturaCreateWithoutPropriedadeCulturaInput, CulturaUncheckedCreateWithoutPropriedadeCulturaInput>
    connectOrCreate?: CulturaCreateOrConnectWithoutPropriedadeCulturaInput
    upsert?: CulturaUpsertWithoutPropriedadeCulturaInput
    connect?: CulturaWhereUniqueInput
    update?: XOR<XOR<CulturaUpdateToOneWithWhereWithoutPropriedadeCulturaInput, CulturaUpdateWithoutPropriedadeCulturaInput>, CulturaUncheckedUpdateWithoutPropriedadeCulturaInput>
  }

  export type PropriedadeCreateNestedOneWithoutPropriedadeSoloInput = {
    create?: XOR<PropriedadeCreateWithoutPropriedadeSoloInput, PropriedadeUncheckedCreateWithoutPropriedadeSoloInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutPropriedadeSoloInput
    connect?: PropriedadeWhereUniqueInput
  }

  export type SoloCreateNestedOneWithoutPropriedadeSoloInput = {
    create?: XOR<SoloCreateWithoutPropriedadeSoloInput, SoloUncheckedCreateWithoutPropriedadeSoloInput>
    connectOrCreate?: SoloCreateOrConnectWithoutPropriedadeSoloInput
    connect?: SoloWhereUniqueInput
  }

  export type PropriedadeUpdateOneRequiredWithoutPropriedadeSoloNestedInput = {
    create?: XOR<PropriedadeCreateWithoutPropriedadeSoloInput, PropriedadeUncheckedCreateWithoutPropriedadeSoloInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutPropriedadeSoloInput
    upsert?: PropriedadeUpsertWithoutPropriedadeSoloInput
    connect?: PropriedadeWhereUniqueInput
    update?: XOR<XOR<PropriedadeUpdateToOneWithWhereWithoutPropriedadeSoloInput, PropriedadeUpdateWithoutPropriedadeSoloInput>, PropriedadeUncheckedUpdateWithoutPropriedadeSoloInput>
  }

  export type SoloUpdateOneRequiredWithoutPropriedadeSoloNestedInput = {
    create?: XOR<SoloCreateWithoutPropriedadeSoloInput, SoloUncheckedCreateWithoutPropriedadeSoloInput>
    connectOrCreate?: SoloCreateOrConnectWithoutPropriedadeSoloInput
    upsert?: SoloUpsertWithoutPropriedadeSoloInput
    connect?: SoloWhereUniqueInput
    update?: XOR<XOR<SoloUpdateToOneWithWhereWithoutPropriedadeSoloInput, SoloUpdateWithoutPropriedadeSoloInput>, SoloUncheckedUpdateWithoutPropriedadeSoloInput>
  }

  export type PropriedadeCreateNestedOneWithoutHistoricosInput = {
    create?: XOR<PropriedadeCreateWithoutHistoricosInput, PropriedadeUncheckedCreateWithoutHistoricosInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutHistoricosInput
    connect?: PropriedadeWhereUniqueInput
  }

  export type SimulacaoCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<SimulacaoCreateWithoutHistoricoInput, SimulacaoUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: SimulacaoCreateOrConnectWithoutHistoricoInput
    connect?: SimulacaoWhereUniqueInput
  }

  export type SoloCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<SoloCreateWithoutHistoricoInput, SoloUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: SoloCreateOrConnectWithoutHistoricoInput
    connect?: SoloWhereUniqueInput
  }

  export type PrecipitacaoCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<PrecipitacaoCreateWithoutHistoricoInput, PrecipitacaoUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: PrecipitacaoCreateOrConnectWithoutHistoricoInput
    connect?: PrecipitacaoWhereUniqueInput
  }

  export type PropriedadeUpdateOneRequiredWithoutHistoricosNestedInput = {
    create?: XOR<PropriedadeCreateWithoutHistoricosInput, PropriedadeUncheckedCreateWithoutHistoricosInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutHistoricosInput
    upsert?: PropriedadeUpsertWithoutHistoricosInput
    connect?: PropriedadeWhereUniqueInput
    update?: XOR<XOR<PropriedadeUpdateToOneWithWhereWithoutHistoricosInput, PropriedadeUpdateWithoutHistoricosInput>, PropriedadeUncheckedUpdateWithoutHistoricosInput>
  }

  export type SimulacaoUpdateOneRequiredWithoutHistoricoNestedInput = {
    create?: XOR<SimulacaoCreateWithoutHistoricoInput, SimulacaoUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: SimulacaoCreateOrConnectWithoutHistoricoInput
    upsert?: SimulacaoUpsertWithoutHistoricoInput
    connect?: SimulacaoWhereUniqueInput
    update?: XOR<XOR<SimulacaoUpdateToOneWithWhereWithoutHistoricoInput, SimulacaoUpdateWithoutHistoricoInput>, SimulacaoUncheckedUpdateWithoutHistoricoInput>
  }

  export type SoloUpdateOneRequiredWithoutHistoricoNestedInput = {
    create?: XOR<SoloCreateWithoutHistoricoInput, SoloUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: SoloCreateOrConnectWithoutHistoricoInput
    upsert?: SoloUpsertWithoutHistoricoInput
    connect?: SoloWhereUniqueInput
    update?: XOR<XOR<SoloUpdateToOneWithWhereWithoutHistoricoInput, SoloUpdateWithoutHistoricoInput>, SoloUncheckedUpdateWithoutHistoricoInput>
  }

  export type PrecipitacaoUpdateOneRequiredWithoutHistoricoNestedInput = {
    create?: XOR<PrecipitacaoCreateWithoutHistoricoInput, PrecipitacaoUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: PrecipitacaoCreateOrConnectWithoutHistoricoInput
    upsert?: PrecipitacaoUpsertWithoutHistoricoInput
    connect?: PrecipitacaoWhereUniqueInput
    update?: XOR<XOR<PrecipitacaoUpdateToOneWithWhereWithoutHistoricoInput, PrecipitacaoUpdateWithoutHistoricoInput>, PrecipitacaoUncheckedUpdateWithoutHistoricoInput>
  }

  export type PropriedadeCreateNestedOneWithoutPrecipitacoesInput = {
    create?: XOR<PropriedadeCreateWithoutPrecipitacoesInput, PropriedadeUncheckedCreateWithoutPrecipitacoesInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutPrecipitacoesInput
    connect?: PropriedadeWhereUniqueInput
  }

  export type HistoricoCreateNestedManyWithoutPrecipitacaoInput = {
    create?: XOR<HistoricoCreateWithoutPrecipitacaoInput, HistoricoUncheckedCreateWithoutPrecipitacaoInput> | HistoricoCreateWithoutPrecipitacaoInput[] | HistoricoUncheckedCreateWithoutPrecipitacaoInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutPrecipitacaoInput | HistoricoCreateOrConnectWithoutPrecipitacaoInput[]
    createMany?: HistoricoCreateManyPrecipitacaoInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type HistoricoUncheckedCreateNestedManyWithoutPrecipitacaoInput = {
    create?: XOR<HistoricoCreateWithoutPrecipitacaoInput, HistoricoUncheckedCreateWithoutPrecipitacaoInput> | HistoricoCreateWithoutPrecipitacaoInput[] | HistoricoUncheckedCreateWithoutPrecipitacaoInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutPrecipitacaoInput | HistoricoCreateOrConnectWithoutPrecipitacaoInput[]
    createMany?: HistoricoCreateManyPrecipitacaoInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type PropriedadeUpdateOneRequiredWithoutPrecipitacoesNestedInput = {
    create?: XOR<PropriedadeCreateWithoutPrecipitacoesInput, PropriedadeUncheckedCreateWithoutPrecipitacoesInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutPrecipitacoesInput
    upsert?: PropriedadeUpsertWithoutPrecipitacoesInput
    connect?: PropriedadeWhereUniqueInput
    update?: XOR<XOR<PropriedadeUpdateToOneWithWhereWithoutPrecipitacoesInput, PropriedadeUpdateWithoutPrecipitacoesInput>, PropriedadeUncheckedUpdateWithoutPrecipitacoesInput>
  }

  export type HistoricoUpdateManyWithoutPrecipitacaoNestedInput = {
    create?: XOR<HistoricoCreateWithoutPrecipitacaoInput, HistoricoUncheckedCreateWithoutPrecipitacaoInput> | HistoricoCreateWithoutPrecipitacaoInput[] | HistoricoUncheckedCreateWithoutPrecipitacaoInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutPrecipitacaoInput | HistoricoCreateOrConnectWithoutPrecipitacaoInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutPrecipitacaoInput | HistoricoUpsertWithWhereUniqueWithoutPrecipitacaoInput[]
    createMany?: HistoricoCreateManyPrecipitacaoInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutPrecipitacaoInput | HistoricoUpdateWithWhereUniqueWithoutPrecipitacaoInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutPrecipitacaoInput | HistoricoUpdateManyWithWhereWithoutPrecipitacaoInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type HistoricoUncheckedUpdateManyWithoutPrecipitacaoNestedInput = {
    create?: XOR<HistoricoCreateWithoutPrecipitacaoInput, HistoricoUncheckedCreateWithoutPrecipitacaoInput> | HistoricoCreateWithoutPrecipitacaoInput[] | HistoricoUncheckedCreateWithoutPrecipitacaoInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutPrecipitacaoInput | HistoricoCreateOrConnectWithoutPrecipitacaoInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutPrecipitacaoInput | HistoricoUpsertWithWhereUniqueWithoutPrecipitacaoInput[]
    createMany?: HistoricoCreateManyPrecipitacaoInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutPrecipitacaoInput | HistoricoUpdateWithWhereUniqueWithoutPrecipitacaoInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutPrecipitacaoInput | HistoricoUpdateManyWithWhereWithoutPrecipitacaoInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type HistoricoCreateNestedManyWithoutSoloInput = {
    create?: XOR<HistoricoCreateWithoutSoloInput, HistoricoUncheckedCreateWithoutSoloInput> | HistoricoCreateWithoutSoloInput[] | HistoricoUncheckedCreateWithoutSoloInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutSoloInput | HistoricoCreateOrConnectWithoutSoloInput[]
    createMany?: HistoricoCreateManySoloInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type PropriedadeSoloCreateNestedManyWithoutSoloInput = {
    create?: XOR<PropriedadeSoloCreateWithoutSoloInput, PropriedadeSoloUncheckedCreateWithoutSoloInput> | PropriedadeSoloCreateWithoutSoloInput[] | PropriedadeSoloUncheckedCreateWithoutSoloInput[]
    connectOrCreate?: PropriedadeSoloCreateOrConnectWithoutSoloInput | PropriedadeSoloCreateOrConnectWithoutSoloInput[]
    createMany?: PropriedadeSoloCreateManySoloInputEnvelope
    connect?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
  }

  export type PropriedadeCreateNestedOneWithoutSoloInput = {
    create?: XOR<PropriedadeCreateWithoutSoloInput, PropriedadeUncheckedCreateWithoutSoloInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutSoloInput
    connect?: PropriedadeWhereUniqueInput
  }

  export type HistoricoUncheckedCreateNestedManyWithoutSoloInput = {
    create?: XOR<HistoricoCreateWithoutSoloInput, HistoricoUncheckedCreateWithoutSoloInput> | HistoricoCreateWithoutSoloInput[] | HistoricoUncheckedCreateWithoutSoloInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutSoloInput | HistoricoCreateOrConnectWithoutSoloInput[]
    createMany?: HistoricoCreateManySoloInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type PropriedadeSoloUncheckedCreateNestedManyWithoutSoloInput = {
    create?: XOR<PropriedadeSoloCreateWithoutSoloInput, PropriedadeSoloUncheckedCreateWithoutSoloInput> | PropriedadeSoloCreateWithoutSoloInput[] | PropriedadeSoloUncheckedCreateWithoutSoloInput[]
    connectOrCreate?: PropriedadeSoloCreateOrConnectWithoutSoloInput | PropriedadeSoloCreateOrConnectWithoutSoloInput[]
    createMany?: PropriedadeSoloCreateManySoloInputEnvelope
    connect?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
  }

  export type HistoricoUpdateManyWithoutSoloNestedInput = {
    create?: XOR<HistoricoCreateWithoutSoloInput, HistoricoUncheckedCreateWithoutSoloInput> | HistoricoCreateWithoutSoloInput[] | HistoricoUncheckedCreateWithoutSoloInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutSoloInput | HistoricoCreateOrConnectWithoutSoloInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutSoloInput | HistoricoUpsertWithWhereUniqueWithoutSoloInput[]
    createMany?: HistoricoCreateManySoloInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutSoloInput | HistoricoUpdateWithWhereUniqueWithoutSoloInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutSoloInput | HistoricoUpdateManyWithWhereWithoutSoloInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type PropriedadeSoloUpdateManyWithoutSoloNestedInput = {
    create?: XOR<PropriedadeSoloCreateWithoutSoloInput, PropriedadeSoloUncheckedCreateWithoutSoloInput> | PropriedadeSoloCreateWithoutSoloInput[] | PropriedadeSoloUncheckedCreateWithoutSoloInput[]
    connectOrCreate?: PropriedadeSoloCreateOrConnectWithoutSoloInput | PropriedadeSoloCreateOrConnectWithoutSoloInput[]
    upsert?: PropriedadeSoloUpsertWithWhereUniqueWithoutSoloInput | PropriedadeSoloUpsertWithWhereUniqueWithoutSoloInput[]
    createMany?: PropriedadeSoloCreateManySoloInputEnvelope
    set?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
    disconnect?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
    delete?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
    connect?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
    update?: PropriedadeSoloUpdateWithWhereUniqueWithoutSoloInput | PropriedadeSoloUpdateWithWhereUniqueWithoutSoloInput[]
    updateMany?: PropriedadeSoloUpdateManyWithWhereWithoutSoloInput | PropriedadeSoloUpdateManyWithWhereWithoutSoloInput[]
    deleteMany?: PropriedadeSoloScalarWhereInput | PropriedadeSoloScalarWhereInput[]
  }

  export type PropriedadeUpdateOneWithoutSoloNestedInput = {
    create?: XOR<PropriedadeCreateWithoutSoloInput, PropriedadeUncheckedCreateWithoutSoloInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutSoloInput
    upsert?: PropriedadeUpsertWithoutSoloInput
    disconnect?: PropriedadeWhereInput | boolean
    delete?: PropriedadeWhereInput | boolean
    connect?: PropriedadeWhereUniqueInput
    update?: XOR<XOR<PropriedadeUpdateToOneWithWhereWithoutSoloInput, PropriedadeUpdateWithoutSoloInput>, PropriedadeUncheckedUpdateWithoutSoloInput>
  }

  export type HistoricoUncheckedUpdateManyWithoutSoloNestedInput = {
    create?: XOR<HistoricoCreateWithoutSoloInput, HistoricoUncheckedCreateWithoutSoloInput> | HistoricoCreateWithoutSoloInput[] | HistoricoUncheckedCreateWithoutSoloInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutSoloInput | HistoricoCreateOrConnectWithoutSoloInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutSoloInput | HistoricoUpsertWithWhereUniqueWithoutSoloInput[]
    createMany?: HistoricoCreateManySoloInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutSoloInput | HistoricoUpdateWithWhereUniqueWithoutSoloInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutSoloInput | HistoricoUpdateManyWithWhereWithoutSoloInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type PropriedadeSoloUncheckedUpdateManyWithoutSoloNestedInput = {
    create?: XOR<PropriedadeSoloCreateWithoutSoloInput, PropriedadeSoloUncheckedCreateWithoutSoloInput> | PropriedadeSoloCreateWithoutSoloInput[] | PropriedadeSoloUncheckedCreateWithoutSoloInput[]
    connectOrCreate?: PropriedadeSoloCreateOrConnectWithoutSoloInput | PropriedadeSoloCreateOrConnectWithoutSoloInput[]
    upsert?: PropriedadeSoloUpsertWithWhereUniqueWithoutSoloInput | PropriedadeSoloUpsertWithWhereUniqueWithoutSoloInput[]
    createMany?: PropriedadeSoloCreateManySoloInputEnvelope
    set?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
    disconnect?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
    delete?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
    connect?: PropriedadeSoloWhereUniqueInput | PropriedadeSoloWhereUniqueInput[]
    update?: PropriedadeSoloUpdateWithWhereUniqueWithoutSoloInput | PropriedadeSoloUpdateWithWhereUniqueWithoutSoloInput[]
    updateMany?: PropriedadeSoloUpdateManyWithWhereWithoutSoloInput | PropriedadeSoloUpdateManyWithWhereWithoutSoloInput[]
    deleteMany?: PropriedadeSoloScalarWhereInput | PropriedadeSoloScalarWhereInput[]
  }

  export type SimulacaoCreateNestedOneWithoutEstimativasInput = {
    create?: XOR<SimulacaoCreateWithoutEstimativasInput, SimulacaoUncheckedCreateWithoutEstimativasInput>
    connectOrCreate?: SimulacaoCreateOrConnectWithoutEstimativasInput
    connect?: SimulacaoWhereUniqueInput
  }

  export type PropriedadeCreateNestedOneWithoutEstimativasInput = {
    create?: XOR<PropriedadeCreateWithoutEstimativasInput, PropriedadeUncheckedCreateWithoutEstimativasInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutEstimativasInput
    connect?: PropriedadeWhereUniqueInput
  }

  export type SimulacaoUpdateOneRequiredWithoutEstimativasNestedInput = {
    create?: XOR<SimulacaoCreateWithoutEstimativasInput, SimulacaoUncheckedCreateWithoutEstimativasInput>
    connectOrCreate?: SimulacaoCreateOrConnectWithoutEstimativasInput
    upsert?: SimulacaoUpsertWithoutEstimativasInput
    connect?: SimulacaoWhereUniqueInput
    update?: XOR<XOR<SimulacaoUpdateToOneWithWhereWithoutEstimativasInput, SimulacaoUpdateWithoutEstimativasInput>, SimulacaoUncheckedUpdateWithoutEstimativasInput>
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

  export type HistoricoCreateNestedManyWithoutSimulacaoInput = {
    create?: XOR<HistoricoCreateWithoutSimulacaoInput, HistoricoUncheckedCreateWithoutSimulacaoInput> | HistoricoCreateWithoutSimulacaoInput[] | HistoricoUncheckedCreateWithoutSimulacaoInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutSimulacaoInput | HistoricoCreateOrConnectWithoutSimulacaoInput[]
    createMany?: HistoricoCreateManySimulacaoInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type EstimativasCreateNestedManyWithoutSimulacaoInput = {
    create?: XOR<EstimativasCreateWithoutSimulacaoInput, EstimativasUncheckedCreateWithoutSimulacaoInput> | EstimativasCreateWithoutSimulacaoInput[] | EstimativasUncheckedCreateWithoutSimulacaoInput[]
    connectOrCreate?: EstimativasCreateOrConnectWithoutSimulacaoInput | EstimativasCreateOrConnectWithoutSimulacaoInput[]
    createMany?: EstimativasCreateManySimulacaoInputEnvelope
    connect?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
  }

  export type HistoricoUncheckedCreateNestedManyWithoutSimulacaoInput = {
    create?: XOR<HistoricoCreateWithoutSimulacaoInput, HistoricoUncheckedCreateWithoutSimulacaoInput> | HistoricoCreateWithoutSimulacaoInput[] | HistoricoUncheckedCreateWithoutSimulacaoInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutSimulacaoInput | HistoricoCreateOrConnectWithoutSimulacaoInput[]
    createMany?: HistoricoCreateManySimulacaoInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type EstimativasUncheckedCreateNestedManyWithoutSimulacaoInput = {
    create?: XOR<EstimativasCreateWithoutSimulacaoInput, EstimativasUncheckedCreateWithoutSimulacaoInput> | EstimativasCreateWithoutSimulacaoInput[] | EstimativasUncheckedCreateWithoutSimulacaoInput[]
    connectOrCreate?: EstimativasCreateOrConnectWithoutSimulacaoInput | EstimativasCreateOrConnectWithoutSimulacaoInput[]
    createMany?: EstimativasCreateManySimulacaoInputEnvelope
    connect?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
  }

  export type PropriedadeUpdateOneRequiredWithoutSimulacoesNestedInput = {
    create?: XOR<PropriedadeCreateWithoutSimulacoesInput, PropriedadeUncheckedCreateWithoutSimulacoesInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutSimulacoesInput
    upsert?: PropriedadeUpsertWithoutSimulacoesInput
    connect?: PropriedadeWhereUniqueInput
    update?: XOR<XOR<PropriedadeUpdateToOneWithWhereWithoutSimulacoesInput, PropriedadeUpdateWithoutSimulacoesInput>, PropriedadeUncheckedUpdateWithoutSimulacoesInput>
  }

  export type HistoricoUpdateManyWithoutSimulacaoNestedInput = {
    create?: XOR<HistoricoCreateWithoutSimulacaoInput, HistoricoUncheckedCreateWithoutSimulacaoInput> | HistoricoCreateWithoutSimulacaoInput[] | HistoricoUncheckedCreateWithoutSimulacaoInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutSimulacaoInput | HistoricoCreateOrConnectWithoutSimulacaoInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutSimulacaoInput | HistoricoUpsertWithWhereUniqueWithoutSimulacaoInput[]
    createMany?: HistoricoCreateManySimulacaoInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutSimulacaoInput | HistoricoUpdateWithWhereUniqueWithoutSimulacaoInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutSimulacaoInput | HistoricoUpdateManyWithWhereWithoutSimulacaoInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type EstimativasUpdateManyWithoutSimulacaoNestedInput = {
    create?: XOR<EstimativasCreateWithoutSimulacaoInput, EstimativasUncheckedCreateWithoutSimulacaoInput> | EstimativasCreateWithoutSimulacaoInput[] | EstimativasUncheckedCreateWithoutSimulacaoInput[]
    connectOrCreate?: EstimativasCreateOrConnectWithoutSimulacaoInput | EstimativasCreateOrConnectWithoutSimulacaoInput[]
    upsert?: EstimativasUpsertWithWhereUniqueWithoutSimulacaoInput | EstimativasUpsertWithWhereUniqueWithoutSimulacaoInput[]
    createMany?: EstimativasCreateManySimulacaoInputEnvelope
    set?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
    disconnect?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
    delete?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
    connect?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
    update?: EstimativasUpdateWithWhereUniqueWithoutSimulacaoInput | EstimativasUpdateWithWhereUniqueWithoutSimulacaoInput[]
    updateMany?: EstimativasUpdateManyWithWhereWithoutSimulacaoInput | EstimativasUpdateManyWithWhereWithoutSimulacaoInput[]
    deleteMany?: EstimativasScalarWhereInput | EstimativasScalarWhereInput[]
  }

  export type HistoricoUncheckedUpdateManyWithoutSimulacaoNestedInput = {
    create?: XOR<HistoricoCreateWithoutSimulacaoInput, HistoricoUncheckedCreateWithoutSimulacaoInput> | HistoricoCreateWithoutSimulacaoInput[] | HistoricoUncheckedCreateWithoutSimulacaoInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutSimulacaoInput | HistoricoCreateOrConnectWithoutSimulacaoInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutSimulacaoInput | HistoricoUpsertWithWhereUniqueWithoutSimulacaoInput[]
    createMany?: HistoricoCreateManySimulacaoInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutSimulacaoInput | HistoricoUpdateWithWhereUniqueWithoutSimulacaoInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutSimulacaoInput | HistoricoUpdateManyWithWhereWithoutSimulacaoInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type EstimativasUncheckedUpdateManyWithoutSimulacaoNestedInput = {
    create?: XOR<EstimativasCreateWithoutSimulacaoInput, EstimativasUncheckedCreateWithoutSimulacaoInput> | EstimativasCreateWithoutSimulacaoInput[] | EstimativasUncheckedCreateWithoutSimulacaoInput[]
    connectOrCreate?: EstimativasCreateOrConnectWithoutSimulacaoInput | EstimativasCreateOrConnectWithoutSimulacaoInput[]
    upsert?: EstimativasUpsertWithWhereUniqueWithoutSimulacaoInput | EstimativasUpsertWithWhereUniqueWithoutSimulacaoInput[]
    createMany?: EstimativasCreateManySimulacaoInputEnvelope
    set?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
    disconnect?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
    delete?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
    connect?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
    update?: EstimativasUpdateWithWhereUniqueWithoutSimulacaoInput | EstimativasUpdateWithWhereUniqueWithoutSimulacaoInput[]
    updateMany?: EstimativasUpdateManyWithWhereWithoutSimulacaoInput | EstimativasUpdateManyWithWhereWithoutSimulacaoInput[]
    deleteMany?: EstimativasScalarWhereInput | EstimativasScalarWhereInput[]
  }

  export type PropriedadeCulturaCreateNestedManyWithoutCulturaInput = {
    create?: XOR<PropriedadeCulturaCreateWithoutCulturaInput, PropriedadeCulturaUncheckedCreateWithoutCulturaInput> | PropriedadeCulturaCreateWithoutCulturaInput[] | PropriedadeCulturaUncheckedCreateWithoutCulturaInput[]
    connectOrCreate?: PropriedadeCulturaCreateOrConnectWithoutCulturaInput | PropriedadeCulturaCreateOrConnectWithoutCulturaInput[]
    createMany?: PropriedadeCulturaCreateManyCulturaInputEnvelope
    connect?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
  }

  export type PropriedadeCulturaUncheckedCreateNestedManyWithoutCulturaInput = {
    create?: XOR<PropriedadeCulturaCreateWithoutCulturaInput, PropriedadeCulturaUncheckedCreateWithoutCulturaInput> | PropriedadeCulturaCreateWithoutCulturaInput[] | PropriedadeCulturaUncheckedCreateWithoutCulturaInput[]
    connectOrCreate?: PropriedadeCulturaCreateOrConnectWithoutCulturaInput | PropriedadeCulturaCreateOrConnectWithoutCulturaInput[]
    createMany?: PropriedadeCulturaCreateManyCulturaInputEnvelope
    connect?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
  }

  export type PropriedadeCulturaUpdateManyWithoutCulturaNestedInput = {
    create?: XOR<PropriedadeCulturaCreateWithoutCulturaInput, PropriedadeCulturaUncheckedCreateWithoutCulturaInput> | PropriedadeCulturaCreateWithoutCulturaInput[] | PropriedadeCulturaUncheckedCreateWithoutCulturaInput[]
    connectOrCreate?: PropriedadeCulturaCreateOrConnectWithoutCulturaInput | PropriedadeCulturaCreateOrConnectWithoutCulturaInput[]
    upsert?: PropriedadeCulturaUpsertWithWhereUniqueWithoutCulturaInput | PropriedadeCulturaUpsertWithWhereUniqueWithoutCulturaInput[]
    createMany?: PropriedadeCulturaCreateManyCulturaInputEnvelope
    set?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
    disconnect?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
    delete?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
    connect?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
    update?: PropriedadeCulturaUpdateWithWhereUniqueWithoutCulturaInput | PropriedadeCulturaUpdateWithWhereUniqueWithoutCulturaInput[]
    updateMany?: PropriedadeCulturaUpdateManyWithWhereWithoutCulturaInput | PropriedadeCulturaUpdateManyWithWhereWithoutCulturaInput[]
    deleteMany?: PropriedadeCulturaScalarWhereInput | PropriedadeCulturaScalarWhereInput[]
  }

  export type PropriedadeCulturaUncheckedUpdateManyWithoutCulturaNestedInput = {
    create?: XOR<PropriedadeCulturaCreateWithoutCulturaInput, PropriedadeCulturaUncheckedCreateWithoutCulturaInput> | PropriedadeCulturaCreateWithoutCulturaInput[] | PropriedadeCulturaUncheckedCreateWithoutCulturaInput[]
    connectOrCreate?: PropriedadeCulturaCreateOrConnectWithoutCulturaInput | PropriedadeCulturaCreateOrConnectWithoutCulturaInput[]
    upsert?: PropriedadeCulturaUpsertWithWhereUniqueWithoutCulturaInput | PropriedadeCulturaUpsertWithWhereUniqueWithoutCulturaInput[]
    createMany?: PropriedadeCulturaCreateManyCulturaInputEnvelope
    set?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
    disconnect?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
    delete?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
    connect?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
    update?: PropriedadeCulturaUpdateWithWhereUniqueWithoutCulturaInput | PropriedadeCulturaUpdateWithWhereUniqueWithoutCulturaInput[]
    updateMany?: PropriedadeCulturaUpdateManyWithWhereWithoutCulturaInput | PropriedadeCulturaUpdateManyWithWhereWithoutCulturaInput[]
    deleteMany?: PropriedadeCulturaScalarWhereInput | PropriedadeCulturaScalarWhereInput[]
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoCreateNestedManyWithoutPropriedadeInput
    precipitacoes?: PrecipitacaoCreateNestedManyWithoutPropriedadeInput
    propriedadeCultura?: PropriedadeCulturaCreateNestedManyWithoutPropriedadeInput
    propriedadeSolo?: PropriedadeSoloCreateNestedManyWithoutPropriedadeInput
    Solo?: SoloCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutAdminInput = {
    id?: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
    precipitacoes?: PrecipitacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    propriedadeCultura?: PropriedadeCulturaUncheckedCreateNestedManyWithoutPropriedadeInput
    propriedadeSolo?: PropriedadeSoloUncheckedCreateNestedManyWithoutPropriedadeInput
    Solo?: SoloUncheckedCreateNestedManyWithoutPropriedadeInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUpdateManyWithoutPropriedadeNestedInput
    precipitacoes?: PrecipitacaoUpdateManyWithoutPropriedadeNestedInput
    propriedadeCultura?: PropriedadeCulturaUpdateManyWithoutPropriedadeNestedInput
    propriedadeSolo?: PropriedadeSoloUpdateManyWithoutPropriedadeNestedInput
    Solo?: SoloUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
    precipitacoes?: PrecipitacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    propriedadeCultura?: PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeNestedInput
    propriedadeSolo?: PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeNestedInput
    Solo?: SoloUncheckedUpdateManyWithoutPropriedadeNestedInput
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
    simulacao: SimulacaoCreateNestedOneWithoutEstimativasInput
  }

  export type EstimativasUncheckedCreateWithoutPropriedadeInput = {
    id?: number
    valorTotal: number
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    simulacaoId: number
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
    nomeSimulacao: string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId: number
    soloId: number
    resultado: number
    dataSimulacao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    historico?: HistoricoCreateNestedManyWithoutSimulacaoInput
    estimativas?: EstimativasCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoUncheckedCreateWithoutPropriedadeInput = {
    id?: number
    nomeSimulacao: string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId: number
    soloId: number
    resultado: number
    dataSimulacao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    historico?: HistoricoUncheckedCreateNestedManyWithoutSimulacaoInput
    estimativas?: EstimativasUncheckedCreateNestedManyWithoutSimulacaoInput
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
    simulacao: SimulacaoCreateNestedOneWithoutHistoricoInput
    solo: SoloCreateNestedOneWithoutHistoricoInput
    precipitacao: PrecipitacaoCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateWithoutPropriedadeInput = {
    id?: number
    descricao?: string | null
    valorSimulacao: number
    simulacaoId: number
    soloId: number
    precipitacaoId: number
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

  export type PrecipitacaoCreateWithoutPropriedadeInput = {
    mmAno: number
    chuvas: number
    mmDia: number
    cvDia: number
    mmMes: number
    cvMes: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    historico?: HistoricoCreateNestedManyWithoutPrecipitacaoInput
  }

  export type PrecipitacaoUncheckedCreateWithoutPropriedadeInput = {
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
    historico?: HistoricoUncheckedCreateNestedManyWithoutPrecipitacaoInput
  }

  export type PrecipitacaoCreateOrConnectWithoutPropriedadeInput = {
    where: PrecipitacaoWhereUniqueInput
    create: XOR<PrecipitacaoCreateWithoutPropriedadeInput, PrecipitacaoUncheckedCreateWithoutPropriedadeInput>
  }

  export type PrecipitacaoCreateManyPropriedadeInputEnvelope = {
    data: PrecipitacaoCreateManyPropriedadeInput | PrecipitacaoCreateManyPropriedadeInput[]
    skipDuplicates?: boolean
  }

  export type PropriedadeCulturaCreateWithoutPropriedadeInput = {
    cultura: CulturaCreateNestedOneWithoutPropriedadeCulturaInput
  }

  export type PropriedadeCulturaUncheckedCreateWithoutPropriedadeInput = {
    id?: number
    culturaId: number
  }

  export type PropriedadeCulturaCreateOrConnectWithoutPropriedadeInput = {
    where: PropriedadeCulturaWhereUniqueInput
    create: XOR<PropriedadeCulturaCreateWithoutPropriedadeInput, PropriedadeCulturaUncheckedCreateWithoutPropriedadeInput>
  }

  export type PropriedadeCulturaCreateManyPropriedadeInputEnvelope = {
    data: PropriedadeCulturaCreateManyPropriedadeInput | PropriedadeCulturaCreateManyPropriedadeInput[]
    skipDuplicates?: boolean
  }

  export type PropriedadeSoloCreateWithoutPropriedadeInput = {
    solo: SoloCreateNestedOneWithoutPropriedadeSoloInput
  }

  export type PropriedadeSoloUncheckedCreateWithoutPropriedadeInput = {
    id?: number
    soloId: number
  }

  export type PropriedadeSoloCreateOrConnectWithoutPropriedadeInput = {
    where: PropriedadeSoloWhereUniqueInput
    create: XOR<PropriedadeSoloCreateWithoutPropriedadeInput, PropriedadeSoloUncheckedCreateWithoutPropriedadeInput>
  }

  export type PropriedadeSoloCreateManyPropriedadeInputEnvelope = {
    data: PropriedadeSoloCreateManyPropriedadeInput | PropriedadeSoloCreateManyPropriedadeInput[]
    skipDuplicates?: boolean
  }

  export type SoloCreateWithoutPropriedadeInput = {
    nomeClasse: string
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
    historico?: HistoricoCreateNestedManyWithoutSoloInput
    propriedadeSolo?: PropriedadeSoloCreateNestedManyWithoutSoloInput
  }

  export type SoloUncheckedCreateWithoutPropriedadeInput = {
    id?: number
    nomeClasse: string
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
    historico?: HistoricoUncheckedCreateNestedManyWithoutSoloInput
    propriedadeSolo?: PropriedadeSoloUncheckedCreateNestedManyWithoutSoloInput
  }

  export type SoloCreateOrConnectWithoutPropriedadeInput = {
    where: SoloWhereUniqueInput
    create: XOR<SoloCreateWithoutPropriedadeInput, SoloUncheckedCreateWithoutPropriedadeInput>
  }

  export type SoloCreateManyPropriedadeInputEnvelope = {
    data: SoloCreateManyPropriedadeInput | SoloCreateManyPropriedadeInput[]
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
    simulacaoId?: IntFilter<"Estimativas"> | number
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
    nomeSimulacao?: StringFilter<"Simulacao"> | string
    dadosJson?: JsonNullableFilter<"Simulacao">
    culturaId?: IntFilter<"Simulacao"> | number
    soloId?: IntFilter<"Simulacao"> | number
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
    simulacaoId?: IntFilter<"Historico"> | number
    soloId?: IntFilter<"Historico"> | number
    precipitacaoId?: IntFilter<"Historico"> | number
    createdAt?: DateTimeFilter<"Historico"> | Date | string
    updatedAt?: DateTimeFilter<"Historico"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Historico"> | Date | string | null
  }

  export type PrecipitacaoUpsertWithWhereUniqueWithoutPropriedadeInput = {
    where: PrecipitacaoWhereUniqueInput
    update: XOR<PrecipitacaoUpdateWithoutPropriedadeInput, PrecipitacaoUncheckedUpdateWithoutPropriedadeInput>
    create: XOR<PrecipitacaoCreateWithoutPropriedadeInput, PrecipitacaoUncheckedCreateWithoutPropriedadeInput>
  }

  export type PrecipitacaoUpdateWithWhereUniqueWithoutPropriedadeInput = {
    where: PrecipitacaoWhereUniqueInput
    data: XOR<PrecipitacaoUpdateWithoutPropriedadeInput, PrecipitacaoUncheckedUpdateWithoutPropriedadeInput>
  }

  export type PrecipitacaoUpdateManyWithWhereWithoutPropriedadeInput = {
    where: PrecipitacaoScalarWhereInput
    data: XOR<PrecipitacaoUpdateManyMutationInput, PrecipitacaoUncheckedUpdateManyWithoutPropriedadeInput>
  }

  export type PrecipitacaoScalarWhereInput = {
    AND?: PrecipitacaoScalarWhereInput | PrecipitacaoScalarWhereInput[]
    OR?: PrecipitacaoScalarWhereInput[]
    NOT?: PrecipitacaoScalarWhereInput | PrecipitacaoScalarWhereInput[]
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
    propriedadeId?: IntFilter<"Precipitacao"> | number
  }

  export type PropriedadeCulturaUpsertWithWhereUniqueWithoutPropriedadeInput = {
    where: PropriedadeCulturaWhereUniqueInput
    update: XOR<PropriedadeCulturaUpdateWithoutPropriedadeInput, PropriedadeCulturaUncheckedUpdateWithoutPropriedadeInput>
    create: XOR<PropriedadeCulturaCreateWithoutPropriedadeInput, PropriedadeCulturaUncheckedCreateWithoutPropriedadeInput>
  }

  export type PropriedadeCulturaUpdateWithWhereUniqueWithoutPropriedadeInput = {
    where: PropriedadeCulturaWhereUniqueInput
    data: XOR<PropriedadeCulturaUpdateWithoutPropriedadeInput, PropriedadeCulturaUncheckedUpdateWithoutPropriedadeInput>
  }

  export type PropriedadeCulturaUpdateManyWithWhereWithoutPropriedadeInput = {
    where: PropriedadeCulturaScalarWhereInput
    data: XOR<PropriedadeCulturaUpdateManyMutationInput, PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeInput>
  }

  export type PropriedadeCulturaScalarWhereInput = {
    AND?: PropriedadeCulturaScalarWhereInput | PropriedadeCulturaScalarWhereInput[]
    OR?: PropriedadeCulturaScalarWhereInput[]
    NOT?: PropriedadeCulturaScalarWhereInput | PropriedadeCulturaScalarWhereInput[]
    id?: IntFilter<"PropriedadeCultura"> | number
    propriedadeId?: IntFilter<"PropriedadeCultura"> | number
    culturaId?: IntFilter<"PropriedadeCultura"> | number
  }

  export type PropriedadeSoloUpsertWithWhereUniqueWithoutPropriedadeInput = {
    where: PropriedadeSoloWhereUniqueInput
    update: XOR<PropriedadeSoloUpdateWithoutPropriedadeInput, PropriedadeSoloUncheckedUpdateWithoutPropriedadeInput>
    create: XOR<PropriedadeSoloCreateWithoutPropriedadeInput, PropriedadeSoloUncheckedCreateWithoutPropriedadeInput>
  }

  export type PropriedadeSoloUpdateWithWhereUniqueWithoutPropriedadeInput = {
    where: PropriedadeSoloWhereUniqueInput
    data: XOR<PropriedadeSoloUpdateWithoutPropriedadeInput, PropriedadeSoloUncheckedUpdateWithoutPropriedadeInput>
  }

  export type PropriedadeSoloUpdateManyWithWhereWithoutPropriedadeInput = {
    where: PropriedadeSoloScalarWhereInput
    data: XOR<PropriedadeSoloUpdateManyMutationInput, PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeInput>
  }

  export type PropriedadeSoloScalarWhereInput = {
    AND?: PropriedadeSoloScalarWhereInput | PropriedadeSoloScalarWhereInput[]
    OR?: PropriedadeSoloScalarWhereInput[]
    NOT?: PropriedadeSoloScalarWhereInput | PropriedadeSoloScalarWhereInput[]
    id?: IntFilter<"PropriedadeSolo"> | number
    propriedadeId?: IntFilter<"PropriedadeSolo"> | number
    soloId?: IntFilter<"PropriedadeSolo"> | number
  }

  export type SoloUpsertWithWhereUniqueWithoutPropriedadeInput = {
    where: SoloWhereUniqueInput
    update: XOR<SoloUpdateWithoutPropriedadeInput, SoloUncheckedUpdateWithoutPropriedadeInput>
    create: XOR<SoloCreateWithoutPropriedadeInput, SoloUncheckedCreateWithoutPropriedadeInput>
  }

  export type SoloUpdateWithWhereUniqueWithoutPropriedadeInput = {
    where: SoloWhereUniqueInput
    data: XOR<SoloUpdateWithoutPropriedadeInput, SoloUncheckedUpdateWithoutPropriedadeInput>
  }

  export type SoloUpdateManyWithWhereWithoutPropriedadeInput = {
    where: SoloScalarWhereInput
    data: XOR<SoloUpdateManyMutationInput, SoloUncheckedUpdateManyWithoutPropriedadeInput>
  }

  export type SoloScalarWhereInput = {
    AND?: SoloScalarWhereInput | SoloScalarWhereInput[]
    OR?: SoloScalarWhereInput[]
    NOT?: SoloScalarWhereInput | SoloScalarWhereInput[]
    id?: IntFilter<"Solo"> | number
    nomeClasse?: StringFilter<"Solo"> | string
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
    propriedadeId?: IntNullableFilter<"Solo"> | number | null
  }

  export type PropriedadeCreateWithoutPropriedadeCulturaInput = {
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadeInput
    estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoCreateNestedManyWithoutPropriedadeInput
    precipitacoes?: PrecipitacaoCreateNestedManyWithoutPropriedadeInput
    propriedadeSolo?: PropriedadeSoloCreateNestedManyWithoutPropriedadeInput
    Solo?: SoloCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutPropriedadeCulturaInput = {
    id?: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    adminId?: number | null
    estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
    precipitacoes?: PrecipitacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    propriedadeSolo?: PropriedadeSoloUncheckedCreateNestedManyWithoutPropriedadeInput
    Solo?: SoloUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutPropriedadeCulturaInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutPropriedadeCulturaInput, PropriedadeUncheckedCreateWithoutPropriedadeCulturaInput>
  }

  export type CulturaCreateWithoutPropriedadeCulturaInput = {
    name: string
    eua: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CulturaUncheckedCreateWithoutPropriedadeCulturaInput = {
    id?: number
    name: string
    eua: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CulturaCreateOrConnectWithoutPropriedadeCulturaInput = {
    where: CulturaWhereUniqueInput
    create: XOR<CulturaCreateWithoutPropriedadeCulturaInput, CulturaUncheckedCreateWithoutPropriedadeCulturaInput>
  }

  export type PropriedadeUpsertWithoutPropriedadeCulturaInput = {
    update: XOR<PropriedadeUpdateWithoutPropriedadeCulturaInput, PropriedadeUncheckedUpdateWithoutPropriedadeCulturaInput>
    create: XOR<PropriedadeCreateWithoutPropriedadeCulturaInput, PropriedadeUncheckedCreateWithoutPropriedadeCulturaInput>
    where?: PropriedadeWhereInput
  }

  export type PropriedadeUpdateToOneWithWhereWithoutPropriedadeCulturaInput = {
    where?: PropriedadeWhereInput
    data: XOR<PropriedadeUpdateWithoutPropriedadeCulturaInput, PropriedadeUncheckedUpdateWithoutPropriedadeCulturaInput>
  }

  export type PropriedadeUpdateWithoutPropriedadeCulturaInput = {
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadeNestedInput
    estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUpdateManyWithoutPropriedadeNestedInput
    precipitacoes?: PrecipitacaoUpdateManyWithoutPropriedadeNestedInput
    propriedadeSolo?: PropriedadeSoloUpdateManyWithoutPropriedadeNestedInput
    Solo?: SoloUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutPropriedadeCulturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
    precipitacoes?: PrecipitacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    propriedadeSolo?: PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeNestedInput
    Solo?: SoloUncheckedUpdateManyWithoutPropriedadeNestedInput
  }

  export type CulturaUpsertWithoutPropriedadeCulturaInput = {
    update: XOR<CulturaUpdateWithoutPropriedadeCulturaInput, CulturaUncheckedUpdateWithoutPropriedadeCulturaInput>
    create: XOR<CulturaCreateWithoutPropriedadeCulturaInput, CulturaUncheckedCreateWithoutPropriedadeCulturaInput>
    where?: CulturaWhereInput
  }

  export type CulturaUpdateToOneWithWhereWithoutPropriedadeCulturaInput = {
    where?: CulturaWhereInput
    data: XOR<CulturaUpdateWithoutPropriedadeCulturaInput, CulturaUncheckedUpdateWithoutPropriedadeCulturaInput>
  }

  export type CulturaUpdateWithoutPropriedadeCulturaInput = {
    name?: StringFieldUpdateOperationsInput | string
    eua?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CulturaUncheckedUpdateWithoutPropriedadeCulturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    eua?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropriedadeCreateWithoutPropriedadeSoloInput = {
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadeInput
    estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoCreateNestedManyWithoutPropriedadeInput
    precipitacoes?: PrecipitacaoCreateNestedManyWithoutPropriedadeInput
    propriedadeCultura?: PropriedadeCulturaCreateNestedManyWithoutPropriedadeInput
    Solo?: SoloCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutPropriedadeSoloInput = {
    id?: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    adminId?: number | null
    estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
    precipitacoes?: PrecipitacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    propriedadeCultura?: PropriedadeCulturaUncheckedCreateNestedManyWithoutPropriedadeInput
    Solo?: SoloUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutPropriedadeSoloInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutPropriedadeSoloInput, PropriedadeUncheckedCreateWithoutPropriedadeSoloInput>
  }

  export type SoloCreateWithoutPropriedadeSoloInput = {
    nomeClasse: string
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
    historico?: HistoricoCreateNestedManyWithoutSoloInput
    Propriedade?: PropriedadeCreateNestedOneWithoutSoloInput
  }

  export type SoloUncheckedCreateWithoutPropriedadeSoloInput = {
    id?: number
    nomeClasse: string
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
    propriedadeId?: number | null
    historico?: HistoricoUncheckedCreateNestedManyWithoutSoloInput
  }

  export type SoloCreateOrConnectWithoutPropriedadeSoloInput = {
    where: SoloWhereUniqueInput
    create: XOR<SoloCreateWithoutPropriedadeSoloInput, SoloUncheckedCreateWithoutPropriedadeSoloInput>
  }

  export type PropriedadeUpsertWithoutPropriedadeSoloInput = {
    update: XOR<PropriedadeUpdateWithoutPropriedadeSoloInput, PropriedadeUncheckedUpdateWithoutPropriedadeSoloInput>
    create: XOR<PropriedadeCreateWithoutPropriedadeSoloInput, PropriedadeUncheckedCreateWithoutPropriedadeSoloInput>
    where?: PropriedadeWhereInput
  }

  export type PropriedadeUpdateToOneWithWhereWithoutPropriedadeSoloInput = {
    where?: PropriedadeWhereInput
    data: XOR<PropriedadeUpdateWithoutPropriedadeSoloInput, PropriedadeUncheckedUpdateWithoutPropriedadeSoloInput>
  }

  export type PropriedadeUpdateWithoutPropriedadeSoloInput = {
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadeNestedInput
    estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUpdateManyWithoutPropriedadeNestedInput
    precipitacoes?: PrecipitacaoUpdateManyWithoutPropriedadeNestedInput
    propriedadeCultura?: PropriedadeCulturaUpdateManyWithoutPropriedadeNestedInput
    Solo?: SoloUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutPropriedadeSoloInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
    precipitacoes?: PrecipitacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    propriedadeCultura?: PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeNestedInput
    Solo?: SoloUncheckedUpdateManyWithoutPropriedadeNestedInput
  }

  export type SoloUpsertWithoutPropriedadeSoloInput = {
    update: XOR<SoloUpdateWithoutPropriedadeSoloInput, SoloUncheckedUpdateWithoutPropriedadeSoloInput>
    create: XOR<SoloCreateWithoutPropriedadeSoloInput, SoloUncheckedCreateWithoutPropriedadeSoloInput>
    where?: SoloWhereInput
  }

  export type SoloUpdateToOneWithWhereWithoutPropriedadeSoloInput = {
    where?: SoloWhereInput
    data: XOR<SoloUpdateWithoutPropriedadeSoloInput, SoloUncheckedUpdateWithoutPropriedadeSoloInput>
  }

  export type SoloUpdateWithoutPropriedadeSoloInput = {
    nomeClasse?: StringFieldUpdateOperationsInput | string
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
    historico?: HistoricoUpdateManyWithoutSoloNestedInput
    Propriedade?: PropriedadeUpdateOneWithoutSoloNestedInput
  }

  export type SoloUncheckedUpdateWithoutPropriedadeSoloInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeClasse?: StringFieldUpdateOperationsInput | string
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
    propriedadeId?: NullableIntFieldUpdateOperationsInput | number | null
    historico?: HistoricoUncheckedUpdateManyWithoutSoloNestedInput
  }

  export type PropriedadeCreateWithoutHistoricosInput = {
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadeInput
    estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    precipitacoes?: PrecipitacaoCreateNestedManyWithoutPropriedadeInput
    propriedadeCultura?: PropriedadeCulturaCreateNestedManyWithoutPropriedadeInput
    propriedadeSolo?: PropriedadeSoloCreateNestedManyWithoutPropriedadeInput
    Solo?: SoloCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutHistoricosInput = {
    id?: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    adminId?: number | null
    estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    precipitacoes?: PrecipitacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    propriedadeCultura?: PropriedadeCulturaUncheckedCreateNestedManyWithoutPropriedadeInput
    propriedadeSolo?: PropriedadeSoloUncheckedCreateNestedManyWithoutPropriedadeInput
    Solo?: SoloUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutHistoricosInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutHistoricosInput, PropriedadeUncheckedCreateWithoutHistoricosInput>
  }

  export type SimulacaoCreateWithoutHistoricoInput = {
    nomeSimulacao: string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId: number
    soloId: number
    resultado: number
    dataSimulacao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedade: PropriedadeCreateNestedOneWithoutSimulacoesInput
    estimativas?: EstimativasCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoUncheckedCreateWithoutHistoricoInput = {
    id?: number
    nomeSimulacao: string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId: number
    soloId: number
    resultado: number
    dataSimulacao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId: number
    estimativas?: EstimativasUncheckedCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoCreateOrConnectWithoutHistoricoInput = {
    where: SimulacaoWhereUniqueInput
    create: XOR<SimulacaoCreateWithoutHistoricoInput, SimulacaoUncheckedCreateWithoutHistoricoInput>
  }

  export type SoloCreateWithoutHistoricoInput = {
    nomeClasse: string
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
    propriedadeSolo?: PropriedadeSoloCreateNestedManyWithoutSoloInput
    Propriedade?: PropriedadeCreateNestedOneWithoutSoloInput
  }

  export type SoloUncheckedCreateWithoutHistoricoInput = {
    id?: number
    nomeClasse: string
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
    propriedadeId?: number | null
    propriedadeSolo?: PropriedadeSoloUncheckedCreateNestedManyWithoutSoloInput
  }

  export type SoloCreateOrConnectWithoutHistoricoInput = {
    where: SoloWhereUniqueInput
    create: XOR<SoloCreateWithoutHistoricoInput, SoloUncheckedCreateWithoutHistoricoInput>
  }

  export type PrecipitacaoCreateWithoutHistoricoInput = {
    mmAno: number
    chuvas: number
    mmDia: number
    cvDia: number
    mmMes: number
    cvMes: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedade: PropriedadeCreateNestedOneWithoutPrecipitacoesInput
  }

  export type PrecipitacaoUncheckedCreateWithoutHistoricoInput = {
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
    propriedadeId: number
  }

  export type PrecipitacaoCreateOrConnectWithoutHistoricoInput = {
    where: PrecipitacaoWhereUniqueInput
    create: XOR<PrecipitacaoCreateWithoutHistoricoInput, PrecipitacaoUncheckedCreateWithoutHistoricoInput>
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadeNestedInput
    estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    precipitacoes?: PrecipitacaoUpdateManyWithoutPropriedadeNestedInput
    propriedadeCultura?: PropriedadeCulturaUpdateManyWithoutPropriedadeNestedInput
    propriedadeSolo?: PropriedadeSoloUpdateManyWithoutPropriedadeNestedInput
    Solo?: SoloUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutHistoricosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    precipitacoes?: PrecipitacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    propriedadeCultura?: PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeNestedInput
    propriedadeSolo?: PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeNestedInput
    Solo?: SoloUncheckedUpdateManyWithoutPropriedadeNestedInput
  }

  export type SimulacaoUpsertWithoutHistoricoInput = {
    update: XOR<SimulacaoUpdateWithoutHistoricoInput, SimulacaoUncheckedUpdateWithoutHistoricoInput>
    create: XOR<SimulacaoCreateWithoutHistoricoInput, SimulacaoUncheckedCreateWithoutHistoricoInput>
    where?: SimulacaoWhereInput
  }

  export type SimulacaoUpdateToOneWithWhereWithoutHistoricoInput = {
    where?: SimulacaoWhereInput
    data: XOR<SimulacaoUpdateWithoutHistoricoInput, SimulacaoUncheckedUpdateWithoutHistoricoInput>
  }

  export type SimulacaoUpdateWithoutHistoricoInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedade?: PropriedadeUpdateOneRequiredWithoutSimulacoesNestedInput
    estimativas?: EstimativasUpdateManyWithoutSimulacaoNestedInput
  }

  export type SimulacaoUncheckedUpdateWithoutHistoricoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: IntFieldUpdateOperationsInput | number
    estimativas?: EstimativasUncheckedUpdateManyWithoutSimulacaoNestedInput
  }

  export type SoloUpsertWithoutHistoricoInput = {
    update: XOR<SoloUpdateWithoutHistoricoInput, SoloUncheckedUpdateWithoutHistoricoInput>
    create: XOR<SoloCreateWithoutHistoricoInput, SoloUncheckedCreateWithoutHistoricoInput>
    where?: SoloWhereInput
  }

  export type SoloUpdateToOneWithWhereWithoutHistoricoInput = {
    where?: SoloWhereInput
    data: XOR<SoloUpdateWithoutHistoricoInput, SoloUncheckedUpdateWithoutHistoricoInput>
  }

  export type SoloUpdateWithoutHistoricoInput = {
    nomeClasse?: StringFieldUpdateOperationsInput | string
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
    propriedadeSolo?: PropriedadeSoloUpdateManyWithoutSoloNestedInput
    Propriedade?: PropriedadeUpdateOneWithoutSoloNestedInput
  }

  export type SoloUncheckedUpdateWithoutHistoricoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeClasse?: StringFieldUpdateOperationsInput | string
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
    propriedadeId?: NullableIntFieldUpdateOperationsInput | number | null
    propriedadeSolo?: PropriedadeSoloUncheckedUpdateManyWithoutSoloNestedInput
  }

  export type PrecipitacaoUpsertWithoutHistoricoInput = {
    update: XOR<PrecipitacaoUpdateWithoutHistoricoInput, PrecipitacaoUncheckedUpdateWithoutHistoricoInput>
    create: XOR<PrecipitacaoCreateWithoutHistoricoInput, PrecipitacaoUncheckedCreateWithoutHistoricoInput>
    where?: PrecipitacaoWhereInput
  }

  export type PrecipitacaoUpdateToOneWithWhereWithoutHistoricoInput = {
    where?: PrecipitacaoWhereInput
    data: XOR<PrecipitacaoUpdateWithoutHistoricoInput, PrecipitacaoUncheckedUpdateWithoutHistoricoInput>
  }

  export type PrecipitacaoUpdateWithoutHistoricoInput = {
    mmAno?: FloatFieldUpdateOperationsInput | number
    chuvas?: FloatFieldUpdateOperationsInput | number
    mmDia?: FloatFieldUpdateOperationsInput | number
    cvDia?: FloatFieldUpdateOperationsInput | number
    mmMes?: FloatFieldUpdateOperationsInput | number
    cvMes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedade?: PropriedadeUpdateOneRequiredWithoutPrecipitacoesNestedInput
  }

  export type PrecipitacaoUncheckedUpdateWithoutHistoricoInput = {
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
    propriedadeId?: IntFieldUpdateOperationsInput | number
  }

  export type PropriedadeCreateWithoutPrecipitacoesInput = {
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadeInput
    estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoCreateNestedManyWithoutPropriedadeInput
    propriedadeCultura?: PropriedadeCulturaCreateNestedManyWithoutPropriedadeInput
    propriedadeSolo?: PropriedadeSoloCreateNestedManyWithoutPropriedadeInput
    Solo?: SoloCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutPrecipitacoesInput = {
    id?: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    adminId?: number | null
    estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
    propriedadeCultura?: PropriedadeCulturaUncheckedCreateNestedManyWithoutPropriedadeInput
    propriedadeSolo?: PropriedadeSoloUncheckedCreateNestedManyWithoutPropriedadeInput
    Solo?: SoloUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutPrecipitacoesInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutPrecipitacoesInput, PropriedadeUncheckedCreateWithoutPrecipitacoesInput>
  }

  export type HistoricoCreateWithoutPrecipitacaoInput = {
    descricao?: string | null
    valorSimulacao: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    propriedade: PropriedadeCreateNestedOneWithoutHistoricosInput
    simulacao: SimulacaoCreateNestedOneWithoutHistoricoInput
    solo: SoloCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateWithoutPrecipitacaoInput = {
    id?: number
    descricao?: string | null
    valorSimulacao: number
    propriedadeId: number
    simulacaoId: number
    soloId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type HistoricoCreateOrConnectWithoutPrecipitacaoInput = {
    where: HistoricoWhereUniqueInput
    create: XOR<HistoricoCreateWithoutPrecipitacaoInput, HistoricoUncheckedCreateWithoutPrecipitacaoInput>
  }

  export type HistoricoCreateManyPrecipitacaoInputEnvelope = {
    data: HistoricoCreateManyPrecipitacaoInput | HistoricoCreateManyPrecipitacaoInput[]
    skipDuplicates?: boolean
  }

  export type PropriedadeUpsertWithoutPrecipitacoesInput = {
    update: XOR<PropriedadeUpdateWithoutPrecipitacoesInput, PropriedadeUncheckedUpdateWithoutPrecipitacoesInput>
    create: XOR<PropriedadeCreateWithoutPrecipitacoesInput, PropriedadeUncheckedCreateWithoutPrecipitacoesInput>
    where?: PropriedadeWhereInput
  }

  export type PropriedadeUpdateToOneWithWhereWithoutPrecipitacoesInput = {
    where?: PropriedadeWhereInput
    data: XOR<PropriedadeUpdateWithoutPrecipitacoesInput, PropriedadeUncheckedUpdateWithoutPrecipitacoesInput>
  }

  export type PropriedadeUpdateWithoutPrecipitacoesInput = {
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadeNestedInput
    estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUpdateManyWithoutPropriedadeNestedInput
    propriedadeCultura?: PropriedadeCulturaUpdateManyWithoutPropriedadeNestedInput
    propriedadeSolo?: PropriedadeSoloUpdateManyWithoutPropriedadeNestedInput
    Solo?: SoloUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutPrecipitacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
    propriedadeCultura?: PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeNestedInput
    propriedadeSolo?: PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeNestedInput
    Solo?: SoloUncheckedUpdateManyWithoutPropriedadeNestedInput
  }

  export type HistoricoUpsertWithWhereUniqueWithoutPrecipitacaoInput = {
    where: HistoricoWhereUniqueInput
    update: XOR<HistoricoUpdateWithoutPrecipitacaoInput, HistoricoUncheckedUpdateWithoutPrecipitacaoInput>
    create: XOR<HistoricoCreateWithoutPrecipitacaoInput, HistoricoUncheckedCreateWithoutPrecipitacaoInput>
  }

  export type HistoricoUpdateWithWhereUniqueWithoutPrecipitacaoInput = {
    where: HistoricoWhereUniqueInput
    data: XOR<HistoricoUpdateWithoutPrecipitacaoInput, HistoricoUncheckedUpdateWithoutPrecipitacaoInput>
  }

  export type HistoricoUpdateManyWithWhereWithoutPrecipitacaoInput = {
    where: HistoricoScalarWhereInput
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyWithoutPrecipitacaoInput>
  }

  export type HistoricoCreateWithoutSoloInput = {
    descricao?: string | null
    valorSimulacao: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    propriedade: PropriedadeCreateNestedOneWithoutHistoricosInput
    simulacao: SimulacaoCreateNestedOneWithoutHistoricoInput
    precipitacao: PrecipitacaoCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateWithoutSoloInput = {
    id?: number
    descricao?: string | null
    valorSimulacao: number
    propriedadeId: number
    simulacaoId: number
    precipitacaoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type HistoricoCreateOrConnectWithoutSoloInput = {
    where: HistoricoWhereUniqueInput
    create: XOR<HistoricoCreateWithoutSoloInput, HistoricoUncheckedCreateWithoutSoloInput>
  }

  export type HistoricoCreateManySoloInputEnvelope = {
    data: HistoricoCreateManySoloInput | HistoricoCreateManySoloInput[]
    skipDuplicates?: boolean
  }

  export type PropriedadeSoloCreateWithoutSoloInput = {
    propriedade: PropriedadeCreateNestedOneWithoutPropriedadeSoloInput
  }

  export type PropriedadeSoloUncheckedCreateWithoutSoloInput = {
    id?: number
    propriedadeId: number
  }

  export type PropriedadeSoloCreateOrConnectWithoutSoloInput = {
    where: PropriedadeSoloWhereUniqueInput
    create: XOR<PropriedadeSoloCreateWithoutSoloInput, PropriedadeSoloUncheckedCreateWithoutSoloInput>
  }

  export type PropriedadeSoloCreateManySoloInputEnvelope = {
    data: PropriedadeSoloCreateManySoloInput | PropriedadeSoloCreateManySoloInput[]
    skipDuplicates?: boolean
  }

  export type PropriedadeCreateWithoutSoloInput = {
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadeInput
    estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoCreateNestedManyWithoutPropriedadeInput
    precipitacoes?: PrecipitacaoCreateNestedManyWithoutPropriedadeInput
    propriedadeCultura?: PropriedadeCulturaCreateNestedManyWithoutPropriedadeInput
    propriedadeSolo?: PropriedadeSoloCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutSoloInput = {
    id?: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    adminId?: number | null
    estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
    precipitacoes?: PrecipitacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    propriedadeCultura?: PropriedadeCulturaUncheckedCreateNestedManyWithoutPropriedadeInput
    propriedadeSolo?: PropriedadeSoloUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutSoloInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutSoloInput, PropriedadeUncheckedCreateWithoutSoloInput>
  }

  export type HistoricoUpsertWithWhereUniqueWithoutSoloInput = {
    where: HistoricoWhereUniqueInput
    update: XOR<HistoricoUpdateWithoutSoloInput, HistoricoUncheckedUpdateWithoutSoloInput>
    create: XOR<HistoricoCreateWithoutSoloInput, HistoricoUncheckedCreateWithoutSoloInput>
  }

  export type HistoricoUpdateWithWhereUniqueWithoutSoloInput = {
    where: HistoricoWhereUniqueInput
    data: XOR<HistoricoUpdateWithoutSoloInput, HistoricoUncheckedUpdateWithoutSoloInput>
  }

  export type HistoricoUpdateManyWithWhereWithoutSoloInput = {
    where: HistoricoScalarWhereInput
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyWithoutSoloInput>
  }

  export type PropriedadeSoloUpsertWithWhereUniqueWithoutSoloInput = {
    where: PropriedadeSoloWhereUniqueInput
    update: XOR<PropriedadeSoloUpdateWithoutSoloInput, PropriedadeSoloUncheckedUpdateWithoutSoloInput>
    create: XOR<PropriedadeSoloCreateWithoutSoloInput, PropriedadeSoloUncheckedCreateWithoutSoloInput>
  }

  export type PropriedadeSoloUpdateWithWhereUniqueWithoutSoloInput = {
    where: PropriedadeSoloWhereUniqueInput
    data: XOR<PropriedadeSoloUpdateWithoutSoloInput, PropriedadeSoloUncheckedUpdateWithoutSoloInput>
  }

  export type PropriedadeSoloUpdateManyWithWhereWithoutSoloInput = {
    where: PropriedadeSoloScalarWhereInput
    data: XOR<PropriedadeSoloUpdateManyMutationInput, PropriedadeSoloUncheckedUpdateManyWithoutSoloInput>
  }

  export type PropriedadeUpsertWithoutSoloInput = {
    update: XOR<PropriedadeUpdateWithoutSoloInput, PropriedadeUncheckedUpdateWithoutSoloInput>
    create: XOR<PropriedadeCreateWithoutSoloInput, PropriedadeUncheckedCreateWithoutSoloInput>
    where?: PropriedadeWhereInput
  }

  export type PropriedadeUpdateToOneWithWhereWithoutSoloInput = {
    where?: PropriedadeWhereInput
    data: XOR<PropriedadeUpdateWithoutSoloInput, PropriedadeUncheckedUpdateWithoutSoloInput>
  }

  export type PropriedadeUpdateWithoutSoloInput = {
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadeNestedInput
    estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUpdateManyWithoutPropriedadeNestedInput
    precipitacoes?: PrecipitacaoUpdateManyWithoutPropriedadeNestedInput
    propriedadeCultura?: PropriedadeCulturaUpdateManyWithoutPropriedadeNestedInput
    propriedadeSolo?: PropriedadeSoloUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutSoloInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
    precipitacoes?: PrecipitacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    propriedadeCultura?: PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeNestedInput
    propriedadeSolo?: PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeNestedInput
  }

  export type SimulacaoCreateWithoutEstimativasInput = {
    nomeSimulacao: string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId: number
    soloId: number
    resultado: number
    dataSimulacao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedade: PropriedadeCreateNestedOneWithoutSimulacoesInput
    historico?: HistoricoCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoUncheckedCreateWithoutEstimativasInput = {
    id?: number
    nomeSimulacao: string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId: number
    soloId: number
    resultado: number
    dataSimulacao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId: number
    historico?: HistoricoUncheckedCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoCreateOrConnectWithoutEstimativasInput = {
    where: SimulacaoWhereUniqueInput
    create: XOR<SimulacaoCreateWithoutEstimativasInput, SimulacaoUncheckedCreateWithoutEstimativasInput>
  }

  export type PropriedadeCreateWithoutEstimativasInput = {
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoCreateNestedManyWithoutPropriedadeInput
    precipitacoes?: PrecipitacaoCreateNestedManyWithoutPropriedadeInput
    propriedadeCultura?: PropriedadeCulturaCreateNestedManyWithoutPropriedadeInput
    propriedadeSolo?: PropriedadeSoloCreateNestedManyWithoutPropriedadeInput
    Solo?: SoloCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutEstimativasInput = {
    id?: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    adminId?: number | null
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
    precipitacoes?: PrecipitacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    propriedadeCultura?: PropriedadeCulturaUncheckedCreateNestedManyWithoutPropriedadeInput
    propriedadeSolo?: PropriedadeSoloUncheckedCreateNestedManyWithoutPropriedadeInput
    Solo?: SoloUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutEstimativasInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutEstimativasInput, PropriedadeUncheckedCreateWithoutEstimativasInput>
  }

  export type SimulacaoUpsertWithoutEstimativasInput = {
    update: XOR<SimulacaoUpdateWithoutEstimativasInput, SimulacaoUncheckedUpdateWithoutEstimativasInput>
    create: XOR<SimulacaoCreateWithoutEstimativasInput, SimulacaoUncheckedCreateWithoutEstimativasInput>
    where?: SimulacaoWhereInput
  }

  export type SimulacaoUpdateToOneWithWhereWithoutEstimativasInput = {
    where?: SimulacaoWhereInput
    data: XOR<SimulacaoUpdateWithoutEstimativasInput, SimulacaoUncheckedUpdateWithoutEstimativasInput>
  }

  export type SimulacaoUpdateWithoutEstimativasInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedade?: PropriedadeUpdateOneRequiredWithoutSimulacoesNestedInput
    historico?: HistoricoUpdateManyWithoutSimulacaoNestedInput
  }

  export type SimulacaoUncheckedUpdateWithoutEstimativasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: IntFieldUpdateOperationsInput | number
    historico?: HistoricoUncheckedUpdateManyWithoutSimulacaoNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUpdateManyWithoutPropriedadeNestedInput
    precipitacoes?: PrecipitacaoUpdateManyWithoutPropriedadeNestedInput
    propriedadeCultura?: PropriedadeCulturaUpdateManyWithoutPropriedadeNestedInput
    propriedadeSolo?: PropriedadeSoloUpdateManyWithoutPropriedadeNestedInput
    Solo?: SoloUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutEstimativasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
    precipitacoes?: PrecipitacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    propriedadeCultura?: PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeNestedInput
    propriedadeSolo?: PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeNestedInput
    Solo?: SoloUncheckedUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeCreateWithoutSimulacoesInput = {
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadeInput
    estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoCreateNestedManyWithoutPropriedadeInput
    precipitacoes?: PrecipitacaoCreateNestedManyWithoutPropriedadeInput
    propriedadeCultura?: PropriedadeCulturaCreateNestedManyWithoutPropriedadeInput
    propriedadeSolo?: PropriedadeSoloCreateNestedManyWithoutPropriedadeInput
    Solo?: SoloCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutSimulacoesInput = {
    id?: number
    nomeProprietario: string
    nomePropriedade: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    adminId?: number | null
    estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
    historicos?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
    precipitacoes?: PrecipitacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    propriedadeCultura?: PropriedadeCulturaUncheckedCreateNestedManyWithoutPropriedadeInput
    propriedadeSolo?: PropriedadeSoloUncheckedCreateNestedManyWithoutPropriedadeInput
    Solo?: SoloUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutSimulacoesInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutSimulacoesInput, PropriedadeUncheckedCreateWithoutSimulacoesInput>
  }

  export type HistoricoCreateWithoutSimulacaoInput = {
    descricao?: string | null
    valorSimulacao: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    propriedade: PropriedadeCreateNestedOneWithoutHistoricosInput
    solo: SoloCreateNestedOneWithoutHistoricoInput
    precipitacao: PrecipitacaoCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateWithoutSimulacaoInput = {
    id?: number
    descricao?: string | null
    valorSimulacao: number
    propriedadeId: number
    soloId: number
    precipitacaoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type HistoricoCreateOrConnectWithoutSimulacaoInput = {
    where: HistoricoWhereUniqueInput
    create: XOR<HistoricoCreateWithoutSimulacaoInput, HistoricoUncheckedCreateWithoutSimulacaoInput>
  }

  export type HistoricoCreateManySimulacaoInputEnvelope = {
    data: HistoricoCreateManySimulacaoInput | HistoricoCreateManySimulacaoInput[]
    skipDuplicates?: boolean
  }

  export type EstimativasCreateWithoutSimulacaoInput = {
    valorTotal: number
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedade?: PropriedadeCreateNestedOneWithoutEstimativasInput
  }

  export type EstimativasUncheckedCreateWithoutSimulacaoInput = {
    id?: number
    valorTotal: number
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId: number
  }

  export type EstimativasCreateOrConnectWithoutSimulacaoInput = {
    where: EstimativasWhereUniqueInput
    create: XOR<EstimativasCreateWithoutSimulacaoInput, EstimativasUncheckedCreateWithoutSimulacaoInput>
  }

  export type EstimativasCreateManySimulacaoInputEnvelope = {
    data: EstimativasCreateManySimulacaoInput | EstimativasCreateManySimulacaoInput[]
    skipDuplicates?: boolean
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadeNestedInput
    estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUpdateManyWithoutPropriedadeNestedInput
    precipitacoes?: PrecipitacaoUpdateManyWithoutPropriedadeNestedInput
    propriedadeCultura?: PropriedadeCulturaUpdateManyWithoutPropriedadeNestedInput
    propriedadeSolo?: PropriedadeSoloUpdateManyWithoutPropriedadeNestedInput
    Solo?: SoloUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutSimulacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
    historicos?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
    precipitacoes?: PrecipitacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    propriedadeCultura?: PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeNestedInput
    propriedadeSolo?: PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeNestedInput
    Solo?: SoloUncheckedUpdateManyWithoutPropriedadeNestedInput
  }

  export type HistoricoUpsertWithWhereUniqueWithoutSimulacaoInput = {
    where: HistoricoWhereUniqueInput
    update: XOR<HistoricoUpdateWithoutSimulacaoInput, HistoricoUncheckedUpdateWithoutSimulacaoInput>
    create: XOR<HistoricoCreateWithoutSimulacaoInput, HistoricoUncheckedCreateWithoutSimulacaoInput>
  }

  export type HistoricoUpdateWithWhereUniqueWithoutSimulacaoInput = {
    where: HistoricoWhereUniqueInput
    data: XOR<HistoricoUpdateWithoutSimulacaoInput, HistoricoUncheckedUpdateWithoutSimulacaoInput>
  }

  export type HistoricoUpdateManyWithWhereWithoutSimulacaoInput = {
    where: HistoricoScalarWhereInput
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyWithoutSimulacaoInput>
  }

  export type EstimativasUpsertWithWhereUniqueWithoutSimulacaoInput = {
    where: EstimativasWhereUniqueInput
    update: XOR<EstimativasUpdateWithoutSimulacaoInput, EstimativasUncheckedUpdateWithoutSimulacaoInput>
    create: XOR<EstimativasCreateWithoutSimulacaoInput, EstimativasUncheckedCreateWithoutSimulacaoInput>
  }

  export type EstimativasUpdateWithWhereUniqueWithoutSimulacaoInput = {
    where: EstimativasWhereUniqueInput
    data: XOR<EstimativasUpdateWithoutSimulacaoInput, EstimativasUncheckedUpdateWithoutSimulacaoInput>
  }

  export type EstimativasUpdateManyWithWhereWithoutSimulacaoInput = {
    where: EstimativasScalarWhereInput
    data: XOR<EstimativasUpdateManyMutationInput, EstimativasUncheckedUpdateManyWithoutSimulacaoInput>
  }

  export type PropriedadeCulturaCreateWithoutCulturaInput = {
    propriedade: PropriedadeCreateNestedOneWithoutPropriedadeCulturaInput
  }

  export type PropriedadeCulturaUncheckedCreateWithoutCulturaInput = {
    id?: number
    propriedadeId: number
  }

  export type PropriedadeCulturaCreateOrConnectWithoutCulturaInput = {
    where: PropriedadeCulturaWhereUniqueInput
    create: XOR<PropriedadeCulturaCreateWithoutCulturaInput, PropriedadeCulturaUncheckedCreateWithoutCulturaInput>
  }

  export type PropriedadeCulturaCreateManyCulturaInputEnvelope = {
    data: PropriedadeCulturaCreateManyCulturaInput | PropriedadeCulturaCreateManyCulturaInput[]
    skipDuplicates?: boolean
  }

  export type PropriedadeCulturaUpsertWithWhereUniqueWithoutCulturaInput = {
    where: PropriedadeCulturaWhereUniqueInput
    update: XOR<PropriedadeCulturaUpdateWithoutCulturaInput, PropriedadeCulturaUncheckedUpdateWithoutCulturaInput>
    create: XOR<PropriedadeCulturaCreateWithoutCulturaInput, PropriedadeCulturaUncheckedCreateWithoutCulturaInput>
  }

  export type PropriedadeCulturaUpdateWithWhereUniqueWithoutCulturaInput = {
    where: PropriedadeCulturaWhereUniqueInput
    data: XOR<PropriedadeCulturaUpdateWithoutCulturaInput, PropriedadeCulturaUncheckedUpdateWithoutCulturaInput>
  }

  export type PropriedadeCulturaUpdateManyWithWhereWithoutCulturaInput = {
    where: PropriedadeCulturaScalarWhereInput
    data: XOR<PropriedadeCulturaUpdateManyMutationInput, PropriedadeCulturaUncheckedUpdateManyWithoutCulturaInput>
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
    simulacaoId: number
  }

  export type SimulacaoCreateManyPropriedadeInput = {
    id?: number
    nomeSimulacao: string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId: number
    soloId: number
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
    simulacaoId: number
    soloId: number
    precipitacaoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PrecipitacaoCreateManyPropriedadeInput = {
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

  export type PropriedadeCulturaCreateManyPropriedadeInput = {
    id?: number
    culturaId: number
  }

  export type PropriedadeSoloCreateManyPropriedadeInput = {
    id?: number
    soloId: number
  }

  export type SoloCreateManyPropriedadeInput = {
    id?: number
    nomeClasse: string
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

  export type EstimativasUpdateWithoutPropriedadeInput = {
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    simulacao?: SimulacaoUpdateOneRequiredWithoutEstimativasNestedInput
  }

  export type EstimativasUncheckedUpdateWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    simulacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type EstimativasUncheckedUpdateManyWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    simulacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type SimulacaoUpdateWithoutPropriedadeInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historico?: HistoricoUpdateManyWithoutSimulacaoNestedInput
    estimativas?: EstimativasUpdateManyWithoutSimulacaoNestedInput
  }

  export type SimulacaoUncheckedUpdateWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    resultado?: FloatFieldUpdateOperationsInput | number
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historico?: HistoricoUncheckedUpdateManyWithoutSimulacaoNestedInput
    estimativas?: EstimativasUncheckedUpdateManyWithoutSimulacaoNestedInput
  }

  export type SimulacaoUncheckedUpdateManyWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    dadosJson?: NullableJsonNullValueInput | InputJsonValue
    culturaId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
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
    simulacao?: SimulacaoUpdateOneRequiredWithoutHistoricoNestedInput
    solo?: SoloUpdateOneRequiredWithoutHistoricoNestedInput
    precipitacao?: PrecipitacaoUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    simulacaoId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    precipitacaoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoricoUncheckedUpdateManyWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    simulacaoId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    precipitacaoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrecipitacaoUpdateWithoutPropriedadeInput = {
    mmAno?: FloatFieldUpdateOperationsInput | number
    chuvas?: FloatFieldUpdateOperationsInput | number
    mmDia?: FloatFieldUpdateOperationsInput | number
    cvDia?: FloatFieldUpdateOperationsInput | number
    mmMes?: FloatFieldUpdateOperationsInput | number
    cvMes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historico?: HistoricoUpdateManyWithoutPrecipitacaoNestedInput
  }

  export type PrecipitacaoUncheckedUpdateWithoutPropriedadeInput = {
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
    historico?: HistoricoUncheckedUpdateManyWithoutPrecipitacaoNestedInput
  }

  export type PrecipitacaoUncheckedUpdateManyWithoutPropriedadeInput = {
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

  export type PropriedadeCulturaUpdateWithoutPropriedadeInput = {
    cultura?: CulturaUpdateOneRequiredWithoutPropriedadeCulturaNestedInput
  }

  export type PropriedadeCulturaUncheckedUpdateWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    culturaId?: IntFieldUpdateOperationsInput | number
  }

  export type PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    culturaId?: IntFieldUpdateOperationsInput | number
  }

  export type PropriedadeSoloUpdateWithoutPropriedadeInput = {
    solo?: SoloUpdateOneRequiredWithoutPropriedadeSoloNestedInput
  }

  export type PropriedadeSoloUncheckedUpdateWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
  }

  export type PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
  }

  export type SoloUpdateWithoutPropriedadeInput = {
    nomeClasse?: StringFieldUpdateOperationsInput | string
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
    historico?: HistoricoUpdateManyWithoutSoloNestedInput
    propriedadeSolo?: PropriedadeSoloUpdateManyWithoutSoloNestedInput
  }

  export type SoloUncheckedUpdateWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeClasse?: StringFieldUpdateOperationsInput | string
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
    historico?: HistoricoUncheckedUpdateManyWithoutSoloNestedInput
    propriedadeSolo?: PropriedadeSoloUncheckedUpdateManyWithoutSoloNestedInput
  }

  export type SoloUncheckedUpdateManyWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeClasse?: StringFieldUpdateOperationsInput | string
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

  export type HistoricoCreateManyPrecipitacaoInput = {
    id?: number
    descricao?: string | null
    valorSimulacao: number
    propriedadeId: number
    simulacaoId: number
    soloId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type HistoricoUpdateWithoutPrecipitacaoInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedade?: PropriedadeUpdateOneRequiredWithoutHistoricosNestedInput
    simulacao?: SimulacaoUpdateOneRequiredWithoutHistoricoNestedInput
    solo?: SoloUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateWithoutPrecipitacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
    simulacaoId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoricoUncheckedUpdateManyWithoutPrecipitacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
    simulacaoId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoricoCreateManySoloInput = {
    id?: number
    descricao?: string | null
    valorSimulacao: number
    propriedadeId: number
    simulacaoId: number
    precipitacaoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PropriedadeSoloCreateManySoloInput = {
    id?: number
    propriedadeId: number
  }

  export type HistoricoUpdateWithoutSoloInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedade?: PropriedadeUpdateOneRequiredWithoutHistoricosNestedInput
    simulacao?: SimulacaoUpdateOneRequiredWithoutHistoricoNestedInput
    precipitacao?: PrecipitacaoUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateWithoutSoloInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
    simulacaoId?: IntFieldUpdateOperationsInput | number
    precipitacaoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoricoUncheckedUpdateManyWithoutSoloInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
    simulacaoId?: IntFieldUpdateOperationsInput | number
    precipitacaoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropriedadeSoloUpdateWithoutSoloInput = {
    propriedade?: PropriedadeUpdateOneRequiredWithoutPropriedadeSoloNestedInput
  }

  export type PropriedadeSoloUncheckedUpdateWithoutSoloInput = {
    id?: IntFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
  }

  export type PropriedadeSoloUncheckedUpdateManyWithoutSoloInput = {
    id?: IntFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricoCreateManySimulacaoInput = {
    id?: number
    descricao?: string | null
    valorSimulacao: number
    propriedadeId: number
    soloId: number
    precipitacaoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EstimativasCreateManySimulacaoInput = {
    id?: number
    valorTotal: number
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId: number
  }

  export type HistoricoUpdateWithoutSimulacaoInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedade?: PropriedadeUpdateOneRequiredWithoutHistoricosNestedInput
    solo?: SoloUpdateOneRequiredWithoutHistoricoNestedInput
    precipitacao?: PrecipitacaoUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateWithoutSimulacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    precipitacaoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoricoUncheckedUpdateManyWithoutSimulacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorSimulacao?: FloatFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
    soloId?: IntFieldUpdateOperationsInput | number
    precipitacaoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EstimativasUpdateWithoutSimulacaoInput = {
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedade?: PropriedadeUpdateOneWithoutEstimativasNestedInput
  }

  export type EstimativasUncheckedUpdateWithoutSimulacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: IntFieldUpdateOperationsInput | number
  }

  export type EstimativasUncheckedUpdateManyWithoutSimulacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: IntFieldUpdateOperationsInput | number
  }

  export type PropriedadeCulturaCreateManyCulturaInput = {
    id?: number
    propriedadeId: number
  }

  export type PropriedadeCulturaUpdateWithoutCulturaInput = {
    propriedade?: PropriedadeUpdateOneRequiredWithoutPropriedadeCulturaNestedInput
  }

  export type PropriedadeCulturaUncheckedUpdateWithoutCulturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
  }

  export type PropriedadeCulturaUncheckedUpdateManyWithoutCulturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    propriedadeId?: IntFieldUpdateOperationsInput | number
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