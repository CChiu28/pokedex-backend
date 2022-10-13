import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Pokedex from "pokedex-promise-v2";

export default function MovesList(props) {
    const moves = props.moves;
    const version = props.version;
    const [lvl,setLvl] = useState(null);
    const [moveInfo,setMoveInfo] = useState(null);
    console.log(version);
    const pokeDex = new Pokedex();

    useEffect(() => {
        getLvlFromMoves();
        getMoveInfo();
    },[])

    function getMoveInfo() {
        const arr = moves.map(move => {
            return move.move.name;
        })
        pokeDex.getMoveByName(arr).then(response => {
            console.log(response);
            setMoveInfo(response);
        })
    }

    function getLvlFromMoves() {
        const list = moves.map((move) => {
            let lvlat;
            move.version_group_details.forEach((ele) => {
                if (ele.version_group.name===version&&ele.move_learn_method.name ==='level-up')
                    lvlat = ele.level_learned_at;
            })
            return lvlat;
        })
        setLvl(list);
    }

    function getMoveDesc(move) {
        const { effect_entries, flavor_text_entries } = move;
        const desc = flavor_text_entries.find(ele =>
            ele.version_group.name===version ? ele : effect_entries[0]
        )
        return desc.flavor_text;
    }

    return(
        <tbody>
            {(lvl&&moveInfo) && moves.map((move,index) => {
                return(
                    <tr key={move.move.name}>
                        <td>{lvl[index]}</td>
                        <td>{move.move.name}</td>
                        <td>{moveInfo[index].type.name}</td>
                        <td>{moveInfo[index].pp}</td>
                        <td>{moveInfo[index].accuracy===null ? 100 : moveInfo[index].accuracy}</td>
                        <td>{getMoveDesc(moveInfo[index])}</td>
                    </tr>
                )
            })}
        </tbody>
    );
}