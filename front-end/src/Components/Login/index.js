import React from "react"
import {Grid,Paper,Avatar,TextField,Button, Typography,Link} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export const Login = () =>{
  const paperStyle={padding:50, height:'70vh', width:300, margin:"20px auto"}
  const avatarStyle={backgroundColor:"green"}
  const typographyStyle={fontSize:"13px"}
  const btnStyle={margin:"20px 0"}

return(
  <Grid>
    <Paper elevation={10} style={paperStyle}> 
    <Grid align="center"> 
    <Avatar style={avatarStyle}> <LockOutlinedIcon/> </Avatar>
    <h2>Logowanie</h2>
    </Grid>
   
    <TextField label="Login" placeholder="Wprowadź Login " fullWidth required/>
    <TextField label="Hasło" placeholder="Wprowadź hasło " type="password" fullWidth required/>

    <FormControlLabel
        control={
          <Checkbox
            name="checkedone"
            color="primary"
             size="small"
          />
        }
        label="Zapamiętaj"
      />
      <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle}  >Zaloguj się</Button>
<Typography style={typographyStyle}>
<Link href="#">
Zapomniałeś hasła ?
</Link>

  
</Typography>

<Typography style={typographyStyle}>Posiadasz konto ?
<Link href="#">
Zarejestruj się
</Link>

  
</Typography>
    </Paper>
 
  </Grid>
);
};

