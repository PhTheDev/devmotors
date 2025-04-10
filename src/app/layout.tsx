import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevMotors - Sua oficina especializada!",
  description: "Oficina de carros em Goiânia",
  keywords: ["oficina", "carros", "reparos", "manutenção", "venda de peças"],
  authors: [{ name: "PhTheDev", url: "https://github.com/PhTheDev/" }],
  openGraph: {
    title: "DevMotors - Sua oficina especializada!",
    description: "Oficina de carros em Goiânia",
    url: "https://github.com/PhTheDev/",
    siteName: "DevMotors",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpg`],
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
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}

        <p style={{ textAlign: "center", marginTop: 54, marginBottom: 24 }}>
          Todos os direitos reservados @{`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  );
}
