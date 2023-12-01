import { Link } from "react-router-dom";

import CodeBlock from "../components/codeblock/CodeBlock";
import PageNav from "../components/button/PageNav";

export default function Variables() {
  return (
    <>
      <h1>Variables</h1>
      <section>
        <h2>Introduction</h2>
        <p>
          A variable is like a container used to keep a value and to be able to
          use it later. <br />
          There are many ways to use them, here's some of them:
        </p>
        <p>
          <code>Variables.java</code>
          <CodeBlock language={"java"}>{getVariablesUses()}</CodeBlock>
        </p>
        <p>
          It's usefull to point out the fact that code flow from top to bottom.
          Meaning that, for example, variables that haven't been declared above,
          won't be able to be used below.
        </p>
        <p>
          <code>ControlFlow.java</code>
          <CodeBlock language={"java"}>{getFlowExamples()}</CodeBlock>
        </p>
        <p>
          <h3>Note:</h3>
          <p>
            To set a variable, you have to first put the type of the variable (
            <var>int</var>), then the name of the variable (<var>x</var>), an
            equal sign (<var>=</var>), and then its value (<var>1</var>).
          </p>
          <h3>Note 2:</h3>
          <p>
            A variable do not need to have a value on initialization, the value
            can be set after. e.g. <var>let x;</var>
          </p>
        </p>
        <hr />
      </section>
      <section>
        <h2>Data types</h2>
        <p>
          In java, as you might have noticed above, when declaring a variable,
          you have to declare it with the Data type that the variable will
          contain. <br />
          Here's some examples of data types that are often used.
        </p>
        <p>
          <code>BuiltInDataTypes.java</code>
          <CodeBlock language="java">{getDataTypeExamples()}</CodeBlock>
        </p>
        <p>
          Notice that <var>String</var> is capitalized while the others aren't.
          This is because a <var>String</var> isn't a{" "}
          <Link to={"data-types#primitives"}>primitive data type</Link>. <br />
          This is because, if compared to the english language, it's not a base
          letter, one of the 26, but a word.
        </p>
        <hr />
      </section>
      <section>
        <h2>Variable Scope</h2>
        <p>
          A scope, in Java, is a chunk of code enclosed by curly braces{" "}
          <var>{"{ ... }"}</var>. We can see code as enclosures of scopes.
        </p>
        <p>
          Variables in Java are only referenceable within the scope they are
          declared in.
        </p>
        <p>
          <code>Scopes.java</code>
          <CodeBlock language="java">{getVariableScopeExample()}</CodeBlock>
        </p>
      </section>
      <nav>
        <PageNav isNext={false}>Fundamentals</PageNav>
        <PageNav isNext={true}>Functions</PageNav>
      </nav>
    </>
  );
}

function getVariablesUses() {
  return `import java.util.Scanner;

public class Variables {
  public static void main(String[] args) {

    // as a counter
    int index = 0;
    index++; // > 1
    index++; // > 2
    
    // as a reference
    double final PI = 3.14159265;

    // as an object that can be used
    Scanner input = new Scanner(System.in);

    // as a value value of an user input
    String lastName = input.nextLine();

    System.out.println(counter); // 2
    System.out.println(PI); // 3.14159265;
    System.out.println(lastName); // Liang
  }
}`;
}

function getFlowExamples() {
  return `public class ControlFlow {
  public static void main(String[] args) {
    System.out.println(x); // will error: variable not initialized
    
    int x = 1;
    
    System.out.println(x); // 1
  }
}`;
}

function getDataTypeExamples() {
  return `public class BuiltInDataTypes {
  public static void main(String[] args) {
    int age = 20;
    float hourlySalary = 25.00f;
    double LatitudePosition = 56.1304;
    char grade = 'A';

    String name = "foo";
  }
}`;
}

function getVariableScopeExample() {
  return `public class Scopes {
  public static void main(String[] args) { // outer scope
    int x = 1;

    if (true) { // inner scope
      int y = 2;
      System.out.println(x); // works, prints 1
      System.out.println(y); // works, prints 2
    }
      
    System.out.println(x); // works, prints 1
    System.out.println(y); // error: variable not initialized (variable not in scope)
  }
}`;
}

