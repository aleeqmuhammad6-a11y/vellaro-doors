"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  state: string;
  doorType: string;
  message: string;
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    // Simulate form submission (replace with EmailJS or backend API)
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Form submitted:", data);
    setLoading(false);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: "var(--dark-2)",
        padding: "120px 48px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
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
            Get In Touch
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: "300",
              color: "#fff",
              lineHeight: "1.1",
              marginBottom: "24px",
            }}
          >
            Let&apos;s Create Your
            <br />
            <em style={{ color: "var(--gold)" }}>Perfect Door</em>
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.4)",
              lineHeight: "1.9",
              marginBottom: "48px",
              fontWeight: "300",
            }}
          >
            Our design consultants are ready to help you find the perfect door for your home. Free consultations available across Florida, Alabama, and South Carolina.
          </p>

          {/* Contact Details */}
          {[
            { label: "Phone", value: "(800) 555-0100", icon: "📞" },
            { label: "Email", value: "hello@vellaodoors.com", icon: "✉️" },
            { label: "Hours", value: "Mon–Sat: 8am – 6pm EST", icon: "🕐" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                marginBottom: "24px",
              }}
            >
              <span style={{ fontSize: "20px", marginTop: "2px" }}>{item.icon}</span>
              <div>
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "2px",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                  {item.value}
                </div>
              </div>
            </div>
          ))}

          {/* State badges */}
          <div
            style={{
              marginTop: "40px",
              padding: "24px",
              border: "1px solid rgba(201,168,76,0.2)",
              background: "rgba(201,168,76,0.03)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "2px",
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Service Areas
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {["🌴 Florida", "⭐ Alabama", "🌊 South Carolina"].map((s) => (
                <span
                  key={s}
                  style={{
                    padding: "6px 16px",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "var(--gold)",
                    fontSize: "12px",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {submitted ? (
            <div
              style={{
                padding: "48px",
                border: "1px solid rgba(201,168,76,0.3)",
                textAlign: "center",
                background: "rgba(201,168,76,0.03)",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "32px",
                  color: "#fff",
                  marginBottom: "12px",
                  fontWeight: "300",
                }}
              >
                Message Sent!
              </h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>
                Our team will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <input
                    {...register("name", { required: true })}
                    className="form-input"
                    placeholder="Full Name *"
                  />
                  {errors.name && (
                    <span style={{ color: "#e53e3e", fontSize: "11px", marginTop: "4px" }}>Required</span>
                  )}
                </div>
                <div>
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="form-input"
                    placeholder="Email Address *"
                    type="email"
                  />
                  {errors.email && (
                    <span style={{ color: "#e53e3e", fontSize: "11px", marginTop: "4px" }}>Valid email required</span>
                  )}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <input
                  {...register("phone")}
                  className="form-input"
                  placeholder="Phone Number"
                  type="tel"
                />
                <select
                  {...register("state", { required: true })}
                  className="form-input"
                  style={{
                    background: "var(--dark-3)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.7)",
                    padding: "14px 18px",
                    fontSize: "14px",
                    outline: "none",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <option value="">Select State *</option>
                  <option value="florida">Florida</option>
                  <option value="alabama">Alabama</option>
                  <option value="south-carolina">South Carolina</option>
                </select>
              </div>

              <select
                {...register("doorType")}
                className="form-input"
                style={{
                  background: "var(--dark-3)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                  padding: "14px 18px",
                  fontSize: "14px",
                  outline: "none",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                <option value="">Door Type (Optional)</option>
                <option value="exterior">Exterior Entry Door</option>
                <option value="interior">Interior Door</option>
                <option value="french">French / Patio Doors</option>
                <option value="bifold">Bi-Fold Doors</option>
                <option value="custom">Custom Design</option>
              </select>

              <textarea
                {...register("message")}
                className="form-input"
                placeholder="Tell us about your project..."
                rows={5}
                style={{ resize: "vertical" }}
              />

              <button
                type="submit"
                disabled={loading}
                className="btn-gold"
                style={{
                  width: "100%",
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "wait" : "pointer",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
                Free consultation • No obligation • Response within 24hrs
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
