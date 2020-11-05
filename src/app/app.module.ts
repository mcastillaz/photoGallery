import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { PothosComponent } from './pothos/pothos.component';
import { AlbumComponent } from './album/album.component';
import {PrimengDefinitionModule} from './primeng-definition/primeng-definition.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    PothosComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengDefinitionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
