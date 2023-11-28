
  // Задача9: Проверка на палиндром
  // Условие: Напишите функцию, которая принимает строку и проверяет, является ли она палиндромом (читается одинаково в обоих направлениях).
  // Входные данные: Строка для проверки.
  // Выходные данные: Булево значение true, если строка - палиндром, и false в противном случае.
  
  // Задача10: Расчет среднего значения чисел
  // Условие: Напишите функцию, которая принимает массив чисел и возвращает среднее значение этих чисел.
  // Входные данные: Массив чисел.
  // Выходные данные: Среднее значение чисел.

  const arrayOne = [1, 2, 9, 4, 5];
  console.log(avarageInArray(arrayOne));
  function avarageInArray(array){
      let sum = 0
      for(let i = 0 ; i<arrayOne.length; i++){
        sum += arrayOne[i];
      }
      
      console.log(sum);
      return sum / arrayOne.length;
  }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Задачи на Function Expression (Функциональное выражение):
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Задача1: Перевод фунтов в килограммы
  // Условие: Напишите функцию-выражение, которая принимает вес в фунтах и возвращает его эквивалент в килограммах.
  // Входные данные: Вес в фунтах.
  // Выходные данные: Вес в килограммах.

  const weightConverter = function(weightLB){
        return weightLB / 2.205;
  }
  
  console.log(weightConverter(1));

  // Задача2: Проверка на четное количество элементов в массиве
  // Условие: Напишите функцию-выражение, которая принимает массив и проверяет, содержит ли он четное количество элементов.
  // Входные данные: Массив.
  // Выходные данные: Булево значение true, если количество элементов в массиве четное, и false в противном случае.
  

  const arrayTwo = [1, 2, 9, 4, 5, 7];

  const evenArrayLength = function(array){
    if (array.length % 2 === 0){
      return true;

    }
    else{
      return false;
    }
    
  }
  console.log(evenArrayLength(arrayTwo));

  // Задача3: Расчет суммы всех элементов массива
  // Условие: Напишите функцию-выражение, которая принимает массив чисел и возвращает их сумму.
  // Входные данные: Массив чисел.
  // Выходные данные: Сумма чисел.

  
  const arrayThree = [1, 2, 9, 4, 5];

  const arraySum = function(array){
      let sum = 0
      for(let i = 0 ; i < array.length; i++){
        sum += array[i];
      }
      
     
      return sum 
  }
  console.log(arraySum(arrayThree));

  // Задача4: Поиск минимального числа в массиве
  // Условие: Напишите функцию-выражение, которая принимает массив чисел и возвращает наименьшее число из него.
  // Входные данные: Массив чисел.
  // Выходные данные: Наименьшее число из массива.

    
  const arrayFour = [4, 2, 9, 4, 5];

  const arrayMin = function(array){
     let min = 0;
     return min = Math.min.apply(null, array);;
  }
  console.log(arrayMin(arrayFour));

  // Задача5: Проверка на наличие определенного элемента в массиве
  // Условие: Напишите функцию-выражение, которая принимает массив и элемент, и проверяет, содержится ли данный элемент в массиве.
  // Входные данные: Массив и элемент.
  // Выходные данные: Булево значение true, если элемент содержится в массиве, и false в противном случае.
  const arrayFive = [4, 2, 9, 4, 5];
  const elementOfArray = 10;

  const elementInArray = function(array, element){
    if (array.includes(element)){
      return true;
    } else{
return false;
    }
  
  }
  console.log(elementInArray(arrayFive, elementOfArray));

  
  // Задача6: Расчет суммы двух чисел
  // Условие: Напишите функцию-выражение, которая принимает два числа и возвращает их сумму.
  // Входные данные: Два числа.
  // Выходные данные: Сумма чисел.
  
const sumOfTwoNumbers = function(numberOne, numberTwo){
  return numberOne + numberTwo;
}
console.log(sumOfTwoNumbers(2,8));

  // Задача7: Проверка на положительное число
  // Условие: Напишите функцию-выражение, которая принимает число и проверяет, является ли оно положительным.
  // Входные данные: Число для проверки.
  // Выходные данные: Булево значение true, если число положительное, и false в противном случае.

  
  const possitiveNumber = function(number){
    if(number > 0){
    return true;
  } else if(number == 0){
    return alert("Number is 0 enter another number")
  }
  else{
    return false;
  }
}
  console.log(possitiveNumber(-2));

  // Задача8: Генерация случайного числа в заданном диапазоне
  // Условие: Напишите функцию-выражение, которая принимает минимальное и максимальное значения диапазона и возвращает случайное число в этом диапазоне.
  // Входные данные: Минимальное и максимальное значения диапазона.
  // Выходные данные: Случайное число в заданном диапазоне.
 
  const randomNumber = function(range){
    return Math.floor(Math.random() * range);
  }
  console.log(randomNumber(10));

  // Задача9: Проверка на четность индекса элемента массива(((( Зачем передавать массив если мы и индекс передаем???????))))
  // Условие: Напишите функцию-выражение, которая принимает массив и индекс элемента и проверяет, является ли данный индекс четным.
  // Входные данные: Массив и индекс элемента.
  // Выходные данные: Булево значение true, если индекс четный, и false в противном случае.
const ifEvenIndex = function(index){
  if(index === 0){
     return alert('This element has index of 0');
  }    
  else if(index % 2 === 0)
  {
    return true;
  }
   else
  {
    return false;
  }
}
console.log(ifEvenIndex(1));
  
  // Задача10: Расчет квадрата числа
  // Условие: Напишите функцию-выражение, которая принимает число и возвращает его квадрат.
  // Входные данные: Число для расчета квадрата.
  // Выходные данные: Квадрат числа.
const squareNumber = function(number){
  return number * number;
}
console.log(squareNumber(6));

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