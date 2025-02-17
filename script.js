console.log("hola")
const  myLibrary =[]

function Book (name, autor, pages, year, read) {
  this.name= name,
  this.autor= autor,
  this.pages= pages,
  this.year= year,
  this.read= read
};

// const libro1 = new Libro ("The Hoobit", "RRRKing", 100, 1988, false );
// library.push(libro1)
// console.log(libro1)
// console.log(library.length)

function addBookToLibrary (name, autor, pages, year, read)  {
  const libros1 = new Book (name, autor, pages, year, read);
  // console.log(libro1)
  myLibrary.push(libros1)
}

addBookToLibrary ("The Hoobit", "RRRKing", 100, 1988, false );
addBookToLibrary ("The Hoobit", "RRRKing", 100, 1988, false );
addBookToLibrary ("The Hoobit", "RRRKing", 100, 1988, false );
addBookToLibrary ("The Hoobit", "RRRKing", 100, 1988, false );
console.log(myLibrary)


function showMyLibrary (){
  //opcion 1: for
  // for (i=1; i<myLibrary.length; i++) {
  //   console.log (myLibrary[i])
  // }
  
  //opcion 2: map
  // myLibrary.map((libro)=> console.log(libro))

  //opcion 3:firEach
  console.log("opcion 3")
  myLibrary.forEach((value)=>console.log(value))
}

showMyLibrary ()