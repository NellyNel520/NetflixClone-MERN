import './App.scss'
import Home from './pages/home/Home'
import Watch from './pages/watch/Watch'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";


function App() {
	// const user = false
	const { user } = useContext(AuthContext);


	let navigate = useNavigate()

	return (
		<Routes>
			<Route
				path="/"
				exact
				element={user ? <Home /> : <Navigate to={'/signup'} />}
			/>
			<Route
				path="/signup"
				exact
				element={!user ? <Signup /> : <Navigate to={'/'} />}
			/>
			<Route
				path="/login"
				exact
				element={!user ? <Login /> : <Navigate to={'/'} />}
			/>

			{user && (
				<>
					<Route path="/movies" element={<Home type="movies" />} />
					<Route path="/series" element={<Home type="series" />} />
					<Route path="/watch" element={<Watch />} />
				</>
			)}
		</Routes>
	)
}

export default App
