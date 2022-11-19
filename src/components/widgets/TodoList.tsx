import './TodoList.css'
import { Todo } from 'models/Todo'
import { Fragment } from 'react'
import {Priority} from '../controls/Priority'
import { Importance } from 'models/Importance'

interface Props {
	todos: Todo[]
	setTodos: (todos: Todo[]) => void
	newTodoText:string
	showAll:boolean
}

export const TodoList = ({todos, setTodos,newTodoText,showAll}: Props) =>{
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

	function updateImportance(id:string, importance:Importance){
		const updatedeTodo = todos.map((todo) => {
			if (todo.id === id) {
			  const updatedTodo = {
				...todo,
				importance: importance,
			  };
	  
			  return updatedTodo;
			}
	  
			return todo;
		  });
	  
		  setTodos(updatedeTodo)
	}

	const inputFilteredList=todos.filter( f=>f.text.toLowerCase().includes(newTodoText.toLowerCase())||newTodoText==='');
	const filteredListPlusShowAll=	inputFilteredList.filter(showAll? f=>f.done===false||f.done===true:f=>(f.done===false));
	const filterResultEmpty=!filteredListPlusShowAll.length

	return (
		filterResultEmpty?(<div className="error" >No todos found!</div>):
    	(<div className="todoList" id="todoList">
					{						
							 (filteredListPlusShowAll.map(todo=>(
							<Fragment key={todo.id}>
								<input type="checkbox" className="checkbox" checked={todo.done} onChange={()=>isDone(todo.id)}></input>
								<Priority todo={todo} updateImportance={updateImportance}/>
								<div className={todo.done? "taskDone":"taskToBeDone"} > {todo.text} </div>
								<button className="deleteButton" onClick={()=>deleteTodo(todo.id)} >&#x2718;</button>
							</Fragment>
						))) 
					}
		</div>)
	)
}