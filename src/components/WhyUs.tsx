"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "🔨",
    title: "Master Craftsmanship",
    desc: "Each door is meticulously crafted using time-honored techniques combined with modern precision — built to last generations.",
  },
  {
    icon: "🌲",
    title: "Premium Materials",
    desc: "We source only the finest solid woods, to luxury glass, and rich hardware for lasting beauty and performance.",
  },
  {
    icon: "✏️",
    title: "Custom Design",
    desc: "Every space is unique. Our doors are tailored to match your personal aesthetic, from classic to contemporary.",
  },
  {
    icon: "🚪",
    title: "Perfect Installation",
    desc: "Our expert teams across Florida, Alabama, and South Carolina ensure flawless, airtight installation every time.",
  },
  {
    icon: "🛡️",
    title: "Lifetime Warranty",
    desc: "Every Vellaro door comes with our commitment to quality — backed by an industry-leading lifetime structural warranty.",
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    desc: "From order to installation in as little as 3 weeks. We respect your time as much as your space.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
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
          style={{ marginBottom: "64px" }}
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
            Our Promise
          </p>
          <h2
            className="section-heading"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: "300" }}
          >
            Why Vellaro Doors?
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2px",
          }}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="feature-card"
            >
              <div
                style={{
                  fontSize: "28px",
                  marginBottom: "20px",
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: "#fff",
                  marginBottom: "12px",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: "1.8",
                  fontWeight: "300",
                }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
