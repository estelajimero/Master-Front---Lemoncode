console.log("************** READ BOOKS *********************");
// Opcional
interface Book {
    title: string;
    isRead: boolean;
}

type BookFunc = (books: Book[], titleToSearch: string) => boolean;

const isBookRead: BookFunc = (books, titleToSearch) => {
    let findBook = books.find(book => book.title === titleToSearch);

    return findBook?.isRead ? true : false;
}

let books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
    { title: "Memorias", isRead: true },
  ];

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));
console.log(isBookRead(books, "Pulgarcita"));
console.log(isBookRead(books, "Memorias"));