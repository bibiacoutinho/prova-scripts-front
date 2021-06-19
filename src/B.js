import React, { useContext } from 'react';
import {
  Grid,
  Button,
  Typography
} from "@material-ui/core";
import D from "./D";
import Contexto from './Contexto';

const B = () => {
  const { insert } = useContext(Contexto)
  return (
    <Grid container justify="center" direction="column" style={{ backgroundColor: '#DCEDC8', padding: '10px' }}>
      <Grid container item direction="row">
        <Typography>Componente B:</Typography>
        <Button
          variant="contained"
          style={{ marginLeft: '10px', padding: '5px 10px' }}
          onClick={() => insert("B")}
        >
          Clicar
        </Button>
      </Grid>
      <Grid item style={{ marginTop: '10px' }}>
        <D />
      </Grid>
    </Grid>
  );
}

export default B;
