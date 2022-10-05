import React from "react";
import MovesList from "./MovesList";

export default function MainInfo(props) {
	const { id, name, abilities, stats, types, moves, sprites } = props.pokeData;

	return(
		<div>
			<h1 className="display-6">{name}</h1>
			<img src={sprites.front_default} />
			<MovesList moves={moves} />
		</div>
	);
}