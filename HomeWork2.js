  
//Напишите стрелочную функцию с именем sumEvens, которая принимает массив чисел и возвращает сумму четных чисел в массиве.

  let arrayTwo = [1,2];
  const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
  });

  readline.question('Enter array element', element => {
    arrayTwo.push(element);
    console.log(arrayTwo);
    readline.close();
  });



  const sumOfEvenNumbers = array => {
    let sum = 0;
    for (let i=0; i < array.length; i++){
        if(array[i] % 2 === 0){
            sum += array[i];
        }
       
  }
  return sum;
}
  console.log(sumOfEvenNumbers(arrayTwo));

//Возведение в квадрат и суммирование элементов этого массива с помощью стрелочных функций и в 1 строке кода

  const initialValue = 0;
  const squareAndSumOfNumbers = arrayTwo.reduce(
    (accumulator, currentValue) => 
    accumulator + (currentValue * 2),
    initialValue 
  );
  console.log(squareAndSumOfNumbers);

//Затем найдите среднее значение массива

  const avarageArrayValue = array => 
  {
    let sum = 0;
    for (let i=0; i < array.length; i++)
    {
        sum += array[i];
    }
    return sum / array.length;

  }
  console.log(avarageArrayValue(arrayTwo));

  //function printOnly(){ console.log("printing"); }

  const printOnly = () => {
    console.log('printing');
  }

  printOnly();
  //Перепишите данные функции в стрелочный вид:

  //function createFullName(firstName,lastName)
 // { return firstName + " " + lastName; } 
 
 const first = 'Sergey';
 const last = 'Pirozhenkov';

 const createFullName = (firstName, lastName) => 
 {
    return firstName + " " + lastName;
 }

 console.log(createFullName(first, last));

 //function doubleNumber(number) { return number * 2; }

 const doubleNumber = number => {
    return number * 2;
 }
 console.log(doubleNumber(3));

//      function getEvenNumbers(array) { 
 //     let evenNumbers = []; for (let i of array) { if (i % 2 === 0) { evenNumbers.push(i); 
 //      } 
//      } 
///     return evenNumbers; 
//      }


const getEvenNumbers = array => {
    let evenNumbers = [];
    for (let i of array ) {
        if (i % 2 === 0) 
        {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}

console.table(getEvenNumbers([1,3,6,8,12,4]));


const dashTwixt2Evens = (number) => {
    let arr = [];
  /*
    let temp = number;
    let remainder;
  */
  numberAsString = number.toString();
  arr =  numberAsString.split("");
  console.log(arr);
  /*
    while(temp!=0){
      remainder = temp%10;
      console.log(remainder);
      temp = Math.floor(temp/10);
      console.log(temp);
      arr.unshift(remainder);
    }
     */
   console.log(arr);
    for(let i=0; i<arr.length-1; i++){
      if(arr[i]%2 === 0 && arr[i+1]%2 === 0)
        {
     
       
                 arr.splice(i+1, 0, "-");
       
          
        }
    }
    return arr.join("");
}

console.log(dashTwixt2Evens(235478));

  // Задача1: Расчет суммы покупок с учетом скидки.
  // Напишите функцию, которая принимает на вход массив цен на товары и процент скидки.
  //Функция должна вернуть итоговую сумму покупок с учетом скидки.

  const discountPrice = (prices, discountAmount = 0.9) => {
    prices.forEach(price => {
      console.log(parseFloat(price * discountAmount).toFixed(2));
    });
  }
  discountPrice([100,95,75,65], 0.83);

  // Задача2: Проверка на совершеннолетие.
  // Напишите функцию, которая принимает на вход год рождения и возвращает true, 
  //если возраст человека сейчас больше или равен 18, и false в противном случае.
  
  const adult = yearOfBirth => {
     ageAdult = 2023 - yearOfBirth; 
     if (ageAdult >= 18)
     {
      return true;
     } 
     else
     {
      return false;
     }
     }
    
  console.log(adult(2000));

  // Задача3: Генерация случайного числа.
  // Напишите функцию, которая генерирует случайное целое число в заданном диапазоне.

  const randomNumber = max => {
    return num = Math.floor(Math.random() * max);
  }
  
  console.log(randomNumber(10));

  // Задача4: Подсчет суммы чисел.
  // Напишите функцию, которая принимает переменное количество аргументов (чисел) и возвращает их сумму.
  
  const sum = (...args) => {
    let sum = 0;
    for(let i=0; i < args.length; i++){
      sum += args[i];
    }
    return sum;
  }

console.log(sum(10,20,30,40));

  // Задача5: Перевод температуры из Цельсия в Фаренгейт.
  // Напишите функцию, которая принимает температуру в градусах 
  //Цельсия и возвращает ее эквивалент в градусах Фаренгейта.

  const celcToFahr = temperature => {
    return (temperature * 9/5) + 32;
  }

  console.log(celcToFahr(30));

