import {
  Button,
  Dialog,
  DialogActions,
  DialogActionsProps,
  DialogContent,
  DialogContentProps,
  DialogProps,
  DialogTitle,
  DialogTitleProps,
  Stack,
  StackProps,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { PropsWithChildren } from "react";
import MuiButtons, { MuiButtonsProps } from "./MuiButtons";
import { useBoolean } from "ahooks";

export type MuiDialogPropsType = PropsWithChildren<DialogProps> & {
  onHandleOk?: () => void;
  onHandleClose: () => void;
  title?: React.ReactNode;
  okText?: React.ReactNode;
  closeText?: React.ReactNode;
  hideDialogAction?: boolean;
  hideCloseButton?: boolean;
  dialogProps?: Omit<DialogProps, "open">;
  dialogTitleProps?: DialogTitleProps;
  dialogContentProps?: DialogContentProps;
  dialogActionsProps?: DialogActionsProps;
  okButtonProps?: MuiButtonsProps;
};

function MuiDialog(props: MuiDialogPropsType) {
  const {
    title,
    open,
    onHandleOk,
    onHandleClose,
    children,
    okText,
    closeText,
    hideDialogAction,
    hideCloseButton,
    dialogProps,
    dialogTitleProps,
    dialogContentProps,
    dialogActionsProps,
    okButtonProps,
  } = props;
  const t = useTranslations();
  const [isLoading] = useBoolean(false);

  const handleOk = () => {
    onHandleOk?.();
    onHandleOk && onHandleClose();
  };

  return (
    <Dialog
      sx={{
        ".MuiDialog-paper": {
          borderRadius: "16px",
        },
      }}
      {...dialogProps}
      open={open}
      onClose={onHandleClose}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle id="alert-dialog-title" {...dialogTitleProps}>
        {title ?? t("DefaultTile")}
      </DialogTitle>
      <DialogContent
        sx={{
          padding: "20px 24px !important",
        }}
        {...dialogContentProps}
      >
        {children}
      </DialogContent>
      {!hideDialogAction && (
        <DialogActions
          sx={{
            px: 3,
            pb: 2,
          }}
          {...dialogActionsProps}
        >
          <MuiButtons
            variant="contained"
            loading={false}
            onClick={handleOk}
            {...okButtonProps}
          >
            {okText ?? t("OkButton")}
          </MuiButtons>
          {!hideCloseButton && (
            <MuiButtons onClick={onHandleClose} autoFocus>
              {closeText ?? t("CloseButton")}
            </MuiButtons>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
}

export default MuiDialog;
