import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Pokedex from "pokedex-promise-v2";

export default function MovesList(props) {
    const moves = props.moves;
    const version = props.version;
    const lvl = props.lvl
    // const [lvl,setLvl] = useState(props.lvl);
    // const [moveInfo,setMoveInfo] = useState(props.moves);
    console.log(version);
    const pokeDex = new Pokedex();

    // useEffect(() => {
    //     getLvlFromMoves();
    //     getMoveInfo();
    // },[])

    // function getMoveInfo() {
    //     const arr = moves.map(move => {
    //         return move.move.name;
    //     })
    //     pokeDex.getMoveByName(arr).then(response => {
    //         console.log(response);
    //         setMoveInfo(response);
    //     })
    // }

    // function getLvlFromMoves() {
    //     const list = moves.map((move) => {
    //         let lvlat;
    //         move.version_group_details.forEach((ele) => {
    //             if (ele.version_group.name===version&&ele.move_learn_method.name ==='level-up')
    //                 lvlat = ele.level_learned_at;
    //         })
    //         return lvlat;
    //     })
    //     setLvl(list);
    // }

    function getMoveDesc(move) {
        const { effect_entries, flavor_text_entries } = move;
        const desc = flavor_text_entries.find(ele =>
            ele.version_group.name===version ? ele : effect_entries[0]
        )
        return desc.flavor_text;
    }

    return(
        <tbody>
            {(lvl!==null&&moves!==null) && moves.map((move,index) => {
                return(
                    <tr key={move.name}>
                        <td>{lvl[index]}</td>
                        <td>{move.name}</td>
                        <td>{move.type.name}</td>
                        <td>{move.pp}</td>
                        <td>{move.accuracy===null ? 100 : move.accuracy}</td>
                        <td>{getMoveDesc(move)}</td>
                    </tr>
                )
            })}
        </tbody>
    );
}