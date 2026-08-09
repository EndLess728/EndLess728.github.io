import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#07070c",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(124,58,237,0.35), transparent 45%), radial-gradient(circle at 85% 75%, rgba(217,70,239,0.28), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #7c3aed, #d946ef)",
              color: "#fff",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            MK
          </div>
          <span style={{ color: "#9896ac", fontSize: 22, fontWeight: 600 }}>
            mantu.dev
          </span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            color: "#eceaf7",
            lineHeight: 1.15,
          }}
        >
          Mantu Kumar
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 700,
            marginTop: 4,
            backgroundImage: "linear-gradient(135deg, #a78bfa, #e879f9)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Senior React Native Developer
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 26,
            color: "#9896ac",
            maxWidth: 900,
          }}
        >
          7+ years building high-performance mobile apps across iOS &amp; Android
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 44 }}>
          {["React Native", "Expo", "TypeScript", "Next.js"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#eceaf7",
                fontSize: 20,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
