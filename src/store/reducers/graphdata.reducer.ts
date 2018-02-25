import AddGraphDataAction from '../actions/graphdata/addgraphdata.action'
import GraphDataState from '../states/graphdata.state'
import { ADD_GRAPH_DATA } from '../actions/index'


export function graphDataReducer(state: GraphDataState = GraphDataState.getInitialState(), action: AddGraphDataAction): GraphDataState {
  switch (action.type) {
    case ADD_GRAPH_DATA:
      if (state.graphData.length < 100) {
        state.graphData.push(action.payload)
      } else {
        state.graphData.push(action.payload)
        state.graphData.shift()
      }
      return state
    default:
      return state
  }
}