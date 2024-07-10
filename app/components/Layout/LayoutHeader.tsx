import { Box, Container, IconButton, Stack, SvgIcon } from "@mui/material";
import React from "react";
import { TOP_NAV_HEIGHT } from "../../config";

import { LogoIcon } from "../SvgIcon";
import ToggleThemeButton from "../ClientComponent/Button/ToggleThemeButton";
import LoginButton from "../Login/LoginButton";
import TranslateButton from "../ClientComponent/Button/TranslateButton";
import MenuToggleButton, {
  MenuBaseComponent,
} from "../ClientComponent/Button/MenuToggleButton";

function LayoutHeader() {
  return (
    <Box
      component="header"
      sx={{
        backdropFilter: "blur(6px)",
        position: "fixed",
        top: 0,
        backgroundColor: "transparent",
        width: "100%",
        zIndex: 1,
      }}
    >
      <Container component="div" maxWidth="xl">
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          sx={{
            minHeight: TOP_NAV_HEIGHT,
          }}
        >
          <Stack alignItems="center" direction="row">
            <IconButton disableRipple>
              <SvgIcon fontSize="large">
                <LogoIcon />
              </SvgIcon>
            </IconButton>
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            sx={{ gap: { xs: 1, sm: 2 } }}
          >
            <Stack sx={{ display: { xs: "none", md: "block" } }}>
              <MenuBaseComponent />
            </Stack>

            <TranslateButton />
            <ToggleThemeButton />
            <LoginButton sx={{ display: { xs: "none", md: "block" } }} />
            <MenuToggleButton sx={{ display: { xs: "block", md: "none" } }} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default LayoutHeader;
