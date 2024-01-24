import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTrainerComponent } from './show-trainer.component';

describe('ShowTrainerComponent', () => {
  let component: ShowTrainerComponent;
  let fixture: ComponentFixture<ShowTrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTrainerComponent]
    });
    fixture = TestBed.createComponent(ShowTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
