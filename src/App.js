import {Component} from 'react'
import Header from './components/Header'
import Game from './components/Game'
import Rules from './components/Rules'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    dataId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    dataId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    dataId: 'paperButton',
  },
]

class App extends Component {
  state = {score: 0, playGame: true, your: {}}

  onCheck = id => {
    const filter = choicesList.filter(each => each.id === id)
    this.setState({playGame: false, your: filter})
  }

  playAgain = () => {
    this.setState({playGame: true})
  }

  gameResult = () => {
    const {your} = this.state
    const yourSelected = your[0]
    const random = Math.floor(Math.random() * choicesList.length)
    const randomChoice = choicesList[random]

    let result = null

    if (yourSelected.id === randomChoice.id) {
      result = 'IT IS DRAW'
    } else if (
      (yourSelected.id === 'ROCK' && randomChoice.id === 'SCISSORS') ||
      (yourSelected.id === 'PAPER' && randomChoice.id === 'ROCK') ||
      (yourSelected.id === 'SCISSORS' && randomChoice.id === 'PAPER')
    ) {
      result = 'YOU WON'
    } else {
      result = 'YOU LOSE'
    }

    return (
      <div className="game-result-check-card">
        <div className="game-result-container">
          <div className="your-choice-card">
            <h1 className="game-result-heading">YOU</h1>
            <img
              src={yourSelected.imageUrl}
              alt="your choice"
              className="game-result-img"
            />
          </div>
          <div className="your-choice-card">
            <h1 className="game-result-heading">OPPONENT</h1>
            <img
              src={randomChoice.imageUrl}
              alt="opponent choice"
              className="game-result-img"
            />
          </div>
        </div>
        <div>
          <p className="result-status">{result}</p>
          <button
            type="button"
            onClick={this.playAgain}
            className="play-again-button"
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {score, playGame} = this.state
    return (
      <div className="bg-container">
        <div className="bg-card">
          <Header score={score} />
          {playGame ? (
            <ul className="game-container">
              {choicesList.map(each => (
                <Game key={each.id} eachBtn={each} onCheck={this.onCheck} />
              ))}
            </ul>
          ) : (
            this.gameResult()
          )}
        </div>
        <Rules />
      </div>
    )
  }
}

export default App
