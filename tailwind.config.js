module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "400px": "400px",
        "300px": "300px"
      },
      height: {
        "400px": "400px",
        "300px": "300px"
      }
    },
  },
  variants: {
    extend: {
      scale: ["hover"],
      transform: ["hover"]
    },
  },
  plugins: [],
}
