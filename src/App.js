import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      value: null,
      index: ,
    }
  }

  xPlayer = (index) => {

    
  //   const {squares} = this.state.squares
  //   if(index === index){
  //     squares[index] = "𝕏"
  //     this.setState({squares: squares})
  // } else {
  //   return "🧿"
  // }
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
        <div className='gameboard'>
        {this.state.squares.map((value,index) => {
          return (
            <Square 
              key = {index}
              value = {value}
              index = {index}
              xPlayer = {this.xPlayer}
            />)
        })}
        </div>
        <footer>Created by the Cacti Crew || Nicole and Gene</footer>
      </>
    )
  }
}
export default App
