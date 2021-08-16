module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "400px": "400px",
        "300px": "300px",
        "100": "32rem"
      },
      height: {
        "400px": "400px",
        "300px": "300px"
      }
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '481px',
      // => @media (min-width: 768px) { ... }

      'lg': '769px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1025px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1201px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {
      scale: ["hover"],
      transform: ["hover"]
    },
  },
  plugins: [],
}
