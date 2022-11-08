import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useRef, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import PokemonList from "./PokemonList";
import TeamPokemon from "./TeamPokemon";

export default function Team(props) {
    const auth = getAuth();
    const userId = useRef('');
    const pokemon = props.pokemon;
    const teamOfPokemon = useRef([]);
    const [team,setTeam] = useState([]);
    const [teamSaved,setSave] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                userId.current = user.uid;
                console.log(props)
                if (props.pokemonDB)
                    setTeam(props.pokemonDB);
            } else userId.current = '';
        })
    },[])

    function getPokemon(poke) {
        // const teamOfPokemon = team;
        // console.log(team)
        if (teamOfPokemon.current.length<6||teamOfPokemon.current.includes(null)) {
            // console.log(poke);
            if (teamOfPokemon.current.includes(null)) {
                const index = teamOfPokemon.current.indexOf(null);
                teamOfPokemon.current[index] = poke;
            } else teamOfPokemon.current.push(poke);
            console.log(userId.current,teamOfPokemon.current)
            setTeam([...teamOfPokemon.current]);
        } else console.log("Full team");
    }

    function SaveToDatabase() {
        if (auth.currentUser) {
            const list = JSON.stringify(team);
            const obj = {
                id: userId.current,
                pokemon: team
            }
            console.log(JSON.stringify(obj))
            fetch('http://localhost:8080/registerTeam', {
                method: 'POST',
                headers: {
                    "Content-type":"application/json",
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(obj)
            });
            setSave(true);
        } else console.log('not signed in')
    }

    function deletePoke(name) {
        // const newTeam = team;
        const index = teamOfPokemon.current.indexOf(name);
        teamOfPokemon.current[index] = null;
        // console.log(newTeam)
        setTeam([...teamOfPokemon.current]);
    }

    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="generation-i"/>
                    </Col>
                    <Col>    
                        <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="generation-ii"/>
                    </Col>
                    <Col>
                        <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="generation-iii"/>
                    </Col>
                    <Col>
                        <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="generation-iv"/>
                    </Col>
                    <Col>
                        <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="generation-v"/>
                    </Col>
                    <Col>
                        <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="generation-vi"/>
                    </Col>
                    <Col>
                        <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="generation-vii"/>
                    </Col>
                    <Col>
                        <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="generation-viii"/>
                    </Col>
                </Row>
                <Row>
                    <TeamPokemon poke={team[0] ? team[0] : null} deletePoke={deletePoke}/>
                    <TeamPokemon poke={team[1] ? team[1] : null} deletePoke={deletePoke}/>
                    <TeamPokemon poke={team[2] ? team[2] : null} deletePoke={deletePoke}/>
                    <TeamPokemon poke={team[3] ? team[3] : null} deletePoke={deletePoke}/>
                    <TeamPokemon poke={team[4] ? team[4] : null} deletePoke={deletePoke}/>
                    <TeamPokemon poke={team[5] ? team[5] : null} deletePoke={deletePoke}/>
                </Row>
                <Button variant="primary" onClick={SaveToDatabase}>Save</Button>
            </Container>
        </div>
    )
}