import React, { useEffect, useState, useRef } from "react";
import { Table } from "react-bootstrap";
import MovesTable from "./MovesTable";
import Pokedex from "pokedex-promise-v2";

export default function VersionsList(props) {
	const pokeDex = new Pokedex();
	const moveData = props.moves;
	const [moveInfo,setMoveInfo] = useState(null);
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
			getMoveInfo(moveData);
		}
		getData();
	},[props.moves])

	function getVersionsFromGeneration(version) {
		const { version_groups } = version;
		return version_groups;
	}

	async function getMoveInfo(list) {
        const arr = list.map(move => {
            return move.move.name;
        })
        pokeDex.getMoveByName(arr).then(response => {
            // console.log(response);
            setMoveInfo(response);
        })
    }
	
	function displayVersions(version) {
		// let version = vers;
		console.log(moveInfo);
		return (version.map((ver) =>
			<MovesTable key={ver.name} ver={ver} moves={moveData} moveInfo={moveInfo}/>
		)
		)
	}

	// function getMovesForVersion(version) {
	// 	// versions.current.forEach(ver => {
	// 		console.log(version)
	// 		const data = moveData.filter(move => {
	// 			return move.version_group_details.find(ele => ele.version_group.name === version.name)
	// 		})
	// 		const moves = getMovesByLevel(data,version.name);
	// 		console.log(moves);
	// 		return moves;
	// 	// })
	// }
	// function getMovesByLevel(moves,name) {
	// 	const data = moves.filter(move => {
	// 		return move.version_group_details.find(ele =>
	// 			{ return(ele.version_group.name === name && ele.move_learn_method.name === 'level-up') }
					
	// 		)
	// 	})
	// 	return data;
	// }

	return(
		<div>
			{(versions&&moveInfo) && displayVersions(versions.current)}
		</div>
	)
}