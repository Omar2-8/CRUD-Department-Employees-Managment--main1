import { TestBed } from '@angular/core/testing';

import AppconfigservicesService from './appconfigservices.service';

describe('AppconfigservicesService', () => {
  let service: AppconfigservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppconfigservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
