import { readFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt =
  "TechToJob — Comunidad de desarrolladores y empresas tech en español";

// Sora autoalojada como TTF (satori no acepta woff2). Pesos que usa la imagen.
const fontData = {
  400: readFileSync(path.join(process.cwd(), "src/fonts/Sora-400.ttf")),
  700: readFileSync(path.join(process.cwd(), "src/fonts/Sora-700.ttf")),
  800: readFileSync(path.join(process.cwd(), "src/fonts/Sora-800.ttf")),
};

export default function OpenGraphImage() {
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
              borderRadius: 24,
              background: "#84c0bf",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              fontWeight: 800,
            }}
          >
            T
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
          Comunidad tech para desarrolladores y empresas
        </div>
        <div
          style={{ fontSize: 32, fontWeight: 400, color: "#84c0bf", marginTop: 28 }}
        >
          Comparte tu perfil · Encuentra talento · Consigue una oportunidad real
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Sora", data: fontData[400], weight: 400, style: "normal" },
        { name: "Sora", data: fontData[700], weight: 700, style: "normal" },
        { name: "Sora", data: fontData[800], weight: 800, style: "normal" },
      ],
    }
  );
}