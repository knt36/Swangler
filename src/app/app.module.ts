import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SwaggerService } from './services/swagger.service';

import { BsDatepickerModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [SwaggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
