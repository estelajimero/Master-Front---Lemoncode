console.log("********** MEMOIZATION **********");

// ## Apartado A

// Implementa un mecanismo de _memoización_ para funciones costosas y tipalo con TypeScript. La memoización optimiza sucesivas llamadas del siguiente modo:

const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
}

type Memoization = (func: Function) => Function;
type Args = (args: string | number | boolean) => Function;

const memoize: Memoization = (func) => {
    let result: any;

    return () => result ? result : result = func();

    // return (...args) => {
    //     const argsKey = JSON.stringify(args);

    //     if (!result[argsKey]) {
    //         result[argsKey] = func(...args);
    //     }

    //     return results[argsKey];
    // }
}

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

// **NOTA**: Puedes suponer que las funciones que van a ser memoizadas no llevan argumentos y tampoco devuelven valores `null` o `undefined`.

// ## Apartado B

// Contempla ahora la posibilidad de que la función a memoizar pueda tener argumentos. 
// Por simplicidad supongamos sólo argumentos primitivos: `string`, `number` o `boolean` y que no sean `undefined`. 
// ¿Podrías hacer una versión aceptando argumentos? ¿Cómo la tiparías con TS? Un ejemplo de comportamiento podría ser:

let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string =>
  (count++, `${text} `.repeat(repetitions).trim())

  const memoizeArgs: Memoization = (func) => {
    let result: object = {};

    return (...args: Args[]) => {
        const argsKey = JSON.stringify(args);

        if (!result[argsKey]) {
            result[argsKey] = func(...args);
        }

        return result[argsKey];
    }
}


const memoizedGreet = memoizeArgs(repeatText);

console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(count);                     // 2