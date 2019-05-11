document.addEventListener("DOMContentLoaded",()=>{
    const form = document.getElementById('sphereVolume');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let radius = document.getElementsByName('radius')[0].value;
        let volume = (4/3) * Math.PI * Math.pow(radius,3);
        document.getElementsByName('volume')[0].value = volume.toFixed(4);
    })
})