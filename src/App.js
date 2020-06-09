import React, { Component } from 'react';
import PokemonsContainer from './components/PokemonsContainer'
import './App.css';

const pokemonsUrl = "https://pokeapi.co/api/v2/pokemon?limit=151/"

class App extends Component {


  state = {
    pokemons: []
  }

  componentDidMount() {
    this.getPokemons();
  }


  getPokemons = () => {
    
    fetch(pokemonsUrl)
     .then(response => response.json())
     .then(pokemons => this.setState({pokemons: pokemons.results}))
  }
  



  render(){
    return (
      <div className="App">
        <PokemonsContainer pokemons={this.state.pokemons}/>
      </div>
    )
  }
}

export default App;

