import React, { useContext } from 'react';
import {
  Button,
  Grid,
  Typography
} from "@material-ui/core";
import Contexto from './Contexto';

const C = () => {
  const { insert } = useContext(Contexto)
  return (
    <Grid container style={{ backgroundColor: '#FFCC80', padding: '10px' }}>
      <Grid container item direction="row">
        <Typography>Componente C:</Typography>
        <Button
          variant="contained"
          style={{ marginLeft: '10px', padding: '5px' }}
          onClick={() => insert("C")}
        >
          Clicar
        </Button>
      </Grid>
    </Grid>
  );
}

export default C;
