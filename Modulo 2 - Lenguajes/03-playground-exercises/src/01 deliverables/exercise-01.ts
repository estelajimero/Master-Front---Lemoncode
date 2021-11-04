// @ts-check

console.log("************** ARRAY METHODS *********************");
// Head
const newArr: number[] = [1, 2, 3, 4];
const wordArr: string[] = ["queso", "chocolate", "tomate", "sal"];

const head = ([first]: any[]) : any[] => first;

console.log("--- HEAD ---");
console.log(head(newArr));
console.log(head(wordArr));

// Tail
const tail = ([_first, ...rest]: any[]) : any[] => rest;

console.log("--- TAIL ---");
console.log(tail(newArr));
console.log(tail(wordArr));

// Init
const init = (arr: any[]) : any[] => arr.slice(0, -1);

console.log("--- INIT ---");
console.log(init(newArr));
console.log(init(wordArr));

// Last
const last = (arr: any[]) : any[] => arr.slice(-1); 

console.log("--- LAST ---");
console.log(last(newArr));
console.log(last(wordArr));