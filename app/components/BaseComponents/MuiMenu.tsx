"use client";

import {
  Popover,
  Stack,
  StackOwnProps,
  Typography,
  TypographyOwnProps,
} from "@mui/material";
import React, { ReactNode, useState } from "react";
import NavigationLink from "./NavigationLink";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export type RouterType = {
  href?: string | import("url").UrlObject;
  label: ReactNode;
  linkProps?: typeof Link;
  typographyProps?: TypographyOwnProps;
  popover?: boolean;
  popoverChildren?: ReactNode;
};

export type MuiMenuPropsType = {
  router: RouterType[];
  mode?: "vertical" | "horizontal";
  stackProps?: StackOwnProps;
};

function MuiMenu(props: MuiMenuPropsType) {
  const { router, mode = "horizontal", stackProps } = props;
  const MODE = mode === "horizontal";

  return (
    <Stack
      sx={{ gap: 4, color: "text.secondary", alignItems: "center" }}
      direction={MODE ? "row" : "column"}
      {...stackProps}
    >
      {router.map((item, index) => (
        <React.Fragment key={index}>
          {item.popover ? (
            <ButtonPopover index={index} {...item} />
          ) : (
            <NavigationMenuItemButton {...item} />
          )}
        </React.Fragment>
      ))}
    </Stack>
  );
}

export default MuiMenu;

function ButtonPopover(
  props: Omit<RouterType, "href" | "linkProps"> & { index: number }
) {
  const { label, index, typographyProps, popoverChildren } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const t = useTranslations();

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Typography
        variant="body1"
        align="center"
        {...typographyProps}
        sx={{
          cursor: "pointer",
          ...typographyProps?.sx,
        }}
        aria-owns={open ? "mouse-over-popover-" + index : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
      >
        {t(label)}
      </Typography>
      <Popover
        id={"mouse-over-popover-" + index}
        slotProps={{
          paper: {
            sx: {
              borderRadius: "20px",
              p: 4,
            },
            elevation: 8,
          },
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        TransitionProps={{
          onMouseLeave: handlePopoverClose,
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {popoverChildren}
      </Popover>
    </>
  );
}

function NavigationMenuItemButton(props: RouterType) {
  const { label, typographyProps, href, linkProps } = props;
  const t = useTranslations();
  return (
    <>
      {href ? (
        <NavigationLink {...linkProps} href={href!}>
          <Typography
            variant="body1"
            align="center"
            {...typographyProps}
            sx={{
              cursor: "pointer",
              ...typographyProps?.sx,
            }}
          >
            {t(label)}
          </Typography>
        </NavigationLink>
      ) : (
        <Typography
          variant="body1"
          align="center"
          {...typographyProps}
          sx={{
            cursor: "pointer",
            ...typographyProps?.sx,
          }}
        >
          {t(label)}
        </Typography>
      )}
    </>
  );
}
