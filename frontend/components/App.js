import React from 'react'
// import {Todo} from './Todo.js'
import {TodoList} from './TodoList.js'
import {Form} from './Form.js'
// import axios from 'axios'


// const URL = 'http://localhost:9000/api/todos'


// const fetchTodos=()=>{
//   return axios
//     .get(`http://localhost:9000/api/todos`)
//     .then((resp)=>{
//         return resp.data
//     })
//     .catch((err)=>console.log("nooooo"))
// }







export class App extends React.Component {
  constructor(){
    super()
    this.state={
      inputValue:'',
      todos:[]
    }
  }
  componentDidMount(){console.log('Component Did Mount')}
  // componentDidUpdate(prevProps,prevState){console.log("Component Did Update")}

  updateInput = e => {
    this.setState({...this.state, inputValue:e.target.value})
  }

  submitInput=()=>{
    let newTodo = this.state.inputValue
    let newArr = [...this.state.todos, newTodo]
    this.setState({...this.state, inputValue:'', todos:newArr})
  }
  
  toggleChecked=e=>{
    console.log(e.target)
  }

  



  render() {
    return(
    <div>
      <h2>Todos:</h2>
      <TodoList todos={this.state.todos}></TodoList>
      <Form submitInput={this.submitInput} updateInput={this.updateInput} inputValue={this.state.inputValue}></Form>
    </div>
    )
    
  }
}
export default App
