import './index.css'

const Game = props => {
  const {eachBtn, onCheck} = props
  const {imageUrl, id, dataId} = eachBtn

  const onClickButton = () => {
    onCheck(id)
  }

  return (
    <li className="game-list">
      <button
        type="button"
        className="game-button"
        data-testid={dataId}
        onClick={onClickButton}
      >
        <img src={imageUrl} alt={id} className="game-img" />
      </button>
    </li>
  )
}

export default Game
