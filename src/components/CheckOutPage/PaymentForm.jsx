import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="teal" name="COD" value="yes" checked={true} />}
            label="Cash On Delivery"
          />
        </Grid>
    </React.Fragment>
  );
}