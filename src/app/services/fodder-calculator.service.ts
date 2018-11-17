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

  recursiveFodderNeeded( to: number, from: number = 5 ) {
    const total = this.fodderNeeded(to, from);

    if (total.tenStar) {
      for (let i = 0; i < total.tenStar; i++) {
        let currentHero: number;

        for (let j = 2; j < 21; j++) {
          if (!total[`main${j}`]) {
            currentHero = j;
            break;
          }
        }
        const tenStarTotal = this.fodderNeeded(10);

        for (const key of Object.keys(tenStarTotal)) {
          const tenStarTotalKeyVal = tenStarTotal[key];
          if (key === 'main' || key === 'secondary') {
            console.log(currentHero);
            total[`${key}${currentHero}`] =
              total[`${key}${currentHero}`] ? total[`${key}${currentHero}`] += tenStarTotalKeyVal : tenStarTotalKeyVal;
          } else {
            total[key] = total[key] ? total[key] += tenStarTotalKeyVal : tenStarTotalKeyVal;
          }
        }

        total.tenStar--;
      }
    }

    if (total.nineStar) {
      for (let i = 0; i < total.nineStar; i++) {
        let currentHero: number;

        for (let j = 2; j < 21; j++) {
          if (!total[`main${j}`]) {
            currentHero = j;
            break;
          }
        }
        const nineStarTotal = this.fodderNeeded(9);

        for (const key of Object.keys(nineStarTotal)) {
          const nineStarTotalKeyVal = nineStarTotal[key];
          if (key === 'main' || key === 'secondary') {
            console.log(currentHero);
            total[`${key}${currentHero}`] =
              total[`${key}${currentHero}`] ? total[`${key}${currentHero}`] += nineStarTotalKeyVal : nineStarTotalKeyVal;
          } else {
            total[key] = total[key] ? total[key] += nineStarTotalKeyVal : nineStarTotalKeyVal;
          }
        }

      }
      total.nineStar = 0;
    }

    if (total.sixStar) {
      for (let i = 0; i < total.sixStar; i++) {
        let currentHero: number;

        for (let j = 2; j < 21; j++) {
          if (!total[`main${j}`]) {
            currentHero = j;
            break;
          }
        }

        const sixStarTotal = this.fodderNeeded(6);

        for (const key of Object.keys(sixStarTotal)) {
          const sixStarTotalKeyVal = sixStarTotal[key];
          if (key === 'main' || key === 'secondary') {
            console.log(currentHero);
            total[`${key}${currentHero}`] =
              total[`${key}${currentHero}`] ? total[`${key}${currentHero}`] += sixStarTotalKeyVal : sixStarTotalKeyVal;
          } else {
            total[key] = total[key] ? total[key] += sixStarTotalKeyVal : sixStarTotalKeyVal;
          }
        }

      }
      total.sixStar = 0;
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
