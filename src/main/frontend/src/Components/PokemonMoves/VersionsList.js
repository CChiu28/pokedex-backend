import React, { useEffect, useState, useRef } from "react";
import MovesTable from "./MovesTable";
import Pokedex from "pokedex-promise-v2";

export default function VersionsList(props) {
	const pokeDex = new Pokedex();
	const moves = props.moves;
	const moveData = props.moveInfo;
	// const [moveInfo,setMoveInfo] = useState(null);
	const genRef = useRef([]);
	const [versions,setVersion] = useState();


	useEffect(() => {
		async function getData() {
			genRef.current = await pokeDex.getGenerationByName(props.tab);
			console.log(genRef.current)
			const ver = getVersionsFromGeneration(genRef.current);
			setVersion(ver);
		}
		getData();
	},[])

	function getVersionsFromGeneration(version) {
		const { version_groups } = version;
		return version_groups;
	}
	
	function displayVersions(version) {
		// console.log(version,moveData);
		return (version.map((ver) =>
			<MovesTable key={ver.name} ver={ver} moves={moves} moveInfo={moveData}/>
		)
		)
	}

	return(
		<>
			{(versions) && displayVersions(versions)}
		</>
	)
}