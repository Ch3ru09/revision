import { redirect } from "react-router-dom";
import styles from "./home.module.css";

export default function Home() {
  const pages = ["variables", "functions", "classes", "control-flow"];

  return (
    <>
      <header>
        <h1 className={styles["title"]}>
          What don't you <br /> understand?
        </h1>
      </header>
      <main className={styles["grid"]}>
        {pages.map((page) => {
          return (
            <div onClick={() => redirect(page)} className={styles["grid-item"]}>
              {page}
            </div>
          );
        })}
      </main>
    </>
  );
}
