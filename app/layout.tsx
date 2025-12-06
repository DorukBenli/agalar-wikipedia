import type { Metadata } from "next";
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
                <a href="/" className="wiki-link">Sabancı Üni Ebedi Agalar Olaylar Ansiklopedisi</a>
              </h1>
              <nav className="flex gap-4 text-sm">
                <a href="/" className="wiki-link">Ana Sayfa</a>
                <a href="/" className="wiki-link">Olaylar</a>
              </nav>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
