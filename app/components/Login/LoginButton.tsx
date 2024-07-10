"use client";
import { useLoginAtom } from "@/app/atoms/login";
import { ButtonBaseOwnProps } from "@mui/material";
import React from "react";
import { useTranslations } from "use-intl";
import MuiButtons from "../BaseComponents/MuiButtons";

function LoginButton(props: ButtonBaseOwnProps) {
  const t = useTranslations();
  const { setShowLogin } = useLoginAtom();
  return (
    <MuiButtons
      variant="text"
      color="primary"
      onClick={() => setShowLogin(true)}
      {...props}
    >
      {t("Login")}
    </MuiButtons>
  );
}

export default LoginButton;
