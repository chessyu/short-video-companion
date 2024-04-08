"use client";

import { IconButton, Menu, MenuItem, SvgIcon, Tooltip } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import { usePathname } from "@/i18n/navigation";
import { useRouter } from "next/navigation";

function TranslateButton() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = (option?: "cn" | "en") => {
    if (option) {
      router.replace(`/${option}${pathname}`);
    }
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title={t("Translate")}>
        <IconButton
          onClick={handleClick}
          disableRipple
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <SvgIcon fontSize="small">
            <GTranslateIcon />
          </SvgIcon>
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => closeMenu()}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => closeMenu("en")} selected={locale === "en"}>
          简体中文
        </MenuItem>
        <MenuItem onClick={() => closeMenu("cn")} selected={locale === "cn"}>
          English
        </MenuItem>
      </Menu>
    </>
  );
}

export default TranslateButton;
