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

repeat(hello, 5);
repeat(goodbye, 5);
