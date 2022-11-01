import './App.css'
import {Appbar} from './Appbar'
import {Footer} from './Footer'
import {Search} from './Search'
import {TodoList} from './TodoList'

export const App = () => {
	return (
		<div className="outerContainer">
    		<div className="container">
  	  			<Appbar />
    			<div className="content">
					<Search />
					<TodoList />
				</div>
				<Footer />
    		</div>
  		</div>
	)
}
