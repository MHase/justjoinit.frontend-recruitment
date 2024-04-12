/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Calculation {
  /**
   * IANA Timezone used
   * @example "Europe/Amsterdam"
   */
  timeZone?: string | null;
  /**
   * Original DateTime given
   * @format date-time
   * @example "2021-11-27T05:45:00"
   */
  originalDateTime?: string;
  /**
   * The timespan used to increase or decrease the original datetime by in format: d:hh:mm:ss
   * @example "16:03:45:17"
   */
  usedTimeSpan?: string | null;
  calculationResult?: CalculationResult;
}

export interface CalculationRequestCurrent {
  /**
   * IANA TimeZone
   * @example "Europe/Amsterdam"
   */
  timeZone: string;
  /**
   * Time span to increase or decrease datetime by in format: d:hh:mm:ss or in format: d:hh:mm:ss.fff
   * @example "16:03:45:17"
   */
  timeSpan: string;
}

export interface CalculationRequestCustom {
  /**
   * IANA TimeZone
   * @example "Europe/Amsterdam"
   */
  timeZone: string;
  /**
   * DateTime in format: yyyy-MM-dd HH:mm:ss or in format: yyyy-MM-dd HH:mm:ss.ffffff
   * @example "2021-11-27 05:45:00"
   */
  dateTime: string;
  /**
   * Time span to increase or decrease datetime by in format: d:hh:mm:ss or in format: d:hh:mm:ss.fff
   * @example "16:03:45:17"
   */
  timeSpan: string;
  /**
   * Sometimes a time can be ambiguous due to DST switching.
   * For example, suppose the time zone goes backward
   * at 2am, so the second after 01:59:59 becomes 01:00:00. In that case,
   * times such as 01:30:00 occur twice. By using "earlier" it uses the earlier version of 01:30:00 where 01:59:59 hasn't been passed.
   * By using "later" it uses the later version of 01:30:00 where the time has passed 01:59:59.
   * @example ""
   */
  dstAmbiguity?: string | null;
}

export interface CalculationResult {
  /**
   * Year
   * @format int32
   * @example 2021
   */
  year?: number;
  /**
   * Month
   * @format int32
   * @example 12
   */
  month?: number;
  /**
   * Day
   * @format int32
   * @example 13
   */
  day?: number;
  /**
   * Hour of the day in range 0-24
   * @format int32
   * @example 9
   */
  hour?: number;
  /**
   * Minute
   * @format int32
   * @example 30
   */
  minute?: number;
  /**
   * Second
   * @format int32
   * @example 17
   */
  seconds?: number;
  /**
   * Milliseconds
   * @format int32
   * @example 0
   */
  milliSeconds?: number;
  /**
   * Full date time
   * @format date-time
   * @example "2021-12-13T09:30:17"
   */
  dateTime?: string;
  /**
   * Date string
   * @example "13/12/2021"
   */
  date?: string | null;
  /**
   * Time string
   * @example "09:30"
   */
  time?: string | null;
  /**
   * Boolean describing whether DST is applied and active in that timezone
   * @example false
   */
  dstActive?: boolean;
}

export interface Conversion {
  fromTimezone?: string | null;
  /** @format date-time */
  fromDateTime?: string;
  toTimeZone?: string | null;
  conversionResult?: ConversionResult;
}

export interface ConversionResult {
  /**
   * Year
   * @format int32
   * @example 2021
   */
  year?: number;
  /**
   * Month
   * @format int32
   * @example 3
   */
  month?: number;
  /**
   * Day
   * @format int32
   * @example 14
   */
  day?: number;
  /**
   * Hour of the day in range 0-24
   * @format int32
   * @example 9
   */
  hour?: number;
  /**
   * Minute
   * @format int32
   * @example 45
   */
  minute?: number;
  /**
   * Second
   * @format int32
   * @example 0
   */
  seconds?: number;
  /**
   * Milliseconds
   * @format int32
   * @example 0
   */
  milliSeconds?: number;
  /**
   * Full date time
   * @format date-time
   * @example "2021-03-14T09:45:00"
   */
  dateTime?: string;
  /**
   * Date string
   * @example "14/03/2021"
   */
  date?: string | null;
  /**
   * Time string
   * @example "09:45"
   */
  time?: string | null;
  /**
   * TimeZone of the result
   * @example "America/Los_Angeles"
   */
  timeZone?: string | null;
  /**
   * Boolean describing whether DST is applied and active in that timezone
   * @example true
   */
  dstActive?: boolean;
}

