import React, {useEffect, useState} from "react";
import PokemonList from "./PokemonList";
import Team from "./Team";

export default function TeamBuilder(props) {
    const [pokemon,setPokemon] = useState(null);

    useEffect(() => {
        (async () => {
            const poke = await fetch(`http://localhost:8080/pokemonGeneration`);
            const data = await poke.json();
            setPokemon(data);
        })();
    },[])

    return(
        <div>
            {/* {pokemon && <PokemonList pokemon={pokemon} gen="generation-i"/>}
            {pokemon && <PokemonList pokemon={pokemon} gen="generation-ii"/>} */}
            {pokemon && <Team pokemon={pokemon} />}
        </div>
    )
}