import React from "react";
import { Card, Col } from "react-bootstrap";

export default function TeamPokemon(props) {

    return(
        <Col>
            <Card className="w-auto m-2">
                <Card.Img src={require("../resources/pokemon-egg.png")} />
                <Card.Title>test</Card.Title>
            </Card>
        </Col>
    )
}