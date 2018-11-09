import { Component } from '@angular/core';

import { FodderCalculatorService } from './../../services/fodder-calculator.service';

@Component({
  selector: 'fod-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor( private fcs: FodderCalculatorService ) {
    // TEST
    console.log(fcs.fodderNeeded(10));
    // TEST
  }
}
