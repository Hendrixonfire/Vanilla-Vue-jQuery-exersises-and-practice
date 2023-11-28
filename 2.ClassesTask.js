                                                 // задачи на наследование:

//------------------------------------------------------------------------------------------------------------------
// Задача1: Создание класса и его использование

// Создайте класс Rectangle для представления прямоугольника. 
// Класс должен иметь свойства width (ширина) и height (высота). 
// Также добавьте методы getArea() для вычисления площади прямоугольника и getPerimeter() 
// для вычисления периметра. Затем создайте объект прямоугольника и выведите его площадь и периметр.


class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height
    }
    getPerimeter(){
        return ( (this.width + this.height) * 2) ;
    }
}

const rect1 = new Rectangle(20, 10);
console.log(rect1.getArea());
// ------------------------------------------------------------------------------------------------------------------
// Задача2: Наследование классов

// Создайте класс Circle (круг), который наследуется от класса Shape (фигура). 
// Класс Shape должен иметь свойства name (название) и color (цвет). 
// Класс Circle должен иметь дополнительное свойство radius (радиус) и метод getArea()
//  для вычисления площади круга. Затем создайте объект круга, задайте его радиус и выведите его площадь.

class Shape {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(name, color, radius){
        super();
        this.name = name;
        this.color = color;
        this.radius = radius;
    }
    getArea(){
        return (this.radius * this.radius) * Math.PI;
    }
}

const circleOne = new Circle('circle','red',10);
//console.log(circleOne.getArea());

// ------------------------------------------------------------------------------------------------------------------
// Задача3: Переопределение метода

// Создайте класс Animal (животное) с методом makeSound(), который выводит звук животного. 
// Затем создайте подкласс Cat (кот), который наследуется от класса Animal и переопределите метод makeSound(),
// чтобы он выводил "Мяу". Создайте объект кота и вызовите его метод makeSound().

class Animal{
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }
    makeSound(){
        return alert(`${this.sound}`);
    }
}

class Cat extends Animal {
    constructor(name, sound){
        super();
        this.name = name;
        this.sound = sound;
    }
    makeSound(){
        return alert('Mew');
    }
}

class Lion extends Animal {
    constructor(name, sound){
        super();
        this.name = name;
        this.sound = sound;
    }
}
const newCat = new Cat('Thor', 'mew');
const newLion = new Lion('Brox', 'rawr');
//console.log(newCat);
newCat.makeSound();
// ------------------------------------------------------------------------------------------------------------------
//  Задача4: Использование статического метода

// Создайте класс `MathUtils` с статическим методом `square`, который принимает число в качестве аргумента 
// и возвращает его квадрат. Используйте этот статический метод для вычисления квадрата числа.

class MathUtils {
    static square(number) {
        return number * number;
    }
}



console.log(MathUtils.square(5));

// ------------------------------------------------------------------------------------------------------------------
// Задача5: Расширение функциональности прототипа

// Расширьте прототип встроенного класса String, добавив метод capitalize,
//  который возвращает строку с первой буквой в верхнем регистре. 
// Используйте этот метод для преобразования строки.


const strOne = 'quintonius maximus';

Object.defineProperty(String.prototype, 'capitalize', {
    value: function(){
       return this.charAt(0).toUpperCase() + this.slice(1);
    }
});

console.log(strOne.capitalize());
