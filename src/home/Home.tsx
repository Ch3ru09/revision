import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";

export default function Home() {
  const navigate = useNavigate();
  const LanguageSpecificPages = [
    "Fundamentals",
    "Variables",
    "Functions",
    "Classes",
    "Control-flow",
  ];

  const AllLanguagePages = ["Terminal"];

  return (
    <>
      <header>
        <h1 className={styles["title"]}>
          What don't you <br /> understand?
        </h1>
      </header>
      <section className={styles["grid"]}>
        {LanguageSpecificPages.map((page, i) => {
          return (
            <div
              onClick={() => navigate(page.toLowerCase())}
              className={styles["grid-item"] + " hover-effect"}
              key={i}>
              <img src={"/pagesIcons/" + page.toLowerCase() + ".png"} />
              <h2 className={styles["page-title"] + " home-h2"}>{page}</h2>
            </div>
          );
        })}
      </section>
      <section className={styles["grid"]}>
        {AllLanguagePages.map((page, i) => {
          return (
            <div
              onClick={() => navigate(page.toLowerCase())}
              className={styles["grid-item"] + " hover-effect"}
              key={i}>
              <img src={"/pagesIcons/" + page.toLowerCase() + ".png"} />
              <h2 className={styles["page-title"] + " home-h2"}>{page}</h2>
            </div>
          );
        })}
      </section>
    </>
  );
}
