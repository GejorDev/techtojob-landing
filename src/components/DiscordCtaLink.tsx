import type { ReactNode } from "react";

const DISCORD_URL = "https://discord.gg/h9FFgKdkRd";

export default function DiscordCtaLink({
  children,
  shadow = "glow",
  className = "",
}: {
  children: ReactNode;
  shadow?: "glow" | "glow-sm";
  className?: string;
}) {
  return (
    <a
      href={DISCORD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-teal font-semibold text-ink transition hover:bg-teal-dark active:scale-[0.98] ${
        shadow === "glow-sm" ? "shadow-glow-sm" : "shadow-glow"
      } ${className}`}
    >
      {children}
    </a>
  );
}
