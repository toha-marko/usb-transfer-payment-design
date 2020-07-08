import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryComponent } from './history.component';
import { HistoryPageResolver } from './history.resolver';

const routes: Routes = [
  {
    path: '',
    component: HistoryComponent,
    resolve: {
      records: HistoryPageResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
