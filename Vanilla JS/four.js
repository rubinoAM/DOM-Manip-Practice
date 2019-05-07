document.addEventListener('DOMContentLoaded',()=>{
    let aTagValues = document.querySelector('#aTagValues');
    aTagValues.style.display = "none";
    fillValues();
    const button = document.querySelector('#btn');
    button.innerHTML = `Click here to get the values of the attribute tag below.`;
    button.addEventListener("click",()=>{
        if(aTagValues.style.display === "none"){
            aTagValues.style.display = "block";
            button.innerHTML = `Click here to hide the values of the attribute tag below.`;
        } else {
            aTagValues.style.display = "none";
            button.innerHTML = `Click here to get the values of the attribute tag below.`;
        }
    });
});

function fillValues(){ //Grabs values from #aTag and fills li items with information.
    const aTag = document.querySelector('#aTag');
    document.querySelector("#aId").innerHTML = `ID: #${aTag.id}`;;
    document.querySelector("#aType").innerHTML = `Type: ${aTag.type}`;;
    document.querySelector("#aHrefLang").innerHTML = `Href-Lang: ${aTag.hreflang}`;;
    document.querySelector("#aRel").innerHTML = `Rel: ${aTag.rel}`;;
    document.querySelector("#aTarget").innerHTML = `Target: ${aTag.target}`;;
    document.querySelector("#aHref").innerHTML = `Href: ${aTag.href}`;;
}