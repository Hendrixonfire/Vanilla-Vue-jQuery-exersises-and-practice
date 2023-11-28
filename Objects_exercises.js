// 1.Создание объекта "Студент":
// Требуется создать объект "Студент" с заданными свойствами: имя ("Student Name"), возраст (20) и группа ("Student Group").

const student = {
    studentName:'Valera',
    age:20,
    studentGroup:'B2'
};

// 2.Доступ к свойствам объекта:
// Требуется вывести на экран имя и группу студента, получив доступ к соответствующим свойствам объекта.
//console.log(student.studentName,student.studentGroup);

// 3.Изменение свойств объекта:
// Требуется изменить возраст студента на 21 и вывести обновленный объект.
student.age = 21;
//console.log(student.age);
// 4.Добавление новых свойств:
// Требуется добавить новое свойство "averageGrade" со значением 4.5 к объекту студента и вывести обновленный объект.
student.avarageGrade = 4.5;
//console.table(student);
// 5.Удаление свойств объекта:
// Требуется удалить свойство "group" из объекта студента и вывести обновленный объект.
delete student.studentGroup;
//console.table(student);

// 6.Объект в качестве значения свойства:
// Требуется создать объект "Преподаватель" с заданными свойствами: имя ("Teacher Name") и предмет ("Subject").
// Затем необходимо присвоить этот объект в качестве значения свойства "teacher"
// объекта студента и вывести обновленный объект студента.
const teacher = {
    teacherName:'Elon',
    subject:'Math'
}
student.teacher = teacher;
//console.table(teacher);
//console.table(student);

// 7.Цикл for...in:
// Требуется вывести на экран все свойства объекта "car" и их значения, используя цикл for...in.
const cars = {
    model:'Porshe',
    type:'Track',
    year:1998
}
for (const prop in cars) {
   // console.log(`${prop}: ${cars[prop]}`);
}


// 8.Методы объекта:
// Требуется добавить метод "greet" к объекту студента, который будет выводить приветствие с именем студента. 
//Затем необходимо вызвать этот метод и вывести приветствие.

const studentTwo = {
    studentName:'Gena',
    age:20,
    studentGroup:'B2',
    greet: function() {
        return this.studentName;
    }
}
 
//console.log(studentTwo.greet());

// 9.Копирование объекта:
// Требуется создать копию объекта студента, присвоить новое имя ("New Name") копии и вывести исходный и копированный объекты.
const newName = studentTwo;
//console.table(newName);
// 10.Вложенные объекты:
// Требуется создать объект "Университет" с заданным свойством "name" ("University Name") и массивом "students",
// содержащим объект студента. Затем необходимо вывести на экран имя, возраст и группу каждого студента, используя цикл for...of.
const university = {
    name:'MIT',
    student:
    [ 
       { 
        studentName:'Valera',
        age:20,
        studentGroup:'B2'
       },

       {
        studentName:'Bob',
        age:21,
        studentGroup:'B3'
       }
    ]
}

university.student.forEach(element => {
    
 (element in university) 
   // console.log(`${element.studentName} ` + `${element.age} ` + `${element.studentGroup}`)
})


// Дополнительные задачи:

// 11.Расчет среднего балла студента:
// Требуется добавить метод "calculateAverageGrade" к объекту студента, который будет вычислять средний балл 
//на основе массива "grades" и возвращать результат. Затем необходимо задать массив оценок и вывести средний балл студента.

const studentThree = {
    studentName:'Gena',
    age:20,
    studentGroup:'B2',
    grades: [5,5,5,5,5,5],
    greet: function() {
        return this.studentName;
    },
    calculateAvarageGrade: function() {
      return sum = this.grades.reduce((el,total) => total + el, 0) / this.grades.length ;
     
}
}

//console.log(studentThree.calculateAvarageGrade());
// 12.Сравнение объектов:
// Требуется сравнить три объекта студента и вывести результаты сравнения.
const studentFour = studentThree;
const studentFive = {
    studentName:'Gen',
    age:21,
    studentGroup:'B3',
    grades: [5,5,5,5,5,5],
    greet: function() {
        return this.studentName;
    },
    calculateAvarageGrade: function() {
      return sum = this.grades.reduce((el,total) => total + el, 0) / this.grades.length ;
     
    },
    countProperties: function(){
        return Object.keys(this).length;
    }
}

//console.log(studentFour == studentFour);
//console.log(studentFour == studentFive);

// 13.Преобразование объекта в строку JSON:
// Требуется преобразовать объект студента в строку формата JSON с помощью метода JSON.stringify и вывести полученную строку.

const studentNew = JSON.stringify(studentFive);

// 14.Преобразование строки JSON в объект:
// Требуется преобразовать строку JSON обратно в объект с помощью метода JSON.parse и вывести полученный объект.

//console.table(JSON.parse(studentNew));

