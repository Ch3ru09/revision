import PageNav from "../components/button/PageNav";

export default function Functions() {
  return (
    <>
      <h1>Functions (or methods)</h1>
      <section>
        <h2>Introduction</h2>
      </section>
      <nav>
        <PageNav isNext={false}>Variables</PageNav>
        <PageNav isNext={true}>Classes</PageNav>
      </nav>
    </>
  );
}

