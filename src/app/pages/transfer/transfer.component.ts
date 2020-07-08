import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { record } from 'src/app/core/types/record.type';
import { DataTransferService } from 'src/app/core/services/data.transfer.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferComponent implements OnInit, AfterContentChecked {

  transfering: boolean;

  transfer = this.fb.group({
    cardFrom: this.fb.group({
      card: [null, [Validators.required, Validators.minLength(19)]],
      month: [null, [Validators.required]],
      year: [null, [Validators.required]],
      owner: [null, [Validators.required, Validators.minLength(5)]]
    }),
    cardTo: [null, [Validators.required, Validators.minLength(19)]],
    amount: [null, [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private dataTransfer: DataTransferService
  ) {
    const repeated = this.router.getCurrentNavigation().extras.state?.record as record;
    if (repeated) {
      this.transfer.setValue({
        cardFrom: {
          card: repeated.cardFrom,
          month: repeated.month,
          year: repeated.year,
          owner: repeated.owner
        },
        cardTo: repeated.cardTo,
        amount: repeated.amount
      });
    }
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.cdRef.markForCheck();
  }

  submit() {
    this.transfering = true;
    const currentValue = this.transfer.value;
    const newRecord: record = {
      cardFrom: currentValue.cardFrom.card.trim(),
      cardTo: currentValue.cardTo.trim(),
      amount: currentValue.amount.trim(),
      owner: currentValue.cardFrom.owner.trim(),
      month: currentValue.cardFrom.month,
      year: currentValue.cardFrom.year,
      date: new Date().toLocaleDateString()
    };

    this.dataTransfer.addRecord(newRecord)
      .pipe(take(1))
      .subscribe(() => {
        this.transfering = false;
        this.transfer.reset();
        this.cdRef.markForCheck();
      });
  }
}
