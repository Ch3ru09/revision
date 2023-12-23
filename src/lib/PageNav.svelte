<script lang="ts">
  export let location: string;
  export let isNext: boolean;
</script>

<a
  href={`/${location}`}
  style={`float: ${isNext ? "right" : "left"} `}
  class="nextButton hover-effect"
>
  <small>{isNext ? "next" : "prev"} class:</small>
  <slot />
</a>

<style>
  .nextButton {
    text-decoration: none;
    margin: 25px 0px;
    border: solid 2px #15ffaa;
    padding: 10px 20px;
    border-radius: 10px;
    display: inline-block;
    color: #15ffaaaa;

    --c1: #15ffaa;
    --c2: transparent;
  }

  .nextButton:hover,
  .nextButton:focus {
    color: var(--primary-color);
  }

  .nextButton > small {
    color: grey;
  }

  .nextButton:hover > small,
  .nextButton:focus > small {
    color: #555;
  }
</style>
