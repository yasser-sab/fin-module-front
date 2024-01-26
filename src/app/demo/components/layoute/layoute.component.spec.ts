import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayouteComponent } from './layoute.component';

describe('LayouteComponent', () => {
  let component: LayouteComponent;
  let fixture: ComponentFixture<LayouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayouteComponent]
    });
    fixture = TestBed.createComponent(LayouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
