
import { DarkBackgroundColor, DarkContrastText, DarkError, DarkInfo, DarkPrimary, DarkSecondary, DarkSuccess, DarkTransParentColor, DarkWarning, LightBackgroundColor, LightContrastText, LightError, LightInfo, LightPrimary, LightSecondary, LightSuccess, LightWarning, whiteTransParentColor } from "../constants";
import {
    experimental_extendTheme as extendTheme,
} from '@mui/material/styles'

export const useMuiCustomTheme = () => {
    return extendTheme({
        colorSchemes: {
            light: {
                palette: {
                    primary: {
                        main: LightPrimary,
                        contrastText: LightContrastText
                    },
                    secondary: {
                        main: LightSecondary,
                        contrastText: LightContrastText
                    },
                    info: {
                        main: LightInfo,
                        contrastText: LightContrastText
                    },
                    success: {
                        main: LightSuccess,
                        contrastText: LightContrastText
                    },
                    warning: {
                        main: LightWarning,
                        contrastText: LightContrastText
                    },
                    error: {
                        main: LightError,
                        contrastText: LightContrastText
                    },
                    background: {
                        paper: LightBackgroundColor,
                        default: whiteTransParentColor,
                    },
                }
            },
            dark: {
                palette: {
                    primary: {
                        main: DarkPrimary,
                        contrastText: DarkContrastText
                    },
                    secondary: {
                        main: DarkSecondary,
                        contrastText: DarkContrastText
                    },
                    info: {
                        main: DarkInfo,
                        contrastText: DarkContrastText
                    },
                    success: {
                        main: DarkSuccess,
                        contrastText: DarkContrastText
                    },
                    warning: {
                        main: DarkWarning,
                        contrastText: DarkContrastText
                    },
                    error: {
                        main: DarkError,
                        contrastText: LightContrastText
                    },
                    background: {
                        paper: DarkBackgroundColor,
                        default: DarkTransParentColor,
                    },
                }
            }
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: (ownerState) => ({
                        ...ownerState,
                        textTransform: "none",
                    }),
                },
            },
            MuiDialogTitle: {
                styleOverrides: {
                    root: (ownerState) => ({
                        ...ownerState,
                        padding: "16px 24px 0 24px"
                    })
                }
            },

        }
    })
}