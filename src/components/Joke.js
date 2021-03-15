import React, { useEffect, useState } from "react";

const Joke = () => {

	const [setup, setSetup] = useState('')
	const [punchline, setpunchline] = useState('')

	function getJoke() {

    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then((resp) => resp.json())
    .then((data) => { 
    									setSetup(data[0].setup)
    									setpunchline(data[0].punchline)
                    })
  }

  useEffect(() => getJoke(), [])

	return (
			<>
				<div>{setup}</div>
				<div>{punchline}</div>
			</>
		)
}

export { Joke }