import React, {useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import PokemonList from "./PokemonList";
import Team from "./Team";

export default function TeamBuilder(props) {
    const [pokemon,setPokemon] = useState(null);
    const [teams,setTeams] = useState([]);

    useEffect(() => {
        (async () => {
            const poke = await fetch(`http://localhost:8080/pokemonGeneration`);
            const data = await poke.json();
            setPokemon(data);
        })();
    },[])

    function addNewTeam() {
        setTeams([...teams,<Team key={teams.length} pokemon={pokemon} />]);
    }

    return(
        <div>
            {/* {pokemon && <PokemonList pokemon={pokemon} gen="generation-i"/>}
            {pokemon && <PokemonList pokemon={pokemon} gen="generation-ii"/>} */}
            {/* {pokemon && <Team pokemon={pokemon} />} */}
            {pokemon && teams}
            <Button variant="primary" onClick={addNewTeam}>New Team</Button>
        </div>
    )
}