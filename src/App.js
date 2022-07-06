import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      value: null,
    }
  }

  handleGamePlay = (index) => {
    // alert(index)
    const {squares} = this.state
    if(index === [0,1,2,3,4,5,6,7,8]){
      squares[index] = "👑"
  //     this.setState({board: board})
  //   } 
  //   else {
  //     board[index] = "🌴"
      this.setState({squares: squares})
    }
    
  }

  // function calculateWinner(squares) {
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  //   for (let i = 0; i < lines.length; i++) {
  //     const [a, b, c] = lines[i];
  //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //       return squares[a];
  //     }
  //   }
  //   return null;
  // }

  render() {
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className='gameboard' onClick={()=> this.setState({value: "X"})}>
        {this.state.squares.map((value,index) => {
          return (
            <Square 
              key = {index}
              value = {value}
              index = {index}
              // handleGamePlay = {this.handleGamePlay}
            />)
        })}
        </div>
        <footer>Created by the Cacti Crew || Nicole and Gene</footer>
      </>
    )
  }
}
export default App
