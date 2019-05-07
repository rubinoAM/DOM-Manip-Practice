document.addEventListener('DOMContentLoaded',()=>{
    const para = document.querySelector("#text");
    const button = document.querySelector("#button");
    button.addEventListener('click',()=>{
        console.log(para.style.backgroundColor);
        if(para.style.backgroundColor === "" || para.style.backgroundColor === "rgb(255, 255, 255)"){ //Check if bgColor is white or defaulted to blank
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            if(red*0.299 + green*0.587 + blue*0.114 < 186){
                para.style.color = "rgb(255, 255, 255)";
            }
            para.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        } else { //Return bgColor to white
            para.style.backgroundColor = "rgb(255, 255, 255)";
            para.style.color = "rgb(0, 0, 0)";
        }
    })
})