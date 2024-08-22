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
    <div className={styles.card}>
      {/* <img src={card.url} /> */}
      <div className={styles.description}>
        <h3>
          <b>{card.pokemonName}</b>
        </h3>
        <h4>{card.url}</h4>
      </div>
    </div>
  );
}
