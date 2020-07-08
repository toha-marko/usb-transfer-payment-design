import { Injectable } from '@angular/core';
import { record } from '../types/record.type';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  #data: Array<record> = [];
  constructor() { }

  getRecords() {
    return this.#data;
  }

  addRecord(newRecord: record) {
    this.#data.push(newRecord);
  }

  removeRecordById(id: number) {
    this.#data.splice(id, 1);
    return true;
  }
}
