<script>
  import { icons } from "$lib/assets/languagesIcons/icons";
  let currentLanguage = "java";
  const languages = ["Java", "Javascript", "Typescript", "Python", "Rust"];
</script>

<nav class="navbar">
  <a href="/" class="home"> Home </a>
  <div class="container">
    <div class="languages">
      <img
        class="container-icon"
        src={icons[currentLanguage.toLowerCase()]}
        alt={icons[currentLanguage.toLowerCase()]}
      />
    </div>
    <div class="dropdown">
      <ul class="no-dot-ul">
        {#each languages as language}
          <li>
            <button on:click={() => (currentLanguage = language)}
              ><img
                class="icon"
                src={icons[language.toLowerCase()]}
                alt={icons[language.toLowerCase()]}
              /></button
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    gap: 5px;
    font-family: "Concert One";
  }

  .navbar > * {
    padding: 20px;
  }

  .container-icon {
    width: 40px;
    padding: 0;
    filter: drop-shadow(0px 0px 5px #eee);
  }

  .container {
    position: relative;
    cursor: pointer;
  }

  .container::after {
    content: "^";
    position: absolute;
    font-size: 2rem;
    bottom: 0;
    left: 50%;
    translate: -50% 35%;
    scale: 1.5 -1;
  }

  .dropdown {
    position: absolute;
    top: 110%;
    right: 0;
    padding: 0px 20px;
    scale: 0;
    transform-origin: 85% 0%;
    transition: scale 250ms ease 100ms;
    background-color: transparent;
    background-color: #eee8;
    border: solid 5px #15ffaa;
    border-radius: 10px;
    z-index: 10;
  }

  .dropdown > ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .dropdown button {
    border: none;
    background-color: transparent;
  }

  .container:hover > .dropdown {
    scale: 1;
    transform-origin: 85% 0%;
    transition: scale 250ms ease;
  }

  .no-dot-ul {
    list-style: none;
    padding: 0;
  }

  .icon {
    aspect-ratio: 1;
    width: 50px;
    height: auto;
    border-radius: 10px;
  }

  .icon:hover {
    filter: drop-shadow(0px 0px 10px #15ffaa);
    cursor: pointer;
  }

  .home {
    color: #eee;
    text-decoration: none;
    transition: color 250ms ease;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .home:hover {
    color: #888;
    transition: color 250ms ease;
  }
</style>
