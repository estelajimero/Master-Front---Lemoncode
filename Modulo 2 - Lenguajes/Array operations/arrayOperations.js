// Head
const newArr = [1, 2, 3, 4];
const wordArr = ["queso", "chocolate", "tomate", "sal"];

const head = ([first]) => first;

console.log("--- HEAD ---");
console.log(head(newArr));
console.log(head(wordArr));

// Tail
const tail = ([_first, ...rest]) => rest;

console.log("--- TAIL ---");
console.log(tail(newArr));
console.log(tail(wordArr));

// Init
const init = arr => arr.slice(0, -1);

console.log("--- INIT ---");
console.log(init(newArr));
console.log(init(wordArr));

// Last
const last = arr => arr.slice(-1); 

console.log("--- LAST ---");
console.log(last(newArr));
console.log(last(wordArr));