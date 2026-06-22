import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teleconsultas } from './teleconsultas';

describe('Teleconsultas', () => {
  let component: Teleconsultas;
  let fixture: ComponentFixture<Teleconsultas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teleconsultas],
    }).compileComponents();

    fixture = TestBed.createComponent(Teleconsultas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
