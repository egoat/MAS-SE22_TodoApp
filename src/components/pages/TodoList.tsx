import './TodoList.css'
import { Todo } from 'models/Todo'
import { Fragment } from 'react'
import {Priority} from './Priority'

interface Props {
	todos: Todo[]
	setTodos: (todos: Todo[]) => void
	todoTextInput:string
	updateTodoText:(todoTextInput:string)=>void
	showAllTodos:boolean
	updateShowAllTodos: (showAllTodos:boolean) => void

}

export const TodoList = ({todos, setTodos,todoTextInput,updateTodoText, showAllTodos,updateShowAllTodos}: Props) =>{
	function deleteTodo(id:any){
		console.log(id)
		const todoRemovedList=todos.filter((todos)=> todos.id!==id)
		setTodos(todoRemovedList)
	}

	function isDone(id:any){
		const doneTodo = todos.map((item) => {
			if (item.id === id) {
			  const updatedItem = {
				...item,
				done: !item.done,
			  };
	  
			  return updatedItem;
			}
	  
			return item;
		  });
	  
		  setTodos(doneTodo)
	}

	return (
    	<div className="todoList" id="todoList">
					{
						todos.filter(showAllTodos? f=>f.text.includes(todoTextInput)||todoTextInput==='':(f=>(f.text.includes(todoTextInput)||(todoTextInput===''))&&f.done===false)).map(todos=>(
							<Fragment key={todos.id}>
								<input type="checkbox" className="checkbox" defaultChecked={todos.done} onChange={()=>isDone(todos.id)}></input>
								<Priority />
								<div style={{textDecoration: todos.done? 'line-through': 'none', opacity: todos.done? 0.7 : 1}}> {todos.text} </div>
								<button className="deleteButton" onClick={()=>deleteTodo(todos.id)} >&#x2718;</button>
							</Fragment>
						))
					}
					</div>

	)
}