export interface ConvertRequest {
  /**
   * IANA TimeZone
   * @example "Europe/Amsterdam"
   */
  fromTimeZone: string;
  /**
   * DateTime in format: yyyy-MM-dd HH:mm:ss or in format: yyyy-MM-dd HH:mm:ss.ffffff
   * @example "2021-03-14 17:45:00"
   */
  dateTime: string;
  /**
   * IANA TimeZone
   * @example "America/Los_Angeles"
   */
  toTimeZone: string;
  /**
   * Sometimes a time can be ambiguous due to DST switching.
   * For example, suppose the time zone goes backward
   * at 2am, so the second after 01:59:59 becomes 01:00:00. In that case,
   * times such as 01:30:00 occur twice. By using "earlier" it uses the earlier version of 01:30:00 where 01:59:59 hasn't been passed.
   * By using "later" it uses the later version of 01:30:00 where the time has passed 01:59:59.
   * @example ""
   */
  dstAmbiguity?: string | null;
}

export interface CurrentTime {
  /**
   * Year
   * @format int32
   * @example 2020
   */
  year?: number;
  /**
   * Month
   * @format int32
   * @example 12
   */
  month?: number;
  /**
   * Day
   * @format int32
   * @example 13
   */
  day?: number;
  /**
   * Hour of the day in range 0-24
   * @format int32
   * @example 9
   */
  hour?: number;
  /**
   * Minute
   * @format int32
   * @example 30
   */
  minute?: number;
  /**
   * Second
   * @format int32
   * @example 17
   */
  seconds?: number;
  /**
   * Milliseconds
   * @format int32
   * @example 0
   */
  milliSeconds?: number;
  /**
   * Full date time
   * @format date-time
   * @example "2020-12-13T09:30:17"
   */
  dateTime?: string;
  /**
   * Date string
   * @example "13/12/2020"
   */
  date?: string | null;
  /**
   * Time string
   * @example "09:30"
   */
  time?: string | null;
  /**
   * TimeZone of the result
   * @example "America/Los_Angeles"
   */
  timeZone?: string | null;
  dayOfWeek?: DayOfWeek;
  /**
   * Boolean describing whether DST is applied and active in that timezone
   * @example false
   */
  dstActive?: boolean;
}

export interface DayOfTheWeekResult {
  dayOfWeek?: DayOfWeek;
}

export enum DayOfWeek {
  Sunday = 'Sunday',
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
}

export interface DstInterval {
  dstName?: string | null;
  dstOffsetToUtc?: Offset;
  dstOffsetToStandardTime?: Offset;
  /** @format date-time */
  dstStart?: string | null;
  /** @format date-time */
  dstEnd?: string | null;
  dstDuration?: Duration;
}

export interface Duration {
  /** @format int32 */
  days?: number;
  /** @format int64 */
  nanosecondOfDay?: number;
  /** @format int32 */
  hours?: number;
  /** @format int32 */
  minutes?: number;
  /** @format int32 */
  seconds?: number;
  /** @format int32 */
  milliseconds?: number;
  /** @format int32 */
  subsecondTicks?: number;
  /** @format int32 */
  subsecondNanoseconds?: number;
  /** @format int64 */
  bclCompatibleTicks?: number;
  /** @format double */
  totalDays?: number;
  /** @format double */
  totalHours?: number;
  /** @format double */
  totalMinutes?: number;
  /** @format double */
  totalSeconds?: number;
  /** @format double */
  totalMilliseconds?: number;
  /** @format double */
  totalTicks?: number;
  /** @format double */
  totalNanoseconds?: number;
}

export interface Offset {
  /** @format int32 */
  seconds?: number;
  /** @format int32 */
  milliseconds?: number;
  /** @format int64 */
  ticks?: number;
  /** @format int64 */
  nanoseconds?: number;
}

export interface ProblemDetails {
  type?: string | null;
  title?: string | null;
  /** @format int32 */
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: any;
}

