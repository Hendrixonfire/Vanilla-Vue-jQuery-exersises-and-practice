
//0. переписать задачу с палиндромом на функцию. arg --> string, return boolean

function polindrom(userInput){
console.log(userInput.length);
console.log(userInput.length / 2);
for(i=0;i < userInput.length / 2; i++){
    if (userInput[i] !== userInput[(userInput.length - 1 - i)]){
        return false;

    } else {
        return true;
    }
}
}

console.log(polindrom('kazak'));
// 1. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

const userPromptTwo = prompt('Enter the number from 1 to 7:');
let userNumberTwo = Number(userPromptTwo);
console.log(dayOfTheWeek(userNumberTwo));


function dayOfTheWeek(userNumberTwo){
switch(userNumberTwo){
    case 1:
        return('Sunday');
     
    case 2:
        return('Monday');
       
    case 3:
        return('Tuesday');
       
    case 4:5
        return('Wendsday');
       
    case 5:
        return('Thursday');
          
    case 6:
        return('Friday');
       
    case 7:
        return('Saturday');
       
    default:
        return('Only 7 days in a week(enter numbers from 1-7');
        
}
}

//1
const userName = prompt('Enter your name:');
greetings(userName);
function greetings(userName){
    return alert(`Greetings ${userName}`);
}

//2
console.log(squareFunction(2,4));
function squareFunction(aSide,bSide){
    return aSide * bSide;

} 

//3
console.log(evenNumber(3));
function evenNumber(num){
   if (num % 2 == 0){
    return true;
   } 
   else 
   {
     return false;
   }
}
//4
console.log(sumOfNumberRange(1,5));
function sumOfNumberRange(numOne,numTwo){
   let totalSum = 0;
 if (numOne >= numTwo)
 {
    for (i = numTwo; i <= numOne; i++)
     {
        totalSum += i;
     }
}
 else 
 {
    for (i = numOne; i <= numTwo; i++) 
    {
    totalSum += i;
    }
}
 return totalSum;
} 
//5
const arrayOne = [1, 2, 9, 4, 5];
console.log(maxInArray(arrayOne));
function maxInArray(array){
    const maxNumber = Math.max.apply(null, array);
    console.log(maxNumber);
    return maxNumber;
}
//6
const number = parseInt(prompt("Enter a positive number:"));
let isPrime = true;
function primeNumber(num){
    if (num === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    
    // check if number is greater than 1
    else if (num > 1) {
    
        // looping through 2 to number-1
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
               return 
            }
        }
    
     if(isPrime){
        return alert(`${num} is Prime`);
     }l
        } else {
            return alert(`${num} is not Prime`);
        }
    }
    console.log(primeNumber(number));
    
//7
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
console.log(getVowelCount('Brother'));
//8

function factOfNumber(numberOne){
   let total = 1;

    for (i = 2; i <= numberOne; i++)
     {
        total *= i;
     }
     return total;
    }

console.log(factOfNumber(5));

