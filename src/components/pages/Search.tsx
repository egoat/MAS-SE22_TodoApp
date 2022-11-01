import { createTodo, Todo } from 'models/Todo'
import './Search.css'

interface Props {
	todos: Todo[]
	setTodos: (todos: Todo[]) => void
}

// TODO: "blub" durch Text aus Form ersetzten
// TODO: uuid korrekt setzten, so dass jedes Element eine eindeutige ID hat.
export const Search=({todos, setTodos}: Props) => {

	return (
		<div className="search">
			<div className="search_input">
				<input type="text" id="searchInput" placeholder='Todo...'></input>
				<button className="addButton" onClick={e => setTodos([...todos,createTodo("blub")])}>add</button>
			</div>          
			<label htmlFor="showAll"><input type="checkbox" id="showAll"></input>show all</label>
		</div>
	)
}