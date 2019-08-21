```js
const { Heading } = require("../Heading/Heading.tsx");
const { Paragraph } = require("../Paragraph/Paragraph.tsx");
const { Button } = require("../Button/Button.tsx");
const { CardFooter } = require("../Card/CardFooter.tsx");
const { CardBody } = require("../Card/CardBody.tsx");
<Card>
  <CardBody usePadding>
    <Heading h={2}>Heading</Heading>
    <Paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </Paragraph>
  </CardBody>
  <CardFooter>
    <Button>Button</Button>
  </CardFooter>
</Card>;
```
