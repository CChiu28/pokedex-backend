import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import MovesList from "./MovesList";
import Pokedex from "pokedex-promise-v2";

export default function MovesTable(props) {
    const version = props.ver;
    const moveData = props.moves;
    const pokeDex = new Pokedex();
    const [moves,setMoves] = useState([]);
    const [lvl,setLvl] = useState([]);

    useEffect(() => {
        const list = getMovesForVersion(version);
        sortData(list);
        getLvlFromMoves(list);
        const stringifyList = JSON.stringify(list);
        // console.log(stringifyList)
        fetch(`http://localhost:8080/pokemon/moves`, {
            method: "POST",
            headers: {
                "Content-type":"application/json",
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: stringifyList
        })
        .then(res => { return res.json()})
        .then(data => setMoves(data));
        // getMoveInfo(list,moveInfo);
    },[props.moves])

    function getMovesForVersion(version) {
        const data = moveData.filter(move => {
            return move.version_group_details.find(ele => ele.version_group.name === version.name)
        })
        const moves = getMovesByLevel(data,version.name);
        return moves;
	}

	function getMovesByLevel(moves,name) {
		const data = moves.filter(move => {
			return move.version_group_details.find(ele =>
				{ return(ele.version_group.name === name && ele.move_learn_method.name === 'level-up')}
			)
		})
		return data;
	}
    function sortData(list) {
        list.sort((a,b) => {
            let lvla, lvlb;
            a.version_group_details.forEach((ele) => {
                if (ele.version_group.name===version.name&&ele.move_learn_method.name ==='level-up')
                    lvla = ele.level_learned_at;
            })
            b.version_group_details.forEach((ele) => {
                if (ele.version_group.name===version.name&&ele.move_learn_method.name ==='level-up')
                    lvlb = ele.level_learned_at;
            })
            if (lvla<=lvlb)
                return -1;
        })
        // console.log(list)
    }

    function getLvlFromMoves(list) {
        const lvls = list.map((move) => {
            let lvlat;
            move.version_group_details.forEach((ele) => {
                if (ele.version_group.name===version.name&&ele.move_learn_method.name ==='level-up')
                    lvlat = ele.level_learned_at;
            })
            return lvlat;
        })
        setLvl(lvls);
    }

    function getMoveInfo(list,moveInfo) {
        const arr = list.map(move => {
            return moveInfo.find(ele => ele.name===move.move.name);
        })
        setMoves(arr);
        console.log(list,arr);
    }

    return(
        <Table>
            <thead>
                <tr>
                    <th>{version.name}</th>
                    <th>Move</th>
                    <th>Type</th>
                    <th>Power</th>
                    <th>PP</th>
                    <th>Accuracy</th>
                    <th>Effect %</th>
                    <th>description</th>
                </tr>
            </thead>
            <MovesList version={version.name} lvl={lvl} moves={moves} />
        </Table>
    )
}