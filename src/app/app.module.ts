import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SwaggerService } from './services/swagger.service';
import { LocalStorageService } from './services/local-storage.service';

import { BsDatepickerModule } from 'ngx-bootstrap';
import {SampleView} from './views/sample.controller';
import {AppRoutingModule} from './app-routing.module';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleView,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule
  ],
  providers: [SwaggerService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
