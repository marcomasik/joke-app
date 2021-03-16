import React, { useEffect, useState } from "react";

const Joke = () => {

	const [setup, setSetup] = useState('')
	const [punchline, setpunchline] = useState('')
	const [show, setShow] = useState(false)

	function getJoke() {

    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then((response) => {
    	if (!response.ok) {
      	throw new Error('Network response was not ok');
    	}
    	console.log('Network response was ok')
    	return response.json()
    })
    .then((data) => { 
    	setSetup(data[0].setup)
    	setpunchline(data[0].punchline)
    	setShow(true)
    })
    .catch(error => {
    	console.error('There has been a problem with the fetch operation:', error);
  	});
  }

  useEffect(() => getJoke(), [])

	return (
		<>
			{show ? 
			<div className="main-container__joke-container">
				<div className="main-container__joke-container__setup-container">{setup}</div>
				<div className="main-container__joke-container__punchline-container">{punchline}</div>
			</div>
			:
			null}
		</>
		)
}

export { Joke }