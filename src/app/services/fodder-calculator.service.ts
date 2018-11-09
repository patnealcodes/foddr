import { Injectable } from '@angular/core';

import { Fodder } from './../models/fodder';

@Injectable({
  providedIn: 'root'
})
export class FodderCalculatorService {
  levels = {
    13: this.e3,
    12: this.e2,
    11: this.e1,
    10: this.tenStar,
    9: this.nineStar,
    8: this.eightStar,
    7: this.sevenStar,
    6: this.sixStar
  };

  constructor() { }

  fodderNeeded( to: number, from: number = 5 ) {
    const total: Fodder = {};

    for ( let i = to; i > from; i-- ) {
      for ( const key of Object.keys( this.levels[i]() ) ) {
        const currKeyVal = this.levels[i]()[key];

        total[key] = total[key] ? total[key] += currKeyVal : currKeyVal;
      }
    }

    return total;
  }

  e3( hero?: string ): Fodder {
    return {
      tenStar: 1
    };
  }

  e2( hero?: string ): Fodder {
    return {
      main: 1,
      nineStar: 1
    };
  }

  e1( hero?: string ): Fodder {
    return {
      main: 1,
      nineStar: 1
    };
  }

  tenStar( hero?: string ): Fodder {
    return {
      main: 2,
      sixStar: 1,
      nineStar: 1
    };
  }

  nineStar( hero?: string ): Fodder {
    return {
      main: 1,
      sixStar: 1,
      fodder: 2
    };
  }

  eightStar( hero?: string ): Fodder {
    return {
      sixStar: 1,
      fodder: 3
    };
  }

  sevenStar( hero?: string ): Fodder {
    return {
      fodder: 4
    };
  }

  sixStar( hero?: string ): Fodder {
    return {
      main: 2,
      secondary: 1,
      fodder: 3
    };
  }
}
