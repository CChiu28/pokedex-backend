import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Button, Container } from "react-bootstrap";
import PokemonList from "./PokemonList";
import Team from "./Team";

export default function TeamBuilder(props) {
    const [pokemon,setPokemon] = useState(null);
    const [teams,setTeams] = useState([]);
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        (async () => {
            const poke = await fetch(`http://localhost:8080/api/pokemonGeneration`);
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
            const url = `http://localhost:8080/api/getTeams/${user.uid}`;
            getTeams(url);
        } else setTeams([]);
    },[user,pokemon])

    function DeleteFromDatabase(index) {
        const teamDB = [];
        const url = `http://localhost:8080/api/deleteTeam/${user.uid}/${index}`;
        getTeams(url);
    }

    function addNewTeam() {
        console.log(teams.length)
        setTeams([...teams,<Team key={teams.length} index={teams.length} pokemon={pokemon} DeleteFromDatabase={DeleteFromDatabase}/>]);
    }

    async function getTeams(url) {
        const teamDB = [];
        const res = await fetch(url);
        // const res = await fetch(`http://localhost:8080/api/getTeams/${user.uid}`)
        const data = await res.json();
        data.pokemon.forEach((team,i) => {
            console.log(teams.length+i)
            teamDB.push(<Team key={team} uniqueId={data.id.timestamp} index={teams.length+i} pokemon={pokemon} pokemonDB={team} DeleteFromDatabase={DeleteFromDatabase} />);
        }
        );
        setTeams([...teams,...teamDB]);
    }

    return(
        <Container>
            <Button variant="primary" onClick={addNewTeam}>New Team</Button>
            {pokemon && teams}
        </Container>
    )
}