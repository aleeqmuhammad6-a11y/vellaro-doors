"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const doors = [
  {
    id: 1,
    name: "Grand Mahogany",
    type: "Exterior Entry Door",
    desc: "Rich mahogany with hand-carved detailing and bronze hardware. A statement of timeless elegance.",
    price: "From \$2,400",
    color: "#3d2b1f",
    accent: "#8b6347",
  },
  {
    id: 2,
    name: "Bi-Fold Master",
    type: "Interior Bi-Fold Door",
    desc: "Sleek white bi-fold panels that open your space beautifully. Perfect for closets and room dividers.",
    price: "From \$890",
    color: "#e8e8e8",
    accent: "#cccccc",
  },
  {
    id: 3,
    name: "Obsidian Steel",
    type: "Modern Exterior Door",
    desc: "Matte black steel door with frosted glass panels. Industrial sophistication meets modern design.",
    price: "From \$3,100",
    color: "#1a1a1a",
    accent: "#333333",
  },
  {
    id: 4,
    name: "French Garden",
    type: "French Patio Doors",
    desc: "Classic French-style double doors with divided glass lights. Opens your home to the outdoors gracefully.",
    price: "From \$1,800",
    color: "#f5f0e8",
    accent: "#ddd5c0",
  },
  {
    id: 5,
    name: "Walnut Craftsman",
    type: "Interior Door",
    desc: "American black walnut with craftsman-style raised panels. Warmth and character in every grain.",
    price: "From \$1,200",
    color: "#4a3728",
    accent: "#6b5240",
  },
];

// Door SVG visual
function DoorVisual({ door }: { door: typeof doors[0] }) {
  return (
    <svg
      width="260"
      height="400"
      viewBox="0 0 260 400"
      style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.6))" }}
    >
      {/* Frame */}
      <rect x="10" y="10" width="240" height="380" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      {/* Door body */}
      <rect x="20" y="20" width="220" height="360" rx="2" fill={door.color} opacity="0.9" />
      {/* Panel detail */}
      <rect x="40" y="40" width="80" height="140" rx="2" fill="none" stroke={door.accent} strokeWidth="1.5" opacity="0.6" />
      <rect x="140" y="40" width="60" height="140" rx="2" fill="none" stroke={door.accent} strokeWidth="1.5" opacity="0.6" />
      <rect x="40" y="200" width="160" height="160" rx="2" fill="none" stroke={door.accent} strokeWidth="1.5" opacity="0.6" />
      {/* Knob */}
      <circle cx="195" cy="210" r="8" fill="var(--gold)" opacity="0.9" />
      <circle cx="195" cy="210" r="4" fill="rgba(0,0,0,0.3)" />
    </svg>
  );
}

export default function Collection() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => setCurrent((c) => (c === 0 ? doors.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === doors.length - 1 ? 0 : c + 1));

  const door = doors[current];

  return (
    <section
      id="collection"
      ref={ref}
      style={{
        background: "var(--dark)",
        padding: "120px 48px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "80px" }}
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
            Handpicked For You
          </p>
          <h2
            className="section-heading"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: "300" }}
          >
            Our Collection
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="carousel-grid"
        >
          {/* Door visual */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Glow behind door */}
            <div
              style={{
                position: "absolute",
                width: "300px",
                height: "400px",
                borderRadius: "50%",
                background: `radial-gradient(ellipse, ${door.accent}20, transparent 70%)`,
                filter: "blur(40px)",
              }}
            />
            <DoorVisual door={door} />
          </motion.div>

          {/* Info */}
          <motion.div
            key={`info-${current}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              {door.type}
            </p>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "52px",
                fontWeight: "300",
                color: "#fff",
                lineHeight: "1",
                marginBottom: "24px",
              }}
            >
              {door.name}
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                lineHeight: "1.9",
                marginBottom: "32px",
                fontWeight: "300",
              }}
            >
              {door.desc}
            </p>
            <p
              style={{
                fontSize: "24px",
                color: "var(--gold)",
                fontFamily: "'Cormorant Garamond', serif",
                marginBottom: "36px",
              }}
            >
              {door.price}
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="#contact" className="btn-gold">
                Request Quote
              </a>
              <a href="#contact" className="btn-outline">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginTop: "60px",
            justifyContent: "center",
          }}
        >
          <button
            onClick={prev}
            style={{
              width: "48px",
              height: "48px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "transparent",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gold)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLButtonElement).style.color = "#fff";
            }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          {doors.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? "24px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === current ? "var(--gold)" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}

          <button
            onClick={next}
            style={{
              width: "48px",
              height: "48px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "transparent",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gold)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLButtonElement).style.color = "#fff";
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
