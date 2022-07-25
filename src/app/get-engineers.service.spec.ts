import { TestBed } from '@angular/core/testing';

import { GetEngineersService } from './get-engineers.service';

describe('GetEngineersService', () => {
  let service: GetEngineersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEngineersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
