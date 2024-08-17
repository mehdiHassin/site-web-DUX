import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmobilisationComponent } from './immobilisation.component';

describe('ImmobilisationComponent', () => {
  let component: ImmobilisationComponent;
  let fixture: ComponentFixture<ImmobilisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImmobilisationComponent]
    });
    fixture = TestBed.createComponent(ImmobilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
