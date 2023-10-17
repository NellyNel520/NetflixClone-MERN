import React, {useState, useEffect} from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

	return (
		<div className={isScrolled ? "navbar scrolled" : "navbar"}>
			<div className="container">
				<div className="left">
					<img
						alt=""
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
					/>
					<span>homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New and Popular</span>
					<span>My List</span>
				</div>
				<div className="right">
					<SearchIcon className="icon" />
					<span>KIDS</span>
					<NotificationsIcon className="icon" />
					<img
						alt=""
						src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
					/>
					<div className="profile">
						<ArrowDropDownIcon className="icon" />
						<div className="options">
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
          
				</div>
			</div>
		</div>
	)
}

export default Navbar
