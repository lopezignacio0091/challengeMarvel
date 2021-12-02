import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Progress = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        padding: "1rem",
        marginLeft: "50%",
        marginTop: "30vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Progress;
