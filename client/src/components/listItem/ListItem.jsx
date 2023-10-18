import React, { useState } from 'react'
import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'

const ListItem = ({ index }) => {
	const [isHovered, setIsHovered] = useState(false)
  const trailer = "https://imdb-video.media-imdb.com/vi1054721049/1434659607842-pgv4ql-1677995691769.mp4?Expires=1697688111&Signature=oG8RbPKp9U63onyZBYu2PlxiRIZkqJ2KzoK3c4FlPEl3P2uUAEN7qLdJmjTdZNRc1bewM-a0aZ865BitQc4sdPrDw1mBJeOMJpvVXU0qcwAdFDcPBefEypGFz83LHKUJv52mXnlZsKG3HyXAwy93mu1Qs4EcgZuSj3Qx-4Ifp2QuLxDkDLtUK371V4b0GiCqk87dm9hgb93oojTrFZwXwvETJLDidEZo-MIdah0bBDg6O~wWXPInLYlir4UgOGts890s6Q6RwKQIA-Z0pjOl5sdN5lYmLpyhC3SqxdfmsAieC1KkBznZIb7GTijycIOmJUlWmPCQ8iAqIh9PEeLM7Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" 

	return (
		<div
			className="listItem"
			style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			
			<img
				src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/420015dc0d34b830e97a4e2ce0ebe843e8022272c9df79953c538bcf2ac11cd2._UY500_UX667_RI_TTW_.jpg"
				alt=""
			/>
			{isHovered && (
				<>
					<video src={trailer} autoPlay={true} loop />
					<div className="itemInfo">
						<div className="icons">
							<PlayArrowIcon className="icon" />
							<AddIcon className="icon" />
							<ThumbUpAltOutlinedIcon className="icon"  />
							<ThumbDownAltOutlinedIcon className="icon" />
						</div>

						<div className="itemInfoTop">
							<span>1 hour 51 mins</span>
							<span className="limit">+18</span>
							<span>2008</span>
						</div>

						<div className="desc">
							A process server and his marijuana dealer wind up on the run from
							hitmen and a corrupt police officer after he witnesses his
							dealer's boss murder a competitor while...
						</div>

						<div className="genre">Comedy</div>
					</div>
				</>
			)}
		</div>
	)
}

export default ListItem
