const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparison = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  } if (studentAnswers === 'N.A') {
    return 0;
  }
  return -0.5;
};

const score = (rightAnswers, studentAnswers, callback) => {
  let grade = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    const calc = callback(rightAnswers[i], studentAnswers[i])
    grade += calc;
  }
  return `Results: ${grade} points`;
}

console.log(score(rightAnswers, studentAnswers, comparison));