/* eslint-disable react/prop-types */

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  export function DetailCard({ pokemon }) {
    return (
      <Card className="shadow-md p-4 border border-foreground rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          
          <img
            className="w-32 h-32 mb-4"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
  
          <div className="flex gap-2 mb-4">
            {pokemon.types.map((typeInfo, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded-full text-white ${
                  typeInfo.type.name === 'grass'
                    ? 'bg-green-500'
                    : typeInfo.type.name === 'fire'
                    ? 'bg-red-500'
                    : typeInfo.type.name === 'water'
                    ? 'bg-blue-500'
                    : 'bg-gray-400'
                }`}
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>
  
          <div className="mb-4">
            <h3 className="font-semibold text-lg text-center">Abilities</h3>
            <ul className="text-center">
              {pokemon.abilities.map((abilityInfo, index) => (
                <li key={index}>
                  {abilityInfo.ability.name.charAt(0).toUpperCase() + abilityInfo.ability.name.slice(1)}
                </li>
              ))}
            </ul>
          </div>
  
          <div className="w-full">
            <h3 className="font-semibold text-lg text-center mb-2">Base Stats</h3>
            <div className="text-center">
              {pokemon.stats.map((statInfo, index) => (
                <div key={index} className="">
                  <span>{statInfo.stat.name.charAt(0).toUpperCase() + statInfo.stat.name.slice(1)}:{" "+statInfo.base_stat}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  