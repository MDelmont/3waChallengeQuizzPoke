import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonDetails = ({ pokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(pokemon.url);
        setPokemonDetails(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [pokemon]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
      <p>Types: {pokemonDetails.types.map(type => type.type.name).join(', ')}</p>
      <p>Abilities: {pokemonDetails.abilities.map(ability => ability.ability.name).join(', ')}</p>

    </div>
  );
};

export default PokemonDetails;
