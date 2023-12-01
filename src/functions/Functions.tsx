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

