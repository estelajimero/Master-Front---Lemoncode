console.log("********** FLATTEN ARRAY **********");

// # Aplanando arrays

// ## Apartado A

// Dado un array multidimensional, construye una función inmutable que devuelva el mismo array aplanado, esto es, con un único nivel de profundidad. Por ejemplo, el siguiente array:

type MultiArr<T> = (T | MultiArr<T>)[];

const sample: MultiArr <number> = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
const sampleString: MultiArr <string> = ["Hola", "Hi", ["Hallo", "Ciao", ["Привет", "γεια σας", ["Kaixo"]]]];

const flattenArr = <T>(arr: MultiArr<T>, depth: number): T[] => arr.flat(depth);

// const flattenArr2 = <T>(arr: MultiArr<T>) : T[]=> {
//     return arr.reduce((acc: any[], elem: MultiArr<T>) => 
//         Array.isArray(elem) 
//         ? acc.concat(flattenArr2(elem)) 
//         : acc.concat(elem)
//     , [])
// }

console.log(flattenArr(sample, 5));
console.log(flattenArr(sampleString, 4));
// console.log(flattenArr2(sample));
// console.log(flattenArr2(sampleString));


// quedaría aplanado como:

// ```js
// [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ```

// ## Apartado B

// ¿Has resuelto el ejercicio anterior? Suponiendo que los arrays multidimensionales del ejercicio anterior no serán de naturaleza mixta, 
// es decir, sus elementos siempre serán del mismo tipo ¿Serías capaz de proporcionar un tipado adecuado a dicha función de aplanamiento?
