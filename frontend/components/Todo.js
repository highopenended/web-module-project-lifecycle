import React from 'react'


export class Todo extends React.Component {
  constructor(){
    super()
  }
  render() {
    return(
      <>
        <p>{this.props.value}{this.props.isChecked && `✔️`}</p>
      </>
    )
  }
}

export default Todo