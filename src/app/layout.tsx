import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DiceTheHeator",
  description: "Artist and Music Producer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='icon' href='/dices.jpg'></link>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <div className='fixed bottom-0 left-0 right-0 z-50'>
            <MusicPlayer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
