import inchisPopUp from './inchisPopUp';
import surePopup from './surePopup';
import sureInchis from './sureInchis';
import editInchis from './inchisEdit';
import editPopup from './editPopup';

class task {
    constructor(title, description, date, priority) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }
}


var storedTasks=[];
var listaTasks=[];

storedTasks = JSON.parse(localStorage.getItem("tasks"));
listaTasks = storedTasks;

let task1= new task("Example","short thing","06/04/2024", "2");
let task2= new task("Example2","short thing","06/04/2024", "2");

storedTasks.push(task1);
storedTasks.push(task2);

storedTasks.forEach(task => {
    displayTask(task);
});




function adaugare() {
    

    const addButton = document.getElementById("pebuneadd");

    let titlu = document.getElementById("inputitle").value;
    let description = document.getElementById("inputdesc").value;
    let date = document.getElementById("inputdate").value;
    let priority = document.getElementById("inputpriority").value;
    let tasknou;
    if (validare()) {
        tasknou = new task(titlu, description, date, priority);
        listaTasks.push(tasknou);
        inchisPopUp();
    } else {
        console.log("All fields must be filled out.");
    }
    displayTask(tasknou);
    localStorage.setItem("tasks", JSON.stringify(listaTasks));
    console.log(listaTasks);

    
}

let nr=0;

const butonSort=document.getElementById("sort-priority");
function sortare(tura){
    if(tura%2==1){
        listaTasks.sort((a, b) => a.priority - b.priority)
    }
    else{
        listaTasks.sort((a, b) => b.priority - a.priority)
    }
}


butonSort.addEventListener("click",function(){
    sortare(nr);
    nr++;
    const locSloturi=document.getElementById("loc-sloturi");
    locSloturi.innerHTML='';
    listaTasks.forEach(task => {
        displayTask(task);
    });
}
);

const pencils=document.querySelectorAll('i');

document.getElementById("inchidere-task").addEventListener("click", function(){
    document.getElementById("area-title").innerText = '';
    document.getElementById("area-description").innerText = '';
    document.getElementById("area-date").innerText = '';
    document.getElementById('pselect').value = '1';
    editInchis();
});

pencils.forEach(pencil => {
    var children=pencil.parentElement.children;
    var selectElement = document.getElementById('pselect');
    
    pencil.addEventListener("click", function(){
            document.getElementById("area-title").innerText = '';
            document.getElementById("area-description").innerText = '';
            document.getElementById("area-date").innerText = '';
            document.getElementById('pselect').value = '1'
                editPopup();
                
                document.getElementById("area-title").value=children[1].textContent.split(": ").pop();
                document.getElementById("area-description").value=children[2].textContent.split(": ").pop();
                document.getElementById("area-date").value=children[3].textContent.split(": ").pop();
                console.log(children[4].textContent.split(": ").pop());
                if(children[4].textContent.split(": ").pop()=='Low'){
                    selectElement.value='1';
                }
                if(children[4].textContent.split(": ").pop()=='Medium'){
                    selectElement.value='2';
                }
                if(children[4].textContent.split(": ").pop()=='High'){
                    selectElement.value='3';
                }
                const locSloturi=document.getElementById("loc-sloturi");
                const index = Array.from(locSloturi.children).indexOf(pencil.parentElement);


                

                document.getElementById("schimbare-task").onclick= function(){
                    console.log(pencil.parentElement);
                    children[1].textContent="Title: "+document.getElementById("area-title").value;
                    children[2].textContent="Description: "+document.getElementById("area-description").value;
                    children[3].textContent="Date: "+document.getElementById("area-date").value;
                    if(selectElement.value=='1'){children[4].textContent="Priority: Low";}
                    if(selectElement.value=='2'){children[4].textContent="Priority: Medium";}
                    if(selectElement.value=='3'){children[4].textContent="Priority: High";}


                let editedTask = new task(document.getElementById("area-title").value, document.getElementById("area-description").value, document.getElementById("area-date").value, parseInt(selectElement.value));

                listaTasks.splice(index,1,editedTask);
                console.log(listaTasks);
                    localStorage.setItem("tasks", JSON.stringify(listaTasks));
                    
                    editInchis();    
        };
    });
});



