import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferPageResolver } from './pages/transfer/transfer-routing.resolver';
import { HistoryPageResolver } from './pages/history/history.resolver';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'transfer'
  },
  {
    path: 'transfer', loadChildren: () => import('./pages/transfer/transfer.module').then(m => m.TransferModule),
    resolve: {
      data: TransferPageResolver
    }
  },
  {
    path: 'history', loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryModule),
    resolve: {
      data: HistoryPageResolver
    }
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
