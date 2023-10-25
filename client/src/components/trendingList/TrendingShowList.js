import React, { useEffect, useRef, useState } from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import TrendingShow from '../trendingItem/TrendingShow'
import './trendingList.scss'
import axios from 'axios'



const TrendingShowList = () => {
  const [isMoved, setIsMoved] = useState(false)
	const [slideNumber, setSliderNumber] = useState(0)
	const [shows, setShows] = useState([])
	const listRef = useRef()

 
  useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/trending/tv/week?api_key=1b3318f6cac22f830b1d690422391493&language=en-US'
			)
			.then((response) => {
				console.log(response.data.results)
				setShows(response.data.results)
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
    <span className="listTitle">Top 10 Shows</span>
    <div className="wrapper">
      <ArrowBackIosNewOutlinedIcon
        className="sliderArrow left"
        onClick={() => handleClick('left')}
        style={{ display: !isMoved && 'none' }}
      />
      <div className="container" ref={listRef}>
        {shows.slice(0, 10).map((show, i) => (
          <TrendingShow index={i} show={show} key={show.id} />
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

export default TrendingShowList