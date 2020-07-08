import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { record } from 'src/app/core/types/record.type';
import { RecordActions } from 'src/app/core/types/record.action.enum';
import { RecordEvent } from 'src/app/core/types/record.event';

@Component({
  selector: 'tr[app-custom-tr]',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordComponent implements OnInit {
  @Input() record: record;
  @Input() index: number;
  @Input() freeze: boolean;

  @Output() action = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteRecord() {
    this.freeze = true;
    this.action.emit({ id: this.index, type: RecordActions.delete } as RecordEvent);
  }

  repeatRecord() {
    this.action.emit({ id: this.index, type: RecordActions.repeat } as RecordEvent);
  }
}
