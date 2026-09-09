interface IconProps {
  className?: string;
  size?: number;
}

const icons: Record<string, (props: IconProps) => React.ReactElement> = {
  "refrigerator-repair": ({ className, size = 48 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Body */}
      <rect x="5" y="2" width="14" height="20" rx="1.5" />
      {/* Freezer / fridge divider */}
      <line x1="5" y1="9" x2="19" y2="9" />
      {/* Freezer handle */}
      <line x1="8" y1="4.5" x2="8" y2="7" />
      {/* Fridge handle */}
      <line x1="8" y1="12" x2="8" y2="17" />
    </svg>
  ),

  "washer-repair": ({ className, size = 48 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Body */}
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      {/* Control dots */}
      <circle cx="7" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="10" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      {/* Porthole outer */}
      <circle cx="12" cy="13.5" r="5" />
      {/* Porthole inner */}
      <circle cx="12" cy="13.5" r="2.5" />
    </svg>
  ),

  "dryer-repair": ({ className, size = 48 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Body */}
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      {/* Control dots */}
      <circle cx="7" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="10" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      {/* Drum door */}
      <circle cx="12" cy="13.5" r="5" />
      {/* Drum fins — suggest tumbling */}
      <path d="M9.5 11 Q12 13.5 9.5 16" strokeWidth="1.2" />
      <path d="M14.5 11 Q12 13.5 14.5 16" strokeWidth="1.2" />
    </svg>
  ),

  "range-oven-repair": ({ className, size = 48 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Body */}
      <rect x="2" y="3" width="20" height="19" rx="1.5" />
      {/* Cooktop surface divider */}
      <line x1="2" y1="12" x2="22" y2="12" />
      {/* Four burners */}
      <circle cx="7.5" cy="7.5" r="2" />
      <circle cx="16.5" cy="7.5" r="2" />
      <circle cx="7.5" cy="7.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="7.5" r="0.75" fill="currentColor" stroke="none" />
      {/* Oven door handle */}
      <line x1="7" y1="15" x2="17" y2="15" />
      {/* Oven window */}
      <rect x="7" y="17" width="10" height="3" rx="0.5" />
    </svg>
  ),

  "cooktop-stove-repair": ({ className, size = 48 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Cooktop surface */}
      <rect x="2" y="5" width="20" height="14" rx="1.5" />
      {/* Four burner rings */}
      <circle cx="7.5" cy="10" r="2.5" />
      <circle cx="7.5" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="10" r="2.5" />
      <circle cx="16.5" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="16" r="1.5" />
      <circle cx="7.5" cy="16" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="16" r="1.5" />
      <circle cx="16.5" cy="16" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),

  "dishwasher-repair": ({ className, size = 48 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Body */}
      <rect x="3" y="2" width="18" height="20" rx="1.5" />
      {/* Control panel */}
      <line x1="3" y1="7" x2="21" y2="7" />
      {/* Control dots */}
      <circle cx="7" cy="4.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="10" cy="4.5" r="0.75" fill="currentColor" stroke="none" />
      {/* Door handle */}
      <line x1="8" y1="9.5" x2="16" y2="9.5" />
      {/* Rack rails */}
      <line x1="6" y1="14" x2="18" y2="14" />
      <line x1="6" y1="17" x2="18" y2="17" />
      {/* Rack tines */}
      <line x1="9" y1="14" x2="9" y2="19" />
      <line x1="12" y1="14" x2="12" y2="19" />
      <line x1="15" y1="14" x2="15" y2="19" />
    </svg>
  ),

  "garbage-disposal": ({ className, size = 48 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Sink drain ring */}
      <circle cx="12" cy="7" r="5" />
      <circle cx="12" cy="7" r="2.5" />
      {/* Motor body */}
      <path d="M7 12 L7 19 Q7 20.5 8.5 20.5 L15.5 20.5 Q17 20.5 17 19 L17 12 Z" />
      {/* Center outlet */}
      <rect x="10.5" y="20.5" width="3" height="2" rx="0.5" />
      {/* Blade cross */}
      <line x1="9" y1="7" x2="15" y2="7" strokeWidth="1.2" />
      <line x1="12" y1="4.5" x2="12" y2="9.5" strokeWidth="1.2" />
    </svg>
  ),

  "dryer-vent-cleaning": ({ className, size = 48 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Vent cover frame */}
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      {/* Horizontal slats */}
      <line x1="6" y1="9" x2="18" y2="9" />
      <line x1="6" y1="12" x2="18" y2="12" />
      <line x1="6" y1="15" x2="18" y2="15" />
      {/* Airflow arrows */}
      <path d="M21 10 L23 12 L21 14" strokeWidth="1.2" />
    </svg>
  ),
};

export default function ApplianceIcon({
  slug,
  className,
  size = 48,
}: {
  slug: string;
  className?: string;
  size?: number;
}) {
  const Icon = icons[slug];
  if (!Icon) return null;
  return <Icon className={className} size={size} />;
}
