import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingRegistrationListComponent } from './training-registration-list.component';

describe('TrainingRegistrationListComponent', () => {
  let component: TrainingRegistrationListComponent;
  let fixture: ComponentFixture<TrainingRegistrationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingRegistrationListComponent]
    });
    fixture = TestBed.createComponent(TrainingRegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
