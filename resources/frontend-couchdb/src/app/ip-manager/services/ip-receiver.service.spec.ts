import { TestBed } from '@angular/core/testing';

import { IpReceiverService } from './ip-receiver.service';

describe('IpReceiverService', () => {
  let service: IpReceiverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpReceiverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
