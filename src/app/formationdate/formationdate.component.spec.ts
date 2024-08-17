import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationdateComponent } from './formationdate.component';

describe('FormationdateComponent', () => {
  let component: FormationdateComponent;
  let fixture: ComponentFixture<FormationdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationdateComponent]
    });
    fixture = TestBed.createComponent(FormationdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
