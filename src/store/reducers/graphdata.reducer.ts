import AddGraphDataAction from '../actions/graphdata/addgraphdata.action'
import Constants from '../../shared/utils/constants'
import GraphData from '../../shared/pojos/graphdata'
import GraphDataState from '../states/graphdata.state'
import { ADD_GRAPH_DATA } from '../actions/index'


export function graphDataReducer(state: GraphDataState = GraphDataState.getInitialState(), action: AddGraphDataAction): GraphDataState {
  switch (action.type) {
    case ADD_GRAPH_DATA:
      let newData: GraphData[] = state.graphData
      newData.push(action.payload)
      if (state.graphData.length > Constants.MAX_GRAPH_POINTS) {
        state.graphData.shift()
      }
      return { ...state, graphData: newData }
    default:
      return state
  }
}