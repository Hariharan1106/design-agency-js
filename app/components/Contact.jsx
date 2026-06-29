"use client";

import { useState, useRef, useEffect } from "react";

const contactInfo = [
  { icon: "✉️", label: "Email us", value: "hello@nexusstudio.co" },
  { icon: "📞", label: "Call us", value: "+1 (555) 000-1234" },
  { icon: "📍", label: "Find us", value: "San Francisco, CA" },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    else if (formData.message.trim().length < 20) newErrors.message = "Message must be at least 20 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = (hasError) => ({
    width: "100%",
    background: "var(--bg)",
    border: `1px solid ${hasError ? "#fc5c7d" : "var(--border)"}`,
    borderRadius: "10px",
    padding: "14px 18px",
    color: "var(--text-primary)",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: "100px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.8s ease",
      }}
    >
      <div style={{ marginBottom: "64px" }}>
        <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.82rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>
          Get In Touch
        </p>
        <h2
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "var(--text-primary)",
            lineHeight: 1.15,
          }}
        >
          Let&apos;s build something{" "}
          <span className="gradient-text">great together</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "start" }}>

        {/* Left info */}
        <div>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "1rem", marginBottom: "40px" }}>
            Have a project in mind? We&apos;d love to hear about it. Send us a message and we&apos;ll get back to you within one business day.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {contactInfo.map(({ icon, label, value }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "1.2rem",
                  }}
                >
                  {icon}
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "2px" }}>{label}</p>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: 500 }}>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            padding: "40px",
          }}
        >
          {submitted ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "20px", gap: "16px" }}>
              <div style={{ fontSize: "3.5rem" }}>✅</div>
              <h3 style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)" }}>
                Message sent!
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Thanks, {formData.name.split(" ")[0]}! We&apos;ll get back to you at{" "}
                <strong style={{ color: "var(--text-primary)" }}>{formData.email}</strong> within one business day.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); }}
                style={{
                  marginTop: "8px",
                  background: "transparent",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                  fontSize: "0.88rem",
                  fontFamily: "inherit",
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Name */}
              <div>
                <label htmlFor="name" style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "8px" }}>
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Alex Johnson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = errors.name ? "#fc5c7d" : "var(--border)")}
                  style={inputStyle(!!errors.name)}
                />
                {errors.name && <p style={{ color: "#fc5c7d", fontSize: "0.78rem", marginTop: "6px" }}>{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "8px" }}>
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = errors.email ? "#fc5c7d" : "var(--border)")}
                  style={inputStyle(!!errors.email)}
                />
                {errors.email && <p style={{ color: "#fc5c7d", fontSize: "0.78rem", marginTop: "6px" }}>{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "8px" }}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = errors.message ? "#fc5c7d" : "var(--border)")}
                  style={{ ...inputStyle(!!errors.message), resize: "vertical", minHeight: "120px" }}
                />
                {errors.message && <p style={{ color: "#fc5c7d", fontSize: "0.78rem", marginTop: "6px" }}>{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  background: loading ? "var(--bg)" : "var(--accent)",
                  color: loading ? "var(--text-secondary)" : "#fff",
                  border: "none",
                  borderRadius: "10px",
                  padding: "16px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  fontFamily: "inherit",
                }}
              >
                {loading ? (
                  <>
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        border: "2px solid var(--border)",
                        borderTop: "2px solid var(--accent)",
                        borderRadius: "50%",
                        animation: "spin 0.8s linear infinite",
                      }}
                    />
                    Sending…
                  </>
                ) : (
                  "Send Message ✉️"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}