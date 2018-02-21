import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SwaggerService } from './services/swagger.service';

import { BsDatepickerModule } from 'ngx-bootstrap';
import {SampleView} from './views/sample.controller';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SampleView
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule
  ],
  providers: [SwaggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
