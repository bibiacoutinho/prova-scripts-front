import A from "./A";
import B from "./B";
import Registro from "./Registro";
import React, { useEffect, useState } from 'react';
import Contexto from "./Contexto";
import api from './api';
import {
  Button,
  Grid,
  Typography,
  Tooltip
} from "@material-ui/core";

const App = () => {
  const select = () => {
    console.log("oiiii")
    api
      .get("/select")
      .then(r => {
        console.log(r.data)
        setRegistros(r.data.rows)
      })
      .catch(e => console.log(e.message))
  }

  const del = (e, componente) => {
    e.preventDefault();
    api
      .get(`/del/${componente}`)
      .then(r => {
        console.log(r.data)
        select()
      })
      .catch(e => console.log(e.message))
  }

  const insert = (componente) => {
    api
      .get(`/insert/${componente}`)
      .then(r => {
        console.log(`olha o insert: ${r.data}`)
        select()
      })
      .catch(e => console.log(e.message))
  }
  const [registros, setRegistros] = useState([]);

  useEffect(() => { select() }, [])

  return (
    <Contexto.Provider value={{ insert, registros, del }}>
      <Grid container justify="center">
        <Tooltip title="Clique com botão direito no registro para apagar" arrow>
          <Grid item container
            style={{ backgroundColor: '#FBCDD2', padding: '15px' }}
            xs={12}
            sm={9}
            md={6}
            lg={4}
            alignItems="center"

          >
            <Grid container item direction="row" style={{ marginBottom: '10px' }}>
              <Typography>Componente App:</Typography>
              <Button
                variant="contained"
                style={{ marginLeft: '10px', padding: '5px' }}
                onClick={() => insert("X")}
              >
                Clicar
              </Button>
            </Grid>
            <Grid container item style={{ marginBottom: '10px' }}>
              <Grid item xs={6}>
                <A />
              </Grid>
              <Grid item xs={6}>
                <B />
              </Grid>
            </Grid>
            <Registro />
          </Grid>
        </Tooltip>
      </Grid>
    </Contexto.Provider>
  );
}

export default App;
