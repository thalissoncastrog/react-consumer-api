import { apiClient } from "./apiClient";

import { PokemonDetails } from "../models/pokemonDetails";

export const getPokemonDetails = async (
  name: string | number
): Promise<PokemonDetails> => {
  return await apiClient<PokemonDetails>(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
};
