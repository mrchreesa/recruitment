import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BRAND } from "@/lib/content";
import { shareImage } from "@/lib/seo";

export const alt = shareImage.alt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Match the site's palette in globals.css; ImageResponse cannot load its CSS.
const INK = "#14121A";
const BONE = "#FDFCF8";
const ZEST = "#C4F542";
const GRAPE = "#6D28D9";
const INK_3 = "#6B6478";

const asset = (file: string) => readFile(join(process.cwd(), "src/app/_og", file));

export default async function Image() {
  const [display, sans600, sans700, portrait] = await Promise.all([
    asset("bricolage-grotesque-latin-800-normal.woff"),
    asset("plus-jakarta-sans-latin-600-normal.woff"),
    asset("plus-jakarta-sans-latin-700-normal.woff"),
    asset("winston-mckenzie.jpg"),
  ]);
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: BONE,
          fontFamily: "Jakarta",
          fontWeight: 600,
          color: INK,
        }}
      >
        <div style={{ display: "flex", flex: 1, position: "relative", padding: "48px 56px" }}>
          <div style={{ display: "flex", flexDirection: "column", width: 680 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: ZEST,
                  border: `3px solid ${INK}`,
                  borderRadius: 18,
                }}
              >
                <svg width="60" height="60" viewBox="0 0 40 40">
                  <path
                    d="M12 24.5C11.4 18.5 11.9 13.4 14.4 11.2c1.6-1.3 3.2.9 5.6.9s4-2.2 5.6-.9c2.5 2.2 3 7.3 2.4 13.3z"
                    fill={INK}
                  />
                  <path d="M11.7 19.6h16.6v3.6H11.7z" fill="#FF6B5B" />
                  <path d="M3.5 25.2c5.2-3.4 27.8-3.4 33 0-2.8 4.6-30.2 4.6-33 0z" fill={INK} />
                </svg>
              </div>
              <div style={{ fontFamily: "Bricolage", fontWeight: 800, fontSize: 46, letterSpacing: -1.5 }}>
                {BRAND}
              </div>
            </div>

            <div
              style={{
                marginTop: 46,
                fontSize: 19,
                fontWeight: 700,
                letterSpacing: 2.5,
                color: GRAPE,
              }}
            >
              VOLUNTEER PARACHUTE POSITIONS
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: 16,
                fontFamily: "Bricolage",
                fontWeight: 800,
                fontSize: 86,
                lineHeight: 1.04,
                letterSpacing: -3.5,
              }}
            >
              <span>Land yourself</span>
              <div
                style={{
                  display: "flex",
                  marginTop: 8,
                  padding: "0 18px 8px",
                  background: ZEST,
                  border: `3px solid ${INK}`,
                  borderRadius: 18,
                  boxShadow: `6px 6px 0 ${INK}`,
                }}
              >
                in a job.
              </div>
            </div>
            <div style={{ marginTop: 26, fontSize: 27 }}>
              Become a Parachute Applicant.
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: 132,
              right: 62,
              display: "flex",
              flexDirection: "column",
              width: 340,
              background: "white",
              border: `4px solid ${INK}`,
              borderRadius: 28,
              overflow: "hidden",
              transform: "rotate(2deg)",
              boxShadow: `8px 8px 0 ${INK}`,
            }}
          >
            <img src={portraitSrc} width={332} height={286} style={{ objectFit: "cover" }} alt="" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderTop: `4px solid ${INK}`,
                padding: "16px 20px 18px",
              }}
            >
              <div style={{ fontFamily: "Bricolage", fontWeight: 800, fontSize: 28, letterSpacing: -0.8 }}>
                Dr. Winston McKenzie
              </div>
              <div style={{ marginTop: 5, fontSize: 18, color: INK_3 }}>
                We recruit with a difference.
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            height: 86,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 56px",
            background: INK,
            color: BONE,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontFamily: "Bricolage", fontWeight: 800, fontSize: 38, color: ZEST }}>£100</span>
            <span style={{ fontSize: 20 }}>weekly expenses</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontFamily: "Bricolage", fontWeight: 800, fontSize: 38, color: ZEST }}>9 hours</span>
            <span style={{ fontSize: 20 }}>per week</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 21, fontWeight: 700 }}>
            <span>Croydon &amp;</span>
            <span>South London</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage", data: display, weight: 800, style: "normal" },
        { name: "Jakarta", data: sans600, weight: 600, style: "normal" },
        { name: "Jakarta", data: sans700, weight: 700, style: "normal" },
      ],
    },
  );
}
