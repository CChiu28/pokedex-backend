import React, { useEffect, useState } from "react";
import MovesPane from "./MovesPane";
import Stats from "./Stats";

export default function MainInfo(props) {
	const { id, name, abilities, stats, types, moves, sprites } = props.pokeData;

	return(
		<div>
			<div className="d-flex">
				<div>
					<h1 className="display-6">{name}</h1>
					<img src={sprites.front_default} />
					<div>
						{types.map(type => <p key={type.slot}>{type.type.name}</p>)}
					</div>
					<div>
						{abilities.map(ability => <p key={ability.slot}>{ability.ability.name}</p>)}
					</div>
				</div>
				<Stats stats={stats}/>
			</div>
			<MovesPane moves={moves} />
		</div>
	);
}