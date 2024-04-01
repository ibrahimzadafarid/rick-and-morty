import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";

interface LoaderProps {
  loading: boolean;
  isDisabled: boolean;
  onLoad: () => void;
}

const Loader = ({ loading, isDisabled, onLoad }: LoaderProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "48px" }}>
      <LoadingButton
        loadingIndicator={<CircularProgress color="primary" size={16} />}
        onClick={onLoad}
        sx={{ margin: "auto" }}
        loading={loading}
        variant="outlined"
        disabled={isDisabled}
      >
        Load More
      </LoadingButton>
    </div>
  );
};

export default Loader;
