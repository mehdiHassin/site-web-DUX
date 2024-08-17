import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDevisComponent } from './liste-devis.component';

describe('ListeDevisComponent', () => {
  let component: ListeDevisComponent;
  let fixture: ComponentFixture<ListeDevisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDevisComponent]
    });
    fixture = TestBed.createComponent(ListeDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
