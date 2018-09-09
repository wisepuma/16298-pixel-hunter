import {assert} from 'chai';
// импортируем параметры из game-data
import {answers, calculateScore, lifes} from './game-data';
mocha.setup(`bdd`);

describe(`correct results`, () => {
  it(`true answers should return 1150`, () => {
    if (calculateScore(answers, 3) !== 1150) {
      throw new Error(`ALL IS DUST`);
    }
  });

});


mocha.run();
