// src/api/pokemonApi.ts
import { apiClient } from "./apiClient";
import { PokemonListResponse } from "../models/pokemonListResponse";

export const getPokemonList = async (
  limit: number = 5,
  offset: number = 0
): Promise<PokemonListResponse> => {
  return await apiClient<PokemonListResponse>(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
};
