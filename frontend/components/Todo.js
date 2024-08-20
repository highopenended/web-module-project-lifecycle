import React from 'react'

export class Todo extends React.Component {
  constructor(){
    super()
  }
  render() {
    return(
    <p>{this.props.val}</p>
    )
  }
}

export default Todo