
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
 * Enums
 */
export namespace $Enums {
  export const TipoUsuarioEnum: {
  ADMIN: 'ADMIN',
  FUNCIONARIO: 'FUNCIONARIO',
  USER: 'USER'
};

export type TipoUsuarioEnum = (typeof TipoUsuarioEnum)[keyof typeof TipoUsuarioEnum]

}

export type TipoUsuarioEnum = $Enums.TipoUsuarioEnum

export const TipoUsuarioEnum: typeof $Enums.TipoUsuarioEnum

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

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
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "admin" | "propriedade" | "propriedadeCultura" | "propriedadeSolo" | "historico" | "precipitacao" | "solo" | "estimativas" | "simulacao" | "cultura"
      txIsolationLevel: never
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
          findRaw: {
            args: Prisma.AdminFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AdminAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
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
          findRaw: {
            args: Prisma.PropriedadeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PropriedadeAggregateRawArgs<ExtArgs>
            result: JsonObject
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
          findRaw: {
            args: Prisma.PropriedadeCulturaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PropriedadeCulturaAggregateRawArgs<ExtArgs>
            result: JsonObject
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
          findRaw: {
            args: Prisma.PropriedadeSoloFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PropriedadeSoloAggregateRawArgs<ExtArgs>
            result: JsonObject
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
          findRaw: {
            args: Prisma.HistoricoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HistoricoAggregateRawArgs<ExtArgs>
            result: JsonObject
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
          findRaw: {
            args: Prisma.PrecipitacaoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PrecipitacaoAggregateRawArgs<ExtArgs>
            result: JsonObject
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
          findRaw: {
            args: Prisma.SoloFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SoloAggregateRawArgs<ExtArgs>
            result: JsonObject
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
          findRaw: {
            args: Prisma.EstimativasFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EstimativasAggregateRawArgs<ExtArgs>
            result: JsonObject
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
          findRaw: {
            args: Prisma.SimulacaoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SimulacaoAggregateRawArgs<ExtArgs>
            result: JsonObject
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
          findRaw: {
            args: Prisma.CulturaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CulturaAggregateRawArgs<ExtArgs>
            result: JsonObject
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
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    propriedades: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propriedades?: boolean | AdminCountOutputTypeCountPropriedadesArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountPropriedadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropriedadeWhereInput
  }


  /**
   * Count Type PropriedadeCountOutputType
   */

  export type PropriedadeCountOutputType = {
    culturas: number
    solos: number
    simulacoes: number
    Historico: number
    Precipitacao: number
    Estimativas: number
  }

  export type PropriedadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    culturas?: boolean | PropriedadeCountOutputTypeCountCulturasArgs
    solos?: boolean | PropriedadeCountOutputTypeCountSolosArgs
    simulacoes?: boolean | PropriedadeCountOutputTypeCountSimulacoesArgs
    Historico?: boolean | PropriedadeCountOutputTypeCountHistoricoArgs
    Precipitacao?: boolean | PropriedadeCountOutputTypeCountPrecipitacaoArgs
    Estimativas?: boolean | PropriedadeCountOutputTypeCountEstimativasArgs
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
  export type PropriedadeCountOutputTypeCountCulturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropriedadeCulturaWhereInput
  }

  /**
   * PropriedadeCountOutputType without action
   */
  export type PropriedadeCountOutputTypeCountSolosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropriedadeSoloWhereInput
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
  export type PropriedadeCountOutputTypeCountHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
  }

  /**
   * PropriedadeCountOutputType without action
   */
  export type PropriedadeCountOutputTypeCountPrecipitacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrecipitacaoWhereInput
  }

  /**
   * PropriedadeCountOutputType without action
   */
  export type PropriedadeCountOutputTypeCountEstimativasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstimativasWhereInput
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
    Simulacao: number
  }

  export type SoloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historico?: boolean | SoloCountOutputTypeCountHistoricoArgs
    propriedadeSolo?: boolean | SoloCountOutputTypeCountPropriedadeSoloArgs
    Simulacao?: boolean | SoloCountOutputTypeCountSimulacaoArgs
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
   * SoloCountOutputType without action
   */
  export type SoloCountOutputTypeCountSimulacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimulacaoWhereInput
  }


  /**
   * Count Type SimulacaoCountOutputType
   */

  export type SimulacaoCountOutputType = {
    historicos: number
    Estimativas: number
  }

  export type SimulacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicos?: boolean | SimulacaoCountOutputTypeCountHistoricosArgs
    Estimativas?: boolean | SimulacaoCountOutputTypeCountEstimativasArgs
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
  export type SimulacaoCountOutputTypeCountHistoricosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    Simulacao: number
  }

  export type CulturaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PropriedadeCultura?: boolean | CulturaCountOutputTypeCountPropriedadeCulturaArgs
    Simulacao?: boolean | CulturaCountOutputTypeCountSimulacaoArgs
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
   * CulturaCountOutputType without action
   */
  export type CulturaCountOutputTypeCountSimulacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimulacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    cpf: string | null
    senha: string | null
    ativado: boolean | null
    tipoUsuario: $Enums.TipoUsuarioEnum | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    cpf: string | null
    senha: string | null
    ativado: boolean | null
    tipoUsuario: $Enums.TipoUsuarioEnum | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    cpf: number
    senha: number
    ativado: number
    tipoUsuario: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    senha?: true
    ativado?: true
    tipoUsuario?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    senha?: true
    ativado?: true
    tipoUsuario?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    senha?: true
    ativado?: true
    tipoUsuario?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
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
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    nome: string
    email: string
    cpf: string
    senha: string
    ativado: boolean
    tipoUsuario: $Enums.TipoUsuarioEnum
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: AdminCountAggregateOutputType | null
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
    tipoUsuario?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    propriedades?: boolean | Admin$propriedadesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    senha?: boolean
    ativado?: boolean
    tipoUsuario?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "cpf" | "senha" | "ativado" | "tipoUsuario" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propriedades?: boolean | Admin$propriedadesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      propriedades: Prisma.$PropriedadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      cpf: string
      senha: string
      ativado: boolean
      tipoUsuario: $Enums.TipoUsuarioEnum
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * @param {AdminFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const admin = await prisma.admin.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AdminFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Admin.
     * @param {AdminAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const admin = await prisma.admin.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AdminAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propriedades<T extends Admin$propriedadesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$propriedadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
    readonly id: FieldRef<"Admin", 'String'>
    readonly nome: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly cpf: FieldRef<"Admin", 'String'>
    readonly senha: FieldRef<"Admin", 'String'>
    readonly ativado: FieldRef<"Admin", 'Boolean'>
    readonly tipoUsuario: FieldRef<"Admin", 'TipoUsuarioEnum'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
    readonly deletedAt: FieldRef<"Admin", 'DateTime'>
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
  }

  /**
   * Admin findRaw
   */
  export type AdminFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Admin aggregateRaw
   */
  export type AdminAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Admin.propriedades
   */
  export type Admin$propriedadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: PropriedadeOrderByWithRelationInput | PropriedadeOrderByWithRelationInput[]
    cursor?: PropriedadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropriedadeScalarFieldEnum | PropriedadeScalarFieldEnum[]
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
    latitude: number | null
    longitude: number | null
  }

  export type PropriedadeSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PropriedadeMinAggregateOutputType = {
    id: string | null
    nomePropriedade: string | null
    nomeResponsavel: string | null
    latitude: number | null
    longitude: number | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropriedadeMaxAggregateOutputType = {
    id: string | null
    nomePropriedade: string | null
    nomeResponsavel: string | null
    latitude: number | null
    longitude: number | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropriedadeCountAggregateOutputType = {
    id: number
    nomePropriedade: number
    nomeResponsavel: number
    latitude: number
    longitude: number
    adminId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropriedadeAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PropriedadeSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PropriedadeMinAggregateInputType = {
    id?: true
    nomePropriedade?: true
    nomeResponsavel?: true
    latitude?: true
    longitude?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropriedadeMaxAggregateInputType = {
    id?: true
    nomePropriedade?: true
    nomeResponsavel?: true
    latitude?: true
    longitude?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropriedadeCountAggregateInputType = {
    id?: true
    nomePropriedade?: true
    nomeResponsavel?: true
    latitude?: true
    longitude?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
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
    id: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    adminId: string | null
    createdAt: Date
    updatedAt: Date | null
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
    nomePropriedade?: boolean
    nomeResponsavel?: boolean
    latitude?: boolean
    longitude?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | Propriedade$adminArgs<ExtArgs>
    culturas?: boolean | Propriedade$culturasArgs<ExtArgs>
    solos?: boolean | Propriedade$solosArgs<ExtArgs>
    simulacoes?: boolean | Propriedade$simulacoesArgs<ExtArgs>
    Historico?: boolean | Propriedade$HistoricoArgs<ExtArgs>
    Precipitacao?: boolean | Propriedade$PrecipitacaoArgs<ExtArgs>
    Estimativas?: boolean | Propriedade$EstimativasArgs<ExtArgs>
    _count?: boolean | PropriedadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propriedade"]>



  export type PropriedadeSelectScalar = {
    id?: boolean
    nomePropriedade?: boolean
    nomeResponsavel?: boolean
    latitude?: boolean
    longitude?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropriedadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomePropriedade" | "nomeResponsavel" | "latitude" | "longitude" | "adminId" | "createdAt" | "updatedAt", ExtArgs["result"]["propriedade"]>
  export type PropriedadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | Propriedade$adminArgs<ExtArgs>
    culturas?: boolean | Propriedade$culturasArgs<ExtArgs>
    solos?: boolean | Propriedade$solosArgs<ExtArgs>
    simulacoes?: boolean | Propriedade$simulacoesArgs<ExtArgs>
    Historico?: boolean | Propriedade$HistoricoArgs<ExtArgs>
    Precipitacao?: boolean | Propriedade$PrecipitacaoArgs<ExtArgs>
    Estimativas?: boolean | Propriedade$EstimativasArgs<ExtArgs>
    _count?: boolean | PropriedadeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PropriedadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Propriedade"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
      culturas: Prisma.$PropriedadeCulturaPayload<ExtArgs>[]
      solos: Prisma.$PropriedadeSoloPayload<ExtArgs>[]
      simulacoes: Prisma.$SimulacaoPayload<ExtArgs>[]
      Historico: Prisma.$HistoricoPayload<ExtArgs>[]
      Precipitacao: Prisma.$PrecipitacaoPayload<ExtArgs>[]
      Estimativas: Prisma.$EstimativasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomePropriedade: string
      nomeResponsavel: string
      latitude: number
      longitude: number
      adminId: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["propriedade"]>
    composites: {}
  }

  type PropriedadeGetPayload<S extends boolean | null | undefined | PropriedadeDefaultArgs> = $Result.GetResult<Prisma.$PropriedadePayload, S>

  type PropriedadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropriedadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropriedadeCountAggregateInputType | true
    }

  export interface PropriedadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends PropriedadeFindUniqueArgs>(args: SelectSubset<T, PropriedadeFindUniqueArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends PropriedadeFindUniqueOrThrowArgs>(args: SelectSubset<T, PropriedadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends PropriedadeFindFirstArgs>(args?: SelectSubset<T, PropriedadeFindFirstArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends PropriedadeFindFirstOrThrowArgs>(args?: SelectSubset<T, PropriedadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends PropriedadeFindManyArgs>(args?: SelectSubset<T, PropriedadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends PropriedadeCreateArgs>(args: SelectSubset<T, PropriedadeCreateArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    delete<T extends PropriedadeDeleteArgs>(args: SelectSubset<T, PropriedadeDeleteArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends PropriedadeUpdateArgs>(args: SelectSubset<T, PropriedadeUpdateArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    upsert<T extends PropriedadeUpsertArgs>(args: SelectSubset<T, PropriedadeUpsertArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Propriedades that matches the filter.
     * @param {PropriedadeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const propriedade = await prisma.propriedade.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PropriedadeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Propriedade.
     * @param {PropriedadeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const propriedade = await prisma.propriedade.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PropriedadeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
  export interface Prisma__PropriedadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends Propriedade$adminArgs<ExtArgs> = {}>(args?: Subset<T, Propriedade$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    culturas<T extends Propriedade$culturasArgs<ExtArgs> = {}>(args?: Subset<T, Propriedade$culturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    solos<T extends Propriedade$solosArgs<ExtArgs> = {}>(args?: Subset<T, Propriedade$solosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    simulacoes<T extends Propriedade$simulacoesArgs<ExtArgs> = {}>(args?: Subset<T, Propriedade$simulacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Historico<T extends Propriedade$HistoricoArgs<ExtArgs> = {}>(args?: Subset<T, Propriedade$HistoricoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Precipitacao<T extends Propriedade$PrecipitacaoArgs<ExtArgs> = {}>(args?: Subset<T, Propriedade$PrecipitacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Estimativas<T extends Propriedade$EstimativasArgs<ExtArgs> = {}>(args?: Subset<T, Propriedade$EstimativasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
    readonly id: FieldRef<"Propriedade", 'String'>
    readonly nomePropriedade: FieldRef<"Propriedade", 'String'>
    readonly nomeResponsavel: FieldRef<"Propriedade", 'String'>
    readonly latitude: FieldRef<"Propriedade", 'Float'>
    readonly longitude: FieldRef<"Propriedade", 'Float'>
    readonly adminId: FieldRef<"Propriedade", 'String'>
    readonly createdAt: FieldRef<"Propriedade", 'DateTime'>
    readonly updatedAt: FieldRef<"Propriedade", 'DateTime'>
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
  }

  /**
   * Propriedade findRaw
   */
  export type PropriedadeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Propriedade aggregateRaw
   */
  export type PropriedadeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
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
   * Propriedade.culturas
   */
  export type Propriedade$culturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Propriedade.solos
   */
  export type Propriedade$solosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Propriedade.Historico
   */
  export type Propriedade$HistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Propriedade.Precipitacao
   */
  export type Propriedade$PrecipitacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Propriedade.Estimativas
   */
  export type Propriedade$EstimativasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    _min: PropriedadeCulturaMinAggregateOutputType | null
    _max: PropriedadeCulturaMaxAggregateOutputType | null
  }

  export type PropriedadeCulturaMinAggregateOutputType = {
    id: string | null
    propriedadeId: string | null
    culturaId: string | null
  }

  export type PropriedadeCulturaMaxAggregateOutputType = {
    id: string | null
    propriedadeId: string | null
    culturaId: string | null
  }

  export type PropriedadeCulturaCountAggregateOutputType = {
    id: number
    propriedadeId: number
    culturaId: number
    _all: number
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
    _min?: PropriedadeCulturaMinAggregateInputType
    _max?: PropriedadeCulturaMaxAggregateInputType
  }

  export type PropriedadeCulturaGroupByOutputType = {
    id: string
    propriedadeId: string
    culturaId: string
    _count: PropriedadeCulturaCountAggregateOutputType | null
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
      id: string
      propriedadeId: string
      culturaId: string
    }, ExtArgs["result"]["propriedadeCultura"]>
    composites: {}
  }

  type PropriedadeCulturaGetPayload<S extends boolean | null | undefined | PropriedadeCulturaDefaultArgs> = $Result.GetResult<Prisma.$PropriedadeCulturaPayload, S>

  type PropriedadeCulturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropriedadeCulturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropriedadeCulturaCountAggregateInputType | true
    }

  export interface PropriedadeCulturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends PropriedadeCulturaFindUniqueArgs>(args: SelectSubset<T, PropriedadeCulturaFindUniqueArgs<ExtArgs>>): Prisma__PropriedadeCulturaClient<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends PropriedadeCulturaFindUniqueOrThrowArgs>(args: SelectSubset<T, PropriedadeCulturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropriedadeCulturaClient<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends PropriedadeCulturaFindFirstArgs>(args?: SelectSubset<T, PropriedadeCulturaFindFirstArgs<ExtArgs>>): Prisma__PropriedadeCulturaClient<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends PropriedadeCulturaFindFirstOrThrowArgs>(args?: SelectSubset<T, PropriedadeCulturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropriedadeCulturaClient<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends PropriedadeCulturaFindManyArgs>(args?: SelectSubset<T, PropriedadeCulturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends PropriedadeCulturaCreateArgs>(args: SelectSubset<T, PropriedadeCulturaCreateArgs<ExtArgs>>): Prisma__PropriedadeCulturaClient<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    delete<T extends PropriedadeCulturaDeleteArgs>(args: SelectSubset<T, PropriedadeCulturaDeleteArgs<ExtArgs>>): Prisma__PropriedadeCulturaClient<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends PropriedadeCulturaUpdateArgs>(args: SelectSubset<T, PropriedadeCulturaUpdateArgs<ExtArgs>>): Prisma__PropriedadeCulturaClient<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    upsert<T extends PropriedadeCulturaUpsertArgs>(args: SelectSubset<T, PropriedadeCulturaUpsertArgs<ExtArgs>>): Prisma__PropriedadeCulturaClient<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PropriedadeCulturas that matches the filter.
     * @param {PropriedadeCulturaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const propriedadeCultura = await prisma.propriedadeCultura.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PropriedadeCulturaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PropriedadeCultura.
     * @param {PropriedadeCulturaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const propriedadeCultura = await prisma.propriedadeCultura.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PropriedadeCulturaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
  export interface Prisma__PropriedadeCulturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propriedade<T extends PropriedadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropriedadeDefaultArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    cultura<T extends CulturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CulturaDefaultArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
    readonly id: FieldRef<"PropriedadeCultura", 'String'>
    readonly propriedadeId: FieldRef<"PropriedadeCultura", 'String'>
    readonly culturaId: FieldRef<"PropriedadeCultura", 'String'>
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
  }

  /**
   * PropriedadeCultura findRaw
   */
  export type PropriedadeCulturaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PropriedadeCultura aggregateRaw
   */
  export type PropriedadeCulturaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
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
    _min: PropriedadeSoloMinAggregateOutputType | null
    _max: PropriedadeSoloMaxAggregateOutputType | null
  }

  export type PropriedadeSoloMinAggregateOutputType = {
    id: string | null
    propriedadeId: string | null
    soloId: string | null
  }

  export type PropriedadeSoloMaxAggregateOutputType = {
    id: string | null
    propriedadeId: string | null
    soloId: string | null
  }

  export type PropriedadeSoloCountAggregateOutputType = {
    id: number
    propriedadeId: number
    soloId: number
    _all: number
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
    _min?: PropriedadeSoloMinAggregateInputType
    _max?: PropriedadeSoloMaxAggregateInputType
  }

  export type PropriedadeSoloGroupByOutputType = {
    id: string
    propriedadeId: string
    soloId: string
    _count: PropriedadeSoloCountAggregateOutputType | null
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
      id: string
      propriedadeId: string
      soloId: string
    }, ExtArgs["result"]["propriedadeSolo"]>
    composites: {}
  }

  type PropriedadeSoloGetPayload<S extends boolean | null | undefined | PropriedadeSoloDefaultArgs> = $Result.GetResult<Prisma.$PropriedadeSoloPayload, S>

  type PropriedadeSoloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropriedadeSoloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropriedadeSoloCountAggregateInputType | true
    }

  export interface PropriedadeSoloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends PropriedadeSoloFindUniqueArgs>(args: SelectSubset<T, PropriedadeSoloFindUniqueArgs<ExtArgs>>): Prisma__PropriedadeSoloClient<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends PropriedadeSoloFindUniqueOrThrowArgs>(args: SelectSubset<T, PropriedadeSoloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropriedadeSoloClient<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends PropriedadeSoloFindFirstArgs>(args?: SelectSubset<T, PropriedadeSoloFindFirstArgs<ExtArgs>>): Prisma__PropriedadeSoloClient<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends PropriedadeSoloFindFirstOrThrowArgs>(args?: SelectSubset<T, PropriedadeSoloFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropriedadeSoloClient<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends PropriedadeSoloFindManyArgs>(args?: SelectSubset<T, PropriedadeSoloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends PropriedadeSoloCreateArgs>(args: SelectSubset<T, PropriedadeSoloCreateArgs<ExtArgs>>): Prisma__PropriedadeSoloClient<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    delete<T extends PropriedadeSoloDeleteArgs>(args: SelectSubset<T, PropriedadeSoloDeleteArgs<ExtArgs>>): Prisma__PropriedadeSoloClient<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends PropriedadeSoloUpdateArgs>(args: SelectSubset<T, PropriedadeSoloUpdateArgs<ExtArgs>>): Prisma__PropriedadeSoloClient<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    upsert<T extends PropriedadeSoloUpsertArgs>(args: SelectSubset<T, PropriedadeSoloUpsertArgs<ExtArgs>>): Prisma__PropriedadeSoloClient<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PropriedadeSolos that matches the filter.
     * @param {PropriedadeSoloFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const propriedadeSolo = await prisma.propriedadeSolo.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PropriedadeSoloFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PropriedadeSolo.
     * @param {PropriedadeSoloAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const propriedadeSolo = await prisma.propriedadeSolo.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PropriedadeSoloAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
  export interface Prisma__PropriedadeSoloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propriedade<T extends PropriedadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropriedadeDefaultArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    solo<T extends SoloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SoloDefaultArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
    readonly id: FieldRef<"PropriedadeSolo", 'String'>
    readonly propriedadeId: FieldRef<"PropriedadeSolo", 'String'>
    readonly soloId: FieldRef<"PropriedadeSolo", 'String'>
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
  }

  /**
   * PropriedadeSolo findRaw
   */
  export type PropriedadeSoloFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PropriedadeSolo aggregateRaw
   */
  export type PropriedadeSoloAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
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
    _min: HistoricoMinAggregateOutputType | null
    _max: HistoricoMaxAggregateOutputType | null
  }

  export type HistoricoMinAggregateOutputType = {
    id: string | null
    simulacaoId: string | null
    observacao: string | null
    propriedadeId: string | null
    precipitacaoId: string | null
    soloId: string | null
    createdAt: Date | null
  }

  export type HistoricoMaxAggregateOutputType = {
    id: string | null
    simulacaoId: string | null
    observacao: string | null
    propriedadeId: string | null
    precipitacaoId: string | null
    soloId: string | null
    createdAt: Date | null
  }

  export type HistoricoCountAggregateOutputType = {
    id: number
    simulacaoId: number
    observacao: number
    propriedadeId: number
    precipitacaoId: number
    soloId: number
    createdAt: number
    _all: number
  }


  export type HistoricoMinAggregateInputType = {
    id?: true
    simulacaoId?: true
    observacao?: true
    propriedadeId?: true
    precipitacaoId?: true
    soloId?: true
    createdAt?: true
  }

  export type HistoricoMaxAggregateInputType = {
    id?: true
    simulacaoId?: true
    observacao?: true
    propriedadeId?: true
    precipitacaoId?: true
    soloId?: true
    createdAt?: true
  }

  export type HistoricoCountAggregateInputType = {
    id?: true
    simulacaoId?: true
    observacao?: true
    propriedadeId?: true
    precipitacaoId?: true
    soloId?: true
    createdAt?: true
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
    _min?: HistoricoMinAggregateInputType
    _max?: HistoricoMaxAggregateInputType
  }

  export type HistoricoGroupByOutputType = {
    id: string
    simulacaoId: string
    observacao: string | null
    propriedadeId: string | null
    precipitacaoId: string | null
    soloId: string | null
    createdAt: Date
    _count: HistoricoCountAggregateOutputType | null
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
    simulacaoId?: boolean
    observacao?: boolean
    propriedadeId?: boolean
    precipitacaoId?: boolean
    soloId?: boolean
    createdAt?: boolean
    simulacao?: boolean | SimulacaoDefaultArgs<ExtArgs>
    Propriedade?: boolean | Historico$PropriedadeArgs<ExtArgs>
    Precipitacao?: boolean | Historico$PrecipitacaoArgs<ExtArgs>
    Solo?: boolean | Historico$SoloArgs<ExtArgs>
  }, ExtArgs["result"]["historico"]>



  export type HistoricoSelectScalar = {
    id?: boolean
    simulacaoId?: boolean
    observacao?: boolean
    propriedadeId?: boolean
    precipitacaoId?: boolean
    soloId?: boolean
    createdAt?: boolean
  }

  export type HistoricoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "simulacaoId" | "observacao" | "propriedadeId" | "precipitacaoId" | "soloId" | "createdAt", ExtArgs["result"]["historico"]>
  export type HistoricoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulacao?: boolean | SimulacaoDefaultArgs<ExtArgs>
    Propriedade?: boolean | Historico$PropriedadeArgs<ExtArgs>
    Precipitacao?: boolean | Historico$PrecipitacaoArgs<ExtArgs>
    Solo?: boolean | Historico$SoloArgs<ExtArgs>
  }

  export type $HistoricoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Historico"
    objects: {
      simulacao: Prisma.$SimulacaoPayload<ExtArgs>
      Propriedade: Prisma.$PropriedadePayload<ExtArgs> | null
      Precipitacao: Prisma.$PrecipitacaoPayload<ExtArgs> | null
      Solo: Prisma.$SoloPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      simulacaoId: string
      observacao: string | null
      propriedadeId: string | null
      precipitacaoId: string | null
      soloId: string | null
      createdAt: Date
    }, ExtArgs["result"]["historico"]>
    composites: {}
  }

  type HistoricoGetPayload<S extends boolean | null | undefined | HistoricoDefaultArgs> = $Result.GetResult<Prisma.$HistoricoPayload, S>

  type HistoricoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoricoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricoCountAggregateInputType | true
    }

  export interface HistoricoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends HistoricoFindUniqueArgs>(args: SelectSubset<T, HistoricoFindUniqueArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends HistoricoFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends HistoricoFindFirstArgs>(args?: SelectSubset<T, HistoricoFindFirstArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends HistoricoFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends HistoricoFindManyArgs>(args?: SelectSubset<T, HistoricoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends HistoricoCreateArgs>(args: SelectSubset<T, HistoricoCreateArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    delete<T extends HistoricoDeleteArgs>(args: SelectSubset<T, HistoricoDeleteArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends HistoricoUpdateArgs>(args: SelectSubset<T, HistoricoUpdateArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    upsert<T extends HistoricoUpsertArgs>(args: SelectSubset<T, HistoricoUpsertArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Historicos that matches the filter.
     * @param {HistoricoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const historico = await prisma.historico.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: HistoricoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Historico.
     * @param {HistoricoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const historico = await prisma.historico.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HistoricoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
  export interface Prisma__HistoricoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    simulacao<T extends SimulacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SimulacaoDefaultArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Propriedade<T extends Historico$PropriedadeArgs<ExtArgs> = {}>(args?: Subset<T, Historico$PropriedadeArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    Precipitacao<T extends Historico$PrecipitacaoArgs<ExtArgs> = {}>(args?: Subset<T, Historico$PrecipitacaoArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    Solo<T extends Historico$SoloArgs<ExtArgs> = {}>(args?: Subset<T, Historico$SoloArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
    readonly id: FieldRef<"Historico", 'String'>
    readonly simulacaoId: FieldRef<"Historico", 'String'>
    readonly observacao: FieldRef<"Historico", 'String'>
    readonly propriedadeId: FieldRef<"Historico", 'String'>
    readonly precipitacaoId: FieldRef<"Historico", 'String'>
    readonly soloId: FieldRef<"Historico", 'String'>
    readonly createdAt: FieldRef<"Historico", 'DateTime'>
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
  }

  /**
   * Historico findRaw
   */
  export type HistoricoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Historico aggregateRaw
   */
  export type HistoricoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Historico.Propriedade
   */
  export type Historico$PropriedadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Historico.Precipitacao
   */
  export type Historico$PrecipitacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Historico.Solo
   */
  export type Historico$SoloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    mmAno: number | null
    chuvas: number | null
    mmDia: number | null
    cvDia: number | null
    mmMes: number | null
    cvMes: number | null
  }

  export type PrecipitacaoSumAggregateOutputType = {
    mmAno: number | null
    chuvas: number | null
    mmDia: number | null
    cvDia: number | null
    mmMes: number | null
    cvMes: number | null
  }

  export type PrecipitacaoMinAggregateOutputType = {
    id: string | null
    mmAno: number | null
    chuvas: number | null
    mmDia: number | null
    cvDia: number | null
    mmMes: number | null
    cvMes: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    propriedadeId: string | null
  }

  export type PrecipitacaoMaxAggregateOutputType = {
    id: string | null
    mmAno: number | null
    chuvas: number | null
    mmDia: number | null
    cvDia: number | null
    mmMes: number | null
    cvMes: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    propriedadeId: string | null
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
    mmAno?: true
    chuvas?: true
    mmDia?: true
    cvDia?: true
    mmMes?: true
    cvMes?: true
  }

  export type PrecipitacaoSumAggregateInputType = {
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
    id: string
    mmAno: number | null
    chuvas: number | null
    mmDia: number | null
    cvDia: number | null
    mmMes: number | null
    cvMes: number | null
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    propriedadeId: string
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
      id: string
      mmAno: number | null
      chuvas: number | null
      mmDia: number | null
      cvDia: number | null
      mmMes: number | null
      cvMes: number | null
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
      propriedadeId: string
    }, ExtArgs["result"]["precipitacao"]>
    composites: {}
  }

  type PrecipitacaoGetPayload<S extends boolean | null | undefined | PrecipitacaoDefaultArgs> = $Result.GetResult<Prisma.$PrecipitacaoPayload, S>

  type PrecipitacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrecipitacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrecipitacaoCountAggregateInputType | true
    }

  export interface PrecipitacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends PrecipitacaoFindUniqueArgs>(args: SelectSubset<T, PrecipitacaoFindUniqueArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends PrecipitacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PrecipitacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends PrecipitacaoFindFirstArgs>(args?: SelectSubset<T, PrecipitacaoFindFirstArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends PrecipitacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PrecipitacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends PrecipitacaoFindManyArgs>(args?: SelectSubset<T, PrecipitacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends PrecipitacaoCreateArgs>(args: SelectSubset<T, PrecipitacaoCreateArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    delete<T extends PrecipitacaoDeleteArgs>(args: SelectSubset<T, PrecipitacaoDeleteArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends PrecipitacaoUpdateArgs>(args: SelectSubset<T, PrecipitacaoUpdateArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    upsert<T extends PrecipitacaoUpsertArgs>(args: SelectSubset<T, PrecipitacaoUpsertArgs<ExtArgs>>): Prisma__PrecipitacaoClient<$Result.GetResult<Prisma.$PrecipitacaoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Precipitacaos that matches the filter.
     * @param {PrecipitacaoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const precipitacao = await prisma.precipitacao.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PrecipitacaoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Precipitacao.
     * @param {PrecipitacaoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const precipitacao = await prisma.precipitacao.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PrecipitacaoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
  export interface Prisma__PrecipitacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propriedade<T extends PropriedadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropriedadeDefaultArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    historico<T extends Precipitacao$historicoArgs<ExtArgs> = {}>(args?: Subset<T, Precipitacao$historicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
    readonly id: FieldRef<"Precipitacao", 'String'>
    readonly mmAno: FieldRef<"Precipitacao", 'Float'>
    readonly chuvas: FieldRef<"Precipitacao", 'Float'>
    readonly mmDia: FieldRef<"Precipitacao", 'Float'>
    readonly cvDia: FieldRef<"Precipitacao", 'Float'>
    readonly mmMes: FieldRef<"Precipitacao", 'Float'>
    readonly cvMes: FieldRef<"Precipitacao", 'Float'>
    readonly createdAt: FieldRef<"Precipitacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Precipitacao", 'DateTime'>
    readonly deletedAt: FieldRef<"Precipitacao", 'DateTime'>
    readonly propriedadeId: FieldRef<"Precipitacao", 'String'>
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
  }

  /**
   * Precipitacao findRaw
   */
  export type PrecipitacaoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Precipitacao aggregateRaw
   */
  export type PrecipitacaoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
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
    profundidade: number | null
    fatorRocha: number | null
    condutHidraulicaSaturada: number | null
    densidadeAparente: number | null
    agua0Bar: number | null
    agua13Bar: number | null
    agua15Bar: number | null
  }

  export type SoloSumAggregateOutputType = {
    profundidade: number | null
    fatorRocha: number | null
    condutHidraulicaSaturada: number | null
    densidadeAparente: number | null
    agua0Bar: number | null
    agua13Bar: number | null
    agua15Bar: number | null
  }

  export type SoloMinAggregateOutputType = {
    id: string | null
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
  }

  export type SoloMaxAggregateOutputType = {
    id: string | null
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
    _all: number
  }


  export type SoloAvgAggregateInputType = {
    profundidade?: true
    fatorRocha?: true
    condutHidraulicaSaturada?: true
    densidadeAparente?: true
    agua0Bar?: true
    agua13Bar?: true
    agua15Bar?: true
  }

  export type SoloSumAggregateInputType = {
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
    id: string
    nomeClasse: string
    profundidade: number | null
    fatorRocha: number | null
    condutHidraulicaSaturada: number | null
    densidadeAparente: number | null
    agua0Bar: number | null
    agua13Bar: number | null
    agua15Bar: number | null
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
    historico?: boolean | Solo$historicoArgs<ExtArgs>
    propriedadeSolo?: boolean | Solo$propriedadeSoloArgs<ExtArgs>
    Simulacao?: boolean | Solo$SimulacaoArgs<ExtArgs>
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
  }

  export type SoloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeClasse" | "profundidade" | "fatorRocha" | "condutHidraulicaSaturada" | "densidadeAparente" | "agua0Bar" | "agua13Bar" | "agua15Bar" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["solo"]>
  export type SoloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historico?: boolean | Solo$historicoArgs<ExtArgs>
    propriedadeSolo?: boolean | Solo$propriedadeSoloArgs<ExtArgs>
    Simulacao?: boolean | Solo$SimulacaoArgs<ExtArgs>
    _count?: boolean | SoloCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SoloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Solo"
    objects: {
      historico: Prisma.$HistoricoPayload<ExtArgs>[]
      propriedadeSolo: Prisma.$PropriedadeSoloPayload<ExtArgs>[]
      Simulacao: Prisma.$SimulacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomeClasse: string
      profundidade: number | null
      fatorRocha: number | null
      condutHidraulicaSaturada: number | null
      densidadeAparente: number | null
      agua0Bar: number | null
      agua13Bar: number | null
      agua15Bar: number | null
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

  export interface SoloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends SoloFindUniqueArgs>(args: SelectSubset<T, SoloFindUniqueArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends SoloFindUniqueOrThrowArgs>(args: SelectSubset<T, SoloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends SoloFindFirstArgs>(args?: SelectSubset<T, SoloFindFirstArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends SoloFindFirstOrThrowArgs>(args?: SelectSubset<T, SoloFindFirstOrThrowArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends SoloFindManyArgs>(args?: SelectSubset<T, SoloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends SoloCreateArgs>(args: SelectSubset<T, SoloCreateArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    delete<T extends SoloDeleteArgs>(args: SelectSubset<T, SoloDeleteArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends SoloUpdateArgs>(args: SelectSubset<T, SoloUpdateArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    upsert<T extends SoloUpsertArgs>(args: SelectSubset<T, SoloUpsertArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Solos that matches the filter.
     * @param {SoloFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const solo = await prisma.solo.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SoloFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Solo.
     * @param {SoloAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const solo = await prisma.solo.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SoloAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
  export interface Prisma__SoloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historico<T extends Solo$historicoArgs<ExtArgs> = {}>(args?: Subset<T, Solo$historicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    propriedadeSolo<T extends Solo$propriedadeSoloArgs<ExtArgs> = {}>(args?: Subset<T, Solo$propriedadeSoloArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadeSoloPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Simulacao<T extends Solo$SimulacaoArgs<ExtArgs> = {}>(args?: Subset<T, Solo$SimulacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
    readonly id: FieldRef<"Solo", 'String'>
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
  }

  /**
   * Solo findRaw
   */
  export type SoloFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Solo aggregateRaw
   */
  export type SoloAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
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
   * Solo.Simulacao
   */
  export type Solo$SimulacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    valorTotal: number | null
  }

  export type EstimativasSumAggregateOutputType = {
    valorTotal: number | null
  }

  export type EstimativasMinAggregateOutputType = {
    id: string | null
    valorTotal: number | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    propriedadeId: string | null
    simulacaoId: string | null
  }

  export type EstimativasMaxAggregateOutputType = {
    id: string | null
    valorTotal: number | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    propriedadeId: string | null
    simulacaoId: string | null
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
    valorTotal?: true
  }

  export type EstimativasSumAggregateInputType = {
    valorTotal?: true
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
    id: string
    valorTotal: number | null
    descricao: string | null
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    propriedadeId: string | null
    simulacaoId: string
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
    simulacao?: boolean | Estimativas$simulacaoArgs<ExtArgs>
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
    simulacao?: boolean | Estimativas$simulacaoArgs<ExtArgs>
    propriedade?: boolean | Estimativas$propriedadeArgs<ExtArgs>
  }

  export type $EstimativasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estimativas"
    objects: {
      simulacao: Prisma.$SimulacaoPayload<ExtArgs> | null
      propriedade: Prisma.$PropriedadePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      valorTotal: number | null
      descricao: string | null
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
      propriedadeId: string | null
      simulacaoId: string
    }, ExtArgs["result"]["estimativas"]>
    composites: {}
  }

  type EstimativasGetPayload<S extends boolean | null | undefined | EstimativasDefaultArgs> = $Result.GetResult<Prisma.$EstimativasPayload, S>

  type EstimativasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstimativasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstimativasCountAggregateInputType | true
    }

  export interface EstimativasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends EstimativasFindUniqueArgs>(args: SelectSubset<T, EstimativasFindUniqueArgs<ExtArgs>>): Prisma__EstimativasClient<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends EstimativasFindUniqueOrThrowArgs>(args: SelectSubset<T, EstimativasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstimativasClient<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends EstimativasFindFirstArgs>(args?: SelectSubset<T, EstimativasFindFirstArgs<ExtArgs>>): Prisma__EstimativasClient<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends EstimativasFindFirstOrThrowArgs>(args?: SelectSubset<T, EstimativasFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstimativasClient<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends EstimativasFindManyArgs>(args?: SelectSubset<T, EstimativasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends EstimativasCreateArgs>(args: SelectSubset<T, EstimativasCreateArgs<ExtArgs>>): Prisma__EstimativasClient<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    delete<T extends EstimativasDeleteArgs>(args: SelectSubset<T, EstimativasDeleteArgs<ExtArgs>>): Prisma__EstimativasClient<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends EstimativasUpdateArgs>(args: SelectSubset<T, EstimativasUpdateArgs<ExtArgs>>): Prisma__EstimativasClient<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    upsert<T extends EstimativasUpsertArgs>(args: SelectSubset<T, EstimativasUpsertArgs<ExtArgs>>): Prisma__EstimativasClient<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Estimativas that matches the filter.
     * @param {EstimativasFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const estimativas = await prisma.estimativas.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EstimativasFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Estimativas.
     * @param {EstimativasAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const estimativas = await prisma.estimativas.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EstimativasAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
  export interface Prisma__EstimativasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    simulacao<T extends Estimativas$simulacaoArgs<ExtArgs> = {}>(args?: Subset<T, Estimativas$simulacaoArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    propriedade<T extends Estimativas$propriedadeArgs<ExtArgs> = {}>(args?: Subset<T, Estimativas$propriedadeArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
    readonly id: FieldRef<"Estimativas", 'String'>
    readonly valorTotal: FieldRef<"Estimativas", 'Float'>
    readonly descricao: FieldRef<"Estimativas", 'String'>
    readonly createdAt: FieldRef<"Estimativas", 'DateTime'>
    readonly updatedAt: FieldRef<"Estimativas", 'DateTime'>
    readonly deletedAt: FieldRef<"Estimativas", 'DateTime'>
    readonly propriedadeId: FieldRef<"Estimativas", 'String'>
    readonly simulacaoId: FieldRef<"Estimativas", 'String'>
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
  }

  /**
   * Estimativas findRaw
   */
  export type EstimativasFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Estimativas aggregateRaw
   */
  export type EstimativasAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Estimativas.simulacao
   */
  export type Estimativas$simulacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    ano: number | null
    eto: number | null
    indiceAridez: number | null
    precipitacaoMmAno: number | null
    numeroChuvas: number | null
    precipitacaoMmDia: number | null
    cvDia: number | null
    precipitacaoMmMes: number | null
    cvMes: number | null
    altitude: number | null
    temperaturaMed: number | null
    umidade: number | null
    resultado: number | null
  }

  export type SimulacaoSumAggregateOutputType = {
    ano: number | null
    eto: number | null
    indiceAridez: number | null
    precipitacaoMmAno: number | null
    numeroChuvas: number | null
    precipitacaoMmDia: number | null
    cvDia: number | null
    precipitacaoMmMes: number | null
    cvMes: number | null
    altitude: number | null
    temperaturaMed: number | null
    umidade: number | null
    resultado: number | null
  }

  export type SimulacaoMinAggregateOutputType = {
    id: string | null
    nomeSimulacao: string | null
    ano: number | null
    culturaId: string | null
    soloId: string | null
    propriedadeId: string | null
    eto: number | null
    indiceAridez: number | null
    precipitacaoMmAno: number | null
    numeroChuvas: number | null
    precipitacaoMmDia: number | null
    cvDia: number | null
    precipitacaoMmMes: number | null
    cvMes: number | null
    altitude: number | null
    temperaturaMed: number | null
    umidade: number | null
    resultado: number | null
    dataSimulacao: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SimulacaoMaxAggregateOutputType = {
    id: string | null
    nomeSimulacao: string | null
    ano: number | null
    culturaId: string | null
    soloId: string | null
    propriedadeId: string | null
    eto: number | null
    indiceAridez: number | null
    precipitacaoMmAno: number | null
    numeroChuvas: number | null
    precipitacaoMmDia: number | null
    cvDia: number | null
    precipitacaoMmMes: number | null
    cvMes: number | null
    altitude: number | null
    temperaturaMed: number | null
    umidade: number | null
    resultado: number | null
    dataSimulacao: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SimulacaoCountAggregateOutputType = {
    id: number
    nomeSimulacao: number
    ano: number
    culturaId: number
    soloId: number
    propriedadeId: number
    eto: number
    indiceAridez: number
    precipitacaoMmAno: number
    numeroChuvas: number
    precipitacaoMmDia: number
    cvDia: number
    precipitacaoMmMes: number
    cvMes: number
    altitude: number
    temperaturaMed: number
    umidade: number
    resultado: number
    dataSimulacao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SimulacaoAvgAggregateInputType = {
    ano?: true
    eto?: true
    indiceAridez?: true
    precipitacaoMmAno?: true
    numeroChuvas?: true
    precipitacaoMmDia?: true
    cvDia?: true
    precipitacaoMmMes?: true
    cvMes?: true
    altitude?: true
    temperaturaMed?: true
    umidade?: true
    resultado?: true
  }

  export type SimulacaoSumAggregateInputType = {
    ano?: true
    eto?: true
    indiceAridez?: true
    precipitacaoMmAno?: true
    numeroChuvas?: true
    precipitacaoMmDia?: true
    cvDia?: true
    precipitacaoMmMes?: true
    cvMes?: true
    altitude?: true
    temperaturaMed?: true
    umidade?: true
    resultado?: true
  }

  export type SimulacaoMinAggregateInputType = {
    id?: true
    nomeSimulacao?: true
    ano?: true
    culturaId?: true
    soloId?: true
    propriedadeId?: true
    eto?: true
    indiceAridez?: true
    precipitacaoMmAno?: true
    numeroChuvas?: true
    precipitacaoMmDia?: true
    cvDia?: true
    precipitacaoMmMes?: true
    cvMes?: true
    altitude?: true
    temperaturaMed?: true
    umidade?: true
    resultado?: true
    dataSimulacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SimulacaoMaxAggregateInputType = {
    id?: true
    nomeSimulacao?: true
    ano?: true
    culturaId?: true
    soloId?: true
    propriedadeId?: true
    eto?: true
    indiceAridez?: true
    precipitacaoMmAno?: true
    numeroChuvas?: true
    precipitacaoMmDia?: true
    cvDia?: true
    precipitacaoMmMes?: true
    cvMes?: true
    altitude?: true
    temperaturaMed?: true
    umidade?: true
    resultado?: true
    dataSimulacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SimulacaoCountAggregateInputType = {
    id?: true
    nomeSimulacao?: true
    ano?: true
    culturaId?: true
    soloId?: true
    propriedadeId?: true
    eto?: true
    indiceAridez?: true
    precipitacaoMmAno?: true
    numeroChuvas?: true
    precipitacaoMmDia?: true
    cvDia?: true
    precipitacaoMmMes?: true
    cvMes?: true
    altitude?: true
    temperaturaMed?: true
    umidade?: true
    resultado?: true
    dataSimulacao?: true
    createdAt?: true
    updatedAt?: true
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
    id: string
    nomeSimulacao: string
    ano: number
    culturaId: string
    soloId: string
    propriedadeId: string
    eto: number | null
    indiceAridez: number | null
    precipitacaoMmAno: number | null
    numeroChuvas: number | null
    precipitacaoMmDia: number | null
    cvDia: number | null
    precipitacaoMmMes: number | null
    cvMes: number | null
    altitude: number | null
    temperaturaMed: number | null
    umidade: number | null
    resultado: number | null
    dataSimulacao: Date
    createdAt: Date
    updatedAt: Date | null
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
    ano?: boolean
    culturaId?: boolean
    soloId?: boolean
    propriedadeId?: boolean
    eto?: boolean
    indiceAridez?: boolean
    precipitacaoMmAno?: boolean
    numeroChuvas?: boolean
    precipitacaoMmDia?: boolean
    cvDia?: boolean
    precipitacaoMmMes?: boolean
    cvMes?: boolean
    altitude?: boolean
    temperaturaMed?: boolean
    umidade?: boolean
    resultado?: boolean
    dataSimulacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cultura?: boolean | CulturaDefaultArgs<ExtArgs>
    solo?: boolean | SoloDefaultArgs<ExtArgs>
    propriedade?: boolean | PropriedadeDefaultArgs<ExtArgs>
    historicos?: boolean | Simulacao$historicosArgs<ExtArgs>
    Estimativas?: boolean | Simulacao$EstimativasArgs<ExtArgs>
    _count?: boolean | SimulacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simulacao"]>



  export type SimulacaoSelectScalar = {
    id?: boolean
    nomeSimulacao?: boolean
    ano?: boolean
    culturaId?: boolean
    soloId?: boolean
    propriedadeId?: boolean
    eto?: boolean
    indiceAridez?: boolean
    precipitacaoMmAno?: boolean
    numeroChuvas?: boolean
    precipitacaoMmDia?: boolean
    cvDia?: boolean
    precipitacaoMmMes?: boolean
    cvMes?: boolean
    altitude?: boolean
    temperaturaMed?: boolean
    umidade?: boolean
    resultado?: boolean
    dataSimulacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SimulacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeSimulacao" | "ano" | "culturaId" | "soloId" | "propriedadeId" | "eto" | "indiceAridez" | "precipitacaoMmAno" | "numeroChuvas" | "precipitacaoMmDia" | "cvDia" | "precipitacaoMmMes" | "cvMes" | "altitude" | "temperaturaMed" | "umidade" | "resultado" | "dataSimulacao" | "createdAt" | "updatedAt", ExtArgs["result"]["simulacao"]>
  export type SimulacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cultura?: boolean | CulturaDefaultArgs<ExtArgs>
    solo?: boolean | SoloDefaultArgs<ExtArgs>
    propriedade?: boolean | PropriedadeDefaultArgs<ExtArgs>
    historicos?: boolean | Simulacao$historicosArgs<ExtArgs>
    Estimativas?: boolean | Simulacao$EstimativasArgs<ExtArgs>
    _count?: boolean | SimulacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SimulacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Simulacao"
    objects: {
      cultura: Prisma.$CulturaPayload<ExtArgs>
      solo: Prisma.$SoloPayload<ExtArgs>
      propriedade: Prisma.$PropriedadePayload<ExtArgs>
      historicos: Prisma.$HistoricoPayload<ExtArgs>[]
      Estimativas: Prisma.$EstimativasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomeSimulacao: string
      ano: number
      culturaId: string
      soloId: string
      propriedadeId: string
      eto: number | null
      indiceAridez: number | null
      precipitacaoMmAno: number | null
      numeroChuvas: number | null
      precipitacaoMmDia: number | null
      cvDia: number | null
      precipitacaoMmMes: number | null
      cvMes: number | null
      altitude: number | null
      temperaturaMed: number | null
      umidade: number | null
      resultado: number | null
      dataSimulacao: Date
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["simulacao"]>
    composites: {}
  }

  type SimulacaoGetPayload<S extends boolean | null | undefined | SimulacaoDefaultArgs> = $Result.GetResult<Prisma.$SimulacaoPayload, S>

  type SimulacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SimulacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SimulacaoCountAggregateInputType | true
    }

  export interface SimulacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends SimulacaoFindUniqueArgs>(args: SelectSubset<T, SimulacaoFindUniqueArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends SimulacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, SimulacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends SimulacaoFindFirstArgs>(args?: SelectSubset<T, SimulacaoFindFirstArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends SimulacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, SimulacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends SimulacaoFindManyArgs>(args?: SelectSubset<T, SimulacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends SimulacaoCreateArgs>(args: SelectSubset<T, SimulacaoCreateArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    delete<T extends SimulacaoDeleteArgs>(args: SelectSubset<T, SimulacaoDeleteArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends SimulacaoUpdateArgs>(args: SelectSubset<T, SimulacaoUpdateArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    upsert<T extends SimulacaoUpsertArgs>(args: SelectSubset<T, SimulacaoUpsertArgs<ExtArgs>>): Prisma__SimulacaoClient<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Simulacaos that matches the filter.
     * @param {SimulacaoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const simulacao = await prisma.simulacao.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SimulacaoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Simulacao.
     * @param {SimulacaoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const simulacao = await prisma.simulacao.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SimulacaoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
  export interface Prisma__SimulacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cultura<T extends CulturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CulturaDefaultArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    solo<T extends SoloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SoloDefaultArgs<ExtArgs>>): Prisma__SoloClient<$Result.GetResult<Prisma.$SoloPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    propriedade<T extends PropriedadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropriedadeDefaultArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    historicos<T extends Simulacao$historicosArgs<ExtArgs> = {}>(args?: Subset<T, Simulacao$historicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Estimativas<T extends Simulacao$EstimativasArgs<ExtArgs> = {}>(args?: Subset<T, Simulacao$EstimativasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstimativasPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
    readonly id: FieldRef<"Simulacao", 'String'>
    readonly nomeSimulacao: FieldRef<"Simulacao", 'String'>
    readonly ano: FieldRef<"Simulacao", 'Int'>
    readonly culturaId: FieldRef<"Simulacao", 'String'>
    readonly soloId: FieldRef<"Simulacao", 'String'>
    readonly propriedadeId: FieldRef<"Simulacao", 'String'>
    readonly eto: FieldRef<"Simulacao", 'Float'>
    readonly indiceAridez: FieldRef<"Simulacao", 'Float'>
    readonly precipitacaoMmAno: FieldRef<"Simulacao", 'Float'>
    readonly numeroChuvas: FieldRef<"Simulacao", 'Float'>
    readonly precipitacaoMmDia: FieldRef<"Simulacao", 'Float'>
    readonly cvDia: FieldRef<"Simulacao", 'Float'>
    readonly precipitacaoMmMes: FieldRef<"Simulacao", 'Float'>
    readonly cvMes: FieldRef<"Simulacao", 'Float'>
    readonly altitude: FieldRef<"Simulacao", 'Float'>
    readonly temperaturaMed: FieldRef<"Simulacao", 'Float'>
    readonly umidade: FieldRef<"Simulacao", 'Float'>
    readonly resultado: FieldRef<"Simulacao", 'Float'>
    readonly dataSimulacao: FieldRef<"Simulacao", 'DateTime'>
    readonly createdAt: FieldRef<"Simulacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Simulacao", 'DateTime'>
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
  }

  /**
   * Simulacao findRaw
   */
  export type SimulacaoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Simulacao aggregateRaw
   */
  export type SimulacaoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Simulacao.historicos
   */
  export type Simulacao$historicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Simulacao.Estimativas
   */
  export type Simulacao$EstimativasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    eua: number | null
    codigo: number | null
  }

  export type CulturaSumAggregateOutputType = {
    eua: number | null
    codigo: number | null
  }

  export type CulturaMinAggregateOutputType = {
    id: string | null
    name: string | null
    eua: number | null
    codigo: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CulturaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    eua: number | null
    codigo: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CulturaCountAggregateOutputType = {
    id: number
    name: number
    eua: number
    codigo: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CulturaAvgAggregateInputType = {
    eua?: true
    codigo?: true
  }

  export type CulturaSumAggregateInputType = {
    eua?: true
    codigo?: true
  }

  export type CulturaMinAggregateInputType = {
    id?: true
    name?: true
    eua?: true
    codigo?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CulturaMaxAggregateInputType = {
    id?: true
    name?: true
    eua?: true
    codigo?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CulturaCountAggregateInputType = {
    id?: true
    name?: true
    eua?: true
    codigo?: true
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
    id: string
    name: string
    eua: number | null
    codigo: number | null
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
    codigo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    PropriedadeCultura?: boolean | Cultura$PropriedadeCulturaArgs<ExtArgs>
    Simulacao?: boolean | Cultura$SimulacaoArgs<ExtArgs>
    _count?: boolean | CulturaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cultura"]>



  export type CulturaSelectScalar = {
    id?: boolean
    name?: boolean
    eua?: boolean
    codigo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CulturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "eua" | "codigo" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["cultura"]>
  export type CulturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PropriedadeCultura?: boolean | Cultura$PropriedadeCulturaArgs<ExtArgs>
    Simulacao?: boolean | Cultura$SimulacaoArgs<ExtArgs>
    _count?: boolean | CulturaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CulturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cultura"
    objects: {
      PropriedadeCultura: Prisma.$PropriedadeCulturaPayload<ExtArgs>[]
      Simulacao: Prisma.$SimulacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      eua: number | null
      codigo: number | null
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

  export interface CulturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends CulturaFindUniqueArgs>(args: SelectSubset<T, CulturaFindUniqueArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends CulturaFindUniqueOrThrowArgs>(args: SelectSubset<T, CulturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends CulturaFindFirstArgs>(args?: SelectSubset<T, CulturaFindFirstArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends CulturaFindFirstOrThrowArgs>(args?: SelectSubset<T, CulturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends CulturaFindManyArgs>(args?: SelectSubset<T, CulturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends CulturaCreateArgs>(args: SelectSubset<T, CulturaCreateArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    delete<T extends CulturaDeleteArgs>(args: SelectSubset<T, CulturaDeleteArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends CulturaUpdateArgs>(args: SelectSubset<T, CulturaUpdateArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    upsert<T extends CulturaUpsertArgs>(args: SelectSubset<T, CulturaUpsertArgs<ExtArgs>>): Prisma__CulturaClient<$Result.GetResult<Prisma.$CulturaPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Culturas that matches the filter.
     * @param {CulturaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cultura = await prisma.cultura.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CulturaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Cultura.
     * @param {CulturaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cultura = await prisma.cultura.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CulturaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
  export interface Prisma__CulturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PropriedadeCultura<T extends Cultura$PropriedadeCulturaArgs<ExtArgs> = {}>(args?: Subset<T, Cultura$PropriedadeCulturaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadeCulturaPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Simulacao<T extends Cultura$SimulacaoArgs<ExtArgs> = {}>(args?: Subset<T, Cultura$SimulacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulacaoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
    readonly id: FieldRef<"Cultura", 'String'>
    readonly name: FieldRef<"Cultura", 'String'>
    readonly eua: FieldRef<"Cultura", 'Float'>
    readonly codigo: FieldRef<"Cultura", 'Int'>
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
  }

  /**
   * Cultura findRaw
   */
  export type CulturaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cultura aggregateRaw
   */
  export type CulturaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
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
   * Cultura.Simulacao
   */
  export type Cultura$SimulacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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

  export const AdminScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    cpf: 'cpf',
    senha: 'senha',
    ativado: 'ativado',
    tipoUsuario: 'tipoUsuario',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const PropriedadeScalarFieldEnum: {
    id: 'id',
    nomePropriedade: 'nomePropriedade',
    nomeResponsavel: 'nomeResponsavel',
    latitude: 'latitude',
    longitude: 'longitude',
    adminId: 'adminId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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
    simulacaoId: 'simulacaoId',
    observacao: 'observacao',
    propriedadeId: 'propriedadeId',
    precipitacaoId: 'precipitacaoId',
    soloId: 'soloId',
    createdAt: 'createdAt'
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
    propriedadeId: 'propriedadeId',
    simulacaoId: 'simulacaoId'
  };

  export type EstimativasScalarFieldEnum = (typeof EstimativasScalarFieldEnum)[keyof typeof EstimativasScalarFieldEnum]


  export const SimulacaoScalarFieldEnum: {
    id: 'id',
    nomeSimulacao: 'nomeSimulacao',
    ano: 'ano',
    culturaId: 'culturaId',
    soloId: 'soloId',
    propriedadeId: 'propriedadeId',
    eto: 'eto',
    indiceAridez: 'indiceAridez',
    precipitacaoMmAno: 'precipitacaoMmAno',
    numeroChuvas: 'numeroChuvas',
    precipitacaoMmDia: 'precipitacaoMmDia',
    cvDia: 'cvDia',
    precipitacaoMmMes: 'precipitacaoMmMes',
    cvMes: 'cvMes',
    altitude: 'altitude',
    temperaturaMed: 'temperaturaMed',
    umidade: 'umidade',
    resultado: 'resultado',
    dataSimulacao: 'dataSimulacao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SimulacaoScalarFieldEnum = (typeof SimulacaoScalarFieldEnum)[keyof typeof SimulacaoScalarFieldEnum]


  export const CulturaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    eua: 'eua',
    codigo: 'codigo',
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


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TipoUsuarioEnum'
   */
  export type EnumTipoUsuarioEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuarioEnum'>
    


  /**
   * Reference to a field of type 'TipoUsuarioEnum[]'
   */
  export type ListEnumTipoUsuarioEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuarioEnum[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    nome?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    cpf?: StringFilter<"Admin"> | string
    senha?: StringFilter<"Admin"> | string
    ativado?: BoolFilter<"Admin"> | boolean
    tipoUsuario?: EnumTipoUsuarioEnumFilter<"Admin"> | $Enums.TipoUsuarioEnum
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    propriedades?: PropriedadeListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    ativado?: SortOrder
    tipoUsuario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    propriedades?: PropriedadeOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    cpf?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    nome?: StringFilter<"Admin"> | string
    senha?: StringFilter<"Admin"> | string
    ativado?: BoolFilter<"Admin"> | boolean
    tipoUsuario?: EnumTipoUsuarioEnumFilter<"Admin"> | $Enums.TipoUsuarioEnum
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    propriedades?: PropriedadeListRelationFilter
  }, "id" | "email" | "cpf">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    ativado?: SortOrder
    tipoUsuario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    nome?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    cpf?: StringWithAggregatesFilter<"Admin"> | string
    senha?: StringWithAggregatesFilter<"Admin"> | string
    ativado?: BoolWithAggregatesFilter<"Admin"> | boolean
    tipoUsuario?: EnumTipoUsuarioEnumWithAggregatesFilter<"Admin"> | $Enums.TipoUsuarioEnum
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
  }

  export type PropriedadeWhereInput = {
    AND?: PropriedadeWhereInput | PropriedadeWhereInput[]
    OR?: PropriedadeWhereInput[]
    NOT?: PropriedadeWhereInput | PropriedadeWhereInput[]
    id?: StringFilter<"Propriedade"> | string
    nomePropriedade?: StringFilter<"Propriedade"> | string
    nomeResponsavel?: StringFilter<"Propriedade"> | string
    latitude?: FloatFilter<"Propriedade"> | number
    longitude?: FloatFilter<"Propriedade"> | number
    adminId?: StringNullableFilter<"Propriedade"> | string | null
    createdAt?: DateTimeFilter<"Propriedade"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Propriedade"> | Date | string | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    culturas?: PropriedadeCulturaListRelationFilter
    solos?: PropriedadeSoloListRelationFilter
    simulacoes?: SimulacaoListRelationFilter
    Historico?: HistoricoListRelationFilter
    Precipitacao?: PrecipitacaoListRelationFilter
    Estimativas?: EstimativasListRelationFilter
  }

  export type PropriedadeOrderByWithRelationInput = {
    id?: SortOrder
    nomePropriedade?: SortOrder
    nomeResponsavel?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
    culturas?: PropriedadeCulturaOrderByRelationAggregateInput
    solos?: PropriedadeSoloOrderByRelationAggregateInput
    simulacoes?: SimulacaoOrderByRelationAggregateInput
    Historico?: HistoricoOrderByRelationAggregateInput
    Precipitacao?: PrecipitacaoOrderByRelationAggregateInput
    Estimativas?: EstimativasOrderByRelationAggregateInput
  }

  export type PropriedadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropriedadeWhereInput | PropriedadeWhereInput[]
    OR?: PropriedadeWhereInput[]
    NOT?: PropriedadeWhereInput | PropriedadeWhereInput[]
    nomePropriedade?: StringFilter<"Propriedade"> | string
    nomeResponsavel?: StringFilter<"Propriedade"> | string
    latitude?: FloatFilter<"Propriedade"> | number
    longitude?: FloatFilter<"Propriedade"> | number
    adminId?: StringNullableFilter<"Propriedade"> | string | null
    createdAt?: DateTimeFilter<"Propriedade"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Propriedade"> | Date | string | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    culturas?: PropriedadeCulturaListRelationFilter
    solos?: PropriedadeSoloListRelationFilter
    simulacoes?: SimulacaoListRelationFilter
    Historico?: HistoricoListRelationFilter
    Precipitacao?: PrecipitacaoListRelationFilter
    Estimativas?: EstimativasListRelationFilter
  }, "id">

  export type PropriedadeOrderByWithAggregationInput = {
    id?: SortOrder
    nomePropriedade?: SortOrder
    nomeResponsavel?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"Propriedade"> | string
    nomePropriedade?: StringWithAggregatesFilter<"Propriedade"> | string
    nomeResponsavel?: StringWithAggregatesFilter<"Propriedade"> | string
    latitude?: FloatWithAggregatesFilter<"Propriedade"> | number
    longitude?: FloatWithAggregatesFilter<"Propriedade"> | number
    adminId?: StringNullableWithAggregatesFilter<"Propriedade"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Propriedade"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Propriedade"> | Date | string | null
  }

  export type PropriedadeCulturaWhereInput = {
    AND?: PropriedadeCulturaWhereInput | PropriedadeCulturaWhereInput[]
    OR?: PropriedadeCulturaWhereInput[]
    NOT?: PropriedadeCulturaWhereInput | PropriedadeCulturaWhereInput[]
    id?: StringFilter<"PropriedadeCultura"> | string
    propriedadeId?: StringFilter<"PropriedadeCultura"> | string
    culturaId?: StringFilter<"PropriedadeCultura"> | string
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
    id?: string
    propriedadeId_culturaId?: PropriedadeCulturaPropriedadeIdCulturaIdCompoundUniqueInput
    AND?: PropriedadeCulturaWhereInput | PropriedadeCulturaWhereInput[]
    OR?: PropriedadeCulturaWhereInput[]
    NOT?: PropriedadeCulturaWhereInput | PropriedadeCulturaWhereInput[]
    propriedadeId?: StringFilter<"PropriedadeCultura"> | string
    culturaId?: StringFilter<"PropriedadeCultura"> | string
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
    cultura?: XOR<CulturaScalarRelationFilter, CulturaWhereInput>
  }, "id" | "propriedadeId_culturaId">

  export type PropriedadeCulturaOrderByWithAggregationInput = {
    id?: SortOrder
    propriedadeId?: SortOrder
    culturaId?: SortOrder
    _count?: PropriedadeCulturaCountOrderByAggregateInput
    _max?: PropriedadeCulturaMaxOrderByAggregateInput
    _min?: PropriedadeCulturaMinOrderByAggregateInput
  }

  export type PropriedadeCulturaScalarWhereWithAggregatesInput = {
    AND?: PropriedadeCulturaScalarWhereWithAggregatesInput | PropriedadeCulturaScalarWhereWithAggregatesInput[]
    OR?: PropriedadeCulturaScalarWhereWithAggregatesInput[]
    NOT?: PropriedadeCulturaScalarWhereWithAggregatesInput | PropriedadeCulturaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PropriedadeCultura"> | string
    propriedadeId?: StringWithAggregatesFilter<"PropriedadeCultura"> | string
    culturaId?: StringWithAggregatesFilter<"PropriedadeCultura"> | string
  }

  export type PropriedadeSoloWhereInput = {
    AND?: PropriedadeSoloWhereInput | PropriedadeSoloWhereInput[]
    OR?: PropriedadeSoloWhereInput[]
    NOT?: PropriedadeSoloWhereInput | PropriedadeSoloWhereInput[]
    id?: StringFilter<"PropriedadeSolo"> | string
    propriedadeId?: StringFilter<"PropriedadeSolo"> | string
    soloId?: StringFilter<"PropriedadeSolo"> | string
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
    id?: string
    propriedadeId_soloId?: PropriedadeSoloPropriedadeIdSoloIdCompoundUniqueInput
    AND?: PropriedadeSoloWhereInput | PropriedadeSoloWhereInput[]
    OR?: PropriedadeSoloWhereInput[]
    NOT?: PropriedadeSoloWhereInput | PropriedadeSoloWhereInput[]
    propriedadeId?: StringFilter<"PropriedadeSolo"> | string
    soloId?: StringFilter<"PropriedadeSolo"> | string
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
    solo?: XOR<SoloScalarRelationFilter, SoloWhereInput>
  }, "id" | "propriedadeId_soloId">

  export type PropriedadeSoloOrderByWithAggregationInput = {
    id?: SortOrder
    propriedadeId?: SortOrder
    soloId?: SortOrder
    _count?: PropriedadeSoloCountOrderByAggregateInput
    _max?: PropriedadeSoloMaxOrderByAggregateInput
    _min?: PropriedadeSoloMinOrderByAggregateInput
  }

  export type PropriedadeSoloScalarWhereWithAggregatesInput = {
    AND?: PropriedadeSoloScalarWhereWithAggregatesInput | PropriedadeSoloScalarWhereWithAggregatesInput[]
    OR?: PropriedadeSoloScalarWhereWithAggregatesInput[]
    NOT?: PropriedadeSoloScalarWhereWithAggregatesInput | PropriedadeSoloScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PropriedadeSolo"> | string
    propriedadeId?: StringWithAggregatesFilter<"PropriedadeSolo"> | string
    soloId?: StringWithAggregatesFilter<"PropriedadeSolo"> | string
  }

  export type HistoricoWhereInput = {
    AND?: HistoricoWhereInput | HistoricoWhereInput[]
    OR?: HistoricoWhereInput[]
    NOT?: HistoricoWhereInput | HistoricoWhereInput[]
    id?: StringFilter<"Historico"> | string
    simulacaoId?: StringFilter<"Historico"> | string
    observacao?: StringNullableFilter<"Historico"> | string | null
    propriedadeId?: StringNullableFilter<"Historico"> | string | null
    precipitacaoId?: StringNullableFilter<"Historico"> | string | null
    soloId?: StringNullableFilter<"Historico"> | string | null
    createdAt?: DateTimeFilter<"Historico"> | Date | string
    simulacao?: XOR<SimulacaoScalarRelationFilter, SimulacaoWhereInput>
    Propriedade?: XOR<PropriedadeNullableScalarRelationFilter, PropriedadeWhereInput> | null
    Precipitacao?: XOR<PrecipitacaoNullableScalarRelationFilter, PrecipitacaoWhereInput> | null
    Solo?: XOR<SoloNullableScalarRelationFilter, SoloWhereInput> | null
  }

  export type HistoricoOrderByWithRelationInput = {
    id?: SortOrder
    simulacaoId?: SortOrder
    observacao?: SortOrder
    propriedadeId?: SortOrder
    precipitacaoId?: SortOrder
    soloId?: SortOrder
    createdAt?: SortOrder
    simulacao?: SimulacaoOrderByWithRelationInput
    Propriedade?: PropriedadeOrderByWithRelationInput
    Precipitacao?: PrecipitacaoOrderByWithRelationInput
    Solo?: SoloOrderByWithRelationInput
  }

  export type HistoricoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoricoWhereInput | HistoricoWhereInput[]
    OR?: HistoricoWhereInput[]
    NOT?: HistoricoWhereInput | HistoricoWhereInput[]
    simulacaoId?: StringFilter<"Historico"> | string
    observacao?: StringNullableFilter<"Historico"> | string | null
    propriedadeId?: StringNullableFilter<"Historico"> | string | null
    precipitacaoId?: StringNullableFilter<"Historico"> | string | null
    soloId?: StringNullableFilter<"Historico"> | string | null
    createdAt?: DateTimeFilter<"Historico"> | Date | string
    simulacao?: XOR<SimulacaoScalarRelationFilter, SimulacaoWhereInput>
    Propriedade?: XOR<PropriedadeNullableScalarRelationFilter, PropriedadeWhereInput> | null
    Precipitacao?: XOR<PrecipitacaoNullableScalarRelationFilter, PrecipitacaoWhereInput> | null
    Solo?: XOR<SoloNullableScalarRelationFilter, SoloWhereInput> | null
  }, "id">

  export type HistoricoOrderByWithAggregationInput = {
    id?: SortOrder
    simulacaoId?: SortOrder
    observacao?: SortOrder
    propriedadeId?: SortOrder
    precipitacaoId?: SortOrder
    soloId?: SortOrder
    createdAt?: SortOrder
    _count?: HistoricoCountOrderByAggregateInput
    _max?: HistoricoMaxOrderByAggregateInput
    _min?: HistoricoMinOrderByAggregateInput
  }

  export type HistoricoScalarWhereWithAggregatesInput = {
    AND?: HistoricoScalarWhereWithAggregatesInput | HistoricoScalarWhereWithAggregatesInput[]
    OR?: HistoricoScalarWhereWithAggregatesInput[]
    NOT?: HistoricoScalarWhereWithAggregatesInput | HistoricoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Historico"> | string
    simulacaoId?: StringWithAggregatesFilter<"Historico"> | string
    observacao?: StringNullableWithAggregatesFilter<"Historico"> | string | null
    propriedadeId?: StringNullableWithAggregatesFilter<"Historico"> | string | null
    precipitacaoId?: StringNullableWithAggregatesFilter<"Historico"> | string | null
    soloId?: StringNullableWithAggregatesFilter<"Historico"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Historico"> | Date | string
  }

  export type PrecipitacaoWhereInput = {
    AND?: PrecipitacaoWhereInput | PrecipitacaoWhereInput[]
    OR?: PrecipitacaoWhereInput[]
    NOT?: PrecipitacaoWhereInput | PrecipitacaoWhereInput[]
    id?: StringFilter<"Precipitacao"> | string
    mmAno?: FloatNullableFilter<"Precipitacao"> | number | null
    chuvas?: FloatNullableFilter<"Precipitacao"> | number | null
    mmDia?: FloatNullableFilter<"Precipitacao"> | number | null
    cvDia?: FloatNullableFilter<"Precipitacao"> | number | null
    mmMes?: FloatNullableFilter<"Precipitacao"> | number | null
    cvMes?: FloatNullableFilter<"Precipitacao"> | number | null
    createdAt?: DateTimeFilter<"Precipitacao"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Precipitacao"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Precipitacao"> | Date | string | null
    propriedadeId?: StringFilter<"Precipitacao"> | string
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
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    propriedadeId?: SortOrder
    propriedade?: PropriedadeOrderByWithRelationInput
    historico?: HistoricoOrderByRelationAggregateInput
  }

  export type PrecipitacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrecipitacaoWhereInput | PrecipitacaoWhereInput[]
    OR?: PrecipitacaoWhereInput[]
    NOT?: PrecipitacaoWhereInput | PrecipitacaoWhereInput[]
    mmAno?: FloatNullableFilter<"Precipitacao"> | number | null
    chuvas?: FloatNullableFilter<"Precipitacao"> | number | null
    mmDia?: FloatNullableFilter<"Precipitacao"> | number | null
    cvDia?: FloatNullableFilter<"Precipitacao"> | number | null
    mmMes?: FloatNullableFilter<"Precipitacao"> | number | null
    cvMes?: FloatNullableFilter<"Precipitacao"> | number | null
    createdAt?: DateTimeFilter<"Precipitacao"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Precipitacao"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Precipitacao"> | Date | string | null
    propriedadeId?: StringFilter<"Precipitacao"> | string
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
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"Precipitacao"> | string
    mmAno?: FloatNullableWithAggregatesFilter<"Precipitacao"> | number | null
    chuvas?: FloatNullableWithAggregatesFilter<"Precipitacao"> | number | null
    mmDia?: FloatNullableWithAggregatesFilter<"Precipitacao"> | number | null
    cvDia?: FloatNullableWithAggregatesFilter<"Precipitacao"> | number | null
    mmMes?: FloatNullableWithAggregatesFilter<"Precipitacao"> | number | null
    cvMes?: FloatNullableWithAggregatesFilter<"Precipitacao"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Precipitacao"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Precipitacao"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Precipitacao"> | Date | string | null
    propriedadeId?: StringWithAggregatesFilter<"Precipitacao"> | string
  }

  export type SoloWhereInput = {
    AND?: SoloWhereInput | SoloWhereInput[]
    OR?: SoloWhereInput[]
    NOT?: SoloWhereInput | SoloWhereInput[]
    id?: StringFilter<"Solo"> | string
    nomeClasse?: StringFilter<"Solo"> | string
    profundidade?: FloatNullableFilter<"Solo"> | number | null
    fatorRocha?: FloatNullableFilter<"Solo"> | number | null
    condutHidraulicaSaturada?: FloatNullableFilter<"Solo"> | number | null
    densidadeAparente?: FloatNullableFilter<"Solo"> | number | null
    agua0Bar?: FloatNullableFilter<"Solo"> | number | null
    agua13Bar?: FloatNullableFilter<"Solo"> | number | null
    agua15Bar?: FloatNullableFilter<"Solo"> | number | null
    createdAt?: DateTimeFilter<"Solo"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Solo"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Solo"> | Date | string | null
    historico?: HistoricoListRelationFilter
    propriedadeSolo?: PropriedadeSoloListRelationFilter
    Simulacao?: SimulacaoListRelationFilter
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
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    historico?: HistoricoOrderByRelationAggregateInput
    propriedadeSolo?: PropriedadeSoloOrderByRelationAggregateInput
    Simulacao?: SimulacaoOrderByRelationAggregateInput
  }

  export type SoloWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SoloWhereInput | SoloWhereInput[]
    OR?: SoloWhereInput[]
    NOT?: SoloWhereInput | SoloWhereInput[]
    nomeClasse?: StringFilter<"Solo"> | string
    profundidade?: FloatNullableFilter<"Solo"> | number | null
    fatorRocha?: FloatNullableFilter<"Solo"> | number | null
    condutHidraulicaSaturada?: FloatNullableFilter<"Solo"> | number | null
    densidadeAparente?: FloatNullableFilter<"Solo"> | number | null
    agua0Bar?: FloatNullableFilter<"Solo"> | number | null
    agua13Bar?: FloatNullableFilter<"Solo"> | number | null
    agua15Bar?: FloatNullableFilter<"Solo"> | number | null
    createdAt?: DateTimeFilter<"Solo"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Solo"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Solo"> | Date | string | null
    historico?: HistoricoListRelationFilter
    propriedadeSolo?: PropriedadeSoloListRelationFilter
    Simulacao?: SimulacaoListRelationFilter
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
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"Solo"> | string
    nomeClasse?: StringWithAggregatesFilter<"Solo"> | string
    profundidade?: FloatNullableWithAggregatesFilter<"Solo"> | number | null
    fatorRocha?: FloatNullableWithAggregatesFilter<"Solo"> | number | null
    condutHidraulicaSaturada?: FloatNullableWithAggregatesFilter<"Solo"> | number | null
    densidadeAparente?: FloatNullableWithAggregatesFilter<"Solo"> | number | null
    agua0Bar?: FloatNullableWithAggregatesFilter<"Solo"> | number | null
    agua13Bar?: FloatNullableWithAggregatesFilter<"Solo"> | number | null
    agua15Bar?: FloatNullableWithAggregatesFilter<"Solo"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Solo"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Solo"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Solo"> | Date | string | null
  }

  export type EstimativasWhereInput = {
    AND?: EstimativasWhereInput | EstimativasWhereInput[]
    OR?: EstimativasWhereInput[]
    NOT?: EstimativasWhereInput | EstimativasWhereInput[]
    id?: StringFilter<"Estimativas"> | string
    valorTotal?: FloatNullableFilter<"Estimativas"> | number | null
    descricao?: StringNullableFilter<"Estimativas"> | string | null
    createdAt?: DateTimeFilter<"Estimativas"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Estimativas"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Estimativas"> | Date | string | null
    propriedadeId?: StringNullableFilter<"Estimativas"> | string | null
    simulacaoId?: StringFilter<"Estimativas"> | string
    simulacao?: XOR<SimulacaoNullableScalarRelationFilter, SimulacaoWhereInput> | null
    propriedade?: XOR<PropriedadeNullableScalarRelationFilter, PropriedadeWhereInput> | null
  }

  export type EstimativasOrderByWithRelationInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    propriedadeId?: SortOrder
    simulacaoId?: SortOrder
    simulacao?: SimulacaoOrderByWithRelationInput
    propriedade?: PropriedadeOrderByWithRelationInput
  }

  export type EstimativasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EstimativasWhereInput | EstimativasWhereInput[]
    OR?: EstimativasWhereInput[]
    NOT?: EstimativasWhereInput | EstimativasWhereInput[]
    valorTotal?: FloatNullableFilter<"Estimativas"> | number | null
    descricao?: StringNullableFilter<"Estimativas"> | string | null
    createdAt?: DateTimeFilter<"Estimativas"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Estimativas"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Estimativas"> | Date | string | null
    propriedadeId?: StringNullableFilter<"Estimativas"> | string | null
    simulacaoId?: StringFilter<"Estimativas"> | string
    simulacao?: XOR<SimulacaoNullableScalarRelationFilter, SimulacaoWhereInput> | null
    propriedade?: XOR<PropriedadeNullableScalarRelationFilter, PropriedadeWhereInput> | null
  }, "id">

  export type EstimativasOrderByWithAggregationInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"Estimativas"> | string
    valorTotal?: FloatNullableWithAggregatesFilter<"Estimativas"> | number | null
    descricao?: StringNullableWithAggregatesFilter<"Estimativas"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Estimativas"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Estimativas"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Estimativas"> | Date | string | null
    propriedadeId?: StringNullableWithAggregatesFilter<"Estimativas"> | string | null
    simulacaoId?: StringWithAggregatesFilter<"Estimativas"> | string
  }

  export type SimulacaoWhereInput = {
    AND?: SimulacaoWhereInput | SimulacaoWhereInput[]
    OR?: SimulacaoWhereInput[]
    NOT?: SimulacaoWhereInput | SimulacaoWhereInput[]
    id?: StringFilter<"Simulacao"> | string
    nomeSimulacao?: StringFilter<"Simulacao"> | string
    ano?: IntFilter<"Simulacao"> | number
    culturaId?: StringFilter<"Simulacao"> | string
    soloId?: StringFilter<"Simulacao"> | string
    propriedadeId?: StringFilter<"Simulacao"> | string
    eto?: FloatNullableFilter<"Simulacao"> | number | null
    indiceAridez?: FloatNullableFilter<"Simulacao"> | number | null
    precipitacaoMmAno?: FloatNullableFilter<"Simulacao"> | number | null
    numeroChuvas?: FloatNullableFilter<"Simulacao"> | number | null
    precipitacaoMmDia?: FloatNullableFilter<"Simulacao"> | number | null
    cvDia?: FloatNullableFilter<"Simulacao"> | number | null
    precipitacaoMmMes?: FloatNullableFilter<"Simulacao"> | number | null
    cvMes?: FloatNullableFilter<"Simulacao"> | number | null
    altitude?: FloatNullableFilter<"Simulacao"> | number | null
    temperaturaMed?: FloatNullableFilter<"Simulacao"> | number | null
    umidade?: FloatNullableFilter<"Simulacao"> | number | null
    resultado?: FloatNullableFilter<"Simulacao"> | number | null
    dataSimulacao?: DateTimeFilter<"Simulacao"> | Date | string
    createdAt?: DateTimeFilter<"Simulacao"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Simulacao"> | Date | string | null
    cultura?: XOR<CulturaScalarRelationFilter, CulturaWhereInput>
    solo?: XOR<SoloScalarRelationFilter, SoloWhereInput>
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
    historicos?: HistoricoListRelationFilter
    Estimativas?: EstimativasListRelationFilter
  }

  export type SimulacaoOrderByWithRelationInput = {
    id?: SortOrder
    nomeSimulacao?: SortOrder
    ano?: SortOrder
    culturaId?: SortOrder
    soloId?: SortOrder
    propriedadeId?: SortOrder
    eto?: SortOrder
    indiceAridez?: SortOrder
    precipitacaoMmAno?: SortOrder
    numeroChuvas?: SortOrder
    precipitacaoMmDia?: SortOrder
    cvDia?: SortOrder
    precipitacaoMmMes?: SortOrder
    cvMes?: SortOrder
    altitude?: SortOrder
    temperaturaMed?: SortOrder
    umidade?: SortOrder
    resultado?: SortOrder
    dataSimulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cultura?: CulturaOrderByWithRelationInput
    solo?: SoloOrderByWithRelationInput
    propriedade?: PropriedadeOrderByWithRelationInput
    historicos?: HistoricoOrderByRelationAggregateInput
    Estimativas?: EstimativasOrderByRelationAggregateInput
  }

  export type SimulacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SimulacaoWhereInput | SimulacaoWhereInput[]
    OR?: SimulacaoWhereInput[]
    NOT?: SimulacaoWhereInput | SimulacaoWhereInput[]
    nomeSimulacao?: StringFilter<"Simulacao"> | string
    ano?: IntFilter<"Simulacao"> | number
    culturaId?: StringFilter<"Simulacao"> | string
    soloId?: StringFilter<"Simulacao"> | string
    propriedadeId?: StringFilter<"Simulacao"> | string
    eto?: FloatNullableFilter<"Simulacao"> | number | null
    indiceAridez?: FloatNullableFilter<"Simulacao"> | number | null
    precipitacaoMmAno?: FloatNullableFilter<"Simulacao"> | number | null
    numeroChuvas?: FloatNullableFilter<"Simulacao"> | number | null
    precipitacaoMmDia?: FloatNullableFilter<"Simulacao"> | number | null
    cvDia?: FloatNullableFilter<"Simulacao"> | number | null
    precipitacaoMmMes?: FloatNullableFilter<"Simulacao"> | number | null
    cvMes?: FloatNullableFilter<"Simulacao"> | number | null
    altitude?: FloatNullableFilter<"Simulacao"> | number | null
    temperaturaMed?: FloatNullableFilter<"Simulacao"> | number | null
    umidade?: FloatNullableFilter<"Simulacao"> | number | null
    resultado?: FloatNullableFilter<"Simulacao"> | number | null
    dataSimulacao?: DateTimeFilter<"Simulacao"> | Date | string
    createdAt?: DateTimeFilter<"Simulacao"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Simulacao"> | Date | string | null
    cultura?: XOR<CulturaScalarRelationFilter, CulturaWhereInput>
    solo?: XOR<SoloScalarRelationFilter, SoloWhereInput>
    propriedade?: XOR<PropriedadeScalarRelationFilter, PropriedadeWhereInput>
    historicos?: HistoricoListRelationFilter
    Estimativas?: EstimativasListRelationFilter
  }, "id">

  export type SimulacaoOrderByWithAggregationInput = {
    id?: SortOrder
    nomeSimulacao?: SortOrder
    ano?: SortOrder
    culturaId?: SortOrder
    soloId?: SortOrder
    propriedadeId?: SortOrder
    eto?: SortOrder
    indiceAridez?: SortOrder
    precipitacaoMmAno?: SortOrder
    numeroChuvas?: SortOrder
    precipitacaoMmDia?: SortOrder
    cvDia?: SortOrder
    precipitacaoMmMes?: SortOrder
    cvMes?: SortOrder
    altitude?: SortOrder
    temperaturaMed?: SortOrder
    umidade?: SortOrder
    resultado?: SortOrder
    dataSimulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"Simulacao"> | string
    nomeSimulacao?: StringWithAggregatesFilter<"Simulacao"> | string
    ano?: IntWithAggregatesFilter<"Simulacao"> | number
    culturaId?: StringWithAggregatesFilter<"Simulacao"> | string
    soloId?: StringWithAggregatesFilter<"Simulacao"> | string
    propriedadeId?: StringWithAggregatesFilter<"Simulacao"> | string
    eto?: FloatNullableWithAggregatesFilter<"Simulacao"> | number | null
    indiceAridez?: FloatNullableWithAggregatesFilter<"Simulacao"> | number | null
    precipitacaoMmAno?: FloatNullableWithAggregatesFilter<"Simulacao"> | number | null
    numeroChuvas?: FloatNullableWithAggregatesFilter<"Simulacao"> | number | null
    precipitacaoMmDia?: FloatNullableWithAggregatesFilter<"Simulacao"> | number | null
    cvDia?: FloatNullableWithAggregatesFilter<"Simulacao"> | number | null
    precipitacaoMmMes?: FloatNullableWithAggregatesFilter<"Simulacao"> | number | null
    cvMes?: FloatNullableWithAggregatesFilter<"Simulacao"> | number | null
    altitude?: FloatNullableWithAggregatesFilter<"Simulacao"> | number | null
    temperaturaMed?: FloatNullableWithAggregatesFilter<"Simulacao"> | number | null
    umidade?: FloatNullableWithAggregatesFilter<"Simulacao"> | number | null
    resultado?: FloatNullableWithAggregatesFilter<"Simulacao"> | number | null
    dataSimulacao?: DateTimeWithAggregatesFilter<"Simulacao"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Simulacao"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Simulacao"> | Date | string | null
  }

  export type CulturaWhereInput = {
    AND?: CulturaWhereInput | CulturaWhereInput[]
    OR?: CulturaWhereInput[]
    NOT?: CulturaWhereInput | CulturaWhereInput[]
    id?: StringFilter<"Cultura"> | string
    name?: StringFilter<"Cultura"> | string
    eua?: FloatNullableFilter<"Cultura"> | number | null
    codigo?: IntNullableFilter<"Cultura"> | number | null
    createdAt?: DateTimeFilter<"Cultura"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Cultura"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Cultura"> | Date | string | null
    PropriedadeCultura?: PropriedadeCulturaListRelationFilter
    Simulacao?: SimulacaoListRelationFilter
  }

  export type CulturaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    eua?: SortOrder
    codigo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    PropriedadeCultura?: PropriedadeCulturaOrderByRelationAggregateInput
    Simulacao?: SimulacaoOrderByRelationAggregateInput
  }

  export type CulturaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CulturaWhereInput | CulturaWhereInput[]
    OR?: CulturaWhereInput[]
    NOT?: CulturaWhereInput | CulturaWhereInput[]
    name?: StringFilter<"Cultura"> | string
    eua?: FloatNullableFilter<"Cultura"> | number | null
    codigo?: IntNullableFilter<"Cultura"> | number | null
    createdAt?: DateTimeFilter<"Cultura"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Cultura"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Cultura"> | Date | string | null
    PropriedadeCultura?: PropriedadeCulturaListRelationFilter
    Simulacao?: SimulacaoListRelationFilter
  }, "id">

  export type CulturaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    eua?: SortOrder
    codigo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"Cultura"> | string
    name?: StringWithAggregatesFilter<"Cultura"> | string
    eua?: FloatNullableWithAggregatesFilter<"Cultura"> | number | null
    codigo?: IntNullableWithAggregatesFilter<"Cultura"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Cultura"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Cultura"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Cultura"> | Date | string | null
  }

  export type AdminCreateInput = {
    id?: string
    nome: string
    email: string
    cpf: string
    senha: string
    ativado?: boolean
    tipoUsuario?: $Enums.TipoUsuarioEnum
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedades?: PropriedadeCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    cpf: string
    senha: string
    ativado?: boolean
    tipoUsuario?: $Enums.TipoUsuarioEnum
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedades?: PropriedadeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuario?: EnumTipoUsuarioEnumFieldUpdateOperationsInput | $Enums.TipoUsuarioEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedades?: PropriedadeUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuario?: EnumTipoUsuarioEnumFieldUpdateOperationsInput | $Enums.TipoUsuarioEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedades?: PropriedadeUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    nome: string
    email: string
    cpf: string
    senha: string
    ativado?: boolean
    tipoUsuario?: $Enums.TipoUsuarioEnum
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AdminUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuario?: EnumTipoUsuarioEnumFieldUpdateOperationsInput | $Enums.TipoUsuarioEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuario?: EnumTipoUsuarioEnumFieldUpdateOperationsInput | $Enums.TipoUsuarioEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropriedadeCreateInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadesInput
    culturas?: PropriedadeCulturaCreateNestedManyWithoutPropriedadeInput
    solos?: PropriedadeSoloCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    Historico?: HistoricoCreateNestedManyWithoutPropriedadeInput
    Precipitacao?: PrecipitacaoCreateNestedManyWithoutPropriedadeInput
    Estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    culturas?: PropriedadeCulturaUncheckedCreateNestedManyWithoutPropriedadeInput
    solos?: PropriedadeSoloUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    Historico?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
    Precipitacao?: PrecipitacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    Estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUpdateInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadesNestedInput
    culturas?: PropriedadeCulturaUpdateManyWithoutPropriedadeNestedInput
    solos?: PropriedadeSoloUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    Historico?: HistoricoUpdateManyWithoutPropriedadeNestedInput
    Precipitacao?: PrecipitacaoUpdateManyWithoutPropriedadeNestedInput
    Estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    culturas?: PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeNestedInput
    solos?: PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Historico?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Precipitacao?: PrecipitacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeCreateManyInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PropriedadeUpdateManyMutationInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropriedadeUncheckedUpdateManyInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropriedadeCulturaCreateInput = {
    id?: string
    propriedade: PropriedadeCreateNestedOneWithoutCulturasInput
    cultura: CulturaCreateNestedOneWithoutPropriedadeCulturaInput
  }

  export type PropriedadeCulturaUncheckedCreateInput = {
    id?: string
    propriedadeId: string
    culturaId: string
  }

  export type PropriedadeCulturaUpdateInput = {
    propriedade?: PropriedadeUpdateOneRequiredWithoutCulturasNestedInput
    cultura?: CulturaUpdateOneRequiredWithoutPropriedadeCulturaNestedInput
  }

  export type PropriedadeCulturaUncheckedUpdateInput = {
    propriedadeId?: StringFieldUpdateOperationsInput | string
    culturaId?: StringFieldUpdateOperationsInput | string
  }

  export type PropriedadeCulturaCreateManyInput = {
    id?: string
    propriedadeId: string
    culturaId: string
  }

  export type PropriedadeCulturaUpdateManyMutationInput = {

  }

  export type PropriedadeCulturaUncheckedUpdateManyInput = {
    propriedadeId?: StringFieldUpdateOperationsInput | string
    culturaId?: StringFieldUpdateOperationsInput | string
  }

  export type PropriedadeSoloCreateInput = {
    id?: string
    propriedade: PropriedadeCreateNestedOneWithoutSolosInput
    solo: SoloCreateNestedOneWithoutPropriedadeSoloInput
  }

  export type PropriedadeSoloUncheckedCreateInput = {
    id?: string
    propriedadeId: string
    soloId: string
  }

  export type PropriedadeSoloUpdateInput = {
    propriedade?: PropriedadeUpdateOneRequiredWithoutSolosNestedInput
    solo?: SoloUpdateOneRequiredWithoutPropriedadeSoloNestedInput
  }

  export type PropriedadeSoloUncheckedUpdateInput = {
    propriedadeId?: StringFieldUpdateOperationsInput | string
    soloId?: StringFieldUpdateOperationsInput | string
  }

  export type PropriedadeSoloCreateManyInput = {
    id?: string
    propriedadeId: string
    soloId: string
  }

  export type PropriedadeSoloUpdateManyMutationInput = {

  }

  export type PropriedadeSoloUncheckedUpdateManyInput = {
    propriedadeId?: StringFieldUpdateOperationsInput | string
    soloId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoricoCreateInput = {
    id?: string
    observacao?: string | null
    createdAt?: Date | string
    simulacao: SimulacaoCreateNestedOneWithoutHistoricosInput
    Propriedade?: PropriedadeCreateNestedOneWithoutHistoricoInput
    Precipitacao?: PrecipitacaoCreateNestedOneWithoutHistoricoInput
    Solo?: SoloCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateInput = {
    id?: string
    simulacaoId: string
    observacao?: string | null
    propriedadeId?: string | null
    precipitacaoId?: string | null
    soloId?: string | null
    createdAt?: Date | string
  }

  export type HistoricoUpdateInput = {
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    simulacao?: SimulacaoUpdateOneRequiredWithoutHistoricosNestedInput
    Propriedade?: PropriedadeUpdateOneWithoutHistoricoNestedInput
    Precipitacao?: PrecipitacaoUpdateOneWithoutHistoricoNestedInput
    Solo?: SoloUpdateOneWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateInput = {
    simulacaoId?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    propriedadeId?: NullableStringFieldUpdateOperationsInput | string | null
    precipitacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    soloId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoCreateManyInput = {
    id?: string
    simulacaoId: string
    observacao?: string | null
    propriedadeId?: string | null
    precipitacaoId?: string | null
    soloId?: string | null
    createdAt?: Date | string
  }

  export type HistoricoUpdateManyMutationInput = {
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUncheckedUpdateManyInput = {
    simulacaoId?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    propriedadeId?: NullableStringFieldUpdateOperationsInput | string | null
    precipitacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    soloId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrecipitacaoCreateInput = {
    id?: string
    mmAno?: number | null
    chuvas?: number | null
    mmDia?: number | null
    cvDia?: number | null
    mmMes?: number | null
    cvMes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedade: PropriedadeCreateNestedOneWithoutPrecipitacaoInput
    historico?: HistoricoCreateNestedManyWithoutPrecipitacaoInput
  }

  export type PrecipitacaoUncheckedCreateInput = {
    id?: string
    mmAno?: number | null
    chuvas?: number | null
    mmDia?: number | null
    cvDia?: number | null
    mmMes?: number | null
    cvMes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId: string
    historico?: HistoricoUncheckedCreateNestedManyWithoutPrecipitacaoInput
  }

  export type PrecipitacaoUpdateInput = {
    mmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    chuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    mmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    mmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedade?: PropriedadeUpdateOneRequiredWithoutPrecipitacaoNestedInput
    historico?: HistoricoUpdateManyWithoutPrecipitacaoNestedInput
  }

  export type PrecipitacaoUncheckedUpdateInput = {
    mmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    chuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    mmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    mmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: StringFieldUpdateOperationsInput | string
    historico?: HistoricoUncheckedUpdateManyWithoutPrecipitacaoNestedInput
  }

  export type PrecipitacaoCreateManyInput = {
    id?: string
    mmAno?: number | null
    chuvas?: number | null
    mmDia?: number | null
    cvDia?: number | null
    mmMes?: number | null
    cvMes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId: string
  }

  export type PrecipitacaoUpdateManyMutationInput = {
    mmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    chuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    mmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    mmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrecipitacaoUncheckedUpdateManyInput = {
    mmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    chuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    mmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    mmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: StringFieldUpdateOperationsInput | string
  }

  export type SoloCreateInput = {
    id?: string
    nomeClasse: string
    profundidade?: number | null
    fatorRocha?: number | null
    condutHidraulicaSaturada?: number | null
    densidadeAparente?: number | null
    agua0Bar?: number | null
    agua13Bar?: number | null
    agua15Bar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    historico?: HistoricoCreateNestedManyWithoutSoloInput
    propriedadeSolo?: PropriedadeSoloCreateNestedManyWithoutSoloInput
    Simulacao?: SimulacaoCreateNestedManyWithoutSoloInput
  }

  export type SoloUncheckedCreateInput = {
    id?: string
    nomeClasse: string
    profundidade?: number | null
    fatorRocha?: number | null
    condutHidraulicaSaturada?: number | null
    densidadeAparente?: number | null
    agua0Bar?: number | null
    agua13Bar?: number | null
    agua15Bar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    historico?: HistoricoUncheckedCreateNestedManyWithoutSoloInput
    propriedadeSolo?: PropriedadeSoloUncheckedCreateNestedManyWithoutSoloInput
    Simulacao?: SimulacaoUncheckedCreateNestedManyWithoutSoloInput
  }

  export type SoloUpdateInput = {
    nomeClasse?: StringFieldUpdateOperationsInput | string
    profundidade?: NullableFloatFieldUpdateOperationsInput | number | null
    fatorRocha?: NullableFloatFieldUpdateOperationsInput | number | null
    condutHidraulicaSaturada?: NullableFloatFieldUpdateOperationsInput | number | null
    densidadeAparente?: NullableFloatFieldUpdateOperationsInput | number | null
    agua0Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua13Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua15Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historico?: HistoricoUpdateManyWithoutSoloNestedInput
    propriedadeSolo?: PropriedadeSoloUpdateManyWithoutSoloNestedInput
    Simulacao?: SimulacaoUpdateManyWithoutSoloNestedInput
  }

  export type SoloUncheckedUpdateInput = {
    nomeClasse?: StringFieldUpdateOperationsInput | string
    profundidade?: NullableFloatFieldUpdateOperationsInput | number | null
    fatorRocha?: NullableFloatFieldUpdateOperationsInput | number | null
    condutHidraulicaSaturada?: NullableFloatFieldUpdateOperationsInput | number | null
    densidadeAparente?: NullableFloatFieldUpdateOperationsInput | number | null
    agua0Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua13Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua15Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historico?: HistoricoUncheckedUpdateManyWithoutSoloNestedInput
    propriedadeSolo?: PropriedadeSoloUncheckedUpdateManyWithoutSoloNestedInput
    Simulacao?: SimulacaoUncheckedUpdateManyWithoutSoloNestedInput
  }

  export type SoloCreateManyInput = {
    id?: string
    nomeClasse: string
    profundidade?: number | null
    fatorRocha?: number | null
    condutHidraulicaSaturada?: number | null
    densidadeAparente?: number | null
    agua0Bar?: number | null
    agua13Bar?: number | null
    agua15Bar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type SoloUpdateManyMutationInput = {
    nomeClasse?: StringFieldUpdateOperationsInput | string
    profundidade?: NullableFloatFieldUpdateOperationsInput | number | null
    fatorRocha?: NullableFloatFieldUpdateOperationsInput | number | null
    condutHidraulicaSaturada?: NullableFloatFieldUpdateOperationsInput | number | null
    densidadeAparente?: NullableFloatFieldUpdateOperationsInput | number | null
    agua0Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua13Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua15Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SoloUncheckedUpdateManyInput = {
    nomeClasse?: StringFieldUpdateOperationsInput | string
    profundidade?: NullableFloatFieldUpdateOperationsInput | number | null
    fatorRocha?: NullableFloatFieldUpdateOperationsInput | number | null
    condutHidraulicaSaturada?: NullableFloatFieldUpdateOperationsInput | number | null
    densidadeAparente?: NullableFloatFieldUpdateOperationsInput | number | null
    agua0Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua13Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua15Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EstimativasCreateInput = {
    id?: string
    valorTotal?: number | null
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    simulacao?: SimulacaoCreateNestedOneWithoutEstimativasInput
    propriedade?: PropriedadeCreateNestedOneWithoutEstimativasInput
  }

  export type EstimativasUncheckedCreateInput = {
    id?: string
    valorTotal?: number | null
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId?: string | null
    simulacaoId: string
  }

  export type EstimativasUpdateInput = {
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    simulacao?: SimulacaoUpdateOneWithoutEstimativasNestedInput
    propriedade?: PropriedadeUpdateOneWithoutEstimativasNestedInput
  }

  export type EstimativasUncheckedUpdateInput = {
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: NullableStringFieldUpdateOperationsInput | string | null
    simulacaoId?: StringFieldUpdateOperationsInput | string
  }

  export type EstimativasCreateManyInput = {
    id?: string
    valorTotal?: number | null
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId?: string | null
    simulacaoId: string
  }

  export type EstimativasUpdateManyMutationInput = {
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EstimativasUncheckedUpdateManyInput = {
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: NullableStringFieldUpdateOperationsInput | string | null
    simulacaoId?: StringFieldUpdateOperationsInput | string
  }

  export type SimulacaoCreateInput = {
    id?: string
    nomeSimulacao: string
    ano: number
    eto?: number | null
    indiceAridez?: number | null
    precipitacaoMmAno?: number | null
    numeroChuvas?: number | null
    precipitacaoMmDia?: number | null
    cvDia?: number | null
    precipitacaoMmMes?: number | null
    cvMes?: number | null
    altitude?: number | null
    temperaturaMed?: number | null
    umidade?: number | null
    resultado?: number | null
    dataSimulacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    cultura: CulturaCreateNestedOneWithoutSimulacaoInput
    solo: SoloCreateNestedOneWithoutSimulacaoInput
    propriedade: PropriedadeCreateNestedOneWithoutSimulacoesInput
    historicos?: HistoricoCreateNestedManyWithoutSimulacaoInput
    Estimativas?: EstimativasCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoUncheckedCreateInput = {
    id?: string
    nomeSimulacao: string
    ano: number
    culturaId: string
    soloId: string
    propriedadeId: string
    eto?: number | null
    indiceAridez?: number | null
    precipitacaoMmAno?: number | null
    numeroChuvas?: number | null
    precipitacaoMmDia?: number | null
    cvDia?: number | null
    precipitacaoMmMes?: number | null
    cvMes?: number | null
    altitude?: number | null
    temperaturaMed?: number | null
    umidade?: number | null
    resultado?: number | null
    dataSimulacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    historicos?: HistoricoUncheckedCreateNestedManyWithoutSimulacaoInput
    Estimativas?: EstimativasUncheckedCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoUpdateInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cultura?: CulturaUpdateOneRequiredWithoutSimulacaoNestedInput
    solo?: SoloUpdateOneRequiredWithoutSimulacaoNestedInput
    propriedade?: PropriedadeUpdateOneRequiredWithoutSimulacoesNestedInput
    historicos?: HistoricoUpdateManyWithoutSimulacaoNestedInput
    Estimativas?: EstimativasUpdateManyWithoutSimulacaoNestedInput
  }

  export type SimulacaoUncheckedUpdateInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    culturaId?: StringFieldUpdateOperationsInput | string
    soloId?: StringFieldUpdateOperationsInput | string
    propriedadeId?: StringFieldUpdateOperationsInput | string
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historicos?: HistoricoUncheckedUpdateManyWithoutSimulacaoNestedInput
    Estimativas?: EstimativasUncheckedUpdateManyWithoutSimulacaoNestedInput
  }

  export type SimulacaoCreateManyInput = {
    id?: string
    nomeSimulacao: string
    ano: number
    culturaId: string
    soloId: string
    propriedadeId: string
    eto?: number | null
    indiceAridez?: number | null
    precipitacaoMmAno?: number | null
    numeroChuvas?: number | null
    precipitacaoMmDia?: number | null
    cvDia?: number | null
    precipitacaoMmMes?: number | null
    cvMes?: number | null
    altitude?: number | null
    temperaturaMed?: number | null
    umidade?: number | null
    resultado?: number | null
    dataSimulacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SimulacaoUpdateManyMutationInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SimulacaoUncheckedUpdateManyInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    culturaId?: StringFieldUpdateOperationsInput | string
    soloId?: StringFieldUpdateOperationsInput | string
    propriedadeId?: StringFieldUpdateOperationsInput | string
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CulturaCreateInput = {
    id?: string
    name: string
    eua?: number | null
    codigo?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    PropriedadeCultura?: PropriedadeCulturaCreateNestedManyWithoutCulturaInput
    Simulacao?: SimulacaoCreateNestedManyWithoutCulturaInput
  }

  export type CulturaUncheckedCreateInput = {
    id?: string
    name: string
    eua?: number | null
    codigo?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    PropriedadeCultura?: PropriedadeCulturaUncheckedCreateNestedManyWithoutCulturaInput
    Simulacao?: SimulacaoUncheckedCreateNestedManyWithoutCulturaInput
  }

  export type CulturaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    eua?: NullableFloatFieldUpdateOperationsInput | number | null
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PropriedadeCultura?: PropriedadeCulturaUpdateManyWithoutCulturaNestedInput
    Simulacao?: SimulacaoUpdateManyWithoutCulturaNestedInput
  }

  export type CulturaUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    eua?: NullableFloatFieldUpdateOperationsInput | number | null
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PropriedadeCultura?: PropriedadeCulturaUncheckedUpdateManyWithoutCulturaNestedInput
    Simulacao?: SimulacaoUncheckedUpdateManyWithoutCulturaNestedInput
  }

  export type CulturaCreateManyInput = {
    id?: string
    name: string
    eua?: number | null
    codigo?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CulturaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    eua?: NullableFloatFieldUpdateOperationsInput | number | null
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CulturaUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    eua?: NullableFloatFieldUpdateOperationsInput | number | null
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumTipoUsuarioEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuarioEnum | EnumTipoUsuarioEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuarioEnum[] | ListEnumTipoUsuarioEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuarioEnum[] | ListEnumTipoUsuarioEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioEnumFilter<$PrismaModel> | $Enums.TipoUsuarioEnum
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type PropriedadeListRelationFilter = {
    every?: PropriedadeWhereInput
    some?: PropriedadeWhereInput
    none?: PropriedadeWhereInput
  }

  export type PropriedadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    ativado?: SortOrder
    tipoUsuario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    ativado?: SortOrder
    tipoUsuario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    ativado?: SortOrder
    tipoUsuario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
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

  export type EnumTipoUsuarioEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuarioEnum | EnumTipoUsuarioEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuarioEnum[] | ListEnumTipoUsuarioEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuarioEnum[] | ListEnumTipoUsuarioEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioEnumWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuarioEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioEnumFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioEnumFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
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

  export type EstimativasListRelationFilter = {
    every?: EstimativasWhereInput
    some?: EstimativasWhereInput
    none?: EstimativasWhereInput
  }

  export type PropriedadeCulturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropriedadeSoloOrderByRelationAggregateInput = {
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

  export type EstimativasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropriedadeCountOrderByAggregateInput = {
    id?: SortOrder
    nomePropriedade?: SortOrder
    nomeResponsavel?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropriedadeAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PropriedadeMaxOrderByAggregateInput = {
    id?: SortOrder
    nomePropriedade?: SortOrder
    nomeResponsavel?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropriedadeMinOrderByAggregateInput = {
    id?: SortOrder
    nomePropriedade?: SortOrder
    nomeResponsavel?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropriedadeSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
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
    propriedadeId: string
    culturaId: string
  }

  export type PropriedadeCulturaCountOrderByAggregateInput = {
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

  export type SoloScalarRelationFilter = {
    is?: SoloWhereInput
    isNot?: SoloWhereInput
  }

  export type PropriedadeSoloPropriedadeIdSoloIdCompoundUniqueInput = {
    propriedadeId: string
    soloId: string
  }

  export type PropriedadeSoloCountOrderByAggregateInput = {
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

  export type SimulacaoScalarRelationFilter = {
    is?: SimulacaoWhereInput
    isNot?: SimulacaoWhereInput
  }

  export type PropriedadeNullableScalarRelationFilter = {
    is?: PropriedadeWhereInput | null
    isNot?: PropriedadeWhereInput | null
  }

  export type PrecipitacaoNullableScalarRelationFilter = {
    is?: PrecipitacaoWhereInput | null
    isNot?: PrecipitacaoWhereInput | null
  }

  export type SoloNullableScalarRelationFilter = {
    is?: SoloWhereInput | null
    isNot?: SoloWhereInput | null
  }

  export type HistoricoCountOrderByAggregateInput = {
    id?: SortOrder
    simulacaoId?: SortOrder
    observacao?: SortOrder
    propriedadeId?: SortOrder
    precipitacaoId?: SortOrder
    soloId?: SortOrder
    createdAt?: SortOrder
  }

  export type HistoricoMaxOrderByAggregateInput = {
    id?: SortOrder
    simulacaoId?: SortOrder
    observacao?: SortOrder
    propriedadeId?: SortOrder
    precipitacaoId?: SortOrder
    soloId?: SortOrder
    createdAt?: SortOrder
  }

  export type HistoricoMinOrderByAggregateInput = {
    id?: SortOrder
    simulacaoId?: SortOrder
    observacao?: SortOrder
    propriedadeId?: SortOrder
    precipitacaoId?: SortOrder
    soloId?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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
    mmAno?: SortOrder
    chuvas?: SortOrder
    mmDia?: SortOrder
    cvDia?: SortOrder
    mmMes?: SortOrder
    cvMes?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
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
  }

  export type SoloAvgOrderByAggregateInput = {
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
  }

  export type SoloSumOrderByAggregateInput = {
    profundidade?: SortOrder
    fatorRocha?: SortOrder
    condutHidraulicaSaturada?: SortOrder
    densidadeAparente?: SortOrder
    agua0Bar?: SortOrder
    agua13Bar?: SortOrder
    agua15Bar?: SortOrder
  }

  export type SimulacaoNullableScalarRelationFilter = {
    is?: SimulacaoWhereInput | null
    isNot?: SimulacaoWhereInput | null
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
    valorTotal?: SortOrder
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
    valorTotal?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SimulacaoCountOrderByAggregateInput = {
    id?: SortOrder
    nomeSimulacao?: SortOrder
    ano?: SortOrder
    culturaId?: SortOrder
    soloId?: SortOrder
    propriedadeId?: SortOrder
    eto?: SortOrder
    indiceAridez?: SortOrder
    precipitacaoMmAno?: SortOrder
    numeroChuvas?: SortOrder
    precipitacaoMmDia?: SortOrder
    cvDia?: SortOrder
    precipitacaoMmMes?: SortOrder
    cvMes?: SortOrder
    altitude?: SortOrder
    temperaturaMed?: SortOrder
    umidade?: SortOrder
    resultado?: SortOrder
    dataSimulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SimulacaoAvgOrderByAggregateInput = {
    ano?: SortOrder
    eto?: SortOrder
    indiceAridez?: SortOrder
    precipitacaoMmAno?: SortOrder
    numeroChuvas?: SortOrder
    precipitacaoMmDia?: SortOrder
    cvDia?: SortOrder
    precipitacaoMmMes?: SortOrder
    cvMes?: SortOrder
    altitude?: SortOrder
    temperaturaMed?: SortOrder
    umidade?: SortOrder
    resultado?: SortOrder
  }

  export type SimulacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeSimulacao?: SortOrder
    ano?: SortOrder
    culturaId?: SortOrder
    soloId?: SortOrder
    propriedadeId?: SortOrder
    eto?: SortOrder
    indiceAridez?: SortOrder
    precipitacaoMmAno?: SortOrder
    numeroChuvas?: SortOrder
    precipitacaoMmDia?: SortOrder
    cvDia?: SortOrder
    precipitacaoMmMes?: SortOrder
    cvMes?: SortOrder
    altitude?: SortOrder
    temperaturaMed?: SortOrder
    umidade?: SortOrder
    resultado?: SortOrder
    dataSimulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SimulacaoMinOrderByAggregateInput = {
    id?: SortOrder
    nomeSimulacao?: SortOrder
    ano?: SortOrder
    culturaId?: SortOrder
    soloId?: SortOrder
    propriedadeId?: SortOrder
    eto?: SortOrder
    indiceAridez?: SortOrder
    precipitacaoMmAno?: SortOrder
    numeroChuvas?: SortOrder
    precipitacaoMmDia?: SortOrder
    cvDia?: SortOrder
    precipitacaoMmMes?: SortOrder
    cvMes?: SortOrder
    altitude?: SortOrder
    temperaturaMed?: SortOrder
    umidade?: SortOrder
    resultado?: SortOrder
    dataSimulacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SimulacaoSumOrderByAggregateInput = {
    ano?: SortOrder
    eto?: SortOrder
    indiceAridez?: SortOrder
    precipitacaoMmAno?: SortOrder
    numeroChuvas?: SortOrder
    precipitacaoMmDia?: SortOrder
    cvDia?: SortOrder
    precipitacaoMmMes?: SortOrder
    cvMes?: SortOrder
    altitude?: SortOrder
    temperaturaMed?: SortOrder
    umidade?: SortOrder
    resultado?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type CulturaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    eua?: SortOrder
    codigo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CulturaAvgOrderByAggregateInput = {
    eua?: SortOrder
    codigo?: SortOrder
  }

  export type CulturaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    eua?: SortOrder
    codigo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CulturaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    eua?: SortOrder
    codigo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CulturaSumOrderByAggregateInput = {
    eua?: SortOrder
    codigo?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type PropriedadeCreateNestedManyWithoutAdminInput = {
    create?: XOR<PropriedadeCreateWithoutAdminInput, PropriedadeUncheckedCreateWithoutAdminInput> | PropriedadeCreateWithoutAdminInput[] | PropriedadeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PropriedadeCreateOrConnectWithoutAdminInput | PropriedadeCreateOrConnectWithoutAdminInput[]
    createMany?: PropriedadeCreateManyAdminInputEnvelope
    connect?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
  }

  export type PropriedadeUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<PropriedadeCreateWithoutAdminInput, PropriedadeUncheckedCreateWithoutAdminInput> | PropriedadeCreateWithoutAdminInput[] | PropriedadeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PropriedadeCreateOrConnectWithoutAdminInput | PropriedadeCreateOrConnectWithoutAdminInput[]
    createMany?: PropriedadeCreateManyAdminInputEnvelope
    connect?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumTipoUsuarioEnumFieldUpdateOperationsInput = {
    set?: $Enums.TipoUsuarioEnum
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type PropriedadeUpdateManyWithoutAdminNestedInput = {
    create?: XOR<PropriedadeCreateWithoutAdminInput, PropriedadeUncheckedCreateWithoutAdminInput> | PropriedadeCreateWithoutAdminInput[] | PropriedadeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PropriedadeCreateOrConnectWithoutAdminInput | PropriedadeCreateOrConnectWithoutAdminInput[]
    upsert?: PropriedadeUpsertWithWhereUniqueWithoutAdminInput | PropriedadeUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: PropriedadeCreateManyAdminInputEnvelope
    set?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
    disconnect?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
    delete?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
    connect?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
    update?: PropriedadeUpdateWithWhereUniqueWithoutAdminInput | PropriedadeUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: PropriedadeUpdateManyWithWhereWithoutAdminInput | PropriedadeUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: PropriedadeScalarWhereInput | PropriedadeScalarWhereInput[]
  }

  export type PropriedadeUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<PropriedadeCreateWithoutAdminInput, PropriedadeUncheckedCreateWithoutAdminInput> | PropriedadeCreateWithoutAdminInput[] | PropriedadeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PropriedadeCreateOrConnectWithoutAdminInput | PropriedadeCreateOrConnectWithoutAdminInput[]
    upsert?: PropriedadeUpsertWithWhereUniqueWithoutAdminInput | PropriedadeUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: PropriedadeCreateManyAdminInputEnvelope
    set?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
    disconnect?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
    delete?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
    connect?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
    update?: PropriedadeUpdateWithWhereUniqueWithoutAdminInput | PropriedadeUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: PropriedadeUpdateManyWithWhereWithoutAdminInput | PropriedadeUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: PropriedadeScalarWhereInput | PropriedadeScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutPropriedadesInput = {
    create?: XOR<AdminCreateWithoutPropriedadesInput, AdminUncheckedCreateWithoutPropriedadesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutPropriedadesInput
    connect?: AdminWhereUniqueInput
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

  export type EstimativasCreateNestedManyWithoutPropriedadeInput = {
    create?: XOR<EstimativasCreateWithoutPropriedadeInput, EstimativasUncheckedCreateWithoutPropriedadeInput> | EstimativasCreateWithoutPropriedadeInput[] | EstimativasUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: EstimativasCreateOrConnectWithoutPropriedadeInput | EstimativasCreateOrConnectWithoutPropriedadeInput[]
    createMany?: EstimativasCreateManyPropriedadeInputEnvelope
    connect?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
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

  export type EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput = {
    create?: XOR<EstimativasCreateWithoutPropriedadeInput, EstimativasUncheckedCreateWithoutPropriedadeInput> | EstimativasCreateWithoutPropriedadeInput[] | EstimativasUncheckedCreateWithoutPropriedadeInput[]
    connectOrCreate?: EstimativasCreateOrConnectWithoutPropriedadeInput | EstimativasCreateOrConnectWithoutPropriedadeInput[]
    createMany?: EstimativasCreateManyPropriedadeInputEnvelope
    connect?: EstimativasWhereUniqueInput | EstimativasWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdminUpdateOneWithoutPropriedadesNestedInput = {
    create?: XOR<AdminCreateWithoutPropriedadesInput, AdminUncheckedCreateWithoutPropriedadesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutPropriedadesInput
    upsert?: AdminUpsertWithoutPropriedadesInput
    disconnect?: boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutPropriedadesInput, AdminUpdateWithoutPropriedadesInput>, AdminUncheckedUpdateWithoutPropriedadesInput>
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
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

  export type PropriedadeCreateNestedOneWithoutCulturasInput = {
    create?: XOR<PropriedadeCreateWithoutCulturasInput, PropriedadeUncheckedCreateWithoutCulturasInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutCulturasInput
    connect?: PropriedadeWhereUniqueInput
  }

  export type CulturaCreateNestedOneWithoutPropriedadeCulturaInput = {
    create?: XOR<CulturaCreateWithoutPropriedadeCulturaInput, CulturaUncheckedCreateWithoutPropriedadeCulturaInput>
    connectOrCreate?: CulturaCreateOrConnectWithoutPropriedadeCulturaInput
    connect?: CulturaWhereUniqueInput
  }

  export type PropriedadeUpdateOneRequiredWithoutCulturasNestedInput = {
    create?: XOR<PropriedadeCreateWithoutCulturasInput, PropriedadeUncheckedCreateWithoutCulturasInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutCulturasInput
    upsert?: PropriedadeUpsertWithoutCulturasInput
    connect?: PropriedadeWhereUniqueInput
    update?: XOR<XOR<PropriedadeUpdateToOneWithWhereWithoutCulturasInput, PropriedadeUpdateWithoutCulturasInput>, PropriedadeUncheckedUpdateWithoutCulturasInput>
  }

  export type CulturaUpdateOneRequiredWithoutPropriedadeCulturaNestedInput = {
    create?: XOR<CulturaCreateWithoutPropriedadeCulturaInput, CulturaUncheckedCreateWithoutPropriedadeCulturaInput>
    connectOrCreate?: CulturaCreateOrConnectWithoutPropriedadeCulturaInput
    upsert?: CulturaUpsertWithoutPropriedadeCulturaInput
    connect?: CulturaWhereUniqueInput
    update?: XOR<XOR<CulturaUpdateToOneWithWhereWithoutPropriedadeCulturaInput, CulturaUpdateWithoutPropriedadeCulturaInput>, CulturaUncheckedUpdateWithoutPropriedadeCulturaInput>
  }

  export type PropriedadeCreateNestedOneWithoutSolosInput = {
    create?: XOR<PropriedadeCreateWithoutSolosInput, PropriedadeUncheckedCreateWithoutSolosInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutSolosInput
    connect?: PropriedadeWhereUniqueInput
  }

  export type SoloCreateNestedOneWithoutPropriedadeSoloInput = {
    create?: XOR<SoloCreateWithoutPropriedadeSoloInput, SoloUncheckedCreateWithoutPropriedadeSoloInput>
    connectOrCreate?: SoloCreateOrConnectWithoutPropriedadeSoloInput
    connect?: SoloWhereUniqueInput
  }

  export type PropriedadeUpdateOneRequiredWithoutSolosNestedInput = {
    create?: XOR<PropriedadeCreateWithoutSolosInput, PropriedadeUncheckedCreateWithoutSolosInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutSolosInput
    upsert?: PropriedadeUpsertWithoutSolosInput
    connect?: PropriedadeWhereUniqueInput
    update?: XOR<XOR<PropriedadeUpdateToOneWithWhereWithoutSolosInput, PropriedadeUpdateWithoutSolosInput>, PropriedadeUncheckedUpdateWithoutSolosInput>
  }

  export type SoloUpdateOneRequiredWithoutPropriedadeSoloNestedInput = {
    create?: XOR<SoloCreateWithoutPropriedadeSoloInput, SoloUncheckedCreateWithoutPropriedadeSoloInput>
    connectOrCreate?: SoloCreateOrConnectWithoutPropriedadeSoloInput
    upsert?: SoloUpsertWithoutPropriedadeSoloInput
    connect?: SoloWhereUniqueInput
    update?: XOR<XOR<SoloUpdateToOneWithWhereWithoutPropriedadeSoloInput, SoloUpdateWithoutPropriedadeSoloInput>, SoloUncheckedUpdateWithoutPropriedadeSoloInput>
  }

  export type SimulacaoCreateNestedOneWithoutHistoricosInput = {
    create?: XOR<SimulacaoCreateWithoutHistoricosInput, SimulacaoUncheckedCreateWithoutHistoricosInput>
    connectOrCreate?: SimulacaoCreateOrConnectWithoutHistoricosInput
    connect?: SimulacaoWhereUniqueInput
  }

  export type PropriedadeCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<PropriedadeCreateWithoutHistoricoInput, PropriedadeUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutHistoricoInput
    connect?: PropriedadeWhereUniqueInput
  }

  export type PrecipitacaoCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<PrecipitacaoCreateWithoutHistoricoInput, PrecipitacaoUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: PrecipitacaoCreateOrConnectWithoutHistoricoInput
    connect?: PrecipitacaoWhereUniqueInput
  }

  export type SoloCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<SoloCreateWithoutHistoricoInput, SoloUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: SoloCreateOrConnectWithoutHistoricoInput
    connect?: SoloWhereUniqueInput
  }

  export type SimulacaoUpdateOneRequiredWithoutHistoricosNestedInput = {
    create?: XOR<SimulacaoCreateWithoutHistoricosInput, SimulacaoUncheckedCreateWithoutHistoricosInput>
    connectOrCreate?: SimulacaoCreateOrConnectWithoutHistoricosInput
    upsert?: SimulacaoUpsertWithoutHistoricosInput
    connect?: SimulacaoWhereUniqueInput
    update?: XOR<XOR<SimulacaoUpdateToOneWithWhereWithoutHistoricosInput, SimulacaoUpdateWithoutHistoricosInput>, SimulacaoUncheckedUpdateWithoutHistoricosInput>
  }

  export type PropriedadeUpdateOneWithoutHistoricoNestedInput = {
    create?: XOR<PropriedadeCreateWithoutHistoricoInput, PropriedadeUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutHistoricoInput
    upsert?: PropriedadeUpsertWithoutHistoricoInput
    disconnect?: boolean
    delete?: PropriedadeWhereInput | boolean
    connect?: PropriedadeWhereUniqueInput
    update?: XOR<XOR<PropriedadeUpdateToOneWithWhereWithoutHistoricoInput, PropriedadeUpdateWithoutHistoricoInput>, PropriedadeUncheckedUpdateWithoutHistoricoInput>
  }

  export type PrecipitacaoUpdateOneWithoutHistoricoNestedInput = {
    create?: XOR<PrecipitacaoCreateWithoutHistoricoInput, PrecipitacaoUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: PrecipitacaoCreateOrConnectWithoutHistoricoInput
    upsert?: PrecipitacaoUpsertWithoutHistoricoInput
    disconnect?: boolean
    delete?: PrecipitacaoWhereInput | boolean
    connect?: PrecipitacaoWhereUniqueInput
    update?: XOR<XOR<PrecipitacaoUpdateToOneWithWhereWithoutHistoricoInput, PrecipitacaoUpdateWithoutHistoricoInput>, PrecipitacaoUncheckedUpdateWithoutHistoricoInput>
  }

  export type SoloUpdateOneWithoutHistoricoNestedInput = {
    create?: XOR<SoloCreateWithoutHistoricoInput, SoloUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: SoloCreateOrConnectWithoutHistoricoInput
    upsert?: SoloUpsertWithoutHistoricoInput
    disconnect?: boolean
    delete?: SoloWhereInput | boolean
    connect?: SoloWhereUniqueInput
    update?: XOR<XOR<SoloUpdateToOneWithWhereWithoutHistoricoInput, SoloUpdateWithoutHistoricoInput>, SoloUncheckedUpdateWithoutHistoricoInput>
  }

  export type PropriedadeCreateNestedOneWithoutPrecipitacaoInput = {
    create?: XOR<PropriedadeCreateWithoutPrecipitacaoInput, PropriedadeUncheckedCreateWithoutPrecipitacaoInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutPrecipitacaoInput
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

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type PropriedadeUpdateOneRequiredWithoutPrecipitacaoNestedInput = {
    create?: XOR<PropriedadeCreateWithoutPrecipitacaoInput, PropriedadeUncheckedCreateWithoutPrecipitacaoInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutPrecipitacaoInput
    upsert?: PropriedadeUpsertWithoutPrecipitacaoInput
    connect?: PropriedadeWhereUniqueInput
    update?: XOR<XOR<PropriedadeUpdateToOneWithWhereWithoutPrecipitacaoInput, PropriedadeUpdateWithoutPrecipitacaoInput>, PropriedadeUncheckedUpdateWithoutPrecipitacaoInput>
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

  export type SimulacaoCreateNestedManyWithoutSoloInput = {
    create?: XOR<SimulacaoCreateWithoutSoloInput, SimulacaoUncheckedCreateWithoutSoloInput> | SimulacaoCreateWithoutSoloInput[] | SimulacaoUncheckedCreateWithoutSoloInput[]
    connectOrCreate?: SimulacaoCreateOrConnectWithoutSoloInput | SimulacaoCreateOrConnectWithoutSoloInput[]
    createMany?: SimulacaoCreateManySoloInputEnvelope
    connect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
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

  export type SimulacaoUncheckedCreateNestedManyWithoutSoloInput = {
    create?: XOR<SimulacaoCreateWithoutSoloInput, SimulacaoUncheckedCreateWithoutSoloInput> | SimulacaoCreateWithoutSoloInput[] | SimulacaoUncheckedCreateWithoutSoloInput[]
    connectOrCreate?: SimulacaoCreateOrConnectWithoutSoloInput | SimulacaoCreateOrConnectWithoutSoloInput[]
    createMany?: SimulacaoCreateManySoloInputEnvelope
    connect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
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

  export type SimulacaoUpdateManyWithoutSoloNestedInput = {
    create?: XOR<SimulacaoCreateWithoutSoloInput, SimulacaoUncheckedCreateWithoutSoloInput> | SimulacaoCreateWithoutSoloInput[] | SimulacaoUncheckedCreateWithoutSoloInput[]
    connectOrCreate?: SimulacaoCreateOrConnectWithoutSoloInput | SimulacaoCreateOrConnectWithoutSoloInput[]
    upsert?: SimulacaoUpsertWithWhereUniqueWithoutSoloInput | SimulacaoUpsertWithWhereUniqueWithoutSoloInput[]
    createMany?: SimulacaoCreateManySoloInputEnvelope
    set?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    disconnect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    delete?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    connect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    update?: SimulacaoUpdateWithWhereUniqueWithoutSoloInput | SimulacaoUpdateWithWhereUniqueWithoutSoloInput[]
    updateMany?: SimulacaoUpdateManyWithWhereWithoutSoloInput | SimulacaoUpdateManyWithWhereWithoutSoloInput[]
    deleteMany?: SimulacaoScalarWhereInput | SimulacaoScalarWhereInput[]
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

  export type SimulacaoUncheckedUpdateManyWithoutSoloNestedInput = {
    create?: XOR<SimulacaoCreateWithoutSoloInput, SimulacaoUncheckedCreateWithoutSoloInput> | SimulacaoCreateWithoutSoloInput[] | SimulacaoUncheckedCreateWithoutSoloInput[]
    connectOrCreate?: SimulacaoCreateOrConnectWithoutSoloInput | SimulacaoCreateOrConnectWithoutSoloInput[]
    upsert?: SimulacaoUpsertWithWhereUniqueWithoutSoloInput | SimulacaoUpsertWithWhereUniqueWithoutSoloInput[]
    createMany?: SimulacaoCreateManySoloInputEnvelope
    set?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    disconnect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    delete?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    connect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    update?: SimulacaoUpdateWithWhereUniqueWithoutSoloInput | SimulacaoUpdateWithWhereUniqueWithoutSoloInput[]
    updateMany?: SimulacaoUpdateManyWithWhereWithoutSoloInput | SimulacaoUpdateManyWithWhereWithoutSoloInput[]
    deleteMany?: SimulacaoScalarWhereInput | SimulacaoScalarWhereInput[]
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

  export type SimulacaoUpdateOneWithoutEstimativasNestedInput = {
    create?: XOR<SimulacaoCreateWithoutEstimativasInput, SimulacaoUncheckedCreateWithoutEstimativasInput>
    connectOrCreate?: SimulacaoCreateOrConnectWithoutEstimativasInput
    upsert?: SimulacaoUpsertWithoutEstimativasInput
    disconnect?: boolean
    delete?: SimulacaoWhereInput | boolean
    connect?: SimulacaoWhereUniqueInput
    update?: XOR<XOR<SimulacaoUpdateToOneWithWhereWithoutEstimativasInput, SimulacaoUpdateWithoutEstimativasInput>, SimulacaoUncheckedUpdateWithoutEstimativasInput>
  }

  export type PropriedadeUpdateOneWithoutEstimativasNestedInput = {
    create?: XOR<PropriedadeCreateWithoutEstimativasInput, PropriedadeUncheckedCreateWithoutEstimativasInput>
    connectOrCreate?: PropriedadeCreateOrConnectWithoutEstimativasInput
    upsert?: PropriedadeUpsertWithoutEstimativasInput
    disconnect?: boolean
    delete?: PropriedadeWhereInput | boolean
    connect?: PropriedadeWhereUniqueInput
    update?: XOR<XOR<PropriedadeUpdateToOneWithWhereWithoutEstimativasInput, PropriedadeUpdateWithoutEstimativasInput>, PropriedadeUncheckedUpdateWithoutEstimativasInput>
  }

  export type CulturaCreateNestedOneWithoutSimulacaoInput = {
    create?: XOR<CulturaCreateWithoutSimulacaoInput, CulturaUncheckedCreateWithoutSimulacaoInput>
    connectOrCreate?: CulturaCreateOrConnectWithoutSimulacaoInput
    connect?: CulturaWhereUniqueInput
  }

  export type SoloCreateNestedOneWithoutSimulacaoInput = {
    create?: XOR<SoloCreateWithoutSimulacaoInput, SoloUncheckedCreateWithoutSimulacaoInput>
    connectOrCreate?: SoloCreateOrConnectWithoutSimulacaoInput
    connect?: SoloWhereUniqueInput
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CulturaUpdateOneRequiredWithoutSimulacaoNestedInput = {
    create?: XOR<CulturaCreateWithoutSimulacaoInput, CulturaUncheckedCreateWithoutSimulacaoInput>
    connectOrCreate?: CulturaCreateOrConnectWithoutSimulacaoInput
    upsert?: CulturaUpsertWithoutSimulacaoInput
    connect?: CulturaWhereUniqueInput
    update?: XOR<XOR<CulturaUpdateToOneWithWhereWithoutSimulacaoInput, CulturaUpdateWithoutSimulacaoInput>, CulturaUncheckedUpdateWithoutSimulacaoInput>
  }

  export type SoloUpdateOneRequiredWithoutSimulacaoNestedInput = {
    create?: XOR<SoloCreateWithoutSimulacaoInput, SoloUncheckedCreateWithoutSimulacaoInput>
    connectOrCreate?: SoloCreateOrConnectWithoutSimulacaoInput
    upsert?: SoloUpsertWithoutSimulacaoInput
    connect?: SoloWhereUniqueInput
    update?: XOR<XOR<SoloUpdateToOneWithWhereWithoutSimulacaoInput, SoloUpdateWithoutSimulacaoInput>, SoloUncheckedUpdateWithoutSimulacaoInput>
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

  export type SimulacaoCreateNestedManyWithoutCulturaInput = {
    create?: XOR<SimulacaoCreateWithoutCulturaInput, SimulacaoUncheckedCreateWithoutCulturaInput> | SimulacaoCreateWithoutCulturaInput[] | SimulacaoUncheckedCreateWithoutCulturaInput[]
    connectOrCreate?: SimulacaoCreateOrConnectWithoutCulturaInput | SimulacaoCreateOrConnectWithoutCulturaInput[]
    createMany?: SimulacaoCreateManyCulturaInputEnvelope
    connect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
  }

  export type PropriedadeCulturaUncheckedCreateNestedManyWithoutCulturaInput = {
    create?: XOR<PropriedadeCulturaCreateWithoutCulturaInput, PropriedadeCulturaUncheckedCreateWithoutCulturaInput> | PropriedadeCulturaCreateWithoutCulturaInput[] | PropriedadeCulturaUncheckedCreateWithoutCulturaInput[]
    connectOrCreate?: PropriedadeCulturaCreateOrConnectWithoutCulturaInput | PropriedadeCulturaCreateOrConnectWithoutCulturaInput[]
    createMany?: PropriedadeCulturaCreateManyCulturaInputEnvelope
    connect?: PropriedadeCulturaWhereUniqueInput | PropriedadeCulturaWhereUniqueInput[]
  }

  export type SimulacaoUncheckedCreateNestedManyWithoutCulturaInput = {
    create?: XOR<SimulacaoCreateWithoutCulturaInput, SimulacaoUncheckedCreateWithoutCulturaInput> | SimulacaoCreateWithoutCulturaInput[] | SimulacaoUncheckedCreateWithoutCulturaInput[]
    connectOrCreate?: SimulacaoCreateOrConnectWithoutCulturaInput | SimulacaoCreateOrConnectWithoutCulturaInput[]
    createMany?: SimulacaoCreateManyCulturaInputEnvelope
    connect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
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

  export type SimulacaoUpdateManyWithoutCulturaNestedInput = {
    create?: XOR<SimulacaoCreateWithoutCulturaInput, SimulacaoUncheckedCreateWithoutCulturaInput> | SimulacaoCreateWithoutCulturaInput[] | SimulacaoUncheckedCreateWithoutCulturaInput[]
    connectOrCreate?: SimulacaoCreateOrConnectWithoutCulturaInput | SimulacaoCreateOrConnectWithoutCulturaInput[]
    upsert?: SimulacaoUpsertWithWhereUniqueWithoutCulturaInput | SimulacaoUpsertWithWhereUniqueWithoutCulturaInput[]
    createMany?: SimulacaoCreateManyCulturaInputEnvelope
    set?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    disconnect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    delete?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    connect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    update?: SimulacaoUpdateWithWhereUniqueWithoutCulturaInput | SimulacaoUpdateWithWhereUniqueWithoutCulturaInput[]
    updateMany?: SimulacaoUpdateManyWithWhereWithoutCulturaInput | SimulacaoUpdateManyWithWhereWithoutCulturaInput[]
    deleteMany?: SimulacaoScalarWhereInput | SimulacaoScalarWhereInput[]
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

  export type SimulacaoUncheckedUpdateManyWithoutCulturaNestedInput = {
    create?: XOR<SimulacaoCreateWithoutCulturaInput, SimulacaoUncheckedCreateWithoutCulturaInput> | SimulacaoCreateWithoutCulturaInput[] | SimulacaoUncheckedCreateWithoutCulturaInput[]
    connectOrCreate?: SimulacaoCreateOrConnectWithoutCulturaInput | SimulacaoCreateOrConnectWithoutCulturaInput[]
    upsert?: SimulacaoUpsertWithWhereUniqueWithoutCulturaInput | SimulacaoUpsertWithWhereUniqueWithoutCulturaInput[]
    createMany?: SimulacaoCreateManyCulturaInputEnvelope
    set?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    disconnect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    delete?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    connect?: SimulacaoWhereUniqueInput | SimulacaoWhereUniqueInput[]
    update?: SimulacaoUpdateWithWhereUniqueWithoutCulturaInput | SimulacaoUpdateWithWhereUniqueWithoutCulturaInput[]
    updateMany?: SimulacaoUpdateManyWithWhereWithoutCulturaInput | SimulacaoUpdateManyWithWhereWithoutCulturaInput[]
    deleteMany?: SimulacaoScalarWhereInput | SimulacaoScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTipoUsuarioEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuarioEnum | EnumTipoUsuarioEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuarioEnum[] | ListEnumTipoUsuarioEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuarioEnum[] | ListEnumTipoUsuarioEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioEnumFilter<$PrismaModel> | $Enums.TipoUsuarioEnum
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTipoUsuarioEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuarioEnum | EnumTipoUsuarioEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuarioEnum[] | ListEnumTipoUsuarioEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuarioEnum[] | ListEnumTipoUsuarioEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioEnumWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuarioEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioEnumFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioEnumFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type PropriedadeCreateWithoutAdminInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    culturas?: PropriedadeCulturaCreateNestedManyWithoutPropriedadeInput
    solos?: PropriedadeSoloCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    Historico?: HistoricoCreateNestedManyWithoutPropriedadeInput
    Precipitacao?: PrecipitacaoCreateNestedManyWithoutPropriedadeInput
    Estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutAdminInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    culturas?: PropriedadeCulturaUncheckedCreateNestedManyWithoutPropriedadeInput
    solos?: PropriedadeSoloUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    Historico?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
    Precipitacao?: PrecipitacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    Estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutAdminInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutAdminInput, PropriedadeUncheckedCreateWithoutAdminInput>
  }

  export type PropriedadeCreateManyAdminInputEnvelope = {
    data: PropriedadeCreateManyAdminInput | PropriedadeCreateManyAdminInput[]
  }

  export type PropriedadeUpsertWithWhereUniqueWithoutAdminInput = {
    where: PropriedadeWhereUniqueInput
    update: XOR<PropriedadeUpdateWithoutAdminInput, PropriedadeUncheckedUpdateWithoutAdminInput>
    create: XOR<PropriedadeCreateWithoutAdminInput, PropriedadeUncheckedCreateWithoutAdminInput>
  }

  export type PropriedadeUpdateWithWhereUniqueWithoutAdminInput = {
    where: PropriedadeWhereUniqueInput
    data: XOR<PropriedadeUpdateWithoutAdminInput, PropriedadeUncheckedUpdateWithoutAdminInput>
  }

  export type PropriedadeUpdateManyWithWhereWithoutAdminInput = {
    where: PropriedadeScalarWhereInput
    data: XOR<PropriedadeUpdateManyMutationInput, PropriedadeUncheckedUpdateManyWithoutAdminInput>
  }

  export type PropriedadeScalarWhereInput = {
    AND?: PropriedadeScalarWhereInput | PropriedadeScalarWhereInput[]
    OR?: PropriedadeScalarWhereInput[]
    NOT?: PropriedadeScalarWhereInput | PropriedadeScalarWhereInput[]
    id?: StringFilter<"Propriedade"> | string
    nomePropriedade?: StringFilter<"Propriedade"> | string
    nomeResponsavel?: StringFilter<"Propriedade"> | string
    latitude?: FloatFilter<"Propriedade"> | number
    longitude?: FloatFilter<"Propriedade"> | number
    adminId?: StringNullableFilter<"Propriedade"> | string | null
    createdAt?: DateTimeFilter<"Propriedade"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Propriedade"> | Date | string | null
  }

  export type AdminCreateWithoutPropriedadesInput = {
    id?: string
    nome: string
    email: string
    cpf: string
    senha: string
    ativado?: boolean
    tipoUsuario?: $Enums.TipoUsuarioEnum
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AdminUncheckedCreateWithoutPropriedadesInput = {
    id?: string
    nome: string
    email: string
    cpf: string
    senha: string
    ativado?: boolean
    tipoUsuario?: $Enums.TipoUsuarioEnum
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AdminCreateOrConnectWithoutPropriedadesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutPropriedadesInput, AdminUncheckedCreateWithoutPropriedadesInput>
  }

  export type PropriedadeCulturaCreateWithoutPropriedadeInput = {
    id?: string
    cultura: CulturaCreateNestedOneWithoutPropriedadeCulturaInput
  }

  export type PropriedadeCulturaUncheckedCreateWithoutPropriedadeInput = {
    id?: string
    culturaId: string
  }

  export type PropriedadeCulturaCreateOrConnectWithoutPropriedadeInput = {
    where: PropriedadeCulturaWhereUniqueInput
    create: XOR<PropriedadeCulturaCreateWithoutPropriedadeInput, PropriedadeCulturaUncheckedCreateWithoutPropriedadeInput>
  }

  export type PropriedadeCulturaCreateManyPropriedadeInputEnvelope = {
    data: PropriedadeCulturaCreateManyPropriedadeInput | PropriedadeCulturaCreateManyPropriedadeInput[]
  }

  export type PropriedadeSoloCreateWithoutPropriedadeInput = {
    id?: string
    solo: SoloCreateNestedOneWithoutPropriedadeSoloInput
  }

  export type PropriedadeSoloUncheckedCreateWithoutPropriedadeInput = {
    id?: string
    soloId: string
  }

  export type PropriedadeSoloCreateOrConnectWithoutPropriedadeInput = {
    where: PropriedadeSoloWhereUniqueInput
    create: XOR<PropriedadeSoloCreateWithoutPropriedadeInput, PropriedadeSoloUncheckedCreateWithoutPropriedadeInput>
  }

  export type PropriedadeSoloCreateManyPropriedadeInputEnvelope = {
    data: PropriedadeSoloCreateManyPropriedadeInput | PropriedadeSoloCreateManyPropriedadeInput[]
  }

  export type SimulacaoCreateWithoutPropriedadeInput = {
    id?: string
    nomeSimulacao: string
    ano: number
    eto?: number | null
    indiceAridez?: number | null
    precipitacaoMmAno?: number | null
    numeroChuvas?: number | null
    precipitacaoMmDia?: number | null
    cvDia?: number | null
    precipitacaoMmMes?: number | null
    cvMes?: number | null
    altitude?: number | null
    temperaturaMed?: number | null
    umidade?: number | null
    resultado?: number | null
    dataSimulacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    cultura: CulturaCreateNestedOneWithoutSimulacaoInput
    solo: SoloCreateNestedOneWithoutSimulacaoInput
    historicos?: HistoricoCreateNestedManyWithoutSimulacaoInput
    Estimativas?: EstimativasCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoUncheckedCreateWithoutPropriedadeInput = {
    id?: string
    nomeSimulacao: string
    ano: number
    culturaId: string
    soloId: string
    eto?: number | null
    indiceAridez?: number | null
    precipitacaoMmAno?: number | null
    numeroChuvas?: number | null
    precipitacaoMmDia?: number | null
    cvDia?: number | null
    precipitacaoMmMes?: number | null
    cvMes?: number | null
    altitude?: number | null
    temperaturaMed?: number | null
    umidade?: number | null
    resultado?: number | null
    dataSimulacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    historicos?: HistoricoUncheckedCreateNestedManyWithoutSimulacaoInput
    Estimativas?: EstimativasUncheckedCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoCreateOrConnectWithoutPropriedadeInput = {
    where: SimulacaoWhereUniqueInput
    create: XOR<SimulacaoCreateWithoutPropriedadeInput, SimulacaoUncheckedCreateWithoutPropriedadeInput>
  }

  export type SimulacaoCreateManyPropriedadeInputEnvelope = {
    data: SimulacaoCreateManyPropriedadeInput | SimulacaoCreateManyPropriedadeInput[]
  }

  export type HistoricoCreateWithoutPropriedadeInput = {
    id?: string
    observacao?: string | null
    createdAt?: Date | string
    simulacao: SimulacaoCreateNestedOneWithoutHistoricosInput
    Precipitacao?: PrecipitacaoCreateNestedOneWithoutHistoricoInput
    Solo?: SoloCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateWithoutPropriedadeInput = {
    id?: string
    simulacaoId: string
    observacao?: string | null
    precipitacaoId?: string | null
    soloId?: string | null
    createdAt?: Date | string
  }

  export type HistoricoCreateOrConnectWithoutPropriedadeInput = {
    where: HistoricoWhereUniqueInput
    create: XOR<HistoricoCreateWithoutPropriedadeInput, HistoricoUncheckedCreateWithoutPropriedadeInput>
  }

  export type HistoricoCreateManyPropriedadeInputEnvelope = {
    data: HistoricoCreateManyPropriedadeInput | HistoricoCreateManyPropriedadeInput[]
  }

  export type PrecipitacaoCreateWithoutPropriedadeInput = {
    id?: string
    mmAno?: number | null
    chuvas?: number | null
    mmDia?: number | null
    cvDia?: number | null
    mmMes?: number | null
    cvMes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    historico?: HistoricoCreateNestedManyWithoutPrecipitacaoInput
  }

  export type PrecipitacaoUncheckedCreateWithoutPropriedadeInput = {
    id?: string
    mmAno?: number | null
    chuvas?: number | null
    mmDia?: number | null
    cvDia?: number | null
    mmMes?: number | null
    cvMes?: number | null
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
  }

  export type EstimativasCreateWithoutPropriedadeInput = {
    id?: string
    valorTotal?: number | null
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    simulacao?: SimulacaoCreateNestedOneWithoutEstimativasInput
  }

  export type EstimativasUncheckedCreateWithoutPropriedadeInput = {
    id?: string
    valorTotal?: number | null
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    simulacaoId: string
  }

  export type EstimativasCreateOrConnectWithoutPropriedadeInput = {
    where: EstimativasWhereUniqueInput
    create: XOR<EstimativasCreateWithoutPropriedadeInput, EstimativasUncheckedCreateWithoutPropriedadeInput>
  }

  export type EstimativasCreateManyPropriedadeInputEnvelope = {
    data: EstimativasCreateManyPropriedadeInput | EstimativasCreateManyPropriedadeInput[]
  }

  export type AdminUpsertWithoutPropriedadesInput = {
    update: XOR<AdminUpdateWithoutPropriedadesInput, AdminUncheckedUpdateWithoutPropriedadesInput>
    create: XOR<AdminCreateWithoutPropriedadesInput, AdminUncheckedCreateWithoutPropriedadesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutPropriedadesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutPropriedadesInput, AdminUncheckedUpdateWithoutPropriedadesInput>
  }

  export type AdminUpdateWithoutPropriedadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuario?: EnumTipoUsuarioEnumFieldUpdateOperationsInput | $Enums.TipoUsuarioEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateWithoutPropriedadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativado?: BoolFieldUpdateOperationsInput | boolean
    tipoUsuario?: EnumTipoUsuarioEnumFieldUpdateOperationsInput | $Enums.TipoUsuarioEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    id?: StringFilter<"PropriedadeCultura"> | string
    propriedadeId?: StringFilter<"PropriedadeCultura"> | string
    culturaId?: StringFilter<"PropriedadeCultura"> | string
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
    id?: StringFilter<"PropriedadeSolo"> | string
    propriedadeId?: StringFilter<"PropriedadeSolo"> | string
    soloId?: StringFilter<"PropriedadeSolo"> | string
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
    id?: StringFilter<"Simulacao"> | string
    nomeSimulacao?: StringFilter<"Simulacao"> | string
    ano?: IntFilter<"Simulacao"> | number
    culturaId?: StringFilter<"Simulacao"> | string
    soloId?: StringFilter<"Simulacao"> | string
    propriedadeId?: StringFilter<"Simulacao"> | string
    eto?: FloatNullableFilter<"Simulacao"> | number | null
    indiceAridez?: FloatNullableFilter<"Simulacao"> | number | null
    precipitacaoMmAno?: FloatNullableFilter<"Simulacao"> | number | null
    numeroChuvas?: FloatNullableFilter<"Simulacao"> | number | null
    precipitacaoMmDia?: FloatNullableFilter<"Simulacao"> | number | null
    cvDia?: FloatNullableFilter<"Simulacao"> | number | null
    precipitacaoMmMes?: FloatNullableFilter<"Simulacao"> | number | null
    cvMes?: FloatNullableFilter<"Simulacao"> | number | null
    altitude?: FloatNullableFilter<"Simulacao"> | number | null
    temperaturaMed?: FloatNullableFilter<"Simulacao"> | number | null
    umidade?: FloatNullableFilter<"Simulacao"> | number | null
    resultado?: FloatNullableFilter<"Simulacao"> | number | null
    dataSimulacao?: DateTimeFilter<"Simulacao"> | Date | string
    createdAt?: DateTimeFilter<"Simulacao"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Simulacao"> | Date | string | null
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
    id?: StringFilter<"Historico"> | string
    simulacaoId?: StringFilter<"Historico"> | string
    observacao?: StringNullableFilter<"Historico"> | string | null
    propriedadeId?: StringNullableFilter<"Historico"> | string | null
    precipitacaoId?: StringNullableFilter<"Historico"> | string | null
    soloId?: StringNullableFilter<"Historico"> | string | null
    createdAt?: DateTimeFilter<"Historico"> | Date | string
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
    id?: StringFilter<"Precipitacao"> | string
    mmAno?: FloatNullableFilter<"Precipitacao"> | number | null
    chuvas?: FloatNullableFilter<"Precipitacao"> | number | null
    mmDia?: FloatNullableFilter<"Precipitacao"> | number | null
    cvDia?: FloatNullableFilter<"Precipitacao"> | number | null
    mmMes?: FloatNullableFilter<"Precipitacao"> | number | null
    cvMes?: FloatNullableFilter<"Precipitacao"> | number | null
    createdAt?: DateTimeFilter<"Precipitacao"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Precipitacao"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Precipitacao"> | Date | string | null
    propriedadeId?: StringFilter<"Precipitacao"> | string
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
    id?: StringFilter<"Estimativas"> | string
    valorTotal?: FloatNullableFilter<"Estimativas"> | number | null
    descricao?: StringNullableFilter<"Estimativas"> | string | null
    createdAt?: DateTimeFilter<"Estimativas"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Estimativas"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Estimativas"> | Date | string | null
    propriedadeId?: StringNullableFilter<"Estimativas"> | string | null
    simulacaoId?: StringFilter<"Estimativas"> | string
  }

  export type PropriedadeCreateWithoutCulturasInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadesInput
    solos?: PropriedadeSoloCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    Historico?: HistoricoCreateNestedManyWithoutPropriedadeInput
    Precipitacao?: PrecipitacaoCreateNestedManyWithoutPropriedadeInput
    Estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutCulturasInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    solos?: PropriedadeSoloUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    Historico?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
    Precipitacao?: PrecipitacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    Estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutCulturasInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutCulturasInput, PropriedadeUncheckedCreateWithoutCulturasInput>
  }

  export type CulturaCreateWithoutPropriedadeCulturaInput = {
    id?: string
    name: string
    eua?: number | null
    codigo?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Simulacao?: SimulacaoCreateNestedManyWithoutCulturaInput
  }

  export type CulturaUncheckedCreateWithoutPropriedadeCulturaInput = {
    id?: string
    name: string
    eua?: number | null
    codigo?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Simulacao?: SimulacaoUncheckedCreateNestedManyWithoutCulturaInput
  }

  export type CulturaCreateOrConnectWithoutPropriedadeCulturaInput = {
    where: CulturaWhereUniqueInput
    create: XOR<CulturaCreateWithoutPropriedadeCulturaInput, CulturaUncheckedCreateWithoutPropriedadeCulturaInput>
  }

  export type PropriedadeUpsertWithoutCulturasInput = {
    update: XOR<PropriedadeUpdateWithoutCulturasInput, PropriedadeUncheckedUpdateWithoutCulturasInput>
    create: XOR<PropriedadeCreateWithoutCulturasInput, PropriedadeUncheckedCreateWithoutCulturasInput>
    where?: PropriedadeWhereInput
  }

  export type PropriedadeUpdateToOneWithWhereWithoutCulturasInput = {
    where?: PropriedadeWhereInput
    data: XOR<PropriedadeUpdateWithoutCulturasInput, PropriedadeUncheckedUpdateWithoutCulturasInput>
  }

  export type PropriedadeUpdateWithoutCulturasInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadesNestedInput
    solos?: PropriedadeSoloUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    Historico?: HistoricoUpdateManyWithoutPropriedadeNestedInput
    Precipitacao?: PrecipitacaoUpdateManyWithoutPropriedadeNestedInput
    Estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutCulturasInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    solos?: PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Historico?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Precipitacao?: PrecipitacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
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
    eua?: NullableFloatFieldUpdateOperationsInput | number | null
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Simulacao?: SimulacaoUpdateManyWithoutCulturaNestedInput
  }

  export type CulturaUncheckedUpdateWithoutPropriedadeCulturaInput = {
    name?: StringFieldUpdateOperationsInput | string
    eua?: NullableFloatFieldUpdateOperationsInput | number | null
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Simulacao?: SimulacaoUncheckedUpdateManyWithoutCulturaNestedInput
  }

  export type PropriedadeCreateWithoutSolosInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadesInput
    culturas?: PropriedadeCulturaCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    Historico?: HistoricoCreateNestedManyWithoutPropriedadeInput
    Precipitacao?: PrecipitacaoCreateNestedManyWithoutPropriedadeInput
    Estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutSolosInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    culturas?: PropriedadeCulturaUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    Historico?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
    Precipitacao?: PrecipitacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    Estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutSolosInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutSolosInput, PropriedadeUncheckedCreateWithoutSolosInput>
  }

  export type SoloCreateWithoutPropriedadeSoloInput = {
    id?: string
    nomeClasse: string
    profundidade?: number | null
    fatorRocha?: number | null
    condutHidraulicaSaturada?: number | null
    densidadeAparente?: number | null
    agua0Bar?: number | null
    agua13Bar?: number | null
    agua15Bar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    historico?: HistoricoCreateNestedManyWithoutSoloInput
    Simulacao?: SimulacaoCreateNestedManyWithoutSoloInput
  }

  export type SoloUncheckedCreateWithoutPropriedadeSoloInput = {
    id?: string
    nomeClasse: string
    profundidade?: number | null
    fatorRocha?: number | null
    condutHidraulicaSaturada?: number | null
    densidadeAparente?: number | null
    agua0Bar?: number | null
    agua13Bar?: number | null
    agua15Bar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    historico?: HistoricoUncheckedCreateNestedManyWithoutSoloInput
    Simulacao?: SimulacaoUncheckedCreateNestedManyWithoutSoloInput
  }

  export type SoloCreateOrConnectWithoutPropriedadeSoloInput = {
    where: SoloWhereUniqueInput
    create: XOR<SoloCreateWithoutPropriedadeSoloInput, SoloUncheckedCreateWithoutPropriedadeSoloInput>
  }

  export type PropriedadeUpsertWithoutSolosInput = {
    update: XOR<PropriedadeUpdateWithoutSolosInput, PropriedadeUncheckedUpdateWithoutSolosInput>
    create: XOR<PropriedadeCreateWithoutSolosInput, PropriedadeUncheckedCreateWithoutSolosInput>
    where?: PropriedadeWhereInput
  }

  export type PropriedadeUpdateToOneWithWhereWithoutSolosInput = {
    where?: PropriedadeWhereInput
    data: XOR<PropriedadeUpdateWithoutSolosInput, PropriedadeUncheckedUpdateWithoutSolosInput>
  }

  export type PropriedadeUpdateWithoutSolosInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadesNestedInput
    culturas?: PropriedadeCulturaUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    Historico?: HistoricoUpdateManyWithoutPropriedadeNestedInput
    Precipitacao?: PrecipitacaoUpdateManyWithoutPropriedadeNestedInput
    Estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutSolosInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    culturas?: PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Historico?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Precipitacao?: PrecipitacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
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
    profundidade?: NullableFloatFieldUpdateOperationsInput | number | null
    fatorRocha?: NullableFloatFieldUpdateOperationsInput | number | null
    condutHidraulicaSaturada?: NullableFloatFieldUpdateOperationsInput | number | null
    densidadeAparente?: NullableFloatFieldUpdateOperationsInput | number | null
    agua0Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua13Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua15Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historico?: HistoricoUpdateManyWithoutSoloNestedInput
    Simulacao?: SimulacaoUpdateManyWithoutSoloNestedInput
  }

  export type SoloUncheckedUpdateWithoutPropriedadeSoloInput = {
    nomeClasse?: StringFieldUpdateOperationsInput | string
    profundidade?: NullableFloatFieldUpdateOperationsInput | number | null
    fatorRocha?: NullableFloatFieldUpdateOperationsInput | number | null
    condutHidraulicaSaturada?: NullableFloatFieldUpdateOperationsInput | number | null
    densidadeAparente?: NullableFloatFieldUpdateOperationsInput | number | null
    agua0Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua13Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua15Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historico?: HistoricoUncheckedUpdateManyWithoutSoloNestedInput
    Simulacao?: SimulacaoUncheckedUpdateManyWithoutSoloNestedInput
  }

  export type SimulacaoCreateWithoutHistoricosInput = {
    id?: string
    nomeSimulacao: string
    ano: number
    eto?: number | null
    indiceAridez?: number | null
    precipitacaoMmAno?: number | null
    numeroChuvas?: number | null
    precipitacaoMmDia?: number | null
    cvDia?: number | null
    precipitacaoMmMes?: number | null
    cvMes?: number | null
    altitude?: number | null
    temperaturaMed?: number | null
    umidade?: number | null
    resultado?: number | null
    dataSimulacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    cultura: CulturaCreateNestedOneWithoutSimulacaoInput
    solo: SoloCreateNestedOneWithoutSimulacaoInput
    propriedade: PropriedadeCreateNestedOneWithoutSimulacoesInput
    Estimativas?: EstimativasCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoUncheckedCreateWithoutHistoricosInput = {
    id?: string
    nomeSimulacao: string
    ano: number
    culturaId: string
    soloId: string
    propriedadeId: string
    eto?: number | null
    indiceAridez?: number | null
    precipitacaoMmAno?: number | null
    numeroChuvas?: number | null
    precipitacaoMmDia?: number | null
    cvDia?: number | null
    precipitacaoMmMes?: number | null
    cvMes?: number | null
    altitude?: number | null
    temperaturaMed?: number | null
    umidade?: number | null
    resultado?: number | null
    dataSimulacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    Estimativas?: EstimativasUncheckedCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoCreateOrConnectWithoutHistoricosInput = {
    where: SimulacaoWhereUniqueInput
    create: XOR<SimulacaoCreateWithoutHistoricosInput, SimulacaoUncheckedCreateWithoutHistoricosInput>
  }

  export type PropriedadeCreateWithoutHistoricoInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadesInput
    culturas?: PropriedadeCulturaCreateNestedManyWithoutPropriedadeInput
    solos?: PropriedadeSoloCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    Precipitacao?: PrecipitacaoCreateNestedManyWithoutPropriedadeInput
    Estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutHistoricoInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    culturas?: PropriedadeCulturaUncheckedCreateNestedManyWithoutPropriedadeInput
    solos?: PropriedadeSoloUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    Precipitacao?: PrecipitacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    Estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutHistoricoInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutHistoricoInput, PropriedadeUncheckedCreateWithoutHistoricoInput>
  }

  export type PrecipitacaoCreateWithoutHistoricoInput = {
    id?: string
    mmAno?: number | null
    chuvas?: number | null
    mmDia?: number | null
    cvDia?: number | null
    mmMes?: number | null
    cvMes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedade: PropriedadeCreateNestedOneWithoutPrecipitacaoInput
  }

  export type PrecipitacaoUncheckedCreateWithoutHistoricoInput = {
    id?: string
    mmAno?: number | null
    chuvas?: number | null
    mmDia?: number | null
    cvDia?: number | null
    mmMes?: number | null
    cvMes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId: string
  }

  export type PrecipitacaoCreateOrConnectWithoutHistoricoInput = {
    where: PrecipitacaoWhereUniqueInput
    create: XOR<PrecipitacaoCreateWithoutHistoricoInput, PrecipitacaoUncheckedCreateWithoutHistoricoInput>
  }

  export type SoloCreateWithoutHistoricoInput = {
    id?: string
    nomeClasse: string
    profundidade?: number | null
    fatorRocha?: number | null
    condutHidraulicaSaturada?: number | null
    densidadeAparente?: number | null
    agua0Bar?: number | null
    agua13Bar?: number | null
    agua15Bar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeSolo?: PropriedadeSoloCreateNestedManyWithoutSoloInput
    Simulacao?: SimulacaoCreateNestedManyWithoutSoloInput
  }

  export type SoloUncheckedCreateWithoutHistoricoInput = {
    id?: string
    nomeClasse: string
    profundidade?: number | null
    fatorRocha?: number | null
    condutHidraulicaSaturada?: number | null
    densidadeAparente?: number | null
    agua0Bar?: number | null
    agua13Bar?: number | null
    agua15Bar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeSolo?: PropriedadeSoloUncheckedCreateNestedManyWithoutSoloInput
    Simulacao?: SimulacaoUncheckedCreateNestedManyWithoutSoloInput
  }

  export type SoloCreateOrConnectWithoutHistoricoInput = {
    where: SoloWhereUniqueInput
    create: XOR<SoloCreateWithoutHistoricoInput, SoloUncheckedCreateWithoutHistoricoInput>
  }

  export type SimulacaoUpsertWithoutHistoricosInput = {
    update: XOR<SimulacaoUpdateWithoutHistoricosInput, SimulacaoUncheckedUpdateWithoutHistoricosInput>
    create: XOR<SimulacaoCreateWithoutHistoricosInput, SimulacaoUncheckedCreateWithoutHistoricosInput>
    where?: SimulacaoWhereInput
  }

  export type SimulacaoUpdateToOneWithWhereWithoutHistoricosInput = {
    where?: SimulacaoWhereInput
    data: XOR<SimulacaoUpdateWithoutHistoricosInput, SimulacaoUncheckedUpdateWithoutHistoricosInput>
  }

  export type SimulacaoUpdateWithoutHistoricosInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cultura?: CulturaUpdateOneRequiredWithoutSimulacaoNestedInput
    solo?: SoloUpdateOneRequiredWithoutSimulacaoNestedInput
    propriedade?: PropriedadeUpdateOneRequiredWithoutSimulacoesNestedInput
    Estimativas?: EstimativasUpdateManyWithoutSimulacaoNestedInput
  }

  export type SimulacaoUncheckedUpdateWithoutHistoricosInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    culturaId?: StringFieldUpdateOperationsInput | string
    soloId?: StringFieldUpdateOperationsInput | string
    propriedadeId?: StringFieldUpdateOperationsInput | string
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estimativas?: EstimativasUncheckedUpdateManyWithoutSimulacaoNestedInput
  }

  export type PropriedadeUpsertWithoutHistoricoInput = {
    update: XOR<PropriedadeUpdateWithoutHistoricoInput, PropriedadeUncheckedUpdateWithoutHistoricoInput>
    create: XOR<PropriedadeCreateWithoutHistoricoInput, PropriedadeUncheckedCreateWithoutHistoricoInput>
    where?: PropriedadeWhereInput
  }

  export type PropriedadeUpdateToOneWithWhereWithoutHistoricoInput = {
    where?: PropriedadeWhereInput
    data: XOR<PropriedadeUpdateWithoutHistoricoInput, PropriedadeUncheckedUpdateWithoutHistoricoInput>
  }

  export type PropriedadeUpdateWithoutHistoricoInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadesNestedInput
    culturas?: PropriedadeCulturaUpdateManyWithoutPropriedadeNestedInput
    solos?: PropriedadeSoloUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    Precipitacao?: PrecipitacaoUpdateManyWithoutPropriedadeNestedInput
    Estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutHistoricoInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    culturas?: PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeNestedInput
    solos?: PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Precipitacao?: PrecipitacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
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
    mmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    chuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    mmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    mmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedade?: PropriedadeUpdateOneRequiredWithoutPrecipitacaoNestedInput
  }

  export type PrecipitacaoUncheckedUpdateWithoutHistoricoInput = {
    mmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    chuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    mmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    mmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: StringFieldUpdateOperationsInput | string
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
    profundidade?: NullableFloatFieldUpdateOperationsInput | number | null
    fatorRocha?: NullableFloatFieldUpdateOperationsInput | number | null
    condutHidraulicaSaturada?: NullableFloatFieldUpdateOperationsInput | number | null
    densidadeAparente?: NullableFloatFieldUpdateOperationsInput | number | null
    agua0Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua13Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua15Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeSolo?: PropriedadeSoloUpdateManyWithoutSoloNestedInput
    Simulacao?: SimulacaoUpdateManyWithoutSoloNestedInput
  }

  export type SoloUncheckedUpdateWithoutHistoricoInput = {
    nomeClasse?: StringFieldUpdateOperationsInput | string
    profundidade?: NullableFloatFieldUpdateOperationsInput | number | null
    fatorRocha?: NullableFloatFieldUpdateOperationsInput | number | null
    condutHidraulicaSaturada?: NullableFloatFieldUpdateOperationsInput | number | null
    densidadeAparente?: NullableFloatFieldUpdateOperationsInput | number | null
    agua0Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua13Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua15Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeSolo?: PropriedadeSoloUncheckedUpdateManyWithoutSoloNestedInput
    Simulacao?: SimulacaoUncheckedUpdateManyWithoutSoloNestedInput
  }

  export type PropriedadeCreateWithoutPrecipitacaoInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadesInput
    culturas?: PropriedadeCulturaCreateNestedManyWithoutPropriedadeInput
    solos?: PropriedadeSoloCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    Historico?: HistoricoCreateNestedManyWithoutPropriedadeInput
    Estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutPrecipitacaoInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    culturas?: PropriedadeCulturaUncheckedCreateNestedManyWithoutPropriedadeInput
    solos?: PropriedadeSoloUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    Historico?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
    Estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutPrecipitacaoInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutPrecipitacaoInput, PropriedadeUncheckedCreateWithoutPrecipitacaoInput>
  }

  export type HistoricoCreateWithoutPrecipitacaoInput = {
    id?: string
    observacao?: string | null
    createdAt?: Date | string
    simulacao: SimulacaoCreateNestedOneWithoutHistoricosInput
    Propriedade?: PropriedadeCreateNestedOneWithoutHistoricoInput
    Solo?: SoloCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateWithoutPrecipitacaoInput = {
    id?: string
    simulacaoId: string
    observacao?: string | null
    propriedadeId?: string | null
    soloId?: string | null
    createdAt?: Date | string
  }

  export type HistoricoCreateOrConnectWithoutPrecipitacaoInput = {
    where: HistoricoWhereUniqueInput
    create: XOR<HistoricoCreateWithoutPrecipitacaoInput, HistoricoUncheckedCreateWithoutPrecipitacaoInput>
  }

  export type HistoricoCreateManyPrecipitacaoInputEnvelope = {
    data: HistoricoCreateManyPrecipitacaoInput | HistoricoCreateManyPrecipitacaoInput[]
  }

  export type PropriedadeUpsertWithoutPrecipitacaoInput = {
    update: XOR<PropriedadeUpdateWithoutPrecipitacaoInput, PropriedadeUncheckedUpdateWithoutPrecipitacaoInput>
    create: XOR<PropriedadeCreateWithoutPrecipitacaoInput, PropriedadeUncheckedCreateWithoutPrecipitacaoInput>
    where?: PropriedadeWhereInput
  }

  export type PropriedadeUpdateToOneWithWhereWithoutPrecipitacaoInput = {
    where?: PropriedadeWhereInput
    data: XOR<PropriedadeUpdateWithoutPrecipitacaoInput, PropriedadeUncheckedUpdateWithoutPrecipitacaoInput>
  }

  export type PropriedadeUpdateWithoutPrecipitacaoInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadesNestedInput
    culturas?: PropriedadeCulturaUpdateManyWithoutPropriedadeNestedInput
    solos?: PropriedadeSoloUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    Historico?: HistoricoUpdateManyWithoutPropriedadeNestedInput
    Estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutPrecipitacaoInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    culturas?: PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeNestedInput
    solos?: PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Historico?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
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
    id?: string
    observacao?: string | null
    createdAt?: Date | string
    simulacao: SimulacaoCreateNestedOneWithoutHistoricosInput
    Propriedade?: PropriedadeCreateNestedOneWithoutHistoricoInput
    Precipitacao?: PrecipitacaoCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateWithoutSoloInput = {
    id?: string
    simulacaoId: string
    observacao?: string | null
    propriedadeId?: string | null
    precipitacaoId?: string | null
    createdAt?: Date | string
  }

  export type HistoricoCreateOrConnectWithoutSoloInput = {
    where: HistoricoWhereUniqueInput
    create: XOR<HistoricoCreateWithoutSoloInput, HistoricoUncheckedCreateWithoutSoloInput>
  }

  export type HistoricoCreateManySoloInputEnvelope = {
    data: HistoricoCreateManySoloInput | HistoricoCreateManySoloInput[]
  }

  export type PropriedadeSoloCreateWithoutSoloInput = {
    id?: string
    propriedade: PropriedadeCreateNestedOneWithoutSolosInput
  }

  export type PropriedadeSoloUncheckedCreateWithoutSoloInput = {
    id?: string
    propriedadeId: string
  }

  export type PropriedadeSoloCreateOrConnectWithoutSoloInput = {
    where: PropriedadeSoloWhereUniqueInput
    create: XOR<PropriedadeSoloCreateWithoutSoloInput, PropriedadeSoloUncheckedCreateWithoutSoloInput>
  }

  export type PropriedadeSoloCreateManySoloInputEnvelope = {
    data: PropriedadeSoloCreateManySoloInput | PropriedadeSoloCreateManySoloInput[]
  }

  export type SimulacaoCreateWithoutSoloInput = {
    id?: string
    nomeSimulacao: string
    ano: number
    eto?: number | null
    indiceAridez?: number | null
    precipitacaoMmAno?: number | null
    numeroChuvas?: number | null
    precipitacaoMmDia?: number | null
    cvDia?: number | null
    precipitacaoMmMes?: number | null
    cvMes?: number | null
    altitude?: number | null
    temperaturaMed?: number | null
    umidade?: number | null
    resultado?: number | null
    dataSimulacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    cultura: CulturaCreateNestedOneWithoutSimulacaoInput
    propriedade: PropriedadeCreateNestedOneWithoutSimulacoesInput
    historicos?: HistoricoCreateNestedManyWithoutSimulacaoInput
    Estimativas?: EstimativasCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoUncheckedCreateWithoutSoloInput = {
    id?: string
    nomeSimulacao: string
    ano: number
    culturaId: string
    propriedadeId: string
    eto?: number | null
    indiceAridez?: number | null
    precipitacaoMmAno?: number | null
    numeroChuvas?: number | null
    precipitacaoMmDia?: number | null
    cvDia?: number | null
    precipitacaoMmMes?: number | null
    cvMes?: number | null
    altitude?: number | null
    temperaturaMed?: number | null
    umidade?: number | null
    resultado?: number | null
    dataSimulacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    historicos?: HistoricoUncheckedCreateNestedManyWithoutSimulacaoInput
    Estimativas?: EstimativasUncheckedCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoCreateOrConnectWithoutSoloInput = {
    where: SimulacaoWhereUniqueInput
    create: XOR<SimulacaoCreateWithoutSoloInput, SimulacaoUncheckedCreateWithoutSoloInput>
  }

  export type SimulacaoCreateManySoloInputEnvelope = {
    data: SimulacaoCreateManySoloInput | SimulacaoCreateManySoloInput[]
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

  export type SimulacaoUpsertWithWhereUniqueWithoutSoloInput = {
    where: SimulacaoWhereUniqueInput
    update: XOR<SimulacaoUpdateWithoutSoloInput, SimulacaoUncheckedUpdateWithoutSoloInput>
    create: XOR<SimulacaoCreateWithoutSoloInput, SimulacaoUncheckedCreateWithoutSoloInput>
  }

  export type SimulacaoUpdateWithWhereUniqueWithoutSoloInput = {
    where: SimulacaoWhereUniqueInput
    data: XOR<SimulacaoUpdateWithoutSoloInput, SimulacaoUncheckedUpdateWithoutSoloInput>
  }

  export type SimulacaoUpdateManyWithWhereWithoutSoloInput = {
    where: SimulacaoScalarWhereInput
    data: XOR<SimulacaoUpdateManyMutationInput, SimulacaoUncheckedUpdateManyWithoutSoloInput>
  }

  export type SimulacaoCreateWithoutEstimativasInput = {
    id?: string
    nomeSimulacao: string
    ano: number
    eto?: number | null
    indiceAridez?: number | null
    precipitacaoMmAno?: number | null
    numeroChuvas?: number | null
    precipitacaoMmDia?: number | null
    cvDia?: number | null
    precipitacaoMmMes?: number | null
    cvMes?: number | null
    altitude?: number | null
    temperaturaMed?: number | null
    umidade?: number | null
    resultado?: number | null
    dataSimulacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    cultura: CulturaCreateNestedOneWithoutSimulacaoInput
    solo: SoloCreateNestedOneWithoutSimulacaoInput
    propriedade: PropriedadeCreateNestedOneWithoutSimulacoesInput
    historicos?: HistoricoCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoUncheckedCreateWithoutEstimativasInput = {
    id?: string
    nomeSimulacao: string
    ano: number
    culturaId: string
    soloId: string
    propriedadeId: string
    eto?: number | null
    indiceAridez?: number | null
    precipitacaoMmAno?: number | null
    numeroChuvas?: number | null
    precipitacaoMmDia?: number | null
    cvDia?: number | null
    precipitacaoMmMes?: number | null
    cvMes?: number | null
    altitude?: number | null
    temperaturaMed?: number | null
    umidade?: number | null
    resultado?: number | null
    dataSimulacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    historicos?: HistoricoUncheckedCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoCreateOrConnectWithoutEstimativasInput = {
    where: SimulacaoWhereUniqueInput
    create: XOR<SimulacaoCreateWithoutEstimativasInput, SimulacaoUncheckedCreateWithoutEstimativasInput>
  }

  export type PropriedadeCreateWithoutEstimativasInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadesInput
    culturas?: PropriedadeCulturaCreateNestedManyWithoutPropriedadeInput
    solos?: PropriedadeSoloCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoCreateNestedManyWithoutPropriedadeInput
    Historico?: HistoricoCreateNestedManyWithoutPropriedadeInput
    Precipitacao?: PrecipitacaoCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutEstimativasInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    culturas?: PropriedadeCulturaUncheckedCreateNestedManyWithoutPropriedadeInput
    solos?: PropriedadeSoloUncheckedCreateNestedManyWithoutPropriedadeInput
    simulacoes?: SimulacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    Historico?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
    Precipitacao?: PrecipitacaoUncheckedCreateNestedManyWithoutPropriedadeInput
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
    ano?: IntFieldUpdateOperationsInput | number
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cultura?: CulturaUpdateOneRequiredWithoutSimulacaoNestedInput
    solo?: SoloUpdateOneRequiredWithoutSimulacaoNestedInput
    propriedade?: PropriedadeUpdateOneRequiredWithoutSimulacoesNestedInput
    historicos?: HistoricoUpdateManyWithoutSimulacaoNestedInput
  }

  export type SimulacaoUncheckedUpdateWithoutEstimativasInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    culturaId?: StringFieldUpdateOperationsInput | string
    soloId?: StringFieldUpdateOperationsInput | string
    propriedadeId?: StringFieldUpdateOperationsInput | string
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historicos?: HistoricoUncheckedUpdateManyWithoutSimulacaoNestedInput
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
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadesNestedInput
    culturas?: PropriedadeCulturaUpdateManyWithoutPropriedadeNestedInput
    solos?: PropriedadeSoloUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    Historico?: HistoricoUpdateManyWithoutPropriedadeNestedInput
    Precipitacao?: PrecipitacaoUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutEstimativasInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    culturas?: PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeNestedInput
    solos?: PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Historico?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Precipitacao?: PrecipitacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
  }

  export type CulturaCreateWithoutSimulacaoInput = {
    id?: string
    name: string
    eua?: number | null
    codigo?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    PropriedadeCultura?: PropriedadeCulturaCreateNestedManyWithoutCulturaInput
  }

  export type CulturaUncheckedCreateWithoutSimulacaoInput = {
    id?: string
    name: string
    eua?: number | null
    codigo?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    PropriedadeCultura?: PropriedadeCulturaUncheckedCreateNestedManyWithoutCulturaInput
  }

  export type CulturaCreateOrConnectWithoutSimulacaoInput = {
    where: CulturaWhereUniqueInput
    create: XOR<CulturaCreateWithoutSimulacaoInput, CulturaUncheckedCreateWithoutSimulacaoInput>
  }

  export type SoloCreateWithoutSimulacaoInput = {
    id?: string
    nomeClasse: string
    profundidade?: number | null
    fatorRocha?: number | null
    condutHidraulicaSaturada?: number | null
    densidadeAparente?: number | null
    agua0Bar?: number | null
    agua13Bar?: number | null
    agua15Bar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    historico?: HistoricoCreateNestedManyWithoutSoloInput
    propriedadeSolo?: PropriedadeSoloCreateNestedManyWithoutSoloInput
  }

  export type SoloUncheckedCreateWithoutSimulacaoInput = {
    id?: string
    nomeClasse: string
    profundidade?: number | null
    fatorRocha?: number | null
    condutHidraulicaSaturada?: number | null
    densidadeAparente?: number | null
    agua0Bar?: number | null
    agua13Bar?: number | null
    agua15Bar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    historico?: HistoricoUncheckedCreateNestedManyWithoutSoloInput
    propriedadeSolo?: PropriedadeSoloUncheckedCreateNestedManyWithoutSoloInput
  }

  export type SoloCreateOrConnectWithoutSimulacaoInput = {
    where: SoloWhereUniqueInput
    create: XOR<SoloCreateWithoutSimulacaoInput, SoloUncheckedCreateWithoutSimulacaoInput>
  }

  export type PropriedadeCreateWithoutSimulacoesInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    admin?: AdminCreateNestedOneWithoutPropriedadesInput
    culturas?: PropriedadeCulturaCreateNestedManyWithoutPropriedadeInput
    solos?: PropriedadeSoloCreateNestedManyWithoutPropriedadeInput
    Historico?: HistoricoCreateNestedManyWithoutPropriedadeInput
    Precipitacao?: PrecipitacaoCreateNestedManyWithoutPropriedadeInput
    Estimativas?: EstimativasCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateWithoutSimulacoesInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    culturas?: PropriedadeCulturaUncheckedCreateNestedManyWithoutPropriedadeInput
    solos?: PropriedadeSoloUncheckedCreateNestedManyWithoutPropriedadeInput
    Historico?: HistoricoUncheckedCreateNestedManyWithoutPropriedadeInput
    Precipitacao?: PrecipitacaoUncheckedCreateNestedManyWithoutPropriedadeInput
    Estimativas?: EstimativasUncheckedCreateNestedManyWithoutPropriedadeInput
  }

  export type PropriedadeCreateOrConnectWithoutSimulacoesInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutSimulacoesInput, PropriedadeUncheckedCreateWithoutSimulacoesInput>
  }

  export type HistoricoCreateWithoutSimulacaoInput = {
    id?: string
    observacao?: string | null
    createdAt?: Date | string
    Propriedade?: PropriedadeCreateNestedOneWithoutHistoricoInput
    Precipitacao?: PrecipitacaoCreateNestedOneWithoutHistoricoInput
    Solo?: SoloCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateWithoutSimulacaoInput = {
    id?: string
    observacao?: string | null
    propriedadeId?: string | null
    precipitacaoId?: string | null
    soloId?: string | null
    createdAt?: Date | string
  }

  export type HistoricoCreateOrConnectWithoutSimulacaoInput = {
    where: HistoricoWhereUniqueInput
    create: XOR<HistoricoCreateWithoutSimulacaoInput, HistoricoUncheckedCreateWithoutSimulacaoInput>
  }

  export type HistoricoCreateManySimulacaoInputEnvelope = {
    data: HistoricoCreateManySimulacaoInput | HistoricoCreateManySimulacaoInput[]
  }

  export type EstimativasCreateWithoutSimulacaoInput = {
    id?: string
    valorTotal?: number | null
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedade?: PropriedadeCreateNestedOneWithoutEstimativasInput
  }

  export type EstimativasUncheckedCreateWithoutSimulacaoInput = {
    id?: string
    valorTotal?: number | null
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId?: string | null
  }

  export type EstimativasCreateOrConnectWithoutSimulacaoInput = {
    where: EstimativasWhereUniqueInput
    create: XOR<EstimativasCreateWithoutSimulacaoInput, EstimativasUncheckedCreateWithoutSimulacaoInput>
  }

  export type EstimativasCreateManySimulacaoInputEnvelope = {
    data: EstimativasCreateManySimulacaoInput | EstimativasCreateManySimulacaoInput[]
  }

  export type CulturaUpsertWithoutSimulacaoInput = {
    update: XOR<CulturaUpdateWithoutSimulacaoInput, CulturaUncheckedUpdateWithoutSimulacaoInput>
    create: XOR<CulturaCreateWithoutSimulacaoInput, CulturaUncheckedCreateWithoutSimulacaoInput>
    where?: CulturaWhereInput
  }

  export type CulturaUpdateToOneWithWhereWithoutSimulacaoInput = {
    where?: CulturaWhereInput
    data: XOR<CulturaUpdateWithoutSimulacaoInput, CulturaUncheckedUpdateWithoutSimulacaoInput>
  }

  export type CulturaUpdateWithoutSimulacaoInput = {
    name?: StringFieldUpdateOperationsInput | string
    eua?: NullableFloatFieldUpdateOperationsInput | number | null
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PropriedadeCultura?: PropriedadeCulturaUpdateManyWithoutCulturaNestedInput
  }

  export type CulturaUncheckedUpdateWithoutSimulacaoInput = {
    name?: StringFieldUpdateOperationsInput | string
    eua?: NullableFloatFieldUpdateOperationsInput | number | null
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PropriedadeCultura?: PropriedadeCulturaUncheckedUpdateManyWithoutCulturaNestedInput
  }

  export type SoloUpsertWithoutSimulacaoInput = {
    update: XOR<SoloUpdateWithoutSimulacaoInput, SoloUncheckedUpdateWithoutSimulacaoInput>
    create: XOR<SoloCreateWithoutSimulacaoInput, SoloUncheckedCreateWithoutSimulacaoInput>
    where?: SoloWhereInput
  }

  export type SoloUpdateToOneWithWhereWithoutSimulacaoInput = {
    where?: SoloWhereInput
    data: XOR<SoloUpdateWithoutSimulacaoInput, SoloUncheckedUpdateWithoutSimulacaoInput>
  }

  export type SoloUpdateWithoutSimulacaoInput = {
    nomeClasse?: StringFieldUpdateOperationsInput | string
    profundidade?: NullableFloatFieldUpdateOperationsInput | number | null
    fatorRocha?: NullableFloatFieldUpdateOperationsInput | number | null
    condutHidraulicaSaturada?: NullableFloatFieldUpdateOperationsInput | number | null
    densidadeAparente?: NullableFloatFieldUpdateOperationsInput | number | null
    agua0Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua13Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua15Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historico?: HistoricoUpdateManyWithoutSoloNestedInput
    propriedadeSolo?: PropriedadeSoloUpdateManyWithoutSoloNestedInput
  }

  export type SoloUncheckedUpdateWithoutSimulacaoInput = {
    nomeClasse?: StringFieldUpdateOperationsInput | string
    profundidade?: NullableFloatFieldUpdateOperationsInput | number | null
    fatorRocha?: NullableFloatFieldUpdateOperationsInput | number | null
    condutHidraulicaSaturada?: NullableFloatFieldUpdateOperationsInput | number | null
    densidadeAparente?: NullableFloatFieldUpdateOperationsInput | number | null
    agua0Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua13Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    agua15Bar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historico?: HistoricoUncheckedUpdateManyWithoutSoloNestedInput
    propriedadeSolo?: PropriedadeSoloUncheckedUpdateManyWithoutSoloNestedInput
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
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutPropriedadesNestedInput
    culturas?: PropriedadeCulturaUpdateManyWithoutPropriedadeNestedInput
    solos?: PropriedadeSoloUpdateManyWithoutPropriedadeNestedInput
    Historico?: HistoricoUpdateManyWithoutPropriedadeNestedInput
    Precipitacao?: PrecipitacaoUpdateManyWithoutPropriedadeNestedInput
    Estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutSimulacoesInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    culturas?: PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeNestedInput
    solos?: PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeNestedInput
    Historico?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Precipitacao?: PrecipitacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
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
    id?: string
    propriedade: PropriedadeCreateNestedOneWithoutCulturasInput
  }

  export type PropriedadeCulturaUncheckedCreateWithoutCulturaInput = {
    id?: string
    propriedadeId: string
  }

  export type PropriedadeCulturaCreateOrConnectWithoutCulturaInput = {
    where: PropriedadeCulturaWhereUniqueInput
    create: XOR<PropriedadeCulturaCreateWithoutCulturaInput, PropriedadeCulturaUncheckedCreateWithoutCulturaInput>
  }

  export type PropriedadeCulturaCreateManyCulturaInputEnvelope = {
    data: PropriedadeCulturaCreateManyCulturaInput | PropriedadeCulturaCreateManyCulturaInput[]
  }

  export type SimulacaoCreateWithoutCulturaInput = {
    id?: string
    nomeSimulacao: string
    ano: number
    eto?: number | null
    indiceAridez?: number | null
    precipitacaoMmAno?: number | null
    numeroChuvas?: number | null
    precipitacaoMmDia?: number | null
    cvDia?: number | null
    precipitacaoMmMes?: number | null
    cvMes?: number | null
    altitude?: number | null
    temperaturaMed?: number | null
    umidade?: number | null
    resultado?: number | null
    dataSimulacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    solo: SoloCreateNestedOneWithoutSimulacaoInput
    propriedade: PropriedadeCreateNestedOneWithoutSimulacoesInput
    historicos?: HistoricoCreateNestedManyWithoutSimulacaoInput
    Estimativas?: EstimativasCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoUncheckedCreateWithoutCulturaInput = {
    id?: string
    nomeSimulacao: string
    ano: number
    soloId: string
    propriedadeId: string
    eto?: number | null
    indiceAridez?: number | null
    precipitacaoMmAno?: number | null
    numeroChuvas?: number | null
    precipitacaoMmDia?: number | null
    cvDia?: number | null
    precipitacaoMmMes?: number | null
    cvMes?: number | null
    altitude?: number | null
    temperaturaMed?: number | null
    umidade?: number | null
    resultado?: number | null
    dataSimulacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    historicos?: HistoricoUncheckedCreateNestedManyWithoutSimulacaoInput
    Estimativas?: EstimativasUncheckedCreateNestedManyWithoutSimulacaoInput
  }

  export type SimulacaoCreateOrConnectWithoutCulturaInput = {
    where: SimulacaoWhereUniqueInput
    create: XOR<SimulacaoCreateWithoutCulturaInput, SimulacaoUncheckedCreateWithoutCulturaInput>
  }

  export type SimulacaoCreateManyCulturaInputEnvelope = {
    data: SimulacaoCreateManyCulturaInput | SimulacaoCreateManyCulturaInput[]
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

  export type SimulacaoUpsertWithWhereUniqueWithoutCulturaInput = {
    where: SimulacaoWhereUniqueInput
    update: XOR<SimulacaoUpdateWithoutCulturaInput, SimulacaoUncheckedUpdateWithoutCulturaInput>
    create: XOR<SimulacaoCreateWithoutCulturaInput, SimulacaoUncheckedCreateWithoutCulturaInput>
  }

  export type SimulacaoUpdateWithWhereUniqueWithoutCulturaInput = {
    where: SimulacaoWhereUniqueInput
    data: XOR<SimulacaoUpdateWithoutCulturaInput, SimulacaoUncheckedUpdateWithoutCulturaInput>
  }

  export type SimulacaoUpdateManyWithWhereWithoutCulturaInput = {
    where: SimulacaoScalarWhereInput
    data: XOR<SimulacaoUpdateManyMutationInput, SimulacaoUncheckedUpdateManyWithoutCulturaInput>
  }

  export type PropriedadeCreateManyAdminInput = {
    id?: string
    nomePropriedade: string
    nomeResponsavel: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PropriedadeUpdateWithoutAdminInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    culturas?: PropriedadeCulturaUpdateManyWithoutPropriedadeNestedInput
    solos?: PropriedadeSoloUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUpdateManyWithoutPropriedadeNestedInput
    Historico?: HistoricoUpdateManyWithoutPropriedadeNestedInput
    Precipitacao?: PrecipitacaoUpdateManyWithoutPropriedadeNestedInput
    Estimativas?: EstimativasUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateWithoutAdminInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    culturas?: PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeNestedInput
    solos?: PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeNestedInput
    simulacoes?: SimulacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Historico?: HistoricoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Precipitacao?: PrecipitacaoUncheckedUpdateManyWithoutPropriedadeNestedInput
    Estimativas?: EstimativasUncheckedUpdateManyWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateManyWithoutAdminInput = {
    nomePropriedade?: StringFieldUpdateOperationsInput | string
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropriedadeCulturaCreateManyPropriedadeInput = {
    id?: string
    culturaId: string
  }

  export type PropriedadeSoloCreateManyPropriedadeInput = {
    id?: string
    soloId: string
  }

  export type SimulacaoCreateManyPropriedadeInput = {
    id?: string
    nomeSimulacao: string
    ano: number
    culturaId: string
    soloId: string
    eto?: number | null
    indiceAridez?: number | null
    precipitacaoMmAno?: number | null
    numeroChuvas?: number | null
    precipitacaoMmDia?: number | null
    cvDia?: number | null
    precipitacaoMmMes?: number | null
    cvMes?: number | null
    altitude?: number | null
    temperaturaMed?: number | null
    umidade?: number | null
    resultado?: number | null
    dataSimulacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type HistoricoCreateManyPropriedadeInput = {
    id?: string
    simulacaoId: string
    observacao?: string | null
    precipitacaoId?: string | null
    soloId?: string | null
    createdAt?: Date | string
  }

  export type PrecipitacaoCreateManyPropriedadeInput = {
    id?: string
    mmAno?: number | null
    chuvas?: number | null
    mmDia?: number | null
    cvDia?: number | null
    mmMes?: number | null
    cvMes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type EstimativasCreateManyPropriedadeInput = {
    id?: string
    valorTotal?: number | null
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    simulacaoId: string
  }

  export type PropriedadeCulturaUpdateWithoutPropriedadeInput = {
    cultura?: CulturaUpdateOneRequiredWithoutPropriedadeCulturaNestedInput
  }

  export type PropriedadeCulturaUncheckedUpdateWithoutPropriedadeInput = {
    culturaId?: StringFieldUpdateOperationsInput | string
  }

  export type PropriedadeCulturaUncheckedUpdateManyWithoutPropriedadeInput = {
    culturaId?: StringFieldUpdateOperationsInput | string
  }

  export type PropriedadeSoloUpdateWithoutPropriedadeInput = {
    solo?: SoloUpdateOneRequiredWithoutPropriedadeSoloNestedInput
  }

  export type PropriedadeSoloUncheckedUpdateWithoutPropriedadeInput = {
    soloId?: StringFieldUpdateOperationsInput | string
  }

  export type PropriedadeSoloUncheckedUpdateManyWithoutPropriedadeInput = {
    soloId?: StringFieldUpdateOperationsInput | string
  }

  export type SimulacaoUpdateWithoutPropriedadeInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cultura?: CulturaUpdateOneRequiredWithoutSimulacaoNestedInput
    solo?: SoloUpdateOneRequiredWithoutSimulacaoNestedInput
    historicos?: HistoricoUpdateManyWithoutSimulacaoNestedInput
    Estimativas?: EstimativasUpdateManyWithoutSimulacaoNestedInput
  }

  export type SimulacaoUncheckedUpdateWithoutPropriedadeInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    culturaId?: StringFieldUpdateOperationsInput | string
    soloId?: StringFieldUpdateOperationsInput | string
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historicos?: HistoricoUncheckedUpdateManyWithoutSimulacaoNestedInput
    Estimativas?: EstimativasUncheckedUpdateManyWithoutSimulacaoNestedInput
  }

  export type SimulacaoUncheckedUpdateManyWithoutPropriedadeInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    culturaId?: StringFieldUpdateOperationsInput | string
    soloId?: StringFieldUpdateOperationsInput | string
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoricoUpdateWithoutPropriedadeInput = {
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    simulacao?: SimulacaoUpdateOneRequiredWithoutHistoricosNestedInput
    Precipitacao?: PrecipitacaoUpdateOneWithoutHistoricoNestedInput
    Solo?: SoloUpdateOneWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateWithoutPropriedadeInput = {
    simulacaoId?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    precipitacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    soloId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUncheckedUpdateManyWithoutPropriedadeInput = {
    simulacaoId?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    precipitacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    soloId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrecipitacaoUpdateWithoutPropriedadeInput = {
    mmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    chuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    mmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    mmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historico?: HistoricoUpdateManyWithoutPrecipitacaoNestedInput
  }

  export type PrecipitacaoUncheckedUpdateWithoutPropriedadeInput = {
    mmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    chuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    mmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    mmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historico?: HistoricoUncheckedUpdateManyWithoutPrecipitacaoNestedInput
  }

  export type PrecipitacaoUncheckedUpdateManyWithoutPropriedadeInput = {
    mmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    chuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    mmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    mmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EstimativasUpdateWithoutPropriedadeInput = {
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    simulacao?: SimulacaoUpdateOneWithoutEstimativasNestedInput
  }

  export type EstimativasUncheckedUpdateWithoutPropriedadeInput = {
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    simulacaoId?: StringFieldUpdateOperationsInput | string
  }

  export type EstimativasUncheckedUpdateManyWithoutPropriedadeInput = {
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    simulacaoId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoricoCreateManyPrecipitacaoInput = {
    id?: string
    simulacaoId: string
    observacao?: string | null
    propriedadeId?: string | null
    soloId?: string | null
    createdAt?: Date | string
  }

  export type HistoricoUpdateWithoutPrecipitacaoInput = {
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    simulacao?: SimulacaoUpdateOneRequiredWithoutHistoricosNestedInput
    Propriedade?: PropriedadeUpdateOneWithoutHistoricoNestedInput
    Solo?: SoloUpdateOneWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateWithoutPrecipitacaoInput = {
    simulacaoId?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    propriedadeId?: NullableStringFieldUpdateOperationsInput | string | null
    soloId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUncheckedUpdateManyWithoutPrecipitacaoInput = {
    simulacaoId?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    propriedadeId?: NullableStringFieldUpdateOperationsInput | string | null
    soloId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoCreateManySoloInput = {
    id?: string
    simulacaoId: string
    observacao?: string | null
    propriedadeId?: string | null
    precipitacaoId?: string | null
    createdAt?: Date | string
  }

  export type PropriedadeSoloCreateManySoloInput = {
    id?: string
    propriedadeId: string
  }

  export type SimulacaoCreateManySoloInput = {
    id?: string
    nomeSimulacao: string
    ano: number
    culturaId: string
    propriedadeId: string
    eto?: number | null
    indiceAridez?: number | null
    precipitacaoMmAno?: number | null
    numeroChuvas?: number | null
    precipitacaoMmDia?: number | null
    cvDia?: number | null
    precipitacaoMmMes?: number | null
    cvMes?: number | null
    altitude?: number | null
    temperaturaMed?: number | null
    umidade?: number | null
    resultado?: number | null
    dataSimulacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type HistoricoUpdateWithoutSoloInput = {
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    simulacao?: SimulacaoUpdateOneRequiredWithoutHistoricosNestedInput
    Propriedade?: PropriedadeUpdateOneWithoutHistoricoNestedInput
    Precipitacao?: PrecipitacaoUpdateOneWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateWithoutSoloInput = {
    simulacaoId?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    propriedadeId?: NullableStringFieldUpdateOperationsInput | string | null
    precipitacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUncheckedUpdateManyWithoutSoloInput = {
    simulacaoId?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    propriedadeId?: NullableStringFieldUpdateOperationsInput | string | null
    precipitacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropriedadeSoloUpdateWithoutSoloInput = {
    propriedade?: PropriedadeUpdateOneRequiredWithoutSolosNestedInput
  }

  export type PropriedadeSoloUncheckedUpdateWithoutSoloInput = {
    propriedadeId?: StringFieldUpdateOperationsInput | string
  }

  export type PropriedadeSoloUncheckedUpdateManyWithoutSoloInput = {
    propriedadeId?: StringFieldUpdateOperationsInput | string
  }

  export type SimulacaoUpdateWithoutSoloInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cultura?: CulturaUpdateOneRequiredWithoutSimulacaoNestedInput
    propriedade?: PropriedadeUpdateOneRequiredWithoutSimulacoesNestedInput
    historicos?: HistoricoUpdateManyWithoutSimulacaoNestedInput
    Estimativas?: EstimativasUpdateManyWithoutSimulacaoNestedInput
  }

  export type SimulacaoUncheckedUpdateWithoutSoloInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    culturaId?: StringFieldUpdateOperationsInput | string
    propriedadeId?: StringFieldUpdateOperationsInput | string
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historicos?: HistoricoUncheckedUpdateManyWithoutSimulacaoNestedInput
    Estimativas?: EstimativasUncheckedUpdateManyWithoutSimulacaoNestedInput
  }

  export type SimulacaoUncheckedUpdateManyWithoutSoloInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    culturaId?: StringFieldUpdateOperationsInput | string
    propriedadeId?: StringFieldUpdateOperationsInput | string
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoricoCreateManySimulacaoInput = {
    id?: string
    observacao?: string | null
    propriedadeId?: string | null
    precipitacaoId?: string | null
    soloId?: string | null
    createdAt?: Date | string
  }

  export type EstimativasCreateManySimulacaoInput = {
    id?: string
    valorTotal?: number | null
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    propriedadeId?: string | null
  }

  export type HistoricoUpdateWithoutSimulacaoInput = {
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Propriedade?: PropriedadeUpdateOneWithoutHistoricoNestedInput
    Precipitacao?: PrecipitacaoUpdateOneWithoutHistoricoNestedInput
    Solo?: SoloUpdateOneWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateWithoutSimulacaoInput = {
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    propriedadeId?: NullableStringFieldUpdateOperationsInput | string | null
    precipitacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    soloId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUncheckedUpdateManyWithoutSimulacaoInput = {
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    propriedadeId?: NullableStringFieldUpdateOperationsInput | string | null
    precipitacaoId?: NullableStringFieldUpdateOperationsInput | string | null
    soloId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstimativasUpdateWithoutSimulacaoInput = {
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedade?: PropriedadeUpdateOneWithoutEstimativasNestedInput
  }

  export type EstimativasUncheckedUpdateWithoutSimulacaoInput = {
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EstimativasUncheckedUpdateManyWithoutSimulacaoInput = {
    valorTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propriedadeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropriedadeCulturaCreateManyCulturaInput = {
    id?: string
    propriedadeId: string
  }

  export type SimulacaoCreateManyCulturaInput = {
    id?: string
    nomeSimulacao: string
    ano: number
    soloId: string
    propriedadeId: string
    eto?: number | null
    indiceAridez?: number | null
    precipitacaoMmAno?: number | null
    numeroChuvas?: number | null
    precipitacaoMmDia?: number | null
    cvDia?: number | null
    precipitacaoMmMes?: number | null
    cvMes?: number | null
    altitude?: number | null
    temperaturaMed?: number | null
    umidade?: number | null
    resultado?: number | null
    dataSimulacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PropriedadeCulturaUpdateWithoutCulturaInput = {
    propriedade?: PropriedadeUpdateOneRequiredWithoutCulturasNestedInput
  }

  export type PropriedadeCulturaUncheckedUpdateWithoutCulturaInput = {
    propriedadeId?: StringFieldUpdateOperationsInput | string
  }

  export type PropriedadeCulturaUncheckedUpdateManyWithoutCulturaInput = {
    propriedadeId?: StringFieldUpdateOperationsInput | string
  }

  export type SimulacaoUpdateWithoutCulturaInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    solo?: SoloUpdateOneRequiredWithoutSimulacaoNestedInput
    propriedade?: PropriedadeUpdateOneRequiredWithoutSimulacoesNestedInput
    historicos?: HistoricoUpdateManyWithoutSimulacaoNestedInput
    Estimativas?: EstimativasUpdateManyWithoutSimulacaoNestedInput
  }

  export type SimulacaoUncheckedUpdateWithoutCulturaInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    soloId?: StringFieldUpdateOperationsInput | string
    propriedadeId?: StringFieldUpdateOperationsInput | string
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historicos?: HistoricoUncheckedUpdateManyWithoutSimulacaoNestedInput
    Estimativas?: EstimativasUncheckedUpdateManyWithoutSimulacaoNestedInput
  }

  export type SimulacaoUncheckedUpdateManyWithoutCulturaInput = {
    nomeSimulacao?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    soloId?: StringFieldUpdateOperationsInput | string
    propriedadeId?: StringFieldUpdateOperationsInput | string
    eto?: NullableFloatFieldUpdateOperationsInput | number | null
    indiceAridez?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmAno?: NullableFloatFieldUpdateOperationsInput | number | null
    numeroChuvas?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmDia?: NullableFloatFieldUpdateOperationsInput | number | null
    cvDia?: NullableFloatFieldUpdateOperationsInput | number | null
    precipitacaoMmMes?: NullableFloatFieldUpdateOperationsInput | number | null
    cvMes?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaMed?: NullableFloatFieldUpdateOperationsInput | number | null
    umidade?: NullableFloatFieldUpdateOperationsInput | number | null
    resultado?: NullableFloatFieldUpdateOperationsInput | number | null
    dataSimulacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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