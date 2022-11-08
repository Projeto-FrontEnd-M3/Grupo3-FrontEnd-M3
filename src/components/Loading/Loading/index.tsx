import { Backdrop, CircularProgress } from "@mui/material";
import { useUserContext } from "../../../context/UserContext";

export const Loading = () => {
  const { loading } = useUserContext();

  return (
    <Backdrop
      className="filterBackdrop"
      sx={{ color: "var(--color-primary)", zIndex: 2 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
