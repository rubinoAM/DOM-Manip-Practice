document.addEventListener('DOMContentLoaded',()=>{
    const tbl = document.querySelector('#tbl');
    console.log(tbl.tBodies[0].children);
    const addRowBtn = document.querySelector('#addRow');
    addRowBtn.addEventListener('click',()=>{
        let newRow = document.createElement('tr');
        let newCellOne = document.createElement('td');
        let newCellTwo = document.createElement('td');
        newCellOne.innerHTML = ranNum();
        newCellTwo.innerHTML = ranLtr();
        newRow.appendChild(newCellOne);
        newRow.appendChild(newCellTwo);
        tbl.tBodies[0].appendChild(newRow);
    }) 
});

function ranNum(){
    return Math.floor(Math.random() * 100);
}

function ranLtr(){
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let index = Math.floor(Math.random() * 26);
    return letters[index];
}