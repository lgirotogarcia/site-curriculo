import { TestBed } from '@angular/core/testing';

import { CattosService } from './cattos.service';

describe('CattosService', () => {
  let service: CattosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CattosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
