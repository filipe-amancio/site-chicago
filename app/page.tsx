import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Showcase } from "@/components/Showcase";
import { Location } from "@/components/Location";
import { SiteFooter } from "@/components/SiteFooter";
import { ToTop } from "@/components/ToTop";

/**
 * Server Component: monta o layout estatico. Toda interatividade fica
 * isolada em folhas com "use client" (regra 3.A).
 *
 * Arquitetura de informacao preservada do index.html original: as ancoras
 * #sobre / #cardapio / #vitrine / #localizacao nao mudaram (regra 11.C).
 */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <About />
        <Menu />
        <Showcase />
        <Location />
      </main>
      <SiteFooter />
      <ToTop />
    </>
  );
}
