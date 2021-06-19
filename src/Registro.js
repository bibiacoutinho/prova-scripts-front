import React, { useContext } from 'react';
import {
  Grid, Typography
} from "@material-ui/core";
import Contexto from './Contexto';

const Registro = () => {
  const { registros, del } = useContext(Contexto)
  return (
    <Grid container direction="column" style={{ backgroundColor: '#E4F0FE', padding: "20px" }}>
      <Grid item>
        <Typography style={{ fontWeight: 'bold' }}>Registros:</Typography>
      </Grid>
      <Grid item style={{ maxHeight: '200px', overflow: 'auto' }}>
        {!registros.length ? <Typography style={{ fontWeight: 'bold' }}>Não há registros</Typography> : registros.map((item) => (
          <Typography
            style={{ fontWeight: 'bold' }}
            key={item.registro}
            onContextMenu={e => del(e, item.idregistro)}
          >
            {item.origem} - {item.datahorario}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
}

export default Registro;
