'use client';

import { useMediaQuery, useTheme } from "@mui/material";

export const useMediaValue = () => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.up('sm')); // 600px
    const md = useMediaQuery(theme.breakpoints.up('md')); // 900px
    const lg = useMediaQuery(theme.breakpoints.up('lg')); // 1200px
    const xl = useMediaQuery(theme.breakpoints.up('xl')); // 1536px

    return {
        currentMedia: {
            sm,
            md,
            lg,
            xl
        }
    }
}