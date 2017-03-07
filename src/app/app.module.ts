import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { StoreModule } from './store';
import { AppComponent } from './app.component';

import { reducers } from './reducers';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
