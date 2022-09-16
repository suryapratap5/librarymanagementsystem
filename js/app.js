console.log("This is library app")

// Contructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display contructor
function Display() {

}

// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("adding to ui")
    let tableBody = document.getElementById('tableBody');
    let uiString = `
                    <tr >
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>
    `;
    tableBody.innerHTML += uiString;
}

// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset()
}

// Implementing the validate function
Display.prototype.validate = function (book){
    if(book.name.length < 2 || book.author.length < 2){
        return false;
    }
    else{
        return true;
    }
}

// Implement the show message function

Display.prototype.show = function(type, showMessage){
    let message = document.getElementById('message')
    message.innerHTML =    `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message!</strong> ${showMessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;

  setTimeout(() => {
    message.innerHTML = "";
  }, 2000);
}


// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    
    let bookName = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    console.log(type)
    
    let book = new Book(bookName, author, type);
    let display = new Display();
    
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added');
    }else{
        display.show('danger', 'Sorry you cannot add this book. ')
    }
    e.preventDefault();
    
}

