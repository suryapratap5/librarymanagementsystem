console.log('this is es6 version of project 2')

class Book {
    constructor(bookName, author, type) {
        this.bookName = bookName;
        this.author = author;
        this.type = type
    }
}

class Display {

    add(book) {
        console.log("adding to ui")
        let tableBody = document.getElementById('tableBody');
        let uiString = `
                        <tr >
                            <td>${book.bookName}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>
        `;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset()
    }

    validate(book) {
        if (book.bookName.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show(type, showMessage) {
        let message = document.getElementById('message')
        let boldText;
        if(type === 'success'){
            boldText = 'Success';
        }else{
            boldText = 'Error'
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${boldText}!</strong> ${showMessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;

        setTimeout(() => {
            message.innerHTML = "";
        }, 2000);
    }

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
