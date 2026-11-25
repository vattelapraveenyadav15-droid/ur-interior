type P = { className?: string; size?: number };

const base = (size = 18) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: "false" as const,
});

export const HouseIcon = ({ size = 15, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5.5 9.5V20a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1V9.5" />
  </svg>
);

export const ArrowUpRight = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const ArrowRight = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const MenuIcon = ({ size = 20, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);

export const CloseIcon = ({ size = 20, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const PhoneIcon = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
  </svg>
);

export const MailIcon = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

export const PinIcon = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const ClockIcon = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const StarIcon = ({ size = 14, className }: P) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5 6.1 20.6l1.2-6.5L2.5 9.5l6.6-.9z" />
  </svg>
);

export const PlusIcon = ({ size = 14, className }: P) => (
  <svg {...base(size)} className={className} strokeWidth={2}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const WhatsAppIcon = ({ size = 22, className }: P) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.9.53 3.68 1.46 5.2L2 22l5.1-1.6a9.86 9.86 0 0 0 4.94 1.32c5.44 0 9.84-4.4 9.84-9.84S17.48 2 12.04 2Zm5.74 13.9c-.24.68-1.4 1.3-1.94 1.34-.54.06-1.05.1-1.8-.16a13.4 13.4 0 0 1-4.06-2.6 11 11 0 0 1-2.24-3.2c-.24-.52-.3-1.05-.24-1.5.06-.42.4-.96.66-1.22.24-.24.44-.3.66-.3h.48c.16 0 .36-.02.56.4.2.44.7 1.7.76 1.82.06.12.1.26.02.42-.08.16-.16.26-.3.42l-.3.34c-.1.12-.22.24-.1.46.12.22.54.9 1.16 1.46.8.72 1.44.94 1.66 1.04.16.08.32.06.44-.06.14-.14.5-.58.64-.78.14-.2.28-.16.46-.1.18.06 1.34.64 1.56.76.24.12.38.18.44.28.06.1.06.62-.18 1.28Z" />
  </svg>
);

/* service icons */
export const ServiceIcon = ({
  name,
  size = 24,
}: {
  name: string;
  size?: number;
}) => {
  const icons: Record<string, React.ReactNode> = {
    kitchen: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M4 11h16M9 7v4M15 7v4" />
        <path d="M8 15h8" />
      </>
    ),
    wardrobe: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M12 3v18M9.5 9h.01M14.5 9h.01" />
      </>
    ),
    sofa: (
      <>
        <path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
        <path d="M6 11a2 2 0 0 0-2 2v3h16v-3a2 2 0 0 0-2-2Z" />
        <path d="M7 16v3M17 16v3" />
      </>
    ),
    lamp: (
      <>
        <path d="M8 3h8l2 7H6Z" />
        <path d="M12 10v9M9 21h6" />
      </>
    ),
    building: (
      <>
        <path d="M3 21h18" />
        <path d="M6 21V6l6-3 6 3v15" />
        <path d="M10 9h.01M14 9h.01M10 13h.01M14 13h.01M10 21v-3h4v3" />
      </>
    ),
    ruler: (
      <>
        <path d="m3 15 6-6 6 6-6 6Z" />
        <path d="m8 10 2 2M11 13l2 2" />
        <path d="m13.5 8.5 2.5-2.5 6 6-2.5 2.5" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {icons[name]}
    </svg>
  );
};
