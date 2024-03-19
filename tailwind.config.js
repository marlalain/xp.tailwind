/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
        backgroundImage: {
            'button-linear-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(236, 235, 229, 1) 86%, rgba(216, 208, 196, 1) 100%)',
            'xp-active-button-gradient': 'linear-gradient(180deg, rgba(205, 202, 195, 1) 0%, rgba(227, 227, 219, 1) 8%, rgba(229, 229, 222, 1) 94%, rgba(242, 242, 241, 1) 100%)'
        },
        colors: {
        },
        boxShadow: {
            'raised': 'inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf',
            'sunken': 'inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080',
            'xp-hover': 'inset -1px 1px #fff0cf, inset 1px 2px #fdd889, inset -2px 2px #fbc761, inset 2px -2px #e5a01a',
            'xp-focused': 'inset -1px 1px #cee7ff, inset 1px 2px #98b8ea, inset -2px 2px #bcd4f6, inset 1px -1px #89ade4, inset 2px -2px #89ade4',
        }
    },
  },
  plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/container-queries"),
  ],
}

