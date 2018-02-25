import DataState from './data.state'
import GraphDataState from './graphdata.state'

export default interface AppState {
  dataState: DataState
  graphDataState: GraphDataState
}