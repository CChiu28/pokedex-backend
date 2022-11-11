import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { formatText } from "../Utils";

export default function TeamPokemon(props) {
    const pokeName = props.poke;
    const [hasPokemon,setHasPokemon] = useState(false);
    const [pokemon,setPokemon] = useState();

    useEffect(() => {
        if (pokeName) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${props.poke.toLowerCase()}`)
                .then(res => res.json())
                .then(data => {
                    setPokemon(data);
                    setHasPokemon(true);
                });
        }
    },[props.poke])

    function deletePoke() {
        if (hasPokemon) {
            props.deletePoke(pokemon.name);
            setHasPokemon(false);
        }
    }

    return(
        <>
            <Col>
                <Card className="w-auto m-2" onClick={deletePoke}>
                    <Card.Img src={(pokemon&&hasPokemon) ? pokemon.sprites.front_default : require("../resources/pokemon-egg.png")} />
                    <Card.Title>{(pokemon&&hasPokemon) ? formatText(pokemon.name) : ''}</Card.Title>
                </Card>
            </Col>
        </>
    )
}