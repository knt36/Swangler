import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SwaggerService } from './services/swagger.service';
import {AuthComponent} from './components/authComponent/authComponent.controller';
import { LocalStorageService } from './services/local-storage.service';
import {FormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import {SampleView} from './views/sample.controller';
import {AppRoutingModule} from './app-routing.module';

import { ContactComponent } from './components/contact/contact.component';
import {HttpResModal} from './components/httpResModalComponent/httpResModal.controller';
import {NgClass} from '@angular/common';

@NgModule({
  declarations: [
    ContactComponent,
    AuthComponent,
    SampleView,
    HttpResModal
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [SwaggerService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
