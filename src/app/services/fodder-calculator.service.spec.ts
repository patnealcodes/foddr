import { TestBed } from '@angular/core/testing';

import { FodderCalculatorService } from './fodder-calculator.service';

describe('FodderCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FodderCalculatorService = TestBed.get(FodderCalculatorService);
    expect(service).toBeTruthy();
  });
});
