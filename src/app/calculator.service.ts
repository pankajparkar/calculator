import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  addTwoNumbers(op1: number, op2: number): number {
    return 2
  }

  constructor() { }
}
