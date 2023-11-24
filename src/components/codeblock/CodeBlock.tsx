import { ReactNode, useEffect } from "react";
import Prism from "prismjs";

export default function CodeBlock({ language, children }: CodeBlockProps) {
  useEffect(() => {
    Prism.highlightAll(true);
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
}

type CodeBlockProps = {
  language: string;
  children: ReactNode;
};
