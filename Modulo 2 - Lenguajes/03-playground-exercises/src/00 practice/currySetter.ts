console.log("********** CURRY SETTER **********");

// # Curry Setter
// En un formulario tenemos un objeto con los campos `name`, `surname` y `age` que representan un usuario. 
// Crea una función `set` que reciba un objeto con los campos de usuario, el nombre de una propiedad y su valor 
// y actualice la propiedad del objeto con el valor pasado como argumento.
// El ejercicio debe cumplir la siguiente norma: la función debe ser pura, es decir, debe crear un nuevo objeto sin modificar el existente.

interface User {
    name: string,
    surname: string,
    age: number
}

type SetFunc = (object: User, propName: string, propValue: number | string) => User;

const setBasic: SetFunc = (object, propName, propValue) => {
    let newObject = {...object};

    newObject[propName] = propValue;

    return newObject;
}

// const julia = { name: "Julia", surname: "Álvarez", age: 19 };
// const updatedJulia = setBasic(julia, "age", 25);

// console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
// console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
// console.log(julia === updatedJulia); // false


// ## Opcional

// Currifica dicha función para que permita crear funciones donde el argumento del nombre de la propiedad esté configurado previamente.
// Es decir, modifica la función `set` para poder crear `setName`, `setSurname` y `setAge` que reciban sólo el objeto y el valor y sepan qué propiedad actualizar.

const set = (propName: string) => (object: User, propValue: number | string) : User => {
    let newObject = {...object};

    newObject[propName] = propValue;

    return newObject;
}

const setName = set("name");
const setSurName = set("surname");
const setAge = set("age");

const julia = { name: "Julia", surname: "Álvarez", age: 19 };

console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurName(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }