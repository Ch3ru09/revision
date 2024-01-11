<script>
  import CodeBlock from "$lib/CodeBlock.svelte";
  import PageNav from "$lib/PageNav.svelte";
  import {
    getArgumentsExamples,
    getJavaFunctionOverloadingExample,
    getMethodsExamples,
    getModifiedRustFunctionOverloadingExample,
    getRustFunctionOverloadingExample,
    getWherePutFunction
  } from "./examples";
</script>

<svelte:head>
  <title>Revision - Functions</title>
</svelte:head>

<h1>Functions (or methods)</h1>
<section>
  <h2>Introduction</h2>
  <p>
    A function is a reusable chunk of code. In Java, the functions are called methods, since Java is
    a language of the Object Oriented Programming (OOP) paradigm and every function in Java is a
    method of the <a class="standalone" href="/data-types#objects">object</a>.
  </p>
  <p>
    <code>Methods.java</code>
    <CodeBlock language="java" source={getMethodsExamples()} />
  </p>
  <hr />
</section>
<section>
  <h2>Syntax</h2>
  <p>
    To declare a method, you first have to declare it in the scope of the class and not in the main
    method.
  </p>
  <p>
    <code>Where.java</code>
    <CodeBlock language="java" source={getWherePutFunction()} />
  </p>
  <p>
    The declation goes as follows: <var>accessors</var>{" "}
    <var>return type</var> <var>name(arguments)</var>{" "}
    <var> {"{ ... }"}</var>
  </p>

  <ul>
    <li>
      <var>accessors</var> : explained in details in the{" "}
      <a class="standalone" href="/classes#accessors">accessors</a> section.
    </li>
    <li>
      <var>return type</var> : the type of the data returned (
      <var>void</var> if nothing is retured).
    </li>
    <li>
      <var>name</var> : same way of naming as variables.
    </li>
    <li>
      <var>arguments</var> : look below .
    </li>
  </ul>

  <hr />
</section>
<section>
  <h2>Arguments</h2>
  <p>
    Functions (in all languages) can take in arguments. "What is an argument?" Glad you asked! An
    argument is the values that the function take in and does something with it.
  </p>
  <p>
    <code>Arguments.java</code>
    <CodeBlock language="java" source={getArgumentsExamples()} />
  </p>
  <p>
    In the example above, the two arguments are <var>a</var> and <var>b</var>, both of type
    <var>int</var>. It's important to declare the type of the arguments for the compiler to check.
  </p>
  <hr />
</section>
<section>
  <!-- make new section: Function overloading -->
  <h2>Method overloading</h2>
  <p>
    Only 2 things are hard in programming: making things work in <a
      class="standalone"
      href="https://en.wikipedia.org/wiki/Assembly_language"
      target="_blank">Assembly...</a
    > and Naming Things.
  </p>
  <p>And, thankfully, Java has method overloading to make naming methods way easier.</p>
  <p>
    <code>overloading.rs</code>
    <CodeBlock language="rust" source={getRustFunctionOverloadingExample()} />
  </p>
  <p>
    <code>Overloading.java</code>
    <CodeBlock language="java" source={getJavaFunctionOverloadingExample()} />
  </p>
  <p>
    As you can see from the examples above, method overloading is useful when one method is used
    with different types and length of arguments. <br />
    However, even if it's a useful feature, method overloading is not inherently better or an improvement.
  </p>
  <p>
    In fact, rust, one of the most loved programming languages, does not have function overloading,
    because instead of using a different function, people would generaly generalize the arguments of
    the function.
  </p>
  <p>
    <code>overloading.rs</code>
    <CodeBlock language="rust" source={getModifiedRustFunctionOverloadingExample()} />
  </p>
  <p>
    To conclude this section, use the method overloading feature that Java provides to make code
    that you feel more confortable working with.
  </p>
  <hr />
</section>
<section>
  <h2>Summary</h2>
  <p>Functions are chunk of code that can be reused as many times as needed.</p>
  <p>
    If you don't wan't to rename a method, you can use the same name with different parameters to
    overload the method. <br />
    Let's see two examples, one in rust and one in Java:
  </p>
</section>

<nav>
  <PageNav isNext={false} location="control-flow">Control Flow and Loops</PageNav>
  <PageNav isNext={true} location="classes">Classes</PageNav>
</nav>
