import * as moment from 'moment-timezone'

export const FORMAT_DDMMMYYYY = 'DD MMM YYYY'

const timezone = 'Asia/Calcutta'

export function getFomattedDate(timestamp: number, format: string): string {
  return moment(timestamp).tz(timezone).format(format)
}