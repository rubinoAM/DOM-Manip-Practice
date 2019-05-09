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
        let bookTitle = document.createElement('li');
        bookTitle.innerHTML = books[i].title;
        let bookDetails = document.createElement('ul');
        let bookAuthor = document.createElement('li');
        bookAuthor.innerHTML = books[i].author;
        let alreadyRead = document.createElement('li');
        alreadyRead.innerHTML = books[i].alreadyRead;
        //console.log(bookTitle,bookAuthor,alreadyRead);

        let bookItem = document.createElement('p');
        bookDetails.appendChild(bookAuthor);
        bookDetails.appendChild(alreadyRead);
        bookTitle.appendChild(bookDetails);
        bookItem.appendChild(bookTitle);
        list.appendChild(bookItem);
    }

    document.body.appendChild(list);
})