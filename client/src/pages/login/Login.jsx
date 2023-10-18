import React from 'react'
import './login.scss'

const Login = () => {
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
					/>
					<input className="input" type="password" placeholder="Password" />

					<button className="loginButton">Sign In</button>

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

					<div className='signupLink'>
						New to Netflix?  <b>Sign up now</b>
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
