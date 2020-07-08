import { Injectable } from '@angular/core';
import { DataStorageService } from './data.storage.service';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { record } from '../types/record.type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor(private storage: DataStorageService, private router: Router) { }

  getRecords() {
    return of(this.storage.getRecords())
      .pipe(delay(300)); // simulate ping 300ms
  }

  addRecord(newRecord: record) {
    this.storage.addRecord(newRecord);
    return of(true)
      .pipe(delay(600)); // simulate ping 600ms
  }

  deleteRecord(id: number) {
    return of(this.storage.removeRecordById(id))
      .pipe(delay(200)); // simulate ping 200ms
  }

  repeatPayment(from: record) {
    this.router.navigate(['transfer'], { state: from });
  }
}
