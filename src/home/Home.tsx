import { useNavigate } from "react-router-dom";
import { Suspense } from "react";

import Loading from "../components/loading/Loading";
// import CodeBlock from "../components/codeblock/CodeBlock";
import { icons } from "./icons";
import useScrollPosition from "../components/hooks/useScrollPosition";

import styles from "./home.module.css";

export default function Home() {
  const navigate = useNavigate();
  const titlePos = useScrollPosition(0.5);

  const LanguageSpecificPages = [
    "Fundamentals",
    "Variables",
    "Functions",
    "Classes",
    "Control-flow",
  ];

  const AllLanguagePages = ["Terminal"];

  const sections = ["Language Specific", "All Languages"];

  return (
    <>
      {/* <div style={{ display: "none" }}>
        <CodeBlock language="java">preloader</CodeBlock>
      </div> */}

      <header
        className={styles["title-container"]}
        style={{
          translate: `0 ${titlePos}px`,
          opacity: 1 - titlePos * 0.004,
        }}>
        <h1 className={styles["title"] + " not-selectable"}>
          What don't you <br /> understand?
        </h1>
      </header>

      {[LanguageSpecificPages, AllLanguagePages].map((e, i) => {
        return (
          <section className={styles["pages-container"]}>
            <h2 className="home-h2">{sections[i]}</h2>
            <div className={styles["grid"]} key={i}>
              {e.map((page, i) => {
                return (
                  <div
                    onClick={() => navigate(page.toLowerCase())}
                    className={styles["grid-item"] + " hover-effect"}
                    key={i}>
                    <Suspense fallback={<Loading />}>
                      <img src={icons[page.toLowerCase()]} />
                    </Suspense>
                    <h3 className={styles["page-title"]}>{page}</h3>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}
