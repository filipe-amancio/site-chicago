import { Star } from "@phosphor-icons/react/dist/ssr";

/**
 * Selo da marca, preservado do SVG original.
 *
 * Regra 11.F: logo e wordmark nunca mudam sem aprovacao explicita.
 * Regra 4.8 permite SVG proprio quando ele e material de marca real
 * (nao ilustracao decorativa inventada).
 */
export function BrandBadge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" className={className}>
      <circle cx="60" cy="60" r="58" fill="#050505" stroke="#fff" strokeWidth="2" />
      <circle
        cx="60"
        cy="60"
        r="49"
        fill="none"
        stroke="#fff"
        strokeWidth="0.75"
        opacity="0.45"
      />
      <g transform="translate(14,32)">
        <Star size={12} weight="fill" fill="#ff5a2b" />
      </g>
      <g transform="translate(94,32)">
        <Star size={12} weight="fill" fill="#ff5a2b" />
      </g>
      <text x="60" y="47" textAnchor="middle" className="badge-chicago">
        CHICAGO
      </text>
      <line x1="18" y1="53" x2="102" y2="53" stroke="#fff" strokeWidth="1.4" />
      <text x="60" y="72" textAnchor="middle" className="badge-burger">
        BURGER
      </text>
      <line x1="30" y1="80" x2="90" y2="80" stroke="#fff" strokeWidth="1" />
    </svg>
  );
}

/** Assinatura tipografica ao lado do selo. */
export function BrandWord({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-sans font-semibold text-sm tracking-[0.03em] uppercase ${className}`}
    >
      Chicago<em className="not-italic text-accent">Burger</em>
    </span>
  );
}
