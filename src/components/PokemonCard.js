import React from "react"

export default function PokemonCard ({name, url}){
    return (
        <li className="pokemon-card">
            <h3>{name}</h3>
            <p>{url}</p>
        </li>
    )
}