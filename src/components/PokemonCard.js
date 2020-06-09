import React, { Component }from "react"


export default class PokemonCard extends Component{

    state = {
        stats: []
    }

    componentDidMount = () => {
        this.getPokemonStats();
    }

    getPokemonStats = () => {
        fetch(this.props.poke)
            .then(response => response.json())
            .then(stats => this.setState({stats}))
            // .then(stats => console.log(stats.id))
    }

    showPokemonStats = () => {
        console.log("WTF")
    }

    render() {
        return (
            <div className="pokemon-card">
                <img 
                className="images"src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.stats.id}.png`} 
                alt={'our sprite'} 
                onClick={this.showPokemonStats}
                ></img>
            </div>
        )
    }
    
}