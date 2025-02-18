const  myLibrary =[]

function Book (name, autor, pages, year, read) {
  this.name= name,
  this.autor= autor,
  this.pages= pages,
  this.year= year,
  this.read= read
};

function addBookToLibrary (name, autor, pages, year, read)  {
  const libros1 = new Book (name, autor, pages, year, read);
  myLibrary.push(libros1)
}

addBookToLibrary("Harry Potter", "J. J. Rowling", 100, 1997, true)
addBookToLibrary("The Lord of the Rings", "Tolkien",1000, 1954, true)
addBookToLibrary("The Islan", "John Smit", 102, 1992, false)
addBookToLibrary("Silo", "Hugh Howey", 250, 2013, false)

console.log(myLibrary)

function showMyLibrary (){



  document.getElementById("container").innerHTML = "";
  
  myLibrary.forEach((value,index)=>{

    // const contenedor = document.getElementById("container")

    // contenedor.innerHTML = '<div class"libro"><p class="name"></p><p class="autor"></p><p class="pages"></p><p class="year"></p><p class="read"></p><div>' 
    // const name = document.querySelector(".name")
    // const autor = document.querySelector(".autor")
    // const pages = document.querySelector(".pages")
    // const year = document.querySelector(".year")
    // const read = document.querySelector(".read")
    let library = document.getElementById("container")
     console.log(library)
    // name.innerHTML = myLibrary[value].name
    // autor.innerHTML = myLibrary[value].autor
    // pages.innerHTML = myLibrary[value].pages
    console.log("value: ")
    console.log(value) // pasa por cada elemento objeto dela array
    //harrypotener


    let newDiv = document.createElement("div")
    newDiv.classList.add("libro");

    let newname = document.createElement("h4")
    newname.innerHTML = myLibrary[index].name
    newDiv.appendChild(newname)

    let newautor = document.createElement("p")
    newautor .innerHTML = myLibrary[index].autor
    newDiv.appendChild(newautor)

    let newpages = document.createElement("p")
    newpages.innerHTML = myLibrary[index].pages
    newDiv.appendChild(newpages)

    let newyear = document.createElement("p")
    newyear.innerHTML = myLibrary[index].year
    newDiv.appendChild(newyear)
    
    let bookstatus
    if (myLibrary[index].read) { bookstatus = "already read"}
    else {bookstatus = "not read yet"}

    let newread = document.createElement("p")
    newread.innerHTML = bookstatus
    newDiv.appendChild(newread)
    
  
    console.log(newDiv)




     
    
    
    
    library.appendChild(newDiv)
    


})
}
showMyLibrary ()


addBookToLibrary("Yo Robot", "Issac Asimov", 400, 1950, true)
// se duplican
showMyLibrary ()
