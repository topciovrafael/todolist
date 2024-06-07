function inchisPopUp(){
    const ceata=document.getElementById("ceata");
    const popup=document.getElementById("popup");
    ceata.style.opacity="0";
    popup.style.scale="0";
    popup.style.pointerEvents="none";
}

export default inchisPopUp;