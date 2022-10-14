import React, { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";
import { Table, Tab, Tabs } from "react-bootstrap";
import VersionsList from "./VersionsList";

export default function MovesPane(props) {
	const pokeDex = new Pokedex();
	const moves = props.moves;
	const [version,setVersion] = useState([]);
	const [movesInfo,setMoveInfo] = useState(null);
	const [generation,setGeneration] = useState([]);

	// const thisMove = moves.filter(move => {
	// 	const version = move.version_group_details;
	// 	if (version[version.length-1].level_learned_at > 0)
	// 		return move;
	// });
	// thisMove.sort((a,b) => {
	// 	const alvl = a.version_group_details;
	// 	const blvl = b.version_group_details;
	// 	if (alvl[alvl.length-1].level_learned_at<=blvl[blvl.length-1].level_learned_at)
	// 		return -1;
	// });

	function getMove(move) {
		const version = move.version_group_details;
			return(
				<tr key={move.move.name}>
					<td>{version[version.length-1].level_learned_at}</td>
					<td>{move.move.name}</td>
				</tr>)
	}

	// useEffect(() => {
	// 	async function getVersionsAndMoves() {
	// 		// const ver = await pokeDex.getVersionGroupsList();
	// 		// const allMoves = await pokeDex.getMovesList();
	// 		const gen = await pokeDex.getGenerationsList();
	// 		// console.log(gen);
	// 		// setVersion(ver);
	// 		// setMovesList(allMoves);
	// 		setGeneration(gen);
	// 	}
	// 	// getMoveInfo(moves);
	// 	getVersionsAndMoves();
	// },[])

	// async function getMoveInfo(list) {
    //     const arr = list.map(move => {
    //         return move.move.name;
    //     })
    //     pokeDex.getMoveByName(arr).then(response => {
    //         console.log(response);
    //         setMoveInfo(response);
    //     })
    // }

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
		<Tabs defaultActiveKey="gen1" fill>
			<Tab eventKey="gen1" title="Gen I">
				<VersionsList moves={moves} moveInfo={movesInfo} tab="generation-i"/>
			</Tab>
			{/* <Tab eventKey="gen2" title="Gen II">
				<VersionsList moves={moves} gen={generation} tab="generation-ii"/>
			</Tab>
			<Tab eventKey="gen3" title="Gen III">
				<VersionsList moves={moves} gen={generation} tab="generation-iii"/>
			</Tab>
			<Tab eventKey="gen4" title="Gen IV">
				<VersionsList moves={moves} gen={generation} tab="generation-iv"/>
			</Tab>
			<Tab eventKey="gen5" title="Gen V">
				<VersionsList moves={moves} gen={generation} tab="generation-v"/>
			</Tab>
			<Tab eventKey="gen6" title="Gen VI">
				<VersionsList moves={moves} gen={generation} tab="generation-vi"/>
			</Tab>
			<Tab eventKey="gen7" title="Gen VII">
				<VersionsList moves={moves} gen={generation} tab="generation-vii"/>
			</Tab> */}
		</Tabs>
	)
}