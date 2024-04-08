"use client";

import React, { PropsWithChildren } from "react";
import { useMuiCustomTheme } from "../hooks/useMuiCustomTheme";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

function GlobalThemeProvider({ children }: PropsWithChildren) {
  const theme = useMuiCustomTheme();

  return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>;
}
export default GlobalThemeProvider;
