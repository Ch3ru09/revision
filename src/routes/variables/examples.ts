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
  return (
    "public class ControlFlow {\n" +
    "\tpublic static void main(String[] args) {\n" +
    "\t\tSystem.out.println(x); // will error: variable not initialized\n" +
    "\n" +
    "\t\tint x = 1;\n" +
    "\n" +
    "\t\tSystem.out.println(x); // 1\n" +
    "\t}\n" +
    "}\n"
  );
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

export { getVariablesUses, getFlowExamples, getDataTypeExamples, getVariableScopeExample };
