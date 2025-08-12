// import NavBar component to be displayed at top
import NavBar from "./NavBar";

function ContactPage() {
  return (
    <>
      <NavBar /> {/* Shows navbar at top of page  */}
      <main style={{ paddingTop: "5rem" }}> {/* Pushes this line down to prevent it from hiding under navbar  */}
        <h1>This is the Contact Page</h1>
      </main>
    </>
  );
}

export default ContactPage;