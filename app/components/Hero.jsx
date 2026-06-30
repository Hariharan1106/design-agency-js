"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = hero.getBoundingClientRect();
      const x = ((clientX - left) / width) * 100;
      const y = ((clientY - top) / height) * 100;
      hero.style.setProperty("--mouse-x", `${x}%`);
      hero.style.setProperty("--mouse-y", `${y}%`);
    };
    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
        background: `
          radial-gradient(ellipse 80% 60% at var(--mouse-x, 50%) var(--mouse-y, 40%),
            rgba(124, 92, 252, 0.12) 0%,
            transparent 60%
          ),
          var(--bg)
        `,
      }}
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.4,
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Floating orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,92,252,0.15) 0%, transparent 70%)",
          top: "10%",
          right: "-10%",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(252,92,125,0.1) 0%, transparent 70%)",
          bottom: "10%",
          left: "-8%",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      {/* Content */}
      <div style={{ maxWidth: "800px", textAlign: "center", position: "relative", zIndex: 1 }}>

        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "50px",
            padding: "8px 18px",
            marginBottom: "32px",
            fontSize: "0.82rem",
            color: "var(--accent)",
            fontWeight: 600,
            letterSpacing: "0.5px",
            animation: "fadeUp 0.5s ease forwards",
          }}
        >
          ✦ Award-Winning Digital Studio
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: "24px",
            color: "var(--text-primary)",
            animation: "fadeUp 0.6s ease 0.1s both",
          }}
        >
          We design{" "}
          <span className="gradient-text">experiences</span>
          <br />
          that move people.
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto 44px",
            animation: "fadeUp 0.6s ease 0.2s both",
          }}
        >
          Nexus Studio partners with ambitious brands to craft digital products
          that look stunning, work flawlessly, and leave a lasting impression.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "fadeUp 0.6s ease 0.3s both",
          }}
        >
          <a
            href="#portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--accent)",
              color: "#fff",
              padding: "16px 32px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
              transition: "all 0.3s ease",
              boxShadow: "0 0 30px var(--accent-glow)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 50px var(--accent-glow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 30px var(--accent-glow)";
            }}
          >
            View Our Work →
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              color: "var(--text-primary)",
              padding: "16px 32px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1rem",
              border: "1px solid var(--border)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--bg-card)";
              e.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(24px, 6vw, 64px)",
            marginTop: "72px",
            animation: "fadeUp 0.6s ease 0.4s both",
          }}
        >
          {[
            { value: "120+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "6yr", label: "In the Industry" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  letterSpacing: "-1px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-secondary)",
                  marginTop: "4px",
                  letterSpacing: "0.5px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}