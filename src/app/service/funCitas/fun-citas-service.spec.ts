import { TestBed } from '@angular/core/testing';

import { FunCitasService } from './fun-citas-service';

describe('FunCitasService', () => {
  let service: FunCitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunCitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
