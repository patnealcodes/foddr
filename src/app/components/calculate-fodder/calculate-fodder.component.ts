import { Component } from '@angular/core';

import { FodderCalculatorService } from './../../services/fodder-calculator.service';

import { Fodder } from './../../models/fodder';

@Component({
  selector: 'fod-calculate-fodder',
  templateUrl: './calculate-fodder.component.html',
  styleUrls: ['./calculate-fodder.component.scss']
})
export class CalculateFodderComponent {
  calculateTo: number;
  calculateFrom: number;
  calculatedData: Fodder;

  constructor(private fcs: FodderCalculatorService) { }

  calculateFodder(e) {
    e.preventDefault();
    console.log(this.fcs.fodderNeeded(this.calculateTo, this.calculateFrom));
    this.calculatedData = this.fcs.fodderNeeded(this.calculateTo, this.calculateFrom);
  }

}
