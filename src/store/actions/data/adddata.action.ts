import Data from '../../../shared/pojos/data'
import { Action } from '@ngrx/store'
import { ADD_DATA } from '../index'
import { FORMAT_DDMMMYYYY, getFomattedDate } from '../../../shared/utils/datetimeutil'

export default class AddDataAction implements Action {
  readonly type = ADD_DATA
  public payload: Data

  constructor(newData: string) {
    let dataArr = newData.split(',')
    this.payload = new Data()
    this.payload.timestamp = parseInt(dataArr[0])
    this.payload.date = getFomattedDate(this.payload.timestamp, FORMAT_DDMMMYYYY)
    this.payload.open = parseInt(dataArr[1])
    this.payload.high = parseInt(dataArr[2])
    this.payload.low = parseInt(dataArr[3])
    this.payload.close = parseInt(dataArr[4])
    this.payload.volume = parseInt(dataArr[5])
  }
}