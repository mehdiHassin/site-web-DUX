import { TestBed } from '@angular/core/testing';

import { FormationServicService } from './formation-servic.service';

describe('FormationServicService', () => {
  let service: FormationServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
