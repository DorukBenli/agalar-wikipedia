import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sabancı Üni Ebedi Agalar Olaylar Ansiklopedisi",
  description: "buraya ne yazacağımızı bulamadık",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wiki-container">
          <header className="wiki-header">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">
                <Link href="/" className="wiki-link">Sabancı Üni Ebedi Agalar Olaylar Ansiklopedisi</Link>
              </h1>
              <nav className="flex gap-4 text-sm">
                <Link href="/" className="wiki-link">Ana Sayfa</Link>
                <Link href="/" className="wiki-link">Olaylar</Link>
              </nav>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
