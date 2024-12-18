/* eslint-disable ts/prefer-literal-enum-member */
export enum TimeEnum {
  SECOND = 1000,
  MINUTE = 60 * SECOND,
  HOUR = 60 * MINUTE,
  DAY = 24 * HOUR,
  POLLING_INTERVAL = 30 * SECOND,
  LONG_POLLING_INTERVAL = 3 * MINUTE,
}
