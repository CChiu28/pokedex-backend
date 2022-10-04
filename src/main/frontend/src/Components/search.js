import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

export default function Search(props) {

	const[input,setInput] = useState('');
	const[data,setData] = useState({});

	// useEffect(() => {
	// 	console.log(data);
	// },[data])
	async function getData(search) {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
		let data = response.json();
		return data;
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