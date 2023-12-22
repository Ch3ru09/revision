function getVariablesUses() {
  return (
    "import java.util.Scanner;\n" +
    "\n" +
    "public class Variables {\n" +
    "\tpublic static void main(String[] args) {\n" +
    "\n" +
    "\t\t// as a counter\n" +
    "\t\tint index = 0;\n" +
    "\t\tindex++; // > 1\n" +
    "\t\tindex++; // > 2\n" +
    "\t\t\n" +
    "\t\t// as a reference\n" +
    "\t\tdouble final PI = 3.14159265;\n" +
    "\n" +
    "\t\t// as an object that can be used\n" +
    "\t\tScanner input = new Scanner(System.in);\n" +
    "\n" +
    "\t\t// as a value value of an user input\n" +
    "\t\tString lastName = input.nextLine();\n" +
    "\n" +
    "\t\tSystem.out.println(counter); // 2\n" +
    "\t\tSystem.out.println(PI); // 3.14159265;\n" +
    "\t\tSystem.out.println(lastName); // Liang\n" +
    "\t}\n" +
    "}"
  );
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
  return (
    "public class BuiltInDataTypes {\n" +
    "\tpublic static void main(String[] args) {\n" +
    "\t\tint age = 20;\n" +
    "\t\tfloat hourlySalary = 25.00f;\n" +
    "\t\tdouble LatitudePosition = 56.1304;\n" +
    "\t\tchar grade = 'A';\n" +
    "\n" +
    '\t\tString name = "foo";\n' +
    "\t}\n" +
    "}"
  );
}

function getVariableScopeExample() {
  return (
    "public class Scopes {\n" +
    "\tpublic static void main(String[] args) { // outer scope\n" +
    "\t\tint x = 1;\n" +
    "\n" +
    "\t\tif (true) { // inner scope\n" +
    "\t\t\tint y = 2;\n" +
    "\t\t\tSystem.out.println(x); // works, prints 1\n" +
    "\t\t\tSystem.out.println(y); // works, prints 2\n" +
    "\t\t}\n" +
    "\n" +
    "\t\tSystem.out.println(x); // works, prints 1\n" +
    "\t\tSystem.out.println(y); // error: variable not initialized (variable not in scope)\n" +
    "\t}\n" +
    "}"
  );
}

export { getVariablesUses, getFlowExamples, getDataTypeExamples, getVariableScopeExample };
