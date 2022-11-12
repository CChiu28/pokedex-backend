import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { formatText } from "../Utils";

export default function TeamPokemon({ poke, deletePoke }) {
    const [pokemon,setPokemon] = useState(null);

    useEffect(() => {
        if (poke) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${poke.toLowerCase()}`)
                .then(res => res.json())
                .then(data => {
                    setPokemon(data);
                    // setHasPokemon(true);
                });
        }
    },[poke])

    function deletePokemon() {
        if (pokemon) {
            deletePoke(formatText(pokemon.name));
            // setHasPokemon(false);
            setPokemon(null);
        }
    }

    return(
        <>
            <Col>
                <Card className="w-auto m-2" onClick={deletePokemon}>
                    <Card.Img src={pokemon ? pokemon.sprites.front_default : require("../resources/pokemon-egg.png")} />
                    <Card.Title>{pokemon ? formatText(pokemon.name) : ''}</Card.Title>
                </Card>
            </Col>
        </>
    )
}