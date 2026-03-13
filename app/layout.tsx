import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Max Solutions & Performance | Consultoria Certificada Mercado Livre",
  description: "Transformamos dados em faturamento. Consultoria especializada em crescimento e performance no Mercado Livre. Certificação oficial Mercado Ads.",
  keywords: ["consultoria mercado livre", "mercado ads", "performance", "ROI", "faturamento", "crescimento", "estratégia"],
  authors: [{ name: "Max Solutions & Performance" }],
  openGraph: {
    title: "Max Solutions & Performance",
    description: "Transformamos dados em faturamento. Consultoria Certificada Mercado Livre.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
