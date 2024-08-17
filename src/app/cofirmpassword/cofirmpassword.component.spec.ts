import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofirmpasswordComponent } from './cofirmpassword.component';

describe('CofirmpasswordComponent', () => {
  let component: CofirmpasswordComponent;
  let fixture: ComponentFixture<CofirmpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CofirmpasswordComponent]
    });
    fixture = TestBed.createComponent(CofirmpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
