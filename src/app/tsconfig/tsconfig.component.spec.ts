import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsconfigComponent } from './tsconfig.component';

describe('TsconfigComponent', () => {
  let component: TsconfigComponent;
  let fixture: ComponentFixture<TsconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsconfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
