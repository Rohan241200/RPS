import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './index.css'

const Rules = () => (
  <div className="popup">
    <Popup
      modal
      trigger={
        <button type="button" className="rules-button">
          Rules
        </button>
      }
    >
      {close => (
        <div className="pop-up-window">
          <button
            type="button"
            aria-label="close"
            className="close-button"
            onClick={() => close()}
          >
            <RiCloseLine />
          </button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
            className="rules-image"
          />
        </div>
      )}
    </Popup>
  </div>
)

export default Rules
