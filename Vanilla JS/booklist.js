document.addEventListener('DOMContentLoaded',()=>{
    const books = [
        {
            title:"The Design of Everyday Things",
            author:"Don Norman",
            alreadyRead:false
        },
        {
            title:"The Most Human Human",
            author:"Brian Christian",
            alreadyRead:true
        }
    ];
    let list = document.createElement('ul');

    for(let i=0;i<books.length;i++){
        let bookTitle = books[i].title;
        let bookAuthor = books[i].author;
        let alreadyRead = books[i].alreadyRead;
        console.log(bookTitle,bookAuthor,alreadyRead);
    }
})