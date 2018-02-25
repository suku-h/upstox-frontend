import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { WebSocketService } from '../web-socket/web-socket.service'

@Injectable()
export class ListenerService {
  public data: Subject<any>

  constructor(
    private webSocketService: WebSocketService
  ) {
    this.data = <Subject<any>>webSocketService
      .connect()
      .map((response: any): any => {
        return response
      })
  }
}
