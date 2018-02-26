import AddGraphDataAction from '../../../store/actions/graphdata/addgraphdata.action'
import AppState from '../../../shared/interfaces/app.state'
import Constants from '../../../shared/utils/constants'
import GraphData from '../../../shared/pojos/graphdata'
import GraphDataState from '../../../shared/interfaces/graphdata.state'
import GraphInput from '../../../shared/pojos/graphinput'
import GraphSeries from '../../../shared/pojos/graphseries'
import { Component, OnInit } from '@angular/core'
import { ListenerService } from '../../services/listener/listener.service'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-graph-data',
  templateUrl: './graph-data.component.html',
  styleUrls: ['./graph-data.component.css']
})
export class GraphDataComponent implements OnInit {
  public chartData: any
  private graphData: GraphData[]

  public view: any[] = [500, 400]

  public showXAxis = true
  public showYAxis = true
  public gradient = false
  public showLegend = false
  public showXAxisLabel = false
  public xAxisLabel = 'Dates'
  public showYAxisLabel = false
  public yAxisLabel = 'Close'
  public yScaleMax = 1400

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  }

  autoScale = false

  constructor(
    private store: Store<AppState>,
    private listenerService: ListenerService
  ) {
    this.chartData = [{
      name: 'Graph',
      series: this.getInitData()
    }]

    this.store.select('graphDataState').subscribe((graphDataState: GraphDataState) => {
      this.graphData = graphDataState.graphData

      if (this.chartData[0].series.length > Constants.MAX_GRAPH_POINTS) {
        this.chartData[0].series.shift()
      }

      if (this.graphData.length > 0) {
        let graphInput = new GraphInput()
        let index = this.graphData.length - 1
        graphInput.name = this.graphData[index].date
        graphInput.value = this.graphData[index].value

        this.chartData[0].series.push(graphInput)
        this.chartData = [...this.chartData]
      }
    })
  }

  ngOnInit() {
    this.listenerService.data.subscribe(newData => {
      this.store.dispatch(new AddGraphDataAction(newData))
    })
  }

  getInitData() {
    let initData: GraphInput[] = []
    let graphInput = new GraphInput()
    graphInput.name = '0'
    graphInput.value = 0
    initData.push(graphInput)
    return initData
  }
}
