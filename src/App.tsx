import { useEffect, useState } from "react";
import "./App.css";
import { ElementList } from "./components/ElementList";
import { getCharacters } from "./services/api";
import type { Character } from "./types/api";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCharacters() {
      try {
        const data = await getCharacters();
        setCharacters(data.results);
      } catch {
        setError("No se pudieron cargar los personajes.");
      } finally {
        setLoading(false);
      }
    }

    loadCharacters();
  }, []);

  if (loading) {
    return <p>Cargando personajes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>Rick and Morty</h1>
      <ElementList characters={characters} />
    </main>
  );
}

export default App;