"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { Fire, Star, WhatsappLogo } from "@phosphor-icons/react";
import { MagneticButton } from "./MagneticButton";
import { LINKS } from "@/lib/menu-data";
import { btnPrimary, btnOutline } from "@/lib/styles";

const WORD = "CHICAGO".split("");

const POSTER = "/images/hero-burger-poster.jpg";

/**
 * Gate opcional de mobile. O boomerang final ficou em 1,6 MB, leve o
 * suficiente para 4G, entao o video roda tambem no celular - e la que o
 * hero mais precisa do apelo visual. Se um dia o arquivo crescer, trocar
 * para "(max-width: 768px)" faz o mobile receber so o poster.
 */
const SKIP_VIDEO_QUERY: string | null = null;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* Comeca sem video: o poster pinta primeiro e o clipe so entra depois
     que o cliente confirma que ha permissao para movimento. Isso evita
     baixar 1,6 MB para quem pediu menos animacao e tira o video do
     caminho critico da primeira pintura. */
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const skipQuery = SKIP_VIDEO_QUERY
      ? window.matchMedia(SKIP_VIDEO_QUERY)
      : null;

    const decide = () => {
      const allowed = !motionQuery.matches && !skipQuery?.matches;
      setShowVideo(allowed);
      /* Se a preferencia mudar com o video ja montado, pausa na hora em
         vez de esperar a proxima montagem. */
      if (!allowed) videoRef.current?.pause();
    };

    decide();
    motionQuery.addEventListener("change", decide);
    skipQuery?.addEventListener("change", decide);
    return () => {
      motionQuery.removeEventListener("change", decide);
      skipQuery?.removeEventListener("change", decide);
    };
  }, []);

  /* Duracao (e atraso) zero em vez de desligar a animacao pelo `initial`.
     Motivo: useReducedMotion() retorna null no servidor e o valor real no
     cliente. Trocar o `initial` com base nele faz o HTML do SSR divergir da
     hidratacao, e o React descarta a arvore inteira e re-renderiza.
     Mantendo `initial` igual nos dois lados e zerando duracao e atraso, o
     markup casa e quem pediu menos movimento ve o estado final na hora. */
  const d = (seconds: number) => (reduce ? 0 : seconds);

  /* Parallax de saida: conteudo e fundo sobem em ritmos diferentes
     enquanto o usuario rola.
     Motivacao: profundidade - separa a camada de abertura do resto.
     Com reduce, o range colapsa em zero - e em scroll 0 os dois casos dao
     0, entao a primeira pintura tambem casa. */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], reduce ? [1, 1] : [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 80]);

  return (
    <section
      ref={ref}
      aria-label="Abertura"
      className="relative isolate flex min-h-[100dvh] flex-col items-center justify-center
                 overflow-hidden px-5 pb-16 pt-[calc(var(--header-h)+2rem)] text-center"
    >
      {/* ---------- z-0: video de fundo ---------- */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        {showVideo ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={POSTER}
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
            className="h-full w-full object-cover"
          >
            {/* WebM primeiro: menor: quem nao suporta cai no mp4. */}
            <source src="/videos/hero-burger.webm" type="video/webm" />
            <source src="/videos/hero-burger.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src={POSTER}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
      </motion.div>

      {/* ---------- z-10: overlay que protege a legibilidade ---------- */}
      <div aria-hidden="true" className="absolute inset-0 z-10 bg-black/55" />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{
          background:
            /* Escurece topo e base (onde ficam header e CTAs) e mantem o
               calor ambar da marca sem brigar com o neon do clipe. */
            "linear-gradient(180deg, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.25) 35%, rgba(5,5,5,0.45) 70%, rgba(5,5,5,0.9) 100%), radial-gradient(70% 55% at 50% 45%, rgba(255,90,43,0.14), transparent 70%)",
        }}
      />

      {/* ---------- z-20: conteudo ---------- */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 flex max-w-[54rem] flex-col items-center"
      >
        {/* Eyebrow 1 de no maximo 2 na pagina (regra 4.7) */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(0.6), ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 inline-flex items-center gap-[0.5em] rounded-full border
                     border-[rgba(255,90,43,0.45)] bg-[rgba(5,5,5,0.45)] px-[1.1em] py-[0.5em]
                     font-sans text-sm font-medium uppercase tracking-[0.2em] text-accent
                     backdrop-blur-sm"
        >
          <Fire size={16} weight="fill" />
          Smash burger urbano desde 2019
        </motion.p>

        <h1 className="flex flex-col items-center gap-[0.4rem]">
          {/* Revelacao letra a letra.
              Motivacao: narrativa - o nome da marca e o primeiro contato,
              revela-lo em sequencia constroi o momento de abertura. */}
          <span className="inline-flex items-center gap-[clamp(0.6rem,2vw,1.5rem)]">
            <motion.span
              initial={{ scale: 0, rotate: -120 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: d(0.7), delay: d(0.5), ease: [0.34, 1.56, 0.64, 1] }}
              className="flex-none text-accent"
            >
              <Star
                size={32}
                weight="fill"
                className="h-[clamp(1.1rem,3vw,2.2rem)] w-[clamp(1.1rem,3vw,2.2rem)]"
              />
            </motion.span>

            <span
              className="font-display text-3xl font-normal uppercase leading-[0.95]
                         tracking-[0.01em] [text-shadow:0_4px_28px_rgba(0,0,0,0.75)]"
              aria-label="Chicago"
            >
              {WORD.map((letter, i) => (
                <motion.span
                  key={i}
                  aria-hidden="true"
                  className="inline-block"
                  initial={{ opacity: 0, y: "0.4em", rotateX: -60 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: d(0.7),
                    delay: d(0.1 + i * 0.055),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>

            <motion.span
              initial={{ scale: 0, rotate: 120 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: d(0.7), delay: d(0.5), ease: [0.34, 1.56, 0.64, 1] }}
              className="flex-none text-accent"
            >
              <Star
                size={32}
                weight="fill"
                className="h-[clamp(1.1rem,3vw,2.2rem)] w-[clamp(1.1rem,3vw,2.2rem)]"
              />
            </motion.span>
          </span>

          {/* regua que se abre a partir do centro */}
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: d(0.9), delay: d(0.6), ease: [0.16, 1, 0.3, 1] }}
            className="my-2 h-[3px] w-[min(65%,20rem)] bg-white"
          />

          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            animate={{ opacity: 1, letterSpacing: "0.12em" }}
            transition={{ duration: d(1), delay: d(0.75), ease: [0.16, 1, 0.3, 1] }}
            className="hero-stroke font-display text-[clamp(1.6rem,1.2rem+3.5vw,3.4rem)]
                       font-normal uppercase leading-[0.95]"
          >
            BURGER
          </motion.span>

          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: d(0.9), delay: d(0.85), ease: [0.16, 1, 0.3, 1] }}
            className="mt-[0.9rem] h-[2px] w-[min(80%,28rem)]
                       bg-[linear-gradient(90deg,transparent,#fff_15%,#fff_85%,transparent)]"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(0.7), delay: d(0.95), ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-[34rem] font-body text-lg text-white/85
                     [text-shadow:0_2px_16px_rgba(0,0,0,0.8)]"
        >
          Hambúrguer artesanal com estética americana urbana. Chapa quente, carne
          100% smash e a atitude da cidade que nunca desliga.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(0.7), delay: d(1.05), ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <MagneticButton href="#cardapio" className={btnPrimary}>
            Ver cardápio
          </MagneticButton>
          <MagneticButton
            href={LINKS.whatsapp}
            external
            /* Sobre video o contorno precisa de mais corpo que sobre preto
               solido: borda mais forte + fundo escuro translucido. */
            className={`${btnOutline} border-white/45 bg-black/35 backdrop-blur-sm`}
          >
            <WhatsappLogo size={18} weight="fill" />
            Pedir no WhatsApp
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* ancora do CTA de pedido, preservada do original */}
      <span id="pedir" className="sr-only" />

      <a
        href="#sobre"
        aria-label="Rolar para baixo"
        className="absolute bottom-8 left-1/2 z-20 flex h-[42px] w-[26px] -translate-x-1/2
                   justify-center rounded-full border-[1.5px] border-white/30 pt-2"
      >
        <span className="scroll-cue-dot h-2 w-[3px] rounded-full bg-accent" />
      </a>
    </section>
  );
}
