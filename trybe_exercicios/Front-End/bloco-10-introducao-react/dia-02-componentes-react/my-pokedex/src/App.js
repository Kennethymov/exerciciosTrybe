import logo from './logo.svg';
import './App.css';
import InfoPokemons from './Pokedex'
import pokemons from './data';
import React from 'react';

class App extends React.Component {
  render() {
    return <div>
        <InfoPokemons pokemons={pokemons}/>
      </div>
    }
  }

export default App;
