import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'transfer'
  },
  {
    path: 'transfer', loadChildren: () => import('./pages/transfer/transfer.module').then(m => m.TransferModule)
  },
  {
    path: 'history', loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: '**',
    redirectTo: 'transfer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
