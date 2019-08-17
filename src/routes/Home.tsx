import React from "react";
import { Page } from "../components/Page/Page";
import { Paragraph } from "../components/Paragraph/Paragraph";
import { Heading } from "../components/Heading/Heading";
export class Home extends React.Component {
  render() {
    return (
      <Page>
        <Heading h={1} invertColor>
          To lease or not to lease
        </Heading>
        <Paragraph>
          Finde heraus, ob es günstiger ist dein nächstes Auto zu leasen oder zu
          kaufen.
        </Paragraph>
      </Page>
    );
  }
}
