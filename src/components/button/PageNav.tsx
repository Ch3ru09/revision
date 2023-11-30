import { Link } from "react-router-dom";
import styles from "./pageNav.module.css";

export default function PageNav({ isNext, children }: PageNavProps) {
  return (
    <Link
      to={`/${children.toLowerCase()}`}
      style={{ float: isNext ? "right" : "left" }}
      className={styles["nextButton"] + " hover-effect"}>
      <small>{isNext ? "next" : "prev"} class:</small> {children}
    </Link>
  );
}

type PageNavProps = {
  isNext: boolean;
  children: string;
};
