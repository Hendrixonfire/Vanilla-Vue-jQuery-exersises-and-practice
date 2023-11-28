// Задача 1: Расширение функциональности прототипа

// Расширьте функциональность встроенного прототипа Array, добавив метод getFirstElement,
//  который возвращает первый элемент массива.

arrayOne = [2,3,7,12,53];
Object.defineProperty(Array.prototype, 'getFirstElement', {
    value: function() {
        return this[0];
    }
});
console.log(arrayOne.getFirstElement());

// Задача 2: Создание цепочки прототипов

// Создайте три объекта: animal, cat и kitten. Прототипом kitten должен быть cat, а прототипом cat - animal.
//  Добавьте метод makeSound в прототип animal, который выводит звук животного.
//  Вызовите метод makeSound для объекта kitten.

function Animal (name, energy, sound, speed){
let animal = {};
animal.name = name,
animal.energy = energy,
animal.sound = sound,
animal.speed = speed,
animal.makeSound = function() {
    return alert(`${this.sound}`);
}
return animal;
}

const lion = Animal('Leo', 7, 'rawr', 6);
console.log(lion);
//lion.makeSound();

const lionCub = Object.create(lion);
lionCub.makeSound();

// Задача 3: Создание метода для массивов

// Создайте метод getEvenNumbers для прототипа Array, который возвращает новый массив, 
// содержащий только четные числа из исходного массива.

Object.defineProperty(Array.prototype, 'getAnArrayOfEvenNumbers', {
    value: function() {
        let evenNumbers = [];
        for (let i of this) { if (i % 2 === 0) { evenNumbers.push(i); 
        } 
    } 
        return evenNumbers; 
        
    }
});

console.log(arrayOne.getAnArrayOfEvenNumbers());

// Задача 4: Расширение прототипа объекта

// Расширьте прототип объекта String, добавив метод capitalize,
//  который возвращает строку с первой буквой в верхнем регистре.

const strOne = 'quintonius maximus';

Object.defineProperty(String.prototype, 'capitalize', {
    value: function(){
       return this.charAt(0).toUpperCase() + this.slice(1);
    }
});

console.log(strOne.capitalize());




