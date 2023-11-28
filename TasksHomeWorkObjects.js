//const _ = require('lodash');


// ДЗ:
const teacher = {
    teacherName:'Elon',
    subject:'Math'
};
const teacherTwo ={
    teacherName:'Gena',
    subject:'Math',
    class:'A22'
};
const teacherDeep = {
    teacherName:'Elon',
    subject:'Math',
    status: {
        verified: true,
    }

};
const teacherTwoDeep ={
    teacherName:'Gena',
    subject:'Math',
    class:'A22',
    status: {
        verified: false,
    }
};
let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
  ]
let hobbies = {
    hobbie:['Snowboarding','Guitar','Gaming','Pizza eating']
}
//console.log(hobbies);
let clonedObj ={};
let clonedObjDeep ={};
let shallowCopyObj={};
const arr = [1,4,12,'Brother'];
// Задача 1:
// Напишите функцию shallowCopy(obj), которая создает поверхностную копию объекта obj и возвращает ее.

const shallowCopy = obj => {
    return Object.assign(shallowCopyObj, obj);
}

//console.table(shallowCopy(teacher));
//console.table(shallowCopyObj);

// Задача 2:
// Напишите функцию deepCopy(obj), которая создает глубокую копию объекта obj и возвращает ее. 
// Глубокая копия должна быть независимой от оригинала.

const deepCopy = obj => {
    return clonedObjDeep = JSON.parse(JSON.stringify(obj));
}
//console.table(deepCopy(teacherTwoDeep));
//const deepCopy = obj => {
//   return clonedObjDeep = _.cloneDeep(obj);
//}

//console.table(deepCopy(teacherTwoDeep));

// Задача 3:
// Напишите функцию copyWithSpread(obj), которая использует Spread-оператор 
// для создания поверхностной копии объекта obj и возвращает ее.

const copeWithSpread = obj => {
    console.table(clonedObj);
    return clonedObj = {...obj};
}

//console.table(copeWithSpread(teacher));
//clonedObj.subject = 'Phys';
//console.table(teacher);
//console.table(clonedObj);

// Задача 4:
// Напишите функцию copyWithLodash(obj), которая использует библиотеку Lodash 
// для создания глубокой копии объекта obj и возвращает ее.

const copyWithLodash = obj => {
    return clonedObjDeep = _.cloneDeep(obj);
}


// Задача 5:
// Напишите функцию addHobby(obj, hobby), которая добавляет хобби hobby в массив хобби объекта obj.
// Функция должна возвращать новый объект с добавленным хобби, не изменяя оригинальный объект.

const addHobby = (obj, hobby) => {
    newHobbyObj = JSON.parse(JSON.stringify(obj));
    newHobbyObj.hobbie.push(hobby);
    return newHobbyObj;
}
//console.log(addHobby(hobbies, 'Working out'));

// Задача 6:
// Напишите функцию mergeObjects(obj1, obj2), которая 
// объединяет свойства двух объектов obj1 и obj2 в новый объект. 
// Если свойства имеют одинаковые имена, используйте значение из obj2.
//  Функция должна возвращать новый объединенный объект.
const mergeObjects = (obj1, obj2) => {
    return newObject = {...obj1, ...obj2};
   }

//console.table(mergeObjects(teacherDeep,teacherTwo));

// Задача 7:
// Напишите функцию copyArray(arr), которая создает копию массива arr и возвращает ее. 
// Используйте метод slice() для создания поверхностной копии массива.
const copyArray = arr => {
    return shallowArrayCopy = arr.slice();
}

//console.log(copyArray(arr));

// Задача 8:
// Напишите функцию cloneObjectArray(arr), которая создает новый массив, 
// содержащий клоны всех объектов из массива arr. Используйте метод map() и 
// глубокое копирование объектов с помощью Lodash.

const cloneObjectArray = arr => {
 let mappedArrayDeep =[];
 return mappedArrayDeep = _.cloneDeep(arr.map((x) => x));
}
//console.log(cloneObjectArray(cars));

// Задача 9:
// Напишите функцию copyNestedArray(arr), которая создает копию массива arr,
//  включая все вложенные массивы. Глубина вложенности может быть произвольной. 
// Используйте глубокое копирование с помощью метода JSON.parse(JSON.stringify()).

const array = [[1,2],[3,4]];
let clonedArr = [];

const copyNesterArray = arr => {
return clonedArr = JSON.parse(JSON.stringify(arr));
}

//console.log(copyNesterArray(array));
//console.log(clonedArr);
//console.log(array);

// function copyNestedArray(arr) {
//   return JSON.parse(JSON.stringify(arr));
// }

