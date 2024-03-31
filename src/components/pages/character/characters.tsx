import { useEffect, useState } from "react";
import Layout from "../../layout";
import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import Loader from "./loader";

const Characters = () => {
  const [loading, setloading] = useState<boolean>(true);
  useEffect(() => {}, []);

  return (
    <Layout>
      Characters
      <Loader loading={loading} onLoad={() => {}} />
    </Layout>
  );
};

export default Characters;

// const api = import.meta.env.VITE_API_URL;
