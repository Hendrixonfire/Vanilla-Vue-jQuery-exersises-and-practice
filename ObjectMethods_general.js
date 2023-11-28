//                                      Методы объектов:


// 1. Метод toString()

// Метод toString() преобразует объект в строковое представление. 
//Он вызывается на объекте и возвращает строку, представляющую данный объект.

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   toString() {
//     return `${this.firstName} ${this.lastName}, ${this.age} years old`;
//   }
// };

// console.log(person.toString()); // Выводит: "John Doe, 30 years old"




// 2. Метод toUpperCase()

// Метод toUpperCase() преобразует строку в верхний регистр.
// Он вызывается на строке и возвращает новую строку, где все символы преобразованы в верхний регистр.

// const text = 'Hello, World!';
// const uppercaseText = text.toUpperCase();

// console.log(uppercaseText); // Выводит: "HELLO, WORLD!"

// console.log(text)




// 3. Метод toLowerCase()

// Метод toLowerCase() преобразует строку в нижний регистр.
// Он вызывается на строке и возвращает новую строку, где все символы преобразованы в нижний регистр.

// const text = 'Hello, World!';
// const lowercaseText = text.toLowerCase();
// const uppercaseText = text.toUpperCase();

// console.log(uppercaseText); // Выводит: "HELLO, WORLD!"

// console.log(lowercaseText); // Выводит: "hello, world!"

// console.log(text)
// 4. Метод toFixed()
// Метод toFixed() округляет число до указанного количества десятичных знаков 
//и возвращает строковое представление результата.//2,5789~2,58

// const number = 3.14159;
// const roundedNumber = number.toFixed(4);

// console.log(roundedNumber); // Выводит: "3.14"




// 5. Метод slice()

// Метод slice() извлекает часть строки и возвращает новую строку. 
//Он принимает два аргумента: начальный индекс (включительно) и конечный индекс (исключительно).

// const text = 'Hello, World!';
// const slicedText = text.slice(0, 5);

// console.log(slicedText); // Выводит: "World"

// 6. Метод concat()

// Метод concat() объединяет две или более строки и возвращает новую строку, содержащую объединенные значения.

let str1 = 1;
const str2 = 2;
const str3 = '!'
// const combinedStr = str1.concat(', ', str2);
str1 = str1.toString()
const combinedStr = str1.concat(', ', str2, str3);

console.log(combinedStr); // Выводит: "Hello, World"
// Метод includes()
// Метод includes() проверяет, содержит ли строка заданную подстроку, и возвращает true или false.

// const str = 'Hello, World!';
// console.log(str.includes('Hello')); // Выводит: true
// console.log(str.includes('Foo')); // Выводит: false




//  6.Метод indexOf()

// Метод indexOf() возвращает индекс первого вхождения заданной подстроки в строке. 
//Если подстрока не найдена, возвращается -1.

// const str = 'Hello, World!';
// console.log(str.indexOf('World')); // Выводит: 7
// console.log(str.indexOf('Foo')); // Выводит: -1
// Метод replace()
// Метод replace() заменяет первое вхождение заданной подстроки на новое значение и возвращает новую строку.

// const str = 'Hello, World!';
// const replacedStr = str.replace('World', 'John');

// console.log(replacedStr); // Выводит: "Hello, John!"
// Метод split()
// Метод split() разбивает строку на массив подстрок,
// используя заданный разделитель, и возвращает полученный массив.
 
// const str = 'Hello, World!';
// const strArray = str.split(', ');

// console.log(strArray); // Выводит: ["Hello", "World!"]

