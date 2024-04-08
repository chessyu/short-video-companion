"use client";
import { useLoginAtom } from "@/app/atoms/login";
import { Button } from "@mui/material";
import React from "react";
import { useTranslations } from "use-intl";

function LoginButton() {
  const t = useTranslations();
  const { setShowLogin } = useLoginAtom();

  return (
    <Button
      variant="outlined"
      color="primary"
      size="small"
      onClick={() => setShowLogin(true)}
    >
      {t("Login")}
    </Button>
  );
}

export default LoginButton;
