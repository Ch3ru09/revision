import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";

export default function Home() {
  const navigate = useNavigate();
  const pages = ["Variables", "Functions", "Classes", "Control-flow"];

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
            <div
              onClick={() => navigate(page.toLowerCase())}
              className={styles["grid-item"]}>
              <h2 className={styles["page-title"]}>{page}</h2>
            </div>
          );
        })}
      </main>
    </>
  );
}
