import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from 'ngx-bootstrap';


const config: SocketIoConfig = { url: 'http://n3gro.com:3000', options: {} };
/* const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} }; */

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    AlertModule.forRoot(),
    NgbModule,
    BrowserModule,
    FormsModule ,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
