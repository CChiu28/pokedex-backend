import React, { useState, useEffect, useRef } from "react";
import { Table } from "react-bootstrap";
import MovesList from "./MovesList";
import Pokedex from "pokedex-promise-v2";

export default function MovesTable(props) {
    const version = props.ver;
    const moveData = props.moves;
    const pokeDex = new Pokedex();
    const allMoveData = useRef([]);
    const [moves,setMoves] = useState([]);
    const listOfMoves = getMovesForVersion(version);
    let lvl = [];
    let moveInfo = [];
    sortData();

    useEffect(() => {
        (async () => {
            allMoveData.current = await pokeDex.getMovesList();
            // console.log(allMoveData)
        })();
        // setListOfMoves(getMovesForVersion(version));
        // setMoves(listOfMoves);
    },[])

    // useEffect(() => {
    //     sortData();
    // },[listOfMoves])

    function getMovesForVersion(version) {
		// versions.current.forEach(ver => {
			console.log(version)
			const data = moveData.filter(move => {
				return move.version_group_details.find(ele => ele.version_group.name === version.name)
			})
			const moves = getMovesByLevel(data,version.name);
			// console.log(moves);
			return moves;
		// })
	}

	function getMovesByLevel(moves,name) {
		const data = moves.filter(move => {
			return move.version_group_details.find(ele =>
				{ return(ele.version_group.name === name && ele.move_learn_method.name === 'level-up')}
			)
		})
		return data;
	}
    function sortData() {
        listOfMoves.sort((a,b) => {
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

    // function getLvlFromMoves() {
    //     const list = listOfMoves.map((move) => {
    //         let lvlat;
    //         move.version_group_details.forEach((ele) => {
    //             if (ele.version_group.name===version.name&&ele.move_learn_method.name ==='level-up')
    //                 lvlat = ele.level_learned_at;
    //         })
    //         return lvlat;
    //     })
    //     return list;
    // }

    // async function sortDataAndGetInfo() {
    //     // sortData();
    //     console.log('sorted',listOfMoves);
    //     lvl = getLvlFromMoves();
    //     moveInfo = await getMoveInfo();
    //     console.log('test',moveInfo)
    // }
    // function displayMoves() {
    //     sortDataAndGetInfo()
    //     // console.log(list);
    //     console.log(lvl);
    //     console.log('moveinfo',moves)
    //     return (listOfMoves.map((move,index) => {
    //         return(
    //             <tr key={move.move.name}>
    //                 <td>{lvl[index]}</td>
    //                 <td>{move.move.name}</td>
    //                 <td>{moveInfo[index]}</td>
    //                 {/* <td>{moveInfo!=null && moveInfo[index].accuracy===null ? 100 : moveInfo[index].accuracy}</td> */}
    //             </tr>
    //         )
    //         })
    //     )
    // }

    // async function getMoveInfo() {
    //     const arr = [];
    //     listOfMoves.forEach(async (move) => {
    //         let data = await pokeDex.getMoveByName(move.move.name);
    //         arr.push(data);
    //     })
    //     console.log('arr',arr)
    //     return arr;
    // }

    return(
        <Table>
            <thead>
                <tr>
                    <th>{version.name}</th>
                    <th>Move</th>
                    <th>Type</th>
                    <th>PP</th>
                    <th>Accuracy</th>
                    <th>description</th>
                </tr>
            </thead>
                {/* {displayMoves()} */}
                <MovesList version={version.name} moves={listOfMoves} />
        </Table>
    )
}