import * as io from 'socket.io-client'
import * as Rx from 'rxjs/Rx'
import Constants from '../../utils/constants'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class WebSocketService {
  private socket

  constructor() { }

  connect(): Rx.Subject<MessageEvent> {
    this.socket = io(Constants.DATA_URL)

    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        console.log('received new message', data)
        observer.next(data)
      })

      return () => {
        this.socket.disconnect()
      }
    })

    return Rx.Subject.create(observable)
  }

}
