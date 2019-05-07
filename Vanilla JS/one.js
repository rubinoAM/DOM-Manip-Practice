document.addEventListener('DOMContentLoaded',()=>{
    const button = document.querySelector("#jsStyle")
    button.addEventListener('click',()=>{
        let para = document.querySelector("#text");
        if(para.style.fontWeight === null || para.style.fontWeight === "normal"){
            para.style.fontWeight = "bold";
        } else {
            para.style.fontWeight = "normal";
        }
    })
});