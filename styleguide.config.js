// styleguide.config.js
const path = require("path");
module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/styleguide/ThemeWrapper"),
  },
  propsParser: require("react-docgen-typescript").withDefaultConfig().parse,
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap",
        },
      ],
    },
  },
};
