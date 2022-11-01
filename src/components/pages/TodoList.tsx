import './TodoList.css'
import { TodoItem } from './TodoItem'
import { createTodo } from 'models/Todo'
import { Todo } from 'models/Todo'

interface Props {
	todos: Todo[]
	setTodos: (todos: Todo[]) => void
}

export const TodoList = ({todos, setTodos}: Props) =>{

	const changeTodo = (todo: Todo) => {}
	const deleteTodo = (todo: Todo) => {}

	const listTodos = todos.map( (todo) => (<TodoItem {...todo}{...changeTodo}{...deleteTodo} />));

	return (
    	<div className="todoList" id="todoList">
			{listTodos}
		</div>
	)
}

// TODO
    //if (checkbox.checked) {
    //    checkbox.parentNode.childNodes[2].style.textDecoration = "line-through";
    //    checkbox.parentNode.childNodes[2].style.opacity = 0.5;
    //}
    //else {
    //    checkbox.parentNode.childNodes[2].style.textDecoration = "none";
    //    checkbox.parentNode.childNodes[2].style.opacity = 1;