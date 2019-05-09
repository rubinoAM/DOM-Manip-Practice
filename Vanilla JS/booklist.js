document.addEventListener('DOMContentLoaded',()=>{
    const books = [
        {
            title:"The Design of Everyday Things",
            author:"Don Norman",
            cover:'http://lorempixel.com/150/200/nature',
            alreadyRead:false
        },
        {
            title:"The Most Human Human",
            author:"Brian Christian",
            cover:'http://lorempixel.com/150/200/people',
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
        let bookCover = document.createElement('img');
        bookCover.src = books[i].cover;
        let bookItem = document.createElement('div');
        bookDetails.appendChild(bookAuthor);
        bookDetails.appendChild(alreadyRead);
        bookTitle.appendChild(bookDetails);
        bookItem.appendChild(bookTitle);
        bookItem.appendChild(bookCover);
        list.appendChild(bookItem);
    }
    document.body.appendChild(list);
})