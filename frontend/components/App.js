import React from 'react'
import {TodoList} from './TodoList.js'
import {Form} from './Form.js'
import axios from 'axios'


// const URL = 'http://localhost:9000/api/todos'





let idCounter=0





export class App extends React.Component {
  constructor(){
    super()
    this.state={
      inputValue:'',
      hideCompleted:false,
      todos:[]
    }
  }

  fetchTodos=()=>{
    return axios.get(`http://localhost:9000/api/todos`)
      .then((resp)=>{
        return resp.data
      })
      .catch((err)=>console.log(err.message))
  }

  updateAllTodos(){
    this.fetchTodos()
    .then((resp)=>{
      // console.log(resp.data)
      this.setState({...this.state,inputValue:'', todos:resp.data})
      return resp.data
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }

  


  componentDidMount(){
    console.log('Component Did Mount')
    this.updateAllTodos()
  }

  componentDidUpdate(prevProps,prevState){
    console.log("Component Did Update")
  }

  changeHandler = e => {
    this.setState({...this.state, inputValue:e.target.value})
  }

  submitHandler=()=>{

    // let newTodo ={id:this.generateId(), name: this.state.inputValue, completed: false}
    let newTodo ={name: this.state.inputValue, completed: false}

    axios.post(`http://localhost:9000/api/todos`,newTodo)
    .then((resp)=>{
      this.updateAllTodos
      // console.log(resp.data.data)
      

    })
    .catch((err)=>console.log(err.message))


    
  }
  







  generateId=()=>{
    idCounter++
    return idCounter
  }

  toggleHideCompleted=()=>{
    this.setState({...this.state, hideCompleted:!this.state.hideCompleted})
    console.log("Hidden: ", this.state.hideCompleted)
  }




  checkToggler=(e, id)=>{
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
        checkToggler={this.checkToggler}
        todos={this.state.todos}
      ></TodoList>
      <br></br>
      <Form
        submitInput={this.submitInput}
        changeHandler={this.changeHandler}   
        submitHandler={this.submitHandler}
        inputValue={this.state.inputValue}
      ></Form>
      <br></br>
      <button onClick={this.toggleHideCompleted}>{this.state.hideCompleted ?  "Show Completed" : "Hide Completed"} </button>
    </div>
    )
    
  }
}
export default App
