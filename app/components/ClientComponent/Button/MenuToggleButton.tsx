"use client";

import { Menu, MenuItem, Stack, StackOwnProps } from "@mui/material";
import MuiMenu from "../../BaseComponents/MuiMenu";
import MuiButtons from "../../BaseComponents/MuiButtons";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const MenuBaseComponent = () => {
  return (
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
          label: "Products",
          popoverChildren: (
            <Stack direction="row" spacing={2}>
              完善中...
            </Stack>
          ),
        },
      ]}
    />
  );
};

const MenuToggleButton = (props: StackOwnProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack {...props}>
      <MuiButtons
        iconOnly
        aria-label="menu"
        id="long-button"
        aria-controls={open ? "menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </MuiButtons>
      <Menu
        id="menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem selected onClick={handleClose}>
          Home
        </MenuItem>
        <MenuItem selected onClick={handleClose}>
          Price
        </MenuItem>
        <MenuItem selected onClick={handleClose}>
          Login
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default MenuToggleButton;
