import React from 'react'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <img
						alt=""
            width="100%"
						src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
					/>
    </div>
  )
}

export default Home