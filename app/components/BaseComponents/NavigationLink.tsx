"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { useTheme } from "@mui/material";

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;
  const theme = useTheme();

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      style={{
        textDecoration: "none",
        paddingBottom: "5px",
        color: isActive
          ? theme.palette.primary.main
          : theme.palette.text.secondary,
        borderBottom: isActive ? `2px solid ${theme.palette.primary.main}` : "",
      }}
      {...rest}
    />
  );
}
