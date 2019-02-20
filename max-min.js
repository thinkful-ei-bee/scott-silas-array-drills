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

console.log(max([1,3,11,5,14,7]));
console.log(min([1,3,11,5,14,7]));