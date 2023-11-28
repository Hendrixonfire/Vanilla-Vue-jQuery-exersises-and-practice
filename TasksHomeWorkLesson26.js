//Задачи на new:


// Задача 1:
// Создайте конструктор Person с двумя свойствами name и age. Добавьте метод greet, 
//который выводит приветствие в формате "Привет, меня зовут {name} и мне {age} лет".
// Создайте экземпляр объекта person с вашим именем и возрастом, и вызовите метод greet.
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
      return  alert(`Hello, my name is ${this.name} and i am ${this.age}`);
    };
}
const jake = new Person('Jake', 22);
//jake.greet();

// Задача 2:
// Создайте конструктор Book с двумя свойствами title и author. Добавьте метод getTitle,
// который возвращает название книги, и метод getAuthor, который возвращает имя автора.
// Создайте несколько экземпляров объектов book с различными названиями и авторами,
// и выведите их названия и авторов с помощью соответствующих методов.
function Book(title, author) {
    this.title = title;
    this.author = author;

    this.getTitle = function() {
       return this.title;
    };

    this.getAuthor = function() {
        return this.author;
    };
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

function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.getArea = function() {
      return  this.width * this.height;
    };

    this.getPerimeter = function() {
        return  ((this.width + this.height) * 2);
    };
}

const rectangleOne = new Rectangle(4,2);

//console.log(rectangleOne.getArea());
//console.log(rectangleOne.getPerimeter());

// Задача 4:
// Создайте конструктор Student с двумя свойствами name и grade. Добавьте метод study,
// который выводит сообщение "Студент {name} изучает {grade}".
// Создайте несколько экземпляров объектов student с различными именами и оценками, 
//и вызовите метод study для каждого студента.
function Student(name, grade) {
    this.name = name;
    this.grade = grade;

    this.study = function() {
      return  alert(`The grade of the student ${this.name} is: ${this.grade}`);
    };
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
            if ( (this.balance - amountOfWithdrawal) < 0) {
                return alert('Your account balance is empty, u can alwasys make a deposit using deposit()');
            } else {
            return  this.balance -=  amountOfWithdrawal;
            }
        };
    }

    const myAccount = new BankAccount('Hendrixonfire', 120);
 
    //myAccount.balance = myAccount.deposit(15);
    
    //myAccount.balance = myAccount.withdraw(15);
    // myAccount.balance = myAccount.withdraw(120);
    //console.log(myAccount.balance);
    //myAccount.balance = myAccount.withdraw(10);

    
// // Задача1: Найдите наибольшее число в массиве.
// // У вас есть массив чисел. Задача состоит в том, чтобы найти и вернуть наибольшее число из этого массива.
const arrayFive = [1,12,54];
let maximum = arrayFive.reduce( (a, b) =>  Math.max(a, b) );

//console.log(maximum);


// // Задача2: Проверьте, является ли строка палиндромом.
// // Дана строка. Задача - определить, является ли эта строка палиндромом. 

const polindrom = userInput => {
  
    for(i=0;i < userInput.length / 2; i++){
        if (userInput[i] !== userInput[(userInput.length - 1 - i)]){
            return false;
    
        } else {
            return true;
        }
    }
    }
    //console.log(polindrom('kazak'));

// // Задача3: Найдите сумму всех чисел в массиве.
// // Есть массив чисел. Задача - найти сумму всех чисел в этом массиве и вернуть полученную сумму.

let sumOfTheArray = arrayFive.reduce(sumFunc);

function sumFunc(total, num) {
    return total + num;
}
//console.log(sumOfTheArray);

// // Задача4: Разверните каждое слово в строке задом наперед, но сохраните порядок слов.
// // У вас есть строка, состоящая из слов, разделенных пробелами. 
// // Задача - развернуть каждое слово в строке задом наперед, но при этом сохранить порядок слов.

const words = 'Hello World Two';

const reversedWords = words.split(' ').map(word => word.split('').reverse().join('')).join(' ');

//console.log(reversedWords);

// // Задача5: Найдите наибольший общий делитель (НОД) двух чисел.
// // У вас есть два числа. Задача - найти и вернуть наибольший общий делитель (НОД) этих двух чисел.
// // НОД - это наибольшее число, на которое делятся оба числа без остатка.

