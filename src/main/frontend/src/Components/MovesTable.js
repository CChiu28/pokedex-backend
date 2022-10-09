import React, { useState, useEffect, useRef } from "react";
import { Table } from "react-bootstrap";
import Pokedex from "pokedex-promise-v2";

export default function MovesTable(props) {
    const version = props.ver;
    const moveData = props.moves;
    const pokeDex = new Pokedex();
    const allMoveData = useRef([]);
    const [moves,setMoves] = useState([]);

    useEffect(() => {
        (async () => {
            allMoveData.current = await pokeDex.getMovesList();
            console.log(allMoveData)
        })();
    },[])

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
    // function sortData(list) {
    //     list.sort((a,b) => {
    //         let lvla, lvlb;
    //         a.version_group_details.forEach((ele) => {
    //             if (ele.version_group.name===version.name&&ele.move_learn_method.name ==='level-up')
    //                 lvla = ele.level_learned_at;
    //         })
    //         b.version_group_details.forEach((ele) => {
    //             if (ele.version_group.name===version.name&&ele.move_learn_method.name ==='level-up')
    //                 lvlb = ele.level_learned_at;
    //         })
    //         if (lvla<=lvlb)
    //             return -1;
    //     })
    //     const lvl = list.map((move) => {
    //         let lvlat;
    //         move.version_group_details.forEach((ele) => {
    //             if (ele.version_group.name===version.name&&ele.move_learn_method.name ==='level-up')
    //                 lvlat = ele.level_learned_at;
    //         })
    //         return lvlat;
    //     })
    //     const getinfo = (async () => await getMoveInfo(list));
    //     const moveInfo = getinfo().then(res).then(res => {return res});
    //     return ;
    // }
    function displayMoves() {
        const list = getMovesForVersion(version);
        // const {lvl, moveInfo}= sortData(list);
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
        const lvl = list.map((move) => {
            let lvlat;
            move.version_group_details.forEach((ele) => {
                if (ele.version_group.name===version.name&&ele.move_learn_method.name ==='level-up')
                    lvlat = ele.level_learned_at;
            })
            return lvlat;
        })
        async function callBack(data) {
            await moveInfo.push(data);
        }
        const moveInfo = []
        getMoveInfo(list,callBack);
        console.log(list);
        console.log(lvl);
        console.log('moveinfo',moveInfo)
        return (list.map((move,index) => {
            return(
                <tr key={move.move.name}>
                    <td>{lvl[index]}</td>
                    <td>{move.move.name}</td>
                    <td>{moveInfo[index].pp}</td>
                    {/* <td>{moveInfo!=null && moveInfo[index].accuracy===null ? 100 : moveInfo[index].accuracy}</td> */}
                </tr>
            )
            })
        )
    }

    async function getMoveInfo(list,cb) {
        const arr = [];
        list.forEach(async (move) => {
            let data = await pokeDex.getMoveByName(move.move.name);
            await cb(data);
        })
        return arr;
    }

    return(
        <Table>
            <thead>
                <tr>
                    <th>{version.name}</th>
                    <th>Move</th>
                    <th>PP</th>
                    <th>Accuracy</th>
                    <th>description</th>
                </tr>
            </thead>
            <tbody>
                {displayMoves()}
            </tbody>
        </Table>
    )
}