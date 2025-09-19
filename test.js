#!/usr/bin/env node
'use strict';

// Variables & constants
const PI = 3.14159;
let counter = 0;
var globalVar = "hello";

// Functions, arrow functions, default params, rest & spread
function add(a = 0, b = 0) {
    return a + b;
}

const multiply = (x, y) => x * y;

function fancyLog(...args) {
    console.log("★", ...args);
}

// Classes, static methods, getters/setters
class DemoClass {
    constructor(name, values = []) {
        this.name = name;
        this.values = values.length ? values : Array.from({length:5}, () => Math.floor(Math.random()*100));
        this.mapping = {a:1, b:2, c:3};
    }

    compute(x) {
        return (x**2 + Math.sin(x) - Math.log(x+1)) / (PI * this.values.length);
    }

    static shout(msg = "Hello World") {
        console.log(msg.toUpperCase());
    }

    get firstValue() { return this.values[0]; }
    set firstValue(val) { this.values[0] = val; }
}

// Loops & conditionals
for(let i=0; i<10; i++) {
    if(i % 2 === 0) {
        counter += i;
    } else {
        counter -= i;
    }
}

while(counter < 50) {
    counter += 3;
}

do {
    counter--;
} while(counter > 40);

// Arrays, sets, maps, destructuring, spread, rest
const nums = [1,2,3,4,5];
const squared = nums.map(n => n**2);
const letters = new Set(['a','b','c']);
const mapping = new Map([['x',10], ['y',20]]);
const [first, ...restNums] = squared;
const combined = [...nums, ...restNums];

// Template literals, regex, ternary, optional chaining
const message = `Counter is now: ${counter}, first value: ${first}`;
const matches = "The quick brown fox".match(/\b\w{3}\b/g) ?? [];
const status = (counter % 2 === 0) ? "even" : "odd";
const maybeVal = mapping.get('z') ?? "default";

// Exception handling
try {
    throw new Error("Oops something went wrong!");
} catch(e) {
    fancyLog(e.message);
} finally {
    DemoClass.shout("Finished exception test");
}

// Combining everything
fancyLog({nums, squared, letters, mapping, first, restNums, combined, matches, status, maybeVal});
