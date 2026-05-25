import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
  href?: string;
}

export function ShivachaIcon({ width = 44, height = 44 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rounded square background */}
      <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#logoGrad)" />

      {/* S-shaped circuit path */}
      <path
        d="M 35 30 Q 35 20, 50 20 Q 65 20, 65 32 Q 65 44, 50 44 Q 35 44, 35 56 Q 35 68, 50 68 Q 65 68, 65 78"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />

      {/* Top node circle */}
      <circle cx="35" cy="30" r="7" fill="white" opacity="0.95" />
      <circle cx="35" cy="30" r="3.5" fill="url(#logoGrad)" />

      {/* Bottom node circle */}
      <circle cx="65" cy="78" r="7" fill="white" opacity="0.95" />
      <circle cx="65" cy="78" r="3.5" fill="url(#logoGrad)" />

      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0099E6" />
          <stop offset="100%" stopColor="#00CCFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function ShivachaLogo({ size = 'md', variant = 'full', href = '/' }: LogoProps) {
  const sizes = {
    sm:  { icon: 32, name: 'text-[15px]', tag: 'text-[9px]' },
    md:  { icon: 40, name: 'text-[18px]', tag: 'text-[10px]' },
    lg:  { icon: 52, name: 'text-[22px]', tag: 'text-[11px]' },
  };
  const s = sizes[size];

  const content = (
    <div className="flex items-center gap-3 group cursor-pointer">
      {/* Icon with glow */}
      <div className="relative flex-shrink-0">
        <ShivachaIcon width={s.icon} height={s.icon} />
        <div
          className="absolute inset-0 rounded-[22%] opacity-0 group-hover:opacity-30 transition-opacity blur-md"
          style={{ background: 'linear-gradient(135deg, #0099E6, #00CCFF)' }}
        />
      </div>

      {/* Text — only in 'full' mode */}
      {variant === 'full' && (
        <div>
          <p
            className="font-black leading-none tracking-tight text-slate-900"
            style={{ fontSize: s.name.replace('text-[','').replace(']',''), fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.01em' }}
          >
            SHIVACHA
          </p>
          <p
            className="leading-none tracking-[0.18em] uppercase mt-1 font-light"
            style={{ fontSize: s.tag.replace('text-[','').replace(']',''), color: '#7A8FA6' }}
          >
            Simplifying Tech Solutions
          </p>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}
