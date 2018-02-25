import AppState from '../../../shared/interfaces/app.state'
import SortDataAction from '../../../store/actions/data/sortdata.action'
import SortType from '../../../shared/pojos/sorttype'
import { Component, OnInit } from '@angular/core'
import { MatDialogRef } from '@angular/material'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-sort-options',
  templateUrl: './sort-options.component.html',
  styleUrls: ['./sort-options.component.css']
})
export class SortOptionsComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private dialogRef: MatDialogRef<SortOptionsComponent>
  ) { }

  ngOnInit() {
  }

  optionClicked(option: 'time_up' | 'time_down' | 'close_up' | 'close_down') {
    this.dialogRef.close()
    let sortType = new SortType()
    sortType.order = option
    this.store.dispatch(new SortDataAction(sortType))
  }
}
