import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SampleViewComponent} from './views/sample.controller';


const routes: Routes = [
  { path: '', redirectTo: 'sampleView', pathMatch : 'full'},
  { path: 'sampleView', component: SampleViewComponent, pathMatch : 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
