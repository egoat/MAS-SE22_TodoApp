function done(checkbox) {
    if (checkbox.checked) {
        checkbox.parentNode.childNodes[5].style.textDecoration = "line-through";
        checkbox.parentNode.childNodes[5].style.opacity = 0.5;
    }
    else {
        checkbox.parentNode.childNodes[5].style.textDecoration = "none";
        checkbox.parentNode.childNodes[5].style.opacity = 1;
    }
}

function addTask()    {
    let tableEle=document.getElementsByClassName('table');
    console.log(tableEle);
    
    var newCheckbox=document.createElement('input');
    newCheckbox.setAttribute('type','checkbox');
    
    var newTaskName=document.createElement('span');
    newTaskName.setAttribute('class','todoText');
    var inputValue=document.getElementsByClassName('taskInput')[0].value;
    newTaskName.innerHTML =inputValue;
    
    var newDeleteBtn=document.createElement('button');
    newDeleteBtn.setAttribute('class','deleteButton')
    newDeleteBtn.innerHTML ="&#x2718";    
    
    var newPrio=document.createElement('span');
    newPrio.innerHTML = "⚡⚡⚡"

    tableEle[0].append(newCheckbox,newPrio,newTaskName,newDeleteBtn);
};