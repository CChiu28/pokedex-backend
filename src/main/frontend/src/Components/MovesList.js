import React, { useEffect } from "react";

export default function MovesList(props) {
	console.log(props);
	const gen = props.gen.results;
	let url;
	if(gen) {
		url = gen.find(ele => ele.name===props.tab);
		console.log(url);
	}
	return(
		<div>

		</div>
	)
}