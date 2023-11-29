import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import { icons } from "./icons";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [language, setLanguage] = useState("java");
  const languages = ["Java", "Javascript", "Typescript", "Python", "Rust"];

  return (
    <nav className={styles["navbar"]}>
      <ScrollToTop />
      <Link to="/" className={styles["home"]}>
        Home
      </Link>
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
