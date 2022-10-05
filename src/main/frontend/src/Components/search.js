import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Pokedex from "pokedex-promise-v2";

export default function Search(props) {

	const [input,setInput] = useState('');
	// const [data,setData] = useState({}); 
	const pokeDex = new Pokedex();

	// useEffect(() => {
	// 	console.log(data);
	// },[data])
	async function getData(search) {
		const response = await pokeDex.getPokemonByName(search);
		// let data = response.json();
		return response;
	}

	function handleChange(e) {
		setInput(e.target.value);
	}

	async function handleClick(e) {
		e.preventDefault();
		console.log(input)
		let response = await getData(input);
		props.onSubmitted(response);
	}

	return (
		<div>
			<Form>
				<input type="search" id="pokeInput" onChange={handleChange} value={input}/>
				<Button variant="primary" type="submit" onClick={handleClick}>Submit</Button>
			</Form>
		</div>
	)
}