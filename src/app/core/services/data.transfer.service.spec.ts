import { TestBed } from '@angular/core/testing';

import { Data.TransferService } from './data.transfer.service';

describe('Data.TransferService', () => {
  let service: Data.TransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Data.TransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
