import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitlesService } from 'src/app/core/services/titles.service';

@Injectable({ providedIn: 'root' })
export class TransferPageResolver implements Resolve<any> {
  constructor(private titlesService: TitlesService, private title: Title) { }

  resolve(): Observable<any> | Promise<any> | any {
    this.title.setTitle(this.titlesService.getTitle('transfer'));
    return of(true);
  }
}
