import React, { useState, useEffect } from 'react'
import { userRequest } from '../../authContext/requestMethods'
import { Link } from 'react-router-dom'
import movieTrailer from 'movie-trailer'
import axios from 'axios'
import './trendingItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import YouTube from 'react-youtube'


const TrendingItem = ({ index, movie, genres }) => {
	const [isHovered, setIsHovered] = useState(false)
	const [genreNames, setGenreNames] = useState([])
	const [runtime, setRuntime] = useState('')
	const [modalVisible, setModalVisible] = useState(false)
	const [videoId2, setVideoId2] = useState('')
	const [releaseDates, setReleaseDates] = useState([])
	const genreIds = movie.genre_ids
	const BASE_URL = 'https://image.tmdb.org/t/p/original'

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
		// longer videos 8 min long

		// const getMovieTrailer = async () => {
		// 	await movieTrailer(null, {
		// 		id: true,
		// 		apiKey: '1b3318f6cac22f830b1d690422391493',
		// 		tmdbId: movie.id,
		// 	})
		// 		.then((response) =>
		// 			// console.log(response, 'herrrreeeee')
		// 			setVideoId(response)
		// 		)
		// 		.catch((err) => console.log(err))
		// }

		const getMovieTrailer2 = async () => {
			await movieTrailer(movie.title, {
				id: true,
				multi: true,
			})
				.then((response) =>
					// console.log(response, 'herrrreeeee')
					setVideoId2(response[3])
				)
				.catch((err) => console.log(err))
		}

		getGenreTitle()
		getRunTime()
		getMovieTrailer2()
	}, [movie, genres, genreIds])

	// const openModal = () => {
	// 	setModalVisible(true)
	// }
	// const closeModal = () => {
	// 	setModalVisible(false)
	// }

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
			className="trendingListItem"
			style={{ left: isHovered && index * 385 - 50 + index * 2.5 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{!isHovered ? (
				<div className="list-position">
					<div className="orderNumber">{index + 1}</div>
					<img
						className="poster"
						src={`${BASE_URL}/${movie.poster_path}`}
						alt="movie cover"
					/>
				</div>
			) : null}
			{isHovered && (
				<>
					{/* <Modal
						isOpen={modalVisible}
						onRequestClose={closeModal}
						contentLabel="Movie Details Modal"
					>
						<div>hello</div>
						<button onClick={closeModal()}>Close</button>
					</Modal> */}

					<YouTube
						videoId={videoId2}
						opts={{
							height: '180px',
							width: '430px',
							playerVars: { autoplay: 1, mute: 1 },
						}}
					/>
					{/* <video src={trailer} autoPlay={true} loop /> */}
					{/* <iframe className="video" src="https://www.youtube.com/embed/BOe8L69JpVI?autoplay=1&mute=1" title="movie title" frameborder="0" ></iframe> */}
					<div className="itemInfo">
						<p>{movie.title}</p>
						<div className="icons">
							<div>
								<PlayArrowIcon className="icon" />
								<AddIcon className="icon" />
								<ThumbUpAltOutlinedIcon className="icon" />
							</div>
						
								<KeyboardArrowDownOutlinedIcon className="infoIcon" />
						
						</div>

						<div className="itemInfoTop">
							{rating ? (
								<span className="limit">{rating}</span>
							) : (
								<span className="limit">NR</span>
							)}

							<span className="time">
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

export default TrendingItem
