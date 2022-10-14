import React, { useEffect, useState, useRef } from "react";
import MovesTable from "./MovesTable";
import Pokedex from "pokedex-promise-v2";

export default function VersionsList(props) {
	const pokeDex = new Pokedex();
	const moves = props.moves;
	const moveData = props.moveInfo;
	// const [moveInfo,setMoveInfo] = useState(null);
	const genRef = useRef([]);
	const versions = useRef([]);

	useEffect(() => {
		async function getData() {
			genRef.current = await pokeDex.getGenerationByName(props.tab);
			console.log(genRef.current)
			versions.current = getVersionsFromGeneration(genRef.current);
			console.log(versions)
		}
		getData();
	},[])

	function getVersionsFromGeneration(version) {
		const { version_groups } = version;
		return version_groups;
	}

	// async function getMoveInfo(list) {
    //     const arr = list.map(move => {
    //         return move.move.name;
    //     })
    //     pokeDex.getMoveByName(arr).then(response => {
    //         // console.log(response);
    //         setMoveInfo(response);
    //     })
    // }
	
	function displayVersions(version) {
		console.log(moveData);
		return (version.map((ver) =>
			<MovesTable key={ver.name} ver={ver} moves={moves} moveInfo={moveData}/>
		)
		)
	}

	return(
		<div>
			{(versions&&moveData) && displayVersions(versions.current)}
		</div>
	)
}