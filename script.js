const add = document.getElementById('add');
const pop = document.getElementById('popup');
const bottomMain = document.querySelector('.bottom');
const submit = document.getElementById('sumbmit');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('.input');


function Book(title, author, pages, isread) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
}

function Library() {
    this.books = [];
}

Library.prototype.removeBook = function(title) {
    this.books = this.books.filter(book => book.title == title);
}

Library.prototype.getBook = function(title) {
    return this.books.find(book => book.title === title);
}

Library.prototype.inLibrary = function(newBook) {
    return this.books.some(book => book.title === newBook.title)
}

Library.prototype.addBook = function(newBook) {
    if (!this.inLibrary(newBook)) {
        this.books.push(newBook)
    }
}

// const addBookToLibrary = book => {
//     Library.push(book)
// }
let library = new Library()

const getBook = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isread = document.getElementById('isread').checked;
    return new Book(title, author, pages, isread);
}

// let book = getBook()
const addBook = e => {
    e.preventDefault()
    const newBook = getBook();

    if (!library.inLibrary(newBook)) {
        library.addBook(newBook);
        pop.classList.remove('active');
        const reset = inputs.forEach(e => {
            e.value = '';
        });
    }
    display(newBook);
}

const display = (book) => {
    let card = document.createElement('div');
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let buttonGroup = document.createElement('div');
    let read = document.createElement('button');
    let remove = document.createElement('button');

    read.onclick = toggleRead(book);

    card.classList.add('card');
    buttonGroup.classList.add('button-group');
    remove.classList.add('btn');
    remove.textContent = 'remove';
    title.textContent = `"${book.title}"`;
    author.textContent = book.author;
    pages.textContent = book.pages;

    if (book.isread === true) {
        read.textContent = "read";
        read.className = 'btn-green';
    }
    else {
        read.textContent = 'Not read';
        read.className = 'btn-red';
    }


    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    buttonGroup.appendChild(read);
    buttonGroup.appendChild(remove);
    card.appendChild(buttonGroup);
    bottomMain.appendChild(card);
} 

const toggleRead = book => {
    if (book.isread === true) {
        book.isread = false;
    }
    else {
        book.isread = true;
    }
}


add.addEventListener('click', e => {
    pop.classList.toggle("active");
    // pop.id.add('active');
});

form.onsubmit = addBook;

// submit.onclick =  pop.classList.remove('active');
// let book = getBook()

