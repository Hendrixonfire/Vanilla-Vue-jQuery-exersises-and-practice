                                        // 1.Прототипы и Прототипное Наследование





// JavaScript является прототипно-ориентированным языком программирования, что означает, что объекты могут 
// наследовать свойства и методы от других объектов. 
// В языке JavaScript каждый объект имеет внутренний свойство, называемое прототипом, которое определяет, 
// откуда объект наследует свойства и методы.





// Прототипы

// Прототип объекта - это ссылка на другой объект, называемый его прототипом. 
// Когда мы обращаемся к свойству или методу объекта, JavaScript сначала ищет его в самом объекте.
//  Если свойство или метод не найдены, поиск продолжается в прототипе объекта.
//  Этот процесс продолжается вверх по цепочке прототипов, 
// пока не будет найдено соответствующее свойство или метод, 
// или пока не будет достигнут конечный прототип null.





// Прототипное Наследование

// Прототипное наследование позволяет объектам наследовать свойства и методы от других объектов.
//  В JavaScript наследование осуществляется путем создания новых объектов,
//  прототипом которых являются существующие объекты. 
// Другими словами, объект может быть создан на основе другого объекта, который становится его прототипом. 
// Такой подход к наследованию называется "делегированием" или "классическим прототипным наследованием".

// Давайте рассмотрим пример:


// // // Создаем объект-прототип
// const animal = {
//   sound: 'Шум',
//   makeSound() {
//     console.log(this.sound);
//   }
// };

// // // Создаем новый объект, прототипом которого является `animal`
// const cat = Object.create(animal);
// cat.sound = 'Мяу';

// // // Вызываем метод `makeSound` объекта `cat`
// cat.makeSound(); // Выводит "Мяу"

// // // Создаем еще один объект, прототипом которого также является `animal`
// const dog = Object.create(animal);
// dog.sound = 'Гав';

// // Вызываем метод `makeSound` объекта `dog`
// dog.makeSound(); // Выводит "Гав"






// В приведенном выше примере мы создали объект animal, который содержит свойство sound со значением "Шум"
//  и метод makeSound, который выводит значение свойства sound.
//  Затем мы создали два новых объекта cat и dog, прототипом которых является animal. 
// Оба объекта имеют свои собственные свойства sound,
//  но они также наследуют метод makeSound от прототипа animal.






// Изменение Прототипа

// Прототип объекта можно изменить в любой момент. Когда мы обращаемся к свойству или методу объекта,
//  JavaScript сначала ищет его в самом объекте.
//  Если свойство или метод не найдены, поиск продолжается в прототипе объекта.
//  Если мы изменим прототип объекта, эти изменения будут отражены во всех объектах, 
// которые наследуют этот прототип.


// // Создаем объект-прототип
// const animal = {
//   sound: 'Шум',
//   makeSound() {
//     console.log(this.sound);
//   }
// };

// // Создаем новый объект, прототипом которого является `animal`
// const cat = Object.create(animal);
// cat.sound = 'Мяу';

// // Меняем значение свойства `sound` в прототипе
// animal.sound = 'Громкий шум';

// // Вызываем метод `makeSound` объекта `cat`
// cat.makeSound(); // Выводит "Мяу"



// В приведенном выше примере мы изменили значение свойства sound в прототипе animal. 
// Поскольку объект cat наследует этот прототип, 
// он все равно сохраняет свое собственное значение свойства sound, 
// и при вызове метода makeSound объекта cat выводится "Мяу", а не "Громкий шум".







// Наследование в JavaScript

// Наследование в JavaScript осуществляется путем создания новых объектов,
//  прототипом которых являются существующие объекты.
//  Это позволяет объектам наследовать свойства и методы от своих прототипов.
//  Наследование можно осуществить несколькими способами.





//  Функции-конструкторы

// Функции-конструкторы используются для создания объектов с общими свойствами и методами. 
// При использовании функции-конструктора с оператором new, создается новый объект, 
// прототипом которого является свойство prototype функции-конструктора.

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.sayHello = function() {
//   console.log('Привет, меня зовут ' + this.name);
// };
// const person = new Person('John');
// person.sayHello(); // Выводит "Привет, меня зовут John"



//  Прототипное наследование через Object.create

// Метод Object.create позволяет создавать новые объекты с заданным прототипом.
//  Этот метод принимает объект-прототип и возвращает новый объект,
//  прототипом которого является указанный объект.


// const animal = {
//   sound: 'Шум',
//   makeSound() {
//     console.log(this.sound);
//   }
// };
// const cat = Object.create(animal);
// cat.sound = 'Мяу';
// cat.makeSound(); // Выводит "Мяу"







