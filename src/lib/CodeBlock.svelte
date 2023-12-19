<script lang="ts">
  export let language: string;
</script>

<pre class="container">
  <code class={`language-${language}`}>
    <slot />
  </code>
</pre>

<style>
  .container {
    width: 80%;
    padding: 20px !important;
    background-color: #333 !important;
  }
</style>
