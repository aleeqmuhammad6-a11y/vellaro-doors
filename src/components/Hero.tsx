"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Background texture lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 60px,
              rgba(255,255,255,0.015) 60px,
              rgba(255,255,255,0.015) 61px
            )
          `,
        }}
      />

      {/* Door silhouette right side */}
      <div
        style={{
          position: "absolute",
          right: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "300px",
          height: "500px",
          background: "rgba(255,255,255,0.03)",
          borderRadius: "4px 4px 0 0",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            right: "10%",
            bottom: "10%",
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        />
        {/* Door knob */}
        <div
          style={{
            position: "absolute",
            right: "15%",
            top: "50%",
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "rgba(201,168,76,0.4)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "800px",
          padding: "0 24px",
        }}
      >
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            color: "var(--gold)",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Where Elegance Opens
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(48px, 7vw, 88px)",
            fontWeight: "300",
            lineHeight: "1.1",
            color: "#fff",
            marginBottom: "0",
          }}
        >
          Premium Doors
          <br />
          Crafted for
          <br />
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
            Lasting Impressions
          </em>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "520px",
            margin: "32px auto",
            lineHeight: "1.8",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "300",
          }}
        >
          Precision-crafted doors that leave you to appreciate the art of space.
          Quality, design, and durability in every detail — serving Florida,
          Alabama & South Carolina.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a href="#collection" className="btn-gold">
            Explore Our Doors
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            display: "flex",
            gap: "48px",
            justifyContent: "center",
            marginTop: "64px",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "500+", label: "Doors Installed" },
            { num: "3", label: "States Served" },
            { num: "15+", label: "Years Experience" },
            { num: "100%", label: "Custom Made" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "36px",
                  fontWeight: "300",
                  color: "var(--gold)",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "9px",
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, var(--gold), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
