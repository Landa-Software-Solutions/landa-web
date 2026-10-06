export function Logo() {
  return (
    <span className="flex items-center gap-2.5 text-white">
      <svg viewBox="0 0 40 36" className="h-9 w-10" aria-hidden="true">
        <defs>
          <linearGradient id="landa-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3d8bff" />
            <stop offset="1" stopColor="#1e6bff" />
          </linearGradient>
          <linearGradient id="landa-b" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7cc0ff" />
            <stop offset="1" stopColor="#3d8bff" />
          </linearGradient>
        </defs>
        <path d="M2 4 L13 13 L13 34 L2 34 Z" fill="url(#landa-a)" />
        <path d="M13 13 L26 24 L26 34 L13 34 Z" fill="url(#landa-b)" opacity="0.9" />
        <path d="M26 24 L26 2 L38 2 L38 34 L26 34 Z" fill="url(#landa-a)" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-2xl font-bold tracking-tight">Landa</span>
        <span className="mt-0.5 text-[0.65rem] font-medium tracking-wide text-white/80">
          Software Solutions LLC
        </span>
      </span>
    </span>
  );
}
