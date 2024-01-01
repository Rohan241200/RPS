import './index.css'

const Header = props => {
  const {score} = props

  return (
    <div className="score-container">
      <h1 className="score-option-text">ROCK PAPER SCISSORS</h1>
      <div className="score-card">
        <p className="score-heading">Score</p>
        <p className="score-desc">{score}</p>
      </div>
    </div>
  )
}
export default Header
