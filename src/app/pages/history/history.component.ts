import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { record } from 'src/app/core/types/record.type';
import { DataTransferService } from 'src/app/core/services/data.transfer.service';
import { RecordEvent } from 'src/app/core/types/record.event';
import { RecordActions } from 'src/app/core/types/record.action.enum';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent implements OnInit {

  records: Array<record>;
  freezed = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private dataTransfer: DataTransferService
  ) { }

  ngOnInit(): void {
    this.records = this.route.snapshot.data.records ?? undefined;
  }

  recordAction(ev: RecordEvent) {
    switch (ev.type) {

      case RecordActions.delete:
        this.delete(ev.id);
        break;

      case RecordActions.repeat:
        this.repeat(ev.id);
        break;

      default: break;
    }
  }

  trackIndex(index: number) {
    return index;
  }

  private repeat(id: number) {
    this.router.navigate(['transfer'], { state: { record: this.records[id] } });
  }

  private delete(id: number) {
    this.freezed[id] = true;
    this.dataTransfer.deleteRecord(id).pipe(take(1)).subscribe(() => {
      this.freezed[id] = false;
      this.cdRef.detectChanges();
    });
  }
}
