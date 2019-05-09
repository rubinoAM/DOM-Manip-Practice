$(document).ready(()=>{
    $('#btn').click(()=>{
        $.getJSON(
            'https://baconipsum.com/api/?callback=?', 
            { 
                'type':'meat-and-filler',
                'start-with-lorem':'0',
                'paras':'5'
            },
            (resp)=>{
                if(resp && resp.length > 0){
                    $('p#textBody').html('');
                    for(var i=0;i<resp.length;i++){
                        $('p#textBody').append(`<p>${resp[i]}</p>`);
                    }
                    $('p#textBody').append(`<p>Delicious!</p>`);
                }
            }
        )
    })
})