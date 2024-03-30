
//1) Do the below programs in anonymous function & IIFE
//a) Print odd numbers in an array
//Anonymous Function:

/*const odd = function(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 != 0){
            console.log(arr[i]);
        }
    }
}
arr = [1,2,3,4,5,6,7,8,9,10];
odd(arr);*/

//IIFE Function:

/*let odd = (function(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 != 0){
            console.log(arr[i]);
        }
    }
}) ([1,2,3,4,5,6,7,8,9,10]);
*/

//b) Convert all the strings to title caps in a string array
//Anonymous Function:

/*let caps = function (str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(" ");
  }

var str = "hello world";
console.log(caps(str));
*/

//IIFE Function:

/*let caps = (function (str) {
    str = str.toLowerCase().split(" ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(" ");
  })("hello world");
console.log(caps);
*/

//c) Sum of all numbers in an array
//Anonymous Fucntion:

/*let sumArr = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
    sum = sum+arr[i]; 
    } 
    return sum;
}
var arr = [1,2,3,4,5,6,7,8,9,10];
console.log(sumArr(arr));
*/

//IIFE Function:

/*
let sumArr = (function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
    sum = sum+arr[i]; 
    } 
    return sum;
})([1,2,3,4,5,6,7,8,9,10]);
console.log(sumArr);
*/

//d) Return all the prime numbers in an array
//Anonymous Function:

/*const primeNumbers = function (arr) {
    const primeNumbers = [];
    for (const num of arr) {
      if (isPrime(num)) {
        primeNumbers.push(num);
      }
    }
    return primeNumbers;
  }
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(primeNumbers(arr));
*/
  
//IIFE Function:
  
/*function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const primeNumbers = (function (arr) {
    const primeNumbers = [];
    for (const num of arr) {
      if (isPrime(num)) {
        primeNumbers.push(num);
      }
    }
    return primeNumbers;
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(primeNumbers);
*/
  
//e) Return all the palindromes in an array
//Anonymous Function:
  
/*const palindromesResult = function (arr) {
    
    const palindromes = [];
    for (const str of arr) {
      if (palindromes) {
        palindromes.push(str);
      }
    }
   return palindromes;
  }
   const arr = ["cook","kook","hello","peep","book"];
  
  console.log(palindromes);
*/
  
//IIFE Fucntion:

/*
function Palindrome(str) {
    
    const filteredStr = str.toLowerCase().replace(/\s/g, " ");
    return filteredStr === filteredStr.split('').reverse().join('');
  }
  
  const palindromesResult = (function (arr) {
    
    const palindromes = [];
    for (const str of arr) {
      if (Palindrome(str)) {
        palindromes.push(str);
      }
    }
  return palindromes;
  })(["cook","kook","hello","peep","book"]);
  
  console.log(palindromesResult);
*/
  
//f) Return median of two sorted arrays of the same size.
  
//Anonymous Function:
/* 
 const median = function (arr1, arr2) {
    
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  
    
    const middleIndex = mergedArray.length / 2;
  
    
    if (mergedArray.length % 2 === 0) {
      return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    }
  
    
    return mergedArray[middleIndex];
  }

  const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

console.log(median(arr1, arr2));
*/

//IIFE Function:

/*const median = (function (arr1, arr2) {
    
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  
    
    const middleIndex = mergedArray.length / 2;
  
    
    if (mergedArray.length % 2 === 0) {
      return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    }
  
    
    return mergedArray[middleIndex];
  })([1,2,3,4,5,10,13],[14,10,9,8,7,6,3]);

console.log(median);
*/

//1)g  Remove duplicates from an array

//Anonymous Function:

/*let DuplicateRemoval = function (arr) {
        let unique = [];
        for(i=0; i < arr.length; i++){ 
            if(unique.indexOf(arr[i]) === -1) { 
                unique.push(arr[i]); 
            } 
        }
        return unique;
    }
    let arr = [1,1,2,2,3,3,4,4,5,5];
    console.log(DuplicateRemoval(arr));
*/

//IIFE Function:
/*
let DuplicateRemoval = (function (arr) {
        let unique = [];
        for(i=0; i < arr.length; i++){
            if(unique.indexOf(arr[i]) === -1) { 
                unique.push(arr[i]); 
            } 
        }
        return unique;
    })([1,1,2,2,3,3,4,4,6,6,8,8]);
    console.log(DuplicateRemoval);
*/

//h) Rotate an array by k times

//Anonymous Function:
/*
const rotatedArray = function rotateArray(arr, k) {
    
    if (k < 0 || k >= arr.length) {
      return arr;
    }
  
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
  
    return arr;
  }
  
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotatedArray(arr, k));
*/

//IIFE Function:
/*
function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  
const rotatedArray = (function rotateArray(arr, k) {
    
    if (k < 0 || k >= arr.length) {
      return arr;
    }
  
    
    reverse(arr, 0, arr.length - 1);
  
    
    reverse(arr, 0, k - 1);
  
    
    reverse(arr, k, arr.length - 1);
  
    return arr;
  })([2,5,6,8,3],2);
console.log(rotatedArray);
*/