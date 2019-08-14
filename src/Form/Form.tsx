import * as React from "react";
import { Grid } from "../components/Grid/Grid";
import { TextField } from "../components/TextField/TextField";
import { Button } from "../components/Button/Button";
import { Row } from "../components/Row/Row";
export const Form: React.FC = () => {
  return (
    <React.Fragment>
      <Grid>
        <Row>
          <TextField label="Finanzierungsrate" id="financing-rate" />
          <TextField label="Leasingrate" id="leasing-rate" />
        </Row>
        <TextField />
      </Grid>
      <Button>Berechnen</Button>
    </React.Fragment>
  );
};
