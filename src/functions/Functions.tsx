import PageNav from "../components/button/PageNav";

export default function Functions() {
  return (
    <>
      <nav>
        <PageNav isNext={false}>Variables</PageNav>
        <PageNav isNext={true}>Classes</PageNav>
      </nav>
    </>
  );
}

