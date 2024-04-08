"use client";
import { Stack, Typography } from "@mui/material";
import MuiDialog from "../BaseComponents/MuiDialog";
import { useLoginAtom } from "@/app/atoms/login";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import {
  CheckboxElement,
  PasswordElement,
  PasswordRepeatElement,
  TextFieldElement,
} from "react-hook-form-mui";
import { useState } from "react";

export type LoginFormType = {
  userName: string;
  password: string;
  password_repeat?: string;
  remember?: boolean;
};

export type AccountLoginStatus = "login" | "create" | "forgot";

function LoginPage() {
  const { showLogin, setShowLogin } = useLoginAtom();
  const [loginStatus, setLoginStatus] = useState<AccountLoginStatus>("login");
  const t = useTranslations();
  const { control, handleSubmit, reset } = useForm<LoginFormType>({
    defaultValues: {
      userName: "",
    },
  });

  const setFormReset = () => {
    reset();
    setLoginStatus("login");
    setShowLogin(false);
  };

  const submitFormData = (data: LoginFormType) => {
    console.log("EEEEE", data);
  };

  const createAccount = () => {
    setLoginStatus("create");
  };

  const forgotPassword = () => {
    setLoginStatus("forgot");
  };

  return (
    <MuiDialog
      open={showLogin}
      title={t("AccountLogin")}
      onHandleClose={setFormReset}
      dialogProps={{
        fullWidth: true,
        PaperProps: {
          component: "form",
          noValidate: true,
          onSubmit: handleSubmit(submitFormData),
        },
      }}
      hideCloseButton
      okButtonProps={{
        fullWidth: true,
        type: "submit",
        sx: {
          borderRadius: "20px",
        },
      }}
      okText={t("Login")}
    >
      {loginStatus === "login" && (
        <Stack direction="row" spacing={0.5} mb={2}>
          <Typography variant="body2" fontWeight={500} color="text.secondary">
            {t("NewUser")}
          </Typography>
          <Typography
            variant="body2"
            color="primary.main"
            sx={{ cursor: "pointer" }}
            onClick={createAccount}
          >
            {t("CreateAnAccount")}
          </Typography>
        </Stack>
      )}

      <Stack spacing={2}>
        <TextFieldElement
          name={"userName"}
          label={t("UserName")}
          control={control}
          required
          placeholder={t("PlaceholderText", { text: t("UserName") })}
          parseError={() => t("RequiredField", { field: t("UserName") })}
        />
        <PasswordElement
          name={"password"}
          label={t("Password")}
          control={control}
          required
          validation={{
            minLength: 8,
          }}
          placeholder={t("PlaceholderText", { text: t("Password") })}
          parseError={(error) => {
            if (error.type === "required")
              return t("RequiredField", { field: t("Password") });
            if (error.type === "minLength") return t("LeastDigits");
          }}
        />
        {loginStatus !== "login" && (
          <PasswordRepeatElement
            name={"password_repeat"}
            label={t("PasswordRepeat")}
            passwordFieldName={"password"}
            control={control}
            placeholder={t("PlaceholderAgainText", {
              text: t("Password"),
            })}
            parseError={() => t("EnteredPasswordsDiffer")}
          />
        )}
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <CheckboxElement
            name={"remember"}
            label={t("Remember")}
            control={control}
          />
          {loginStatus !== "login" ? (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => setLoginStatus("login")}
            >
              {t("Back")}
            </Typography>
          ) : (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={forgotPassword}
            >
              {t("ForgotPassword")}
            </Typography>
          )}
        </Stack>
      </Stack>
    </MuiDialog>
  );
}

export default LoginPage;
