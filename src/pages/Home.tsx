import { useEffect, useState } from "react";

import { Card, CardType } from "../components/Card";
import { getPokemonList } from "../api/getPokemonList";

import styles from "./Home.module.css";

export function Home() {
  const [pokemonList, setPokemonList] = useState<CardType[]>([]);

  useEffect(() => {
    async function fetchData() {
      await getPokemonList().then((data) => {
        console.log(data);
        setPokemonList(
          data.results.map((pokemon) => {
            return {
              pokemonName: pokemon.name,
              url: pokemon.url,
            };
          })
        );
      });
    }
    fetchData();
  }, []);

  return (
    <div>
      <main className={styles.wrapper}>
        {pokemonList.map((card: CardType, index: number) => {
          return <Card key={index} card={card} />;
        })}
      </main>
    </div>
  );
}
