import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";

export default function TeamPokemon(props) {
    const pokeName = props.poke;
    const hasPokemon = false;
    const [pokemon,setPokemon] = useState();

    useEffect(() => {
        if (pokeName) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${props.poke}`)
                .then(res => res.json())
                .then(data => setPokemon(data));
        }
    },[props.poke])

    if (pokemon&&!hasPokemon) {
        return(
            <Col>
                <Card className="w-auto m-2">
                    <Card.Img src={pokemon.sprites.front_default} />
                    <Card.Title>{pokemon.name}</Card.Title>
                </Card>
            </Col>
        )
    } else {
        return(
            <Col>
                <Card className="w-auto m-2">
                    <Card.Img src={require("../resources/pokemon-egg.png")} />
                </Card>
            </Col>
        )
    }
}