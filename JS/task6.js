const simpleLibrary = {
    name: "My Book Shelf",
    books: [],

    addBook(title, author) {

        const newBook = {
            title: title,
            author: author,
            available: true
        }
        this.books.push(newBook);
        return "Book added sucessfully"
    },

    borrowBook(title) {
        const book = this.books.find(b => b.title === title);

        if (!book) return "Book Not Found";
        if (!book.available) return "Book already boorrowed out";

        book.available = false;
        return `You borrowed: "${title}"`

    },

    returnBook(title) {

        const book = this.books.find(b => b.title === title);
        if (!book) return "This book doesn't belong to us";
        if (book.available) return "This book was not borrowed out";

        book.available = true;
        return `Thanks for returning book with title: "${title}" back`


    },

    showAvailableBooks() {
        return this.books
            .filter(book => book.available)
            .map(book => `${book.title} by ${book.author}`)

    }

}

//add books
console.log(simpleLibrary.addBook("The Hobbit", "J.R.R Tolien"))
console.log(simpleLibrary.addBook("1984", "George Orwell"))
console.log(simpleLibrary.addBook("The Great Controversy", "Ellen G White"))

//borrow book
console.log(simpleLibrary.borrowBook("The Hobbit"));

const returendBookResult = simpleLibrary.returnBook("The Hobbit")
console.log(returendBookResult)

console.log(simpleLibrary.borrowBook("The Hobbit"))