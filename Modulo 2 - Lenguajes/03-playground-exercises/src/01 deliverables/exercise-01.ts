// @ts-check

console.log("************** ARRAY METHODS *********************");

type ArrayFunction = <T> (arr: T[]) => T | T[];

// Head
const newArr: number[] = [1, 2, 3, 4];
const wordArr: string[] = ["queso", "chocolate", "tomate", "sal"];

const head: ArrayFunction = ([first]) => first;

console.log("--- HEAD ---");
console.log(head(newArr));
console.log(head(wordArr));

// Tail
const tail: ArrayFunction = ([first, ...rest]) => rest;

console.log("--- TAIL ---");
console.log(tail(newArr));
console.log(tail(wordArr));

// Init
const init: ArrayFunction = (arr) => arr.slice(0, -1);

console.log("--- INIT ---");
console.log(init(newArr));
console.log(init(wordArr));

// Last
const last: ArrayFunction = (arr) => arr.slice(-1); 

console.log("--- LAST ---");
console.log(last(newArr));
console.log(last(wordArr));