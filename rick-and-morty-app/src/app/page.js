import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/Card/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Rick&Morty app - AtodeKimeru</h1>
      <Card />
    </main>
  );
}
