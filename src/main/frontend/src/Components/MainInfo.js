import React from "react";
import MovesPane from "./PokemonMoves/MovesPane";
import Stats from "./Stats";

export default function MainInfo(props) {
	const { pokemon, moveInfo } = props.pokeData;
	const { id, name, abilities, stats, types, moves, sprites } = pokemon;

	return(
		<div>
			<div className="d-flex">
				<div>
					<h1 className="display-6">{name}</h1>
					<img src={sprites.front_default} />
					<img src={sprites.front_shiny} />
					<div>
						{types.map(type => <p key={type.slot}>{type.type.name}</p>)}
					</div>
					<div>
						{abilities.map(ability => <p key={ability.slot}>{ability.ability.name}</p>)}
					</div>
				</div>
				<Stats stats={stats}/>
			</div>
			<MovesPane moves={moves} moveInfo={moveInfo}/>
		</div>
	);
}