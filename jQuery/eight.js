$(document).ready(()=>{
    $('p:first-of-type').click(()=>{
        $('p#result').html('Click!');
    });

    $('p:first-of-type').dblclick(()=>{
        $('p#result').html('Double Click!');
    });
})