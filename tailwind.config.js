/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				mycyan: {300: "#00ffff",},
				t_blue: {300: "#01BAEF",},
				t_pink: {300: "FF495C"},
				t_violet: {300: "#2F0147"},
				t_gray: {200: "#f5f5f5", 300: "#D9d9d9"}
			},
			position: {
				left: {30: "40%"},
			}
		},
	},
	plugins: [],
};
