import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './authContext/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<AuthContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</AuthContextProvider>
)
