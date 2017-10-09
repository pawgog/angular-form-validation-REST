import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule, NoopAnimationsModule}  from '@angular/platform-browser/animations';
import { MdButtonModule, MdIconModule, MatInputModule } from '@angular/material';

import { AppService } from './app.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // forms
    FormsModule,
    ReactiveFormsModule,
    // Angular material
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdIconModule,
    MatInputModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
