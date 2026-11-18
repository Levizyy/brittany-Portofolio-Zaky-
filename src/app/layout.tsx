import type { Metadata } from "next";
import { Inter, Orbitron, Fira_Code, Sora, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const fira = Fira_Code({ subsets: ["latin"], variable: "--font-fira" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space-mono" });

export const metadata: Metadata = {
  title: "Zaky — Web Developer Pemula",
  description: "Portofolio Zaky, web developer pemula yang sedang belajar membuat website dan aplikasi web.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var t=localStorage.getItem("portfolio-theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch{}})()',
          }}
        />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} ${fira.variable} ${sora.variable} ${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}