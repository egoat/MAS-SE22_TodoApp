import { createTodo, Todo } from 'models/Todo'
import './Search.css'

interface Props {
	todos: Todo[]
	setTodos: (todos: Todo[]) => void
	todoTextInput:string
	updateTodoText:(todoTextInput:string)=>void
	showAllTodos:boolean
	updateShowAllTodos: (showAllTodos:boolean) => void

}

// TODO: "blub" durch Text aus Form ersetzten
// TODO: uuid korrekt setzten, so dass jedes Element eine eindeutige ID hat.

	export const Search=({todos, setTodos,todoTextInput,updateTodoText, showAllTodos,updateShowAllTodos}: Props) => { 

		function handleChange(event:any){
			updateTodoText(event.target.value)
		}
	
		function addTodo(){
			const newTodo=[...todos, createTodo(todoTextInput)]
			setTodos(newTodo)
			updateTodoText('')
		}
		function showAll(event:any){
			updateShowAllTodos(!showAllTodos)
		}

	return (
		<div className="search">
			<div className="search_input">
					<input type="text" value={todoTextInput} onChange={handleChange} />
					<button type="button" onClick={e => addTodo()}>Add</button>
				</div>         
				<label htmlFor="showAll"><input type="checkbox" id="showAll" defaultChecked={showAllTodos} onChange={showAll}></input>show all</label>
		</div>
	)
}


