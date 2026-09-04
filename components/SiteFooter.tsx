"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { BrandBadge, BrandWord } from "./BrandBadge";
import { LINKS, NAV_LINKS } from "@/lib/menu-data";

export function SiteFooter() {
  const reduce = useReducedMotion();
  /* Ano resolvido no cliente, como no main.js original - evita que uma
     build estatica congele o ano do rodape. */
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="border-t border-line-soft pb-6 pt-14">
      <div className="section-shell flex flex-wrap items-center justify-between gap-7 pb-10">
        <a href="#topo" className="flex items-center gap-[0.65rem]" aria-label="Chicago Burger, início">
          <BrandBadge className="h-[2.6rem] w-[2.6rem] flex-none" />
          <BrandWord />
        </a>

        <nav aria-label="Rodapé" className="flex flex-wrap gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm uppercase tracking-[0.06em] text-muted
                         transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          <SocialLink href={LINKS.instagram} label="Instagram" reduce={reduce}>
            <InstagramLogo size={20} weight="fill" />
          </SocialLink>
          <SocialLink href={LINKS.whatsapp} label="WhatsApp" reduce={reduce}>
            <WhatsappLogo size={20} weight="fill" />
          </SocialLink>
        </div>
      </div>

      <div className="section-shell flex flex-wrap justify-between gap-2 border-t border-line-soft
                      pt-6 text-sm text-muted">
        <p>&copy; {year ?? ""} Chicago Burger. American Urban Burger.</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
  reduce,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  reduce: boolean | null;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={label}
      whileHover={reduce ? undefined : { y: -3 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
      className="flex h-11 w-11 items-center justify-center rounded-full border
                 border-line-soft transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </motion.a>
  );
}
