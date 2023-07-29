const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
        saveData();
    }
    else if (ev.target.tagName === 'SPAN'){
        ev.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();
