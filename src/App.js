import Movie from "./components/Movie";

function App() {
  const movies = ["1", "2", "3"];

  return (
    <>
      {movies.map((movie) => (
        <Movie />
      ))}
    </>
  );
}

export default App;
