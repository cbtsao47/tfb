const withCss = require("@zeit/next-css");

module.exports = withCss({
  webpack(config, options) {
    // Further custom configuration here
    return config;
  }
});
