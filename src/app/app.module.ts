import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { TextfieldComponent } from './textfield/textfield.component';
import { DataComponent } from './data/data.component';
import {TodoService} from "./todoservice";


@NgModule({
  declarations: [
    AppComponent,
    TextfieldComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
