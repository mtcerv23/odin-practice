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
    const card = document.createElement('div');
    card.classList.add('card');
    const title = document.createElement('h1');
    const author = document.createElement('h2');
    const pages = document.createElement('h3');
    const read = document.createElement('button');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;
    deleteButton.textContent = 'Delete';
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(deleteButton);
    return card;
}

function displayBooks() {
    // Clear all books and populate with updated library
    const library = document.querySelector('.library');
    library.innerHTML = '';
    for (const book of myLibrary) {
        const card = createCard(book);
        library.appendChild(card);
    }
    const cards = library.querySelectorAll('.card');
    let i = 0;
    cards.forEach((card) => {
        card.dataset.index = i;
        const deleteButton = card.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            console.log(myLibrary);
            myLibrary.splice(i, 1);
        });
    });
}

const dialog = document.querySelector(".add-modal");
const newBook = document.querySelector('.new-book');
const closeDialog = document.querySelector('.cancel');
const addBook = document.querySelector('.add-book');

newBook.addEventListener('click', () => {
    dialog.showModal();
});

closeDialog.addEventListener('click', () => {
    // Clear input fields before closing
    const inputs = dialog.querySelectorAll('input');

    for (const input of inputs) {
        input.value = '';
    }

    document.querySelector('#read').checked = false;

    dialog.close();
});

addBook.addEventListener('click', () => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;
    let readStatus = '';
    if (read == true) {readStatus = "read"} else {readStatus = "not read yet"};
    const book = new Book(title, author, pages, readStatus);

    // Add if fields are not blank and book not already in library
    if (bookInLibrary(book)) {
        alert('No duplicates!');
        return;
    }
    if (book.title == '' || book.author =='' || book.pages =='') {
        alert('no blanks!');
    }
    else addBookToLibrary(book);
    displayBooks();
})

function bookInLibrary(newBook) {
    for (const book of myLibrary) {
        if (book.title === newBook.title) return true;
    } return false;
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const harryPotter = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 700, "read");
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