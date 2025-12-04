import { useState } from "react";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  return (
    <>
      <h1>Joke App</h1>
      <button
        onClick={async () => {
          const response = await fetch("/api/jokes");
          const data = await response.json();
          setJokes(data);
        }}
      >
        Fetch Jokes
      </button>
      <ul>
        {jokes.map((joke: any, index: number) => (
          <li key={index}>
            {joke.joke} - {joke.author}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
