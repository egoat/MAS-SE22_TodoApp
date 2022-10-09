import './App.css'

export const App = () => {
	return (
		<div className="outerContainer">
    		<div className="container">
  	  			<div className="app-bar"><h1>Todo App</h1></div>
    			<div className="content">
					<div className="search">
            			<div className="search_input">
              				<input type="text" id="searchInput" placeholder='Todo...'></input>
							<button className="addButton" onClick={addTask}>add</button>
             			</div>          
            			<label htmlFor="showAll"><input type="checkbox" id="showAll"></input>show all</label>
          			</div>

					<div className="todoList" id="todoList">
						<div className='todoItem'>
							<input type="checkbox" className="checkbox" onChange={done}></input>
							<span> ⚡⚡⚡ </span> 
							<span className="todoText">1. Todo TodoTodoTo doTodo TodoTodo Todo TodoTodoTodoTo do Tod oTodo TodoTodo TodoT odoTo doT odo Todo fasdf asdf asdf sd f</span>
							<button className="deleteButton" onClick={deleteTask}>&#x2718;</button>
						</div>
						<div className='todoItem'>
							<input type="checkbox" className="checkbox" onChange={done}></input>
							<span> ⚡⚡⚡ </span> 
							<span className="todoText">2. Todo TodoTo doTod oTodoTod oTodo TodoT odoTodoTod oTo do TodoT odoTodoTod oTodoT odoTo doTodoTo do fasdf asdf asdf sd f</span>
							<button className="deleteButton" onClick={deleteTask}>&#x2718;</button>
						</div>
					</div>
				</div>
				<div className="footer">List of Todo by Nath and Ria</div>
    		</div>
  		</div>
	)
}

function done(event:any):any {

	let checkbox = event.target;
	console.log(checkbox);
    if (checkbox.checked) {
        checkbox.parentNode.childNodes[2].style.textDecoration = "line-through";
        checkbox.parentNode.childNodes[2].style.opacity = 0.5;
    }
    else {
        checkbox.parentNode.childNodes[2].style.textDecoration = "none";
        checkbox.parentNode.childNodes[2].style.opacity = 1;
    }
}

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

function deleteTask(event:any) {

	let todoList = document.getElementById('todoList');
	let todoItem = event.target.parentNode;
	console.log(todoItem);

	todoItem.remove();
	
}