 import React, { useEffect, useRef, useState } from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import TrendingItem from '../trendingItem/TrendingItem'
import './trendingList.scss'
import axios from 'axios'

const TrendingMovieList = ({genres}) => {
  const [isMoved, setIsMoved] = useState(false)
	const [slideNumber, setSliderNumber] = useState(0)
	const [movies, setMovies] = useState([])
	const listRef = useRef()

  useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/trending/movie/week?api_key=1b3318f6cac22f830b1d690422391493&language=en-US'
			)
			.then((response) => {
				console.log(response.data.results)
				setMovies(response.data.results)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])



	const handleClick = (direction) => {
		setIsMoved(true)
		let distance = listRef.current.getBoundingClientRect().x - 50
		if (direction === 'left' && slideNumber > 0) {
			setSliderNumber(slideNumber - 1)
			listRef.current.style.transform = `translateX(${230 + distance}px)`
		}

		if (direction === 'right' && slideNumber < 5) {
			setSliderNumber(slideNumber + 1)
			listRef.current.style.transform = `translateX(${-230 + distance}px)`
		}
	}

 
  return (
    <div className="trendingList">
    <span className="listTitle">Top 10 Movies</span>
    <div className="wrapper">
      <ArrowBackIosNewOutlinedIcon
        className="sliderArrow left"
        onClick={() => handleClick('left')}
        style={{ display: !isMoved && 'none' }}
      />
      <div className="container" ref={listRef}>
        {movies.slice(0, 10).map((movie, i) => (
          <TrendingItem index={i} movie={movie} key={movie.id} genres={genres} />
        ))}
      </div>

      <ArrowForwardIosOutlinedIcon
        className="sliderArrow right"
        onClick={() => handleClick('right')}
      />
    </div>
  </div>
  )
}

export default TrendingMovieList