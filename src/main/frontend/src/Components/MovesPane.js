import React, { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";
import { Table, Tab, Tabs } from "react-bootstrap";
import VersionsList from "./VersionsList";

export default function MovesPane(props) {
	const moves = props.moves;
	const [version,setVersion] = useState([]);
	const [movesList,setMovesList] = useState([]);
	const [generation,setGeneration] = useState([]);

	const thisMove = moves.filter(move => {
		const version = move.version_group_details;
		if (version[version.length-1].level_learned_at > 0)
			return move;
	});
	thisMove.sort((a,b) => {
		const alvl = a.version_group_details;
		const blvl = b.version_group_details;
		if (alvl[alvl.length-1].level_learned_at<=blvl[blvl.length-1].level_learned_at)
			return -1;
	});

	function getMove(move) {
		const version = move.version_group_details;
			return(
				<tr key={move.move.name}>
					<td>{version[version.length-1].level_learned_at}</td>
					<td>{move.move.name}</td>
				</tr>)
	}

	useEffect(() => {
		async function getVersionsAndMoves() {
			const pokeDex = new Pokedex();
			const ver = await pokeDex.getVersionGroupsList();
			const allMoves = await pokeDex.getMovesList();
			const gen = await pokeDex.getGenerationsList();
			// console.log(gen);
			setVersion(ver);
			setMovesList(allMoves);
			setGeneration(gen);
		}
		getVersionsAndMoves();
	},[])

	return(
		// <Table>
		// 	<thead>
		// 		<tr>
		// 			<th>Level</th>
		// 			<th>Move</th>
		// 		</tr>
		// 	</thead>
		// 	<tbody>
		// 		{thisMove.map(element => getMove(element)
		// 		)}
		// 	</tbody>
		// </Table>
		<Tabs defaultActiveKey="gen1">
			<Tab eventKey="gen1" title="Gen I">
				<VersionsList moves={moves} gen={generation} tab="generation-i"/>
			</Tab>
			<Tab title="Gen II"></Tab>
			<Tab title="Gen III"></Tab>
			<Tab title="Gen IV"></Tab>
			<Tab title="Gen V"></Tab>
			<Tab title="Gen VI"></Tab>
			<Tab title="Gen VII"></Tab>
		</Tabs>
	)
}