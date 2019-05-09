$(document).ready(()=>{
    $('#btn').click(()=>{
        $('p#animatePara').css('animation-name','animatePara');
        setTimeout(()=>{
            $('p#animatePara').css('animation-name','');
        },500);
    });
});