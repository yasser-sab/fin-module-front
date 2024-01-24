import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantCreateComponent } from './participant-create.component';

describe('ParticipantCreateComponent', () => {
  let component: ParticipantCreateComponent;
  let fixture: ComponentFixture<ParticipantCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipantCreateComponent]
    });
    fixture = TestBed.createComponent(ParticipantCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
