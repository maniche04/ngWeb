import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './components/tasks.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'todos',
    //     pathMatch: 'full'
    //   }, {
    //     path: 'todos',
    //     component: TodosComponent
    //   }, {
    //     path: 'stock-market',
    //     component: StockMarketComponent
    //   }, {
    //     path: 'theming',
    //     component: ParentComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
