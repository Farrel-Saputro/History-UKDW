{
  import("tailwindcss").Config;
}
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Define Inter font
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
