import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./navBar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [language, setLanguage] = useState("java");

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["container"]}>
        <div className={styles["languages"]}>{language}</div>
        <div className={styles["dropdown"]}>
          <ul>
            <li onClick={() => setLanguage("Java")}>Java</li>
            <li onClick={() => setLanguage("Javascript")}>Javascript</li>
            <li onClick={() => setLanguage("Typescript")}>Typescript</li>
            <li onClick={() => setLanguage("Python")}>Python</li>
            <li onClick={() => setLanguage("Rust")}>Rust</li>
          </ul>
        </div>
      </div>
      <Router>
        <Link to={"/"} className={styles["home"]}>
          Home
        </Link>
      </Router>
    </nav>
  );
}
