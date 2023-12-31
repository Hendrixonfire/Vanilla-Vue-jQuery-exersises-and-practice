
// *Написать функцию, которая меняет цвет фона элемента при клике на него. #####

// *Написать функцию, которая скрывает элемент при клике на кнопку. ##

// *Написать функцию, которая выводит текстовое содержимое элемента в консоль. ###

// *Написать функцию, которая добавляет класс элементу при клике на кнопку. ##

// *Написать функцию, которая удаляет класс элемента при клике на кнопку. ### 



// ***Написать функцию, которая создает новый элемент и добавляет его в конец списка.## 

// ***Написать функцию, которая удаляет последний элемент из списка.## 

// ***Написать функцию, которая удаляет все элементы из списка.## 

// ***Написать функцию, которая меняет местами два элемента в списке.###

// ***Написать функцию, которая создает новый элемент и вставляет его перед указанным элементом. ##



// ****Написать функцию, которая создает таблицу умножения заданного размера и добавляет ее в указанный элемент. ####

// ****Написать функцию, которая создает слайдер изображений и добавляет его в указанный элемент. #####

// ****Написать функцию, которая создает динамическую форму и отправляет ее данные на сервер.

// ****Написать функцию, которая создает диаграмму из данных и добавляет ее в указанный элемент.

// ****Написать функцию, которая создает интерактивную карту и добавляет ее в указанный элемент.


//1.Написать рекурсивную функцию для вычисления суммы элементов массива.
let reccursiveSumOfAnArray = function(array) {
    return (array.length === 0) ? 0 : array[0] + reccursiveSumOfAnArray(array.slice(1));
}
//2.Написать рекурсивную функцию для вычисления чисел Фибоначчи.


function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}


const nTerms = prompt('Enter the number of terms: ');

if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}
//3.Написать рекурсивную функцию для нахождения наибольшего общего делителя двух чисел.
const reccursiveGCD = function(a, b) {
    if ( ! b) {
        return a;
    }

    return reccursiveGCD(b, a % b);
};
console.log(reccursiveGCD(360, 336));
//4.Написать рекурсивную функцию для проверки, является ли число простым.
function isPrime(n, i)
{

    // Base cases
    if (n <= 2)
        return (n == 2) ? true : false;
    if (n % i == 0)
        return false;
    if (i * i > n)
        return true;
    
    // Check for next divisor
    return isPrime(n, i + 1);
}
//5*.Написать рекурсивную функцию для нахождения пути на шахматной доске от начальной позиции до конечной.

//6*.Написать рекурсивную функцию для нахождения пути на шахматной доске от начальной позиции до конечной.