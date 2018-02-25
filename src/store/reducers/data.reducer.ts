import AddDataAction from '../actions/data/adddata.action'
import Data from '../../shared/pojos/data'
import DataState from '../states/data.state'
import SortDataAction from '../actions/data/sortdata.action'
import SortType from '../../shared/pojos/sorttype'
import { Action } from '@ngrx/store'
import { ADD_DATA, SORT_DATA } from '../actions/index'

type Actions = AddDataAction | SortDataAction

export function dataReducer(state = DataState.getInitialState(), action: Actions): DataState {
  switch (action.type) {
    case ADD_DATA:
      let newData: Data[] = state.data
      newData.push(action.payload)
      if (state.data.length > 10) {
        state.data.shift()
      }
      return { ...state, data: newData }
    case SORT_DATA:
      return { ...state, sortType: action.payload }
    default:
      return state
  }
}
