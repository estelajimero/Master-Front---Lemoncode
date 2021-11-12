console.log("********** TREE **********");

// # Árbol

// ¿Cómo generarías con TypeScript un tipado para estructuras en forma de árbol?

// Un árbol es una estructura que parte de un nodo raiz, a partir del cual salen más nodos. 
// Cada nodo en un árbol puede tener hijos (más nodos) o no tenerlos (convirtiendose en un nodo final o una "hoja").

interface ProductTreeNode <T> {
    id?: number,
    name: string,
    product?: ProductTreeNode <T> [],
}

const productTree: ProductTreeNode<string> = {
    id: 765,
    name: "Lácteos",
    product: [
        {
            id: 765-21,
            name: "Queso fresco",
        },
        {
            id: 765-22,
            name: "Yogures",
            product: [
                {
                    id: 765-220,
                    name: "Yogur griego natural",
                },
                {
                    id: 765-221,
                    name: "Yogures de soja (pack)",
                },
            ]
        },
        {
            id: 765-23,
            name: "Leche",
            product: [
                {
                    id: 765-230,
                    name: "Leche entera",
                },
                {
                    id: 765-231,
                    name: "Leche de avena",
                }
            ],
        }
    ],
}  


console.log(JSON.stringify(productTree));
console.log(productTree);

