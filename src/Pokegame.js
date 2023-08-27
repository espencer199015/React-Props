import React from 'react';
import Pokedex from './Pokedex';

const hand1 = []; // Initialize as needed
const isHand1Winner = true; // Initialize as needed
const hand2 = []; // Initialize as needed
const isHand2Winner = false; // Initialize as needed

function Pokegame() {
  // Logic for creating two hands and determining winners (not shown in this example)
  // You can manage states and useEffect to handle this logic.

  return (
    <div className="pokegame">
      {/* Render two Pokedex components for each hand */}
      <Pokedex pokemonList={hand1} isWinner={isHand1Winner} />
      <Pokedex pokemonList={hand2} isWinner={isHand2Winner} />
    </div>
  );
}

export default Pokegame;