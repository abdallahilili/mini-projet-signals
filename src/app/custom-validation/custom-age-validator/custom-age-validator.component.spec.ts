import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAgeValidatorComponent } from './custom-age-validator.component';

describe('CustomAgeValidatorComponent', () => {
  let component: CustomAgeValidatorComponent;
  let fixture: ComponentFixture<CustomAgeValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomAgeValidatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAgeValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
