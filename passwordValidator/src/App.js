import React, { useState } from "react"; 
import validator from 'validator'
import './App.css'
const App = () => { 

	const [errorMessage, setErrorMessage] = useState('') 

	const validate = (value) => { 

		if (validator.isStrongPassword(value, { 
			minLength: 8, minLowercase: 1, 
			minUppercase: 1, minNumbers: 1, minSymbols: 1 
		})) { 
			setErrorMessage('Is Strong Password') 
		} else { 
			setErrorMessage('Is Not Strong Password') 
		} 
	} 

	return ( 
		<div className="d1"> 
			<pre> 
				<h2>Checking Password Strength in ReactJS</h2> 
				<span className="d3" >Enter Password: </span>
				<input type="text" className="d2" onChange={(e) => validate(e.target.value)}></input> <br/> 
				{errorMessage === '' ? null : 
					<span className="ebox">{errorMessage}</span>} 
			</pre> 
		</div> 
	); 
} 

export default App ;