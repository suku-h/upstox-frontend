import SortType from '../../../shared/pojos/sorttype'
import { Action } from '@ngrx/store'
import { SORT_DATA } from '../index'

export default class SortDataAction implements Action {
  readonly type = SORT_DATA

  constructor(public payload: SortType) {
    payload.setSortString()
  }
}