<script lang="ts">
  import Prism from "prismjs";

  export let language: string;
  export let source: string;

  import "prismjs/components/prism-python";
  import "prismjs/components/prism-java";
  import "prismjs/components/prism-rust";

  import "prismjs/plugins/autoloader/prism-autoloader";
  import "prismjs/plugins/line-numbers/prism-line-numbers";
  import "prismjs/plugins/show-language/prism-show-language";
  import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
  import "prismjs/plugins/toolbar/prism-toolbar";
  import "prismjs/plugins/custom-class/prism-custom-class";
  import "prismjs/plugins/keep-markup/prism-keep-markup";
  import "prismjs/plugins/unescaped-markup/prism-unescaped-markup";
</script>

<pre class={`language-${language} container`}>
  <code class={`language-${language}`}>
    {@html Prism.highlight(source, Prism.languages[language], language)}
  </code>
</pre>

<style>
  .container {
    width: 80%;
    padding: 10px 30px !important;
    background-color: #333 !important;
  }

  :global(.container > code > span:first-child) {
    margin-left: -4ch;
  }
</style>
