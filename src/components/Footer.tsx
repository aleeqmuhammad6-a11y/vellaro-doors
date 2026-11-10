"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(2024);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "80px 48px 40px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "60px",
            flexWrap: "wrap",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "26px",
                  letterSpacing: "6px",
                  fontWeight: "300",
                  color: "#fff",
                }}
              >
                VELLARO
              </div>
              <div
                style={{
                  fontSize: "9px",
                  letterSpacing: "4px",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                DOORS
              </div>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.35)",
                lineHeight: "1.9",
                maxWidth: "280px",
                fontWeight: "300",
              }}
            >
              Premium crafted doors for homes that appreciate the art of space.
              Quality, design, and durability in every detail — across Florida,
              Alabama & South Carolina.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "24px",
                fontWeight: "400",
              }}
            >
              Quick Nav
            </h4>
            {["Home", "About Us", "Doors", "States", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "")}`}
                className="footer-link"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Doors */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "24px",
                fontWeight: "400",
              }}
            >
              Doors
            </h4>
            {["Exterior Entry", "Interior Doors", "French / Patio", "Bi-Fold", "Custom Design"].map((item) => (
              <a key={item} href="#collection" className="footer-link">
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "24px",
                fontWeight: "400",
              }}
            >
              Contact
            </h4>
            <p className="footer-link">(800) 555-0100</p>
            <p className="footer-link">hello@vellaodoors.com</p>
            <p className="footer-link">123 Design Ave, Suite 100</p>
            <p className="footer-link">Miami, FL 33101</p>

            {/* Social */}
            <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
              {[
                { label: "FB", href: "#" },
                { label: "IG", href: "#" },
                { label: "LI", href: "#" },
                { label: "TW", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "11px",
                    textDecoration: "none",
                    fontWeight: "600",
                    transition: "all 0.3s",
                    letterSpacing: "0.5px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.05)",
            marginBottom: "32px",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
            © {year} Vellaro Doors. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.2)",
                  textDecoration: "none",
                  letterSpacing: "0.5px",
                  transition: "color 0.3s",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Large brand watermark */}
        <div
          style={{
            textAlign: "center",
            marginTop: "48px",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(60px, 12vw, 140px)",
            fontWeight: "700",
            color: "rgba(255,255,255,0.025)",
            letterSpacing: "8px",
            userSelect: "none",
            lineHeight: "1",
          }}
        >
          VELLARO
        </div>
      </div>
    </footer>
  );
}
