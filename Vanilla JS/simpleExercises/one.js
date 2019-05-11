document.addEventListener('DOMContentLoaded',()=>{ //Waits until document is fully loaded to execute code.
    const button = document.querySelector("#jsStyle") //Selects element from document with id of jsStyle.
    button.addEventListener('click',()=>{//Adds click listener to button variable
        let para = document.querySelector("#text"); //Selects element with id of text
        if(para.style.fontWeight === null || para.style.fontWeight === "normal"){ //Check is fontWeight of para is set to normal or blank in case of first load.
            para.style.fontWeight = "bold";
        } else { //Check if para has already been changed.
            para.style.fontWeight = "normal";
        }
    })
});