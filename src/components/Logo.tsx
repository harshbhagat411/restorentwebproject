interface LogoProps {
  variant?: 'gradient' | 'monochrome' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ variant = 'gradient', size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const gradientId = `logo-gradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizes[size]} ${className}`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>

      <path
        d="M50 10 L60 35 L65 30 L70 40 L62 42 L70 60 Q70 75 50 85 Q30 75 30 60 L38 42 L30 40 L35 30 L40 35 Z"
        fill={
          variant === 'gradient'
            ? `url(#${gradientId})`
            : variant === 'light'
            ? 'white'
            : '#1f2937'
        }
        stroke={variant === 'gradient' ? 'none' : variant === 'light' ? 'white' : '#1f2937'}
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <ellipse
        cx="50"
        cy="60"
        rx="12"
        ry="15"
        fill={variant === 'gradient' ? `url(#${gradientId})` : 'transparent'}
        opacity="0.3"
      />
    </svg>
  );
}
