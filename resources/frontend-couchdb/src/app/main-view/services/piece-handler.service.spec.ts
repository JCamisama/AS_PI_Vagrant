import { TestBed } from '@angular/core/testing';

import { PieceHandlerService } from './piece-handler.service';

describe('PieceHandlerService', () => {
  let service: PieceHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieceHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
