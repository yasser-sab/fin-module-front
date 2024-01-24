import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingRegistrationCreateComponent } from './training-registration-create.component';

describe('TrainingRegistrationCreateComponent', () => {
  let component: TrainingRegistrationCreateComponent;
  let fixture: ComponentFixture<TrainingRegistrationCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingRegistrationCreateComponent]
    });
    fixture = TestBed.createComponent(TrainingRegistrationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
