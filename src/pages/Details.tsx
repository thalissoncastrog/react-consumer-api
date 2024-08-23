import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// import { CardType } from "../components/Card";
import { getPokemonDetails } from "../api/getPokemonDetails";
import { PokemonDetails } from "../models/pokemonDetails";

export function Details() {
  const { name } = useParams<string>();
  console.log(name);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonDetails(name || "");
      setPokemonDetails({
        id: data?.id,
        name: data?.name,
        height: data?.height,
        weight: data?.weight,
        sprites: {
          front_default: data?.sprites.front_default,
        },
      });
    }
    fetchData();
  }, [name]);

  console.log(pokemonDetails);

  return (
    <div>
      <h1>Nome: {pokemonDetails?.name}</h1>
      <h2>Altura: {pokemonDetails?.height}</h2>
      <h2>Peso: {pokemonDetails?.weight}</h2>
      <img
        src={pokemonDetails?.sprites.front_default}
        alt={pokemonDetails?.name}
      />
    </div>
  );
}
