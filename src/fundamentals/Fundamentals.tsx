import { Link } from "react-router-dom";
import CodeBlock from "../components/codeblock/CodeBlock";
import styles from "./fundamentals.module.css";

import runFileImage from "./assets/runfile.png";
import PageNav from "../components/button/PageNav";

export default function Fundamentals() {
  return (
    <>
      <h1>Java Fundamentals</h1>
      <section>
        <h2 id="How-to-run">Setup</h2>
        <p>
          First, make sure that you have downloaded the Java Development Kit
          (JDK). <br />
          If you don't have it yet, download it{" "}
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
        <h2 id="How-the-code-should-be-setup">How the code works</h2>
        <p>
          Java is a language known to have a lot of boilerplate meaning that
          there is a lot of code that means nothing to the programmer*.
        </p>
        <small>
          *Yes, at a certain level, it does mean something, but usually, we
          could live without
        </small>

        <p>
          <code>HelloWorld.java</code>
          <CodeBlock language="java">{getBoilerplate()}</CodeBlock>
        </p>
        <p>
          In this case, we see the basic chunk of code needed for a java program
          to run. Note that the file name corresponds to the name of the class.
          Otherwise, the code will not run. <br />
          This is the same code in Python:
        </p>
        <p>
          <code>HelloWorld.py</code>
          <CodeBlock language="python">{getPythonExample()}</CodeBlock>
        </p>
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
          <Link to="/terminal">course</Link> on terminal commands).
        </p>
        <p>
          However, you can just use the IDE's built-in run button like for
          Intellij in this case.
        </p>
        <p>
          <img src={runFileImage} className={styles["runfile"]} />
        </p>
        <p>
          When this code is ran, the output in the console should be{" "}
          <CodeBlock language="txt">Hello, World!</CodeBlock>
          "Hello World" is the hello that programming students give as they
          print their first line in the console since they are entering for the
          first time into the new world that is programming. <br />
          In java, the simplest way to print something to the console is to use
          the method.
          <CodeBlock language="java">
            System.out.println(/* what is printed goes here */);
          </CodeBlock>
          Also, notice the semicolon (<var>;</var>) at the end of the line which
          is mendatory in java.
        </p>
        <p>
          Now, we can get into the basics of programming in general. Starting
          with variables.
        </p>
      </section>
      <nav>
        <PageNav isNext={true}>Variables</PageNav>
      </nav>
    </>
  );
}

function getBoilerplate() {
  return `public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`;
}

function getPythonExample() {
  return `print("Hello World!")`;
}

