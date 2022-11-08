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
		const doneTodo = todos.map((todo) => {
			if (todo.id === id) {
			  const updatedTodo = {
				...todo,
				done: !todo.done,
			  };
	  
			  return updatedTodo;
			}
	  
			return todo;
		  });
	  
		  setTodos(doneTodo)
	}

	const inputFilteredList=todos.filter( f=>f.text.toLowerCase().includes(todoTextInput.toLowerCase())||todoTextInput==='');
	const filteredListPlusShowAll=	inputFilteredList.filter(showAllTodos? f=>f.done===false||f.done===true:f=>(f.done===false));

	return (
    	<div className="todoList" id="todoList">
					{
							filteredListPlusShowAll.length?  (filteredListPlusShowAll.map(todos=>(
							<Fragment key={todos.id}>
								<input type="checkbox" className="checkbox" defaultChecked={todos.done} onChange={()=>isDone(todos.id)}></input>
								<Priority />
								<div style={{textDecoration: todos.done? 'line-through': 'none', opacity: todos.done? 0.7 : 1}}> {todos.text} </div>
								<button className="deleteButton" onClick={()=>deleteTodo(todos.id)} >&#x2718;</button>
							</Fragment>
						))):  (<div className="error" >No todos found!</div>)
					}
					</div>

	)
}