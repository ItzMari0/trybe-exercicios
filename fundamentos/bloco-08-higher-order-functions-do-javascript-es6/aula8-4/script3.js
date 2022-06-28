const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  const object = students.map((names, index) => ({
    name: names,
    average:
      grades[index].reduce((acc, cur) => acc + cur, 0) / grades[index].length,
  }));
  return object;
}

console.log(studentAverage(students, grades));