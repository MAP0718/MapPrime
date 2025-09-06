// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import './index.css'
import 'reactjs-popup/dist/index.css'

import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  const styling = {
    controls: true,
    width: '540px',
    height: '320px',
  }

  return (
    <Popup
      modal
      trigger={<img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />}
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <button
            type="button"
            data-testid="closeButton"
            className="closeBtn"
            onClick={() => close()}
          >
            <IoMdClose size="26" />
          </button>
          <div className="react-player">
            <ReactPlayer url={videoUrl} {...styling} />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
