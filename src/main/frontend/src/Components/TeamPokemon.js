import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";

export default function TeamPokemon(props) {
    const pokeName = props.poke;
    const [hasPokemon,setHasPokemon] = useState(false);
    const [pokemon,setPokemon] = useState();

    useEffect(() => {
        if (pokeName) {
            // console.log(pokeName);
            fetch(`https://pokeapi.co/api/v2/pokemon/${props.poke}`)
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

    // if (pokemon&&!hasPokemon) {
    //     // return(
    //     //     <Col>
    //     //         <Card className="w-auto m-2" onClick={deletePoke}>
    //     //             <Card.Img src={pokemon.sprites.front_default} />
    //     //             <Card.Title>{pokemon.name}</Card.Title>
    //     //         </Card>
    //     //     </Col>
    //     // )
    //     setHasPokemon(true);
    // } else {
    //     // return(
    //     //     <Col>
    //     //         <Card className="w-auto m-2" onClick={deletePoke}>
    //     //             <Card.Img src={require("../resources/pokemon-egg.png")} />
    //     //         </Card>
    //     //     </Col>
    //     // )
    // }

    return(
        <>
            <Col>
                <Card className="w-auto m-2" onClick={deletePoke}>
                    <Card.Img src={(pokemon&&hasPokemon) ? pokemon.sprites.front_default : require("../resources/pokemon-egg.png")} />
                    <Card.Title>{(pokemon&&hasPokemon) ? pokemon.name : ''}</Card.Title>
                </Card>
            </Col>
        </>
    )
}