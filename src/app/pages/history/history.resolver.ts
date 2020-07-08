import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitlesService } from 'src/app/core/services/titles.service';
import { DataTransferService } from 'src/app/core/services/data.transfer.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HistoryPageResolver implements Resolve<any> {
  constructor(
    private titlesService: TitlesService,
    private title: Title,
    private dataTransfer: DataTransferService,
    private loading: LoadingService
  ) { }

  resolve(): Observable<any> | Promise<any> | any {
    this.loading.start();
    this.title.setTitle(this.titlesService.getTitle('history'));
    return this.dataTransfer.getRecords().pipe(tap(() => this.loading.stop()));
  }
}
