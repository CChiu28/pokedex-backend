import React, {useEffect, useState} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Button } from "react-bootstrap";
import PokemonList from "./PokemonList";
import Team from "./Team";

export default function TeamBuilder(props) {
    const [pokemon,setPokemon] = useState(null);
    const [teams,setTeams] = useState([]);
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        (async () => {
            const poke = await fetch(`http://localhost:8080/pokemonGeneration`);
            const data = await poke.json();
            await setPokemon(data);
        })();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(true)
            } else {
                setUser(null);
                console.log(false)
            }
        })
    },[])

    useEffect(() => {
        if (user&&pokemon) {
            const teamDB = [];
            fetch(`http://localhost:8080/getTeams/${user.uid}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    data.pokemon.forEach(res => {
                        console.log(res)
                        teamDB.push(<Team key={teamDB.length} pokemon={pokemon} pokemonDB={res} />);
                    });
                    setTeams([...teams,...teamDB]);
                })
                .catch(err => console.log(`bad fetch: ${err}`));
        } else setTeams([])
    },[user,pokemon])

    function addNewTeam() {
        setTeams([...teams,<Team key={teams.length} pokemon={pokemon} />]);
    }

    return(
        <div>
            {pokemon && teams}
            <Button variant="primary" onClick={addNewTeam}>New Team</Button>
        </div>
    )
}