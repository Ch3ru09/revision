<script>
  import { icons } from "$lib/assets/icons";

  const LanguageSpecificPages = [
    "Fundamentals",
    "Variables",
    "Functions",
    "Classes",
    "Control-flow"
  ];

  const AllLanguagePages = ["Terminal"];

  const sections = ["Language Specific", "All Languages"];
</script>

<header>
  <h1 class="title not-selectable">
    What don't you <br /> understand?
  </h1>

  {#each [LanguageSpecificPages, AllLanguagePages] as e, i}
    <section class="pages-container">
      <h2 class="home-h2">{sections[i]}</h2>
      <div class={"grid"}>
        {#each e as page}
          <a href={`/${page.toLowerCase()}`} class="grid-item hover-effect">
            <img src={icons[page.toLowerCase()]} alt={page.toLowerCase()} />

            <h3 class="page-title">{page}</h3>
          </a>
        {/each}
      </div>
    </section>
  {/each}
</header>

<style>
  .title {
    position: relative;
    font-size: 8rem;
    text-align: center;
    background: linear-gradient(135deg, rgba(34, 193, 195, 1) 0%, rgba(210, 253, 45, 1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (width < 900px) {
    .title {
      font-size: 5rem;
    }
  }

  .pages-container {
    position: relative;

    width: 80%;
    margin: auto;
    padding: 50px;

    border-radius: 40px;
    background-color: color-mix(in srgb, var(--primary-color) 80%, transparent);
    box-shadow: 0px 0px 20px 50px color-mix(in srgb, var(--primary-color) 80%, transparent);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
  }

  @media (width <= 1400px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (width <= 1000px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @property --pos1 {
    syntax: "<percentage>";
    initial-value: 0%;
    inherits: false;
  }

  @property --pos2 {
    syntax: "<percentage>";
    initial-value: 0%;
    inherits: false;
  }

  .grid-item {
    aspect-ratio: 1;
    height: auto;
    width: auto;
    border: solid 5px #15ffaa;
    border-radius: 40px;
    display: grid;
    place-items: center;
    text-decoration: none;

    --c1: #15ffaa;
    --c2: #e8e8e888;
  }

  .grid-item > img {
    width: 50%;
  }

  .grid-item > h3 {
    color: black;
  }

  .grid-item:hover > h3 {
    filter: invert(100%);
  }

  .page-title {
    text-align: center;
    font-size: 1.5rem;
  }
</style>
