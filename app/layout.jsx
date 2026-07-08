import { Sora, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata = {
  title: "Yazan Adanouf — Senior Frontend Developer",
  description:
    "Fintech frontend developer and technical lead. Banking platforms, real-time dashboards, and serverless KYC pipelines.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${plexSans.variable} ${plexMono.variable} bg-slate-950 text-slate-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
