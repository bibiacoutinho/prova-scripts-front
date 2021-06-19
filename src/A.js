import React, { useContext } from 'react';
import {
  Grid,
  Button,
  Typography
} from "@material-ui/core";
import C from "./C";
import Contexto from './Contexto';

const A = () => {
  const { insert } = useContext(Contexto)
  return (
    <Grid container justify="center" direction="column" style={{ backgroundColor: '#F0EC80', padding: '10px' }}>
      <Grid container item direction="row">
        <Typography>Componente A:</Typography>
        <Button
          variant="contained"
          style={{ marginLeft: '10px', padding: '5px 10px' }}
          onClick={() => insert("A")}
        >
          Clicar
        </Button>
      </Grid>
      <Grid item style={{ marginTop: '10px' }}>
        <C />
      </Grid>
    </Grid>
  );
}

export default A;
