import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPAOComponent } from './gpao.component';

describe('GPAOComponent', () => {
  let component: GPAOComponent;
  let fixture: ComponentFixture<GPAOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GPAOComponent]
    });
    fixture = TestBed.createComponent(GPAOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
