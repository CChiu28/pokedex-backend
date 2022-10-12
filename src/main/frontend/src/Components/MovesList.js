import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import Pokedex from "pokedex-promise-v2";

export default function MovesList(props) {
    const moves = props.moves;
    const moveInfo = [];
    console.log(props.moves);
    const pokeDex = new Pokedex();

    useEffect(() => {
        async function getMoveInfo() {
            moves.forEach(async (move) => {
                let data = await pokeDex.getMoveByName(move.move.name);
                moveInfo.push(data);
            })
        }
        getMoveInfo();
        console.log(moveInfo);
    },[])


    return(
        <tr></tr>
    );
}