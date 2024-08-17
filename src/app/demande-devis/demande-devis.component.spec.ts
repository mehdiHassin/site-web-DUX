import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDevisComponent } from './demande-devis.component';

describe('DemandeDevisComponent', () => {
  let component: DemandeDevisComponent;
  let fixture: ComponentFixture<DemandeDevisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandeDevisComponent]
    });
    fixture = TestBed.createComponent(DemandeDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
