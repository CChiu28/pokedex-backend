import React, { useEffect, useState, useRef } from "react";
import { Table } from "react-bootstrap";
import Pokedex from "pokedex-promise-v2";

export default function MovesList(props) {
	const pokeDex = new Pokedex();
	// const [versions,setVersions] = useState([]);
	// // setGen(props.gen.results);
	const genRef = useRef([]);
	// console.log('inner',gen)
	let moveData = props.moves;
	const versions = useRef([]);
	const allMoveData = useRef([]);
	// if(gen) {
	// 	url = gen.find(ele => ele.name===props.tab);
	// 	console.log(url)
	// 	let res = getVersionsFromGeneration();
	// 	console.log(res)
	// }
	useEffect(() => {
		async function getData() {
			genRef.current = await pokeDex.getGenerationByName(props.tab);
			console.log(genRef.current)
			versions.current = getVersionsFromGeneration(genRef.current);
			console.log(versions)
		}
		getData();
	},[])

	// async function getGeneration() {
	// 	let response;
	// 	let data;
	// 	// if (url) {
	// 		response = await fetch(url.url);
	// 		data = await response.json();
	// 		return data;
	// 	// }
	// };

	function getVersionsFromGeneration(version) {
		const { version_groups } = version;
		return version_groups;
	}
	
	function displayVersions(version) {
		// let version = vers;
		console.log(moveData);
		return version.map((ver) =>
			<th key={ver.name}>{ver.name}</th>)
	}

	return(
		<Table>
			<thead>
				<tr>
					{versions && displayVersions(versions.current)}
					<th>Move</th>
					<th>Power</th>
					<th>Accuracy</th>
					<th>PP</th>
					<th>Description</th>
				</tr>
			</thead>
		</Table>
	)
}