import { Todo } from 'models/Todo';
import './TodoItem.css'
import {Priority} from './Priority'

export const TodoItem =( todo:Todo, changeTodo:any, deleteTodo:any) => {
	return (
		<div className='todoItem'>
			<input type="checkbox" className="checkbox" onChange={changeTodo(todo)}></input>
			<Priority /> 
			<span className="todoText">{todo.text}</span>
			<button className="deleteButton" onClick={deleteTodo(todo)}>&#x2718;</button>
		</div>
	)
}