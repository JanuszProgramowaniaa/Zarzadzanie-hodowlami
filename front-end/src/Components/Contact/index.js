import React from "react"
import {Grid,Paper,TextField,Button} from '@material-ui/core'



export const Contact = () =>{
  const paperStyle={padding:50, height:'70vh', width:300, margin:"20px auto"}
  const btnStyle={margin:"20px 0"}
  const TextFieldStyle={margin:"20px 0"}


return(
  <Grid>
    <Paper elevation={10} style={paperStyle}> 
    <Grid align="center"> 
    <h2>Kontakt</h2>
    </Grid>
   
    <TextField style={TextFieldStyle} id="standard-basic1" label="Imie " fullWidth  />
    
    <TextField  id="standard-basic2" label="E-mail " fullWidth  />

    <TextField style={TextFieldStyle} id="standard-basic3" label="Wiadomość " multiline minRows={5} maxRows={5} fullWidth  />

      <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle}  >Wyślji wiadomość</Button>

    </Paper>
 
  </Grid>
);
};

