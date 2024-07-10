import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";

function LayoutContainer({ children }: PropsWithChildren) {
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
