import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from './materials.module';

import { AppComponent } from './app.component';      
import { RsvpComponent } from './rsvp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//All components in app must be imported & declared in AppModule
//Other modules must be imported
@NgModule({
  declarations: [
    AppComponent,
    RsvpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

