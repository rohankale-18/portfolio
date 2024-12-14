/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#141414",
        tertiary: "#0F0F0F",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
	  backgroundImage: {
		//   'custom-gradient': 'linear-gradient(180deg, #00FFFF 25%, #434F41 52%, #000000 100%)',
		  'custom-gradient': 'radial-gradient(circle,rgb(66, 125, 177) 12%, #000000 100%)',
      },
      colors: {
        'custom-purple': '#434374', // For the base color if needed elsewhere
      },
    },
  },
  plugins: [],
};
