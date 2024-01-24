import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostsCreateComponent } from './costs-create.component';

describe('CostsCreateComponent', () => {
  let component: CostsCreateComponent;
  let fixture: ComponentFixture<CostsCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostsCreateComponent]
    });
    fixture = TestBed.createComponent(CostsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
