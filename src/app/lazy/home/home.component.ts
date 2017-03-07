import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { reducers } from '../reducers';

import { Store } from '../../store';
import * as fromRoot from '../../reducers';
import * as fromCounter from '../reducers/counter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  counter: Observable<number>;

  constructor(private store: Store<any>) {
    this.counter = store.select(s => s.lazy.counter);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.store.removeReducer('lazy');
  }

  increment() {
    this.store.dispatch({ type: fromCounter.INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: fromCounter.DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: fromCounter.RESET });
  }
}
