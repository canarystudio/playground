const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["../../**/*.php", "../../../../plugins/cw-*/**/*.php"],
  // Whitelist selectors to stop Purgecss from removing them from your CSS.

  whitelist: [
    "clear-both",
    "lg:-mb-32",
    "lg:-mt-32",
    "lg:flex-1",
    "lg:pl-container",
    "list-decimal",
    "pl-container",
    "svg-inline--fa",
    "xl:pl-container",
  ],
  whitelistPatterns: [
    /^border-./,
    /^fill-/,
    /^flex-/,
    /^lg:flex-/,
    /^font-/,
    /^h-/,
    /^lg:h-/,
    /^has-./,
    /^inline./,
    /^items-/,
    /^justify-/,
    /^lg:max-w-/,
    /^leading-./,
    /^m-/,
    /^lg:m-/,
    /^m.-/,
    /^lg:m.-/,
    /^-m.-/,
    /^max-w-/,
    /^p-/,
    /^lg:p-/,
    /^p.-/,
    /^lg:p.-/,
    /^rounded-sm/,
    /^shadow-./,
    /^text-./,
    /^text-./,
    /^hover:text-./,
    /^w-/,
    /^lg:w-/,
    /^z-/
  ],
  whitelistPatternsChildren: [/^fa-/],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")({
      overrideBrowserslist: ["> 1%", "last 2 versions"],
    }),
    ...(process.env.NODE_ENV === "production"
      ? [purgecss, require("cssnano")]
      : []),
  ],
};
