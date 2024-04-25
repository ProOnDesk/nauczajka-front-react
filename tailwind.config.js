/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: { "roboto-mono": ["Roboto Mono", "monospace"] },
			colors: {
				mainPurple: "#7c67ff",
				mainPurpleHover: "#6b56ee",
				lightPurple: "#e5e1ff",

				mainSalmon: "#fe7474",
				mainSalmonHover: "#ed6363",
				mainBlue: "#1b356b",
				mainBlueHover: "#1a245a",
				white: "#fff",
				whiteHover: "#eee",
				shadowBlack: "#ddd",
				gray: "#495057",
				lighGray: "#e9ecef",
			},
			backgroundImage: {
				"background-pattern": "url('/patterns.png')",
			},
			screens: {
				sm400: "400px",
				md960: "960px",
			},
			boxShadow: {
				myShadow: "0 6px 12px 0px rgba(0,0,0,0.3)",
				headerButtonFooter: "3px 7px 13px 1px rgba(0, 0, 0, .3)",
			},
		},
	},
	plugins: [],
};