export interface TimeZoneData {
  timeZone?: string | null;
  /** @format date-time */
  currentLocalTime?: string;
  currentUtcOffset?: Offset;
  standardUtcOffset?: Offset;
  hasDayLightSaving?: boolean;
  isDayLightSavingActive?: boolean;
  dstInterval?: DstInterval;
}

export interface Translation {
  /**
   * Given date time to translate
   * @example "2021-03-14 17:45:00"
   */
  dateTime?: string | null;
  /**
   * Given language code to translate the date time into
   * @example "de"
   */
  languageCode?: string | null;
  /**
   * Full translated date time
   * @example "Sonntag, 14. März 2021 17:45:00"
   */
  friendlyDateTime?: string | null;
  /**
   * Translated date
   * @example "Sonntag, 14. März 2021"
   */
  friendlyDate?: string | null;
  /**
   * Translated time
   * @example "17:45:00"
   */
  friendlyTime?: string | null;
}

export interface TranslationRequest {
  /**
   * DateTime in format: yyyy-MM-dd HH:mm:ss or in format: yyyy-MM-dd HH:mm:ss.ffffff
   * @example "2021-03-14 17:45:00"
   */
  dateTime: string;
  /**
   * 2 letter ISO 639-1 language code. List of codes can be found at: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
   * @example "de"
   */
  languageCode: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>(
    { body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams,
  ): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Time API
 * @version 0.97.2
 * @contact TimeAPI Support <support@timeapi.io>
 *
 * This is a simple time API that can be used for free.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Time
     * @name TimeCurrentZoneList
     * @summary Gets the current time of a time zone.
     * @request GET:/api/Time/current/zone
     */
    timeCurrentZoneList: (
      query?: {
        /**
         * Full IANA time zone names.
         * @example "Europe/Amsterdam"
         */
        timeZone?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CurrentTime, string>({
        path: `/api/Time/current/zone`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Time
     * @name TimeCurrentCoordinateList
     * @summary Gets the current time of a time zone by geo coordinates.
     * @request GET:/api/Time/current/coordinate
     */
    timeCurrentCoordinateList: (
      query?: {
        /**
         * Latitude ranging from -90 to 90
         * @format float
         * @example 38.9
         */
        latitude?: number;
        /**
         * Longitude ranging from -180 to 180
         * @format float
         * @example -77.03
         */
        longitude?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CurrentTime, ProblemDetails>({
        path: `/api/Time/current/coordinate`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Time
     * @name TimeCurrentIpList
     * @summary Gets the current time of a time zone by ip address.
     * @request GET:/api/Time/current/ip
     */
    timeCurrentIpList: (
      query?: {
        /**
         * IPv4 address
         * @example "237.71.232.203"
         */
        ipAddress?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CurrentTime, ProblemDetails>({
        path: `/api/Time/current/ip`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags TimeZone
     * @name TimeZoneAvailableTimeZonesList
     * @summary Gets all the available IANA time zones.
     * @request GET:/api/TimeZone/AvailableTimeZones
     */
    timeZoneAvailableTimeZonesList: (params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/TimeZone/AvailableTimeZones`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags TimeZone
     * @name TimeZoneZoneList
     * @summary Gets the time zone info by IANA time zone name
     * @request GET:/api/TimeZone/zone
     */
    timeZoneZoneList: (
      query?: {
        /**
         * Full IANA time zone name.
         * @example "Europe/Amsterdam"
         */
        timeZone?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TimeZoneData, string | ProblemDetails>({
        path: `/api/TimeZone/zone`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags TimeZone
     * @name TimeZoneCoordinateList
     * @summary Gets the time zone info of a geo coordinate.
     * @request GET:/api/TimeZone/coordinate
     */
    timeZoneCoordinateList: (
      query?: {
        /**
         * Latitude ranging from -90 to 90
         * @format float
         * @example 38.9
         */
        latitude?: number;
        /**
         * Longitude ranging from -180 to 180
         * @format float
         * @example -77.03
         */
        longitude?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TimeZoneData, string>({
        path: `/api/TimeZone/coordinate`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags TimeZone
     * @name TimeZoneIpList
     * @summary Gets the time zone info of an IPv4 address.
     * @request GET:/api/TimeZone/ip
     */
    timeZoneIpList: (
      query?: {
        /**
         * IPv4 address
         * @example "237.71.232.203"
         */
        ipAddress?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TimeZoneData, string>({
        path: `/api/TimeZone/ip`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Sample request: POST /Conversion/ConvertTimeZone { "fromTimeZone": "Europe/Amsterdam", "dateTime": "2021-03-14 17:45:00", "toTimeZone": "America/Los_Angeles", "dstAmbiguity": "" }
     *
     * @tags Conversion
     * @name ConversionConvertTimeZoneCreate
     * @summary Allows you to convert the time in a timezone to the time in another timezone
     * @request POST:/api/Conversion/ConvertTimeZone
     */
    conversionConvertTimeZoneCreate: (data: ConvertRequest, params: RequestParams = {}) =>
      this.request<Conversion, string>({
        path: `/api/Conversion/ConvertTimeZone`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Sample request: POST /Conversion/Translate { "dateTime" : "2021-03-14 17:45:00", "languageCode" : "de" }
     *
     * @tags Conversion
     * @name ConversionTranslateCreate
     * @summary Converts a date time into a language translated friendly date time string
     * @request POST:/api/Conversion/Translate
     */
    conversionTranslateCreate: (data: TranslationRequest, params: RequestParams = {}) =>
      this.request<Translation, string>({
        path: `/api/Conversion/Translate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Conversion
     * @name ConversionDayOfTheWeekDetail
     * @summary Convert a date to the day of the week
     * @request GET:/api/Conversion/DayOfTheWeek/{date}
     */
    conversionDayOfTheWeekDetail: (date: string, params: RequestParams = {}) =>
      this.request<DayOfTheWeekResult, string>({
        path: `/api/Conversion/DayOfTheWeek/${date}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Conversion
     * @name ConversionDayOfTheYearDetail
     * @summary Convert a date to the day of the year
     * @request GET:/api/Conversion/DayOfTheYear/{date}
     */
    conversionDayOfTheYearDetail: (date: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/api/Conversion/DayOfTheYear/${date}`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description Sample request: POST /current/increment { "timeZone": "Europe/Amsterdam", "timeSpan": "16:03:45:17" }
     *
     * @tags Calculation
     * @name CalculationCurrentIncrementCreate
     * @summary Allows you to increment the current datetime by a specific timespan.
     * @request POST:/api/Calculation/current/increment
     */
    calculationCurrentIncrementCreate: (
      data: CalculationRequestCurrent,
      params: RequestParams = {},
    ) =>
      this.request<Calculation, string>({
        path: `/api/Calculation/current/increment`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Sample request: POST /current/decrement { "timeZone": "Europe/Amsterdam", "timeSpan": "16:03:45:17" }
     *
     * @tags Calculation
     * @name CalculationCurrentDecrementCreate
     * @summary Allows you to decrement the current datetime by a specific timespan.
     * @request POST:/api/Calculation/current/decrement
     */
    calculationCurrentDecrementCreate: (
      data: CalculationRequestCurrent,
      params: RequestParams = {},
    ) =>
      this.request<Calculation, string>({
        path: `/api/Calculation/current/decrement`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Sample request: POST /custom/increment { "timeZone": "Europe/Amsterdam", "dateTime": "2021-11-27 05:45:00", "timeSpan": "16:03:45:17", "dstAmbiguity": "" }
     *
     * @tags Calculation
     * @name CalculationCustomIncrementCreate
     * @summary Allows you to increment a custom datetime by a specific timespan.
     * @request POST:/api/Calculation/custom/increment
     */
    calculationCustomIncrementCreate: (
      data: CalculationRequestCustom,
      params: RequestParams = {},
    ) =>
      this.request<Calculation, string>({
        path: `/api/Calculation/custom/increment`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Sample request: POST /custom/decrement { "timeZone": "Europe/Amsterdam", "dateTime": "2021-11-27 05:45:00", "timeSpan": "16:03:45:17", "dstAmbiguity": "" }
     *
     * @tags Calculation
     * @name CalculationCustomDecrementCreate
     * @summary Allows you to decrement a custom datetime by a specific timespan.
     * @request POST:/api/Calculation/custom/decrement
     */
    calculationCustomDecrementCreate: (
      data: CalculationRequestCustom,
      params: RequestParams = {},
    ) =>
      this.request<Calculation, string>({
        path: `/api/Calculation/custom/decrement`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
}
