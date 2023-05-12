import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestelformulierComponent } from './bestelformulier/bestelformulier.component';
import { WinkelmandjeComponent } from './winkelmandje/winkelmandje.component';

@NgModule({
  declarations: [
    AppComponent,
    BestelformulierComponent,
    WinkelmandjeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
