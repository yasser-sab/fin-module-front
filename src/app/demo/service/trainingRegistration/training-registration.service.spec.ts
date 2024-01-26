import { TestBed } from '@angular/core/testing';

import { TrainingRegistrationService } from './training-registration.service';

describe('TrainingRegistrationService', () => {
  let service: TrainingRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
