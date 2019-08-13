const path = require("path");
module.exports = {
  sections: [
    {
      name: "Introduction",
      content: "docs/Readme.md",
    },
    {
      name: "Components",
      components: "src/components/**/[A-Z]*.tsx",
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/styleguide/ThemeWrapper"),
  },
  propsParser: require("react-docgen-typescript").withCustomConfig(
    "./tsconfig.json"
  ).parse,
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
