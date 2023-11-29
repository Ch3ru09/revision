import styles from "./navbar.module.css";
import { useState } from "react";
import { icons } from "./icons";

export default function Navbar() {
  const [language, setLanguage] = useState("java");
  const languages = ["Java", "Javascript", "Typescript", "Python", "Rust"];

  return (
    <nav className={styles["navbar"]}>
      <a href={"/"} className={styles["home"]}>
        Home
      </a>
      <div className={styles["container"]}>
        <div className={styles["languages"]}>
          <img
            className={styles["container-icon"]}
            src={icons[language.toLowerCase()]}
          />
        </div>
        <div className={styles["dropdown"]}>
          <ul className={styles["no-dot-ul"]}>
            {languages.map((language: string, i: number) => {
              return (
                <li onClick={() => setLanguage(language)} key={i}>
                  <img
                    className={styles["icon"]}
                    src={icons[language.toLowerCase()]}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

