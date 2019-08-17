```js
const { SplitscreenLeft } = require("./SplitscreenLeft.tsx");
const { SplitscreenRight } = require("./SplitscreenRight.tsx");
const { Heading } = require("../Heading/Heading.tsx");
const { TextField } = require("../TextField/TextField.tsx");
<Splitscreen>
  <SplitscreenLeft>
    <Heading h={2}>h2</Heading>
    <TextField label="Textfield" />
  </SplitscreenLeft>
  <SplitscreenRight>
    <Heading h={2} invertColor>
      h2
    </Heading>
    <TextField label="Textfield" invertLabelColor />
  </SplitscreenRight>
</Splitscreen>;
```
