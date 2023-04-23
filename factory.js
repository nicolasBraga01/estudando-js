
// Cria e organiza objetos

function createBook(title, author, pages, year){    
    const book ={
        bookTitle : title,
        bookAuthor: author,
        bookPages: pages,
        bookYear: year,
    }
    return book
    // finaliza e retornas os valores para o book
}

let book1 = createBook('Iracema','José de Alencar', 90, 1884);
let book2 = createBook('Hamlet', 'William Shakespeare', 149, 1599);