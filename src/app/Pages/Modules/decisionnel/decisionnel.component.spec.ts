import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionnelComponent } from './decisionnel.component';

describe('DecisionnelComponent', () => {
  let component: DecisionnelComponent;
  let fixture: ComponentFixture<DecisionnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecisionnelComponent]
    });
    fixture = TestBed.createComponent(DecisionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
