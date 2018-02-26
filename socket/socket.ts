import * as express from 'express'
import * as socketIO from 'socket.io'
import Constants from './util/constants'
import { createServer, Server } from 'http'

const TODAY = new Date().getTime()

class SocketServer {
  public app: express.Application
  private server: Server
  private io: socketIO.Server
  private port: string | number
  private dataInterval

  constructor() {
    this.app = express()
    this.port = process.env.PORT || 1331
    this.server = createServer(this.app)
    this.io = socketIO(this.server)
    this.listen()
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log('Running server on port %s', this.port)
    })

    this.sendData()

    this.io.on('connect', (socket: any) => {
      console.log('Connected client on port %s.', this.port)

      socket.on('disconnect', () => {
        console.log('Client disconnected')
      })
    })
  }

  private sendData() {
    let i = 0
    this.dataInterval = setInterval(() => {
      this.io.emit('message', this.getData(i++))
    }, 3000)
  }

  private getTimestamp(i: number): number {
    return TODAY + i * Constants.MILLIS_IN_DAY
  }

  /**
   * Get random values between 700 & 1200
  */
  private getOpenClose(): number {
    return 700 + Math.floor(Math.random() * 500)
  }

  /**
   * Get random value between 5 - 10 lakhs
  */
  private getVolume(): number {
    return 500000 + Math.floor(Math.random() * 500000)
  }

  /**
   * Low should not be higher than both open & close
   * @param open
   * @param close
   */
  private getLow(open: number, close: number): number {
    const maxRange = Math.min(open, close) - 700
    return 700 + Math.floor(Math.random() * maxRange)
  }

  /**
   * High should not be lower than both open & close
   * @param open
   * @param close
   */
  private getHigh(open: number, close: number): number {
    const maxRange = 1200 - Math.max(open, close)
    return Math.max(open, close) + Math.floor(Math.random() * maxRange)
  }

  private getData(i: number) {
    const timeStamp = this.getTimestamp(i)
    const open = this.getOpenClose()
    const close = this.getOpenClose()
    const volume = this.getVolume()
    const high = this.getHigh(open, close)
    const low = this.getLow(open, close)

    const dataArr = [timeStamp, open, high, low, close, volume]

    return dataArr.toString()
  }
}

export default new SocketServer().app