// 15.Подсчет количества свойств в объекте:
// Требуется написать функцию countProperties, которая будет подсчитывать количество свойств в объекте и возвращать результат.
// Затем необходимо использовать эту функцию для подсчета свойств в объекте студента и вывести результат.
//console.log(studentFive.countProperties());

// Задача1: Книжная библиотека
// Создайте объект Library, который будет представлять книжную библиотеку. У объекта Library должны быть следующие свойства и методы:
// books - массив книг в библиотеке (каждая книга представлена объектом со свойствами title и author).
// addBook(title, author) - метод для добавления новой книги в библиотеку.
// getBookTitles() - метод, который возвращает массив названий всех книг в библиотеке.
const library = {
    books:[{
            title:"Game of thrones", author:"J.R.R Martin"
           },
           {
            title:"A Clash Of Kings", author:"J.R.R Martin"
           },
           {
            title: "A Storm of Swords", author:"J.R.R Martin"
           },
          ],

    addBook: function(){
    let titlePrompt = prompt('Add book title: ');
    let authorPrompt = prompt('Add book author: ');
    return  library.books.push({title:titlePrompt, author:authorPrompt});
    },

    getBookTitle(){
        return this.books.map(({ title }) => title);
    }

}
//console.table(library.addBook());
//console.table(library.getBookTitle());
//console.table(library);




// Задача2: Калькулятор
// Создайте объект Calculator, который будет представлять простой калькулятор. У объекта Calculator должны быть следующие свойства и методы:

// result - текущий результат вычислений.
// add(num) - метод для прибавления числа к текущему результату.
// subtract(num) - метод для вычитания числа из текущего результата.
// multiply(num) - метод для умножения текущего результата на число.
// divide(num) - метод для деления текущего результата на число.
// clear() - метод для сброса текущего результата в 0.


const calculator = {
    
    result: 0,

    add: function(){
        let numberPromptAdd = prompt('Type a number to add to current result:');
        let sum = this.result + (numberPromptAdd * 1);
        return this.result = sum;
    },

    substract: function(){
        let numberPromptSubstract = prompt('Type a number to substract to current result:');
        let diff = this.result - (numberPromptSubstract * 1);
        return this.result = diff;

    },

    multiply: function(){
        let numberPromptMultiply = prompt('Type a number to multiply with current result:');
        let mult = this.result * (numberPromptMultiply * 1);
        return this.result = mult;4
    },

    divide: function(){
        let numberPromptDivide = prompt('Type a number to Divide by current result:');
        let div = this.result / (numberPromptDivide * 1);
        return this.result = div;
    },

    clear: function(result){

        return this.result = 0;
3
    }
}

//console.log(calculator.add());
//console.log(calculator.multiply());
//console.log(calculator.divide());
//console.log(calculator.clear());
//console.log(calculator.result);

// Задача3: Компания
// Создайте объект Company, который будет представлять компанию. У объекта Company должны быть следующие свойства и методы:

// employees - массив сотрудников компании (каждый сотрудник представлен объектом со свойствами name и position).
// hireEmployee(name, position) - метод для найма нового сотрудника.
// fireEmployee(name) - метод для увольнения сотрудника по имени.
// getEmployeeCount() - метод, который возвращает количество сотрудников в компании.

const company = {
    employees: [
                { 
                name:'Valera',
                position:'CEO'
                },
    
                {
                name:'Bob',
                position:'C++ Senior develover'
                }
               ],
    hireEmployee(name, position) {
        this.employees.push({name, position});
    },

    fireEmployee(name) {
        return this.employees = this.employees.filter(value => (value.name !== name) );
    },

    getEmpoyeeCount() {
        return this.employees.length;
    }
}
//console.table(company.hireEmployee('Gena', 'C++ Junior Developer'));
//console.table(company.employees);
//console.table(company.getEmpoyeeCount());
//console.table(company.fireEmployee('Gena'));
//console.table(company.getEmpoyeeCount());
// Задача4: Магазин
// Создайте объект Shop, который будет представлять интернет-магазин. У объекта Shop должны быть следующие свойства и методы:

// products - массив продуктов в магазине (каждый продукт представлен объектом со свойствами name и price).
// addProduct(name, price) - метод для добавления нового продукта в магазин.
// removeProduct(name) - метод для удаления продукта из магазина по имени.
// getTotalPrice() - метод, который возвращает общую стоимость всех продуктов в магазине.

const shop = {
    products: [
                { 
                name:'Red bull',
                price:3.99
                },

                {
                name:'Small Latte',
                price:4.99
                }
              ],

    addProduct(name, price) {
        this.products.push({name, price});
    },

    remodeProduct(name) {
        return this.products = this.products.filter(value => (value.name !== name) );
    },

    getTotalPrice(){
        let totalPrice = 0;
        for (const item of this.products) {
          totalPrice += item.price;
        }
          return totalPrice;
     
       }
    }
    

//console.log(shop.getTotalPrice());