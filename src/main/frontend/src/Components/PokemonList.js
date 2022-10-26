import React, { useCallback, useEffect, useState } from "react";
import '../styles/PokemonList.css'
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function PokemonList(props) {
    // const gen = props.gen;
    const [list,setList] = useState([]);

    useEffect(() => {
        const pokemon = props.pokemon.results;
        console.log(pokemon)
        const gen = props.gen;
        const offset = getOffsetLimitByGeneration(gen);
        setList(pokemon.slice(offset[0],offset[1]));
    },[])

    function getOffsetLimitByGeneration(gen) {
        switch (gen) {
            case "generation-i":
                return [0,151];
            case "generation-ii":
                return [151,251];
            case "generation-iii":
                return [251,386];
            case "generation-iv":
                return [386,493];
            case "generation-v":
                return [493,649];
            case "generation-vi":
                return [649,721];
            case "generation-vii":
                return [721,809];
            case "generation-viii":
                return [809,905];
            default:
                return [0,0];
        }
    }

    const handleClick = useCallback(e => {
        props.getPokemon(e.target.textContent);
    },[])

    return(
        <>
            <DropdownButton id="dropdown" title={props.gen}>
                {list.map((poke) => {
                    return (
                        <Dropdown.Item key={poke.name} onClick={handleClick}>{poke.name}</Dropdown.Item>
                    )
                })}
            </DropdownButton>
        </>
    );
}