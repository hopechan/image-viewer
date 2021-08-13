import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarthFormComponent } from './earth-form/earth-form.component';

import { ViewerComponent } from "./viewer/viewer.component";

const routes: Routes = [
  {path: "", component: EarthFormComponent},
  { path: "result", component: ViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
