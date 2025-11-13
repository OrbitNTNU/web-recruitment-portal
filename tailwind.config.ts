import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx",],
  theme: {
    extend: {
	  fontFamily: {
  		sans: [
  		  'var(--font-geist-sans)',
          ...fontFamily.sans
        ]
  	  },
      borderRadius: {
		lg: 'var(--radius)',
  		md: 'calc(var(--radius) - 2px)',
  		sm: 'calc(var(--radius) - 4px)'
  	  },
      colors: {
        nightSky: "var(--color-night-sky)",
        moonlight: "var(--color-moonlight)",
        emeraldFizz: "var(--color-emerald-fizz)",
        pinkBlast: "var(--color-pink-blast)",
        skyMint: "var(--color-sky-mint)",
        laserLemon: "var(--color-laser-lemon)",
        cloudWhite: "var(--color-cloud-white)",
        orangeSherbert: "var(--color-orange-sherbert)",
        darkEmerald: "var(--color-dark-emerald)",
        darkPink: "var(--color-dark-pink)",
        darkMint: "var(--color-dark-mint)",
        darkLemon: "var(--color-dark-lemon)",
        darkGray: "var(--color-dark-gray)",
        berryBlast: "var(--color-berry-blast)",
        mustyMangrove: "var(--color-musty-mangrove)",
        strong: "var(--color-strong)",
        cream: "var(--color-cream)",
        slate: "var(--color-slate)",
        muted: "var(--color-muted)",
        charcoal: "var(--color-charcoal)",
      },
    },
  },
	// eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
