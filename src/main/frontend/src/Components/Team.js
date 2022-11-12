import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useRef, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import PokemonList from "./PokemonList";
import TeamPokemon from "./TeamPokemon";

export default function Team({ pokemon, pokemonDB, index, uniqueId, DeleteFromDatabase }) {
    const auth = getAuth();
    const userId = useRef('');
    // const pokemon = props.pokemon;
    const teamOfPokemon = useRef([]);
    const [team,setTeam] = useState([]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                userId.current = user.uid;
                if (pokemonDB) {
                    teamOfPokemon.current = pokemonDB;
                    setTeam(teamOfPokemon.current);
                }
            } else userId.current = '';
        })
    },[])

    function getPokemon(poke) {
        if (teamOfPokemon.current.length<6||teamOfPokemon.current.includes(null)) {
            if (teamOfPokemon.current.includes(null)) {
                const index = teamOfPokemon.current.indexOf(null);
                teamOfPokemon.current[index] = poke;
            } else teamOfPokemon.current.push(poke);
            console.log(userId.current,teamOfPokemon.current)
            setTeam([...teamOfPokemon.current]);
        } else console.log("Full team");
    }

    function saveToDatabase() {
        if (auth.currentUser) {
            const obj = {
                id: userId.current,
                index: index,
                uniqueId: uniqueId ? uniqueId : null,
                pokemon: team
            }
            console.log(JSON.stringify(obj))
            fetch('http://localhost:8080/api/registerTeam', {
                method: 'POST',
                headers: {
                    "Content-type":"application/json",
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(obj)
            });
        } else console.log('not signed in')
    }

    function deletePoke(name) {
        const index = teamOfPokemon.current.indexOf(name);
        teamOfPokemon.current[index] = null;
        console.log(index,teamOfPokemon.current)
        setTeam([...teamOfPokemon.current]);
    }

    function deleteDB() {
        DeleteFromDatabase(index);
    }

    return(
        <div className="m-3">
            <Row>
                <Col className="d-flex justify-content-center">
                    <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="Gen I"/>
                </Col>
                <Col className="d-flex justify-content-center">    
                    <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="Gen II"/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="Gen III"/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="Gen IV"/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="Gen V"/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="Gen VI"/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="Gen VII"/>
                </Col>
                <Col className="d-flex justify-content-center">
                    <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="Gen VIII"/>
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
            {auth.currentUser 
            ? <>
                <Button variant="primary" onClick={saveToDatabase}>Save</Button>
                <Button variant="primary" onClick={deleteDB}>Delete</Button>
            </> 
            : <span className="m-1">Sign in to save your teams!</span>}
        </div>
    )
}