import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleViewComponent } from './views/sample/sample.controller';
import { MainViewComponent } from './views/main/main.component';
import { AppComponent } from './app.component';
import { EndpointsViewComponent } from './views/endpoints-view/endpoints-view.component';


const routes: Routes = [
  { path: '', component: EndpointsViewComponent },
  { path: ':endpointTag', component: EndpointsViewComponent, },
  { path: ':endpointTag/:endpointId', component: EndpointsViewComponent, },
  { path: '**', component: EndpointsViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
