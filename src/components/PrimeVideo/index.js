// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovie = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMovie = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="amazon-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime"
        />
      </div>
      <div className="content-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovie} />
      </div>
      <div className="content-container">
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovie} />
      </div>
    </div>
  )
}

export default PrimeVideo
