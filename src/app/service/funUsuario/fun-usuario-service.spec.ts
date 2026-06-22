import { TestBed } from '@angular/core/testing';

import { FunUsuarioService } from './fun-usuario-service';

describe('FunUsuarioService', () => {
  let service: FunUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
