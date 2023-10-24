import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import TrendingMovieList from '../../components/list/TrendingMovieList'

 
const Home = ({type}) => {
  const [genres, setGenres] = useState([]);


 
  

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=1b3318f6cac22f830b1d690422391493&language=en-US')
    .then(response => {
      // console.log(response.data)
      setGenres(response.data.genres)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])



 


  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
      <TrendingMovieList genres={genres}/>
      

      {genres ? genres.map((genre) => <List genre={genre} key={genre.id} genres={genres}/>) : (null)}

      {/* <List />
      <List />
      <List />
      <List /> */}
    </div>
  )
}

export default Home