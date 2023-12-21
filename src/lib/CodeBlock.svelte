<script lang="ts">
  import Prism from "prismjs";

  export let language: string;
  export let source: string;
</script>

<pre class={`language-${language} container`}>
  <code class={`language-${language}`}>
    {@html Prism.highlight(source, Prism.languages[language], language)}
  </code>
</pre>

<style>
  .container {
    width: 80%;
    padding: 30px !important;
    background-color: #333 !important;
  }

  .container code span:first-child {
    margin-left: -40px;
  }
</style>
