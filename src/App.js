import React, { Component } from 'react';
import PokemonsContainer from "./components/PokemonsContainer"
import './App.css';

const pokemonsUrl = "https://pokeapi.co/api/v2/pokemon?limit=151"

export default class App extends Component {


  state = {
    pokemons: []
  }

  componentDidMount () {
    this.getPokemons()
  }


  getPokemons = () => {
    fetch(pokemonsUrl)
     .then(response => response.json())
     .then(pokemons => this.setState({pokemons}))
  }

  render(){
    return (
      <div className="App">
        <h1>Pokemon List</h1>
        <PokemonsContainer pokemons={this.state.pokemons}/>
      </div>
    )
  }
}

