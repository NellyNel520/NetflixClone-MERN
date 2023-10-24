import React, { useState, useEffect } from 'react'
import { userRequest } from '../../authContext/requestMethods'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const ListItem = ({ index, movie, genres }) => {
	const [isHovered, setIsHovered] = useState(false)
	const [genreNames, setGenreNames] = useState([])
	const [runtime, setRuntime] = useState('')
	const [releaseDates, setReleaseDates] = useState([])
	const genreIds = movie.genre_ids
	const BASE_URL = 'https://image.tmdb.org/t/p/original'
	// console.log(movie)
	// console.log(genreIds)

	const trailer =
		'https://imdb-video.media-imdb.com/vi1054721049/1434659607842-pgv4ql-1677995691769.mp4?Expires=1697688111&Signature=oG8RbPKp9U63onyZBYu2PlxiRIZkqJ2KzoK3c4FlPEl3P2uUAEN7qLdJmjTdZNRc1bewM-a0aZ865BitQc4sdPrDw1mBJeOMJpvVXU0qcwAdFDcPBefEypGFz83LHKUJv52mXnlZsKG3HyXAwy93mu1Qs4EcgZuSj3Qx-4Ifp2QuLxDkDLtUK371V4b0GiCqk87dm9hgb93oojTrFZwXwvETJLDidEZo-MIdah0bBDg6O~wWXPInLYlir4UgOGts890s6Q6RwKQIA-Z0pjOl5sdN5lYmLpyhC3SqxdfmsAieC1KkBznZIb7GTijycIOmJUlWmPCQ8iAqIh9PEeLM7Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'

	useEffect(() => {
		const getGenreTitle = () => {
			try {
				const movieGenres = genres.filter(function (item) {
					return genreIds.indexOf(item.id) > -1
				})
				const genreTitles = movieGenres.map((s) => s.name)
				// console.log(movieGenres)
				// console.log(genreTitles.toString())
				setGenreNames(genreTitles)
			} catch (err) {
				console.log(err)
			}
		}

		const getRunTime = () => {
			axios
				.get(
					`https://api.themoviedb.org/3/movie/${movie.id}?api_key=1b3318f6cac22f830b1d690422391493&language=en-US&append_to_response=release_dates
		`
				)
				.then((response) => {
					// console.log(response.data.release_dates.results)
					setRuntime(response.data.runtime)
					setReleaseDates(response.data.release_dates.results)
				})
				.catch((error) => {
					console.log(error)
				})
		}

		getGenreTitle()
		getRunTime()
	}, [])

	const releaseDate = new Date(movie.release_date)
	const releaseYear = releaseDate.getFullYear()
	const hours = Math.floor(runtime / 60)
	const mins = runtime % 60

	const UsRating = releaseDates.filter(function (item) {
		return item.iso_3166_1 === 'US'
	})
	const rating = UsRating[0]?.release_dates[0]?.certification
	// console.log(rating)

	return (
		<div
			className="listItem"
			style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img
				src={`${BASE_URL}/${movie.backdrop_path}`}
				alt="movie cover"
			/>
			{isHovered && (
				<>
					<video src={trailer} autoPlay={true} loop />
					{/* <iframe className="video" src="https://www.youtube.com/embed/BOe8L69JpVI?autoplay=1&mute=1" title="movie title" frameborder="0" ></iframe> */}
					<div className="itemInfo">
						<h3>{movie.title}</h3>
						<div className="icons">
							<PlayArrowIcon className="icon" />
							<AddIcon className="icon" />
							<ThumbUpAltOutlinedIcon className="icon" />
							<KeyboardArrowDownOutlinedIcon className="infoIcon"/>
							
						</div>

						<div className="itemInfoTop">
							{rating ? <span className="limit">{rating}</span> : null}

							<span>
								{runtime > 60 ? `${hours}h ${mins}m` : `${runtime}m`} 
							</span>
							<span className="limit">HD</span>
						</div>

						{/* <div className="desc">
							{movie.overview.length > 150 ?
							`${movie.overview.substring(0, 150)}...` : movie.overview
							}
						</div> */}

						<div className="genre">
							{genreNames.slice(0, 4).map((name) => (
								<span className="test">{name}</span>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default ListItem
