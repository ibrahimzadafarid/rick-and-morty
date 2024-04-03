import { useEffect, useState } from "react";
import { LocationModel } from "../../../types/location";
import Layout from "../../layout";
import { getAllLocations } from "../../../services/locations";
import Loader from "../character/loader";
import LocationCard from "./LocationCard";

const Locations = () => {
  const [locations, setCharacters] = useState<LocationModel[]>([]);
  const [page, setPage] = useState<number | null>(1);
  const [loading, setloading] = useState<boolean>(true);
  useEffect(() => {
    getCharacters();
  }, []);

  async function getCharacters() {
    if (page == null) return;
    setloading(true);
    const result = await getAllLocations(page);
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
        {locations.map((location, index) => (
          <LocationCard key={location.name} {...location} />
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

export default Locations;
