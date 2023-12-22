<script>
  import Navbar from "./../lib/Navbar.svelte";
  import "./index.css";

  import "prismjs/themes/prism-tomorrow.min.css";
  import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
  import "prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.css";
  import "prismjs/plugins/toolbar/prism-toolbar.min.css";
</script>

<Navbar />
<main>
  <slot />
</main>

<style>
</style>
