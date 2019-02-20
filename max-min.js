'use strict';

function max(numbers) {
  if (typeof numbers !== 'object') {
    return undefined;
  }
  let max = numbers[0];
  let i = 1;
  while (i < numbers.length) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
    i++;
  }
  return max;
}

function min(numbers) {
  if (typeof numbers !== 'object') {
    return undefined;
  }
  let min = numbers[0];
  let i = 1;
  while (i < numbers.length) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    i++;
  }
  return min;
}

function average(arr) {
  let total = 0;
  arr.forEach(function(element) {
    total += element;
  });
  return total / arr.length;
}

function repeat(fn, n) {
  for (let i=0; i < n; i++) {
    fn();
  }    
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

function filter(arr, fn) {
  // TASK: Define your function here
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])){
      newArray.push(arr[i]);
    }
  } return newArray;
}
//console.log(filter(['Rich', 'Joe', 'Bhaumik', 'Ray'], (name) => name[0] === 'R'));

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  let times = '';
  return function(location) {
    warningCounter++;
    if (warningCounter === 1) {
      times = 'time';
    } else if (warningCounter === 0 || warningCounter >= 2) {
      times = 'times';
    }
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${times} today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const hailWarning = hazardWarningCreator('Hail on the Road');
const iceWarning = hazardWarningCreator('Ice on the Road');
/*
rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
hailWarning('Main St and Pacific Ave');
hailWarning('Centinela Ave and Olympic Blvd');
iceWarning('Main St and Pacific Ave');
iceWarning('Centinela Ave and Olympic Blvd');
*/

function turtle(arr) {
  let newArray = arr.filter((num) => num[0] >= 0 && num[1] >= 0);
  let mapArray = newArray.map((coord) => coord[0] + coord[1]);
  //mapArray.forEach((x) => console.log(x));
}

function decodeWords(words) {
  let initialValue = '';
  const arrWords = words.split(' ');
  const reducer = (accumulator, currentValue) => {
    if (currentValue.length === 3) {
      accumulator += ' ';
    } else {
      accumulator += currentValue[currentValue.length - 1].toUpperCase();
    } 
    return accumulator;
  }; 
  return arrWords.reduce(reducer, '');
}

//console.log(decodeWords('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));
