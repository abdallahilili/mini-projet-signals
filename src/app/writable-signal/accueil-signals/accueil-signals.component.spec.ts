import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilSignalsComponent } from './accueil-signals.component';

describe('AccueilSignalsComponent', () => {
  let component: AccueilSignalsComponent;
  let fixture: ComponentFixture<AccueilSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