const commonDividers = (numOne,numTwo) => {
let divisor;
for (let i = 1; i <= numOne && i<= numTwo; i++){
    if ( (numOne % i == 0) && (numTwo % i == 0) )
    divisor = i;
}
return divisor;
}

//console.log(commonDividers(13,48));



// // Задача6: Удалите дубликаты из массива.
// // У вас есть массив чисел или строк. Задача - удалить все повторяющиеся элементы из этого массива 
// // и вернуть новый массив без дубликатов.

const arrayOne = [1,1,1,3,12,12,6,34,34,8];

const setWithUniqueValues = new Set(arrayOne);

const arrayWithUniqueValues = Array.from(setWithUniqueValues);

//console.log(arrayWithUniqueValues);



// // Задача7: Подсчитайте количество гласных букв в строке.
// // У вас есть строка. Ваша задача - подсчитать количество гласных букв (a, e, i, o, u) в этой строке и вернуть полученное количество.
const vowels = ['a', 'e' , 'o' ,'i', 'u']
function getVowelCount(str){
    let vowelCount = 0;
    for (let char of str){
        if(vowels.includes(char)){
            vowelCount++;
        }
    }
 return vowelCount;
}
//console.log(getVowelCount('Champion'));

// // Задача8: Отсортируйте массив объектов по определенному свойству.
// // У вас есть массив объектов. Каждый объект представляет собой запись с различными свойствами, 
// // например, "name" и "age". Ваша задача - отсортировать этот массив объектов по определенному 
// // свойству (например, "age") в порядке возрастания.


 const snowboards = [
     {name: 'Ride Warpig 2024', price: 800},
     {name: 'Ride X LoonetTunes 2023', price: 655},
     {name: 'Ride Berzerker 2023', price: 1250},
     {name: 'Ride Kink 2023', price: 999},
 ]
let sortedSNowboards = snowboards.sort((snowboard1, snowboard2) => (snowboard1.price < snowboard2.price) ? 1 
: (snowboard1.price > snowboard2.price) ? -1 : 0);

//console.log(sortedSNowboards);
// Задача9: Проверьте, является ли число простым.
// Условие: Напишите функцию isPrime(number), которая принимает число number в качестве аргумента и проверяет,
//  является ли оно простым числом. Функция должна вернуть true, если число является простым, и false 
// в противном случае.


let isPrime = true;

const primeNumber = num => {
    if (num === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    
    // check if number is greater than 1
    else if (num > 1) {
    
        // looping through 2 to number-1
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
               return alert(`${num} is not Prime`);
            }
        }
    
     if (isPrime) {
        return alert(`${num} is Prime`);
     }
        } else {
            return alert(`${num} is not Prime`);
        }
    }


// Задача10: Реализуйте алгоритм сортировки пузырьком для массива чисел.
// Условие: Напишите функцию bubbleSort(arr), которая принимает массив чисел arr в качестве аргумента 
// и сортирует его в порядке возрастания с использованием алгоритма сортировки пузырьком. 
// Функция должна вернуть отсортированный массив.

const bubbleSort = arr => {
  
    let i, j;
    let isSwapped = false;
  
    for (i = 0; i < arr.length; i++) {
  
        isSwapped = false;
  
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
  
        // IF no two elements were swapped
        // by inner loop, then break 
        if (!isSwapped) {
            break;
        }
    }
  
   return arr;
}
  
const arrayTwo = [333, 243, 11, 15, 2, 14, 53456, 15435, 65];
  

//console.log(bubbleSort(arrayTwo));


//1. Создайте объект rectangle с свойствами width и height и методом getArea, 
//    который возвращает площадь прямоугольника.

const rectangle = {
    width:10,
    height:20,
    getArea: function(){
        return this.width * this.height;
    }
}

//console.log(rectangle.getArea());

// 2. Создайте объект counter с свойством count и методами increment и decrement,
//    которые увеличивают и уменьшают значение count соответственно.

const counter = {
    count:0,
    increment: function(){
        return this.count = this.count + 1;
    },
    decrement: function(){
        return this.count = this.count - 1;
    }  
}
//console.log(counter.increment());
//console.log(counter.increment());
//console.log(counter.decrement());

// 3. Создайте объект circle с свойством radius и методом getPerimeter,
//    который возвращает периметр окружности.
const circle = {
    radius: 10,
    getPerimeter: function(){
        let perimeter = 0;
        return perimeter =  2 * Math.PI * this.radius ;
    }
}
console.log(circle.getPerimeter());

