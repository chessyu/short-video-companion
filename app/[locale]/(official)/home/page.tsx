import { Scrollbar } from "@/app/components/ClientComponent/Scrollbar";
import { OverlayBackground } from "@/app/config/visuals";
import { Container, Stack } from "@mui/material";
import React from "react";

function HomePage() {
  return (
    <Stack
      sx={{
        overflow: "auto",
        backgroundImage: `url(${OverlayBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <Container
        component="div"
        maxWidth="lg"
        sx={{
          px: 2,
        }}
      >
        <Stack sx={{ height: "3000px" }}></Stack>
      </Container>
    </Stack>
  );
}

export default HomePage;
