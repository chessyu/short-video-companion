import { Box, Container } from "@mui/material";
import React from "react";

function LayoutContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        pt: 10,
      }}
    >
      {children}
    </Box>
  );
}

export default LayoutContainer;
