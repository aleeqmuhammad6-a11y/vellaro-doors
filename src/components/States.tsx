"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const states = [
  {
    name: "Florida",
    abbr: "FL",
    emoji: "🌴",
    cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale"],
    desc: "Serving the Sunshine State with premium doors built to withstand Florida's coastal climate and humid summers.",
    color: "#1a6b3c",
    glow: "rgba(26, 107, 60, 0.15)",
  },
  {
    name: "Alabama",
    abbr: "AL",
    emoji: "⭐",
    cities: ["Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa"],
    desc: "Bringing Southern craftsmanship to Alabama homes — durable, beautiful doors for the Heart of Dixie.",
    color: "#8b1a1a",
    glow: "rgba(139, 26, 26, 0.15)",
  },
  {
    name: "South Carolina",
    abbr: "SC",
    emoji: "🌊",
    cities: ["Charleston", "Columbia", "Greenville", "Myrtle Beach", "Hilton Head"],
    desc: "From the Lowcountry to the Upstate — Vellaro doors made for South Carolina's coastal beauty and history.",
    color: "#1a3d6b",
    glow: "rgba(26, 61, 107, 0.15)",
  },
];

export default function States() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="states"
      ref={ref}
      style={{
        background: "var(--dark-2)",
        padding: "120px 48px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "4px",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Our Service Area
          </p>
          <h2
            className="section-heading"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: "300",
              marginBottom: "20px",
            }}
          >
            Serving Three Great States
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.4)",
              maxWidth: "480px",
              margin: "0 auto",
              fontWeight: "300",
              lineHeight: "1.8",
            }}
          >
            From the Gulf Coast to the Atlantic seaboard — Vellaro brings premium craftsmanship to your doorstep.
          </p>
        </motion.div>

        {/* State cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {states.map((state, i) => (
            <motion.div
              key={state.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="state-card"
              style={{
                boxShadow: `0 0 60px ${state.glow}`,
              }}
            >
              {/* State abbreviation bg */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "-10px",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "120px",
                  fontWeight: "700",
                  color: state.color,
                  opacity: 0.08,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {state.abbr}
              </div>

              {/* Emoji + Name */}
              <div style={{ marginBottom: "16px" }}>
                <span style={{ fontSize: "40px" }}>{state.emoji}</span>
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "36px",
                  fontWeight: "400",
                  color: "#fff",
                  marginBottom: "8px",
                }}
              >
                {state.name}
              </h3>

              {/* Divider */}
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  background: "var(--gold)",
                  margin: "16px auto",
                }}
              />

              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: "1.8",
                  marginBottom: "24px",
                  fontWeight: "300",
                }}
              >
                {state.desc}
              </p>

              {/* Cities */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  justifyContent: "center",
                }}
              >
                {state.cities.map((city) => (
                  <span
                    key={city}
                    style={{
                      fontSize: "11px",
                      padding: "4px 12px",
                      border: "1px solid rgba(201,168,76,0.3)",
                      color: "var(--gold)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
