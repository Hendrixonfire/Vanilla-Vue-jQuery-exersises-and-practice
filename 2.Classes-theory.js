

                     //  2.Классы и объекты в JavaScript (с появлением ECMAScript 6)



// В ECMAScript 6 (ES6) была добавлена новая синтаксическая конструкция 
// для работы с классами и объектами в JavaScript.
//  Введение классов упростило создание иерархий объектов и наследование.
//  Давайте рассмотрим основные аспекты классов и объектов в JavaScript.



// Определение классов
// Для определения класса используется ключевое слово class, за которым следует имя класса. 
// Внутри класса можно определить конструктор с помощью метода constructor, 
// который будет вызываться при создании нового объекта класса.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// Создание объектов
// Объекты класса создаются с помощью оператора new, 
// за которым следует имя класса и аргументы для конструктора.

// const person = new Person('John Doe', 25);



// Свойства и методы класса
// Класс может содержать свойства и методы. 
// Для определения свойства класса используется ключевое слово this внутри конструктора или метода класса.


// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Привет, меня зовут ${this.name}`);
//   }
// }


// Наследование классов
// Классы могут наследоваться друг от друга с помощью ключевого слова extends.
//  Наследующий класс может добавлять свои собственные свойства и методы,
//  а также переопределять методы родительского класса.

// class Student extends Person {
//   constructor(name, age, university) {
//     super(name, age);
//     this.university = university;
//   }

//   study() {
//     console.log(`${this.name} учится в ${this.university}`);
//   }
// }



// Статические методы
// Статические методы принадлежат самому классу, а не его экземплярам.
//  Они вызываются непосредственно от имени класса, без создания объекта. 
// Для определения статического метода используется ключевое слово static.

// class MathUtils {
//   static square(x) {
//     return x * x;
//   }
// }

// console.log(MathUtils.square(5)); // Выводит 25


// Геттеры и сеттеры
// Геттеры и сеттеры позволяют получать и устанавливать значения свойств класса. 
// Они определяются с помощью ключевых слов get и set перед именем метода.

// class Circle

// class Circle {
// constructor(radius) {
// this.radius = radius;
// }

// get area() {
// return Math.PI * this.radius * this.radius;
// }

// set diameter(diameter) {
// this.radius = diameter / 2;
// }
// }

// const circle = new Circle(5);
// console.log(circle.area); // Выводит площадь круга
// circle.diameter = 10;
// console.log(circle.radius); // Выводит радиус круга

// Пример использования:
// const person = new Person('John Doe', 25);
// person.greet(); // Выводит "Привет, меня зовут John Doe"

// const student = new Student('Jane Smith', 20, 'Harvard');
// student.study(); // Выводит "Jane Smith учится в Harvard"
// student.greet(); // Выводит "Привет, меня зовут Jane Smith"

// console.log(MathUtils.square(5)); // Выводит 25

// const circle = new Circle(5);
// console.log(circle.area); // Выводит площадь круга
// circle.diameter = 10;
// console.log(circle.radius); // Выводит радиус круга












