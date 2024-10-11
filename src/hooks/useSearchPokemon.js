import { useState,useMemo, useCallback } from 'react';

export const useSearchPokemon = (pokemonData) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    if (!pokemonData || pokemonData.length === 0) return [];
    const lowercasedQuery = searchQuery.toLowerCase();

    return pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(lowercasedQuery)
    );
  }, [searchQuery, pokemonData]);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return { searchQuery, filteredData, handleSearch };
};
