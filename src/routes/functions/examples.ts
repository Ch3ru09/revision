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
    "\t\tSystem.out.println(result); // 40\n" +
    "\t}\n" +
    "\n" +
    "\tstatic int sum(int a, int b) {\n" +
    "\t\treturn a + b;\n" +
    "\t}\n" +
    "}\n"
  );
}

function getRustFunctionOverloadingExample() {
  return (
    "/*\n" +
    "\tRust, for example, does not support function/method overloading, \n" +
    "\ttherefore, to make two functions that do the same thing with\n" +
    "\tdifferent parameters, you have to declare different functions.\n" +
    "*/\n" +
    "\n" +
    "// adding i32\n" +
    "fn add_i32(a: i32, b: i32) -> i32 {\n" +
    "\ta + b\n" +
    "}\n" +
    "\n" +
    "// adding u32\n" +
    "fn add_u32(a: u32, b: u32) -> u32 {\n" +
    "\ta + b\n" +
    "}\n" +
    "\n" +
    "fn main() {\n" +
    "\tlet x1: i32 = -1;\n" +
    "\tlet y1: i32 = -2;\n" +
    "\tlet x2: u32 = 1;\n" +
    "\tlet y2: u32 = 2;\n" +
    "\n" +
    '\tprintln!("{}", add_i32(x1, y1)); // -3\n' +
    '\tprintln!("{}", add_u32(x2, y2)); // 3\n' +
    "}\n" +
    "\n" +
    "// If you try to define a function with the same name twice, rust will\n" +
    '// throw the error "error[E0428]: the name `add` is defined multiple times"'
  );
}

function getJavaFunctionOverloadingExample() {
  return (
    "public class Overloading {\n" +
    "\tpublic static void main(String[] args) {\n" +
    "\t\tint x1 = 1;\n" +
    "\t\tint y1 = 2;\n" +
    "\t\tdouble x2 = 0.1;\n" +
    "\t\tdouble y2 = 0.2;\n" +
    "\n" +
    "\t\t// Using the same function with different types will result in different results\n" +
    "\t\tSystem.out.println(add(x1, y1)); // 3\n" +
    "\t\tSystem.out.println(add(x2, y2)); // 0.30000000000000004 <- actual value\n" +
    "\t\tSystem.out.println(add(x2)); // 0.2\n" +
    "\t}\n" +
    "\n" +
    "\tstatic int add(int a, int b) {\n" +
    "\t\treturn a + b;\n" +
    "\t}\n" +
    "\n" +
    "\tstatic double add(double a, double b) {\n" +
    "\t\treturn a + b;\n" +
    "\t}\n" +
    "\n" +
    "\t// Badly named method only for the sake of the example\n" +
    "\tstatic double add(double a) {\n" +
    "\t\treturn a + a;\n" +
    "\t}\n" +
    "}\n"
  );
}

function getModifiedRustFunctionOverloadingExample() {
  return (
    "// For example, here, the function has a generic\n// type that generalizes to types that can be added\n" +
    "fn add<T: std::ops::Add<Output = T>>(a: T, b: T) -> T {\n" +
    "\ta + b\n" +
    "}\n" +
    "\n" +
    "fn main() {\n" +
    "\tlet x1: i32 = -1;\n" +
    "\tlet y1: i32 = -2;\n" +
    "\tlet x2: u32 = 1;\n" +
    "\tlet y2: u32 = 2;\n" +
    "\n" +
    '\tprintln!("{}", add(x1, y1)); // -3\n' +
    '\tprintln!("{}", add(x2, y2)); // 3\n' +
    "}"
  );
}

export {
  getMethodsExamples,
  getWherePutFunction,
  getArgumentsExamples,
  getRustFunctionOverloadingExample,
  getJavaFunctionOverloadingExample,
  getModifiedRustFunctionOverloadingExample
};
