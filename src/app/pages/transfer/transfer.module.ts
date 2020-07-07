import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransferComponent } from './transfer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TransferComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TransferRoutingModule,
    SharedModule
  ]
})
export class TransferModule { }
