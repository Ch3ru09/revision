function getMethodsExamples() {
  return (
    "public class Methods {\n" +
    "\tpublic static void main(String[] args) {\n" +
    "\t\tint x = 10;\n" +
    "\t\tint y = 3;\n" +
    "\t\tint z = 21;\n" +
    "\n" +
    "\t\tSystem.out.println(sum(x, y)); // 13\n" +
    "\t\t// a method can be reused\n" +
    "\t\tSystem.out.println(sum(y, z)); // 24\n" +
    "\t}\n" +
    "\n" +
    "\tstatic int sum(int a, int b) {\n" +
    "\t\treturn a + b;\n" +
    "\t}\n" +
    "}\n"
  );
}

function getWherePutFunction() {
  return (
    "public class Where {\n" +
    "\tpublic static void main(String[] args) {\n" +
    "\t\t// not here\n" +
    "\t}\n" +
    "\n" +
    "\t// here\n" +
    "}\n"
  );
}

function getArgumentsExamples() {
  return (
    "public class Arguments {\n" +
    "\tpublic static void main(String[] args) {\n" +
    "\t\tint result = sum(13, 27);\n" +
    "\n" +
    "\t\tSystem.out.println(sum); // 40\n" +
    "\t}\n" +
    "\n" +
    "\tstatic int sum(int a, int b) {\n" +
    "\t\treturn a + b;\n" +
    "\t}\n" +
    "}\n"
  );
}

export { getMethodsExamples, getWherePutFunction, getArgumentsExamples };
