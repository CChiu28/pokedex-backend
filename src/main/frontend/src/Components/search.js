import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Pokedex from "pokedex-promise-v2";

export default function Search(props) {

	const [input,setInput] = useState('');
	const pokeDex = new Pokedex();

	async function getData(search) {
		try {
			let poke = await pokeDex.getPokemonByName(search);
			// console.log(await pokeDex.getMovesList());
			// console.log(await pokeDex.getGenerationsList());
			return poke;
		} catch (err) {
			console.log('bad',err);
		}
	}

	function handleChange(e) {
		setInput(e.target.value);
	}

	async function handleClick(e) {
		e.preventDefault();
		console.log(input)
		let response = await getData(input);
		console.log(response);
		props.onSubmitted(response);
	}

	return (
		<div>
			<Form className='d-flex'>
				<Form.Control type="search" id="pokeInput" onChange={handleChange} value={input}/>
				<Button variant="primary" type="submit" onClick={handleClick}>Submit</Button>
			</Form>
		</div>
	)
}