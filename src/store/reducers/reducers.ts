import AppState from '../../shared/interfaces/app.state'
import { ActionReducerMap } from '@ngrx/store'
import { dataReducer } from './data.reducer'
import { graphDataReducer } from './graphdata.reducer'

export const reducers: ActionReducerMap<AppState> = {
  dataState: dataReducer,
  graphDataState: graphDataReducer
}

