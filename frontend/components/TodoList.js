import React from 'react'
import {Todo} from './Todo.js'




export class TodoList extends React.Component {
  constructor(){
    super()
  }

  render() {
    return(
      <div>
        {
          this.props.todos.map(todo=>{
            let showToDo = !this.props.hideCompleted ? true : (todo.completed?false:true)
            return showToDo && <Todo
                key={todo.id}
                id={todo.id}
                name={todo.name}
                completed={todo.completed}
                checkToggler={this.props.checkToggler}
              ></Todo>
          })
        }
      </div>
    )
  }
}

export default TodoList
