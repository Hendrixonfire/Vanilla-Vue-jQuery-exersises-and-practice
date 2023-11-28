//console.log(getRandomElement(array));

  // Задача 1: Напишите функцию removeDuplicates, 
  //           которая принимает массив и возвращает новый массив, из которого удалены все повторяющиеся элементы.
  let unique = [];
  const removeDuplicates = array => {
    return unique = [...new Set(array)];

  }
  //console.log(removeDuplicates(array));


  // Задача 2: Напишите функцию getEvenNumbers, 
  //           которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

const arraySeven = [100, 201, 102, 301, 400, 302];
let evenArr = [];

const evenNumberArray = array => {
  for(let i = 0; i <= array.length; i++){
   if (array[i] % 2 == 0){
    evenArr.push(array[i]); 
   } 

}
return evenArr;
}
//console.log(evenNumberArray(arraySeven));

// Задача 3: Напишите функцию mergeArrays, 
 //           которая принимает два отсортированных массива чисел и возвращает новый отсортированный массив, 
//            содержащий все элементы из обоих массивов.
const arr1 = [1, 3, 5, 7];

const arr2 = [2, 4, 6, 8, 9];

let arr3 = [];

const  mergeArrays = (arr1, arr2, arr3) => {
  let i = 0, j = 0, k = 0;
   
  // traverse the arr1 and insert its element in arr3
  while (i < arr1.length) {
      arr3[k++] = arr1[i++];
  }

  // now traverse arr2 and insert in arr3
  while (j < arr2.length) {
      arr3[k++] = arr2[j++];
  }

  // sort the whole array arr3
  return arr3.sort();
}

//console.table(mergeArrays(arr1, arr2, arr3));


 // Задача 4: Напишите функцию countVowels, 
 //           которая принимает строку и возвращает количество гласных букв в этой строке. 
 //           Гласными считаются буквы a, e, i, o, u (независимо от регистра).

 const vowels = ['a', 'e' , 'o' ,'i', 'u']
 function getVowelCount(str){
     let vowelCount = 0;
     for (let char of str.toLowerCase()){
         if(vowels.includes(char)){
             vowelCount++;
         }
     }
  return vowelCount;
 }
 //console.log(getVowelCount('BrOther'));
  // Задача 5: Напишите функцию multiplyArray, 
 //           которая принимает массив чисел и число n, и возвращает новый массив, 
 //           в котором все элементы исходного массива умножены на n.

 const arrayTen= [1,5,6];
 const num = 3;
 const multiplyArray = (array, n) => {
 let newArray = array.map(function(x){ return x * n});
 return newArray;
  }

//console.log(multiplyArray(arrayTen, num));

// Задача 6: Напишите функцию findLongestWord, 
//           которая принимает массив строк и возвращает самое длинное слово из этого массива.


const findLongestWord = array => {
  let longestWord = array.sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
}
//console.log(findLongestWord(['word', 'wordtwo', 'wordthree', 'wordfive', 'wordsix', 'wordsevenh']));

// Задача 7: Напишите функцию shuffleArray,
//           которая принимает массив и возвращает новый массив, 
//           содержащий все элементы исходного массива в случайном порядке.
const shuffledArray = [];
const shuffleArray = array => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    shuffledArray[i] = array[j];
    array[j] = temp;
  }
  return shuffledArray;
}

//console.log(shuffleArray([1,2,12,5,8]));

// Задача 8: Напишите функцию isAnagram, которая принимает две строки и возвращает true, 
//           если они являются анаграммами (имеют одинаковые буквы в разном порядке), 
//           и false в противном случае.

const isAnagram = (str1, str2) => {
let lengthOne = str1.length;
let lengthTwo = str2.length;
if(lengthOne !== lengthTwo){
  console.log('Invalid string input(different lengths)');
  return
}
let string1 = str1.split('').sort().join('');
  let string2 = str2.split('').sort().join('');
  if(string1 === string2){
    return true;
  } else { 
   return false;
  }
}

//console.log(isAnagram("gamer","gaerm"));

// Задача 9: Напишите функцию findMissingNumber, 
//           которая принимает массив чисел от 1 до n (включительно), 
//           содержащий все числа от 1 до n, кроме одного, и возвращает это пропущенное число.

const missingNumber = nums => {
  for(let i = 1; i <= nums.length; i++) {
      if(!nums.includes(i)){
        return i;
      } 
    }
}



//console.log(missingNumber([1,2,3,5,6]));

// Задача 10: Напишите функцию removeFalsyValues, 
//            которая принимает массив и возвращает новый массив, 
//            из которого удалены все ложные значения (false, null, 0, "", undefined и NaN).

const removeFalsyValues = array => {
  return result = array.filter(Boolean);
}

//console.log(removeFalsyValues([23,'number', false, null, 100, 0, "", NaN, undefined]))

// Задача 11: Напишите функцию calculateFactorial, 
//            которая принимает число n 
//            и возвращает факториал этого числа (произведение всех целых чисел от 1 до n).

const calculateFactorial = number => {
  let result = number;
  if (number ===0 || number === 1){
    return 1;
  }
while(number > 1){
  number--;
  result *= number;
}
return result;
}
//console.log(calculateFactorial(5));

// Задача 12: Напишите функцию findSecondLargest, 
//            которая принимает массив чисел и возвращает второе по величине число из этого массива.

const findSecondLargest = array => {
  array.sort();
  for (i = array.length - 2; i >= 0; i--) {
    // if the element is not
    // equal to largest element
    if (array[i] != array[array.length - 1]) {
     
        return array[i];
    }
} 


console.log("There is no second largest element");
}

//console.log(findSecondLargest([12,12,12,12,11]));

function isPalindrome(str) { 
  return str === str.split('').reverse().join('')
}

console.log(isPalindrome('kaza'));