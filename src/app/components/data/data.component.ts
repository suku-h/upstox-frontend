import * as _ from 'lodash'
import AddDataAction from '../../../store/actions/data/adddata.action'
import AppState from '../../../shared/interfaces/app.state'
import Data from '../../../shared/pojos/data'
import DataState from '../../../shared/interfaces/data.state'
import { Component, OnInit } from '@angular/core'
import { ListenerService } from '../../services/listener/listener.service'
import { MatTableDataSource } from '@angular/material'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'
import { Subject } from 'rxjs/Subject'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {
  public data: Data[]
  public dataSource = new MatTableDataSource()
  public sortStr

  constructor(
    private listenerService: ListenerService,
    private store: Store<AppState>
  ) {
    this.store.select('dataState').subscribe((dataState: DataState) => {
      this.sortStr = dataState.sortType.sortString

      switch (dataState.sortType.order) {
        case 'time_up':
          this.data = _.sortBy(dataState.data, 'timestamp').reverse()
          break
        case 'time_down':
          this.data = _.sortBy(dataState.data, 'timestamp')
          break
        case 'close_up':
          this.data = _.sortBy(dataState.data, 'close').reverse()
          break
        case 'close_down':
          this.data = _.sortBy(dataState.data, 'close')
          break
      }
    })
  }


  ngOnInit() {
    this.listenerService.data.subscribe(newData => {
      this.store.dispatch(new AddDataAction(newData))
    })
  }
}