// // Пример использования:
// let originalArray = [1, [2, [3]]];
// let copiedArray = copyNestedArray(originalArray);
// console.log(copiedArray);
// // Вывод: [1, [2, [3]]]



// Задача 10:
// Напишите функцию copyObjectWithProperties(obj, properties), 
// которая создает новый объект на основе объекта obj, 
// содержащий только указанные свойства из массива properties.
//  Функция должна возвращать новый объект с выбранными свойствами.

let copy =[];
//console.log(copy);

const copyObjectProperties = (obj, properties) => {
  
    for( let i = 0; i < properties.length; i++) {
        if (obj.hasOwnProperty(properties[i])){
            copy[properties[i]] = JSON.parse(JSON.stringify(obj[properties[i]]));
        }
    }
    return copy;
}
//console.log(copyObjectProperties(teacherTwoDeep, ['subject', 'status']));


//                                         Задачи на new:


// Задача 1:
// Создайте конструктор Person с двумя свойствами name и age. Добавьте метод greet, 
//который выводит приветствие в формате "Привет, меня зовут {name} и мне {age} лет".
// Создайте экземпляр объекта person с вашим именем и возрастом, и вызовите метод greet.
function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function() {
      return  alert(`Hello, my name is ${this.name} and i am ${this.age}`);
    }
}
const jake = new Person('Jake',22);
//jake.greet();

// Задача 2:
// Создайте конструктор Book с двумя свойствами title и author. Добавьте метод getTitle,
// который возвращает название книги, и метод getAuthor, который возвращает имя автора.
// Создайте несколько экземпляров объектов book с различными названиями и авторами,
// и выведите их названия и авторов с помощью соответствующих методов.
function Book(title, author){
    this.title = title;
    this.author = author;
    this.getTitle = function() {
       return this.title;
    };
    this.getAuthor = function() {
        return this.author;
     }
}

const gotJRR = new Book('Game of thrones','J.R.R. Martin');
const acokJRR = new Book('A Clash of Kings','J.R.R. Martin');
const hereticsOfDuneHerbert = new Book('Heretics Of Dune','Frank Herbert');

//console.log(gotJRR.getTitle());
//console.log(acokJRR.getAuthor());
//console.log(hereticsOfDuneHerbert.getTitle());
//console.log(hereticsOfDuneHerbert.getAuthor());

// Задача 3:
// Создайте конструктор Rectangle с двумя свойствами width и height. Добавьте метод getArea,
// который возвращает площадь прямоугольника, и метод getPerimeter, который возвращает периметр прямоугольника.
// Создайте экземпляр объекта rectangle с заданными значениями ширины и высоты,
// и выведите его площадь и периметр.

function Rectangle(width, height){
    this.width = width;
    this.height = height;
    this.getArea = function() {
      return  this.width * this.height;
    };
    this.getPerimeter = function() {
        return  ((this.width + this.height) * 2);
    }
}

const rectangleOne = new Rectangle(4,2);

//console.log(rectangleOne.getArea());
//console.log(rectangleOne.getPerimeter());

// Задача 4:
// Создайте конструктор Student с двумя свойствами name и grade. Добавьте метод study,
// который выводит сообщение "Студент {name} изучает {grade}".
// Создайте несколько экземпляров объектов student с различными именами и оценками, 
//и вызовите метод study для каждого студента.
function Student(name, grade){
    this.name = name;
    this.grade = grade;
    this.study = function() {
      return  alert(`The grade of the student ${this.name} is: ${this.grade}`);
    }
}
const studentOne = new Student('Valera',5);
//console.log(studentOne.study());

// Задача 5:
// Создайте конструктор BankAccount с двумя свойствами owner и balance. 
//Добавьте методы deposit и withdraw, которые позволяют пополнить и снять деньги со счета соответственно.
// Создайте экземпляр объекта account с вашим именем в качестве владельца и начальным балансом, 
//и проверьте функциональность методов deposit и withdraw.function
function BankAccount(owner, balance){
        this.owner = owner;
        this.balance = balance;
        this.deposit = function(amountOfDeposit) {
          return  this.balance +=  amountOfDeposit;
        };
        this.withdraw = function(amountOfWithdrawal) {
            if ( (this.balance - amountOfWithdrawal) < 0){
                return alert('Your account balance is empty, u can alwasys make a deposit using deposit()');
            } else {
            return  this.balance -=  amountOfWithdrawal;
            }
          }
    }

    const myAccount = new BankAccount('Hendrixonfire', 120);
 
    //myAccount.balance = myAccount.deposit(15);
    
    //myAccount.balance = myAccount.withdraw(15);
    // myAccount.balance = myAccount.withdraw(120);
    //console.log(myAccount.balance);
    //myAccount.balance = myAccount.withdraw(10);
