import { createTodo } from 'models/Todo'
import './App.css'
import {useState} from 'react'
import {Appbar} from './Appbar'
import {Footer} from './Footer'
import {Search} from './Search'
import {TodoList} from './TodoList'
import { Todo } from 'models/Todo'

export const App = () => {
	const [todos,setTodos] = useState<Todo[]>([])
	return (
		<div className="outerContainer">
    		<div className="container">
  	  			<Appbar />
    			<div className="content">
					<Search todos={todos} setTodos={setTodos}/>
					<TodoList todos={todos} setTodos={setTodos}/>
				</div>
				<Footer />
    		</div>
  		</div>
	)
}
