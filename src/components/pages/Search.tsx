import { createTodo, Todo } from 'models/Todo'
import './Search.css'

interface Props {
	todos: Todo[]
	setTodos: (todos: Todo[]) => void
	newTodoText:string
	setNewTodoText:(newTodoText:string)=>void
	showAll:boolean
	setShowAll: (showAllTodos:boolean) => void

}

	export const Search=({todos, setTodos,newTodoText,setNewTodoText, showAll, setShowAll}: Props) => { 

		function handleChange(event:any){
			setNewTodoText(event.target.value)
		}
	
		function addTodo(){
			const newTodo=[...todos, createTodo(newTodoText)]
			setTodos(newTodo)
			setNewTodoText('')
		}
		const emptyInput=!newTodoText
		const buttonClassName=emptyInput? "disabledAddBtn":"EnabledAddBtn"

	return (
		<div className="search">
			<div className="search_input">
					<input type="text" value={newTodoText} onChange={handleChange} placeholder="Todo..." />
					<button type="button"  className={buttonClassName} disabled={emptyInput} onClick={e => addTodo()}>Add</button>
				</div>         
				<label htmlFor="showAll"><input type="checkbox" id="showAll" checked={showAll} onChange={e => setShowAll(!showAll)}></input>show all</label>
		</div>
	)
}


