import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { LocalStorageService, Action } from '@app/core';

import {
  TASKS_KEY,
  TASKS_PERSIST,
} from '../reducers/tasks.reducer';

@Injectable()
export class TasksEffects {

  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false }) persistTodos(): Observable<Action> {
    return this.actions$
      .ofType(TASKS_PERSIST)
      .do(action => this.localStorageService
        .setItem(TASKS_KEY, action.payload));
  }

}
