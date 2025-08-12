// import NavBar component to be displayed at top
import NavBar from "./NavBar";

function AboutPage() {
  return (
    <>
      <NavBar />
      <main style={{ paddingTop: "4rem" }}>
        <h1>This is the About Page</h1>
      </main>
    </>
  );
}

export default AboutPage;