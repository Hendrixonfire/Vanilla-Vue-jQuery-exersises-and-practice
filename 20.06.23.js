//Задача 1: Создание глубокой копии объекта.

// Условие: Необходимо написать функцию deepCopy, которая принимает объект в качестве аргумента и возвращает его глубокую копию. Глубокая копия означает, что все свойства объекта, включая вложенные объекты, также должны быть скопированы.

// 
const teacher = {
    teacherName:'Elon',
    subject:'Math'
};
const deepCopy = obj => {
    return clonedObjDeep = JSON.parse(JSON.stringify(obj));
}

//console.log(deepCopy(teacher));

// Задача 2: Создание поверхностной копии объекта с сохранением ссылок на вложенные объекты.

const shallowCopy = obj => {
    return Object.assign(shallowCopyObj, obj);
}

//console.log(shallowCopy(teacher));

//////////////////

// Задача 2: Реализовать метод массива, который будет возвращать новый массив, содержащий только уникальные элементы.

const arrayOne = [1,1,1,3,12,12,6,34,34,8];

 arrayOne.uniqueValues = function () {
   let setFromArray = new Set(arrayOne);
   return arrayWithUniqueValues = Array.from(setFromArray);
}

//console.log(arrayOne.uniqueValues());

// Задача 3: Реализовать метод массива, который будет сортировать элементы в порядке убывания их длины.

const arrayTwo = ['Jack','Bob','Quinton','Xzibit','RZA'];

arrayTwo.sortByLength = function () {
    return this.sort((a,b) => a.length - b.length);
}

//console.log(arrayTwo.sortByLength(arrayTwo));

// Задача 1: Создание своего класса с использованием оператора new.

// Условие: Вам необходимо создать класс Person с использованием оператора new,
// который будет иметь свойства name и age, а также метод greet, который 
//выводит приветствие с именем и возрастом человека.

function Person (name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      return  alert(`Hello, my name is ${this.name} and i am ${this.age}`);
    }
}
const jake = new Person('Jake',22);
//jake.greet();

// Задача 3: Использование конструктора объекта и оператора new для создания массива объектов.

const products = [];

function Product (name, price){
    this.name = name;
    this.price = price;
}

const coke = new Product('Coca Cola', 2.99);
const redBull = new Product('Red bull', 3.99);

//console.log(products.push(coke));
//console.table(products);
//console.log(products.push(redBull));
//console.table(products);



