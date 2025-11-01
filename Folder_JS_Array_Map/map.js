console.log("Hello!\nThis Lesson about Array.map()");

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((number) => {
  return number;
});

console.log(numbers.length + " - " + newNumbers.length);
console.log("old: ", numbers);
console.log("new: ", newNumbers);

const newAges = numbers.map((number) => {
  return { age: number };
});

console.log("---------------------------");
console.log("new ages: ", newAges);

console.log("--------------------------------");

const words = ["hello", "world", "!"];
const wordsInfo = words.map((word, index, array) => {
  return { id: index + 1, word: word, lettersCount: word.length, array };
});

console.log(" Word Length: ", wordsInfo);

// Home Work
// Task 1

const numbers1 = [1, 2, 3, 5, 6];

const newNumbers1 = numbers1.map((number) => {
  return number + 10;
});

console.log("Task1:");
console.log(numbers1, "   -->   ", newNumbers1);

// Task2

const names2 = ["Alice", "Bob", "Charlie", "Diana"];
const newNames2 = names2.map((name) => {
  return { name, length: name.length };
});

console.log("\nTask2:");
console.log(names2, "   -->   ", newNames2);

// Task3

const products3 = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 80 },
];

const newProducts3 = products3.map((product) => {
  return {
    name: product.name,
    price: product.price,
    finalPrice: product.price * 0.85,
  };
});

console.log("\nTask3:");
console.log(products3, "   -->   ", newProducts3);

// Task4

const employees4 = [
  { name: "Alice", salary: 50000, experience: 3 },
  { name: "Bob", salary: 60000, experience: 5 },
  { name: "Charlie", salary: 45000, experience: 2 },
];

const employeesWithTotal4 = employees4.map((employee) => {
  return {
    name: employee.name,
    salary: employee.salary,
    experience: employee.experience,
    totalSalary: employee.salary + (employee.salary * (0.05 * employee.experience)),
  };
});

console.log("\nTask4:");
console.log(employees4, "   -->   ", employeesWithTotal4);
