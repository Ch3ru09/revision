<script>
  import Prism from "prismjs";

  import CodeBlock from "$lib/CodeBlock.svelte";
  import PageNav from "$lib/PageNav.svelte";

  import compilingImage from "./assets/compiling.png";
  import runFileImage from "./assets/runfile.png";
  import { getBoilerplate, getPythonExample } from "./examples";
</script>

<svelte:head>
  <title>Revision - Fundamentals</title>
</svelte:head>

<h1>Java Fundamentals</h1>
<section>
  <h2 id="How-to-run">Setup</h2>
  <p>
    First, make sure that you have downloaded the Java Development Kit (JDK). <br />
    If you don't have it yet, download it{" "}
    <a href="https://www.oracle.com/java/technologies/downloads/" target="_blank"> here </a>
  </p>
  <p>
    After it's downloaded, you can open your code editor or your IDE of choice and create a file.
  </p>
  <hr />
</section>
<section>
  <h2 id="How-the-code-should-be-setup">How the code works</h2>
  <p>
    Java is a language known to have a lot of boilerplate meaning that there is a lot of code that
    means nothing to the programmer*.
  </p>
  <small>
    *Yes, at a certain level, it does mean something, but usually, we could live without
  </small>

  <p>
    <code>HelloWorld.java</code>
    <CodeBlock language="java" source={getBoilerplate()} />
  </p>
  <p>
    In this case, we see the basic chunk of code needed for a java program to run. Note that the
    file name corresponds to the name of the class. Otherwise, the code will not run. <br />
    This is the same code in Python:
  </p>
  <p>
    <code>HelloWorld.py</code>
    <CodeBlock language="python" source={getPythonExample()} />
  </p>
  <p>However, it has to be written so the code runs.</p>
  <hr />
</section>
<section>
  <h2>How to run code</h2>
  <p>
    To run the code, most code editors and IDE's will let you run the code bu just clicking the "run
    button" or by pressing "f5" (works on most of them).
  </p>
  <p>
    My prefered way of running code is to use the termial (see{" "}
    <a href="/terminal">course</a> on terminal commands).
  </p>
  <p>However, you can just use the IDE's built-in run button like for Intellij in this case.</p>
  <p>
    <img src={runFileImage} alt="run file" class="runfile" />
  </p>
  <p>
    When this code is ran, the output in the console should be{" "}
    {@html Prism.highlight("Hello, World!", Prism.languages["plain"], "plain")}
    "Hello World" is the hello that programming students give as they print their first line in the console
    since they are entering for the first time into the new world that is programming.
    <br />
    In java, the simplest way to print something to the console is to use the method.
    <CodeBlock
      language="java"
      source="System.out.println(/* what need to be printed goes here */);"
    />
    Also, notice the semicolon (<var>;</var>) at the end of the line which is mendatory in java.
  </p>
  <hr />
</section>
<section>
  <h2>What happens?</h2>
  <p>Magic. That's all.</p>
  <p></p>
  <p>Now, we can get into the basics of programming in general. Starting with variables.</p>
  <p>In all seriousness, the code is ran as follows:</p>
  <p style="display: flex; flex-direction: column;">
    <img src={compilingImage} class="runfile" alt="compilingImage" />
    <small class="runfile">Source: Fireship.io</small>
  </p>
  <p>
    The source code written in Java first passes through the Java compilier and get converted into
    into a byte code, a format that is readable by the JVM. The JVM is basically a reader tailored
    to the system it's downloaded on. So instead of having to compile for every operating system,
    you can just compile once and use the JVM to read on other systems, that's the beauty of Java.
  </p>
  <p>Now that this is said, actually time to get started with variables.</p>
</section>
<nav>
  <PageNav isNext={true} location={"variables"}>Variables</PageNav>
</nav>

<style>
  .runfile {
    width: 50%;
    margin-left: 5%;
  }
</style>
