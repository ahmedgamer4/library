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

Book.prototype.toggleRead = function() {
    this.isread = this.isread ? false : true
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
let library = new Library();

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
        // const reset = inputs.forEach(e => {
        //     e.value = '';
        // });
    }
    else {
        pop.classList.remove('active');
        const reset = inputs.forEach(e => {
           e.value = '';
        });
    }
    display();
}

const display = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => bottomMain.removeChild(card));

    for (let i = 0; i < library.books.length; i++) {
        // bottomMain.removeChild(bottomMain.firstchild)
        createCard(library.books[i]);
    }
}

const createCard = (item) => {
    // const bookIndex = library.books.length - 1;
    // const newestBook = library.books[bookIndex];
    

    const card = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const buttonGroup = document.createElement('div');
    const read = document.createElement('button');
    const remove = document.createElement('button');

    read.onclick = item.isread = this.isread ? false : true;

    card.classList.add('card');
    buttonGroup.classList.add('button-group');
    remove.classList.add('btn');
    remove.textContent = 'remove';
    title.textContent = `"${item.title}"`;
    author.textContent = item.author;
    pages.textContent = item.pages;

    if (item.isread === true) {
        read.textContent = "read";
        read.className = 'btn-green';
    }
    else {
        read.textContent = 'Not read';
        read.className = 'btn-red';
    }

    remove.onclick = e => {
        library.books.splice(library.books.indexOf(item), 1);
        // display();
        card.remove();
    }

    read.onclick = () => {
        item.isread = ! item.isread;
        if (item.isread === true) {
            read.textContent = "read";
            read.className = 'btn-green';
        }
        else {
            read.textContent = 'Not read';
            read.className = 'btn-red';
        }
    }
    
    // card.setAttribute('data', bookIndex);
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

// const remove = function() {
    
// }


add.addEventListener('click', e => {
    pop.classList.toggle("active");
    // pop.id.add('active');
});

form.onsubmit = addBook;


// submit.onclick =  pop.classList.remove('active');
// let book = getBook()

