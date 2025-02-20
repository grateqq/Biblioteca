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
addBookToLibrary("Harry Potter", "J. J. Rowling", 100, 1997, true)
addBookToLibrary("The Lord of the Rings", "Tolkien",1000, 1954, true)
addBookToLibrary("The Islan", "John Smit", 102, 1992, false)
addBookToLibrary("Silo", "Hugh Howey", 250, 2013, false)

// funcion mostar biblioteca

console.log(myLibrary)// libro harry, the lord... , the islan y silo.
function showMyLibrary () {
  myLibrary.forEach((value)=>{
    let containerlibrery = document.getElementById("container");
    let containerbook = document.createElement("div")
    containerbook.classList.add("libro")

    containerlibrery.appendChild(containerbook)
   
    containerbook.innerHTML = `
      <h2>${value.title}</h2>
      <p>Author: ${value.author}</p>
      <p>Pages: ${value.pages}</p>
      <p>Year: ${value.year}</p>
      <p>Read?: ${value.status()}</p>
    `;
    console.log(containerlibrery)
  })
}
showMyLibrary ()

console.log(myLibrary[0])

//FIN