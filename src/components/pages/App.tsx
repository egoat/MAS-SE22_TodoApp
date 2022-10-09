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
              				<button>add</button>
             			</div>          
            			<label htmlFor="showAll"><input type="checkbox" id="showAll"></input>show all</label>
          			</div>

					<div className="todoList">
  						<div className="todoItem">
  						    <input type="checkbox" onChange={done}></input>
  						    <span> ⚡⚡⚡ </span> 
  						    <span className="todoText">Todo TodoTodoTodoTodoTodoTodo TodoTodoTodoTodoTodo TodoTodoTodoTodoTodoTodoTodoTodoTodo fasdf asdf asdf sd f</span>
  						    <button className="deleteButton">&#x2718;</button>
  						</div>
  						<div className="todoItem">
  						    <input type="checkbox" onChange={done}></input>
  						    <span> ⚡⚡⚡ </span>
  						    <span className="todoText">Todo TodoTodoTodoTodoTodoTodo TodoTodoTodoTodoTodo TodoTodoTodoTodoTodoTodoTodoTodoTodo</span>
  						    <button className="deleteButton">&#x2718;</button>
  						</div>
					</div>
				</div>
				<div className="footer">List of Todo by Nath and Ria</div>
    		</div>
  		</div>
	)
}

function done(event:any):any {
	var checkbox = event.target;
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