function deschisPopUp(){
    const ceata=document.getElementById("ceata");
    const popup=document.getElementById("popup");
    

    ceata.style.opacity="1";
    popup.style.scale="1";
    popup.style.pointerEvents="initial";
}

export default deschisPopUp;
