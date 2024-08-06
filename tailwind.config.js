// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
