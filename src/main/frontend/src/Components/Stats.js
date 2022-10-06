import React from "react";

export default function Stats(props) {
	const stats = props.stats;

	function getStat(stat) {
		return(
			<div className="d-flex" key={stat.stat.name}>
				<p>{stat.stat.name}: </p>
				<p>{stat.base_stat}</p>
			</div>
		);
	}
	return(
		<div>
			{stats.map(stat => getStat(stat))}
		</div>
	)
}