import { TestBed } from '@angular/core/testing';

import { Data.StorageService } from './data.storage.service';

describe('Data.StorageService', () => {
  let service: Data.StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Data.StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
