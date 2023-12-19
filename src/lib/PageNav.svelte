<script lang="ts">
  export let location: string;
  export let isNext: boolean;
</script>

<a
  href={`/${location}`}
  style={`float: ${isNext ? "right" : "left"} `}
  class={"nextButton hover-effect"}
>
  <small>{isNext ? "next" : "prev"} class:</small>
  <slot />
</a>

<style></style>
