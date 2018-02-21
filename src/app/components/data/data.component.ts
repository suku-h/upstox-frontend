import { Component, OnInit } from '@angular/core'
import { ListenerService } from '../../services/listener/listener.service'
import { Subject } from 'rxjs/Subject'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {
  private data

  constructor(
    private listenerService: ListenerService
  ) { }

  ngOnInit() {
    this.listenerService.messages.subscribe(msg => {
      console.log(msg)
    })
  }
}
