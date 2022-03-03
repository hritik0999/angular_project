import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './store/user.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({users: reducer}),
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([UserEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