function displayTask(task){
    const locAfisare=document.getElementById("aldoileachenar");
    const locSloturi=document.getElementById("loc-sloturi");
    const slot=document.createElement("div");
    //slot.setAttribute("id", `numarul-${i}`);
    slot.classList.add("slot");
    const slotTitlu=document.createElement("div");
    const slotDesc=document.createElement("div");
    const slotDate=document.createElement("div");
    const slotPriority=document.createElement("div");
    const butonstergere=document.createElement("div");
    butonstergere.innerHTML ='&times;'
    butonstergere.classList.add("stergere");
    const butonDa=document.getElementById("da");
    const butonNu=document.getElementById("nu");

    butonstergere.addEventListener("click", function(){
        surePopup();
        butonDa.addEventListener("click", function(){
            const index = Array.from(locSloturi.children).indexOf(butonstergere.parentElement);
            if (index > -1){
                butonstergere.parentElement.remove();
            listaTasks.splice(index,1);
            localStorage.setItem("tasks", JSON.stringify(listaTasks));
            }
            
            
          });
          butonNu.addEventListener("click", sureInchis);
          butonDa.addEventListener("click", sureInchis);
          
    });

    let i=document.createElement("i");
    i.classList.add('fa', 'fa-pencil');
    i.addEventListener("click", function(){
        class task {
            constructor(title, description, date, priority) {
                this.title = title;
                this.description = description;
                this.date = date;
                this.priority = priority;
            }
        }
        
        var copii=i.parentElement.children;
        var selectElement = document.getElementById('pselect');
        document.getElementById("area-title").innerText = '';
        document.getElementById("area-description").innerText = '';
        document.getElementById("area-date").innerText = '';
        document.getElementById('pselect').value = '1'
            editPopup();
            
            document.getElementById("area-title").value=copii[1].textContent.split(": ").pop();
            document.getElementById("area-description").value=copii[2].textContent.split(": ").pop();
            document.getElementById("area-date").value=copii[3].textContent.split(": ").pop();
            console.log(copii[4].textContent.split(": ").pop());
            if(copii[4].textContent.split(": ").pop()=='Low'){
                selectElement.value='1';
            }
            if(copii[4].textContent.split(": ").pop()=='Medium'){
                selectElement.value='2';
            }
            if(copii[4].textContent.split(": ").pop()=='High'){
                selectElement.value='3';
            }
            const locSloturi=document.getElementById("loc-sloturi");
            const index = Array.from(locSloturi.children).indexOf(i.parentElement);


            

            document.getElementById("schimbare-task").onclick= function(){
                console.log(i.parentElement);
                copii[1].textContent="Title: "+document.getElementById("area-title").value;
                copii[2].textContent="Description: "+document.getElementById("area-description").value;
                copii[3].textContent="Date: "+document.getElementById("area-date").value;
                if(selectElement.value=='1'){copii[4].textContent="Priority: Low";}
                if(selectElement.value=='2'){copii[4].textContent="Priority: Medium";}
                if(selectElement.value=='3'){copii[4].textContent="Priority: High";}


            let editedTask = new task(document.getElementById("area-title").value, document.getElementById("area-description").value, document.getElementById("area-date").value, parseInt(selectElement.value));
            listaTasks.splice(index,1,editedTask);
            console.log(listaTasks);
                localStorage.setItem("tasks", JSON.stringify(listaTasks));
                editInchis();    
    };
});
    slotTitlu.innerText="Title: "+task.title;
    slotDesc.innerText="Description: "+task.description;
    slotDate.innerText="Date: "+task.date;
    if(task.priority==1){
    slotPriority.innerText="Priority: Low";}
    if(task.priority==2){
        slotPriority.innerText="Priority: Medium";}
    if(task.priority==3){
    slotPriority.innerText="Priority: High";}
    

    slotTitlu.classList.add("element-slot");
    slotDesc.classList.add("element-slot");
    slotDate.classList.add("element-slot");
    slotPriority.classList.add("element-slot");
    slot.appendChild(i);

    slot.appendChild(slotTitlu);
    slot.appendChild(slotDesc);
    slot.appendChild(slotDate);
    slot.appendChild(slotPriority);
    slot.appendChild(butonstergere);
    locSloturi.appendChild(slot);
    locAfisare.appendChild(locSloturi);
    
}



function validare() {
    let titlu = document.getElementById("inputitle").value;
    let description = document.getElementById("inputdesc").value;
    let date = document.getElementById("inputdate").value;
    let priority = document.getElementById("inputpriority").value;

    if (titlu === '' || description === '' || date === '' || priority === '') {
        return false;
    } else {
        return true;
    }
}

function checkInputs() {
    const addButton = document.getElementById("pebuneadd");
    if (validare()) {
        addButton.disabled = false;
    } else {
        addButton.disabled = true;
    }
}

// Add event listeners to input fields to monitor changes
document.getElementById("inputitle").addEventListener("input", checkInputs);
document.getElementById("inputdesc").addEventListener("input", checkInputs);
document.getElementById("inputdate").addEventListener("input", checkInputs);
document.getElementById("inputpriority").addEventListener("input", checkInputs);

// Initialize the "Add" button as disabled
document.getElementById("pebuneadd").disabled = true;


export default adaugare;
