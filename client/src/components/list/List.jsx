import React, { useEffect, useRef, useState }  from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import ListItem from '../listItem/ListItem'
import './list.scss'
import axios from 'axios'

const List = ({list}) => {
	const [isMoved, setIsMoved] = useState(false);
	const [slideNumber, setSliderNumber] = useState(0)
	const [movies, setMovies ] = useState([])
	const listRef = useRef();

	useEffect(() => {
		axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1b3318f6cac22f830b1d690422391493&language=en-US&with_genres=${list.id}`)
		.then(response => {
			console.log(response.data.results)
			setMovies(response.data.results)
		})
		.catch(error => {
			console.log(error)
		})
	}, [list])



	const handleClick = (direction) => {
		setIsMoved(true);
		let distance = listRef.current.getBoundingClientRect().x - 50;
		if (direction === "left" && slideNumber > 0) {
			setSliderNumber(slideNumber - 1);
			listRef.current.style.transform = `translateX(${230 + distance}px)`;
		}

		if (direction === "right" && slideNumber < 5) {
			setSliderNumber(slideNumber + 1);
			listRef.current.style.transform = `translateX(${-230 + distance}px)`;
		}
	}
	return (
		<div className="list">
			<span className="listTitle">{list.name}</span>
			<div className="wrapper">
				<ArrowBackIosNewOutlinedIcon
					className="sliderArrow left"
					onClick={() => handleClick("left")}
					style={{display: !isMoved && "none"}}
				/>
				<div
					className="container"
					ref={listRef}
				>
					{/* <ListItem index={0}/>
					<ListItem index={1}/>
					<ListItem index={2}/>
					<ListItem index={3}/>
					<ListItem index={4}/>
					<ListItem index={5}/>
					<ListItem index={6}/>
					<ListItem index={7}/>
					<ListItem index={8}/> 
					<ListItem index={9}/> */}
					{movies.map((movie, i) => (
            <ListItem index={i} item={movie} />
          ))}
				
					
				</div>

				<ArrowForwardIosOutlinedIcon
					className="sliderArrow right"
					onClick={() => handleClick("right")}
				/>
			</div>
		</div>
	)
}

export default List
