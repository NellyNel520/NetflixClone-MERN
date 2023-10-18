import React from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const List = () => {
  return (
    <div className='list'>
      <span className='listTitle'>Continue to watch</span>
      <div className='wrapper'>
        <ArrowBackIosNewOutlinedIcon 
          className='sliderArrow left'
          // onClick={() => handleClick("left")}
          // style={{display: !isMoved && "none"}}
        />
        <div className='container' ref={listRef}>

        </div>

        <ArrowForwardIosOutlinedIcon 
          className='sliderArrow right'
          // onClick={() => handleClick("right")}
        />
      </div>
    </div>
  )
}

export default List