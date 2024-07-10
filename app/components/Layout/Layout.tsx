import { Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";
import LayoutHeader from "./LayoutHeader";
import LayoutContainer from "./LayoutContainer";

function Layout({ children }: PropsWithChildren) {
  return (
    <Stack
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
    </Stack>
  );
}

export default Layout;
