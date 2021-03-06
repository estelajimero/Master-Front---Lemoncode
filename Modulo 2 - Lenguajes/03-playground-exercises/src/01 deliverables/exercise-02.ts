console.log("************** CONCAT *********************");
const numArr: number[] = [1, 2, 3, 4];
const wordsArr: string[] = ["queso", "chocolate", "tomate", "sal"];
const mixArr: [string, number, string, string, number] = ["Sevilla", 34, "Berlín", "45673982-D", 22];
const objectArr: object[] = [
    {
        name: "Leo",
        age: 34,
        city: "Lugo",
    }
];

type ConcatBase = <T>(arr1: T[], arr2: T[]) => T[];
type ConcatMulti = <T>(...arr: T[]) => T[]; 

const concat = (arr1, arr2) => console.log([...arr1, ...arr2]);

concat(numArr, wordsArr);
concat(wordsArr, numArr);

// Opcional
const concatMulti = (...arr) => arr;

console.log(concatMulti(numArr, wordsArr, mixArr));
console.log(concatMulti(numArr, wordsArr, mixArr, objectArr));