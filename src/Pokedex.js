import React from 'react';
import Pokecard from './Pokecard';

function Pokedex(props) {
  const { pokemonList } = props;

  return (
    <div className="pokedex">
      {pokemonList.map(pokemon => (
        <Pokecard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
        />
      ))}
    </div>
  );
}

Pokedex.defaultProps = {
  pokemonList: [
    // Default list of Pokemon (same as provided in your example)
  ],
};

export default Pokedex;