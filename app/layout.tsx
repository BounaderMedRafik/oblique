import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/marketing/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oblique ━ Upgrade Your Agency Level",
  description:
    "Oblique: Your digital compass ━ We craft innovative web and app solutions that propel startups and students forward. Our modern approach blends cutting-edge design with robust development. Upgrade your digital game with Oblique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LenisProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div>
              <Navbar />
            </div>
            <div className=" font-SF">{children}</div>
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
