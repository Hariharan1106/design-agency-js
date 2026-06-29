export default function Footer() {
  const socials = [
    { icon: "🐙", href: "#", label: "GitHub" },
    { icon: "𝕏", href: "#", label: "Twitter" },
    { icon: "💼", href: "#", label: "LinkedIn" },
    { icon: "📷", href: "#", label: "Instagram" },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-card)",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <span style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)" }}>
          Nexus<span style={{ color: "var(--accent)" }}>.</span>
        </span>

        <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
          © {new Date().getFullYear()} Nexus Studio. All rights reserved.
        </p>

        <div style={{ display: "flex", gap: "20px" }}>
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "1.1rem", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}