import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import PokemonList from "./PokemonList";
import TeamPokemon from "./TeamPokemon";

export default function Team(props) {
    const pokemon = props.pokemon;
    const teamOfPokemon = [];
    const [team,setTeam] = useState(teamOfPokemon);

    function getPokemon(poke) {
        if (teamOfPokemon.length<6) {
            // console.log(poke);
            teamOfPokemon.push(poke);
            console.log(teamOfPokemon)
            setTeam([...teamOfPokemon]);
        } else console.log("Full team");
    }

    function SaveToDatabase() {
        const list = JSON.stringify(team);
        fetch('http://localhost:8080/registerTeam', {
            method: 'POST',
            headers: {
                "Content-type":"application/json",
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: list
        });
    }

    return(
        <div>
            <Container>
                <Row>
                    <PokemonList pokemon={pokemon} getPokemon={getPokemon} gen="generation-i"/>
                </Row>
                <Row>
                    <TeamPokemon poke={team[0] ? team[0] : null}/>
                    <TeamPokemon poke={team[1] ? team[1] : null}/>
                    <TeamPokemon poke={team[2] ? team[2] : null}/>
                    <TeamPokemon poke={team[3] ? team[3] : null}/>
                    <TeamPokemon poke={team[4] ? team[4] : null}/>
                    <TeamPokemon poke={team[5] ? team[5] : null}/>
                </Row>
                <Button variant="primary" onClick={SaveToDatabase}>Save</Button>
            </Container>
        </div>
    )
}