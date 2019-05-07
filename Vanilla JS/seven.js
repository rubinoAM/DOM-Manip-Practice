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
    for(let i=0;i<rows;i++){
        let newRow = document.createElement('tr');
        for(let j=0;j<columns;j++){
            let newCell = document.createElement('td');
            newCell.innerHTML = "[BLANK]";
            newRow.appendChild(newCell);
        }
        table.appendChild(newRow);
    }
}