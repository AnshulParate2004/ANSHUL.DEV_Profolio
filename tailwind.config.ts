import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Stagehand specific color tokens
        chrome: {
          bg: "#ececed",
          canvas: "#ffffff",
          field: "#f4f4f6",
          line: "#cfcfd6",
          edge: "#e4e9f2",
          rule: "#c5d3e8",
          ink: "#111111",
          dim: "#506b9c",
          slate: "#46639f",
          icon: "#444746",
          mute: "#9bafd3",
          green: "#00c851",
          "green-ink": "#007d33",
          tint: "#f7f9fc",
        },
        dev: {
          bg: "#141414",
          shell: "#1a1a1a",
          line: "#292929",
          ink: "#f0f0f0",
          dim: "#888888",
        },
      },
      fontFamily: {
        brand: ["'GT Planar'", "sans-serif"],
        body: ["'Plain'", "sans-serif"],
        bbmono: ["'GT Standard Mono'", "'GeistMono'", "monospace"],
        mono: ["'GeistMono'", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
