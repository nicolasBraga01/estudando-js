

function CreateBook(title, author, pages, year){    
       this.bookTitle = title;
        this.bookAuthor = author;
        this.bookPages = pages;
        this.bookYear = year;
}

let book1 = new CreateBook('Iracema','José de Alencar', 90, 1884);
console.log(book1)




 /*diferente da factory não preciso declarar váriavel ,
 por convenção começa com letra maiúscula , atributo this(esta)
 e começa com new na hora de chamar
 */
 