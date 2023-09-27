import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Providers } from "./providers";

export const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next13 Auth",
  description: "by shinjith-dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} relative min-h-screen w-screen`}>
        <Providers>
          <main className="w-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
