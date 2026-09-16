import { readFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "TechToJob — Developer and tech community";

// Self-hosted Sora as TTF (satori doesn't accept woff2). Weights used in the image.
const fontData = {
  400: readFileSync(path.join(process.cwd(), "src/fonts/Sora-400.ttf")),
  700: readFileSync(path.join(process.cwd(), "src/fonts/Sora-700.ttf")),
};

// Official brand mark (negative version, teal on dark background).
const symbolSvg = readFileSync(
  path.join(process.cwd(), "public/logo-negative.svg"),
  "utf8"
);
const symbolD = symbolSvg.match(/<path[^>]*\sd="([^"]+)"/)?.[1];
const symbolFill =
  symbolSvg.match(/fill:\s*(#[0-9a-fA-F]{3,6})/)?.[1] ?? "#84c0bf";

if (!symbolD) {
  throw new Error("Could not extract the TechToJob symbol path");
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "ogImage",
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#2f3436",
          color: "#ffffff",
          fontFamily: "Sora",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              viewBox="0 0 287.52 287.53"
              width={96}
              height={96}
              style={{ display: "flex" }}
            >
              <path d={symbolD} fill={symbolFill} />
            </svg>
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -2 }}>
            TechToJob
          </div>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -2,
            marginTop: 48,
            maxWidth: 900,
          }}
        >
          {t("heading")}
        </div>
        <div
          style={{ fontSize: 32, fontWeight: 400, color: "#84c0bf", marginTop: 28 }}
        >
          {t("tagline")}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Sora", data: fontData[400], weight: 400, style: "normal" },
        { name: "Sora", data: fontData[700], weight: 700, style: "normal" },
      ],
    }
  );
}