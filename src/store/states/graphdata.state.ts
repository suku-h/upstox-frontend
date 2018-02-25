import GraphData from '../../shared/pojos/graphdata'

export default class GraphDataState {
  graphData: GraphData[]

  static getInitialState(): GraphDataState {
    let graphDataState = new GraphDataState()
    graphDataState.graphData = []
    return graphDataState
  }
}