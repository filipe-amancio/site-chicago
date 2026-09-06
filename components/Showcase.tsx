import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";
import { BurgerBuild } from "./BurgerBuild";
import { MagneticButton } from "./MagneticButton";
import { LINKS } from "@/lib/menu-data";
import { btnGhost, kicker, sectionTitle } from "@/lib/styles";

export function Showcase() {
  return (
    <section id="vitrine" className="py-[clamp(4rem,10vw,8rem)]">
      <div className="section-shell grid items-center gap-[clamp(2.5rem,6vw,4rem)] lg:grid-cols-2">
        <Reveal>
          {/* Eyebrow 2 de 2 na pagina (regra 4.7) */}
          <p className={`${kicker} mb-3 block`}>Direção visual</p>
          <h2 className={sectionTitle}>
            Fundo preto.
            <br />
            Luz na comida.
            <br />
            Sem enfeite.
          </h2>
          <p className="mt-5 max-w-[34rem] text-lg text-muted">
            Contraste alto, luz lateral, sombra marcada. É assim que a Chicago
            Burger aparece: no prato, na embalagem e na tela. Sem gradiente
            colorido, sem distração, o hambúrguer é a estrela.
          </p>
          <div className="mt-8">
            <MagneticButton href={LINKS.instagram} external className={btnGhost}>
              <InstagramLogo size={18} weight="fill" />
              Seguir no Instagram
            </MagneticButton>
          </div>
        </Reveal>

        {/* O lanche se monta camada a camada quando a secao entra na tela. */}
        <div className="flex justify-center">
          <BurgerBuild />
        </div>
      </div>
    </section>
  );
}
