import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import JotaiProvider from "../atoms/JotaiProvider";
import { NextIntlClientProvider, useMessages } from "next-intl";
import GlobalThemeProvider from "../provider/GlobalThemeProvider";
import { WEBSITE_NAME } from "../config";
import LoginPage from "../components/Login/LoginPage";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: WEBSITE_NAME,
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <Box component="body" className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider>
            <JotaiProvider>
              <GlobalThemeProvider>
                {children}
                <LoginPage />
              </GlobalThemeProvider>
            </JotaiProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </Box>
    </html>
  );
}
