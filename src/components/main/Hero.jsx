import { useState, useEffect, useCallback } from "react";
import { useFetchPokemon } from "@/hooks/useFetchPokemon";
import { useSearchPokemon } from "@/hooks/useSearchPokemon";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { DetailCard } from "./Card";
import { debounce } from "./debounce";


const Hero = () => {
  const [limit, setLimit] = useState(10);
  const [debouncedLimit, setDebouncedLimit] = useState(limit);
  const { pokemonData, loading, error } = useFetchPokemon(debouncedLimit);
  const { searchQuery, filteredData, handleSearch } = useSearchPokemon(pokemonData);


  const handleLimitChange = useCallback(debounce((value) => {
    const parsedValue = Number(value);
    if (parsedValue > 0 && parsedValue <= 151) {
      setDebouncedLimit(parsedValue);
    }
  }, 500), []);

  useEffect(() => {
    setLimit(debouncedLimit);
  }, [debouncedLimit]);

  if (loading) return <p>Loading Pokémon...</p>;
  if (error) return <p>Error fetching Pokémon: {error.message}</p>;

  return (
    <div className="w-full flex flex-col mx-auto p-4">
      <h1 className="text-center mb-4 text-4xl">Pokémon Search</h1>
      <div className="flex justify-between gap-4 w-full">
        <Input
          type="text"
          placeholder="Search Pokémon..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className=""
        />
        <div className="flex md:w-1/4 items-center">
          <Label className='md:w-1/4 w-2/4'>Limit :</Label>
          <Input
            type="number"

            placeholder="Limit"
            onChange={(e) => handleLimitChange(e.target.value)}
          />
        </div>
      </div>
      <div className="pokemon-list grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {filteredData.length ? (
          filteredData.map((pokemon) => (
            <DetailCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <p className="p-4">No Pokémon found</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
