<script>
  import CodeBlock from "$lib/CodeBlock.svelte";
  import PageNav from "$lib/PageNav.svelte";
  import { getArgumentsExamples, getMethodsExamples, getWherePutFunction } from "./examples";
</script>

<h1>Functions (or methods)</h1>
<section>
  <h2>Introduction</h2>
  <p>
    A function is a reusable chunk of code. In Java, the functions are called methods, since Java is
    a language of the Object Oriented Programming (OOP) paradigm and every function in Java is a
    method of the <a href="/data-types#objects">object</a>.
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
      <a href="/classes#accessors">accessors</a> section.
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
  <h2>Summary</h2>
  <p>Functions are chunk of code that can be reused as many times as needed</p>
</section>

<nav>
  <PageNav isNext={false} location="variables">Variables</PageNav>
  <PageNav isNext={true} location="classes">Classes</PageNav>
</nav>
