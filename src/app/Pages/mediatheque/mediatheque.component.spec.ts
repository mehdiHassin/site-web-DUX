import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediathequeComponent } from './mediatheque.component';

describe('MediathequeComponent', () => {
  let component: MediathequeComponent;
  let fixture: ComponentFixture<MediathequeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediathequeComponent]
    });
    fixture = TestBed.createComponent(MediathequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
