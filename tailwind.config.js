/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        rubikBold: ["Rubik-Bold", "sans-serif"],
        rubikMedium: ["Rubik-Medium", "sans-serif"],
        rubikLight: ["Rubik-Light", "sans-serif"],
        rubikRegular: ["Rubik-Regular", "sans-serif"],  
      },
      
      colors: {
        primary: "#1DA1F2",
        secondary: "#14171A",
        accent: "#F5A623",
      },
    },
  },
  plugins: [],
}