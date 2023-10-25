import React, { useState, useEffect } from 'react'
import { userRequest } from '../../authContext/requestMethods'
import { Link } from 'react-router-dom'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'
import axios from 'axios'
import './trendingItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const TrendingShow = ({ index, show}) => {
  const [isHovered, setIsHovered] = useState(false)
	const [genreNames, setGenreNames] = useState([])
	const [showDetails, setShowDetails] = useState({})
	const [releaseDates, setReleaseDates] = useState([])
	const [videoId, setVideoId] = useState('')
	const BASE_URL = 'https://image.tmdb.org/t/p/original'

  const trailer =
  'https://imdb-video.media-imdb.com/vi1054721049/1434659607842-pgv4ql-1677995691769.mp4?Expires=1697688111&Signature=oG8RbPKp9U63onyZBYu2PlxiRIZkqJ2KzoK3c4FlPEl3P2uUAEN7qLdJmjTdZNRc1bewM-a0aZ865BitQc4sdPrDw1mBJeOMJpvVXU0qcwAdFDcPBefEypGFz83LHKUJv52mXnlZsKG3HyXAwy93mu1Qs4EcgZuSj3Qx-4Ifp2QuLxDkDLtUK371V4b0GiCqk87dm9hgb93oojTrFZwXwvETJLDidEZo-MIdah0bBDg6O~wWXPInLYlir4UgOGts890s6Q6RwKQIA-Z0pjOl5sdN5lYmLpyhC3SqxdfmsAieC1KkBznZIb7GTijycIOmJUlWmPCQ8iAqIh9PEeLM7Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'


  // const genreIds = show.genre_ids
 
  useEffect(() => {
    const getSeriesDetails = () => {
      axios.get(`	https://api.themoviedb.org/3/tv/${show.id}?api_key=1b3318f6cac22f830b1d690422391493&language=en-US&append_to_response=release_dates
      `)
      .then((response) => {
        // console.log(response.data)
        setGenreNames(response.data.genres)
        setShowDetails(response.data)
        // setRuntime(response.data.runtime)
        // setReleaseDates(response.data.release_dates.results)
      })
      .catch((error) => {
        console.log(error)
      })
    }

    const getContentRatings = () => {
      axios.get(`https://api.themoviedb.org/3/tv/${show.id}/content_ratings?api_key=1b3318f6cac22f830b1d690422391493&language=en-US&append_to_response=release_dates
      `)
      .then((response) => {
        // console.log(response.data.results)
        setReleaseDates(response.data.results)
       
        // setRuntime(response.data.runtime)
        // setReleaseDates(response.data.release_dates.results)
      })
      .catch((error) => {
        console.log(error)
      })
    }

		const getShowTrailer = async () => {
			await movieTrailer(show.name, {
				id: true,
				multi: true,
				videoType: 'tv'
			})
				.then(
					(response) => 
					// console.log(response, 'herrrreeeee')
					setVideoId(response[2])
				)
				.catch((err) => console.log(err))
		}


    getSeriesDetails()
    getContentRatings()
		getShowTrailer()
  }, [show])

  // const hours = Math.floor(show.episode_run_time[0] / 60)
	// const mins = show.episode_run_time[0] % 60
  const UsRating = releaseDates.filter(function (item) {
		return item.iso_3166_1 === 'US'
	})
	const rating = UsRating[0]?.rating
  // console.log(rating)

  return (
    <div
			className="trendingListItem"
			style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{!isHovered ? (
				
				<div className='list-position'>
					<div className='orderNumber'>{index + 1}</div>
					<img
						className="poster"
						src={`${BASE_URL}/${show.poster_path}`}
						alt="movie cover"
					/>
				</div>
				
			) : (null)}
		
			{isHovered && (
				<> 
				{/* <img
						className="hoverImage"
						src={`${BASE_URL}/${show.backdrop_path}`}
						alt="movie cover" 
					/> */}
						<YouTube
						videoId={videoId}
						opts={{
							height: '200px',
							width: '430px',
							playerVars: { autoplay: 1, mute: 1 },
						}}
					/>
					{/* <video src={trailer} autoPlay={true} loop /> */}
					{/* <iframe className="video" src="https://www.youtube.com/embed/BOe8L69JpVI?autoplay=1&mute=1" title="movie title" frameborder="0" ></iframe> */}
					<div className="itemInfo">
						<p>{show.name}</p>
						<div className="icons">
						<div>
								<PlayArrowIcon className="icon" />
								<AddIcon className="icon" />
								<ThumbUpAltOutlinedIcon className="icon" />
							</div>
							<KeyboardArrowDownOutlinedIcon className="infoIcon"/>
							
						</div>

						<div className="itemInfoTop">
							{UsRating ? <span className="limit">{rating}</span> : <span className='limit'>NR</span>} 

							<span>
              {/* if 1 season episodes.length and if more that 1 season seasons.length */}
								{showDetails.number_of_seasons > 1 ? `${showDetails.number_of_seasons} Seasons` : `${showDetails.number_of_episodes} Episodes`} 
							</span>
							<span className="limit">HD</span>
						</div>

						{/* <div className="desc">
							{movie.overview.length > 150 ?
							`${movie.overview.substring(0, 150)}...` : movie.overview
							}
						</div> */}

						<div className="genre">
							{genreNames.slice(0, 4).map((genre) => (
								<span className="test" key={genre.id}>{genre.name}</span>
							))}
						</div>
					</div>
				</>
			)}
		</div>
  )
}

export default TrendingShow