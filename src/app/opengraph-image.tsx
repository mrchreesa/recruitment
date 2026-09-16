import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { marqueeTerms } from "@/lib/content";

export const alt =
  "The JobFather — Become a Parachute Applicant and land yourself in a job. £100 per week expenses, 9 hours per week, Croydon & South London.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          color: INK,
        }}
      >
        <div style={{ flex: 1, display: "flex", padding: "52px 64px 0" }}>
          {/* Copy */}
          <div style={{ display: "flex", flexDirection: "column", width: 700 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 76,
                  height: 76,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: ZEST,
                  border: `4px solid ${INK}`,
                  borderRadius: 20,
                }}
              >
                <svg width="62" height="62" viewBox="0 0 40 40">
                  <path
                    d="M12 24.5C11.4 18.5 11.9 13.4 14.4 11.2c1.6-1.3 3.2.9 5.6.9s4-2.2 5.6-.9c2.5 2.2 3 7.3 2.4 13.3z"
                    fill={INK}
                  />
                  <path d="M11.7 19.6h16.6v3.6H11.7z" fill="#FF6B5B" />
                  <path d="M3.5 25.2c5.2-3.4 27.8-3.4 33 0-2.8 4.6-30.2 4.6-33 0z" fill={INK} />
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: 6, color: GRAPE }}>THE</div>
                <div style={{ fontFamily: "Bricolage", fontSize: 44, lineHeight: 1, letterSpacing: -1.5 }}>
                  JobFather
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 40,
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: 4,
                color: GRAPE,
              }}
            >
              VOLUNTEER PARACHUTE POSITIONS
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 12,
                fontFamily: "Bricolage",
                fontSize: 66,
                lineHeight: 1,
                letterSpacing: -2.5,
              }}
            >
              <span>Become a</span>
              <span>Parachute Applicant</span>
            </div>
            <div style={{ display: "flex", marginTop: 22 }}>
              <div
                style={{
                  fontFamily: "Bricolage",
                  fontSize: 48,
                  lineHeight: 1,
                  letterSpacing: -1.5,
                  background: ZEST,
                  border: `4px solid ${INK}`,
                  borderRadius: 18,
                  padding: "10px 20px 14px",
                  transform: "rotate(-1.5deg)",
                  boxShadow: `6px 6px 0 0 ${INK}`,
                }}
              >
                and land yourself in a job.
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginTop: 36 }}>
              {["£100 per week expenses", "9 hrs per week", "Croydon & South London"].map((chip) => (
                <div
                  key={chip}
                  style={{
                    display: "flex",
                    whiteSpace: "nowrap",
                    fontSize: 18,
                    fontWeight: 700,
                    background: "white",
                    border: `3px solid ${INK}`,
                    borderRadius: 999,
                    padding: "8px 16px",
                  }}
                >
                  {chip}
                </div>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 344,
                background: "white",
                border: `4px solid ${INK}`,
                borderRadius: 32,
                overflow: "hidden",
                transform: "rotate(2.5deg)",
                boxShadow: `10px 10px 0 0 ${INK}`,
              }}
            >
              <img src={portraitSrc} width={336} height={290} style={{ objectFit: "cover" }} alt="" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderTop: `4px solid ${INK}`,
                  padding: "14px 22px 18px",
                }}
              >
                <div style={{ fontFamily: "Bricolage", fontSize: 28, letterSpacing: -0.8 }}>
                  Dr. Winston McKenzie
                </div>
                <div style={{ fontSize: 17, fontWeight: 600, color: INK_3 }}>The JobFather</div>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                top: 6,
                left: 0,
                fontFamily: "Bricolage",
                fontSize: 30,
                letterSpacing: -0.8,
                background: ZEST,
                border: `4px solid ${INK}`,
                borderRadius: "24px 24px 24px 6px",
                padding: "10px 20px 12px",
                transform: "rotate(-5deg)",
                boxShadow: `5px 5px 0 0 ${INK}`,
              }}
            >
              “I have a Job for you.”
            </div>
          </div>
        </div>

        {/* Ticker strip */}
        <div
          style={{
            height: 66,
            display: "flex",
            alignItems: "center",
            gap: 26,
            padding: "0 40px",
            background: INK,
            color: ZEST,
            fontFamily: "Bricolage",
            fontSize: 28,
            letterSpacing: -0.5,
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {marqueeTerms.slice(0, 7).map((term) => (
            <div key={term} style={{ display: "flex", alignItems: "center", gap: 26 }}>
              <span>{term}</span>
              <div style={{ width: 10, height: 10, background: ZEST, opacity: 0.55, transform: "rotate(45deg)" }} />
            </div>
          ))}
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
