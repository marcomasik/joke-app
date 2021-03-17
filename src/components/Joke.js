import React, { useState } from "react";

const Joke = () => {

	const [jokeList, setJokeList] = useState([])

	const [show, setShow] = useState(false)

	const [isLoading, setIsLoading] = useState(false)

	function getJoke() {

		setIsLoading(true)
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then((response) => {
    	if (!response.ok) {
      	throw new Error('Network response was not ok');
    	}
    	console.log('Network response was ok')
    	return response.json()
    })
    .then((data) => { 
    	const jokeObject = data[0]
    	if (jokeList.some(existingJoke => existingJoke.id === jokeObject.id)) {
    		getJoke()
    		console.log("The joke already existed in jokeList, fetching again for a new random joke")
    	} else {
    		console.log("A new joke has been added to jokeList")
    		setJokeList(prevArray => [...prevArray, jokeObject])
    		setIsLoading(false)
    		setShow(true)
    	}
    })
    .catch(error => {
    	console.error('There has been a problem with the fetch operation:', error);
  	});
  }

	return (
		<>
			<div className="main-container__button-container">
				<button onClick={() => getJoke()}>{isLoading === true ? "Joke is loading ⌛" : "Get a joke"}</button>
			</div>
			{show ? 
				<div className="main-container__jokelist-container">
					{jokeList.map(joke => {
						return(
								<div className="main-container__jokelist-container__joke-container" key={joke.id}>
									<h6>Joke Nr.{joke.id}</h6>
									<h3 className="main-container__jokelist-container__joke-container__setup-container">{joke.setup}</h3>
									<h3 className="main-container__jokelist-container__joke-container__punchline-container">{joke.punchline}</h3>
								</div>
							)
					})}
				</div>
			:
				null}
		</>
		)
}

export { Joke }