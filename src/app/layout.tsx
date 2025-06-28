import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

/** Components */
import { HeaderInterface } from "@/components/features/header";
import { ThemeProvider as ThemeClientProvider } from "@/app/theme-provider";
import { PageTransition, StairTransionInterface } from "@/components/global";
import Footer from "@/components/features/footer";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata: Metadata = {
  title: "AVOM Brice - Full-Stack Software Engineer | React, Node.js, TypeScript Expert",
  description: "Professional portfolio of AVOM Brice, a full-stack software engineer specializing in React, Node.js, TypeScript, Next.js, and modern web technologies. Expert in SEO, accessibility, and performance optimization. View projects, experience, and get in touch for collaboration opportunities.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Web Development",
    "Mobile Development",
    "Software Engineer",
    "Cameroon Developer",
    "Frontend Developer",
    "Backend Developer",
    "SEO Expert",
    "Accessibility Specialist",
    "Performance Optimization",
    "Web Accessibility",
    "React Native Developer",
    "Flutter Developer",
    "GraphQL Developer",
    "MongoDB Developer",
    "PostgreSQL Developer"
  ],
  authors: [{ name: "AVOM Brice", url: "https://www.linkedin.com/in/avombrice/" }],
  creator: "AVOM Brice",
  publisher: "AVOM Brice",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://avombrice.com',
  },
  openGraph: {
    title: "AVOM Brice - Full-Stack Software Engineer | React, Node.js, TypeScript Expert",
    description: "Professional portfolio showcasing expertise in modern web development, mobile apps, SEO, accessibility, and performance optimization. Full-stack developer with 3+ years of experience.",
    type: "website",
    locale: "en_US",
    siteName: "AVOM Brice Portfolio",
    url: "https://avombrice.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AVOM Brice - Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AVOM Brice - Full-Stack Software Engineer",
    description: "Professional portfolio showcasing expertise in modern web development, SEO, accessibility, and performance optimization.",
    creator: "@avombrice",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Portfolio",
  other: {
    "theme-color": "#00ff99",
    "color-scheme": "light dark",
    "viewport": "width=device-width, initial-scale=1",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <meta name="application-name" content="AVOM Brice Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AVOM Brice" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#00ff99" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={jetBrainsMono.variable}>
        <ThemeClientProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeaderInterface />
          <StairTransionInterface />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </ThemeClientProvider>
      </body>
    </html>
  );
}
