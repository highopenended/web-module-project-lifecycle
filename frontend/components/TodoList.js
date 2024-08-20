import React from 'react'
import {Todo} from './Todo.js'



const generateUniqueId = (length)=> {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
  }
  console.log("id : ",id)
  return id;
}

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
            console.log("id : ",counter)
            return <p key={counter}>{todo}</p>
            // return <p key={generateUniqueId(5)}>{todo}</p>
          })
        }
      </>
    )
  }
}

export default TodoList
