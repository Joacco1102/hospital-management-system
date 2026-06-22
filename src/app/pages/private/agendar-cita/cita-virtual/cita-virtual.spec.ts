import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaVirtual } from './cita-virtual';

describe('CitaVirtual', () => {
  let component: CitaVirtual;
  let fixture: ComponentFixture<CitaVirtual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitaVirtual],
    }).compileComponents();

    fixture = TestBed.createComponent(CitaVirtual);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
