import { Component, OnInit } from '@angular/core';
import { Store, ActionsSubject } from './store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './reducers';
import * as fromCounter from './reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter: Observable<number>;

  constructor(private store: Store<fromRoot.State>, private dispatcher: ActionsSubject) {
    this.counter = store.select(s => s.counter);
  }

  ngOnInit() {
    this.store.select(state => {
      console.log('state', state);
    }).subscribe();

    this.dispatcher.subscribe(action => {
      console.log('action', action);
    });
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
