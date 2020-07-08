import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferComponent } from './transfer.component';
import { TransferPageResolver } from './transfer.resolver';

const routes: Routes = [
  {
    path: '',
    component: TransferComponent,
    resolve: {
      data: TransferPageResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule { }
