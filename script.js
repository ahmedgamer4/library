const add = document.getElementById('add');
const pop = document.getElementById('popup');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const submit = document.getElementById('sumbmit');

var Library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false
}

function addBookToLibrary() {
    Library.push(title.value);
}

add.addEventListener('click', e => {
    pop.classList.toggle("active");
    // pop.id.add('active');
});

if (pop.className === 'active'){
    submit.addEventListener('click', e => {
        Library.push(title);
    });    
}
