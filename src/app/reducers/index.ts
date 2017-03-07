// import '@ngrx/core/add/operator/select';
// import { createSelector } from 'reselect';
import { compose } from '@ngrx/core/compose';

import * as fromCounter from './counter';
import { environment } from '../../environments/environment';

export interface State {
  counter: fromCounter.State;
}

export const reducers = {
  counter: fromCounter.reducer
};
