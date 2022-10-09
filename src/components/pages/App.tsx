import './App.css'

export const App = () => {
  return (
    <div className="outerContainer">
    <div className="container">
  	  <div className="app-bar"><h1>Todo App</h1></div>
    <div className="content">
          <div className="search">
            <div className="search_input">
              <input type="text" value="Todo..."></input>
              <button className="addButton" /*onClick={addTask}*/>add</button>
             </div>          
            <label htmlFor="showAll"><input type="checkbox" id="showAll"></input>show all</label>
          </div>

          <div className="grid">
            <input type="checkbox" /*</div>onchange={done(this)}*/></input>
            <span> ⚡⚡⚡ </span> 
            <span className="todoText">Todo Todo</span>
            <button className="deleteButton">&#x2718;</button>
          </div>   
</div>
<div className="footer">List of Todo by Nath and Ria</div>
    </div>
  </div>
)
} 

/*function done(checkbox) {
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
  var inputValue=(document.getElementsByClassName('taskInput')[0] as HTMLInputElement).value;
  console.log(inputValue);
  newTaskName.innerHTML =inputValue;
  
  var newDeleteBtn=document.createElement('button');
  newDeleteBtn.setAttribute('class','deleteButton')
  newDeleteBtn.innerHTML ="&#x2718";    
  
  var newPrio=document.createElement('span');
  newPrio.innerHTML = "⚡⚡⚡"

  tableEle[0].append(newCheckbox,newPrio,newTaskName,newDeleteBtn);
};*/
