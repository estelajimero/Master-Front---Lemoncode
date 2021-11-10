console.log("********** FLATTEN ARRAY **********");

// # Aplanando arrays

// ## Apartado A

// Dado un array multidimensional, construye una función inmutable que devuelva el mismo array aplanado, esto es, con un único nivel de profundidad. Por ejemplo, el siguiente array:

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const flattenArr = <T> (arr: T[], depth: number) => arr.flat(depth);

console.log(flattenArr(sample, 5));


// quedaría aplanado como:

// ```js
// [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ```

// ## Apartado B

// ¿Has resuelto el ejercicio anterior? Suponiendo que los arrays multidimensionales del ejercicio anterior no serán de naturaleza mixta, 
// es decir, sus elementos siempre serán del mismo tipo ¿Serías capaz de proporcionar un tipado adecuado a dicha función de aplanamiento?