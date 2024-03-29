const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createCard(book) {
    const library = document.querySelector('.library');
    const card = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('button');
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    library.appendChild(card);
}

function displayBooks() {
    const library = document.querySelector('.library');
    // Clear all books and repopulate
    for (const card of library.children) {
        console.log('test');
        card.remove();
    }
    for (const book of myLibrary) {
        createCard(book);
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const harryPotter = new Book("Harry Potter 1", "J.K. Rowling", 700, "read");
addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
displayBooks();

// New Book button
// 1. New Book button already on screen for new library
// 2. query select button
// 3. Create modal with: title, author, pages, read button, delete button
// Make it sticky after user starts scrolling down page
// Prevent adding if title already in library
// Cancel button to close modal and clear fields

// Remove book button
// 1. Delete from array
// 2. Delete from DOM
// 3. Refresh page

// Read status
// 1. Change in array
// 2. Change on page
//   a. Change text content of button