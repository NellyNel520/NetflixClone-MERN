import './App.scss'
import Home from './pages/home/Home'
import Watch from './pages/watch/Watch'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import { Routes, Route, Redirect } from 'react-router-dom'

function App() {
	return (
		<Routes>
			<Route path="/" exact element={<Home />} />
      <Route path="/movies" element={<Home  type="movies"/>} />
      <Route path="/series" element={<Home  type="series"/>} />
      <Route path="/watch" element={<Watch />} />
		</Routes>
	)
}

export default App
