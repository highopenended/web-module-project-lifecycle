import React from 'react'

export class Form extends React.Component {
  constructor(){
    super()
  }
  render() {
    return(
      <>
        <input placeholder="Enter Task"></input>
        <button>Submit</button>
      </>
    )
  }
}

export default Form