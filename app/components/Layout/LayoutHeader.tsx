import { Box, Container, IconButton, Stack, SvgIcon } from "@mui/material";
import React from "react";
import { TOP_NAV_HEIGHT } from "../../config";

import { LogoIcon } from "../SvgIcon";
import ToggleThemeButton from "../ClientComponent/Button/ToggleThemeButton";
import LoginButton from "../Login/LoginButton";
import TranslateButton from "../ClientComponent/Button/TranslateButton";
import MuiMenu from "../BaseComponents/MuiMenu";

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
      <Container component="div" maxWidth="lg">
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <IconButton disableRipple>
              <SvgIcon fontSize="large">
                <LogoIcon />
              </SvgIcon>
            </IconButton>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={4}>
            <MuiMenu
              router={[
                {
                  href: "/",
                  label: "Home",
                },
                {
                  href: "/price",
                  label: "Price",
                },
                {
                  popover: true,
                  label: "Producs",
                  popoverChildren: (
                    <Stack direction="row" spacing={2}>
                      完善中...
                    </Stack>
                  ),
                },
              ]}
            />
            <TranslateButton />
            <ToggleThemeButton />
            <LoginButton />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default LayoutHeader;
