import CodeBlock from "../components/codeblock/CodeBlock";

export default function Variables() {
  return (
    <>
      <h1>Variables</h1>
      <section>
        <h2>Introduction</h2>
        <p>
          A variable is like a container used to keep a value and to be able to
          use it later. <br />
          There are many ways to use them, here's some of them:
          <CodeBlock language={"java"}>{getVariablesUses()}</CodeBlock>
        </p>
      </section>
      {/* <p>
        I still want to point out the fact that
        code flow from top to bottom. This means that, for example, variables
        that haven't been declared above, won't be able to
      </p> */}
    </>
  );
}

function getVariablesUses() {
  return ``;
}
