console.log("************** CLONE / MERGE *********************");
// Clone
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const clone = (source: object) : object => {
    let result = {};

    for (let prop in source) {
        result[prop] = source[prop];
    }

    return result;
}

console.log(clone(a));

// Merge
const merge = (source: object, target: object) : object => {
    let result = clone(target);

    for (let prop in source) {
        result[prop] = source[prop];
    }

    return result;
}

console.log(merge(a, b));
