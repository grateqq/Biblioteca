let  myLibrary =[]

function Book (title, autor, pages, year, read) {
  this.title= title,
  this.author= autor,
  this.pages= pages,
  this.year= year,
  this.read= read,
  this.status = function() {return this.read ?"already read" : "not read yet";}
}

function addBookToLibrary (title, author, pages, year, read)  {
  const libros1 = new Book (title, author, pages, year, read);
  myLibrary.push(libros1)
}

//ejemplos

// addBookToLibrary("Harry Potter", "J. J. Rowling", 100, 1997, true)
// addBookToLibrary("The Lord of the Rings", "Tolkien",1000, 1954, true)
// addBookToLibrary("The Islan", "John Smit", 102, 1992, false)
// addBookToLibrary("Silo", "Hugh Howey", 250, 2013, false)
// document.querySelectorAll(".libro").forEach((libro) => libro.remove());
// showMyLibrary()

// funcion mostar biblioteca

//console.log(myLibrary)// libro harry, the lord... , the islan y silo.
function showMyLibrary () {
  myLibrary.forEach((value,index)=>{
    let containerlibrery = document.getElementById("container");
    let containerbook = document.createElement("div")
    containerbook.classList.add("libro")

    containerlibrery.appendChild(containerbook)
    // console.log(myLibrary.value)
    // console.log(index)
    containerbook.innerHTML = `
      <h2>${value.title}</h2>
      <p>Author: ${value.author}</p>
      <p>Pages: ${value.pages}</p>
      <p>Year: ${value.year}</p>
      <p>Read?: ${value.status()}</p>
      ` 
      // console.log(index)
  let deleteBtn = document.createElement("button")
  deleteBtn.innerText = "delete"
  deleteBtn.addEventListener("click", function(index) {
    myLibrary.splice(index,1)
    document.querySelectorAll(".libro").forEach((libro) => libro.remove());
    showMyLibrary()
  })
  // console.log(deleteBtn)
  containerbook.appendChild(deleteBtn)

  let readLabel = document.createElement("label")
  readLabel.innerText="Read?"
  readLabel.setAttribute("for", `readInput${index}`); 
  let readInput = document.createElement("input")
  readInput.type = "checkbox";
  readInput.id = `readInput${index}`
  if (value.read) {
    readInput.checked  = true;
  } else {readInput.checked  = false;}
  readInput.addEventListener("click", function (){
    
    if (value.read) {
      value.read = false
     
    }else {
      value.read = true;
     
    }

  })
  



  readLabel.appendChild(readInput)
  containerbook.appendChild(readLabel)
  
  })
}

//el boton me abra el formulario.

let addbookbtn = document.getElementById("add-book-btn")
let bookdialog = document.getElementById("book-dialog")
addbookbtn.addEventListener("click", function () {
  bookdialog.showModal()
})


//los botenes que cierran el formulario
let cancelBtn = document.getElementById("cancel-btn")
cancelBtn.addEventListener("click", function () {
  bookdialog.close();
})

//botton submit.
document.getElementById("book-form").addEventListener("submit", (event) => {
  event.preventDefault(); ;// Evita que la página se recargue

const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
const pages = document.getElementById("pages").value;
const year = document.getElementById("year").value;
const read = document.getElementById("read").checked;

// console.log(title)
// console.log(author)
// console.log(pages)
// console.log(year)
// console.log(read)

addBookToLibrary(title, author, pages, year, read)
console.log(myLibrary)
bookdialog.close()


document.querySelectorAll(".libro").forEach((libro) => libro.remove());
showMyLibrary ()





/* una vez abierto, completar el formulario, y precionar cancelar para volver a ventana anterior
subim ingresar el libro. Que sucede cuadno se preciona el boton subir.
 necesito recolectar la info del formulario.
 usar la funcion crear un objeto y añadirlo a matriz*/


bookdialog.close();

//fin boton
})

//FIN