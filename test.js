// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

const url = (string) => {
  let array = string.split(''); //convert the string of characters into an array
  let result = []; //have an empty array to store the characters after conversion

  while (array.length > 0) { //creating a loop
    let character = array.pop(); //will pop characters in the loop
    if (character === ' ') { //if characters are a space it will shift
      result.unshift('%20'); //return %20 in that space
    } else {
      result.unshift(character); //else just return the character
    }
  }
  return result.join(''); //then joined back together into a string 
}


// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]

// Output: [7, 9, "hi", 12, 53]

const removeDup = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let providedArray = array[i];
    let foundDup = false;
    for (let j = 0; j < result.length; j++) {
      if (providedArray === result[j]) {
        foundDup = true;
        break;
      }
    }
    if (!foundDup) {
      result.push(providedArray);
    }
  }
  return result;
}

// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"


function newString(string) {
  let result ="";
  let addition = 1;
  for(let i = 0; string.length; i++) {
    if (string[1] === string [i=1]) {
      addition++;
    } else {
      result += addition + string[1];
      addition = 1;
    }
  }
return result;
}

console.log(newString("aaabccddddde"))


// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

const uniqueCharacters = (string) => {
  let characters = {};
  for (let index = 0; index < string.length; index++) { 
    let character = string.charAt(index);
    if(characters[character]) {
      return false;
    }
    characters[character] = true;
  }
  return true
}

console.log(uniqueCharacters("hello"))

// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms — take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]