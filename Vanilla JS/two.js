document.addEventListener("DOMContentLoaded",()=>{
    const form = document.querySelector("#form"); //Select form from document.
    form.addEventListener('submit', (e)=>{
        e.preventDefault(); //Prevent page refresh.
        if(form[0].value === "" || form[1].value === ""){ //Check if form has not be filled.
            alert('You must enter values for both your first name and your last name.');
        } else { //Form has been filled in properly.
            alert(`You entered ${form[0].value} for your first name and ${form[1].value} for your last name.`);
        }
    });
})