import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetchPokemon = (limit) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const results = response.data.results;

        // Fetch detailed data for each Pokemon
        const pokemonDetails = await Promise.all(
          results.map((pokemon) => axios.get(pokemon.url))
        );
        const detailedData = pokemonDetails.map((res) => res.data);
        setPokemonData(detailedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit]);

  return { pokemonData, loading, error };
};
