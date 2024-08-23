import { NavLink } from "react-router-dom";

import styles from "./Card.module.css";

export interface CardType {
  // id: number;
  pokemonName: string;
  url: string;
}

interface CardProps {
  card: CardType;
}

export function Card({ card }: CardProps) {
  return (
    <NavLink to={`/${card.pokemonName}`} title="Detalhes do Pokemon">
      <div className={styles.card}>
        <div className={styles.description}>
          <h3>
            <b>{card.pokemonName}</b>
          </h3>
        </div>
      </div>
    </NavLink>
  );
}
