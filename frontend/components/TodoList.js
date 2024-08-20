import React from 'react'
import {Todo} from './Todo.js'


let counter=0


export class TodoList extends React.Component {
  constructor(){
    super()
  }
  render() {
    return(
      <>
        {
          this.props.todos.map(todo=>{
            counter++
            return <Todo key={counter} value={todo} isChecked={true}></Todo>
            // return <p key={counter}>{todo}</p>
          })
        }
      </>
    )
  }
}

export default TodoList
