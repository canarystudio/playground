const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["../../**/*.php","../../../../plugins/**/*.php"],
  // Whitelist selectors to stop Purgecss from removing them from your CSS.
  
  whitelist: ['text-8xl','lg:text-8xl','text-6xl','lg:text-6xl','text-5xl','lg:text-5xl','text-4xl','lg:text-4xl','text-2xl','lg:text-2xl','text-3xl','lg:text-3xl','text-xl','lg:text-xl','text-xs','lg:text-sm','text-lg','lg:text-lg','svg-inline--fa','lg:flex-1','text-black','text-slate','text-marine','text-navy','text-light-navy','text-cerulean-blue','text-very-light-pink','text-off-white','text-pale-brown','text-ultramarine','text-bluey-grey','text-light-blue-grey','text-ice-blue','text-dark-grey','text-white','text-red-brown','text-mahogany','text-toxic-green','text-almost-black','text-bright-yellow','text-bright-sky-blue','text-reddish-pink','text-brownish-grey','text-dark','text-pine'],
  whitelistPatterns: [/^lg:max-w-/,/^max-w-/,/^fill-/,/^font-/,/^font-/,/^justify-/,/^items-/,/^flex-/,/^p-/,/^p.-/,/^m-/,/^m.-/,/^lg:p.-/,/^lg:m.-/,/^w-/,/^h-/],
  whitelistPatternsChildren: [/^fa-/],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require("tailwindcss"),
    require('autoprefixer')({
      'overrideBrowserslist': ['> 1%', 'last 2 versions']
    }),
    ...process.env.NODE_ENV === "production"
      ? [purgecss, require("cssnano")]
      : []
  ]
}

