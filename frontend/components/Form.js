import React from 'react'

export class Form extends React.Component {
  constructor(){
    super()
  }
  
  render() {
    return(
      <>
        <input 
          placeholder="Enter Task"
          onChange={this.props.inputChangeHandler}
          value={this.props.inputValue}
        ></input>
        <button onClick={this.props.submitHandler}>Submit</button>
        <br></br>
        <button onClick={this.props.toggleHideCompleted}>{this.props.hideCompleted ?  "Show Completed" : "Hide Completed"}</button>
      </>
    )
  }
}

export default Form