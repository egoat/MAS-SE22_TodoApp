import './App.css'
import {useState} from 'react'
import {Appbar} from './Appbar'
import {Footer} from './Footer'
import {Search} from './Search'
import {TodoList} from './TodoList'
import { Todo } from 'models/Todo'


const initialTodoes: Todo[] = [	
]

export const App = () => {
	const [todos,setTodos] = useState<Todo[]>(initialTodoes)	
	const [todoTextInput,updateTodoText]= useState('')
	const [showAllTodos,updateShowAllTodos]= useState(true)

	return (
		<div className="outerContainer">
    		<div className="container">
  	  			<Appbar />
    			<div className="content">
					<Search todos={todos} setTodos={setTodos} todoTextInput={todoTextInput} updateTodoText={updateTodoText} showAllTodos={showAllTodos} updateShowAllTodos={updateShowAllTodos} />
					<TodoList todos={todos} setTodos={setTodos} todoTextInput={todoTextInput} updateTodoText={updateTodoText} showAllTodos={showAllTodos} updateShowAllTodos={updateShowAllTodos}/>
				</div>
				<Footer />
    		</div>
  		</div>
	)
}