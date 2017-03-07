import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

import { StoreModule } from '../store';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('lazy', reducers),
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ],
  declarations: [HomeComponent]
})
export class LazyModule { }
