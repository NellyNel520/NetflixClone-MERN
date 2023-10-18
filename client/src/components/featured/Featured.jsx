import React from 'react'
import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({type}) => {
  return (
    <div className='featured'>
       {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <img src="https://assets-prd.ignimgs.com/2021/05/25/f9-blogroll-1621977019242.jpg" alt="movie imgge"/>

     <div className='info'>
      <img src="https://www.universalpictures.com.au/tl_files/content/movies/fast9/title.png" alt="movie logo"/>
      <span className='desc'>
      Vin Diesel's Dom Toretto is leading a quiet life off the grid with Letty and his son, little Brian, but they know that danger always lurks just over their peaceful horizon. This time, that threat will force Dom to confront the sins of his past if he's going to save those he loves most.
      </span>
      <div className='buttons'>
        <button className='play'>
          <PlayArrowIcon />
          <span>Play</span>
        </button>

        <button className='more'>
          <InfoOutlinedIcon />
          <span>Info</span>
        </button>


      </div>

     </div>
    </div>
  )
}

export default Featured