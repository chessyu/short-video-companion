import { Box } from "@mui/material";
import React from "react";
import LayoutHeader from "./LayoutHeader";
import LayoutContainer from "./LayoutContainer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <LayoutHeader />
      <LayoutContainer>{children}</LayoutContainer>
    </Box>
  );
}

export default Layout;
