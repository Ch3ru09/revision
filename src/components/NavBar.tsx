import styles from "./navBar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [language, setLanguage] = useState("java");
  const languages = ["Java", "Javascript", "Typescript", "Python", "Rust"];

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["container"]}>
        <div className={styles["languages"]}>
          <img
            className={styles["container-icon"]}
            src={`/languages/${language.toLowerCase()}.png`}
          />
        </div>
        <div className={styles["dropdown"]}>
          <ul>
            {languages.map((language: string, i: number) => {
              return (
                <li onClick={() => setLanguage(language)} key={i}>
                  <img
                    className={styles["icon"]}
                    src={`/languages/${language.toLowerCase()}.png`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <a href={"/"} className={styles["home"]}>
        Home
      </a>
    </nav>
  );
}
