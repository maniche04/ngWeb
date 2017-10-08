import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '../core';
import { SharedModule } from '../shared';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './components/tasks.component';
import { TaskComponent } from './components/task.component';
import { TasksEffects } from './effects/tasks.effects';
import { tasksReducer } from './reducers/tasks.reducer';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    TasksRoutingModule,
    StoreModule.forFeature('tasks', {
      tasks: tasksReducer
    }),
    EffectsModule.forFeature([
      TasksEffects,
    ])
  ],
  declarations: [
    TasksComponent,
    TaskComponent
  ],
  providers: [
    // StockMarketService
  ]
})
export class TasksModule {

  constructor() {}

}
