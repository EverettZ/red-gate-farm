import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [
    PublicRoutingModule
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    NavComponent
  ],
  providers: []
})
export class PublicModule { }
