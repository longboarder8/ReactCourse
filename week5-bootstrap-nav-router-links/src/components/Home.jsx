// import NavBar component to be displayed at top
import NavBar from "./NavBar";

function HomePage() {
  return (
    <>
      <NavBar /> {/* Shows navbar at top of page  */}
      <main style={{ paddingTop: "5rem" }}> {/* Pushes this line down to prevent it from hiding under navbar  */}
        <h1>This is the Home Page</h1>
      </main>
    </>
  );
}

export default HomePage;