import React from "react";
import PokemonCard from './PokemonCard'

export default function PokemonsContainer ({pokemons}){

    const showPokemons = () => pokemons.map((pokemon, i) => (
        <li>
            <h2>{pokemon.name}</h2>
            <PokemonCard key={i} poke={pokemon.url}/>
        </li>
    ))
    
    return(
        <>
            <h2>Pokemons List</h2>
            <ul className = "pokemons-container">
                {showPokemons()}
            </ul>
        </>
    )
}