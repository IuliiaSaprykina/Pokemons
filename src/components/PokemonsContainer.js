import React from "react"
import PokemonCard from "../components/PokemonCard"

export default function PokemonsContainer ({pokemons}){
    console.log(pokemons)
    // let pokemonsArr = pokemons.results
    // const showPokemons = pokemonsArr.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon}/>)
    return(
        <div className = "pokemons-container">
            {/* {showPokemons} */}
        </div>
    )
}