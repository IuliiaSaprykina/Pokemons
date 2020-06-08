import React from "react";
import PokemonCard from './PokemonCard'

export default function PokemonsContainer ({pokemons}){
    console.log(pokemons)
    const showPokemons = pokemons.map((pokemon, i) => <PokemonCard key={i} {...pokemon}/>)
    return(
        <>
            <h2>Pokemons List</h2>
            <ul className = "pokemons-container">
                {showPokemons}
            </ul>
        </>
    )
}