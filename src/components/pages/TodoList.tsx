import './TodoList.css'
import { TodoItem } from './TodoItem'
import { createTodo } from 'models/Todo'
import { Todo } from 'models/Todo'

interface TodoListProps{
 todoes:Array<Todo>
}

export const TodoList = (currentTodoList:TodoListProps) =>(
    <div className="todoList" id="todoList">
						<TodoItem taskText="asdf"/>
					</div>
)

