document.addEventListener('DOMContentLoaded',()=>{
    const form = document.querySelector('#createTblForm');
    const table = document.querySelector('#myTable');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        makeTable(table,form[0].value,form[1].value);
    })
})

function makeTable(table,rows,columns){
    while(table.lastChild){ table.removeChild(table.lastChild); } //Resets table
    table.border = 4;
    let newRows = [];
    let newCells = [];
    for(let i=0;i<columns;i++){
        newCells.push(document.createElement('td'));
        newCells[i].innerHTML = "[Blank]";
    }
    for(let j=0;j<rows;j++){
        newRows.push(document.createElement('tr'));
    }
    for(let k=0;k<newRows.length;k++){
        for(let l=0;l<newCells.length;l++){
            console.log(k,newCells[l]);
            newRows[k].appendChild(newCells[l]);
            console.dir(newRows[k]);
        }
    }
    console.log(newRows);
    for(let m=0;m<newRows.length;m++){
        table.appendChild(newRows[m]);
    }
    console.dir(table);
}