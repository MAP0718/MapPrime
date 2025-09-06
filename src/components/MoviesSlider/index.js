// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
  }

  return (
    <Slider {...settings}>
      {moviesList.map(eachMoive => (
        <MovieItem key={eachMoive.id} movieDetails={eachMoive} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
