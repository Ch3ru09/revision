import { useNavigate } from "react-router-dom";
import { Suspense } from "react";

import Loading from "../components/loading/Loading";
// import CodeBlock from "../components/codeblock/CodeBlock";
import { icons } from "./icons";
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
      {/* <div style={{ display: "none" }}>
        <CodeBlock language="java">preloader</CodeBlock>
      </div> */}

      <header className={styles["title-container"]}>
        <h1 className={styles["title"]}>
          What don't you <br /> understand?
        </h1>
      </header>

      {[LanguageSpecificPages, AllLanguagePages].map((e, i) => {
        return (
          <section className={styles["grid"]} key={i}>
            {e.map((page, i) => {
              return (
                <div
                  onClick={() => navigate(page.toLowerCase())}
                  className={styles["grid-item"] + " hover-effect"}
                  key={i}>
                  <Suspense fallback={<Loading />}>
                    <img src={icons[page.toLowerCase()]} />
                  </Suspense>
                  <h2 className={styles["page-title"] + " home-h2"}>{page}</h2>
                </div>
              );
            })}
          </section>
        );
      })}
    </>
  );
}
