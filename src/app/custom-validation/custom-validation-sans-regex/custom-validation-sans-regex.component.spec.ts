import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidationSansRegexComponent } from './custom-validation-sans-regex.component';

describe('CustomValidationSansRegexComponent', () => {
  let component: CustomValidationSansRegexComponent;
  let fixture: ComponentFixture<CustomValidationSansRegexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomValidationSansRegexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomValidationSansRegexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
