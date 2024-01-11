<script>
    import CodeBlock from "$lib/CodeBlock.svelte";
    import PageNav from "$lib/PageNav.svelte";
    import { getIfExample } from "./examples";
    import Flowchart from "./if-statement.png";
</script>

<h1>Control Flow and Loops</h1>
<section>
    <!-- it's not a grammar mistake, I want it that way --> 
    <h2>Why are these?</h2>
    <p>Before going into both Control Flow statements and Loops, we first need to understand the code usually "flows" in one direction (from top to bottom).</p>
    <p>Thus, having way to "divert" the flow of the code to do specific things under specific conditions is really useful.</p>
    <hr>
</section>
<section>
    <h2>If's, if you will (Control Flow)</h2>
    <p>The "If" statement is the most basic way to run code depending on a condition.</p>
    <p>
        <code>ControlFlow.java</code>
        <CodeBlock language="java" source={getIfExample()} />
    </p>
    <p>We can view this like a flowchart of the code that goes like so:</p>
    <p>
        <img src={Flowchart} alt={"flowchart"} />
    </p>
    <p>Pretty simple stuff...</p>
    <p>
        Now let's try an example: <br>
        
    </p>
</section>

<nav>
  <PageNav isNext={false} location="variables">Variables</PageNav>
  <PageNav isNext={true} location="functions">Functions</PageNav>
</nav>
