import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewerComponent } from './viewer/viewer.component';
import { EarthService } from './services/earth.service';
import { EarthFormComponent } from './earth-form/earth-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    EarthFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EarthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
