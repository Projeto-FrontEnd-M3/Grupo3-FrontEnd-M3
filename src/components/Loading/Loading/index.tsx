import { Backdrop, CircularProgress } from "@mui/material";

export const Loading = () => {

  return (
    <Backdrop
      className="filterBackdrop"
      sx={{ color: "#ff577f", zIndex: 2 }}
      open={false}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
