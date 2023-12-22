const getBoilerplate = () => {
  return (
    "public class HelloWorld {\n" +
    "  public static void main(String[] args) {\n" +
    '    System.out.println("Hello World!");\n' +
    "  }\n" +
    "}"
  );
};

const getPythonExample = () => {
  return `print("Hello World!")`;
};

export { getBoilerplate, getPythonExample };
