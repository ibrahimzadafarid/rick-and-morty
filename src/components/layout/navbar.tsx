import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Routes from "../../router/routes";
import Logo from "../../assets/Logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const style: React.CSSProperties = {
    marginTop: "48px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "8px",
  };
  return (
    <div style={style}>
      <img style={{ marginRight: "350px" }} src={Logo} />
      <Button
        onClick={() => {
          navigate(Routes.home);
        }}
        variant="outlined"
        sx={{ borderRadius: "15px" }}
      >
        Home
      </Button>
      <Button
        onClick={() => {
          navigate(Routes.characters);
        }}
        variant="outlined"
        sx={{ borderRadius: "15px" }}
      >
        Characters
      </Button>
      <Button
        onClick={() => {
          navigate(Routes.locations);
        }}
        variant="outlined"
        sx={{ borderRadius: "15px" }}
      >
        Location
      </Button>
      <Button
        onClick={() => {
          navigate(Routes.episodes);
        }}
        variant="outlined"
        sx={{ borderRadius: "15px" }}
      >
        Episodes
      </Button>
      <Button
        onClick={() => {
          navigate(Routes.favorites);
        }}
        variant="outlined"
        sx={{ borderRadius: "15px" }}
      >
        Favorites
      </Button>
    </div>
  );
};

export default Navbar;
