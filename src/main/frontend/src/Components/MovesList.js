import React, { useEffect, useState, useRef } from "react";
import { Table } from "react-bootstrap";
import MovesTable from "./MovesTable";
import Pokedex from "pokedex-promise-v2";

export default function MovesList(props) {
	const pokeDex = new Pokedex();
	let moveData = props.moves;
	const genRef = useRef([]);
	const versions = useRef([]);
	const allMoveData = useRef([]);

	useEffect(() => {
		async function getData() {
			genRef.current = await pokeDex.getGenerationByName(props.tab);
			console.log(genRef.current)
			versions.current = getVersionsFromGeneration(genRef.current);
			console.log(versions)
			// allMoveData.current = await pokeDex.getMovesList();
			// console.log(allMoveData)
		}
		getData();
	},[])

	function getVersionsFromGeneration(version) {
		const { version_groups } = version;
		return version_groups;
	}
	
	function displayVersions(version) {
		// let version = vers;
		// console.log(moveData);
		return (version.map((ver) =>
			// <Table key={ver.name}>
			// 	{ver.name}
			// 	<thead>
			// 		<tr>
			// 			<th>Level</th>
			// 			<th>Move</th>
			// 			<th>PP</th>
			// 			<th>Accuracy</th>
			// 			<th>Description</th>
			// 		</tr>
			// 	</thead>
			// </Table>
			// const movesByLevel = getMovesForVersion(ver);
			<MovesTable key={ver.name} ver={ver} moves={moveData}/>
		)
		)
	}

	function getMovesForVersion(version) {
		// versions.current.forEach(ver => {
			console.log(version)
			const data = moveData.filter(move => {
				return move.version_group_details.find(ele => ele.version_group.name === version.name)
			})
			const moves = getMovesByLevel(data,version.name);
			console.log(moves);
			return moves;
		// })
	}
	function getMovesByLevel(moves,name) {
		const data = moves.filter(move => {
			return move.version_group_details.find(ele =>
				{ return(ele.version_group.name === name && ele.move_learn_method.name === 'level-up') }
					
			)
		})
		return data;
	}

	return(
		// <Table>
		// 	<thead>
		// 		<tr>
		// 			{versions && displayVersions(versions.current)}
		// 			<th>Move</th>
		// 			<th>Power</th>
		// 			<th>Accuracy</th>
		// 			<th>PP</th>
		// 			<th>Description</th>
		// 		</tr>
		// 	</thead>
		// </Table>
		<div>
			{versions && displayVersions(versions.current)}
		</div>
	)
}