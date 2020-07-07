import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CurrencyDirective } from '../core/directives/currency.directive';
import { DatalistComponent } from './datalist/datalist.component';
import { FormsModule } from '@angular/forms';

const elements = [
  CardComponent,
  DatalistComponent,
  CurrencyDirective
]

@NgModule({
  declarations: elements,
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: elements
})
export class SharedModule { }
