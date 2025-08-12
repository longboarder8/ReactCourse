function Body(props) {
  return (
    <main className="container text-center mt-5">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </main>
  );
}

export default Body;