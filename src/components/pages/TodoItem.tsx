import { Todo } from 'models/Todo';
import './TodoItem.css'
import {Priority} from './Priority'

interface Props{
    taskText: string
}

export const TodoItem =( props:Props) => (
    
    <div className='todoItem'>
							<input type="checkbox" className="checkbox" onChange={done}></input>
							<Priority /> 
							<span className="todoText">{props.taskText}</span>
							<button className="deleteButton" onClick={deleteTask}>&#x2718;</button>
						</div>
)

export function deleteTask(event:any) {
	let todoList = document.getElementById('todoList');
	let todoItem = event.target.parentNode;
	console.log(todoItem);

	todoItem.remove();	
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
