function sureInchis(){
    const ceata=document.getElementById("ceata");
    const popup=document.getElementById("areyousure-popup");
    ceata.style.opacity="0";
    popup.style.scale="0";
    popup.style.pointerEvents="none";
}

export default sureInchis;