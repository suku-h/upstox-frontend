import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { DataComponent } from './components/data/data.component'
import { NgModule } from '@angular/core'
import { WebSocketService } from './services/web-socket.service'


@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
