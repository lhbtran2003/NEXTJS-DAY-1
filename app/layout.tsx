import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Head from "next/head"; // Import Head component
import "@fortawesome/fontawesome-free/css/all.min.css";

const inter = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Rikkei Academy",
  description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <Head>
        <Head>
          <link
            href="https://learn.rikkeiacademy.com/favicon.ico.png"
          />
        </Head>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
