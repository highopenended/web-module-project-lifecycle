import React from 'react'

export class Todo extends React.Component {
  constructor(){
    super()
  }

  render() {
    return(
        <div>
          <p
            onClick={(e)=>this.props.todoClickHandler(e, this.props.id)}
            name={this.props.name}
          >{this.props.name}{this.props.completed && `✔️`}</p>
        </div>
    )
  }
}

export default Todo