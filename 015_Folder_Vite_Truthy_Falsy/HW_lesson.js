
console.log(true && "Hello"); // Hello
console.log(false && "World"); // false
console.log("" && "JavaScript"); // ""
console.log("React" && "Vue"); // Vue
console.log(5 && 10); // 10
console.log(0 && 100); // 0
console.log(null && "Test"); // null
console.log(undefined && 42); // undefined

console.log("\n");

console.log("A" && "B" && "C"); // C
console.log("X" && "" && "Z"); // ""
console.log(1 && 2 && 0 && 4); // 0
console.log(true && "Yes" && 7); // 7

console.log("\n");

console.log(false || "Default") // Default
console.log("" || "Fallback") // Fallback
console.log(null || "Backup") // Backup
console.log("First" || "Second") // First
console.log(0 || 42) // 42
console.log(undefined || "Value") // Value

console.log("\n");

console.log("" || 0 || "Found") // Found
console.log(false || null || "OK") // Ok
console.log(undefined || "" || 0 || "Final") // Final
console.log("Start" || false || "End") // Start

console.log("\n");

console.log("A" && ("B" || "C")) // B
console.log(false || ("X" && "Y")) // Y
console.log(("" && "Test") || "Default") // Default
console.log("Hi" || (false && "Bye")) // Hi
console.log((true && "Yes") || "No") // Yes
console.log(null || (0 && "Zero")) // 0

console.log("\n");

console.log("A" || ("B" && "C")) // A
console.log(("A" || "B") && "C") // C
console.log(("A" && "B") || ("C" && "D")) // B
console.log((false && true) || (true && "Result")) // Result

console.log("\n");

function getUserName(user) {
  return user.name || "Guest"
}
 
// Тесты:
console.log(getUserName({ name: "Анна" })) // "Анна"
console.log(getUserName({})) // "Гость"
console.log(getUserName({ name: "" })) // "Гость"

console.log("\n");

function canAccess(user, resource) {
  return user.isAuth && (user.role === "admin" || resource.id === user.role)
}
 
// Тесты:
console.log(canAccess({ isAuth: true, role: "admin" }, { owner: "user1" })) // true
console.log(canAccess({ isAuth: true, id: "user1" }, { owner: "user1" })) // true
console.log(canAccess({ isAuth: false, role: "admin" }, { owner: "user1" })) // false