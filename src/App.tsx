import { Header } from "./components/Header";
import { Card } from "./components/Card";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
}
