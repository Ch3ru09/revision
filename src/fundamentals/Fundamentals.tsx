import { BrowserRouter, Link } from "react-router-dom";
import CodeBlock from "../components/codeblock/CodeBlock";
import styles from "./fundamentals.module.css";

export default function Fundamentals() {
  return (
    <main>
      <h1 className={styles["title"]}>Java Fundamentals</h1>
      <section>
        <h2 id="How-to-run">Setup</h2>
        <p>
          First, make sure that you have downloaded the Java Development Kit
          (JDK). <br />
          If you don't have it yet, downloaded it{" "}
          <a
            href="https://www.oracle.com/java/technologies/downloads/"
            target="_blank"
          >
            here
          </a>
        </p>
        <p>
          After it's downloaded, you can open your code editor or your IDE of
          choice and create a file.
        </p>
        <hr />
      </section>
      <section>
        <h2 id="How-the-code-should-be-setup">
          How the code should be written
        </h2>
        <p>
          Java is a language known to have a lot of boilerplate meaning that
          there is a lot of code that means nothing to the programmer*.
        </p>
        <small>
          *Yes, at a certain level, it does mean something, but usually, we
          could live without
        </small>
        <br />
        <br />
        <code>Main.java</code>
        <CodeBlock language="java">{boilerplate()}</CodeBlock>
        <p>
          In this case, we see the basic chunk of code needed for a java program
          to run. <br />
          This is the same code in Python:
        </p>
        <br />
        <code>HelloWorld.py</code>
        <CodeBlock language="python">{pythonExample()}</CodeBlock>
        <p>However, it has to be written so the code runs.</p>
        <hr />
      </section>
      <section>
        <h2>How to run code</h2>
        <p>
          To run the code, most code editors and IDE's will let you run the code
          bu just clicking the "run button" or by pressing "f5" (works on most
          of them).
        </p>
        <p>
          My prefered way of running code is to use the termial (see{" "}
          <Link to="/terminal">course</Link> on terminal commands)
        </p>
      </section>
    </main>
  );
}

function boilerplate() {
  return `public class Main {
    public static void main() {
      System.out.println("Hello World!");
    }
  }`;
}

function pythonExample() {
  return `print("Hello World!")`;
}

