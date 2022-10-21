import { TestBed } from '@angular/core/testing';

import { VisUtilService } from './vis-util.service';

describe('VisUtilService', () => {
  let service: VisUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
