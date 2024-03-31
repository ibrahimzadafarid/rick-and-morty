import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/home";
import Characters from "../components/pages/character/characters";
import ErrorPage from "../components/pages/errors";
import CharNotFound from "../components/pages/character/notfound";
import EpNotFound from "../components/pages/episode/notfound";
import Episodes from "../components/pages/episode/episodes";
import LocNotFound from "../components/pages/location/notfound";
import Locations from "../components/pages/location/locations";
import Routes from "./routes";
import FavNotFound from "../components/pages/favorite/notfound";
import Favorites from "../components/pages/favorite/favorites";

const appRouter = createBrowserRouter([
  {
    path: Routes.home,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: Routes.characters,
    errorElement: <CharNotFound />,
    element: <Characters />,
  },
  {
    path: Routes.episodes,
    errorElement: <EpNotFound />,
    element: <Episodes />,
  },
  {
    path: Routes.locations,
    errorElement: <LocNotFound />,
    element: <Locations />,
  },
  {
    path: Routes.favorites,
    errorElement: <FavNotFound />,
    element: <Favorites />,
  },
]);

export default appRouter;
