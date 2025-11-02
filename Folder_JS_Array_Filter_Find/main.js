const sheeps = [
  { weight: 20, color: "red" },
  { weight: 20, color: "yellow" },
  { weight: 21, color: "yellow" },
  { weight: 22, color: "green" },
];

const yellowSheeps = sheeps.filter((sheep) => sheep.color === "yellow");

console.log(sheeps);
console.log(yellowSheeps);

// debugger;

sheeps[2].color = "dark";

console.log(sheeps);
console.log(yellowSheeps);

const persons = [
  { name: "Tom", age: 43, sex: "male" },
  { name: "Jerry", age: 34, sex: "male" },
  { name: "Leopold", age: 56, sex: "male" },
  { name: "Lucy", age: 12, sex: "female" },
];

console.log("\n==============================\n");

const lucy = persons.find((person) => person.name === "Lucy");

console.log(persons);
console.log(lucy);

// debugger

persons[3].name = "Barbara";

console.log(persons);
console.log(lucy);

console.log("\n==============================\n");

const numbers = [1, 15, 3, 42, 8, 19, 7, 25, 11, 33];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log("Numbers", numbers);
console.log("Even", evenNumbers);

const moreThenTenNumbers = numbers.filter((number) => number > 10);

console.log("More then 10", moreThenTenNumbers);

const firstMoreThenTwentyNumber = numbers.find((number) => number > 20);
// debugger;
console.log("First Twelve Number", firstMoreThenTwentyNumber);

console.log("\n==============================\n");

const students = [
  { name: "Анна", age: 19, grade: 7, course: 2 },
  { name: "Диана", age: 17, grade: 8, course: 1 },
  { name: "Виктория", age: 21, grade: 5, course: 3 },
  { name: "Григорий", age: 18, grade: 9, course: 2 },
  { name: "Борис", age: 20, grade: 4, course: 3 },
  { name: "Евгений", age: 16, grade: 6, course: 1 },
];

// Найди студентов 18+ лет
const adults = students.filter((student) => student.age >= 18);
console.log("Students", students);
console.log("Adults", adults);

// Найди студентов с оценкой 8+
const excellentStudents = students.filter((student) => student.grade > 8);
console.log("Excellent Students", excellentStudents);

// Найди студентов 2 курса
const secondCourse = students.filter((student) => student.course === 2);
console.log("Second Course", secondCourse);

// Найди взрослых студентов с оценкой выше 6
const adultGoodStudents = students.filter(
  (student) => student.age >= 18 && student.grade > 6
);
console.log("Adult Good Students", adultGoodStudents);

console.log("\n==============================\n");

// Найди студента по имени 'Виктория'
const victoria = students.find((student) => student.name === "Виктория");
console.log("Виктория", victoria);

// Найди первого студента с оценкой 8+
const firstExcellent = students.find((student) => student.grade > 8);
console.log("First Excellent Student", firstExcellent);

// Попытайся найти студента младше 16 лет
const tooYoung = students.find((student) => student.age < 16);
console.log("Too Young", tooYoung);

console.log("\n==============================\n\n");

// 1. Функция для проверки совершеннолетия
function isAdult(person) {
  return person.age > 18;
}

// 2. Функция для проверки отличника (8+)
function isExcellent(student) {
  return student.grade > 8;
}

// 3. Функция для проверки курса
const isSecondCourse = (student) => student.course === 2;

// Используй эти функции с методами filter и find
const adultStudents2 = students.filter(isAdult);
console.log("adultStudents2", adultStudents2);
const firstExcellent2 = students.find(isExcellent);
console.log("firstExcellent2", firstExcellent2);
const secondCourse2 = students.filter(isSecondCourse);
console.log("Too Young", secondCourse2);
const firstSecondCourse2 = students.find(isSecondCourse);
console.log("firstSecondCourse2", firstSecondCourse2);

console.log("\n==============================\n\n");

const colors = ["красный", "синий", "зелёный", "жёлтый", "фиолетовый"];

// 1. Найди цвета с четными индексами (0, 2, 4...)
const evenIndexColors = colors.filter((color, index) => index % 2 === 0);
console.log("Even Index Colors", evenIndexColors);

// 2. Найди первый цвет, индекс которого больше 2
const colorAfterIndex2 = colors.find((color, index) => index > 2);
console.log("Color After Index 2", colorAfterIndex2);
