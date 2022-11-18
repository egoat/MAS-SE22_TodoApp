import './App.css'
import {useState} from 'react'
import {Appbar} from '../widgets/Appbar'
import {Footer} from '../widgets/Footer'
import {Search} from '../controls/Search'
import {TodoList} from '../widgets/TodoList'
import { Todo } from 'models/Todo'


const initialTodoes: Todo[] = [	
]

export const App = () => {
	const [todos,setTodos] = useState<Todo[]>(initialTodoes)	
	const [newTodoText,setNewTodoText]= useState('')
	const [showAll,setShowAll]= useState(true)

	return (
		<div className="outerContainer">
    		<div className="container">
  	  			<Appbar />
    			<div className="content">
					<Search todos={todos} setTodos={setTodos} newTodoText={newTodoText} setNewTodoText={setNewTodoText} showAll={showAll} setShowAll={setShowAll} />
					<TodoList todos={todos} setTodos={setTodos} newTodoText={newTodoText} showAll={showAll}/>
				</div>
				<Footer />
    		</div>
  		</div>
	)
}