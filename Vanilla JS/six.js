document.addEventListener('DOMContentLoaded',()=>{
    let letters = ['A','B']; //Letters for making unique id's
    const table = document.querySelector('#tbl'); //Grab table element
    const cellsSelect = document.querySelector('#cells'); //Grab select from form
    const form = document.querySelector('#tblForm'); //Grab form
    for(let i=1;i<table.tBodies[0].children.length;i++){
        for(let j=0;j<table.tBodies[0].children[i].children.length;j++){ //Generate a select option for each td element
            table.tBodies[0].children[i].children[j].id = `${i}${letters[j]}`;
            let option = document.createElement('option');
            option.innerHTML = table.tBodies[0].children[i].children[j].id;
            option.value = table.tBodies[0].children[i].children[j].id;
            cellsSelect.appendChild(option);
        }
    }
    let cellDefault = document.getElementById(`${form[0].value}`);
    form[1].value = cellDefault.innerHTML; //Defaults text input value to value of first cell
    cellsSelect.addEventListener('change',()=>{ //Changes text input value to value of chosen cell
        let cellChoice = document.getElementById(`${form[0].value}`);
        form[1].value = cellChoice.innerHTML;
    })
    const changeBtn = document.querySelector('#changeBtn');
    changeBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        let chosenId = form[0].value; //Option
        let newValue = form[1].value; //Text Input
        if(newValue === ""){ //Safety check for empty text input
            alert('You must enter a new value for the cell selected.');
        } else{
            let selectedCell = document.getElementById(`${chosenId}`);
            selectedCell.innerHTML = newValue;
        }
    })
})