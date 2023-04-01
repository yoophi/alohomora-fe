/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@headlessui/tailwindcss")],
  daisyui: {
    themes: [
      {
        bumblebee: {
          ...require("daisyui/src/colors/themes")["[data-theme=bumblebee]"],
          ".btn:disabled": {
            "background-color": "#DAA520",
          },
        },
      },
    ],
  },
};
