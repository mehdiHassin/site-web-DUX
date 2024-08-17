import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GMAOComponent } from './gmao.component';

describe('GMAOComponent', () => {
  let component: GMAOComponent;
  let fixture: ComponentFixture<GMAOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GMAOComponent]
    });
    fixture = TestBed.createComponent(GMAOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
