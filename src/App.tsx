import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { Card, CardType } from "./components/Card";

import { getPokemonList } from "./api/getPokemonList";

import "./global.css";

import styles from "./App.module.css";

export function App() {
  const [pokemonList, setPokemonList] = useState<CardType[]>([]);

  useEffect(() => {
    getPokemonList().then((data) => {
      setPokemonList(
        data.results.map((pokemon) => {
          return {
            pokemonName: pokemon.name,
            url: pokemon.url,
          };
        })
      );
    });
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        {pokemonList.map((card: CardType) => {
          return <Card card={card} />;
        })}
      </main>
    </div>
  );
}
