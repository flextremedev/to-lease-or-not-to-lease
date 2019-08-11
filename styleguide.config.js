// styleguide.config.js
const path = require("path");
module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/styleguide/ThemeWrapper"),
  },
  propsParser: require("react-docgen-typescript").withDefaultConfig().parse,
};
