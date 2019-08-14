import React from "react";
import { Page, PageContent } from "../components/Page/Page";
import { Header } from "../components/Header/Header";
import { ContentArea } from "../components/ContentArea/ContentArea";
import { Form } from "../Form/Form";
export class Home extends React.Component {
  render() {
    return (
      <Page>
        <Header />
        <PageContent>
          <ContentArea>
            <Form />
          </ContentArea>
        </PageContent>
      </Page>
    );
  }
}
