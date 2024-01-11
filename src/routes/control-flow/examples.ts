function getIfExample() {
    return (
        "public class ControlFlow {\n" +
        "\tpublic static void main(String[] args) {\n" +
        "\t\tint age = 14;\n" +
        "\t\t\n" +
        "\t\tif (age > 18) {\n" +
        "\t\t\t// ran if age > 18\n" +
        "\t\t\tSystem.out.println(\"Can drink\");\n" +
        "\t\t} else if (age > 16) {\n" +
        "\t\t\t// ran if age > 16\n" +
        "\t\t\tSystem.out.println(\"Can enroll in the army\");\n" +
        "\t\t} else {\n" +
        "\t\t\t// what happens if none of the conditions are met\n" +
        "\t\t\tSystem.out.println(\"Too young\");\n" +
        "\t\t}\n" +
        "\n" +
        "\t\t// rest of the code\n" +
        "\t}\n" +
        "}"
    )
}

export { getIfExample }
