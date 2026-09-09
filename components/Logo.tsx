import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /** "light" = white text (for dark nav/footer), "dark" = navy text (for light bg) */
  variant?: "light" | "dark";
  /** Height of the icon in px */
  size?: number;
  /** Whether to wrap in an <a> link to home */
  linked?: boolean;
}

export default function Logo({ variant = "light", size = 52, linked = true }: LogoProps) {
  const isLight = variant === "light";

  const logoEl = (
    <div className="flex items-center gap-3 select-none">
      {/* Icon */}
      <div className="flex-shrink-0">
        <Image
          src="/logo-icon.png"
          alt="Metro Appliance Services logo icon"
          width={size}
          height={size}
          className="object-contain"
          priority
        />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        {/* METRO — large, bold, navy or white */}
        <span
          style={{
            fontFamily: "var(--font-barlow-condensed), 'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: `${Math.round(size * 0.62)}px`,
            letterSpacing: "0.04em",
            color: isLight ? "#FFFFFF" : "#1B2A4A",
            lineHeight: 1,
          }}
        >
          METRO
        </span>
        {/* APPLIANCE SERVICES — smaller, orange, tracked */}
        <span
          style={{
            fontFamily: "var(--font-barlow-condensed), 'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: `${Math.round(size * 0.40)}px`,
            letterSpacing: "0.14em",
            color: "#F5821F",
            lineHeight: 1,
            marginTop: `${Math.round(size * 0.04)}px`,
          }}
        >
          APPLIANCE SERVICES
        </span>
      </div>
    </div>
  );

  if (!linked) return logoEl;

  return (
    <Link href="/" aria-label="Metro Appliance Services — Home">
      {logoEl}
    </Link>
  );
}
