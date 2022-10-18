import React, { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";
import { Tab, Tabs } from "react-bootstrap";
import VersionsList from "./VersionsList";

export default function MovesPane(props) {
	const pokeDex = new Pokedex();
	const moves = props.moves;
	const moveInfo = props.moveInfo;
	const [movesInfo,setMoveInfo] = useState(null);

	useEffect(() => {
		// getMoveInfo(moves)
		setMoveInfo(moveInfo);
		// console.log(moveInfo)
	},[props.moves])

	// async function getMoveInfo(list) {
    //     const arr = list.map(move => {
    //         return move.move.name;
    //     })
    //     // pokeDex.getMoveByName(arr).then(response => {
    //     //     // console.log(response);
    //     //     setMoveInfo(response);
    //     // })
	// 	setMoveInfo(props.moveInfo);
    // }

	return(
		<Tabs defaultActiveKey="gen1" fill>
			<Tab eventKey="gen1" title="Gen I">
				<VersionsList moves={moves} moveInfo={movesInfo} tab="generation-i"/>
			</Tab>
			{/* <Tab eventKey="gen2" title="Gen II">
				<VersionsList moves={moves} moveInfo={movesInfo} tab="generation-ii"/>
			</Tab>
			<Tab eventKey="gen3" title="Gen III">
				<VersionsList moves={moves} moveInfo={movesInfo} tab="generation-iii"/>
			</Tab>
			<Tab eventKey="gen4" title="Gen IV">
				<VersionsList moves={moves} moveInfo={movesInfo} tab="generation-iv"/>
			</Tab>
			<Tab eventKey="gen5" title="Gen V">
				<VersionsList moves={moves} moveInfo={movesInfo} tab="generation-v"/>
			</Tab>
			<Tab eventKey="gen6" title="Gen VI">
				<VersionsList moves={moves} moveInfo={movesInfo} tab="generation-vi"/>
			</Tab>
			<Tab eventKey="gen7" title="Gen VII">
				<VersionsList moves={moves} moveInfo={movesInfo} tab="generation-vii"/>
			</Tab> */}
		</Tabs>
	)
}