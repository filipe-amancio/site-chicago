"use client";

import { MapPin, Clock, WhatsappLogo, InstagramLogo } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { LINKS } from "@/lib/menu-data";
import { btnPrimary, btnOutline, sectionTitle } from "@/lib/styles";

/* Sem eyebrow: orcamento da pagina ja gasto (regra 4.7). */
export function Location() {
  return (
    <section
      id="localizacao"
      className="border-t border-line-soft bg-ink-2 py-[clamp(4rem,10vw,8rem)]"
    >
      <div className="section-shell grid items-center gap-[clamp(2.5rem,6vw,4rem)] lg:grid-cols-2">
        <Reveal>
          <h2 className={sectionTitle}>
            Visite ou peça
            <br />
            até em casa.
          </h2>

          <ul className="my-8 flex flex-col gap-4">
            <li className="flex items-center gap-3 text-muted">
              <MapPin size={22} weight="fill" className="flex-none text-accent" />
              <span>{LINKS.endereco}</span>
            </li>
            <li className="flex items-center gap-3 text-muted">
              <Clock size={22} weight="fill" className="flex-none text-accent" />
              <span>
                Seg a Sex, 11h às 23h30{" "}
                <em className="not-italic">| Sáb e Dom, 18h às 23h30</em>
              </span>
            </li>
            <li className="flex items-center gap-3 text-muted">
              <WhatsappLogo size={22} weight="fill" className="flex-none text-accent" />
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener"
                className="transition-colors hover:text-white"
              >
                {LINKS.whatsappLabel}
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted">
              <InstagramLogo size={22} weight="fill" className="flex-none text-accent" />
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener"
                className="transition-colors hover:text-white"
              >
                {LINKS.instagramLabel}
              </a>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <MagneticButton href={LINKS.whatsapp} external className={btnPrimary}>
              Chamar no WhatsApp
            </MagneticButton>
            <MagneticButton href={LINKS.maps} external className={btnOutline}>
              <MapPin size={18} weight="fill" />
              Como chegar
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {/* O mapa sai da dessaturacao no hover: sinaliza que e interativo. */}
          <div
            className="aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-line-soft
                       bg-surface [filter:grayscale(0.35)_contrast(1.05)_brightness(0.9)]
                       transition-[filter] duration-500 hover:[filter:none]"
          >
            <iframe
              src={LINKS.mapsEmbed}
              title="Localização da Chicago Burger no Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
