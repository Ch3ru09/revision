import CodeBlock from "../components/codeblock/CodeBlock";

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
          <code>Main.java</code>
          <CodeBlock language={"java"}>{getVariablesUses()}</CodeBlock>
        </p>
        <p>
          It's usefull to point out the fact that code flow from top to bottom.
          Meaning that, for example, variables that haven't been declared above,
          won't be able to be used below.
        </p>
        <p>
          <code>Main.java</code>
          <CodeBlock language={"java"}>{getFlowExamples()}</CodeBlock>
        </p>
        <hr />
      </section>
      <section>
        <h2>Data types</h2>
      </section>
    </>
  );
}

function getVariablesUses() {
  return `import java.util.Scanner;

public class Main {
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
  return `public class Main {
  public static void main(String[] args) {
    System.out.println(x); // will error: variable not initialized
    
    int x = 1;
    
    System.out.println(x); // 1
  }
}`;
}
