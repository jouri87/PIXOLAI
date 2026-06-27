import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Free Developer Tools";

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <div style={{
            width: "56px", height: "56px", borderRadius: "14px",
            background: "linear-gradient(135deg, #6366f1, #7c3aed)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "white", fontSize: "28px", fontWeight: "bold" }}>{"</>"}</span>
          </div>
          <span style={{ color: "white", fontSize: "28px", fontWeight: "800" }}>PixolAI</span>
        </div>
        <h1 style={{ color: "white", fontSize: "52px", fontWeight: "900", lineHeight: 1.1, margin: "0 0 20px" }}>
          {title}
        </h1>
        <p style={{ color: "#a5b4fc", fontSize: "22px", margin: 0 }}>
          Free developer tools & coding resources
        </p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
