// Opcional
class Book {
    public title: string;
    public isRead: boolean;
}

const isBookRead = (books: Book[], titleToSearch: string) => {
    let findBook = books.find(book => book.title === titleToSearch);

    return findBook?.isRead ? true : false;
}

let books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));