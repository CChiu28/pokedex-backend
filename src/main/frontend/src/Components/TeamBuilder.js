import React, {useEffect, useState} from "react";
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
            const teamDB = [];
            fetch(`http://localhost:8080/api/getTeams/${user.uid}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    data.pokemon.forEach(res => {
                        teamDB.push(<Team key={teamDB.length} index={teamDB.length} pokemon={pokemon} pokemonDB={res} DeleteFromDatabase={DeleteFromDatabase}/>);
                    });
                    setTeams([...teamDB]);
                })
                .catch(err => console.log(`bad fetch: ${err}`));
        } else setTeams([])
    },[user,pokemon])

    function addNewTeam() {
        setTeams([...teams,<Team key={teams.length} index={teams.length} pokemon={pokemon} DeleteFromDatabase={DeleteFromDatabase}/>]);
    }

    async function DeleteFromDatabase(index) {
        const teamDB = [];
        const url = `http://localhost:8080/api/deleteTeam/${user.uid}/${index}`;
        // fetch(`http://localhost:8080/api/deleteTeam/${user.uid}/${index}`)
        //     .then(res => res.json())
        //         .then(data => {
        //             console.log(data)
        //             data.pokemon.forEach(res => {
        //                 teamDB.push(<Team key={teamDB.length} index={teamDB.length} pokemon={pokemon} pokemonDB={res} DeleteFromDatabase={DeleteFromDatabase}/>);
        //             });
        //             setTeams([...teams,...teamDB]);
        //         })
        //         .catch(err => console.log(`bad fetch: ${err}`));
        // setTeams([...teams])
        getTeams(url);
    }

    async function getTeams(url) {
        const teamDB = [];
        await fetch(url);
        const res = await fetch(`http://localhost:8080/api/getTeams/${user.uid}`)
        const data = await res.json();
        data.pokemon.forEach((team,index) => {
            console.log(index)
            teamDB.push(<Team key={index} index={index} pokemon={pokemon} pokemonDB={team} DeleteFromDatabase={DeleteFromDatabase} />)
        }
        );
        setTeams([...teamDB]);
    }

    return(
        <Container>
            <Button variant="primary" onClick={addNewTeam}>New Team</Button>
            {pokemon && teams}
        </Container>
    )
}