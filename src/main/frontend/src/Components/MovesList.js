import React from "react";
import { Table } from "react-bootstrap";

export default function MovesList(props) {
	const moves = props.moves;
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

	console.log(thisMove);

	function getMove(move) {
		const version = move.version_group_details;
			return(
				<tr key={move.move.name}>
					<td>{version[version.length-1].level_learned_at}</td>
					<td>{move.move.name}</td>
				</tr>)
	}

	return(
		<Table>
			<thead>
				<tr>
					<th>Level</th>
					<th>Move</th>
				</tr>
			</thead>
			<tbody>
				{thisMove.map(element => getMove(element)
				)}
			</tbody>
		</Table>
	)
}