// 1. Создание объекта:

// Создайте конструктор Person, который принимает два параметра: name (строка) и age (число).
// Внутри конструктора установите свойства name и age для создаваемого объекта, используя this.
// Добавьте метод introduce в прототип объекта Person, который выводит в консоль приветствие 
// с именем и возрастом человека.

function Guy(name, age) {
   
    this.name = name;
    this.age = age;
    this.introduce = function() {
        console.log(`Greetings ${this.name}`);
    };
}

const bob = new Guy('Bob', 22);
bob.introduce();

// 2. Добавление элементов в массив:
// Создайте пустой массив fruits.
// Добавьте метод addFruit к массиву fruits, который принимает один параметр fruit (строка).
// Внутри метода addFruit используйте this для обращения к массиву fruits и добавьте fruit
//  в конец массива с помощью метода push.

const fruits = [];

fruits.addfruit = function (fruit) {
    return this.push(fruit);
}

fruits.addfruit('Banana');
fruits.addfruit('Cherry');
//console.log(fruits);

// 3.Фильтрация элементов массива:
// Создайте массив numbers, содержащий произвольные числа.
// Добавьте метод evenNumbers к массиву numbers.
// Внутри метода evenNumbers используйте this для обращения к массиву numbers и примените метод filter, 
// чтобы создать новый массив, содержащий только четные числа.
const arraySix = [1,4,6,12,5,7];

arraySix.evenNumbers = function (){
    return arraySixEven = this.filter(num => (num % 2 === 0) );
}

//console.log(arraySix.evenNumbers());
 
// 4.Поиск элемента массива:
// Создайте массив books, содержащий объекты с информацией о книгах.
// Каждый объект должен иметь свойства title (название книги) и author (автор книги).
// Добавьте метод findByTitle к массиву books, который принимает один параметр title (строка).
// Внутри метода findByTitle используйте this для обращения к массиву books и примените метод find, 
// чтобы найти объект книги по указанному названию.

const BookTwo = [
    {"title":'Game of thrones',
     "author": 'J.R.R. Martin'
    },
    {"title":'Heretics Of Dune',
    "author": 'Frank Herbert'
    },
     
];

BookTwo.findByTitle = function(title) {
 return this.find(book => (book.title === title) );
}
 
//console.log(BookTwo.findByTitle('Heretics Of Dune'));



// 5.Сортировка массива:
// Создайте массив numbers, содержащий произвольные числа.
// Добавьте метод sortDescending к массиву numbers.
// Внутри метода sortDescending используйте this для обращения к массиву numbers и примените метод sort, 
// передавая функцию сравнения, которая сортирует элементы в порядке убывания.

const randomArray = [45, 12, 1, 67 , 5, 5823, 35891, 88888];
randomArray.sortDescending = function() {
    return this.sort((a, b) => b - a);
}

//console.log(randomArray.sortDescending());

// 6.Рекурсивный подсчет суммы элементов массива:
// Создайте массив numbers, содержащий произвольные числа.
// Добавьте метод sum к массиву numbers.
// Внутри метода sum используйте условную конструкцию для проверки, если массив пуст (длина равна 0), 
// то возвращайте 0. Если массив не пуст, то используйте this[0], 
// чтобы получить первый элемент массива, и рекурсивно вызывайте метод sum на остатке массива (this.slice(1)),
//  затем суммируйте текущий элемент и результат рекурсивного вызова.

let numbers = [1, 3, 5, 7, 9];
let N = numbers.length;

numbers.sum = function(num, len) {
    if (len <= 0)
    return 0;
    return (numbers.sum(num, len - 1) + num[len - 1]);
    
}

console.log(numbers.sum(numbers, N));




// 7.Применение метода к каждому элементу массива:
// Создайте массив names, содержащий произвольные имена (строки).
// Добавьте метод greet к массиву names.
// Внутри метода greet используйте метод forEach, чтобы пройти по каждому элементу массива и 
// вывести приветствие с использованием текущего имени.

const names = ['James','Quinton','Jessica','Valery','Elon','Bob'];

names.greet = function() {
    this.forEach(name => console.log(`Greetings ${name}`));
};

names.greet();
