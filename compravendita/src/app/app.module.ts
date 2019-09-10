import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UtentiComponent } from './utenti/utenti.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NewObjectComponent } from './new-object/new-object.component';

@NgModule({
  declarations: [
    AppComponent,
    UtentiComponent,
    NewObjectComponent
    
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }