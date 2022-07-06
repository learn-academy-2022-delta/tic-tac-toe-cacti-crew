import React, { Component } from 'react'

class Square extends Component {
  handleClick = (index) =>{
    // alert (this.props.index)
    this.props.xPlayer(this.props.index)
  }
  render() {
    return(
      <>
        <div className="square" onClick={this.handleClick}></div>
      </>
    )
  }
}
export default Square
