import type { Metadata, Viewport } from "next";
import { Anton, Oswald, Barlow } from "next/font/google";
import "./globals.css";

/* Fontes da marca preservadas do site original, agora servidas por
   next/font: self-hosted, sem <link> render-blocking, sem layout shift. */
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-oswald",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-barlow",
});

/* SEO preservado do index.html original (regra 11.C: migracao de SEO
   e o maior risco de um redesign). */
export const metadata: Metadata = {
  title: "Chicago Burger - American Urban Burger",
  description:
    "Chicago Burger. Smash burgers artesanais com atitude urbana americana. Peça agora ou visite nossa casa.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Chicago Burger - American Urban Burger",
    description:
      "Smash burgers artesanais com atitude urbana americana, em Vicente Pires, Brasília.",
    locale: "pt_BR",
    type: "website",
    siteName: "Chicago Burger",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${oswald.variable} ${barlow.variable}`}
    >
      <body>
        <div className="grain" aria-hidden="true" />
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
