module.exports = {
  purge: {
    content: ["../../**/*.php", "../../../../plugins/cw-*/**/*.php"],
    // content: [],

    // These options are passed through directly to PurgeCSS
    layers: ["components", "utilities"],
    options: {
      safelist: {
        greedy: [
          /^flex/,
          /^lg:flex/,
          /^inline/,
          /^lg:inline/,
          /^container/,
          /^lg:container/,
          /^block/,
          /^lg:block/,
          /^object/,
          /^lg:object/,
          /^static/,
          /^lg:static/,
          /^relative/,
          /^lg:relative/,
          /^sticky/,
          /^lg:sticky/,
          /^fixed/,
          /^lg:fixed/,
          /^absolute/,
          /^lg:absolute/,
          /^top/,
          /^lg:top/,
          /^-top/,
          /^lg:-top/,
          /^left/,
          /^lg:left/,
          /^-left/,
          /^lg:-left/,
          /^right/,
          /^lg:right/,
          /^-right/,
          /^lg:-right/,
          /^bottom/,
          /^lg:bottom/,
          /^-bottom/,
          /^lg:-bottom/,
          /^inset/,
          /^lg:inset/,
          /^-inset/,
          /^lg:-inset/,
          /^order/,
          /^lg:order/,
          /^truncate/,
          /^lg:truncate/,
          /^overflow/,
          /^lg:overflow/,
          /^uppercase/,
          /^lg:uppercase/,
          /^lowercase/,
          /^lg:lowercase/,
          /^tracking/,
          /^lg:tracking/,
          /^break/,
          /^lg:break/,
          /^font/,
          /^lg:font/,
          /^whitespace/,
          /^lg:whitespace/,
          /^bg([a-z]?)-/,
          /^lg:bg([a-z]?)-/,
          /^items([a-z]?)-/,
          /^lg:items([a-z]?)-/,
          /^justify([a-z]?)-/,
          /^lg:justify([a-z]?)-/,
          /^m([a-z]?)-/,
          /^lg:m([a-z]?)-/,
          /^-m([a-z]?)-/,
          /^lg:-m([a-z]?)-/,
          /^p([a-z]?)-/,
          /^lg:p([a-z]?)-/,
          /^h([a-z]?)-/,
          /^lg:h([a-z]?)-/,
          /^min-h([a-z]?)-/,
          /^lg:min-h([a-z]?)-/,
          /^w([a-z]?)-/,
          /^lg:w([a-z]?)-/,
          /^min-w([a-z]?)-/,
          /^lg:min-w([a-z]?)-/,
          /^max-w([a-z]?)-/,
          /^lg:max-w([a-z]?)-/,
          /^text([a-z]?)-/,
          /^lg:text([a-z]?)-/,
          /^list([a-z]?)-/,
          /^lg:list([a-z]?)-/,
          /^border([a-z]?)-/,
          /^lg:border([a-z]?)-/,
          /^fill([a-z]?)-/,
          /^lg:fill([a-z]?)-/,
          /^has([a-z]?)-/,
          /^lg:has([a-z]?)-/,
          /^leading([a-z]?)-/,
          /^lg:leading([a-z]?)-/,
          /^rounded([a-z]?)-/,
          /^lg:rounded([a-z]?)-/,
          /^shadow([a-z]?)-/,
          /^lg:shadow([a-z]?)-/,
          /^z([a-z]?)-/,
          /^lg:z([a-z]?)-/,
          /^transform([a-z]?)-/,
          /^lg:transform([a-z]?)-/,
          /^translate([a-z]?)-/,
          /^lg:translate([a-z]?)-/,
          /^rotate([a-z]?)-/,
          /^lg:rotate([a-z]?)-/,
          /^scale([a-z]?)-/,
          /^lg:scale([a-z]?)-/,
          /^skew([a-z]?)-/,
          /^lg:skew([a-z]?)-/,
          /^transition([a-z]?)-/,
          /^lg:transition([a-z]?)-/,
          /^clear([a-z]?)-/,
          /^lg:clear([a-z]?)-/,
          /^float([a-z]?)-/,
          /^lg:float([a-z]?)-/,
          /^origin([a-z]?)-/,
          /^lg:origin([a-z]?)-/,
          /^opacity([a-z]?)-/,
          /^lg:opacity([a-z]?)-/,
        ],
      },
    },
  },

  theme: {
    colors: {
      transparent: "transparent",
      white: "var(--white)", // white: "#ffffff"
      black: "var(--black)", // black: "#000000"
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
      blue: "var(--blue)", // ultramarine: "#1000a9"
      "blue-dark": "var(--blue-dark)", // marine: "#052253"
      "blue-darker": "var(--blue-darker)", // navy: "#001235"
      "green-light": "var(--green-light)", // "toxic-green": "#35b41f"
      green: "var(--green)", // pine: "#143010"
      "green-dark": "var(--green-dark)", // "almost-black": "#11220e"
      gold: "var(--gold)", // "pale-brown": "#a19377"
      orange: "var(--orange)",
      "red-light": "var(--red-light)", // "reddish-pink": "#ff3154"
      red: "var(--red)", // "red-brown": "#801515"
      "red-dark": "var(--red-dark)", // mahogany: "#550000"
      yellow: "var(--yellow)", // "bright-yellow": "#fffa00"

      // main colours
      primary: "var(--blue-lighter)",
      secondary: "var(--blue-light)",
      tertiary: "var(--blue-lightest)",
      lighter: "var(--gray-100)",
      light: "var(--gray-400)",
      mid: "var(--gray-600)",
      dark: "var(--gray-800)",
      darker: "var(--gray-900)",
    },
    fontFamily: {
      body: "var(--font-body)",
      heading: "var(--font-heading)",
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
      },
      screens: {
        xl: "1380px",
      },
      padding: {
        container: "var(--p-container)", // container: "7vw",
        "container-lg": "var(--p-container-lg)", // "container-lg": "12vw",
        "container-xl": "var(--p-container-xl)", // "container-xl": "16vw",
        "container-2xl": "var(--p-container-2xl)", // "container-2xl": "20vw",
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
    require("@tailwindcss/forms"),
    require("tailwindcss-wp-text")(),
    require("tailwindcss-wp-background")(),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
