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

export { getMethodsExamples, getWherePutFunction, getArgumentsExamples };
