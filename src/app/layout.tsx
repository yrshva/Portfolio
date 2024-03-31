import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { Metadata } from "next";

import theme from "../theme";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import ReactQueryClientProvider from "../components/ReactQueryClientProvider";

export const metadata: Metadata = {
  title: "Ana's Portfolio",
  description: "Web site created with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/44428bec62.js" />
      </head>
      <body style={{ margin: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ReactQueryClientProvider>
              <Header />
              <div id="root">{children}</div>
              <Footer />
            </ReactQueryClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
