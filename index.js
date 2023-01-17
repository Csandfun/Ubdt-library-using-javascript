console.log("This is index.js");
// 
// constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor
function Display() {

}

// add methods to display prototypes
Display.prototype.add = function (book) {
    console.log('Adding to ui');
    tableBody = document.getElementById('tableBody');
    let uiString = ` <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
        </tr>`;
    tableBody.innerHTML += uiString;
}

Display.prototype.Clear = function (book) {
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();
}

Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, displaymessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message:</strong> ${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
  setTimeout(()=>{
    message.innerHTML= '';
  },2000);

}


// add submit event listener to libraryform
let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log("you have submitted library form");


    let name = document.getElementById('BookName').value;
    let author = document.getElementById('Author').value;

    let Fiction = document.getElementById('Fiction');
    let Programming = document.getElementById('Programming');
    let unix = document.getElementById('unix');
    let type;


    if (Fiction.checked) {
        type = Fiction.value;
    }
    else if (Programming.checked) {
        type = Programming.value;
    }
    else if (unix.checked) {
        type = unix.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.Clear();
        display.show('success', 'your book is succsessfully added');
    }
    else {
        // show error to the
        display.show('Danger', 'sorry you cannot add this book.');

    }

}