import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgIconsModule} from "@ng-icons/core";
import {HeroBan, HeroPaperAirplane, HeroPlus, HeroTrashSolid} from "@ng-icons/heroicons";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    NgIconsModule.withIcons({  HeroTrashSolid,HeroPlus,HeroPaperAirplane ,HeroBan    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
