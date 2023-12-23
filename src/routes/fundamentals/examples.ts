const getBoilerplate = () => {
  return (
    "public class HelloWorld {\n" +
    "\tpublic static void main(String[] args) {\n" +
    '\t\tSystem.out.println("Hello World!");\n' +
    "\t}\n" +
    "}"
  );
};

const getPythonExample = () => {
  return `print("Hello World!")`;
};

export { getBoilerplate, getPythonExample };
