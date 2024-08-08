import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

/** Components */
import { HeaderInterface } from "@/components/features/header";
import { ThemeProvider as ThemeClientProvider } from "@/app/theme-provider";
import { PageTransition, StairTransionInterface } from "@/components/global";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata: Metadata = {
  title: "Franck Brice Avom",
  description: "The portfolio of my experience in web development and a starting point for a long career as software engineer and future software architect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <HeaderInterface />
        <StairTransionInterface />
        <ThemeClientProvider   // will be set later on
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <PageTransition>
            {children}
          </PageTransition>
        </ThemeClientProvider>

      </body>
    </html>
  );
}
