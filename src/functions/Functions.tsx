import { Link } from "react-router-dom";

import PageNav from "../components/button/PageNav";
import CodeBlock from "../components/codeblock/CodeBlock";

export default function Functions() {
  return (
    <>
      <h1>Functions (or methods)</h1>
      <section>
        <h2>Introduction</h2>
        <p>
          A function is a reusable chunk of code. In Java, the functions are
          called methods, since Java is a language of the Object Oriented
          Programming (OOP) paradigm and every function in Java is a method of
          the <Link to="/data-types#objects">object</Link>.
        </p>
        <p>
          <code>Methods.java</code>
          <CodeBlock language="java">{getMethodsExamples()}</CodeBlock>
        </p>
        <hr />
      </section>
      <section>
        <h2>Syntax</h2>
        <p>
          To declare a method, you first have to declare it in the scope of the
          class and not in the main method.
        </p>
        <p>
          <code>Where.java</code>
          <CodeBlock language="java">{getWherePutFunction()}</CodeBlock>
        </p>
        <p>
          The declation goes as follows: <var>accessors</var>{" "}
          <var>return type</var> <var>name(arguments)</var>{" "}
          <var> {"{ ... }"}</var>
        </p>
        <p>
          <ul>
            <li>
              <var>accessors</var> : explained in details in the{" "}
              <Link to="/classes#accessors">accessors</Link> section.
            </li>
            <li>
              <var>return type</var> : the type of the data returned (
              <var>void</var> if nothing is retured).
            </li>
            <li>
              <var>name</var> : same way of naming as variables.
            </li>
            <li>
              <var>arguments</var> :
            </li>
          </ul>
        </p>
        <hr />
      </section>
      <section>
        <h2>Arguments</h2>
        <p>
          Functions (in all languages) can take in arguments. "What is an
          argument?" Glad you asked! An argument is the values that the function
          take in and does something with it.
        </p>
        <p>
          <code>Arguments.java</code>
          <CodeBlock language="java">{getArgumentsExamples()}</CodeBlock>
        </p>
        <p>
          {" "}
          In the example above, the two arguments are <var>a</var> and{" "}
          <var>b</var>, both of type <var>int</var>. It's important to declare
          the type of the arguments for the compiler to check.
        </p>
        <hr />
      </section>

      <nav>
        <PageNav isNext={false}>Variables</PageNav>
        <PageNav isNext={true}>Classes</PageNav>
      </nav>
    </>
  );
}

function getMethodsExamples() {
  return `public class Methods {
  public static void main(String[] args) {
    int x = 10;
    int y = 3;
    int z = 21

    System.out.println(sum(x, y)); // 13
    // a method can be reused
    System.out.println(sum(y, z)); // 24
  }

  static int sum(int a, int b) {
    return a + b;
  }
}`;
}

function getWherePutFunction() {
  return `public class Where {
  public static void main(String[] args) {
    // not here
  }

  // here
}`;
}

function getArgumentsExamples() {
  return `public class Arguments {
  public static void main(String[] args) {
    int result = sum(13, 27);

    System.out.println(sum); // 40
  }

  static int sum(int a, int b) {
    return a + b;
  }
}`;
}
