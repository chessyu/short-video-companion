"use client";
import { useLoginAtom } from "@/app/atoms/login";
import { Button, ButtonBaseOwnProps } from "@mui/material";
import React from "react";
import { useTranslations } from "use-intl";

function LoginButton(props: ButtonBaseOwnProps) {
  const t = useTranslations();
  const { setShowLogin } = useLoginAtom();

  return (
    <Button
      variant="text"
      color="primary"
      onClick={() => setShowLogin(true)}
      {...props}
    >
      {t("Login")}
    </Button>
  );
}

export default LoginButton;
