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
    deleteButton.addEventListener('click', () => {
        myLibrary.splice(card.dataset.index, 1);
        deleteButton.parentElement.remove();
        displayBooks();
        });
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;
    read.addEventListener('click', () => {
        let readStatus = book.read;
        if (readStatus == 'not read yet') {
            book.read = 'read';
            readStatus = 'read';
        }
        else {
            book.read = 'not read yet';
            readStatus = 'not read yet';
        }
        read.textContent = readStatus;
    })
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
    for (let i = 0; i < myLibrary.length; i++) {
        const card = createCard(myLibrary[i]);
        card.dataset.index = i;
        library.appendChild(card);
    }
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

displayBooks();