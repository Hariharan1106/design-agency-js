"use client";

import { useRef, useEffect, useState } from "react";

const services = [
  {
    icon: "✏️",
    title: "UI/UX Design",
    description: "We design interfaces that users love — from research and wireframing to pixel-perfect prototypes that convert.",
    color: "#7c5cfc",
  },
  {
    icon: "💻",
    title: "Web Development",
    description: "High-performance websites and web apps built with Next.js, React, and modern tooling that scale effortlessly.",
    color: "#5c9cfc",
  },
  {
    icon: "🎨",
    title: "Branding",
    description: "Identity systems that communicate who you are before you say a word — logos, typography, color, and voice.",
    color: "#fc5c7d",
  },
  {
    icon: "📣",
    title: "Digital Marketing",
    description: "Data-driven campaigns across SEO, paid media, and social that grow your audience and your revenue.",
    color: "#5cfcb8",
  },
];

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px",
        padding: "36px 32px",
        background: "var(--bg-card)",
        border: hovered ? `1px solid ${service.color}55` : "1px solid var(--border)",
        borderTop: hovered ? `2px solid ${service.color}` : "1px solid var(--border)",
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 60px ${service.color}20` : "none",
        cursor: "default",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
          background: `${service.color}18`,
          border: `1px solid ${service.color}30`,
          fontSize: "1.5rem",
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: "1.2rem",
          fontWeight: 700,
          marginBottom: "12px",
          color: "var(--text-primary)",
          letterSpacing: "-0.3px",
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
        {service.description}
      </p>

      {/* Bottom line */}
      <div
        style={{
          marginTop: "28px",
          height: "2px",
          borderRadius: "2px",
          background: `linear-gradient(90deg, ${service.color}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          width: "60%",
        }}
      />
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
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
          What We Do
        </p>
        <h2
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "var(--text-primary)",
            maxWidth: "480px",
            lineHeight: 1.15,
          }}
        >
          Services built for{" "}
          <span className="gradient-text">modern brands</span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}