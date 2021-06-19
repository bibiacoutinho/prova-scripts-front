import React, { useContext } from 'react';
import {
  Button,
  Grid,
  Typography
} from "@material-ui/core";
import Contexto from './Contexto';

const D = () => {
  const { insert } = useContext(Contexto)
  return (
    <Grid container style={{ backgroundColor: '#83FAFB', padding: '10px' }}>
      <Grid container item direction="row">
        <Typography>Componente D:</Typography>
        <Button
          variant="contained"
          style={{ marginLeft: '10px', padding: '5px' }}
          onClick={() => insert("D")}
        >
          Clicar
        </Button>
      </Grid>
    </Grid>
  );
}

export default D;
