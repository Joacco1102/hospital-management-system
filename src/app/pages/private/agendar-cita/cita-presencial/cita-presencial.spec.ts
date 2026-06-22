import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaPresencial } from './cita-presencial';

describe('CitaPresencial', () => {
  let component: CitaPresencial;
  let fixture: ComponentFixture<CitaPresencial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitaPresencial],
    }).compileComponents();

    fixture = TestBed.createComponent(CitaPresencial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
