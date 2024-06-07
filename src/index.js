import './style.css';
import deschisPopUp from './popup';
import inchisPopUp from './inchisPopUp';
import adaugare from './addTask';
import sortare from './sortare';

const plus=document.getElementById("addbtn");
plus.addEventListener('click',deschisPopUp);

const inchis=document.getElementById("btnics");
inchis.addEventListener('click', inchisPopUp);

const addButton=document.getElementById("pebuneadd");
addButton.addEventListener("click", function(event){
    event.preventDefault()
});

addButton.addEventListener("click", adaugare);

