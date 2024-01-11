<script>
  import CodeBlock from "$lib/CodeBlock.svelte";
  import PageNav from "$lib/PageNav.svelte";
  import {
    getDataTypeExamples,
    getFlowExamples,
    getVariableScopeExample,
    getVariablesUses
  } from "./examples";
</script>

<svelte:head>
  <title>Revision - Variables</title>
</svelte:head>

<h1>Variables</h1>
<section>
  <h2>Introduction</h2>
  <p>
    A variable is like a container used to keep a value and to be able to use it later. <br />
    There are many ways to use them, here's some of them:
  </p>
  <p>
    <code>Variables.java</code>
    <CodeBlock language="java" source={getVariablesUses()} />
  </p>
  <p>
    It's usefull to point out the fact that code flow from top to bottom. Meaning that, for example,
    variables that haven't been declared above, won't be able to be used below.
  </p>
  <p>
    <code>ControlFlow.java</code>
    <CodeBlock language="java" source={getFlowExamples()} />
  </p>

  <h3>Note:</h3>
  <p>
    To set a variable, you have to first put the type of the variable (<var>int</var>), then the
    name of the variable (<var>x</var>), an equal sign (<var>=</var>), and then its value (<var
      >1</var
    >).
  </p>
  <h3>Note 2:</h3>
  <p>
    A variable do not need to have a value on initialization, the value can be set after. e.g. <var
      >let x;</var
    >
  </p>
  <h3>Note 3:</h3>
  <p>
    When naming a variable, the only allowed characters are numbers and letters. The first character
    must be a letter.
  </p>

  <hr />
</section>
<section>
  <h2>Data types</h2>
  <p>
    In java, as you might have noticed above, when declaring a variable, you have to declare it with
    the Data type that the variable will contain. <br />
    Here's some examples of data types that are often used.
  </p>
  <p>
    <code>BuiltInDataTypes.java</code>
    <CodeBlock language="java" source={getDataTypeExamples()} />
  </p>
  <p>
    Notice that <var>String</var> is capitalized while the others aren't. This is because a
    <var>String</var>
    isn't a{" "}
    <a class="standalone" href="data-types#primitives">primitive data type</a>. <br />
    This is because, if compared to the english language, it's not a base letter, one of the 26, but
    a word.
  </p>
  <hr />
</section>
<section>
  <h2>Variable Scope</h2>
  <p>
    A scope, in Java, is a chunk of code enclosed by curly braces{" "}
    <var>{"{ ... }"}</var>. We can see code as enclosures of scopes.
  </p>
  <p>Variables in Java are only referenceable within the scope they are declared in.</p>
  <p>
    <code>Scopes.java</code>
    <CodeBlock language="java" source={getVariableScopeExample()} />
  </p>
</section>
<nav>
  <PageNav isNext={false} location="fundamentals">Fundamentals</PageNav>
  <PageNav isNext={true} location="control-flow">Control Flow and Loops</PageNav>
</nav>
