
export const calculateScore = (answers, lifes) => {
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
      } else {
        result += 100;
      }
    } else {
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


