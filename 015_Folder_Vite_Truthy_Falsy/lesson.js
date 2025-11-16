// 1.

if (true) console.log("truthy boom");
if (false) console.log("falsy boom");

// 2. Пустая строка в условных выражениях определяется как false
// НЕ пустая строка, как true

if ("str") console.log("truthy string boom");
if ("") console.log("false boom");

// 3. Объект, даже пустой, определяется как true

if ({}) console.log("truthy object boom");

// 4. Массив, даже пустой, определяется как true

if ([]) console.log("truthy array boom");

// 5. Функция, даже пустой, определяется как true

if (function () {}) console.log("truthy function boom");
if (() => {}) console.log("truthy arrow function boom");

// 6. Число, кроме 0 и NaN, определяется как true
// 0 определяется как false

if (12) console.log("truthy positive number boom");
if (-42) console.log("truthy negative number boom");
if (0) console.log("falsy zero boom");
if (NaN) console.log("falsy NaN boom");

// 7. null определяется как false

if (null) console.log("falsy null boom");

// 8. undefined определяется как false

if (undefined) console.log("falsy undefined boom");

// 9. Преобразование в булево значение ->
// либо через знак !! или через функцию Boolean()
console.log(!!2);
console.log(Boolean(2));

// 10.

const str = "set like";
const isSubscribe = true;
if (str && isSubscribe) console.log("boom!!!");

const str1 = "set like";
const isSubscribe1 = true;
if (isSubscribe1 && str1) console.log("boom!!!1");
console.log(isSubscribe1 && str1);
console.log(str1 && isSubscribe1);

console.log("" && "Hi");

// ========================================
console.log("============== || +++++++++++++++\n");

// ========================================

console.log("Hello" || true);               // Hello
console.log(false || true);                 // true
console.log("" || true);                    // true
console.log("JS" || "React");               // JS
console.log("Hi" || 0);                     // Hi
console.log(0 || "Hi");                     // Hi
console.log(null || "World");               // World
console.log(undefined || 123);              // 123
console.log("A" || "B" || "C");             // A
console.log("" || "B" || "C");              // B
console.log(null || undefined || "C");      // B
console.log(0 || false || "X");             // X
console.log("" || 0 || false);              // false
console.log(true || "Yes");                 // true
console.log(false || "No");                 // No


console.log("============= React =================");

const tracks = null;
console.log(tracks && "tracks");
console.log(!tracks && "loading...");


const tracks1 = [];
console.log(tracks1 && "tracks");
console.log(!tracks1 && "loading...");





