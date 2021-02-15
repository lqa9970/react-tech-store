import React, { useState } from "react";
import useStyles from "./checkoutStyles";
import {
  Card,
  Button,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";

const Checkout = ({ steps }) => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);

  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

  return (
    <AddressForm>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </AddressForm>
  );
};

export default Checkout;
