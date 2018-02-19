import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { WebSocketService } from '../../services/web-socket.service'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  private data

  constructor(
    private webSocketService: WebSocketService
  ) {
    this.data = <Subject<any>>webSocketService
      .connect()
      .map((response: any): any => {
        console.log('response', response)
        return response;
      })
  }

  ngOnInit() {
  }

}
