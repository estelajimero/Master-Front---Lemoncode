const newArr = [1, 2, 3, 4];
const wordArr = ["queso", "chocolate", "tomate", "sal"];
const mixArr = ["Sevilla", 34, "Berlín", "45673982-D", 22];
const objectArr = [
    {
        name: "Leo",
        age: 34,
        city: "Lugo",
    }
];

const concat = (arr1, arr2) => console.log([...arr1, ...arr2]);

concat(newArr, wordArr);
concat(wordArr, newArr);

// Opcional
const concatMulti = (...arr) => arr.concat();

console.log(concatMulti(newArr, wordArr, mixArr));
console.log(concatMulti(newArr, wordArr, mixArr, objectArr));