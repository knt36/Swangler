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

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SampleView
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
