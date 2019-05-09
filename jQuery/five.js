$(document).ready(()=>{
    $('#btn').click(()=>{
        let addition = Math.floor(Math.random()*100).toString();
        $('p').append(addition);
    })
})