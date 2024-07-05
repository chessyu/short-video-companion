"use client";

import { IconButton, SvgIcon, Tooltip, useColorScheme } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useTranslations } from "use-intl";

function ToggleThemeButton() {
  const { mode, setMode } = useColorScheme();
  const t = useTranslations();

  return (
    <Tooltip title={t("ChangeTheme")}>
      <IconButton onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        <SvgIcon fontSize="small">
          {mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
        </SvgIcon>
      </IconButton>
    </Tooltip>
  );
}

export default ToggleThemeButton;
