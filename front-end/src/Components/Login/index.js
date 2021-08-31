import React,{useState} from "react"
import {Grid,Paper,Avatar,TextField,Button, Typography,Link} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export const Login = () =>{
  const paperStyle={padding:50, width:300, margin:"20px auto"}
  const avatarStyle={backgroundColor:"green"}
  const typographyStyle={fontSize:"13px"}
  const btnStyle={margin:"20px 0"}


  const [login,setLogin]=useState("")
  const [password,setPassword]=useState("")
  const [checkbox,setCheckbox]=useState(false)

  const handleChangeLogin= e =>{
    setLogin(e.target.value)
  }
  const handleChangePassword= e =>{
    setPassword(e.target.value)
  }
  const handleChangeCheckbox= () =>{
    setCheckbox(!checkbox)
  }


  const wypisz=()=>{

    const dane=[];
    dane.push(login,password,checkbox);

  alert(dane)
  
  }

return(
  <Grid>
    <Paper elevation={10} style={paperStyle}> 
    <Grid align="center"> 
    <Avatar style={avatarStyle}> <LockOutlinedIcon/> </Avatar>
    <h2>Logowanie</h2>
    </Grid>
   
    <TextField label="Login" placeholder="Wprowadź Login " fullWidth required value={login} onChange={handleChangeLogin} />
    <TextField label="Hasło" placeholder="Wprowadź hasło " type="password" fullWidth required value={password} onChange={handleChangePassword} />

    <FormControlLabel
        control={
          <Checkbox
            name="checkedone"
            color="primary"
             size="small"
             onClick={handleChangeCheckbox}
          />
        }
        label="Zapamiętaj"
      />
      <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle} onClick={wypisz}  >Zaloguj się</Button>
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

