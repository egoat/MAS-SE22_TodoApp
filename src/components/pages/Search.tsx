import './Search.css'
import {deleteTask} from './TodoItem'

export const Search=() => (
<div className="search">
<div className="search_input">
      <input type="text" id="searchInput" placeholder='Todo...'></input>
    <button className="addButton" onClick={addTask}>add</button>
 </div>          
<label htmlFor="showAll"><input type="checkbox" id="showAll"></input>show all</label>
</div>)

function addTask(event:any) {

	let newCheckbox=document.createElement('input');
	newCheckbox.setAttribute('type','checkbox');
	newCheckbox.className = 'checkbox';
	newCheckbox.onchange = done;
	
	let newPrio=document.createElement('span');
	newPrio.innerHTML = "⚡⚡⚡";
	
	let newTaskName=document.createElement('span');
	newTaskName.className = 'todoText';
	let inputValue = (document.getElementById('searchInput') as HTMLInputElement).value;
	newTaskName.innerHTML =inputValue;
	console.log(inputValue);
	
	let newDeleteBtn=document.createElement('button');
	newDeleteBtn.className = 'deleteButton';
	newDeleteBtn.innerHTML ="&#x2718";
	newDeleteBtn.onclick = deleteTask;
	
	let newTodoItem = document.createElement('div');
	newTodoItem.className = 'todoItem';
	newTodoItem.append(newCheckbox, newPrio, newTaskName, newDeleteBtn);
		
	let todoList=document.getElementById('todoList');
	console.log(todoList);
	todoList?.append(newTodoItem);
}