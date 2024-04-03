import { useEffect, useState } from "react";
import Layout from "../../layout";
import Loader from "./loader";
import { getAllCharacters } from "../../../services/characters";
import { CharacterModel } from "../../../types/character";
import CharacterCard from "./CharacterCard";

const Characters = () => {
  const [characters, setCharacters] = useState<CharacterModel[]>([]);
  const [page, setPage] = useState<number | null>(41);
  const [loading, setloading] = useState<boolean>(true);
  useEffect(() => {
    getCharacters();
  }, []);

  async function getCharacters() {
    if (page == null) return;
    setloading(true);
    const result = await getAllCharacters(page);
    if (result instanceof Error) {
      console.log(result.message);
    } else {
      if (page < result.info.pages) {
        setPage((page) => page! + 1);
      } else {
        setPage(null);
      }

      setCharacters((chars) => {
        return [...chars, ...result.results];
      });
    }
    setloading(false);
  }

  return (
    <Layout>
      <div>
        {characters.map((char, index) => (
          <CharacterCard key={char.name} {...char} />
        ))}
      </div>

      <Loader
        loading={loading}
        isDisabled={page == null}
        onLoad={getCharacters}
      />
    </Layout>
  );
};

export default Characters;

// const api = import.meta.env.VITE_API_URL;
