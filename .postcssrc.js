// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  // "parser": "postcss-strip-inline-comments",
  plugins: {
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: { overrideBrowserslist: ['> 0.15% in CN'] },
  },
}
