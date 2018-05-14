import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';

import { ActorService } from './service/actor.service';


@NgModule({
  declarations: [
    AppComponent,
    ActorListComponent
  ],
  imports: [
	HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
	  ActorService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
