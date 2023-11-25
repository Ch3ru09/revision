import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./codeblock.module.css";

export default function CodeBlock({ language, children }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={tomorrow}
      showLineNumbers={true}
      className={styles["container"]}
    >
      {children}
    </SyntaxHighlighter>
  );
}

type CodeBlockProps = {
  language: string;
  children: string | string[];
};

