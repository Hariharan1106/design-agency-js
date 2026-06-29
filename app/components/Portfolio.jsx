"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  { title: "Luminary Banking App", category: "UI/UX Design", color: "#7c5cfc", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
  { title: "Volta E-Commerce", category: "Web Development", color: "#fc5c7d", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
  { title: "Forge Brand Identity", category: "Branding", color: "#5cfcb8", image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&q=80" },
  { title: "Pulse Health Dashboard", category: "UI/UX Design", color: "#fc9c5c", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80" },
  { title: "Meridian SaaS Platform", category: "Web Development", color: "#5c9cfc", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80" },
  { title: "Bloom Campaign", category: "Digital Marketing", color: "#fc5cfc", image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80" },
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        aspectRatio: "4/3",
        border: "1px solid var(--border)",
        cursor: "pointer",
        transition: "all 0.35s ease",
        transform: hovered ? "scale(1.02)" : "scale(1)",
        boxShadow: hovered ? `0 24px 60px ${project.color}30` : "0 4px 20px rgba(0,0,0,0.2)",
      }}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        style={{
          objectFit: "cover",
          transition: "transform 0.5s ease, filter 0.5s ease",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          filter: hovered ? "brightness(0.35)" : "brightness(0.75)",
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Category badge (visible when not hovered) */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          background: `${project.color}22`,
          border: `1px solid ${project.color}55`,
          borderRadius: "50px",
          padding: "5px 14px",
          fontSize: "0.75rem",
          fontWeight: 600,
          color: project.color,
          backdropFilter: "blur(8px)",
          zIndex: 2,
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        {project.category}
      </div>

      {/* Hover overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          zIndex: 2,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s ease",
          textAlign: "center",
        }}
      >
        <p style={{ color: project.color, fontSize: "0.78rem", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
          {project.category}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          {project.title}
        </h3>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: project.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
          }}
        >
          ↗
        </div>
      </div>

      {/* Bottom title strip */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "16px 20px",
          background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
          zIndex: 2,
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        <p style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff" }}>
          {project.title}
        </p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      style={{
        padding: "100px 24px",
        background: "var(--bg-card)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.8s ease",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "56px" }}>
          <div>
            <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.82rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>
              Selected Work
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
              Projects we&apos;re{" "}
              <span className="gradient-text">proud of</span>
            </h2>
          </div>
          <a
            href="#contact"
            style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem", borderBottom: "1px solid var(--accent)", paddingBottom: "2px" }}
          >
            Start a project →
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}