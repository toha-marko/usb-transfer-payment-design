import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  transfer = this.fb.group({
    cardFrom: this.fb.group({
      card: [null],
      month: [null],
      year: [null],
      owner: [null]
    }),
    cardTo: [null],
    amount: [null]
  });
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.transfer);
  }

}
