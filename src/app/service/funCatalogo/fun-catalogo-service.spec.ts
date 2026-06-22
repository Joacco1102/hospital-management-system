import { TestBed } from '@angular/core/testing';

import { FunCatalogoService } from './fun-catalogo-service';

describe('FunCatalogoService', () => {
  let service: FunCatalogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunCatalogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
