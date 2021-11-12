console.log("********** DEEP ACCESS **********");

// # Acceso en profundidad

// ## Apartado A

// Implementa un mecanismo `deepGet` para acceder en profundidad a objetos anidados, de modo que podamos recuperar una propiedad en cualquiera de sus niveles. 
// Mira a continuación el comportamiento que debería seguir:

const myObject: object = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      }
    }
  }
};

const deepGet = (obj: object, ...props: string[]) : any => {
    let result: any = obj;
    
    if (props.length === 0) return obj;
    
    result = props.reduce((element, key) => {
        return (element && element[key] !== undefined) ? element[key] : undefined;
    }, obj);

    return result;
}

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));  // {a: 1, b: {...}}

// ## Apartado B

// Ahora implementa el complementario, `deepSet`, que permita guardar valores en profundidad. Su comportamiento debería ser:

/* por cada propiedad
si es la ultima propiedad seteo el valor
si no es la última tengo que seguir adentrándome. Si el valor actual de la propiedad no es objeto, crearlo
establece el foco en el último objeto */

console.log("---- Deep Set ----");

const myObject2: object = {};

const deepSet = (value: number, obj: object, ...setters: string[]) => {
  if (!setters.length) return;

  const [first, ...rest] = setters;

  if (!rest.length) {
    obj[first] = value;
    return;
  }

  if (typeof obj[first] !== "object") {
    obj[first] = {};
  }

  return deepSet(value, obj[first], ...rest);
};

// const deepSet = (value, obj, ...props) => {
//   let target = obj;
  
//   for (let i = 0; i < props.length; i++) {
//     const prop = props[i];

//     if (i === props.length - 1) {
//       target[prop] = value;
//     } else {
//       if (typeof target[prop] !== 'object') target[prop] = {}
//       target = target[prop]
//     }
//   }
// };

deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2));  // {a: { b: 1}}
deepSet(2, myObject2, "a", "c");
console.log(JSON.stringify(myObject2));  // {a: { b: 1, c: 2}}
deepSet(3, myObject2, "a");
console.log(JSON.stringify(myObject2));  // {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2));  // Do nothing // {a: 3}