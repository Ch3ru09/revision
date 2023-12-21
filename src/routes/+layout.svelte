<script>
  import Navbar from "./../lib/Navbar.svelte";
  import "./index.css";

  import "prismjs/components/prism-java";
  import "prismjs/components/prism-python";
  import "prismjs/themes/prism-tomorrow.min.css";
  import "prismjs/plugins/autoloader/prism-autoloader";
  import "prismjs/plugins/line-numbers/prism-line-numbers";
  import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
  import "prismjs/plugins/show-language/prism-show-language";
  import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
  import "prismjs/plugins/custom-class/prism-custom-class";
  import "prismjs/plugins/keep-markup/prism-keep-markup";
  import "prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.css";
  import "prismjs/plugins/unescaped-markup/prism-unescaped-markup";
</script>

<Navbar />
<main>
  <slot />
</main>

<style>
</style>
