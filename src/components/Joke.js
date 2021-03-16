import React, { useEffect, useState } from "react";

const Joke = () => {

	const [setup, setSetup] = useState('')
	const [punchline, setpunchline] = useState('')
	const [show, setShow] = useState(false)

	function getJoke() {

    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then((resp) => resp.json())
    .then((data) => { 
    									setSetup(data[0].setup)
    									setpunchline(data[0].punchline)
    									setShow(true)
                    })
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