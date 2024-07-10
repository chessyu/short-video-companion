import { LoadingButton, LoadingButtonOwnProps } from "@mui/lab";
import {
  Button,
  ButtonBaseOwnProps,
  ButtonProps,
  IconButton,
  IconButtonOwnProps,
} from "@mui/material";
import { omit } from "ramda";

export type MuiButtonsProps = ButtonBaseOwnProps &
  ButtonProps &
  IconButtonOwnProps &
  LoadingButtonOwnProps & {
    iconOnly?: boolean;
  };

function MuiButtons(props: MuiButtonsProps) {
  const { loading, iconOnly } = props;

  if (typeof loading === "boolean") {
    return <LoadingButton {...props} />;
  }
  if (typeof iconOnly === "boolean") {
    return <IconButton {...omit(["iconOnly"], props)} />;
  }
  return <Button {...props} />;
}

export default MuiButtons;
