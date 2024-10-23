import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "navbar",
  description: "modelo de barra de navegação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}
