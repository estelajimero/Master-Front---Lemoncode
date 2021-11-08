console.log("********** CURRY SETTER **********");

// # Curry Setter
// En un formulario tenemos un objeto con los campos `name`, `surname` y `age` que representan un usuario. 
// Crea una función `set` que reciba un objeto con los campos de usuario, el nombre de una propiedad y su valor 
// y actualice la propiedad del objeto con el valor pasado como argumento.
// El ejercicio debe cumplir la siguiente norma: la función debe ser pura, es decir, debe crear un nuevo objeto sin modificar el existente.

const set = object => 

const julia = { name: "Julia", surname: "Álvarez", age: 19 };
const updatedJulia = set(julia, "age", 25);

console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false