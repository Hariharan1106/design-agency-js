import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata = {
  title: "Nexus Studio — Design That Moves",
  description:
    "Nexus Studio crafts bold digital experiences — UI/UX design, web development, branding, and digital marketing for brands that want to stand out.",
  keywords: ["design agency", "UI/UX", "web development", "branding", "Next.js"],
  openGraph: {
    title: "Nexus Studio — Design That Moves",
    description: "Bold digital experiences crafted for brands that want to stand out.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          fontFamily: "var(--font-inter), sans-serif",
        }}
        className={`${inter.variable} ${syne.variable}`}
      >
        {children}
      </body>
    </html>
  );
}