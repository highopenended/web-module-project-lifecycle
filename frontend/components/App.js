import React from 'react'
import {TodoList} from './TodoList.js'
import {Form} from './Form.js'
import axios from 'axios'

export class App extends React.Component {
  constructor(){
    super()
    this.state={
      inputValue:'',
      hideCompleted:false,
      todos:[]
    }
  }
  componentDidMount(){
    // console.log('Component Did Mount')
    this.fetchTodos()
  }
  componentDidUpdate(){
    // console.log("Component Did Update")
  }

  fetchTodos=()=>{
    return axios.get(`http://localhost:9000/api/todos`)
      .then((resp) => this.setState({...this.state,inputValue:'', todos:resp.data.data}))
      .catch((err) => console.log(err.message))
  }

  postNewTodo=(newTodo)=>{
    axios.post(`http://localhost:9000/api/todos`,newTodo)
      .then((resp)=>{
        let returnedTodo = resp.data.data
        console.log(returnedTodo)
        this.setState({...this.state, todos:[...this.state.todos,returnedTodo], inputValue:""})
      })
      .catch((err)=>{
        console.log("Error: ", err.message)
      })
  }

  inputChangeHandler = e => {
    this.setState({...this.state, inputValue:e.target.value})
  }

  submitHandler=()=>{
    this.postNewTodo({name: this.state.inputValue, completed: false})
  }

  toggleHideCompleted=()=>{
    this.setState({...this.state, hideCompleted:!this.state.hideCompleted})
  }
  
  todoClickHandler=(e, id)=>{
    e.preventDefault
    let newArr = this.state.todos.map(todo=>{
      return id===todo.id?{...todo, completed:!todo.completed}:todo
    })
    this.setState({...this.state, todos:newArr})
  }

  render() {
    return(
    <div>
      <h2>Todos:</h2>
      <TodoList
        hideCompleted={this.state.hideCompleted}
        todoClickHandler={this.todoClickHandler}
        todos={this.state.todos}
      ></TodoList>
      <br></br>
      <Form
        submitInput={this.submitInput}
        inputChangeHandler={this.inputChangeHandler}   
        submitHandler={this.submitHandler}
        toggleHideCompleted={this.toggleHideCompleted}
        hideCompleted={this.state.hideCompleted}
        inputValue={this.state.inputValue}
      ></Form>
      <br></br>
    </div>
    )
    
  }
}
export default App
