"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Doors", href: "#collection" },
    { label: "States", href: "#states" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "20px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(10,10,10,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      {/* Logo */}
      <Link href="#home" style={{ textDecoration: "none" }}>
        <div>
          <div
            style={{
              fontSize: "22px",
              letterSpacing: "6px",
              fontWeight: "300",
              color: "#fff",
              fontFamily: "'Cormorant Garamond', serif",
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
      </Link>

      {/* Desktop Nav */}
      <div
        style={{
          display: "flex",
          gap: "36px",
          alignItems: "center",
        }}
        className="hidden md:flex"
      >
        {links.map((link) => (
          <a key={link.label} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </div>

      {/* Phone CTA */}
      <a
        href="tel:+18005550100"
        style={{
          color: "var(--gold)",
          fontSize: "12px",
          letterSpacing: "1px",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
        className="hidden md:flex"
      >
        <span>📞</span>
        <span>(800) 555-0100</span>
      </a>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
        }}
        className="md:hidden"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(10,10,10,0.98)",
            padding: "24px 48px",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              style={{ display: "block", marginBottom: "16px", fontSize: "14px" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
