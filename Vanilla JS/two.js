document.addEventListener("DOMContentLoaded",()=>{
    const form = document.querySelector("#form");
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        if(form[0].value === "" || form[1].value === ""){
            alert('You must enter values for both your first name and your last name.');
        } else {
            alert(`You entered ${form[0].value} for your first name and ${form[1].value} for your last name.`);
        }
    });
})