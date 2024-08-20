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
          onChange={this.props.changeHandler}
          value={this.props.inputValue}
        ></input>
        <button onClick={this.props.submitHandler}>Submit</button>
      </>
    )
  }
}

export default Form