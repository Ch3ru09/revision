import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <header>
        <h1 className={styles["title"]}>
          What don't you <br /> understand?
        </h1>
      </header>
      <main className={styles["grid"]}></main>
    </>
  );
}
