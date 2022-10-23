import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PokemonList from "./PokemonList";
import TeamPokemon from "./TeamPokemon";

export default function Team(props) {
    const pokemon = props.pokemon;

    return(
        <div>
            <Container>
                <Row>
                    <PokemonList pokemon={pokemon} gen="generation-i"/>
                </Row>
                <Row>
                    <TeamPokemon />
                </Row>
            </Container>
        </div>
    )
}