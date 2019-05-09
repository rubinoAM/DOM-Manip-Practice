$(document).ready(()=>{
    setInterval(()=>{
        let randomNumber = Math.floor(Math.random() * 100).toString();
        $('#container').append(`<p>${randomNumber}</p>`);
    },3000);
});