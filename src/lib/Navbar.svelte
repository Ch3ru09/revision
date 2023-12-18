<script>
  let currentLanguage = "java";
  const languages = ["Java", "Javascript", "Typescript", "Python", "Rust"];
</script>

<nav class="navbar">
  <a href="/" class="home"> Home </a>
  <div class="container">
    <div class="languages">
      <img
        class="container-icon"
        src={icons[language.toLowerCase()]}
        alt={icons[language.toLowerCase()]}
      />
    </div>
    <div class="dropdown">
      <ul class="no-dot-ul">
        {#each languages as language}
          <li on:click={() => (currentLanguage = language)}>
            <img class="icon" src={icons[language.toLowerCase()]} />
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

<style>
</style>
