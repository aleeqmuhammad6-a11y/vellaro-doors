"use client";

const items = [
  "Vellaro Doors",
  "Where Elegance Opens",
  "Premium Quality",
  "Crafted with Precision",
  "Florida",
  "Alabama",
  "South Carolina",
  "Master Craftsmanship",
  "Custom Design",
  "Lifetime Warranty",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: "var(--dark-3)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "20px 0",
        overflow: "hidden",
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0",
              padding: "0 48px",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "22px",
              fontWeight: "300",
              color:
                i % 3 === 0
                  ? "rgba(255,255,255,0.15)"
                  : i % 3 === 1
                  ? "var(--gold)"
                  : "rgba(255,255,255,0.08)",
              letterSpacing: "2px",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span
              style={{
                display: "inline-block",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "var(--gold)",
                opacity: 0.4,
                marginLeft: "48px",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
