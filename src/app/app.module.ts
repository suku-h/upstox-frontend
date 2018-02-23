import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { DataComponent } from './components/data/data.component'
import { ListenerService } from './services/listener/listener.service'
import { MaterialModule } from './modules/material.module'
import { NgModule } from '@angular/core'
import { WebSocketService } from './services/web-socket/web-socket.service'


@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [WebSocketService, ListenerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
