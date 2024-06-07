import adaugare from './addTask';

function afisare(){
    const locAfisare=document.getElementById("aldoileachenar");
    const slot=document.createElement("div");
    slot.classList.add("slot");
    const slotTitlu=document.createElement("div");
    const slotDesc=document.createElement("div");
    const slotDate=document.createElement("div");
    const slotPriority=document.createElement("div");
    slotTitlu.classList.add("element-slot");
    slotDesc.classList.add("element-slot");
    slotDate.classList.add("element-slot");
    slotPriority.classList.add("element-slot");
    slot.appendChild(slotTitlu);
    slot.appendChild(slotDesc);
    slot.appendChild(slotDate);
    slot.appendChild(slotPriority);
    locAfisare.appendChild(slot);
}
