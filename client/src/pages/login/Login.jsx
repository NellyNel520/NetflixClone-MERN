import React, {useState} from 'react'
import './login.scss'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'



const Login = () => {

	let navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


	// const handleLogin = (e) => {
	// 	e.preventDefault()
	// 	login(dispatch, { email, password })
	// 	navigate('/')
	// }
	return (
		<div className="login">
			<div className="top">
				<div className="wrapper">
					<img
						className="logo"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
						alt="logo"
					/>
				</div>
			</div>

			<div className="container">
				<form>
					<h1>Sign In</h1>
					<input
						className="input"
						type="email"
						placeholder="Email or phone number"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

					<button className="loginButton" >Sign In</button>

					<div className="save">
						<div>
							<input
								className="checkbox"
								type="checkbox"
								id="checkbox"
								// checked={isChecked}
							/>
							<label htmlFor="checkbox">Remember me ?</label>
						</div>

						<div>Need help?</div>
					</div>

					<div className="signupLink">
						New to Netflix?{' '}
						<Link to={'/signup'}>
							<b>Sign up now</b>
						</Link>
					</div>

					<small>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. <b>Learn more</b>.
					</small>
				</form>
			</div>
		</div>
	)
}

export default Login
