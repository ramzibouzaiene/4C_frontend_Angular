import { TestBed } from '@angular/core/testing';

import { CommentactiviteService } from './commentactivite.service';

describe('CommentactiviteService', () => {
  let service: CommentactiviteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentactiviteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
