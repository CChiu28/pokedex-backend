import React, { useEffect, useState } from "react";

export default function PokemonList(props) {
    const gen = props.gen;
    const [list,setList] = useState([]);

    useEffect(() => {
        (async () => {
            let poke = await fetch(`http://localhost:8080/pokemonGeneration/${gen}`,{
                method: "POST",
                headers: {
					"Content-type":"application/json charset=UTF-8",
					'Accept': 'application/json',
					'Access-Control-Allow-Origin': '*'
				}
            });
            setList(await poke.json());
        })();
    },[])

    return(
        <>
            {console.log(list)}
        </>
    );
}