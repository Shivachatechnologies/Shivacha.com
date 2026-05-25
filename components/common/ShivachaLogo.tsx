import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
  href?: string;
  dark?: boolean;
}

export function ShivachaIcon({ width = 40, height = 40 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#lg1)" />
      <path d="M35 30Q35 20,50 20Q65 20,65 32Q65 44,50 44Q35 44,35 56Q35 68,50 68Q65 68,65 78"
        stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.95" />
      <circle cx="35" cy="30" r="7" fill="white" opacity="0.95" />
      <circle cx="35" cy="30" r="3.5" fill="url(#lg1)" />
      <circle cx="65" cy="78" r="7" fill="white" opacity="0.95" />
      <circle cx="65" cy="78" r="3.5" fill="url(#lg1)" />
      <defs>
        <linearGradient id="lg1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#006FEE" />
          <stop offset="100%" stopColor="#338EF7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function ShivachaLogo({ size = 'md', variant = 'full', href = '/', dark = false }: LogoProps) {
  const s = { sm: { icon: 30, name: 15, tag: 8.5 }, md: { icon: 36, name: 17, tag: 9.5 }, lg: { icon: 46, name: 21, tag: 11 } }[size];

  const content = (
    <div className="flex items-center gap-2.5 group cursor-pointer">
      <div className="relative flex-shrink-0">
        <ShivachaIcon width={s.icon} height={s.icon} />
        <div className="absolute inset-0 rounded-[22%] opacity-0 group-hover:opacity-25 transition-opacity blur-md"
          style={{ background: 'linear-gradient(135deg,#006FEE,#338EF7)' }} />
      </div>
      {variant === 'full' && (
        <div>
          <p style={{ fontSize: s.name, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1, color: dark ? '#fff' : '#0A0F1E' }}>
            SHIVACHA
          </p>
          <p style={{ fontSize: s.tag, letterSpacing: '0.18em', lineHeight: 1, marginTop: 3, color: dark ? 'rgba(255,255,255,0.35)' : '#8596A8', fontWeight: 400, textTransform: 'uppercase' }}>
            Technologies
          </p>
        </div>
      )}
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
