<script lang="ts">
  export let language: string;
</script>

<pre>
  <code class={`language-${language}`}>
    <slot />
  </code>
</pre>

<style>
</style>
