import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrarme } from './registrarme';

describe('Registrarme', () => {
  let component: Registrarme;
  let fixture: ComponentFixture<Registrarme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registrarme],
    }).compileComponents();

    fixture = TestBed.createComponent(Registrarme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
