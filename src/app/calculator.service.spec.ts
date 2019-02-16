import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    })
    service = TestBed.get(CalculatorService);
  });

  it('should be created', () => {
    // arrange
    // act 
    // assert
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    // arrange
    // act 
    const result = service.addTwoNumbers(1, 1)

    // assert
    expect(result).toBe(2);
  });

  it('should divide two numbers', () => {
    expect(service).toBeTruthy();
  });
});
