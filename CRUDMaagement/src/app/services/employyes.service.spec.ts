import { TestBed } from '@angular/core/testing';

import { EmployyesService } from './employyes.service';

describe('EmployyesService', () => {
  let service: EmployyesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployyesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
