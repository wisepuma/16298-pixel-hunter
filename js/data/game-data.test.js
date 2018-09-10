import {assert} from 'chai';
import {calculateScore} from './game-data';

const answers = [
  [{answer: true, time: 10}, {answer: true, time: 10}, {answer: true, time: 10}, {answer: true, time: 10}, {answer: true, time: 10}, {answer: true, time: 10}, {answer: true, time: 10}, {answer: true, time: 10}, {answer: true, time: 10}, {answer: true, time: 10}],
  [{answer: true, time: 20}, {answer: true, time: 20}, {answer: true, time: 15}, {answer: true, time: 15}, {answer: true, time: 15}, {answer: true, time: 11}, {answer: true, time: 11}, {answer: true, time: 15}, {answer: true, time: 20}, {answer: true, time: 20}],
  [{answer: true, time: 25}, {answer: true, time: 25}, {answer: true, time: 25}, {answer: true, time: 25}, {answer: true, time: 25}, {answer: true, time: 25}, {answer: true, time: 25}, {answer: true, time: 25}, {answer: true, time: 25}, {answer: true, time: 25}],
  [{answer: false, time: 25}, {answer: false, time: 25}, {answer: false, time: 25}, {answer: true, time: 25}, {answer: true, time: 25}, {answer: true, time: 25}, {answer: true, time: 25}, {answer: true, time: 25}, {answer: true, time: 25}, {answer: true, time: 25}],
  [{answer: false, time: 20}, {answer: false, time: 20}, {answer: true, time: 15}, {answer: true, time: 15}, {answer: true, time: 15}, {answer: true, time: 11}, {answer: true, time: 11}, {answer: true, time: 15}, {answer: true, time: 20}, {answer: true, time: 20}],
];

describe(`correct results`, () => {
  it(`true answers should return 1150`, () => {
    assert.equal(calculateScore(answers[1], 3), 1150);
  });

  it(`fast answers should return 1650`, () => {
    assert.equal(calculateScore(answers[0], 3), 1650);
  });

  it(`slow answers should return 650`, () => {
    assert.equal(calculateScore(answers[2], 3), 650);
  });

  it(`three wrong answers should return -1`, () => {
    assert.equal(calculateScore(answers[3], 3), -1);
  });

  it(`two wrong answers should return 950`, () => {
    assert.equal(calculateScore(answers[4], 3), 950);
  });

});


