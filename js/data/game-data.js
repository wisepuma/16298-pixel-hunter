// const assert = chai.assert;

// const ANSWERS_NUMBER = 10; //кол-во попыток
// const ANSWER_POINT = 50; // быстрый или медленный ответ
// const RIGHT_ANSWER_SCORE = 100; // правильный ответ
// const LIVES = 50; // очки за оставшуюся жизнь
// const LIVES_NUMBER = 3; // число жизней
// const QUICK_ANSWER_SCORE  = 10; //быстрый ответ
// const SLOW_ANSWER_SCORE = 20; // медленный ответ

// const SCORES = {
//   ANSWERS_NUMBER: 10,
//   ANSWER_POINT: 50,
//   RIGHT_ANSWER_SCORE: 100,
//   QUICK_ANSWER_SCORE: 10,
//   SLOW_ANSWER_SCORE: 20,
//   LIVES: 50,
//   LIVES_NUMBER: 3,
// };
//


export const Point = {
  correct: 100, // Правильный ответ: === 100 очков;
  slow: -50, // Медленный ответ: снимается 50 очков; === 50
  fast: 50, // Быстрый ответ: добавляется 50 очков; === 150
  bonus: 50 // За жизнь
};

const answers = {
  slow: -50,
  fast: 50,
  correct: 100,
  wrong: -50
};

const levels = {
  min: 1,
  max: 10
};


//export const answers = [];

export const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 3,
  time: 0
});


// export const ANSWERS_COUNT = 10;
// const ANSWER_SCORE = 100;
// const FAST_ANSWER = 50;
// const SLOW_ANSWER = -50;
// const REST_LIVE_SCORE = 50;
// export const FAST_ANSWER_TIME = 20;
// export const SLOW_ANSWER_TIME = 10;
// const MAX_LIVES_COUNT = 3;
// const MAX_TIME = 30;
// const MAX_LEVEL = 9;
//
// export const changeLevel = (game, level) => {
//   if (typeof level !== `number`) {
//     throw new Error(`Level should be of type number`);
//   }
//   if (level < 0) {
//     throw new Error(`Level should not be negative value`);
//   }
//   const newLevel = Object.assign({}, game, {
//     level
//   });
//   return newLevel.level;
// };



// export const calculateScore = (answers, lives) => {
//   if (answers.length < ANSWERS_COUNT) {
//     return -1;
//   }
//
//   const score = answers.reduce((sum, answer) => {
//     if (answer.answer === false) {
//       return sum;
//     }
//     sum += ANSWER_SCORE;
//     if (answer.time > FAST_ANSWER_TIME) {
//       return sum + FAST_ANSWER;
//     }
//     if (answer.time < SLOW_ANSWER_TIME && answer.time > -1) {
//       return sum + SLOW_ANSWER;
//     }
//     return sum;
//   }, 0) + REST_LIVE_SCORE * lives;
//
//   return score;
// };
// //
// const LEVEL = {
//   INITIAL: 0,
//   MAX: 9,
//   SPECIAL: -1
// };



// Правильный ответ: 100 очков;
// Быстрый ответ: добавляется 50 очков;
// Медленный ответ: снимается 50 очков;
// За каждую оставшуюся к концу игры жизнь: дополнительные 50 очков.

const answers = [
  {answer: true, time: 20},
  {answer: true, time: 20},
  {answer: true, time: 20},
  {answer: true, time: 20},
  {answer: true, time: 20},
  {answer: true, time: 20},
  {answer: true, time: 20},
  {answer: true, time: 20},
  {answer: true, time: 20},
  {answer: true, time: 20}
];

const lifes = 3;

const calculateScore = (answers, lifes) => {
  let result = 0;
  let wrong = 0;

  for (let i = 0; i < answers.length; i++) {

    if (answers[i].answer === true) {
      if (answers[i].time <= 10) {
        result += 150;
        continue;
      }
      if (answers[i].time > 20) {
        result += 50;
      }
      else result += 100;
    }
    else {
      wrong = wrong + 1;
    }

    if (wrong === 3) {
      result = -1;
      return result;
    }

  }

  result += (lifes * 50);

  return result;
};








