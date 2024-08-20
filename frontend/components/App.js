import React from 'react'
import {Todo} from './Todo.js'
import {TodoList} from './TodoList.js'
import {Form} from './Form.js'
import axios from 'axios'


// const URL = 'http://localhost:9000/api/todos'


const fetchTodos=()=>{
  return axios
    .get(`http://localhost:9000/api/todos`)
    .then((resp)=>{
        return resp.data
    })
    .catch((err)=>console.log("nooooo"))
}





export class App extends React.Component {
  constructor(){
    super()
    this.state={
      name:'',
      todos:[1,2,3]
    }
  }
  componentDidMount(){
    console.log('Component Did Mount')
  }

  componentDidUpdate(prevProps,prevState){
    console.log("Component Did Update")
    let newArr =fetchTodos()
    this.setState(name='hi')
  }

  render() {
    return(
    <div>
      <h2>Todos:</h2>
      <TodoList todos={this.state.todos}></TodoList>
      <Form></Form>
    </div>
    )
    
  }
}
export default App
