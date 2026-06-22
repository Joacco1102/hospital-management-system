import { TestBed } from '@angular/core/testing';

import { FunAuthService } from './fun-auth-service';

describe('FunAuthService', () => {
  let service: FunAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
