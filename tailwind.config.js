module.exports = {
  theme: {
    colors: {
      "transparent": "transparent",
      "white": "var(--white)", // white: "#ffffff"
      "black": "var(--black)", // black: "#000000"
      "gray-100": "var(--gray-100)", // "ice-blue": "#edf2f5"
      "gray-200": "var(--gray-200)", // "off-white": "#f3f2ee"
      "gray-300": "var(--gray-300)", // "very-light-pink": "#d4d4d4"
      "gray-400": "var(--gray-400)", // "light-blue-grey": "#bec8d2"
      "gray-500": "var(--gray-500)", // "bluey-grey": "#98a2ae"
      "gray-600": "var(--gray-600)", // "brownish-grey": "#6e6e6e"
      "gray-700": "var(--gray-700)", // slate: "#4d5766"
      "gray-800": "var(--gray-800)", // dark: "#273143"
      "gray-900": "var(--gray-900)", // "dark-grey": "#1d1e20"
      "blue-lightest": "var(--blue-lightest)", // "bright-sky-blue": "#00c9ff"
      "blue-lighter": "var(--blue-lighter)", // "cerulean-blue": "#0065ed"
      "blue-light": "var(--blue-light)", // "light-navy": "#124191"
      "blue": "var(--blue)", // ultramarine: "#1000a9"
      "blue-dark": "var(--blue-dark)", // marine: "#052253"
      "blue-darker": "var(--blue-darker)", // navy: "#001235"
      "green-light": "var(--green-light)", // "toxic-green": "#35b41f"
      "green": "var(--green)", // pine: "#143010"
      "green-dark": "var(--green-dark)", // "almost-black": "#11220e"
      "gold": "var(--gold)", // "pale-brown": "#a19377"
      "orange": "var(--orange)",
      "red-light": "var(--red-light)", // "reddish-pink": "#ff3154"
      "red": "var(--red)", // "red-brown": "#801515"
      "red-dark": "var(--red-dark)", // mahogany: "#550000"
      "yellow": "var(--yellow)", // "bright-yellow": "#fffa00"

      // main colours
      "primary": "var(--blue-lighter)",
      "secondary": "var(--blue-light)",
      "tertiary": "var(--blue-lightest)",
      "lighter": "var(--gray-100)",
      "light": "var(--gray-400)",
      "mid": "var(--gray-600)",
      "dark": "var(--gray-800)",
      "darker": "var(--gray-900)",
    },
    fontFamily: {
      "body": "var(--font-body)",
      "heading": "var(--font-heading)",
    },
    fontWeight: {
      thin: "var(--font-thin)",
      light: "var(--font-light)",
      normal: "var(--font-normal)",
      bold: "var(--font-bold)",
    },
    extend: {
      fontSize: {
        "2xs": "0.75rem",
        "4xl": "2.5rem",
        "5xl": "4rem",
        "6xl": "6rem",
        "8xl": "8rem",
      },
      screens: {
        xl: "1380px",
      },
      padding: {
        container: "7vw",
        "container-lg": "12vw",
        "container-xl": "16vw",
        "container-2xl": "20vw",
      },
      width: {
        "1/8": "12.5%",
        "1/7": "14.2857143%",
      },
    },
  },
  variants: {
    margin: ["responsive", "last"],
    borderWidth: ["responsive", "last"],
    fontSize: ["responsive"],
    wpBackgroundColor: ["hover"],
    wpTextColor: ["hover"],
  },
  plugins: [
    require("@tailwindcss/custom-forms"),
    require("tailwindcss-wp-text")(),
    require("tailwindcss-wp-background")(),
  ],
};
