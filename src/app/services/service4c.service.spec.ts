import { TestBed } from '@angular/core/testing';

import { Service4cService } from './service4c.service';

describe('Service4cService', () => {
  let service: Service4cService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service4cService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
